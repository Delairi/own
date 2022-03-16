import styled from 'styled-components'


const Span = styled.span`
font-family:${props => props.theme.Fonts.nav};
font-weight:600;
`
const Title = styled.h1`
font-family:${props => props.theme.Fonts.nav};
`
const Subtitle = styled.h2`
font-family:${props => props.theme.Fonts.nav};
color:black;
font-weight:600;
`
const Linkeador = styled.a`
font-family:${props => props.theme.Fonts.nav};
font-weight:600;
text-decoration:none;
color:black;
`

export {Span,Title,Linkeador,Subtitle}