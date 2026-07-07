import{j as s}from"./jsx-runtime-8P-18mTY.js";import{r as E}from"./index-Cs7sjTYM.js";import{S as a}from"./info-icon-CULX37I7.js";import{B as O}from"./Button-CAptm3MV.js";import{T as C}from"./Toast-m5pr85R6.js";import"./_commonjsHelpers-BosuxZz1.js";const F={title:"Components/Toast",component:C,argTypes:{children:{}},tags:["autodocs"]},e={args:{id:"neutral-toast",show:!0,children:[s.jsx(a,{className:"icon-md"}),s.jsx("span",{className:"pl-1",children:"We maximize spannung!"})]}},B=()=>{const[Y,m]=E.useState(!1);return s.jsxs("div",{className:"max-w-sm mx-auto flex justify-center relative",children:[s.jsx(O,{className:"p-4",id:"test",variant:"primary",onClick:()=>m(!0),children:"Show Toast"}),s.jsx(C,{id:"auto-hide-toast",show:Y,autoHideDelay:3e3,onHide:()=>m(!1),children:s.jsx("span",{className:"pl-1",children:"This toast will auto-hide in 3 seconds!"})})]})},n={render:()=>s.jsx(B,{})},o={args:{id:"text-toast",show:!0,children:s.jsx("span",{className:"pl-1",children:"We maximize spannung!"})}},t={args:{id:"info-toast",status:"info",show:!0,children:[s.jsx(a,{className:"icon-md"}),s.jsx("span",{className:"pl-1",children:"You can win up to 1000€ with our new welcome bonus!"})]}},r={args:{id:"negative-toast",status:"negative",show:!0,children:[s.jsx(a,{className:"icon-md"}),s.jsx("span",{className:"pl-1",children:"Sorry, but something went wrong"})]}},i={args:{id:"warning-toast",status:"warning",show:!0,children:[s.jsx(a,{className:"icon-md"}),s.jsx("span",{className:"pl-1",children:"Your account is not yet verified"})]}},c={args:{id:"positive-toast",status:"positive",show:!0,children:[s.jsx(a,{className:"icon-md"}),s.jsx("span",{className:"pl-1",children:"The action was successfully done"})]}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: "neutral-toast",
    show: true,
    children: [<InfoIcon className="icon-md" />, <span className="pl-1">We maximize spannung!</span>]
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <WithAutoHideComponent />
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,x,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "text-toast",
    show: true,
    children: <span className="pl-1">We maximize spannung!</span>
  }
}`,...(N=(x=o.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var f,T,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "info-toast",
    status: "info",
    show: true,
    children: [<InfoIcon className="icon-md" />, <span className="pl-1">You can win up to 1000€ with our new welcome bonus!</span>]
  }
}`,...(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var v,I,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: "negative-toast",
    status: "negative",
    show: true,
    children: [<InfoIcon className="icon-md" />, <span className="pl-1">Sorry, but something went wrong</span>]
  }
}`,...(S=(I=r.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var y,W,H;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "warning-toast",
    status: "warning",
    show: true,
    children: [<InfoIcon className="icon-md" />, <span className="pl-1">Your account is not yet verified</span>]
  }
}`,...(H=(W=i.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var b,z,A;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "positive-toast",
    status: "positive",
    show: true,
    children: [<InfoIcon className="icon-md" />, <span className="pl-1">The action was successfully done</span>]
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const G=["NeutralToast","WithAutoHide","OnlyTextToast","InfoToast","NegativeToast","WarningToast","PositiveToast"];export{t as InfoToast,r as NegativeToast,e as NeutralToast,o as OnlyTextToast,c as PositiveToast,i as WarningToast,n as WithAutoHide,G as __namedExportsOrder,F as default};
