import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <React.Fragment>
<div className='bg-sec'>
  <button className="lang"> العربية</button>


</div>
<div className=" flex-between bg-sec">
  <span> BIG RAMY</span>
  <div>
  <Link to="signUp">Sign Up</Link>
  <Link to="signIn">Sign In</Link>
  </div>

</div>
  
    <nav className='nav'>

        <ul className='flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="news">news</Link></li>
            <li><Link to="courses">courses</Link></li>
            <li><Link to="books">E-books</Link></li>
            <li><Link to="contact">contact us</Link></li>
        </ul>
        </nav>
        </React.Fragment>
  )
}

export default Nav