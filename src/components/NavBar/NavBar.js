import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/costs_logo.png';

const NavBar = () => {
  return (
    <div className='divHeader'>
        <Link to="/" className='imgShine'><img src={logo} alt="costs" /></Link>
        <ul className='menu'>
          <li ><Link to="/" className='links'>Home</Link></li>
          <li ><Link to="/Contact" className='links'>Contact</Link></li>
          <li ><Link to="/Company" className='links'>Company</Link></li>
          <li ><Link to="/Project" className='links'>Project</Link></li>
        </ul>
    </div>
  )
}

export default NavBar