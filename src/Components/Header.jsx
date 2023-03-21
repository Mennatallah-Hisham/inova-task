import React from 'react'

const Header = () => {

    function scrollTO(){
        const element =   document.querySelector(".about")
       
        if (element) {
         
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
<header>

<p className='sub-heading'>training courses,books</p>
    <h1>make your healthy strong is our responsiblility
  
    </h1>
    <button onClick={scrollTO}>
        about us
    </button>

    </header>
  )
}

export default Header;