import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-KPsbbk9f.js";import{n,t as r}from"./Label-Cyu7LoQS.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{n(),i=t(),a={title:`Components/Label`,component:r,tags:[],argTypes:{variant:{control:`select`,options:[`neutral`,`accent`,`negative`,`positive`,`warning`],description:`Color variant`},inactive:{control:`boolean`,description:`Dimmed/inactive state`}},args:{id:`label`,variant:`neutral`,inactive:!1,children:`Label`},parameters:{docs:{description:{component:`Colored tag/label component with optional left and right icons. Used for categorization and status indicators.`}}}},o={args:{id:`label-neutral`,variant:`neutral`,children:`Default`}},s={args:{id:`label-accent`,variant:`accent`,children:`Featured`}},c={args:{id:`label-positive`,variant:`positive`,children:`Won`}},l={args:{id:`label-negative`,variant:`negative`,children:`Lost`}},u={args:{id:`label-warning`,variant:`warning`,children:`Pending`}},d={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,i.jsx)(r,{id:`v-neutral`,variant:`neutral`,children:`Neutral`}),(0,i.jsx)(r,{id:`v-accent`,variant:`accent`,children:`Accent`}),(0,i.jsx)(r,{id:`v-positive`,variant:`positive`,children:`Positive`}),(0,i.jsx)(r,{id:`v-negative`,variant:`negative`,children:`Negative`}),(0,i.jsx)(r,{id:`v-warning`,variant:`warning`,children:`Warning`})]})},f={args:{id:`label-inactive`,variant:`accent`,inactive:!0,children:`Inactive`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-neutral",
    variant: "neutral",
    children: "Default"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-accent",
    variant: "accent",
    children: "Featured"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-positive",
    variant: "positive",
    children: "Won"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-negative",
    variant: "negative",
    children: "Lost"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-warning",
    variant: "warning",
    children: "Pending"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Label id="v-neutral" variant="neutral">Neutral</Label>
      <Label id="v-accent" variant="accent">Accent</Label>
      <Label id="v-positive" variant="positive">Positive</Label>
      <Label id="v-negative" variant="negative">Negative</Label>
      <Label id="v-warning" variant="warning">Warning</Label>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "label-inactive",
    variant: "accent",
    inactive: true,
    children: "Inactive"
  }
}`,...f.parameters?.docs?.source}}},p=[`Neutral`,`Accent`,`Positive`,`Negative`,`Warning`,`AllVariants`,`Inactive`]}))();export{s as Accent,d as AllVariants,f as Inactive,l as Negative,o as Neutral,c as Positive,u as Warning,p as __namedExportsOrder,a as default};