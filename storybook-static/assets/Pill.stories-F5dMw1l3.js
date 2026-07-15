import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-B2mmKava.js";var a,o,s,c,l=t((()=>{a=i(),o=n(r(),1),s={neutral:`pill-neutral`,info:`pill-info`,negative:`pill-negative`,positive:`pill-positive`,warning:`pill-warning`},c=(0,o.forwardRef)(({children:e,id:t,className:n,inactive:r=!1,variant:i=`neutral`,rightIconComponent:c,leftIconComponent:l,childrenClassName:u,...d},f)=>{let p=r?` inactive`:``,m=(e,t)=>e?o.isValidElement(e)?o.cloneElement(e,{className:`${t} ${e.props.className||``}`.trim()}):(0,a.jsx)(e,{className:t}):null,h=m(l,`pill-left-icon`),g=m(c,`pill-right-icon`);return(0,a.jsxs)(`div`,{id:t,"data-testid":t,"aria-disabled":r,className:`pill ${s[i]} ${p} ${n??``}`,ref:f,...d,children:[h,e&&(0,a.jsx)(`div`,{className:`py-0.5 px-1 whitespace-nowrap ${u??``}`,children:e}),g]})}),c.__docgenInfo={description:``,methods:[],displayName:`Pill`,props:{inactive:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`"neutral"`,computed:!1},required:!1}}}})),u=e({AllVariants:()=>y,Default:()=>p,Inactive:()=>v,Info:()=>m,Negative:()=>g,Positive:()=>h,Warning:()=>_,__namedExportsOrder:()=>b,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x=t((()=>{l(),d=i(),f={title:`Components/Pill`,component:c,tags:[],argTypes:{variant:{control:`select`,options:[`neutral`,`info`,`negative`,`positive`,`warning`]},inactive:{control:`boolean`}},args:{id:`pill-demo`,variant:`neutral`,inactive:!1}},p={args:{id:`pill-default`,children:`Live`}},m={args:{id:`pill-info`,variant:`info`,children:`New`}},h={args:{id:`pill-positive`,variant:`positive`,children:`Won`}},g={args:{id:`pill-negative`,variant:`negative`,children:`Lost`}},_={args:{id:`pill-warning`,variant:`warning`,children:`Pending`}},v={args:{id:`pill-inactive`,variant:`neutral`,inactive:!0,children:`Expired`}},y={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,d.jsx)(c,{id:`p-neutral`,variant:`neutral`,children:`Neutral`}),(0,d.jsx)(c,{id:`p-info`,variant:`info`,children:`Info`}),(0,d.jsx)(c,{id:`p-positive`,variant:`positive`,children:`Positive`}),(0,d.jsx)(c,{id:`p-negative`,variant:`negative`,children:`Negative`}),(0,d.jsx)(c,{id:`p-warning`,variant:`warning`,children:`Warning`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-default",
    children: "Live"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-info",
    variant: "info",
    children: "New"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-positive",
    variant: "positive",
    children: "Won"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-negative",
    variant: "negative",
    children: "Lost"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-warning",
    variant: "warning",
    children: "Pending"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-inactive",
    variant: "neutral",
    inactive: true,
    children: "Expired"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <Pill id="p-neutral" variant="neutral">Neutral</Pill>
      <Pill id="p-info" variant="info">Info</Pill>
      <Pill id="p-positive" variant="positive">Positive</Pill>
      <Pill id="p-negative" variant="negative">Negative</Pill>
      <Pill id="p-warning" variant="warning">Warning</Pill>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Info`,`Positive`,`Negative`,`Warning`,`Inactive`,`AllVariants`]}));x();export{y as AllVariants,p as Default,v as Inactive,m as Info,g as Negative,h as Positive,_ as Warning,b as __namedExportsOrder,f as default,x as n,u as t};