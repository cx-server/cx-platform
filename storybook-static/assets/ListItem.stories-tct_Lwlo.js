import{j as e}from"./jsx-runtime-8P-18mTY.js";import{S as C}from"./chevron-right-icon-CA_hVjOj.js";import{S as r}from"./globe-icon-BlpZtAhL.js";import{T as N,I as i}from"./Toggle-CCT0L0fo.js";import{a as f,b as y}from"./ListHeader-iKCZ9M2k.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-pbwLPNgv.js";import"./checkmark-Cbg41s1-.js";import"./index-lrnWVvcy.js";import"./chevron-down-icon-Cd9OjU95.js";const _={title:"Components/List/ListItem",component:f,decorators:[j=>e.jsx(y,{id:"list-item-story",clickable:!0,children:e.jsx(j,{})})],argTypes:{children:{},className:{control:{type:"text"}},iconComponent:{options:["None","GlobeIcon"],mapping:{None:null,GlobeIcon:e.jsx(r,{})}},rightComponent:{options:["None","ChevronRightIcon","RadioInput","CheckboxInput","ToggleInput"],mapping:{None:null,ChevronRightIcon:e.jsx(C,{className:"icon-md"}),RadioInput:e.jsx(i,{id:"input",name:"radio-group",type:"radio"}),CheckboxInput:e.jsx(i,{id:"input",name:"checkbox-group",type:"checkbox"}),ToggleInput:e.jsx(N,{id:"input",name:"switch-group",checked:!1})}},htmlFor:{control:{type:"text",disable:!0},if:{arg:"rightComponent",truthy:!0}},selected:{control:{type:"boolean"}}},args:{htmlFor:"input"},tags:["autodocs"]},t={args:{id:"simple-list-item",children:"Bundesliga"}},s={args:{id:"full-list-item",children:"Bundesliga",subtitle:"Germany",info:"24",iconComponent:e.jsx(r,{}),rightComponent:e.jsx(C,{className:"icon-md"}),htmlFor:void 0,border:!0}},n={args:{id:"custom-list-item",className:"flex",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("span",{className:"text-highlight",children:"Bundesliga"})," | ",e.jsx("span",{className:"text-subtile",children:"Germany"})]}),e.jsx("div",{className:"emphasis",children:"24"})]})}},o={args:{iconComponent:e.jsx(r,{}),children:"Bundesliga",subtitle:"Germany",htmlFor:"input-list-item",rightComponent:e.jsx(i,{id:"input-list-item",name:"checkbox-group-1",type:"checkbox"})}};var a,m,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: "simple-list-item",
    children: "Bundesliga"
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: "full-list-item",
    children: "Bundesliga",
    subtitle: "Germany",
    info: "24",
    iconComponent: <GlobeIcon />,
    rightComponent: <ChevronRightIcon className="icon-md" />,
    htmlFor: undefined,
    border: true
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,g,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: "custom-list-item",
    className: "flex",
    children: <>
                <div className="flex-grow">
                    <span className="text-highlight">Bundesliga</span>&nbsp;|&nbsp;
                    <span className="text-subtile">Germany</span>
                </div>
                <div className="emphasis">24</div>
            </>
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,I,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    iconComponent: <GlobeIcon />,
    children: "Bundesliga",
    subtitle: "Germany",
    htmlFor: "input-list-item",
    rightComponent: <Input id="input-list-item" name="checkbox-group-1" type="checkbox" />
  }
}`,...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const O=["SimpleListItem","FullListItem","CustomListItem","InputListItem"];export{n as CustomListItem,s as FullListItem,o as InputListItem,t as SimpleListItem,O as __namedExportsOrder,_ as default};
