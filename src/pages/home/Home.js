import React from 'react'
import pig from '../../img/savings.svg';
import LButton from '../../components/LinkButton/Lbutton';
import './Home.css';

const Home = () => {
  return (
    <section className='homeContainer'>
      <h1>Bem vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!!</p>
      <LButton to="/NewProj" text="Criar Projeto"></LButton>
      <img src={pig} alt="PIG" />
    </section>
  )
}

export default Home