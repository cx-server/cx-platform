import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-B76dCzL_.js";var i,a,o,s,c=e((()=>{i=r(),a=t(n(),1),o={neutral:`pill-neutral`,info:`pill-info`,negative:`pill-negative`,positive:`pill-positive`,warning:`pill-warning`},s=(0,a.forwardRef)(({children:e,id:t,className:n,inactive:r=!1,variant:s=`neutral`,rightIconComponent:c,leftIconComponent:l,childrenClassName:u,...d},f)=>{let p=r?` inactive`:``,m=(e,t)=>e?a.isValidElement(e)?a.cloneElement(e,{className:`${t} ${e.props.className||``}`.trim()}):(0,i.jsx)(e,{className:t}):null,h=m(l,`pill-left-icon`),g=m(c,`pill-right-icon`);return(0,i.jsxs)(`div`,{id:t,"data-testid":t,"aria-disabled":r,className:`pill ${o[s]} ${p} ${n??``}`,ref:f,...d,children:[h,e&&(0,i.jsx)(`div`,{className:`py-0.5 px-1 whitespace-nowrap ${u??``}`,children:e}),g]})}),s.__docgenInfo={description:``,methods:[],displayName:`Pill`,props:{inactive:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`"neutral"`,computed:!1},required:!1}}}})),l,u,d,f,p,m,h,g,_,v;e((()=>{c(),l=r(),u={title:`Components/Pill`,component:s,tags:[],argTypes:{variant:{control:`select`,options:[`neutral`,`info`,`negative`,`positive`,`warning`]},inactive:{control:`boolean`}},args:{id:`pill-demo`,variant:`neutral`,inactive:!1}},d={args:{id:`pill-default`,children:`Live`}},f={args:{id:`pill-info`,variant:`info`,children:`New`}},p={args:{id:`pill-positive`,variant:`positive`,children:`Won`}},m={args:{id:`pill-negative`,variant:`negative`,children:`Lost`}},h={args:{id:`pill-warning`,variant:`warning`,children:`Pending`}},g={args:{id:`pill-inactive`,variant:`neutral`,inactive:!0,children:`Expired`}},_={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,l.jsx)(s,{id:`p-neutral`,variant:`neutral`,children:`Neutral`}),(0,l.jsx)(s,{id:`p-info`,variant:`info`,children:`Info`}),(0,l.jsx)(s,{id:`p-positive`,variant:`positive`,children:`Positive`}),(0,l.jsx)(s,{id:`p-negative`,variant:`negative`,children:`Negative`}),(0,l.jsx)(s,{id:`p-warning`,variant:`warning`,children:`Warning`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-default",
    children: "Live"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-info",
    variant: "info",
    children: "New"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-positive",
    variant: "positive",
    children: "Won"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-negative",
    variant: "negative",
    children: "Lost"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-warning",
    variant: "warning",
    children: "Pending"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-inactive",
    variant: "neutral",
    inactive: true,
    children: "Expired"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Info`,`Positive`,`Negative`,`Warning`,`Inactive`,`AllVariants`]}))();export{_ as AllVariants,d as Default,g as Inactive,f as Info,m as Negative,p as Positive,h as Warning,v as __namedExportsOrder,u as default};