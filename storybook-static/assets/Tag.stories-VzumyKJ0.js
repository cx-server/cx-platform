import{j as x}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const E={brand:"bg-brand text-white",card:"bg-card text-highlight",positive:"bg-positive text-white"};function m({variant:u="brand",className:v="",children:g,...b}){const h="px-1.5 py-1 flex items-center gap-0.5 rounded-pills text-2xs font-semibold overflow-hidden whitespace-nowrap",f=E[u];return x.jsx("div",{className:`${h} ${f} ${v}`,...b,children:g})}m.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{variant:{required:!1,tsType:{name:"union",raw:'"brand" | "card" | "positive"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"card"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"brand"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["HTMLAttributes"]};const y={title:"Components/Tag",component:m,argTypes:{variant:{control:{type:"select"},options:["brand","card","positive"]},children:{control:{type:"text"}}},tags:["autodocs"]},e={args:{variant:"brand",children:"NEW PRICES"}},a={args:{variant:"card",children:"FEATURED"}},r={args:{variant:"positive",children:"LIVE"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "brand",
    children: "NEW PRICES"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "card",
    children: "FEATURED"
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    children: "LIVE"
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const I=["Brand","Card","Positive"];export{e as Brand,a as Card,r as Positive,I as __namedExportsOrder,y as default};
