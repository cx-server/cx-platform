import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-B2mmKava.js";import{n as i,t as a}from"./Overlay-B80OoOYA.js";var o,s,c=t((()=>{n(),o=r(),s=e=>(0,o.jsxs)(`svg`,{id:`default`,viewBox:`0 0 18 18`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,o.jsx)(`circle`,{cx:9,cy:9,r:8,fill:`none`,stroke:`url(#ringGradient)`,strokeWidth:2}),(0,o.jsx)(`defs`,{children:(0,o.jsxs)(`linearGradient`,{id:`ringGradient`,x1:`0%`,y1:`50%`,x2:`100%`,y2:`50%`,children:[(0,o.jsx)(`stop`,{offset:`0%`,style:{stopColor:`currentColor`,stopOpacity:.8}}),(0,o.jsx)(`stop`,{offset:`100%`,style:{stopColor:`currentColor`,stopOpacity:.1}})]})})]})}));function l({className:e,spinnerSize:t,...n}){let r=e?` ${e}`:``,a=t||`icon-lg`;return(0,u.jsx)(i,{id:`preloader`,"data-testid":`preloader`,role:`status`,className:`overlay grid place-content-center${r}`,...n,children:(0,u.jsx)(s,{className:`${a} animate-spin text-white`})})}var u,d=t((()=>{u=r(),c(),a()})),f=t((()=>{d()})),p=e({Default:()=>g,LargeSpinner:()=>v,SmallSpinner:()=>_,__namedExportsOrder:()=>y,default:()=>h}),m,h,g,_,v,y,b=t((()=>{f(),m=r(),h={title:`Components/Preloader`,component:l,tags:[],argTypes:{spinnerSize:{control:`select`,options:[`icon-sm`,`icon-md`,`icon-lg`,`icon-xl`],description:`Size class applied to the spinner SVG`}},args:{spinnerSize:`icon-lg`},parameters:{layout:`fullscreen`}},g={render:()=>(0,m.jsx)(`div`,{style:{position:`relative`,height:`300px`},children:(0,m.jsx)(l,{})})},_={render:()=>(0,m.jsx)(`div`,{style:{position:`relative`,height:`200px`},children:(0,m.jsx)(l,{spinnerSize:`icon-md`})})},v={render:()=>(0,m.jsx)(`div`,{style:{position:`relative`,height:`400px`},children:(0,m.jsx)(l,{spinnerSize:`icon-xl`})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: "relative",
    height: "300px"
  }}>
      <Preloader />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: "relative",
    height: "200px"
  }}>
      <Preloader spinnerSize="icon-md" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: "relative",
    height: "400px"
  }}>
      <Preloader spinnerSize="icon-xl" />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`SmallSpinner`,`LargeSpinner`]}));b();export{g as Default,v as LargeSpinner,_ as SmallSpinner,y as __namedExportsOrder,h as default,b as n,p as t};