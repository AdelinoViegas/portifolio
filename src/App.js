import React from 'react';
import Header from './Componentes/header';
import SectionHeader from './Componentes/sectionHeader'
import Section1 from './Componentes/section01'
import Section2 from './Componentes/section02'
import Section3 from './Componentes/section03'
import Section4 from './Componentes/section04'
import './css/sections.css'
import './css/media.css'

export default function App() {
  return (
    <>
      <Header />
      <SectionHeader />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  )
}