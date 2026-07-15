import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-DowxYK69.js";function i({id:e,children:t,className:n,hasBackground:r,safeTop:i,...o}){return(0,a.jsx)(`div`,{id:e??`app-bar`,"data-testid":e??`app-bar`,className:`app-bar ${r?`app-bar-filled`:`app-bar-transparent`} ${i?`pt-safe-top`:``} ${n??``}`,...o,children:t})}var a,o=t((()=>{a=r()}));function s({className:e,border:t,children:n,...r}){return(0,c.jsx)(`button`,{"data-testid":`app-bar-back-button`,className:`app-bar-back-button ${t?`border border-white-subtile-inverse`:``} ${e??``}`,...r,children:n})}var c,l=t((()=>{c=r()})),u,d,f=t((()=>{n(),u=r(),d=e=>(0,u.jsx)(`svg`,{id:`default`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:(0,u.jsx)(`path`,{strokeWidth:1.5,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18 18 6M6 6l12 12`})})}));function p({className:e,...t}){return(0,m.jsx)(`button`,{"data-testid":`app-bar-close-button`,className:`app-bar-icon ml-auto ${e??``}`,...t,children:(0,m.jsx)(d,{})})}var m,h=t((()=>{m=r(),f()})),g=t((()=>{r(),n()}));function _({children:e,className:t,textLeft:n,textSmall:r,...i}){return(0,v.jsx)(`h1`,{"data-testid":`app-bar-page-title`,className:`${r?`text-base`:`text-lg`} ${n?`text-left`:`text-center`} font-medium ${t??``}`,...i,children:e})}var v,y=t((()=>{v=r()})),b=t((()=>{r()})),x=t((()=>{r()})),S=t((()=>{})),C=t((()=>{o(),l(),h(),g(),y(),b(),x(),S()})),w=e({Default:()=>O,Transparent:()=>A,WithClose:()=>k,WithoutBack:()=>j,__namedExportsOrder:()=>M,default:()=>D});function T(){return(0,E.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,E.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})}var E,D,O,k,A,j,M,N=t((()=>{C(),E=r(),D={title:`Components/AppBar`,component:i,tags:[],args:{hasBackground:!0},parameters:{layout:`fullscreen`}},O={render:()=>(0,E.jsxs)(i,{hasBackground:!0,children:[(0,E.jsx)(s,{id:`back`,onClick:()=>{},children:(0,E.jsx)(T,{})}),(0,E.jsx)(_,{id:`title`,children:`Page Title`})]})},k={render:()=>(0,E.jsxs)(i,{hasBackground:!0,children:[(0,E.jsx)(s,{id:`back`,onClick:()=>{},children:(0,E.jsx)(T,{})}),(0,E.jsx)(_,{id:`title`,children:`Settings`}),(0,E.jsx)(p,{id:`close`,onClick:()=>{}})]})},A={render:()=>(0,E.jsx)(`div`,{style:{background:`linear-gradient(180deg, #c8102e 0%, #121214 100%)`,padding:`0 0 60px`},children:(0,E.jsxs)(i,{hasBackground:!1,children:[(0,E.jsx)(s,{id:`back`,onClick:()=>{},children:(0,E.jsx)(T,{})}),(0,E.jsx)(_,{id:`title`,children:`Profile`})]})})},j={render:()=>(0,E.jsx)(i,{hasBackground:!0,children:(0,E.jsx)(_,{id:`title`,textLeft:!0,children:`Home`})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}}>
        <ChevronLeft />
      </AppBarBackButton>
      <AppBarPageTitle id="title">Page Title</AppBarPageTitle>
    </AppBar>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}}>
        <ChevronLeft />
      </AppBarBackButton>
      <AppBarPageTitle id="title">Settings</AppBarPageTitle>
      <AppBarCloseButton id="close" onClick={() => {}} />
    </AppBar>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: "linear-gradient(180deg, #c8102e 0%, #121214 100%)",
    padding: "0 0 60px"
  }}>
      <AppBar hasBackground={false}>
        <AppBarBackButton id="back" onClick={() => {}}>
          <ChevronLeft />
        </AppBarBackButton>
        <AppBarPageTitle id="title">Profile</AppBarPageTitle>
      </AppBar>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarPageTitle id="title" textLeft>Home</AppBarPageTitle>
    </AppBar>
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithClose`,`Transparent`,`WithoutBack`]}));N();export{O as Default,A as Transparent,k as WithClose,j as WithoutBack,M as __namedExportsOrder,D as default,N as n,w as t};