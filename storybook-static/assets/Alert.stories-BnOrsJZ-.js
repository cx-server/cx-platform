import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-Cf3IHaYg.js";import{n as r,t as i}from"./Alert-BhGKSeV-.js";var a=e({AllVariants:()=>g,Info:()=>c,Negative:()=>u,Neutral:()=>f,Plain:()=>p,Positive:()=>l,Warning:()=>d,WithClose:()=>h,WithoutIcon:()=>m,__namedExportsOrder:()=>_,default:()=>s}),o,s,c,l,u,d,f,p,m,h,g,_,v=t((()=>{i(),o=n(),s={title:`Components/Alert`,component:r,tags:[],argTypes:{variant:{control:`select`,options:[`neutral`,`info`,`negative`,`positive`,`warning`,`plain`]},showIcon:{control:`boolean`}},args:{id:`alert-demo`,variant:`info`,showIcon:!0}},c={args:{id:`alert-info`,variant:`info`,header:`Information`,children:`Your deposit is being processed.`}},l={args:{id:`alert-positive`,variant:`positive`,header:`Success`,children:`Your bet has been placed.`}},u={args:{id:`alert-negative`,variant:`negative`,header:`Error`,children:`Payment could not be processed.`}},d={args:{id:`alert-warning`,variant:`warning`,header:`Warning`,children:`Your session expires in 5 minutes.`}},f={args:{id:`alert-neutral`,variant:`neutral`,header:`Note`,children:`Maintenance scheduled for tonight.`}},p={args:{id:`alert-plain`,variant:`plain`,children:`This is a plain alert without background color.`}},m={args:{id:`alert-no-icon`,variant:`info`,showIcon:!1,header:`No Icon`,children:`Alert without an icon.`}},h={args:{id:`alert-close`,variant:`info`,header:`Dismissible`,children:`Click the X to dismiss.`,onCloseClick:()=>{}}},g={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,maxWidth:`480px`},children:[(0,o.jsx)(r,{id:`v-info`,variant:`info`,header:`Info`,children:`Informational message`}),(0,o.jsx)(r,{id:`v-positive`,variant:`positive`,header:`Success`,children:`Positive outcome`}),(0,o.jsx)(r,{id:`v-negative`,variant:`negative`,header:`Error`,children:`Something went wrong`}),(0,o.jsx)(r,{id:`v-warning`,variant:`warning`,header:`Warning`,children:`Proceed with caution`}),(0,o.jsx)(r,{id:`v-neutral`,variant:`neutral`,header:`Neutral`,children:`General information`}),(0,o.jsx)(r,{id:`v-plain`,variant:`plain`,children:`Plain alert`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-info",
    variant: "info",
    header: "Information",
    children: "Your deposit is being processed."
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-positive",
    variant: "positive",
    header: "Success",
    children: "Your bet has been placed."
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-negative",
    variant: "negative",
    header: "Error",
    children: "Payment could not be processed."
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-warning",
    variant: "warning",
    header: "Warning",
    children: "Your session expires in 5 minutes."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-neutral",
    variant: "neutral",
    header: "Note",
    children: "Maintenance scheduled for tonight."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-plain",
    variant: "plain",
    children: "This is a plain alert without background color."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-no-icon",
    variant: "info",
    showIcon: false,
    header: "No Icon",
    children: "Alert without an icon."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "alert-close",
    variant: "info",
    header: "Dismissible",
    children: "Click the X to dismiss.",
    onCloseClick: () => {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Info`,`Positive`,`Negative`,`Warning`,`Neutral`,`Plain`,`WithoutIcon`,`WithClose`,`AllVariants`]}));v();export{g as AllVariants,c as Info,u as Negative,f as Neutral,p as Plain,l as Positive,d as Warning,h as WithClose,m as WithoutIcon,_ as __namedExportsOrder,s as default,v as n,a as t};