import React,{useEffect,useState} from 'react'
import './Newprj.css'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Form/input/Input'
import Select from '../../components/Form/Select/Select'
import FLbutton from '../../components/Form/FLbutton/FLbutton'

const NewPrj = () => {
  const [categoria, setCategoria] = useState([]);
  const history = useNavigate();
  const [project,setProject] = useState({});

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

  function createPost(project){
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects',{
      method: 'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json)
    .then(
      history('/Project')
    ).catch((err) => console.log(err))
  }
  const submit = (e) => {
    e.preventDefault()
    createPost(project)
  }
  function handleChange(e){
    setProject({...project,[e.target.name]:[e.target.value]})
  }
  function handleCategory(e){
    setProject({
      ...project,
      category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    }})
  }

  return (
    <section className='sform'>
      <h1> Criar Projeto </h1>
      <p>Crie Projetos para depois adicionar os serviços</p>
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
        <FLbutton text={"Criar Projeto"} ></FLbutton>
      </form>
    </section>
  )
}

export default NewPrj