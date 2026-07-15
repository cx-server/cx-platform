import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-CRUx604k.js";import{t as a}from"./Article-C9_dTVy2.js";import{i as o,n as s,t as c}from"./Article-BG4dP3Bm.js";import{n as l,t as u}from"./Icon-Cq8akImw.js";var d,f=t((()=>{d=``+new URL(`close-icon-CAG7top1.svg`,import.meta.url).href})),p,m=t((()=>{p=``+new URL(`info-icon-6WBQ_nzg.svg`,import.meta.url).href})),h,g=t((()=>{h=``+new URL(`info-O1-1IZIK.svg`,import.meta.url).href})),_,v=t((()=>{_=``+new URL(`negative-leQw1-8E.svg`,import.meta.url).href})),y,b=t((()=>{y=``+new URL(`positive-CG652xkh.svg`,import.meta.url).href}));function x({children:e,id:t,className:n,header:r,leftIconComponent:i,rightIconComponent:c,iconClassName:l,onCloseClick:f,onInfoClick:m,variant:g=`neutral`,showIcon:v=!0,noHeaderContentGap:b=!0,...x}){let T=`icon alert-icon ${l??``}`,E=()=>{switch(g){case`positive`:return(0,S.jsx)(u,{href:y,className:T});case`negative`:case`warning`:return(0,S.jsx)(u,{href:_,className:T});default:return(0,S.jsx)(u,{href:h,className:T})}},D=()=>i?(0,C.cloneElement)(i,{className:`${T} ${i.props.className??``}`.trim()}):E(),O=()=>c?(0,C.cloneElement)(c,{className:`alert-right-icon ${c.props.className??``}`.trim()}):m?(0,S.jsx)(u,{href:p,"data-testid":`alert-info-button`,className:`alert-right-icon`,onClick:m}):f?(0,S.jsx)(u,{href:d,"data-testid":`alert-close-button`,className:`alert-right-icon`,onClick:f}):null;return(0,S.jsxs)(`div`,{id:t,"data-testid":t,className:`alert ${w[g]} ${n??``}`,role:`alert`,children:[v&&D(),(0,S.jsxs)(a,{noHeaderContentGap:b,id:`${t}-article`,className:`alert-content`,...x,children:[r?(0,S.jsx)(o,{id:`${t}-article-header`,className:`alert-title`,children:r}):null,e?(0,S.jsx)(s,{id:`${t}-article-content`,children:e}):null]}),O()]})}var S,C,w,T=t((()=>{S=i(),C=n(r(),1),f(),m(),g(),v(),b(),c(),l(),w={neutral:`alert-neutral`,info:`alert-info`,negative:`alert-negative`,positive:`alert-positive`,warning:`alert-warning`,plain:`alert-plain`}})),E=t((()=>{T()})),D=e({AllVariants:()=>R,Info:()=>A,Negative:()=>M,Neutral:()=>P,Plain:()=>F,Positive:()=>j,Warning:()=>N,WithClose:()=>L,WithoutIcon:()=>I,__namedExportsOrder:()=>z,default:()=>k}),O,k,A,j,M,N,P,F,I,L,R,z,B=t((()=>{E(),O=i(),k={title:`Components/Alert`,component:x,tags:[],argTypes:{variant:{control:`select`,options:[`neutral`,`info`,`negative`,`positive`,`warning`,`plain`]},showIcon:{control:`boolean`}},args:{id:`alert-demo`,variant:`info`,showIcon:!0}},A={args:{id:`alert-info`,variant:`info`,header:`Information`,children:`Your deposit is being processed.`}},j={args:{id:`alert-positive`,variant:`positive`,header:`Success`,children:`Your bet has been placed.`}},M={args:{id:`alert-negative`,variant:`negative`,header:`Error`,children:`Payment could not be processed.`}},N={args:{id:`alert-warning`,variant:`warning`,header:`Warning`,children:`Your session expires in 5 minutes.`}},P={args:{id:`alert-neutral`,variant:`neutral`,header:`Note`,children:`Maintenance scheduled for tonight.`}},F={args:{id:`alert-plain`,variant:`plain`,children:`This is a plain alert without background color.`}},I={args:{id:`alert-no-icon`,variant:`info`,showIcon:!1,header:`No Icon`,children:`Alert without an icon.`}},L={args:{id:`alert-close`,variant:`info`,header:`Dismissible`,children:`Click the X to dismiss.`,onCloseClick:()=>{}}},R={render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,maxWidth:`480px`},children:[(0,O.jsx)(x,{id:`v-info`,variant:`info`,header:`Info`,children:`Informational message`}),(0,O.jsx)(x,{id:`v-positive`,variant:`positive`,header:`Success`,children:`Positive outcome`}),(0,O.jsx)(x,{id:`v-negative`,variant:`negative`,header:`Error`,children:`Something went wrong`}),(0,O.jsx)(x,{id:`v-warning`,variant:`warning`,header:`Warning`,children:`Proceed with caution`}),(0,O.jsx)(x,{id:`v-neutral`,variant:`neutral`,header:`Neutral`,children:`General information`}),(0,O.jsx)(x,{id:`v-plain`,variant:`plain`,children:`Plain alert`})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-info",
    variant: "info",
    header: "Information",
    children: "Your deposit is being processed."
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-positive",
    variant: "positive",
    header: "Success",
    children: "Your bet has been placed."
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-negative",
    variant: "negative",
    header: "Error",
    children: "Payment could not be processed."
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-warning",
    variant: "warning",
    header: "Warning",
    children: "Your session expires in 5 minutes."
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-neutral",
    variant: "neutral",
    header: "Note",
    children: "Maintenance scheduled for tonight."
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-plain",
    variant: "plain",
    children: "This is a plain alert without background color."
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-no-icon",
    variant: "info",
    showIcon: false,
    header: "No Icon",
    children: "Alert without an icon."
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-close",
    variant: "info",
    header: "Dismissible",
    children: "Click the X to dismiss.",
    onCloseClick: () => {}
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`Info`,`Positive`,`Negative`,`Warning`,`Neutral`,`Plain`,`WithoutIcon`,`WithClose`,`AllVariants`]}));B();export{R as AllVariants,A as Info,M as Negative,P as Neutral,F as Plain,j as Positive,N as Warning,L as WithClose,I as WithoutIcon,z as __namedExportsOrder,k as default,B as n,D as t};