import React from 'react';
import Home from './Componentes/home.js'
import Section0 from './Componentes/section0'
import Section01 from './Componentes/section01'
import Section02 from './Componentes/section02'
import Section03 from './Componentes/section03'
import Section04 from './Componentes/section04'

/*css*/
import './Componentes/sections.css'

/* Responsividade*/
import './medias/media.css'

export default function App(){

  return(
    <>
      <Home/>
      <Section0/>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
    </>
  )
}