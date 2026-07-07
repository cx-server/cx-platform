import{j as e}from"./jsx-runtime-8P-18mTY.js";import{A as u}from"./index-CFb7UChT.js";import{E as r,a as g,b as v}from"./EventHeaderScoreCell-CUAc1G4D.js";import{S as d}from"./jersey-BsGAYmTZ.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const t=(s,i)=>[e.jsx(r,{id:"team1",name:"Heimteam",logo:i&&e.jsx(d,{})},"team1"),e.jsx(g,{id:"event-header-details",headline:s?"1 : 1":"15:00",subline:s?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{children:"59'"}),e.jsx(u,{id:"activityBar"})]}):"Today"},"event-header-details"),e.jsx(r,{id:"team2",name:"Auswärtsteam",logo:i&&e.jsx(d,{style:{"--color":"red"}})},"team2")],j={title:"Components Sports/EventHeader/HeadToHead",component:v,subcomponents:{EventHeaderDetails:g,EventHeaderParticipant:r},tags:["autodocs"],parameters:{backgrounds:{default:"Tipico Black"}},argTypes:{children:{options:["Live With Logos","Live Without Logos","Pre Live With Logos","Pre Live Without Logos"],control:{type:"select"},mapping:{"Live With Logos":t(!0,!0),"Live Without Logos":t(!0,!1),"Pre Live With Logos":t(!1,!0),"Pre Live Without Logos":t(!1,!1)}}},args:{children:"Live With Logos"}},o={args:{id:"event-header-head-to-head"}},a={args:{id:"event-header-without-logo",children:"Pre Live Without Logos"}};var n,c,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: "event-header-head-to-head"
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,h,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: "event-header-without-logo",
    children: "Pre Live Without Logos"
  }
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const y=["EventHeaderHeadToHead","EventHeaderWithoutLogo"];export{o as EventHeaderHeadToHead,a as EventHeaderWithoutLogo,y as __namedExportsOrder,j as default};
