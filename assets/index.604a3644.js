import{W as I,s as n,j as f,r as m,U as $,B as C,R as S,a as F,b as L,c as P,F as B}from"./vendor.831fe5ff.js";const A=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function d(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=d(o);fetch(o.href,r)}};A();var R={Color:{nav:"Black",aboutBefore:"#dff8db",aboutAfter:"#71f491"},Fonts:{nav:"'Poiret One', cursive",text:"'Poiret One', cursive"},mediaQueries:{mediaCel:"only screen and (max-width:800px)"}};const z=I`
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
`,p=n.span`
font-family:${t=>t.theme.Fonts.nav};
font-weight:600;
`;n.h1`
font-family:${t=>t.theme.Fonts.nav};
`;const y=n.h2`
font-family:${t=>t.theme.Fonts.nav};
color:black;
font-weight:600;
`,D=n.a`
font-family:${t=>t.theme.Fonts.nav};
font-weight:600;
text-decoration:none;
color:black;
`,e=f.exports.jsx,i=f.exports.jsxs,x=f.exports.Fragment,M=()=>e(N,{id:"about",children:e(Y,{children:"I'm student of electrical engineering, self-taught with a lot of knowledge about programming, I like to compete on Codechef, I've done many projects in the field of web development but I also have projects on mobile applications and games."})}),N=n.div`
display:flex;
flex-direction:column;
margin-top:3em;
text-align:justify;
align-items:center;
justify-content:center;
`,Y=n(p)`
margin:5em;
width:27em;
height:27em;
background:${t=>t.theme.Color.aboutBefore};
padding:1em;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
@media ${t=>t.theme.mediaQueries.mediaCel}{
  width:75vw;
  height:75vw;
  text-align:center;
}
&:hover{
  transform:scale(1.15);
  transition: all 0.5s ease-in-out;
  background:${t=>t.theme.Color.aboutAfter};
  color:white;
  font-size:1.1em;
}
`;var E="/own/assets/myphoto.8ea23071.jpg",O="/own/assets/background.9e49ee84.jpg";const Q=()=>e(x,{children:i(G,{children:[i(u,{children:[e(h,{href:"#about",children:"About me"}),e(h,{href:"#skills",children:"Skills"})]}),e(T,{children:e(W,{src:E})}),i(u,{children:[e(h,{href:"#public",children:"Projects"}),e("a",{href:"https://www.codechef.com/users/delairi",target:"_blank",children:"Codechef"})]})]})}),G=n.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
height:100vh;
background:url(${O}) no-repeat fixed center;
@media ${t=>t.theme.mediaQueries.mediaCel}{
  flex-direction:column;
  height:100vh;
}
a{
  
  font-family:${t=>t.theme.Fonts.nav};
  margin:3em 0em 3em 0em;
  font-size:1.5em;
  @media ${t=>t.theme.mediaQueries.mediaCel}{
    margin:1em 0em 1em 0em;
  }
}
`,u=n.div`
display:flex;
flex-direction:column;
align-items:center;
`,T=n.div``,W=n.img`
width:25em;
height:25em;
border-radius:50%;
@media ${t=>t.theme.mediaQueries.mediaCel}{
  width:55vw;
  height:55vw;
}
`,h=n(D)`
margin:3em 0em 3em 0em;
font-size:1.5em;
`;var q="/own/assets/link.7c3cbadd.png",K="/own/assets/description.94ed1528.png";const g=({Link:t,Title:a,Des:d,Id:c})=>{const[o,r]=m.exports.useState(!1),[l,j]=m.exports.useState(!1);return i(V,{children:[e(U,{children:a}),e(X,{onClick:()=>{j(!l)},children:e(k,{id:c})}),i(H,{clickaso:l,children:[e("a",{href:t,target:"_blank",children:e(w,{src:q})}),e(J,{onClick:()=>{r(!o)},children:e(w,{src:K})})]}),e(_,{show:o,children:d})]})},U=n(y)`
text-align:center;
`,V=n.div`
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
font-family:${t=>t.theme.Fonts.text};


`,k=n.div`
background-size:contain;
background-repeat:no-repeat;
width: 300px;
height:10em;
margin:1em 0em 1em 0em;
@media ${t=>t.theme.mediaQueries.mediaCel}{
    width: 280px;
    height:8em;
    background-position:center;
    
}

`;n.div`

`;const _=n.div`
margin:1em;
display:${t=>t.show?"flex":"none"};
position:relative;
top:-2em;
font-weight:600;
`,w=n.img`
width:1.5em;
height:1.5em;
margin:0em 1em 0em 1em;
z-index:1;
filter:invert(100%);

`,H=n.div`
display:${t=>t.clickaso?"flex":"none"};
flex-direction:row;
justify-content:center;
align-items:center;
position:relative;
top:-8em;
`,J=n.button`
border:none;
background:none;
font-size:1em;
cursor:pointer;
`,X=n.button`
border:none;
background:none;
font-size:1em;
cursor:pointer;
&:hover{
    ${k}{
        transform:scale(1.1);
        transition: all 0.5s ease-in-out;
        filter:blur(2px);
    }
}
`,Z=()=>{const[t,a]=m.exports.useState(!1),[d,c]=m.exports.useState(!1);return m.exports.useEffect(()=>{c(!d)},[t]),i(ee,{id:"public",children:[e(g,{Link:"https://www.youreasylanguage.com/",Title:"Your Easy Language",Des:"Website made in 2020 with react on the frontend, nodejs and express on the backend and firebase and google cloud as database. Also i used sockets from socket.io",Id:"yel"}),e(g,{Link:"https://delairi.github.io/amazonprimeclone/",Title:"Prime Video Clon",Des:"Made with Vite y React",Id:"prime"}),e(g,{Link:"https://www.anotanotas.com/",Title:"Anotanotas",Des:"Made with React, Firebase, Nodejs, Express, Babel, Webpack y styled-components. Deployed in App Engine from Google Cloud",Id:"anota"}),e(g,{Link:"https://play.google.com/store/apps/details?id=com.adrian.youreasylanguagev4",Title:"Your Easy Language - Play Store",Des:"Mobile app made with Kotlin and Firebase in Android Studio",Id:"cel"})]})},ee=n.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:space-evenly;
justify-content:space-evenly;
`;var te="/own/assets/html.9e53ed21.png",ne="/own/assets/c.c3c2b144.png",oe="/own/assets/python.789eb32f.png",ie="/own/assets/css.ed233750.png",re="/own/assets/react.d15ad917.png",se="/own/assets/mysql.d078df92.png",ae="/own/assets/github.15008ff3.png",ce="/own/assets/php.d5b35dd7.png",le="/own/assets/kotlin.b009094b.svg",de="/own/assets/nodejs.0d5126dc.png",me="/own/assets/firebase.8ef0fe18.svg",ge="/own/assets/js.30558d7e.png",he="/own/assets/google.92e0f123.svg";const fe=()=>i(ue,{id:"skills",children:[i(we,{children:[e(v,{children:"Longer usage time"}),i(ve,{children:[e(s,{src:te}),e(s,{src:ie}),e(s,{src:re}),e(s,{src:ge})]}),i(b,{children:[e(s,{src:me}),e(s,{src:ae}),e(s,{src:de}),e(s,{src:he})]})]}),i(be,{children:[e(v,{children:"Familiar with"}),i(b,{children:[e(s,{src:ne}),e(s,{src:oe}),e(s,{src:se}),e(s,{src:ce}),e(s,{src:le})]})]})]}),pe=$`
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
`,ue=n.div`
padding:3.5em 0em 3.5em 0em;
`,v=n(p)`
text-align:center;
margin-bottom:1em;
font-size:1.3em;
`,we=n.div`
display:flex;
flex-direction:column;
justify-content:center;
`,ve=n.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
flex-wrap:wrap;
align-items:space-evenly;
margin:1em 0em 3em 0em;

`,b=n.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
flex-wrap:wrap;
align-items:space-evenly;
margin:1em 0em 3em 0em;
`,be=n.div`
display:flex;
flex-direction:column;
justify-content:center;
`,s=n.img`
width:4em;
height:4em;
box-shadow:0px 5px 3px gray;
padding:0.7em;
border-radius:50%;
object-fit:contain;
@media ${t=>t.theme.mediaQueries.mediaCel}{
  margin:1em 2em 1em 2em;
}
&:hover{
  opacity:0.5;
  animation: ${pe} 1s ease-in-out both;
}
`;var ye="/own/assets/gmail.1ff832aa.png";const xe=()=>i(ke,{children:[e(je,{children:"Contact: inadrian23@gmail.com"}),e(Ie,{src:ye})]}),ke=n.div`
margin-top:1em;
background:#000000c2;
padding:2em;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`,je=n(p)`
color:white;
margin:0em 1em 0em 1em;
`,Ie=n.img`
width:1.5em;
height:1.5em;
`,$e=()=>i(x,{children:[e(Q,{}),e(M,{}),e(fe,{}),e(Se,{children:e(Ce,{children:"Projects"})}),e(Z,{}),e(xe,{})]}),Ce=n(y)`
text-align:center;
color:black;
`,Se=n.div`
background:#dff8db;
padding:1em;
margin:1em 0em 2em 0em;
`;function Fe(){return e(Le,{children:e(C,{children:e(S,{children:e(F,{path:"/",element:e($e,{})})})})})}const Le=n.div`

`;L.render(e(P.StrictMode,{children:i(B,{theme:R,children:[e(z,{}),e(Fe,{})]})}),document.getElementById("root"));
