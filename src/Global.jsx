import React from 'react'
import About from './Structure/About'
import Navegador from './Structure/Navegador'
import Public from './Structure/Public'
import Skills from './Structure/Skills'
import { Subtitle } from './Components/Text'
import styledComponents from 'styled-components'
import Footer from './Structure/Footer'

const Global = () => {
  return (
    <>
    <Navegador/>
    <About/>
    <Skills/>
    <Ad>
    <Sub>Projects</Sub>
    </Ad>
    <Public/>
    <Footer></Footer>
    </>
  )
}
const Sub = styledComponents(Subtitle)`
text-align:center;
color:black;
`
const Ad = styledComponents.div`
background:#dff8db;
padding:1em;
margin:1em 0em 2em 0em;
`

export default Global