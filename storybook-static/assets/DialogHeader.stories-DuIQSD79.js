import{j as e}from"./jsx-runtime-8P-18mTY.js";import{D as A}from"./DialogHeader-CY1EaPqF.js";import{R as i}from"./RoundedIcon-BTIBcA3W.js";import{T as B,a as l}from"./TabMenu-DM90Ueos.js";import{S as w}from"./chevron-left-icon-CQx5u3AZ.js";import{S as M}from"./close-icon-oalAFRG9.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const J={title:"Components/DialogHeader",component:A,tags:["autodocs"],args:{id:"dialog-header-default",centralComponent:e.jsx("span",{className:"font-medium text-lg",children:"Dialog Title"}),leftComponent:e.jsx(i,{id:"chevron-back",children:e.jsx(w,{className:"icon-md text-standard"})}),rightComponent:e.jsx(i,{id:"chevron-back",children:e.jsx(M,{className:"icon-md text-standard"})}),className:"px-4"},argTypes:{centralComponent:{control:!1},leftComponent:{control:!1},rightComponent:{control:!1},className:{control:"text"}},decorators:[D=>e.jsx("div",{className:"bg-input p-4",children:e.jsx("div",{className:"max-w-sm mx-auto",children:e.jsx(D,{})})})]},a={},t={args:{leftComponent:void 0,rightComponent:void 0,centralComponent:e.jsx("span",{className:"text-lg",children:"Simple Title"})}},n={args:{centralComponent:e.jsx("span",{className:"sr-only",children:"Invisible Title"})}},s={args:{rightComponent:void 0}},o={args:{leftComponent:e.jsx("div",{className:"text-interaction font-medium text-sm",children:"Action"})}},r={args:{centralComponent:e.jsx("span",{className:"text-lg",children:"This is a very long dialog title to test overflow behavior"})}},c={args:{centralComponent:e.jsxs(B,{id:"tab-bars",variant:"tabbars",children:[e.jsx(l,{id:"tab-1",selected:!0,children:"Tab 1"},"tab-1"),e.jsx(l,{id:"tab-2",children:"Tab 2"},"tab-2")]})}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,u,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    leftComponent: undefined,
    rightComponent: undefined,
    centralComponent: <span className="text-lg">Simple Title</span>
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,x,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    centralComponent: <span className="sr-only">Invisible Title</span>
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var T,C,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    rightComponent: undefined
  }
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var j,N,y;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    leftComponent: <div className="text-interaction font-medium text-sm">Action</div>
  }
}`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var S,W,I;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    centralComponent: <span className="text-lg">This is a very long dialog title to test overflow behavior</span>
  }
}`,...(I=(W=r.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var L,O,k;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    centralComponent: <TabMenu id="tab-bars" variant="tabbars">
                <Tab key="tab-1" id="tab-1" selected>
                    Tab 1
                </Tab>
                <Tab key="tab-2" id="tab-2">
                    Tab 2
                </Tab>
            </TabMenu>
  }
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const K=["Default","WithTextOnly","WithIconsOnly","WithOnlyBackIconLeft","WithActionLeft","LongTitle","WithTabBars"];export{a as Default,r as LongTitle,o as WithActionLeft,n as WithIconsOnly,s as WithOnlyBackIconLeft,c as WithTabBars,t as WithTextOnly,K as __namedExportsOrder,J as default};
