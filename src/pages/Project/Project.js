import React from 'react'
import Message from '../../layout/Message'
import { useLocation } from 'react-router-dom'

const Project = () => {
  const location = useLocation()
  let message = ''

  if (location.state){
    message = location.state.message
  }

  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && <Message msg={message} type={"success"}/>}
    </div>
  )
}

export default Project