import React from 'react'
import styledComponents from 'styled-components'
import { Span } from '../Components/Text'
import ImgGmail from '../images/gmail.png'
const Footer = () => {
  return (
    <Contain>
        <Spans>Contact: inadrian23@gmail.com</Spans>
        <Img src={ImgGmail}></Img>
    </Contain>
  )
}

const Contain = styledComponents.div`
margin-top:1em;
background:#000000c2;
padding:2em;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
const Spans = styledComponents(Span)`
color:white;
margin:0em 1em 0em 1em;
`
const Img = styledComponents.img`
width:1.5em;
height:1.5em;
`


export default Footer