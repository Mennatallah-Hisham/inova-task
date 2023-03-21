import React from 'react'
import Header from '../Components/Header'
import LatestNews from '../Components/News/LatestNews'
import About from '../Components/Sections/About'

const Home = () => {
  return (

    <div>
        <Header/>
        <LatestNews/>
        <About/>
    </div>
  )
}

export default Home