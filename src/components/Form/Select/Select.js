import React from 'react'
import './Select.css'

const Select = ({text,name,options,handleOnChange,value}) => {
  return (
    <div className='Sdiv'>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} className='Scss'>
            <option value="" disabled selected >{text}</option>
            {options && Array.isArray(options) && // Verificação de options
              options.map(option => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
        </select>
    </div>
  )
}

export default Select
