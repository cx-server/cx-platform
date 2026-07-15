import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-Fp6XMQmd.js";function i({id:e,children:t,className:n,hasBackground:r,safeTop:i,...o}){return(0,a.jsx)(`div`,{id:e??`app-bar`,"data-testid":e??`app-bar`,className:`app-bar ${r?`app-bar-filled`:`app-bar-transparent`} ${i?`pt-safe-top`:``} ${n??``}`,...o,children:t})}var a,o=t((()=>{a=r()}));function s({className:e,border:t,children:n,...r}){return(0,c.jsx)(`button`,{"data-testid":`app-bar-back-button`,className:`app-bar-back-button ${t?`border border-white-subtile-inverse`:``} ${e??``}`,...r,children:n})}var c,l=t((()=>{c=r()})),u,d=t((()=>{u=`data:image/svg+xml,%3csvg%20id='default'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20stroke-width='1.5'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M6%2018%2018%206M6%206l12%2012'%20/%3e%3c/svg%3e`}));function f({className:e,...t}){return(0,p.jsx)(`button`,{"data-testid":`app-bar-close-button`,className:`app-bar-icon ml-auto ${e??``}`,...t,children:(0,p.jsx)(u,{})})}var p,m=t((()=>{p=r(),d()})),h=t((()=>{r(),n()}));function g({children:e,className:t,textLeft:n,textSmall:r,...i}){return(0,_.jsx)(`h1`,{"data-testid":`app-bar-page-title`,className:`${r?`text-base`:`text-lg`} ${n?`text-left`:`text-center`} font-medium ${t??``}`,...i,children:e})}var _,v=t((()=>{_=r()})),y=t((()=>{r()})),b=t((()=>{r()})),x=t((()=>{})),S=t((()=>{o(),l(),m(),h(),v(),y(),b(),x()})),C=e({Default:()=>E,Transparent:()=>O,WithClose:()=>D,WithoutBack:()=>k,__namedExportsOrder:()=>A,default:()=>T}),w,T,E,D,O,k,A,j=t((()=>{S(),w=r(),T={title:`Components/AppBar`,component:i,tags:[],args:{hasBackground:!0},parameters:{layout:`fullscreen`}},E={render:()=>(0,w.jsxs)(i,{hasBackground:!0,children:[(0,w.jsx)(s,{id:`back`,onClick:()=>{}}),(0,w.jsx)(g,{id:`title`,children:`Page Title`})]})},D={render:()=>(0,w.jsxs)(i,{hasBackground:!0,children:[(0,w.jsx)(s,{id:`back`,onClick:()=>{}}),(0,w.jsx)(g,{id:`title`,children:`Settings`}),(0,w.jsx)(f,{id:`close`,onClick:()=>{}})]})},O={render:()=>(0,w.jsx)(`div`,{style:{background:`linear-gradient(180deg, #c8102e 0%, #121214 100%)`,padding:`0 0 40px`},children:(0,w.jsxs)(i,{hasBackground:!1,children:[(0,w.jsx)(s,{id:`back`,onClick:()=>{}}),(0,w.jsx)(g,{id:`title`,children:`Profile`})]})})},k={render:()=>(0,w.jsx)(i,{hasBackground:!0,children:(0,w.jsx)(g,{id:`title`,children:`Home`})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}} />
      <AppBarPageTitle id="title">Page Title</AppBarPageTitle>
    </AppBar>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}} />
      <AppBarPageTitle id="title">Settings</AppBarPageTitle>
      <AppBarCloseButton id="close" onClick={() => {}} />
    </AppBar>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: "linear-gradient(180deg, #c8102e 0%, #121214 100%)",
    padding: "0 0 40px"
  }}>
      <AppBar hasBackground={false}>
        <AppBarBackButton id="back" onClick={() => {}} />
        <AppBarPageTitle id="title">Profile</AppBarPageTitle>
      </AppBar>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarPageTitle id="title">Home</AppBarPageTitle>
    </AppBar>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithClose`,`Transparent`,`WithoutBack`]}));j();export{E as Default,O as Transparent,D as WithClose,k as WithoutBack,A as __namedExportsOrder,T as default,j as n,C as t};