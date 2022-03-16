import { useState,useEffect } from 'react'
import styledComponents from 'styled-components'
import Box from './Box'


const Public = () => {

    const [Preview, setPreview] = useState(false)
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(!Loading)
    }, [Preview])
    
    
  return (
    <Contenedor  id='public'>
     <Box Link='https://www.youreasylanguage.com/'
          Title='Your Easy Language'
          Des='Website made in 2020 with react on the frontend, nodejs and express on the backend and firebase and google cloud as database. Also i used sockets from socket.io'
          Id='yel'
     ></Box>

    <Box Link='https://delairi.github.io/amazonprimeclone/'
          Title='Prime Video Clon'
          Des='Made with Vite y React'
          Id='prime'
     ></Box>

    <Box Link='https://www.anotanotas.com/'
          Title='Anotanotas'
          Des='Made with React, Firebase, Nodejs, Express, Babel, Webpack y styled-components. Deployed in App Engine from Google Cloud'
          Id='anota'
     ></Box>

      <Box Link='https://play.google.com/store/apps/details?id=com.adrian.youreasylanguagev4'
          Title='Your Easy Language - Play Store'
          Des='Mobile app made with Kotlin and Firebase in Android Studio'
          Id='cel'
     ></Box>
        
        </Contenedor>
  )
}

const Contenedor = styledComponents.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:space-evenly;
justify-content:space-evenly;
`


export default Public