import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-iU2omdTy.js";function i({id:e,value:t,onChange:n,className:r,minLabel:i,maxLabel:o,min:s=0,max:c=100,decimalPlaces:l=0,decimalSeparator:u=`.`}){let d=1/10**l,f=Math.round((t-s)/(c-s)*100),p=t<s,m=t>c,h=p||m?`slider-input-negative`:``,g=e=>{n(Number(e.target.value))},_=e=>{let t=e.toFixed(l);return u===`,`?t.replace(`.`,`,`):t};return(0,a.jsxs)(`div`,{id:e,"data-testid":e,className:`w-full flex flex-col gap-4 pt-6 px-1 ${r??``}`,children:[(0,a.jsx)(`input`,{type:`range`,min:s,max:c,step:d,value:t,onChange:g,style:{"--slider-percent":`${f}%`},className:`slider-input ${h}`}),(0,a.jsxs)(`div`,{className:`flex justify-between text-standard text-sm`,children:[(0,a.jsxs)(`div`,{className:p?`text-negative`:``,children:[i,(0,a.jsx)(`span`,{className:`font-semibold`,children:_(s)})]}),(0,a.jsxs)(`div`,{className:m?`text-negative`:``,children:[o,(0,a.jsx)(`span`,{className:`font-semibold`,children:_(c)})]})]})]})}var a,o=e((()=>{a=r()})),s,c,l,u,d,f,p;e((()=>{s=t(n(),1),o(),c=r(),l={title:`Components/Slider`,component:i,tags:[],argTypes:{min:{control:`number`,description:`Minimum value`},max:{control:`number`,description:`Maximum value`},decimalPlaces:{control:`number`,description:`Number of decimal places`},decimalSeparator:{control:`select`,options:[`.`,`,`],description:`Decimal separator`}},parameters:{docs:{description:{component:`Range slider with min/max labels and decimal formatting. Used for bet amount, limit, and threshold selection.`}}}},u={render:()=>{let[e,t]=(0,s.useState)(50);return(0,c.jsx)(i,{id:`slider-default`,value:e,onChange:t,min:0,max:100})}},d={render:()=>{let[e,t]=(0,s.useState)(25.5);return(0,c.jsx)(i,{id:`slider-decimals`,value:e,onChange:t,min:1,max:100,decimalPlaces:2,decimalSeparator:`,`,minLabel:`Min `,maxLabel:`Max `})}},f={render:()=>{let[e,t]=(0,s.useState)(10);return(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsxs)(`span`,{className:`text-highlight font-semibold text-lg`,children:[e.toFixed(2),` €`]}),(0,c.jsx)(i,{id:`slider-bet`,value:e,onChange:t,min:1,max:200,decimalPlaces:0,minLabel:``,maxLabel:``})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider id="slider-default" value={value} onChange={setValue} min={0} max={100} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(25.5);
    return <Slider id="slider-decimals" value={value} onChange={setValue} min={1} max={100} decimalPlaces={2} decimalSeparator="," minLabel="Min " maxLabel="Max " />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(10);
    return <div className="flex flex-col gap-2">
        <span className="text-highlight font-semibold text-lg">{value.toFixed(2)} €</span>
        <Slider id="slider-bet" value={value} onChange={setValue} min={1} max={200} decimalPlaces={0} minLabel="" maxLabel="" />
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithDecimals`,`BetAmount`]}))();export{f as BetAmount,u as Default,d as WithDecimals,p as __namedExportsOrder,l as default};