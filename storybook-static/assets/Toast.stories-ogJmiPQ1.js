import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-Cf3IHaYg.js";import{n as r,t as i}from"./Toast-CFfQl6tr.js";var a=e({AllVariants:()=>p,Info:()=>l,Negative:()=>d,Neutral:()=>c,Positive:()=>u,Warning:()=>f,__namedExportsOrder:()=>m,default:()=>s}),o,s,c,l,u,d,f,p,m,h=t((()=>{i(),o=n(),s={title:`Components/Toast`,component:r,tags:[],argTypes:{status:{control:`select`,options:[`neutral`,`info`,`negative`,`positive`,`warning`]},show:{control:`boolean`}},args:{id:`toast-demo`,status:`neutral`,show:!0}},c={args:{id:`toast-neutral`,status:`neutral`,children:`Something happened.`}},l={args:{id:`toast-info`,status:`info`,children:`Your bet has been placed.`}},u={args:{id:`toast-positive`,status:`positive`,children:`Deposit successful!`}},d={args:{id:`toast-negative`,status:`negative`,children:`Payment failed.`}},f={args:{id:`toast-warning`,status:`warning`,children:`Session expiring soon.`}},p={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,maxWidth:`360px`},children:[(0,o.jsx)(r,{id:`t-neutral`,status:`neutral`,show:!0,children:`Neutral message`}),(0,o.jsx)(r,{id:`t-info`,status:`info`,show:!0,children:`Info message`}),(0,o.jsx)(r,{id:`t-positive`,status:`positive`,show:!0,children:`Success message`}),(0,o.jsx)(r,{id:`t-negative`,status:`negative`,show:!0,children:`Error message`}),(0,o.jsx)(r,{id:`t-warning`,status:`warning`,show:!0,children:`Warning message`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-neutral",
    status: "neutral",
    children: "Something happened."
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-info",
    status: "info",
    children: "Your bet has been placed."
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-positive",
    status: "positive",
    children: "Deposit successful!"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-negative",
    status: "negative",
    children: "Payment failed."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-warning",
    status: "warning",
    children: "Session expiring soon."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    maxWidth: "360px"
  }}>
      <Toast id="t-neutral" status="neutral" show>Neutral message</Toast>
      <Toast id="t-info" status="info" show>Info message</Toast>
      <Toast id="t-positive" status="positive" show>Success message</Toast>
      <Toast id="t-negative" status="negative" show>Error message</Toast>
      <Toast id="t-warning" status="warning" show>Warning message</Toast>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Neutral`,`Info`,`Positive`,`Negative`,`Warning`,`AllVariants`]}));h();export{p as AllVariants,l as Info,d as Negative,c as Neutral,u as Positive,f as Warning,m as __namedExportsOrder,s as default,h as n,a as t};