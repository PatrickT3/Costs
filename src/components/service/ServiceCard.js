import React from 'react'
import './ServiceCard.css'
import {BsFillTrashFill} from 'react-icons/bs'

const ServiceCard = ({id, name, cost, description, handleRemove}) => {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id,cost)
    }

  return (
    <div className='project_card'>
        <h4>{name}</h4>
        <p>
            <span>Custo Total:</span> R$ {cost}
        </p>
        <p>{description}</p>
        <div className='project_card_action'>
            <button onClick={remove}>
                <BsFillTrashFill/>
                Excluir
            </button>
        </div>
    </div>
  )
}

export default ServiceCard