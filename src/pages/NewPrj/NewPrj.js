import React,{useEffect,useState} from 'react'
import './Newprj.css'
import Input from '../../components/Form/input/Input'
import Select from '../../components/Form/Select/Select'
import FLbutton from '../../components/Form/FLbutton/FLbutton'

const NewPrj = () => {
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


  return (
    <section className='sform'>
      <h1> Criar Projeto </h1>
      <p>Crie Projetos para depois adicionar os serviços</p>
      <form >
        <Input
          name={"name"}
          type={"text"}
          placeholder={"Insira o nome do projeto"}
          text={"Nome do Projeto"}
        ></Input>
        <Input  
          type={"number"}
          name={"budget"}
          placeholder={"Insira o orçamento total"} 
          text={"Orçamento do projeto"}
        ></Input>
        <Select
          options={categoria}
          text={"Selecione a Categoria"}
          name={"categoria_id"}
        ></Select>
        <FLbutton text={"Criar Projeto"} ></FLbutton>
      </form>
    </section>
  )
}

export default NewPrj