import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-iU2omdTy.js";var i,a,o,s,c,l,u,d,f=e((()=>{i=r(),a=t(n(),1),o={default:``,selected:`border-highlight shadow-input-box`,typing:`border-highlight shadow-input-box`,disabled:``,error:`border-subtile`,empty:`border-subtile`},s=`text-highlight`,c={default:s,selected:`text-subtile`,typing:s,disabled:`text-standard`,error:`text-subtile`,empty:s},l=`relative flex flex-col justify-center p-2 w-full h-full min-w-10 min-h-[60px] bg-input border border-standard border-opacity-standard rounded-inputs`,u=`text-base font-normal animate-blink`,d=(0,a.forwardRef)(({id:e,className:t,multiplier:n,currency:r,children:a,labelComponent:s,label:d,isCentered:f,blinkingCursorPosition:p,status:m=`default`,currencyPosition:h=`right`,...g},_)=>{let v=t?`${t}`:``,y=f?`items-center`:``;return(0,i.jsxs)(`div`,{id:e,className:`${l} ${o[m]} ${y} ${v}`,...g,children:[(s||d)&&(0,i.jsx)(`label`,{"data-testid":`${e}-label`,className:`text-xs text-subtile font-normal`,children:s||d}),(0,i.jsxs)(`div`,{ref:_,id:`${e}-value`,className:`flex flex-row text-lg font-semibold items-center`,children:[n&&(0,i.jsx)(`span`,{className:`text-subtile pr-0.5 font-normal`,children:n}),r&&h===`left`&&(0,i.jsx)(`span`,{className:`${c[m]} mr-0.5`,children:r}),p===`left`&&(0,i.jsx)(`div`,{className:u,children:`|`}),(0,i.jsx)(`div`,{className:`${c[m]}`,children:a}),p===`right`&&(0,i.jsx)(`div`,{className:u,children:`|`}),r&&h===`right`&&(0,i.jsx)(`span`,{className:`${c[m]} ml-0.5`,children:r})]})]})}),d.displayName=`InputBox`,d.__docgenInfo={description:``,methods:[],displayName:`InputBox`,props:{status:{defaultValue:{value:`"default"`,computed:!1},required:!1},currencyPosition:{defaultValue:{value:`"right"`,computed:!1},required:!1}}}})),p=e((()=>{f()})),m,h,g,_,v,y,b,x;e((()=>{p(),m=r(),h={title:`Components/InputBox`,component:d,tags:[],argTypes:{status:{control:`select`,options:[`default`,`selected`,`typing`,`disabled`,`error`,`empty`],description:`Input state`},isCentered:{control:`boolean`,description:`Center content horizontally`},currencyPosition:{control:`select`,options:[`left`,`right`],description:`Position of currency symbol`}},args:{id:`input-box`,status:`default`,isCentered:!0},parameters:{docs:{description:{component:`Numeric input display box with label, currency, multiplier, and blinking cursor support. Used for bet amount entry.`}}}},g={args:{id:`inputbox-default`},render:e=>(0,m.jsx)(d,{...e,label:`Stake`,children:(0,m.jsx)(`span`,{children:`10.00`})})},_={args:{id:`inputbox-currency`,currency:`€`},render:e=>(0,m.jsx)(d,{...e,label:`Amount`,children:(0,m.jsx)(`span`,{children:`25.00`})})},v={args:{id:`inputbox-typing`,status:`typing`,blinkingCursorPosition:`right`,currency:`€`},render:e=>(0,m.jsx)(d,{...e,label:`Stake`,children:(0,m.jsx)(`span`,{children:`10`})})},y={args:{id:`inputbox-error`,status:`error`},render:e=>(0,m.jsx)(d,{...e,label:`Stake`,children:(0,m.jsx)(`span`,{children:`0.00`})})},b={args:{id:`inputbox-empty`,status:`empty`,blinkingCursorPosition:`left`,currency:`€`},render:e=>(0,m.jsx)(d,{...e,label:`Enter amount`,children:(0,m.jsx)(`span`,{})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputbox-default"
  },
  render: args => <InputBox {...args} label="Stake">
      <span>10.00</span>
    </InputBox>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputbox-currency",
    currency: "€"
  },
  render: args => <InputBox {...args} label="Amount">
      <span>25.00</span>
    </InputBox>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputbox-typing",
    status: "typing",
    blinkingCursorPosition: "right",
    currency: "€"
  },
  render: args => <InputBox {...args} label="Stake">
      <span>10</span>
    </InputBox>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputbox-error",
    status: "error"
  },
  render: args => <InputBox {...args} label="Stake">
      <span>0.00</span>
    </InputBox>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "inputbox-empty",
    status: "empty",
    blinkingCursorPosition: "left",
    currency: "€"
  },
  render: args => <InputBox {...args} label="Enter amount">
      <span></span>
    </InputBox>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithCurrency`,`Typing`,`Error`,`Empty`]}))();export{g as Default,b as Empty,y as Error,v as Typing,_ as WithCurrency,x as __namedExportsOrder,h as default};