import React from 'react'
import './Newprj.css'

const NewPrj = () => {
  return (
    <section className='sform'>
      <h1> Criar Projeto </h1>
      <p>Crie Projetos para depois adicionar os serviços</p>
      <form >
        <div>
          <input type="text" placeholder='insira o nome do projeto'/>
        </div>
        <div>
          <input type="number" placeholder='insira o orçamento'/>
        </div>
        <div>
          <select name="category_id">
            <option disabled >selecine a categoria</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Criar Projeto"/>
        </div>
      </form>
    </section>
  )
}

export default NewPrj