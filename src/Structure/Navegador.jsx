import React from 'react'
import styled from 'styled-components'
import Myphoto from '../images/myphoto.jpg'
import Background from '../images/background.jpg'
import {Linkeador} from '../Components/Text'
const Navegador = () => {
  return (
      <>
    <Nav>
        <Column>
        <Span href='#about'>About me</Span>
        <Span href='#skills'>Skills</Span>
        </Column>
        <Backg>
        <Img src={Myphoto}/>     
        </Backg>
        <Column>
        <Span href='#public'>Projects</Span>
        <a href='https://www.codechef.com/users/delairi' target='_blank'>Codechef</a>
        </Column>
     
    </Nav> 
    </>
  )
}
const Nav = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
height:100vh;
background:url(${Background}) no-repeat fixed center;
@media ${props => props.theme.mediaQueries['mediaCel']}{
  flex-direction:column;
  height:100vh;
}
a{
  
  font-family:${props => props.theme.Fonts.nav};
  margin:3em 0em 3em 0em;
  font-size:1.5em;
  @media ${props => props.theme.mediaQueries['mediaCel']}{
    margin:1em 0em 1em 0em;
  }
}
`

const Column = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Backg = styled.div``
const Img = styled.img`
width:25em;
height:25em;
border-radius:50%;
@media ${props => props.theme.mediaQueries['mediaCel']}{
  width:55vw;
  height:55vw;
}
`
const Span = styled(Linkeador)`
margin:3em 0em 3em 0em;
font-size:1.5em;
`

export default Navegador