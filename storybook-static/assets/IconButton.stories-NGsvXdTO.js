import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-iU2omdTy.js";import{n,t as r}from"./Badge-Bx_6pBb5.js";var i,a,o,s=e((()=>{i={xs:`[&>svg]:icon-xs`,sm:`[&>svg]:icon-sm`,md:`[&>svg]:icon-md`,lg:`[&>svg]:icon-lg`},a={xs:`h-6 w-6`,sm:`h-7 w-7`,md:`h-8 w-8`,lg:`h-10 w-10`},o={default:`border-subtile`,inverse:`border-white-subtile-inverse`}}));function c({children:e,id:t,variant:r=`bare`,size:s=`md`,borderColor:c=`default`,badge:u=!1,badgeContent:d,badgeAnimate:f=!1,className:p,...m}){return(0,l.jsxs)(`button`,{type:`button`,id:t,"data-testid":t,className:`icon-button relative inline-flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${`${a[s]} ${i[s]}`} ${r===`rounded`?`rounded-full border ${o[c]} before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-opacity hover:enabled:before:opacity-10 active:enabled:before:opacity-20`:`hover:enabled:opacity-70 active:enabled:opacity-50 transition-opacity`} ${p??``}`,...m,children:[e,u&&(0,l.jsx)(n,{id:`${t}-badge`,renderSupTag:!1,animate:f,className:`absolute -top-1 right-1 [translate:50%_0]`,children:d})]})}var l,u=e((()=>{l=t(),r(),s()})),d=e((()=>{u()}));function f(){return(0,m.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,m.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`}),(0,m.jsx)(`line`,{x1:`6`,y1:`18`,x2:`18`,y2:`6`})]})}function p(){return(0,m.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,m.jsx)(`path`,{d:`M12 2a6 6 0 00-6 6v4l-2 2v1h16v-1l-2-2V8a6 6 0 00-6-6zm0 18a2 2 0 002-2h-4a2 2 0 002 2z`})})}var m,h,g,_,v,y,b,x;e((()=>{d(),m=t(),h={title:`Components/IconButton`,component:c,tags:[],argTypes:{variant:{control:`select`,options:[`bare`,`rounded`],description:`Visual style — bare (no border) or rounded (circle with border)`},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`],description:`Button size`},borderColor:{control:`select`,options:[`default`,`inverse`],description:`Border color (only for rounded variant)`},badge:{control:`boolean`,description:`Show notification badge`},disabled:{control:`boolean`,description:`Disabled state`}},args:{id:`icon-button`,variant:`bare`,size:`md`,badge:!1},parameters:{docs:{description:{component:`Button that only contains an icon. Supports bare and rounded variants with optional badge.`}}}},g={args:{variant:`bare`,id:`icon-btn-bare`},render:e=>(0,m.jsx)(c,{...e,children:(0,m.jsx)(f,{})})},_={args:{variant:`rounded`,id:`icon-btn-rounded`},render:e=>(0,m.jsx)(c,{...e,children:(0,m.jsx)(f,{})})},v={args:{variant:`bare`,badge:!0,badgeContent:`3`,id:`icon-btn-badge`},render:e=>(0,m.jsx)(c,{...e,children:(0,m.jsx)(p,{})})},y={render:()=>(0,m.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,m.jsx)(c,{id:`xs`,size:`xs`,variant:`rounded`,children:(0,m.jsx)(f,{})}),(0,m.jsx)(c,{id:`sm`,size:`sm`,variant:`rounded`,children:(0,m.jsx)(f,{})}),(0,m.jsx)(c,{id:`md`,size:`md`,variant:`rounded`,children:(0,m.jsx)(f,{})}),(0,m.jsx)(c,{id:`lg`,size:`lg`,variant:`rounded`,children:(0,m.jsx)(f,{})})]})},b={args:{variant:`rounded`,disabled:!0,id:`icon-btn-disabled`},render:e=>(0,m.jsx)(c,{...e,children:(0,m.jsx)(f,{})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bare",
    id: "icon-btn-bare"
  },
  render: args => <IconButton {...args}>
      <CloseIcon />
    </IconButton>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rounded",
    id: "icon-btn-rounded"
  },
  render: args => <IconButton {...args}>
      <CloseIcon />
    </IconButton>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bare",
    badge: true,
    badgeContent: "3",
    id: "icon-btn-badge"
  },
  render: args => <IconButton {...args}>
      <BellIcon />
    </IconButton>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <IconButton id="xs" size="xs" variant="rounded"><CloseIcon /></IconButton>
      <IconButton id="sm" size="sm" variant="rounded"><CloseIcon /></IconButton>
      <IconButton id="md" size="md" variant="rounded"><CloseIcon /></IconButton>
      <IconButton id="lg" size="lg" variant="rounded"><CloseIcon /></IconButton>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rounded",
    disabled: true,
    id: "icon-btn-disabled"
  },
  render: args => <IconButton {...args}>
      <CloseIcon />
    </IconButton>
}`,...b.parameters?.docs?.source}}},x=[`Bare`,`Rounded`,`WithBadge`,`Sizes`,`Disabled`]}))();export{g as Bare,b as Disabled,_ as Rounded,y as Sizes,v as WithBadge,x as __namedExportsOrder,h as default};