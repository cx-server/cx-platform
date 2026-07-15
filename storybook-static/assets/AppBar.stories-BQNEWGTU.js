import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-Ci2TpDd0.js";function i({id:e,children:t,className:n,hasBackground:r,safeTop:i,...o}){return(0,a.jsx)(`div`,{id:e??`app-bar`,"data-testid":e??`app-bar`,className:`app-bar ${r?`app-bar-filled`:`app-bar-transparent`} ${i?`pt-safe-top`:``} ${n??``}`,...o,children:t})}var a,o=t((()=>{a=r()}));function s({className:e,border:t,children:n,...r}){return(0,c.jsx)(`button`,{"data-testid":`app-bar-back-button`,className:`app-bar-back-button ${t?`border border-white-subtile-inverse`:``} ${e??``}`,...r,children:n})}var c,l=t((()=>{c=r()})),u,d,f=t((()=>{n(),u=r(),d=e=>(0,u.jsx)(`svg`,{id:`default`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:(0,u.jsx)(`path`,{strokeWidth:1.5,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18 18 6M6 6l12 12`})})}));function p({className:e,...t}){return(0,m.jsx)(`button`,{"data-testid":`app-bar-close-button`,className:`app-bar-icon ml-auto ${e??``}`,...t,children:(0,m.jsx)(d,{})})}var m,h=t((()=>{m=r(),f()})),g=t((()=>{r(),n()}));function _({children:e,className:t,textLeft:n,textSmall:r,...i}){return(0,v.jsx)(`h1`,{"data-testid":`app-bar-page-title`,className:`${r?`text-base`:`text-lg`} ${n?`text-left`:`text-center`} font-medium ${t??``}`,...i,children:e})}var v,y=t((()=>{v=r()})),b=t((()=>{r()})),x=t((()=>{r()})),S=t((()=>{})),C=t((()=>{o(),l(),h(),g(),y(),b(),x(),S()})),w=e({Default:()=>D,Transparent:()=>k,WithClose:()=>O,WithoutBack:()=>A,__namedExportsOrder:()=>j,default:()=>E}),T,E,D,O,k,A,j,M=t((()=>{C(),T=r(),E={title:`Components/AppBar`,component:i,tags:[],args:{hasBackground:!0},parameters:{layout:`fullscreen`}},D={render:()=>(0,T.jsxs)(i,{hasBackground:!0,children:[(0,T.jsx)(s,{id:`back`,onClick:()=>{}}),(0,T.jsx)(_,{id:`title`,children:`Page Title`})]})},O={render:()=>(0,T.jsxs)(i,{hasBackground:!0,children:[(0,T.jsx)(s,{id:`back`,onClick:()=>{}}),(0,T.jsx)(_,{id:`title`,children:`Settings`}),(0,T.jsx)(p,{id:`close`,onClick:()=>{}})]})},k={render:()=>(0,T.jsx)(`div`,{style:{background:`linear-gradient(180deg, #c8102e 0%, #121214 100%)`,padding:`0 0 40px`},children:(0,T.jsxs)(i,{hasBackground:!1,children:[(0,T.jsx)(s,{id:`back`,onClick:()=>{}}),(0,T.jsx)(_,{id:`title`,children:`Profile`})]})})},A={render:()=>(0,T.jsx)(i,{hasBackground:!0,children:(0,T.jsx)(_,{id:`title`,children:`Home`})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}} />
      <AppBarPageTitle id="title">Page Title</AppBarPageTitle>
    </AppBar>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}} />
      <AppBarPageTitle id="title">Settings</AppBarPageTitle>
      <AppBarCloseButton id="close" onClick={() => {}} />
    </AppBar>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: "linear-gradient(180deg, #c8102e 0%, #121214 100%)",
    padding: "0 0 40px"
  }}>
      <AppBar hasBackground={false}>
        <AppBarBackButton id="back" onClick={() => {}} />
        <AppBarPageTitle id="title">Profile</AppBarPageTitle>
      </AppBar>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarPageTitle id="title">Home</AppBarPageTitle>
    </AppBar>
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithClose`,`Transparent`,`WithoutBack`]}));M();export{D as Default,k as Transparent,O as WithClose,A as WithoutBack,j as __namedExportsOrder,E as default,M as n,w as t};