import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import './ProjectEdit.css'


const ProjectEdit = () => {
  const {id} = useParams();
  const [project,setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`,{
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
      },
    })
    .then(resp => resp.json())
    .then(data => {
      setProject(data)
    })
    .catch(erro => console.log(erro))
  },[id])

  return (
    <div>
      {project.name}
    </div>
  )
}

export default ProjectEdit