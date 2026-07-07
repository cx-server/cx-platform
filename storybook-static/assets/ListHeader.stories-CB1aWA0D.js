import{j as e}from"./jsx-runtime-8P-18mTY.js";import{S as d}from"./chevron-right-icon-CA_hVjOj.js";import{S as s}from"./globe-icon-BlpZtAhL.js";import{L as h,b as u,a as o}from"./ListHeader-iKCZ9M2k.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const L={title:"Components/List/ListHeader",component:h,decorators:[p=>e.jsxs(u,{id:"list-header-story",clickable:!0,children:[e.jsx(p,{}),e.jsx(o,{id:"list-item-1",subtitle:"Germany",iconComponent:e.jsx(s,{}),children:"Bundesliga"}),e.jsx(o,{id:"list-item-2",subtitle:"Spain",iconComponent:e.jsx(s,{}),children:"La Liga"}),e.jsx(o,{id:"list-item-3",subtitle:"Italy",iconComponent:e.jsx(s,{}),children:"Serie A"})]})],argTypes:{children:{},className:{control:{type:"text"}},rightComponent:{options:["None","ChevronRightIcon"],mapping:{None:null,ChevronRightIcon:e.jsx(d,{className:"icon-md"})}},onClick:{control:{disable:!0},if:{arg:"rightComponent",truthy:!0}}},args:{onClick:()=>{}},tags:["autodocs"]},t={args:{id:"simple-list-header",children:"Section Header"}},i={args:{id:"full-list-header",children:"Section Header",subtitle:"Subtitle",info:"Info",rightComponent:e.jsx(d,{className:"icon-md"})}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: "simple-list-header",
    children: "Section Header"
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var l,c,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: "full-list-header",
    children: "Section Header",
    subtitle: "Subtitle",
    info: "Info",
    rightComponent: <ChevronRightIcon className="icon-md" />
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const b=["SimpleListHeader","FullListItem"];export{i as FullListItem,t as SimpleListHeader,b as __namedExportsOrder,L as default};
