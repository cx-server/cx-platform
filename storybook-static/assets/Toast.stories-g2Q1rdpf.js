import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-Cd-Mih9Z.js";function i({status:e=`neutral`,show:t=!0,onHide:n,autoHideDelay:r,children:i,className:c,...l}){return(0,o.useEffect)(()=>{if(t&&n&&r){let e=setTimeout(n,r);return()=>clearTimeout(e)}},[t,n,r]),t?(0,a.jsx)(`div`,{"data-testid":l.id,className:`toast ${s[e]} ${c??``}`,...l,children:i}):null}var a,o,s,c=e((()=>{a=r(),o=t(n(),1),s={neutral:`toast-neutral`,info:`toast-info`,negative:`toast-negative`,positive:`toast-positive`,warning:`toast-warning`}})),l=e((()=>{c()})),u,d,f,p,m,h,g,_,v;e((()=>{l(),u=r(),d={title:`Components/Toast`,component:i,tags:[],argTypes:{status:{control:`select`,options:[`neutral`,`info`,`negative`,`positive`,`warning`]},show:{control:`boolean`}},args:{id:`toast-demo`,status:`neutral`,show:!0}},f={args:{id:`toast-neutral`,status:`neutral`,children:`Something happened.`}},p={args:{id:`toast-info`,status:`info`,children:`Your bet has been placed.`}},m={args:{id:`toast-positive`,status:`positive`,children:`Deposit successful!`}},h={args:{id:`toast-negative`,status:`negative`,children:`Payment failed.`}},g={args:{id:`toast-warning`,status:`warning`,children:`Session expiring soon.`}},_={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,maxWidth:`360px`},children:[(0,u.jsx)(i,{id:`t-neutral`,status:`neutral`,show:!0,children:`Neutral message`}),(0,u.jsx)(i,{id:`t-info`,status:`info`,show:!0,children:`Info message`}),(0,u.jsx)(i,{id:`t-positive`,status:`positive`,show:!0,children:`Success message`}),(0,u.jsx)(i,{id:`t-negative`,status:`negative`,show:!0,children:`Error message`}),(0,u.jsx)(i,{id:`t-warning`,status:`warning`,show:!0,children:`Warning message`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-neutral",
    status: "neutral",
    children: "Something happened."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-info",
    status: "info",
    children: "Your bet has been placed."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-positive",
    status: "positive",
    children: "Deposit successful!"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-negative",
    status: "negative",
    children: "Payment failed."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-warning",
    status: "warning",
    children: "Session expiring soon."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Neutral`,`Info`,`Positive`,`Negative`,`Warning`,`AllVariants`]}))();export{_ as AllVariants,p as Info,h as Negative,f as Neutral,m as Positive,g as Warning,v as __namedExportsOrder,d as default};