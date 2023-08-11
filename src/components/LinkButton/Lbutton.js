import React from 'react';
import {Link} from 'react-router-dom';
import './Lbutton.css';

const Lbutton = ({to,text}) => {
  return (
    <div>
        <Link to={to} className='btn-link'>{text}</Link>
    </div>
  )
}

export default Lbutton