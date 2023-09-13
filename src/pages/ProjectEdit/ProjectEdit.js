import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import './ProjectEdit.css'
import Load from '../../layout/Load';
import Container from '../../layout/Container';

import Input from '../../components/Form/input/Input'
import Select from '../../components/Form/Select/Select'
import FLbutton from '../../components/Form/FLbutton/FLbutton'


const ProjectEdit = () => {
  const {id} = useParams();
  const [project,setProject] = useState([]);
  const [showProjectForm,setShowProjectForm] = useState(false);
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(resp => resp.json())
    .then(data => {setCategoria(data)})
    .catch((err) => console.log(err))
  },[])

  useEffect(() => {
    setTimeout(()=>{
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
    },5000)  
  },[id])

  function toggleProjectForm(){
    setShowProjectForm(!showProjectForm);
  }
  function handleCategory(e){
    setProject({
      ...project,
      category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    }})
  }
  const submit = (e) => {
    e.preventDefault()
    console.log(project)
  }
  function handleChange(e){
    setProject({...project,[e.target.name]:[e.target.value]})
  }
 
  
  return (
    <div>
      {project && project.name?(
        <div className='project_details'>
          <Container customClass="column">
            <div className='details_container'>
              <h1>Projeto: {project.name}</h1>
              <button onClick={toggleProjectForm} className='btn-link'>
                {!showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div  className='proj_info'>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total:</span> R${project.cots}
                  </p>
                </div>
              ):(
                <div  className='proj_info'>
                  <section className='sform'>
                    <form onSubmit={submit}>
                      <Input
                        name={"name"}
                        type={"text"}
                        placeholder={"Insira o nome do projeto"}
                        text={"Nome do Projeto"}
                        handleOnChange={handleChange}
                        value={project.name ? project.name : ''}
                      ></Input>
                      <Input  
                        type={"number"}
                        name={"budget"}
                        placeholder={"Insira o orçamento total"} 
                        text={"Orçamento do projeto"}
                        handleOnChange={handleChange}
                        value={project.budget ? project.budget : ''}
                      ></Input>
                      <Select
                        options={categoria}
                        text={"Selecione a Categoria"}
                        name={"categoria_id"}
                        handleOnChange={handleCategory}
                        value={project.category ? project.category.id : ''}
                      ></Select>
                      <FLbutton text={"Concluir Edição"} ></FLbutton>
                    </form>
                  </section>
                </div>
              )}
            </div>    
          </Container>
        </div>
      ):(
        <Load/>
      )}
    </div>
  )
}

export default ProjectEdit