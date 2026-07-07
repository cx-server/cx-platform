import{j as t}from"./jsx-runtime-8P-18mTY.js";import{r as o}from"./index-Cs7sjTYM.js";import{S as p,a as u}from"./share-gyWV95lJ.js";import{a,C as h}from"./CardAction-BH5bsE-c.js";import"./_commonjsHelpers-BosuxZz1.js";const f=m=>o.createElement("svg",{id:"default",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...m},o.createElement("path",{d:"M10.3301 20.25H13.6159",stroke:"currentColor",strokeWidth:1.5}),o.createElement("path",{d:"M6.23098 13.65V9.525C6.23098 6.33556 8.81653 3.75 12.006 3.75L9.5 7L15.75 13.3L17.781 10.9V13.65L19.6622 16.95H4.34998L6.23098 13.65Z",stroke:"currentColor",strokeWidth:1.5}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.1836 3.46852L15.7316 10.2836L12.2642 6.81603L13.3248 5.75539L15.6073 8.03791L20.0123 2.53149L21.1836 3.46852Z"})),L={title:"Components/Card",component:h,subcomponents:{CardAction:a},tags:["autodocs"],argTypes:{children:{control:"text"}},args:{children:"This is a default card"}},r={args:{id:"default-card"}},e={args:{id:"card-with-actions",actions:[t.jsx(a,{id:"action-1",icon:t.jsx(p,{}),children:"Action 1"}),t.jsx(a,{id:"action-2",icon:t.jsx(u,{}),children:"Action 2"}),t.jsx(a,{id:"action-3",icon:t.jsx(f,{}),active:!0,children:"Action 3"})]}};var i,n,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: "default-card"
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var s,d,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: "card-with-actions",
    actions: [<CardAction id="action-1" icon={<ShareIcon />}>
                Action 1
            </CardAction>, <CardAction id="action-2" icon={<RefreshIcon />}>
                Action 2
            </CardAction>, <CardAction id="action-3" icon={<NotificationsActivatedFill />} active>
                Action 3
            </CardAction>]
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const j=["Default","WithActions"];export{r as Default,e as WithActions,j as __namedExportsOrder,L as default};
