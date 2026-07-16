import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-iU2omdTy.js";function n({id:e,className:t,multiplier:n,currency:u,children:d,label:f,blinkingCursorPosition:p,status:m=i,description:h,...g}){let _=a[m]??a[i],v=o[m]??o[i],y=s[m]??s[i];return(0,r.jsxs)(`div`,{className:`flex flex-col gap-2 py-2 w-full`,children:[(0,r.jsxs)(`div`,{id:e,"data-testid":e,className:`${c} ${_} ${p?`shadow-input-box`:``} ${p&&m===`error`?`border-standard`:``} ${t??``}`,...g,children:[f&&(0,r.jsx)(`div`,{"data-testid":`inputbox-label`,className:`text-xs text-subtile font-normal h-4 shrink-0 self-stretch text-center`,children:f}),(0,r.jsxs)(`div`,{className:`flex flex-row text-2xl font-semibold items-center`,children:[n&&(0,r.jsx)(`span`,{className:`text-subtile pr-0.5 font-normal`,children:n}),p===`left`&&(0,r.jsx)(`div`,{"data-testid":`${e}-blinking-cursor`,className:l}),(0,r.jsx)(`div`,{className:v,children:d}),p===`right`&&(0,r.jsx)(`div`,{"data-testid":`${e}-blinking-cursor`,className:l}),u&&(0,r.jsx)(`span`,{className:`${o[m]} ml-0.5`,children:u})]})]}),h&&(0,r.jsx)(`div`,{className:`text-center ${y}`,children:h})]})}var r,i,a,o,s,c,l,u=e((()=>{r=t(),i=`default`,a={default:`bg-input border-standard border-opacity-standard`,error:`bg-input border-negative`,disabled:`border-standard border-opacity-standard opacity-70`},o={default:`text-highlight`,placeholder:`text-subtile`,error:`text-highlight`,disabled:`text-standard`},s={default:`text-standard`,error:`text-negative`,disabled:`text-standard opacity-70`},c=`relative flex flex-col justify-center items-center gap-0.5 p-2 min-w-10 min-h-12 border rounded-inputs`,l=`text-base font-normal animate-blink h-8 border-r`})),d,f,p,m,h,g,_,v;e((()=>{u(),d=t(),f={title:`Components/InputEmphasis`,component:n,tags:[],argTypes:{status:{control:`select`,options:[`default`,`placeholder`,`error`,`disabled`],description:`Input state`},blinkingCursorPosition:{control:`select`,options:[void 0,`left`,`right`],description:`Blinking cursor position`}},args:{id:`input-emphasis`,status:`default`},parameters:{docs:{description:{component:`Centered, emphasized numeric input display. Used for prominent value entry (e.g. cashout amount).`}}}},p={args:{id:`emphasis-default`,currency:`€`,label:`Amount`},render:e=>(0,d.jsx)(n,{...e,children:(0,d.jsx)(`span`,{children:`50.00`})})},m={args:{id:`emphasis-multi`,multiplier:`x`,currency:`€`,label:`Potential Win`},render:e=>(0,d.jsx)(n,{...e,children:(0,d.jsx)(`span`,{children:`125.50`})})},h={args:{id:`emphasis-cursor`,blinkingCursorPosition:`right`,currency:`€`,label:`Stake`},render:e=>(0,d.jsx)(n,{...e,children:(0,d.jsx)(`span`,{children:`10`})})},g={args:{id:`emphasis-error`,status:`error`,currency:`€`,label:`Stake`,description:`Minimum stake is €1.00`},render:e=>(0,d.jsx)(n,{...e,children:(0,d.jsx)(`span`,{children:`0.50`})})},_={args:{id:`emphasis-disabled`,status:`disabled`,currency:`€`,label:`Stake`},render:e=>(0,d.jsx)(n,{...e,children:(0,d.jsx)(`span`,{children:`10.00`})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "emphasis-default",
    currency: "€",
    label: "Amount"
  },
  render: args => <InputEmphasis {...args}>
      <span>50.00</span>
    </InputEmphasis>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "emphasis-multi",
    multiplier: "x",
    currency: "€",
    label: "Potential Win"
  },
  render: args => <InputEmphasis {...args}>
      <span>125.50</span>
    </InputEmphasis>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "emphasis-cursor",
    blinkingCursorPosition: "right",
    currency: "€",
    label: "Stake"
  },
  render: args => <InputEmphasis {...args}>
      <span>10</span>
    </InputEmphasis>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "emphasis-error",
    status: "error",
    currency: "€",
    label: "Stake",
    description: "Minimum stake is €1.00"
  },
  render: args => <InputEmphasis {...args}>
      <span>0.50</span>
    </InputEmphasis>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "emphasis-disabled",
    status: "disabled",
    currency: "€",
    label: "Stake"
  },
  render: args => <InputEmphasis {...args}>
      <span>10.00</span>
    </InputEmphasis>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithMultiplier`,`WithCursor`,`ErrorState`,`Disabled`]}))();export{p as Default,_ as Disabled,g as ErrorState,h as WithCursor,m as WithMultiplier,v as __namedExportsOrder,f as default};