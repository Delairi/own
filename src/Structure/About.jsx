import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { Span } from '../Components/Text'
const About = () => {
  return (
    <Contenedor id='about'>
    <Spans>I'm student of electrical engineering, self-taught with a lot of knowledge about programming, I like to compete on Codechef, I've done many projects in the field of web development but I also have projects on mobile applications and games.</Spans>
    </Contenedor>
  )
}



const Contenedor = styled.div`
display:flex;
flex-direction:column;
margin-top:3em;
text-align:justify;
align-items:center;
justify-content:center;
`
const Spans = styled(Span)`
margin:5em;
width:27em;
height:27em;
background:${props => props.theme.Color.aboutBefore};
padding:1em;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
@media ${props => props.theme.mediaQueries['mediaCel']}{
  width:75vw;
  height:75vw;
  text-align:center;
}
&:hover{
  transform:scale(1.15);
  transition: all 0.5s ease-in-out;
  background:${props => props.theme.Color.aboutAfter};
  color:white;
  font-size:1.1em;
}
`

export default About