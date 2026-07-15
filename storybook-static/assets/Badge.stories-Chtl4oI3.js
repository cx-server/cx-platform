import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-CME29FwW.js";function r({id:e,animate:t,children:n,className:r,renderSupTag:a=!0,...o}){let s=`badge ${t?`animate-jump-in`:``} ${r??``}`;return a?(0,i.jsx)(`sup`,{id:e,"data-testid":e,className:s,...o,children:n}):(0,i.jsx)(`div`,{id:e,"data-testid":e,className:s,...o,children:n})}var i,a=t((()=>{i=n()})),o=t((()=>{a()})),s=e({Animated:()=>d,Default:()=>u,LargeNumber:()=>f,OnButton:()=>p,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m,h=t((()=>{o(),c=n(),l={title:`Components/Badge`,component:r,tags:[],argTypes:{animate:{control:`boolean`}},args:{id:`badge-demo`,animate:!1}},u={args:{id:`badge-default`,children:`3`}},d={args:{id:`badge-animated`,children:`1`,animate:!0}},f={args:{id:`badge-large`,children:`99+`}},p={render:()=>(0,c.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`},children:[(0,c.jsx)(`button`,{className:`btn btn-primary h-10 py-2 text-sm w-fit px-3 gap-2 min-w-20`,children:`Notifications`}),(0,c.jsx)(r,{id:`badge-on-btn`,className:`absolute -top-1 -right-1`,children:`5`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "badge-default",
    children: "3"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "badge-animated",
    children: "1",
    animate: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "badge-large",
    children: "99+"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: "relative",
    display: "inline-block"
  }}>
      <button className="btn btn-primary h-10 py-2 text-sm w-fit px-3 gap-2 min-w-20">Notifications</button>
      <Badge id="badge-on-btn" className="absolute -top-1 -right-1">5</Badge>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Animated`,`LargeNumber`,`OnButton`]}));h();export{d as Animated,u as Default,f as LargeNumber,p as OnButton,m as __namedExportsOrder,l as default,h as n,s as t};