import React from 'react'
import Header from '../../components/Header'
import Home from '../../components/Home'
import Blog from '../../components/Blog'
import SobreApp from '../../components/SobreApp'
import MasAdelante from '../../components/MasAdelante'
import Acceder from '../../components/Acceder'
import Footer from '../../components/Footer'

const Inicio = () => {
  return (
    <>
        <Header/>
        <div id='home'>
          <Home/>
        </div>
       <div id='blog'>
        <Blog/>
       </div>
        
        <SobreApp/>
        <MasAdelante/>
        <Acceder/>
        <Footer/>
    </>
  )
}

export default Inicio