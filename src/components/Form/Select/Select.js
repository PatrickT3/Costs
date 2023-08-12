import React from 'react'
import './Select.css'

const Select = ({text,name,options,handleOnChange,value}) => {
  return (
    <div className='Sdiv'>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} className='Scss'>
            <option disabled >selecine a categoria</option>
        </select>
    </div>
  )
}

export default Select