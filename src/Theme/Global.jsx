import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
html{
    height:100%;
}

*{
    margin:0;
    padding:0;
}

a{
    text-decoration:none;
    color:black;
    font-weight:600;
}
`

export default Global
