import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-Dm3AAD9f.js";import{n as a,t as o}from"./Article-CBzH37o8.js";import{n as s,t as c}from"./Icon-CAV2LWuf.js";var l,u=t((()=>{l=``+new URL(`close-icon-CAG7top1.svg`,import.meta.url).href})),d,f=t((()=>{d=``+new URL(`info-icon-6WBQ_nzg.svg`,import.meta.url).href})),p,m=t((()=>{p=``+new URL(`info-O1-1IZIK.svg`,import.meta.url).href})),h,g=t((()=>{h=``+new URL(`negative-leQw1-8E.svg`,import.meta.url).href})),_,v=t((()=>{_=``+new URL(`positive-CG652xkh.svg`,import.meta.url).href}));function y({children:e,className:t,...n}){return(0,b.jsx)(`div`,{className:`article-header${t?` ${t}`:``}`,...n,children:e})}var b,x=t((()=>{b=i()}));function S({children:e,className:t,...n}){return(0,C.jsx)(`div`,{className:`article-content${t?` ${t}`:``}`,...n,children:e})}var C,w=t((()=>{C=i()})),T=t((()=>{a(),x(),w()}));function E({children:e,id:t,className:n,header:r,leftIconComponent:i,rightIconComponent:a,iconClassName:s,onCloseClick:u,onInfoClick:f,variant:m=`neutral`,showIcon:g=!0,noHeaderContentGap:v=!0,...b}){let x=`icon alert-icon ${s??``}`,C=()=>{switch(m){case`positive`:return(0,D.jsx)(c,{href:_,className:x});case`negative`:case`warning`:return(0,D.jsx)(c,{href:h,className:x});default:return(0,D.jsx)(c,{href:p,className:x})}},w=()=>i?(0,O.cloneElement)(i,{className:`${x} ${i.props.className??``}`.trim()}):C(),T=()=>a?(0,O.cloneElement)(a,{className:`alert-right-icon ${a.props.className??``}`.trim()}):f?(0,D.jsx)(c,{href:d,"data-testid":`alert-info-button`,className:`alert-right-icon`,onClick:f}):u?(0,D.jsx)(c,{href:l,"data-testid":`alert-close-button`,className:`alert-right-icon`,onClick:u}):null;return(0,D.jsxs)(`div`,{id:t,"data-testid":t,className:`alert ${k[m]} ${n??``}`,role:`alert`,children:[g&&w(),(0,D.jsxs)(o,{noHeaderContentGap:v,id:`${t}-article`,className:`alert-content`,...b,children:[r?(0,D.jsx)(y,{id:`${t}-article-header`,className:`alert-title`,children:r}):null,e?(0,D.jsx)(S,{id:`${t}-article-content`,children:e}):null]}),T()]})}var D,O,k,A=t((()=>{D=i(),O=n(r(),1),u(),f(),m(),g(),v(),T(),s(),k={neutral:`alert-neutral`,info:`alert-info`,negative:`alert-negative`,positive:`alert-positive`,warning:`alert-warning`,plain:`alert-plain`}})),j=t((()=>{A()})),M=e({AllVariants:()=>U,Info:()=>F,Negative:()=>L,Neutral:()=>z,Plain:()=>B,Positive:()=>I,Warning:()=>R,WithClose:()=>H,WithoutIcon:()=>V,__namedExportsOrder:()=>W,default:()=>P}),N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{j(),N=i(),P={title:`Components/Alert`,component:E,tags:[],argTypes:{variant:{control:`select`,options:[`neutral`,`info`,`negative`,`positive`,`warning`,`plain`]},showIcon:{control:`boolean`}},args:{id:`alert-demo`,variant:`info`,showIcon:!0}},F={args:{id:`alert-info`,variant:`info`,header:`Information`,children:`Your deposit is being processed.`}},I={args:{id:`alert-positive`,variant:`positive`,header:`Success`,children:`Your bet has been placed.`}},L={args:{id:`alert-negative`,variant:`negative`,header:`Error`,children:`Payment could not be processed.`}},R={args:{id:`alert-warning`,variant:`warning`,header:`Warning`,children:`Your session expires in 5 minutes.`}},z={args:{id:`alert-neutral`,variant:`neutral`,header:`Note`,children:`Maintenance scheduled for tonight.`}},B={args:{id:`alert-plain`,variant:`plain`,children:`This is a plain alert without background color.`}},V={args:{id:`alert-no-icon`,variant:`info`,showIcon:!1,header:`No Icon`,children:`Alert without an icon.`}},H={args:{id:`alert-close`,variant:`info`,header:`Dismissible`,children:`Click the X to dismiss.`,onCloseClick:()=>{}}},U={render:()=>(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,maxWidth:`480px`},children:[(0,N.jsx)(E,{id:`v-info`,variant:`info`,header:`Info`,children:`Informational message`}),(0,N.jsx)(E,{id:`v-positive`,variant:`positive`,header:`Success`,children:`Positive outcome`}),(0,N.jsx)(E,{id:`v-negative`,variant:`negative`,header:`Error`,children:`Something went wrong`}),(0,N.jsx)(E,{id:`v-warning`,variant:`warning`,header:`Warning`,children:`Proceed with caution`}),(0,N.jsx)(E,{id:`v-neutral`,variant:`neutral`,header:`Neutral`,children:`General information`}),(0,N.jsx)(E,{id:`v-plain`,variant:`plain`,children:`Plain alert`})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-info",
    variant: "info",
    header: "Information",
    children: "Your deposit is being processed."
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-positive",
    variant: "positive",
    header: "Success",
    children: "Your bet has been placed."
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-negative",
    variant: "negative",
    header: "Error",
    children: "Payment could not be processed."
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-warning",
    variant: "warning",
    header: "Warning",
    children: "Your session expires in 5 minutes."
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-neutral",
    variant: "neutral",
    header: "Note",
    children: "Maintenance scheduled for tonight."
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-plain",
    variant: "plain",
    children: "This is a plain alert without background color."
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-no-icon",
    variant: "info",
    showIcon: false,
    header: "No Icon",
    children: "Alert without an icon."
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-close",
    variant: "info",
    header: "Dismissible",
    children: "Click the X to dismiss.",
    onCloseClick: () => {}
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "480px"
  }}>
      <Alert id="v-info" variant="info" header="Info">Informational message</Alert>
      <Alert id="v-positive" variant="positive" header="Success">Positive outcome</Alert>
      <Alert id="v-negative" variant="negative" header="Error">Something went wrong</Alert>
      <Alert id="v-warning" variant="warning" header="Warning">Proceed with caution</Alert>
      <Alert id="v-neutral" variant="neutral" header="Neutral">General information</Alert>
      <Alert id="v-plain" variant="plain">Plain alert</Alert>
    </div>
}`,...U.parameters?.docs?.source}}},W=[`Info`,`Positive`,`Negative`,`Warning`,`Neutral`,`Plain`,`WithoutIcon`,`WithClose`,`AllVariants`]}));G();export{U as AllVariants,F as Info,L as Negative,z as Neutral,B as Plain,I as Positive,R as Warning,H as WithClose,V as WithoutIcon,W as __namedExportsOrder,P as default,G as n,M as t};