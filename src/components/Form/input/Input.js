import './Input.css'

function Input({type,text,name,placeholder,handleOnChange,value}){
    return(
        <div className='form-control'>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                onChange={handleOnChange} 
                id={name}
                value={value}
            />
        </div>
    )
}

export default Input