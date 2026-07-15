import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-CME29FwW.js";import{n as r,t as i}from"./close-icon-C-e9z_L7.js";function a({children:e,id:t,className:n,selected:r=!1,variant:a=`primary`,closeable:c=!1,onCloseClick:l,...u}){let d=n?` ${n}`:``,f=r?` selected`:``,p=r?` text-icon-white`:` text-icon-subtile`;return(0,o.jsxs)(`div`,{id:t,"data-testid":t,"aria-selected":r,className:`chip${f} ${s[a]}  ${d}`,...u,children:[(0,o.jsx)(`span`,{className:`block flex-1 whitespace-nowrap`,children:e}),c&&l?(0,o.jsx)(i,{"data-testid":`chip-close-button`,className:`h-6 w-6 flex-none cursor-pointer${p}`,onClick:l}):null]})}var o,s,c=t((()=>{o=n(),r(),s={primary:``,accent:`chip-accent`,positive:`chip-positive`,warning:`chip-warning`,negative:`chip-negative`}})),l=t((()=>{n()})),u=t((()=>{c(),l()})),d=e({Accent:()=>_,AllVariants:()=>x,Closeable:()=>g,Default:()=>m,Negative:()=>b,Positive:()=>v,Selected:()=>h,Warning:()=>y,__namedExportsOrder:()=>S,default:()=>p}),f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{u(),f=n(),p={title:`Components/Chip`,component:a,tags:[],argTypes:{variant:{control:`select`,options:[`primary`,`accent`,`positive`,`warning`,`negative`]},selected:{control:`boolean`},closeable:{control:`boolean`}},args:{id:`chip-demo`,variant:`primary`,selected:!1,closeable:!1}},m={args:{id:`chip-default`,children:`Football`}},h={args:{id:`chip-selected`,children:`Live`,selected:!0}},g={args:{id:`chip-closeable`,children:`Filter`,closeable:!0,onCloseClick:()=>{}}},_={args:{id:`chip-accent`,variant:`accent`,children:`Promoted`}},v={args:{id:`chip-positive`,variant:`positive`,children:`Active`}},y={args:{id:`chip-warning`,variant:`warning`,children:`Pending`}},b={args:{id:`chip-negative`,variant:`negative`,children:`Expired`}},x={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,f.jsx)(a,{id:`c-primary`,variant:`primary`,children:`Primary`}),(0,f.jsx)(a,{id:`c-accent`,variant:`accent`,children:`Accent`}),(0,f.jsx)(a,{id:`c-positive`,variant:`positive`,children:`Positive`}),(0,f.jsx)(a,{id:`c-warning`,variant:`warning`,children:`Warning`}),(0,f.jsx)(a,{id:`c-negative`,variant:`negative`,children:`Negative`}),(0,f.jsx)(a,{id:`c-selected`,variant:`primary`,selected:!0,children:`Selected`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-default",
    children: "Football"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-selected",
    children: "Live",
    selected: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-closeable",
    children: "Filter",
    closeable: true,
    onCloseClick: () => {}
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-accent",
    variant: "accent",
    children: "Promoted"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-positive",
    variant: "positive",
    children: "Active"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-warning",
    variant: "warning",
    children: "Pending"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-negative",
    variant: "negative",
    children: "Expired"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <Chip id="c-primary" variant="primary">Primary</Chip>
      <Chip id="c-accent" variant="accent">Accent</Chip>
      <Chip id="c-positive" variant="positive">Positive</Chip>
      <Chip id="c-warning" variant="warning">Warning</Chip>
      <Chip id="c-negative" variant="negative">Negative</Chip>
      <Chip id="c-selected" variant="primary" selected>Selected</Chip>
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Selected`,`Closeable`,`Accent`,`Positive`,`Warning`,`Negative`,`AllVariants`]}));C();export{_ as Accent,x as AllVariants,g as Closeable,m as Default,b as Negative,v as Positive,h as Selected,y as Warning,S as __namedExportsOrder,p as default,C as n,d as t};