import{j as e}from"./jsx-runtime-8P-18mTY.js";import{S as i}from"./chevron-down-icon-Difh_ekr.js";import{S as s}from"./up-down-icon-TMpojWyq.js";import{r as $,R as d}from"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const b={neutral:"pill-neutral",info:"pill-info",negative:"pill-negative",positive:"pill-positive",warning:"pill-warning"},T=$.forwardRef(({children:a,id:l,className:y,inactive:p=!1,variant:j="neutral",rightIconComponent:N,leftIconComponent:D,childrenClassName:S,...E},P)=>{const R=p?" inactive":"",c=(n,m)=>{if(!n)return null;if(d.isValidElement(n))return d.cloneElement(n,{className:`${m} ${n.props.className||""}`.trim()});const q=n;return e.jsx(q,{className:m})},W=c(D,"pill-left-icon"),U=c(N,"pill-right-icon");return e.jsxs("div",{id:l,"data-testid":l,"aria-disabled":p,className:`pill ${b[j]} ${R} ${y??""}`,ref:P,...E,children:[W,a&&e.jsx("div",{className:`py-0.5 px-1 whitespace-nowrap ${S??""}`,children:a}),U]})});T.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{id:{required:!0,tsType:{name:"string"},description:""},inactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"neutral" | "info" | "negative" | "positive" | "warning"',elements:[{name:"literal",value:'"neutral"'},{name:"literal",value:'"info"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"warning"'}]},description:"",defaultValue:{value:'"neutral"',computed:!1}},leftIconComponent:{required:!1,tsType:{name:"union",raw:"ReactElement | ComponentType<WithClassName>",elements:[{name:"ReactElement"},{name:"ComponentType",elements:[{name:"WithClassName"}],raw:"ComponentType<WithClassName>"}]},description:""},rightIconComponent:{required:!1,tsType:{name:"union",raw:"ReactElement | ComponentType<WithClassName>",elements:[{name:"ReactElement"},{name:"ComponentType",elements:[{name:"WithClassName"}],raw:"ComponentType<WithClassName>"}]},description:""},childrenClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const L={title:"Components/Pill/Pill",component:T,decorators:[a=>e.jsx("div",{className:"bg-surface p-4",children:e.jsx("div",{className:"card p-4 flex max-w-sm mx-auto justify-center",children:e.jsx(a,{})})})],parameters:{layout:"fullscreen"},argTypes:{children:{},className:{control:{type:"text"}},inactive:{control:{type:"boolean"}},leftIconComponent:{options:["UpDownIcon","ChevronDownIcon"],mapping:{UpDownIcon:e.jsx(s,{}),ChevronDownIcon:e.jsx(i,{})}},rightIconComponent:{options:["ChevronDownIcon","UpDownIcon"],mapping:{ChevronDownIcon:e.jsx(i,{}),UpDownIcon:e.jsx(s,{})}}},tags:["autodocs"]},t={args:{id:"pill",variant:"neutral",children:[e.jsx("span",{children:"Tipico Sport"})]}},o={args:{id:"pill",variant:"neutral",leftIconComponent:e.jsx(s,{})}},r={args:{id:"pill",variant:"neutral",leftIconComponent:e.jsx(s,{}),children:[e.jsx("span",{children:"Tipico Sport"})],rightIconComponent:e.jsx(i,{})}};var u,f,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: "pill",
    variant: "neutral",
    children: [<span>Tipico Sport</span>]
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,g,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "pill",
    variant: "neutral",
    leftIconComponent: <UpDownIcon />
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var I,x,w;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: "pill",
    variant: "neutral",
    leftIconComponent: <UpDownIcon />,
    children: [<span>Tipico Sport</span>],
    rightIconComponent: <ChevronDownIcon />
  }
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const M=["DefaultPill","NoTextPill","WithGraphicPill"];export{t as DefaultPill,o as NoTextPill,r as WithGraphicPill,M as __namedExportsOrder,L as default};
