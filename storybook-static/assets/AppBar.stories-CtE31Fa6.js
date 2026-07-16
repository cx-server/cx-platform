import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-iU2omdTy.js";import{n as i,t as a}from"./close-icon-DBexRYAL.js";function o({id:e,children:t,className:n,hasBackground:r,safeTop:i,...a}){return(0,s.jsx)(`div`,{id:e??`app-bar`,"data-testid":e??`app-bar`,className:`app-bar ${r?`app-bar-filled`:`app-bar-transparent`} ${i?`pt-safe-top`:``} ${n??``}`,...a,children:t})}var s,c=t((()=>{s=r()}));function l({className:e,border:t,children:n,...r}){return(0,u.jsx)(`button`,{"data-testid":`app-bar-back-button`,className:`app-bar-back-button ${t?`border border-white-subtile-inverse`:``} ${e??``}`,...r,children:n})}var u,d=t((()=>{u=r()}));function f({className:e,...t}){return(0,p.jsx)(`button`,{"data-testid":`app-bar-close-button`,className:`app-bar-icon ml-auto ${e??``}`,...t,children:(0,p.jsx)(a,{})})}var p,m=t((()=>{p=r(),i()})),h=t((()=>{r(),n()}));function g({children:e,className:t,textLeft:n,textSmall:r,...i}){return(0,_.jsx)(`h1`,{"data-testid":`app-bar-page-title`,className:`${r?`text-base`:`text-lg`} ${n?`text-left`:`text-center`} font-medium ${t??``}`,...i,children:e})}var _,v=t((()=>{_=r()})),y=t((()=>{r()})),b=t((()=>{r()})),x=t((()=>{})),S=t((()=>{c(),d(),m(),h(),v(),y(),b(),x()})),C=e({Default:()=>D,Transparent:()=>k,WithClose:()=>O,WithoutBack:()=>A,__namedExportsOrder:()=>j,default:()=>E});function w(){return(0,T.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,T.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})}var T,E,D,O,k,A,j,M=t((()=>{S(),T=r(),E={title:`Components/AppBar`,component:o,tags:[],args:{hasBackground:!0},parameters:{layout:`fullscreen`}},D={render:()=>(0,T.jsxs)(o,{hasBackground:!0,children:[(0,T.jsx)(l,{id:`back`,onClick:()=>{},children:(0,T.jsx)(w,{})}),(0,T.jsx)(g,{id:`title`,children:`Page Title`})]})},O={render:()=>(0,T.jsxs)(o,{hasBackground:!0,children:[(0,T.jsx)(l,{id:`back`,onClick:()=>{},children:(0,T.jsx)(w,{})}),(0,T.jsx)(g,{id:`title`,children:`Settings`}),(0,T.jsx)(f,{id:`close`,onClick:()=>{}})]})},k={render:()=>(0,T.jsx)(`div`,{style:{background:`linear-gradient(180deg, #c8102e 0%, #121214 100%)`,padding:`0 0 60px`},children:(0,T.jsxs)(o,{hasBackground:!1,children:[(0,T.jsx)(l,{id:`back`,onClick:()=>{},children:(0,T.jsx)(w,{})}),(0,T.jsx)(g,{id:`title`,children:`Profile`})]})})},A={render:()=>(0,T.jsx)(o,{hasBackground:!0,children:(0,T.jsx)(g,{id:`title`,textLeft:!0,children:`Home`})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}}>
        <ChevronLeft />
      </AppBarBackButton>
      <AppBarPageTitle id="title">Page Title</AppBarPageTitle>
    </AppBar>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarBackButton id="back" onClick={() => {}}>
        <ChevronLeft />
      </AppBarBackButton>
      <AppBarPageTitle id="title">Settings</AppBarPageTitle>
      <AppBarCloseButton id="close" onClick={() => {}} />
    </AppBar>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <AppBar hasBackground>
      <AppBarPageTitle id="title" textLeft>Home</AppBarPageTitle>
    </AppBar>
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithClose`,`Transparent`,`WithoutBack`]}));M();export{D as Default,k as Transparent,O as WithClose,A as WithoutBack,j as __namedExportsOrder,E as default,M as n,C as t};