import { useState } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Global from './Global';
function App() {

  return (
    <Contenedor>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Global/>}></Route>
      </Routes>
      </BrowserRouter>
    </Contenedor>
  )
}

const Contenedor = styled.div`

`



export default App
