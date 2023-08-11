import React from 'react';
import './Footer.css';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='fooo'>
      <ul className='ul-princ'>
        <li className='sinbol'><FaFacebook/></li>
        <li className='sinbol'><FaInstagram/></li>
        <li className='sinbol'><FaLinkedin/></li>
      </ul>
      <p><span>Costs</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer