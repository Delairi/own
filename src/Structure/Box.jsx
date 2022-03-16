import React,{useEffect,useState} from 'react'
import styledComponents from 'styled-components'
import { Subtitle } from '../Components/Text'
import ImgLink from '../images/link.png'
import ImgDescription from '../images/description.png'
import '../Style.css'
const Box = ({Link,Title,Des,Id}) => {

    const [Preview, setPreview] = useState(false)
    const [Click, setClick] = useState(false)
  return (
    <Contorno >
        <Sub>{Title}</Sub>
        <Button onClick={()=>{
            setClick(!Click)
        }}><Cajita id={Id}>
        </Cajita></Button>
        <Row clickaso={Click}>
        <a href={Link} target='_blank'><Img src={ImgLink}/></a>
        <ButtonD onClick={()=>{
            setPreview(!Preview)
        }}><Img src={ImgDescription}/></ButtonD>
        </Row>
        <Descripcion show={Preview}>
            {Des}
        </Descripcion>
    </Contorno>
  )
}
const Sub = styledComponents(Subtitle)`
text-align:center;
`
const Contorno = styledComponents.div`
width:22em;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
box-shadow:0px 2px 3px black;
margin:1em;
padding-top:1em;
border-radius:1em;
font-family:${props => props.theme.Fonts.text};


`

const Cajita = styledComponents.div`
background-size:contain;
background-repeat:no-repeat;
width: 300px;
height:10em;
margin:1em 0em 1em 0em;
@media ${props => props.theme.mediaQueries['mediaCel']}{
    width: 280px;
    height:8em;
    background-position:center;
    
}

`

const Contenido = styledComponents.div`

`
const Descripcion = styledComponents.div`
margin:1em;
display:${props => props.show ? 'flex':'none'};
position:relative;
top:-2em;
font-weight:600;
`

const Img = styledComponents.img`
width:1.5em;
height:1.5em;
margin:0em 1em 0em 1em;
z-index:1;
filter:invert(100%);

`

const Row = styledComponents.div`
display:${props => props.clickaso ? 'flex': 'none'};
flex-direction:row;
justify-content:center;
align-items:center;
position:relative;
top:-8em;
`

const ButtonD = styledComponents.button`
border:none;
background:none;
font-size:1em;
cursor:pointer;
`
const Button = styledComponents.button`
border:none;
background:none;
font-size:1em;
cursor:pointer;
&:hover{
    ${Cajita}{
        transform:scale(1.1);
        transition: all 0.5s ease-in-out;
        filter:blur(2px);
    }
}
`
export default Box