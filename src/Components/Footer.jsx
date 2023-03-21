import React from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';
const Footer = () => {
  return (
  <footer className='footer'>
<CTA/>
  

    <div className='flex'>
    <div className='footer-txt'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis optio eius, aliquam itaque suscipit minima harum nemo nam ab dolorum ipsum sint! Molestiae ea rerum quae esse! Tempore, eligendi expedita.</p>
        <p> follow us on</p>
        <ul>
            <li><a href="">twitter</a></li>
            <li><a href="">linkedin</a></li>
            <li><a href="">instagram</a></li>
        </ul>
    </div>
 <ul>
    <li><Link to="news">News</Link></li>
    <li><Link to="tournaments">Tournaments</Link></li>
    <li><Link to="courses">Courses</Link></li>
    <li><Link to="books">E-books</Link></li>
 </ul>
 <ul>
  
    <li><Link to="privacy">Privacy policies</Link></li>
    <li><Link to="terms&conditions">Terms & Conditions</Link></li>
    <li><Link to="contact">Contact Us</Link></li>
 </ul>
    </div>

  </footer>
  )
}

export default Footer