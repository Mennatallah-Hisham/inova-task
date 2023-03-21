import React from 'react';
import Nav from '../Components/Nav';
import {Outlet} from "react-router-dom";
import Footer from '../Components/Footer';

const Layout = () => {
  return (
<React.Fragment>
  <Nav/>
  <main>
  <Outlet/>
  </main>
  <Footer/>


</React.Fragment>

  )
}

export default Layout