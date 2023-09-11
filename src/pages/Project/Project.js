import React, { useState,useEffect} from 'react'
import Message from '../../layout/Message'
import { useLocation } from 'react-router-dom'
import './Project.css'
import Container from '../../layout/Container'
import LinkButton from '../../components/LinkButton/Lbutton'
import ProjectCard from '../../layout/ProjectCard'

const Project = () => {
  const location = useLocation()
  const [projects,setProjects] = useState([])

  let message = ''

  if (location.state){
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='project_container'>
      <div className='tittle_container'>
        <h1>Meus Projetos</h1>
        <LinkButton to="/NewProj" text="Novo Projeto"></LinkButton>
      </div>
      {message && <Message msg={message} type={"success"}/>}
      <Container customClass="start">
        {projects.length > 0 && 
          projects.map((project) => <ProjectCard 
            id={project.id} 
            name={project.name} 
            budget={project.budget}
            category={project.category.name}
            key={project.id}
          />)
        }
      </Container>
    </div>
  )
}

export default Project