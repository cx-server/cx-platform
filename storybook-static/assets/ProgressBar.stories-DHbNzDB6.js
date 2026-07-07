import{j as s}from"./jsx-runtime-8P-18mTY.js";import{r as a}from"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const l=({progressPercentage:e,className:d="bg-border-subtile rounded-md",barClassName:m="h-1.5 rounded-full bg-gradient-to-r from-highlight to-primary"})=>{const r=a.useRef(null),[A,T]=a.useState(0);return a.useEffect(()=>{var p;(p=r.current)!=null&&p.clientWidth&&T(e*r.current.clientWidth/100)},[e]),s.jsx("div",{className:d,ref:r,children:s.jsx("div",{className:m,style:{width:A},role:"progressbar","aria-label":"progress bar"})})};l.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{progressPercentage:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"bg-border-subtile rounded-md"',computed:!1}},barClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"h-1.5 rounded-full bg-gradient-to-r from-highlight to-primary"',computed:!1}}}};const R={title:"Components/ProgressBar",component:l,decorators:[e=>s.jsx("div",{className:"max-w-md mx-auto p-4",children:s.jsx(e,{})})],argTypes:{progressPercentage:{control:{type:"range",min:0,max:100,step:1}},className:{control:"text"},barClassName:{control:"text"}},tags:["autodocs"]},t={args:{progressPercentage:50}},o={args:{progressPercentage:0}},n={args:{progressPercentage:100}},c={args:{progressPercentage:75,className:"bg-[rgb(31,0,0)] rounded-lg h-5",barClassName:"h-5 rounded-lg bg-[rgb(255,0,0)]"}},W=()=>{const[e,d]=a.useState(100);return a.useEffect(()=>{const m=setInterval(()=>{d(r=>r<=0?100:r-1)},100);return()=>clearInterval(m)},[]),s.jsx(l,{progressPercentage:e})},g={render:()=>s.jsx(W,{})};var i,u,b;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    progressPercentage: 50
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,h,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    progressPercentage: 0
  }
}`,...(P=(h=o.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var x,y,N;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    progressPercentage: 100
  }
}`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var S,j,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    progressPercentage: 75,
    className: "bg-[rgb(31,0,0)] rounded-lg h-5",
    barClassName: "h-5 rounded-lg bg-[rgb(255,0,0)]"
  }
}`,...(v=(j=c.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var C,E,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <AnimatedProgressBar />
}`,...(B=(E=g.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const w=["Default","Empty","Full","CustomStyling","Animated"];export{g as Animated,c as CustomStyling,t as Default,o as Empty,n as Full,w as __namedExportsOrder,R as default};
