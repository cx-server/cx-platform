import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-CRUx604k.js";function a({status:e=`neutral`,show:t=!0,onHide:n,autoHideDelay:r,children:i,className:a,...l}){return(0,s.useEffect)(()=>{if(t&&n&&r){let e=setTimeout(n,r);return()=>clearTimeout(e)}},[t,n,r]),t?(0,o.jsx)(`div`,{"data-testid":l.id,className:`toast ${c[e]} ${a??``}`,...l,children:i}):null}var o,s,c,l=t((()=>{o=i(),s=n(r(),1),c={neutral:`toast-neutral`,info:`toast-info`,negative:`toast-negative`,positive:`toast-positive`,warning:`toast-warning`}})),u=t((()=>{l()})),d=e({AllVariants:()=>y,Info:()=>h,Negative:()=>_,Neutral:()=>m,Positive:()=>g,Warning:()=>v,__namedExportsOrder:()=>b,default:()=>p}),f,p,m,h,g,_,v,y,b,x=t((()=>{u(),f=i(),p={title:`Components/Toast`,component:a,tags:[],argTypes:{status:{control:`select`,options:[`neutral`,`info`,`negative`,`positive`,`warning`]},show:{control:`boolean`}},args:{id:`toast-demo`,status:`neutral`,show:!0}},m={args:{id:`toast-neutral`,status:`neutral`,children:`Something happened.`}},h={args:{id:`toast-info`,status:`info`,children:`Your bet has been placed.`}},g={args:{id:`toast-positive`,status:`positive`,children:`Deposit successful!`}},_={args:{id:`toast-negative`,status:`negative`,children:`Payment failed.`}},v={args:{id:`toast-warning`,status:`warning`,children:`Session expiring soon.`}},y={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,maxWidth:`360px`},children:[(0,f.jsx)(a,{id:`t-neutral`,status:`neutral`,show:!0,children:`Neutral message`}),(0,f.jsx)(a,{id:`t-info`,status:`info`,show:!0,children:`Info message`}),(0,f.jsx)(a,{id:`t-positive`,status:`positive`,show:!0,children:`Success message`}),(0,f.jsx)(a,{id:`t-negative`,status:`negative`,show:!0,children:`Error message`}),(0,f.jsx)(a,{id:`t-warning`,status:`warning`,show:!0,children:`Warning message`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-neutral",
    status: "neutral",
    children: "Something happened."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-info",
    status: "info",
    children: "Your bet has been placed."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-positive",
    status: "positive",
    children: "Deposit successful!"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-negative",
    status: "negative",
    children: "Payment failed."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "toast-warning",
    status: "warning",
    children: "Session expiring soon."
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Neutral`,`Info`,`Positive`,`Negative`,`Warning`,`AllVariants`]}));x();export{y as AllVariants,h as Info,_ as Negative,m as Neutral,g as Positive,v as Warning,b as __namedExportsOrder,p as default,x as n,d as t};