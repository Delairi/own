import styled from 'styled-components'
import ImgHtml from '../images/html.png'
import ImgC from '../images/c.png'
import ImgPython from '../images/python.png'
import ImgCss from '../images/css.png'
import ImgReact from '../images/react.png'
import ImgMysql from '../images/mysql.png'
import ImgGit from '../images/github.png'
import ImgPhp from '../images/php.png'
import ImgKotlin from '../images/kotlin.svg'
import ImgNodejs from '../images/nodejs.png'
import ImgFirebase from '../images/firebase.svg'
import ImgJs from '../images/js.png'
import ImgGoogle from '../images/google.svg'
import { Span } from '../Components/Text'
import { keyframes } from 'styled-components'
const Skills = () => {
  return (
    <Contenedor id='skills'>
        <Main>
            <Spans>Longer usage time</Spans>
            <Front>
            <Img src={ImgHtml}></Img>
            <Img src={ImgCss}></Img>
            <Img src={ImgReact}></Img>
            <Img src={ImgJs}></Img>
            </Front>
            <Back>
            <Img src={ImgFirebase}></Img>
            <Img src={ImgGit}></Img>
            <Img src={ImgNodejs}></Img>
            <Img src={ImgGoogle}></Img>
            </Back>
       
        
        </Main>
        <Nomain>
        <Spans>Familiar with</Spans>
        <Back>
        <Img src={ImgC}></Img>
        <Img src={ImgPython}></Img>
        <Img src={ImgMysql}></Img>
        <Img src={ImgPhp}></Img>
        <Img src={ImgKotlin}></Img>
        
        </Back>
        </Nomain>
        
        

    </Contenedor>
  )
}

const Up = keyframes`
0% {
  -webkit-transform: scale(1) rotateY(0);
          transform: scale(1) rotateY(0);
}
50% {
  -webkit-transform: scale(2) rotateY(180deg);
          transform: scale(2) rotateY(180deg);
}
100% {
  -webkit-transform: scale(1) rotateY(360deg);
          transform: scale(1) rotateY(360deg);
}
`

const Contenedor = styled.div`
padding:3.5em 0em 3.5em 0em;
`
const Spans = styled(Span)`
text-align:center;
margin-bottom:1em;
font-size:1.3em;
`


const Main = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`
const Front = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
flex-wrap:wrap;
align-items:space-evenly;
margin:1em 0em 3em 0em;

`
const Back = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
flex-wrap:wrap;
align-items:space-evenly;
margin:1em 0em 3em 0em;
`
const Nomain = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`


const Img = styled.img`
width:4em;
height:4em;
box-shadow:0px 5px 3px gray;
padding:0.7em;
border-radius:50%;
object-fit:contain;
@media ${props => props.theme.mediaQueries['mediaCel']}{
  margin:1em 2em 1em 2em;
}
&:hover{
  opacity:0.5;
  animation: ${Up} 1s ease-in-out both;
}
`
export default Skills