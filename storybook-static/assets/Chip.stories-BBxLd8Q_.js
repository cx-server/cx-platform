import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Cd-Mih9Z.js";import{n,t as r}from"./close-icon-B7rDXCnk.js";function i({children:e,id:t,className:n,selected:i=!1,variant:s=`primary`,closeable:c=!1,onCloseClick:l,...u}){let d=n?` ${n}`:``,f=i?` selected`:``,p=i?` text-icon-white`:` text-icon-subtile`;return(0,a.jsxs)(`div`,{id:t,"data-testid":t,"aria-selected":i,className:`chip${f} ${o[s]}  ${d}`,...u,children:[(0,a.jsx)(`span`,{className:`block flex-1 whitespace-nowrap`,children:e}),c&&l?(0,a.jsx)(r,{"data-testid":`chip-close-button`,className:`h-6 w-6 flex-none cursor-pointer${p}`,onClick:l}):null]})}var a,o,s=e((()=>{a=t(),n(),o={primary:``,accent:`chip-accent`,positive:`chip-positive`,warning:`chip-warning`,negative:`chip-negative`}})),c=e((()=>{t()})),l=e((()=>{s(),c()})),u,d,f,p,m,h,g,_,v,y,b;e((()=>{l(),u=t(),d={title:`Components/Chip`,component:i,tags:[],argTypes:{variant:{control:`select`,options:[`primary`,`accent`,`positive`,`warning`,`negative`]},selected:{control:`boolean`},closeable:{control:`boolean`}},args:{id:`chip-demo`,variant:`primary`,selected:!1,closeable:!1}},f={args:{id:`chip-default`,children:`Football`}},p={args:{id:`chip-selected`,children:`Live`,selected:!0}},m={args:{id:`chip-closeable`,children:`Filter`,closeable:!0,onCloseClick:()=>{}}},h={args:{id:`chip-accent`,variant:`accent`,children:`Promoted`}},g={args:{id:`chip-positive`,variant:`positive`,children:`Active`}},_={args:{id:`chip-warning`,variant:`warning`,children:`Pending`}},v={args:{id:`chip-negative`,variant:`negative`,children:`Expired`}},y={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,u.jsx)(i,{id:`c-primary`,variant:`primary`,children:`Primary`}),(0,u.jsx)(i,{id:`c-accent`,variant:`accent`,children:`Accent`}),(0,u.jsx)(i,{id:`c-positive`,variant:`positive`,children:`Positive`}),(0,u.jsx)(i,{id:`c-warning`,variant:`warning`,children:`Warning`}),(0,u.jsx)(i,{id:`c-negative`,variant:`negative`,children:`Negative`}),(0,u.jsx)(i,{id:`c-selected`,variant:`primary`,selected:!0,children:`Selected`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-default",
    children: "Football"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-selected",
    children: "Live",
    selected: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-closeable",
    children: "Filter",
    closeable: true,
    onCloseClick: () => {}
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-accent",
    variant: "accent",
    children: "Promoted"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-positive",
    variant: "positive",
    children: "Active"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-warning",
    variant: "warning",
    children: "Pending"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "chip-negative",
    variant: "negative",
    children: "Expired"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Selected`,`Closeable`,`Accent`,`Positive`,`Warning`,`Negative`,`AllVariants`]}))();export{h as Accent,y as AllVariants,m as Closeable,f as Default,v as Negative,g as Positive,p as Selected,_ as Warning,b as __namedExportsOrder,d as default};