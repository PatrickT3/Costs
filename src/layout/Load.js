import React from 'react'
import "./Load.css"
import loading from "../../src/img/loading.svg"

const Load = () => {
  return (
    <div className="loader_container">
        <img className="loader" src={loading} alt="Loading" />
    </div>
  )
}

export default Load