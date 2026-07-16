import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-iU2omdTy.js";function n({children:e,id:t,className:n=``,childrenClassName:a=``,inactive:o=!1,variant:s=`neutral`,rightIconComponent:c,leftIconComponent:l,...u}){let d=o?` inactive`:``;return(0,r.jsxs)(`div`,{id:t,"data-testid":t,"aria-disabled":o,className:`label-common ${i[s]||i.neutral} ${d} ${n}`,...u,children:[l&&(0,r.jsx)(`div`,{className:`label-common-left-icon`,children:l}),e&&(0,r.jsx)(`div`,{className:`py-0.5 px-1 whitespace-nowrap ${a}`,children:e}),c&&(0,r.jsx)(`div`,{className:`label-common-right-icon`,children:c})]})}var r,i,a=e((()=>{r=t(),i={neutral:`label-common-neutral`,accent:`label-common-accent`,negative:`label-common-negative`,positive:`label-common-positive`,warning:`label-common-warning`}})),o,s,c,l,u,d,f,p,m,h;e((()=>{a(),o=t(),s={title:`Components/Label`,component:n,tags:[],argTypes:{variant:{control:`select`,options:[`neutral`,`accent`,`negative`,`positive`,`warning`],description:`Color variant`},inactive:{control:`boolean`,description:`Dimmed/inactive state`}},args:{id:`label`,variant:`neutral`,inactive:!1,children:`Label`},parameters:{docs:{description:{component:`Colored tag/label component with optional left and right icons. Used for categorization and status indicators.`}}}},c={args:{id:`label-neutral`,variant:`neutral`,children:`Default`}},l={args:{id:`label-accent`,variant:`accent`,children:`Featured`}},u={args:{id:`label-positive`,variant:`positive`,children:`Won`}},d={args:{id:`label-negative`,variant:`negative`,children:`Lost`}},f={args:{id:`label-warning`,variant:`warning`,children:`Pending`}},p={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,o.jsx)(n,{id:`v-neutral`,variant:`neutral`,children:`Neutral`}),(0,o.jsx)(n,{id:`v-accent`,variant:`accent`,children:`Accent`}),(0,o.jsx)(n,{id:`v-positive`,variant:`positive`,children:`Positive`}),(0,o.jsx)(n,{id:`v-negative`,variant:`negative`,children:`Negative`}),(0,o.jsx)(n,{id:`v-warning`,variant:`warning`,children:`Warning`})]})},m={args:{id:`label-inactive`,variant:`accent`,inactive:!0,children:`Inactive`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-neutral",
    variant: "neutral",
    children: "Default"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-accent",
    variant: "accent",
    children: "Featured"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-positive",
    variant: "positive",
    children: "Won"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-negative",
    variant: "negative",
    children: "Lost"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-warning",
    variant: "warning",
    children: "Pending"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Label id="v-neutral" variant="neutral">Neutral</Label>
      <Label id="v-accent" variant="accent">Accent</Label>
      <Label id="v-positive" variant="positive">Positive</Label>
      <Label id="v-negative" variant="negative">Negative</Label>
      <Label id="v-warning" variant="warning">Warning</Label>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-inactive",
    variant: "accent",
    inactive: true,
    children: "Inactive"
  }
}`,...m.parameters?.docs?.source}}},h=[`Neutral`,`Accent`,`Positive`,`Negative`,`Warning`,`AllVariants`,`Inactive`]}))();export{l as Accent,p as AllVariants,m as Inactive,d as Negative,c as Neutral,u as Positive,f as Warning,h as __namedExportsOrder,s as default};