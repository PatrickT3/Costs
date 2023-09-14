import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {parse, v4 as uuidv4} from 'uuid'
import './ProjectEdit.css'

import Load from '../../layout/Load';
import Container from '../../layout/Container';
import Message from '../../layout/Message';

import Input from '../../components/Form/input/Input'
import Select from '../../components/Form/Select/Select'
import FLbutton from '../../components/Form/FLbutton/FLbutton'
import ServiceForm from '../../components/service/ServiceForm';


const ProjectEdit = () => {
  const {id} = useParams();
  const [project,setProject] = useState([]);
  const [showProjectForm,setShowProjectForm] = useState(false);
  const [showServiceForm,setShowServiceForm] = useState(false);
  const [categoria, setCategoria] = useState([]);
  const [message,setMessage] = useState();
  const [type,setType] = useState();


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
    },500)  
  },[id])

  function toggleProjectForm(){
    setShowProjectForm(!showProjectForm);
  }
  function toggleServiceForm(){
    setShowServiceForm(!showServiceForm);
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
    setMessage('')
    if (project.budget < project.cost){
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`,{
      method: 'PATCH', 
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(project),
    })
    .then(resp => resp.json())
    .then(
      data => {
        setProject(data)
        setShowProjectForm(false)
        setMessage('Projeto atualizado!')
        setType('success')
      }
    ).catch(err => console.log(err))
  }
  function handleChange(e){
    setProject({...project,[e.target.name]:[e.target.value]})
  }
  function createService(proj){
    const lastService = proj.services[proj.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(proj.cost) + parseFloat(lastServiceCost)
   
    if (newCost > parseFloat(proj.budget)){
      alert("Orçamento ultrapassado")
      proj.services.pop()
      return false
    }

    proj.cost = newCost

    fetch(`http://localhost:5000/projects/${proj.id}`,{
      method:'PATCH',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(proj),
    }).then(resp => resp.json()).then(data =>{
      setMessage("success")
      setType('success')
    }).catch(err => console.log(err))
  }
 
  
  return (
    <div>
      {project && project.name?(
        <div className='project_details'>
          <Container customClass="column">
            {message && <Message type={type} msg={message}/>}
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
                    <span>Total:</span> R${project.cost}
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
            <div className='service_form_container'>
                <h2>Adicione um serviço</h2>
                <button className='btn-link' onClick={toggleServiceForm}>
                  {!showServiceForm ? 'Adicionar serviço':'Fechar'}
                </button>
                <div className='proj_info'>
                  {showServiceForm && (
                    <ServiceForm 
                      handleSubmit={createService}
                      btnText={"Adicionar serviço"}
                      projectData={project}
                    />
                  )}
                </div>
            </div>   
            <div>
              <h2>Serviços</h2>
              <Container customClass="start">
                <p>Itens de serviço</p>
              </Container>
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