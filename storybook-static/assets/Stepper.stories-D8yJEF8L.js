import{j as e}from"./jsx-runtime-8P-18mTY.js";import{C as N}from"./calendar-dU3FF0YS.js";import{I}from"./index-lrnWVvcy.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const D={default:"stepper-indicator-default",active:"stepper-indicator-active",resolved:"stepper-indicator-resolved",warning:"stepper-indicator-warning",error:"stepper-indicator-error",pending:"stepper-indicator-pending"};function $(t,r){const a=t.style??"text";return a==="icon"?t.icon?t.icon:e.jsx(I,{href:N,className:"stepper-indicator-icon",width:14,height:14}):a==="point"?e.jsx("span",{className:"stepper-indicator-dot"}):t.number??String(r+1)}function b({id:t,items:r,showConnector:a=!0,className:x,...w}){return e.jsx("ol",{id:t,"data-testid":t,className:`stepper ${x??""}`.trim(),...w,children:r.map((n,p)=>{const c=n.status??"default",j=p===r.length-1,s=`${t}-item-${p}`;return e.jsxs("li",{id:s,"data-testid":s,"data-status":c,className:"stepper-item",children:[e.jsxs("div",{className:"stepper-indicator-column",children:[e.jsx("div",{"data-testid":`${s}-indicator`,className:`stepper-indicator ${D[c]}`,children:$(n,p)}),a&&!j&&e.jsx("div",{"data-testid":`${s}-connector`,className:"stepper-connector"})]}),(n.headline||n.description)&&e.jsxs("div",{className:"stepper-content",children:[n.headline&&e.jsx("div",{"data-testid":`${s}-headline`,className:"stepper-headline",children:n.headline}),n.description&&e.jsx("div",{"data-testid":`${s}-description`,className:"stepper-description",children:n.description})]})]},s)})})}b.__docgenInfo={description:`Stepper renders a vertical list of steps with a status indicator per item and
an optional connector line between the indicators. It mirrors the
\`Micro/Stepper\` component from the Tipico Tailwind Design System.

Each step can display a number (text), a dot (point), or a custom icon.`,methods:[],displayName:"Stepper",props:{id:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"StepperItem"}],raw:"StepperItem[]"},description:""},showConnector:{required:!1,tsType:{name:"boolean"},description:"Show connector lines between steps. The last step never shows a connector. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const W={title:"DesignOps/Stepper",component:b,decorators:[t=>e.jsx("div",{className:"max-w-md mx-auto p-6",children:e.jsx(t,{})})]},i={args:{id:"stepper-default",items:[{number:"1",headline:"Account created",description:"Your account has been set up",status:"resolved"},{number:"2",headline:"Identity verification",description:"Upload your documents",status:"active"},{number:"3",headline:"Deposit",description:"Make your first deposit",status:"default"},{number:"4",headline:"Ready to play",description:"Start playing",status:"default"}]}},o={args:{id:"stepper-warning",items:[{number:"1",headline:"Registration",status:"resolved"},{number:"2",headline:"Verification",description:"Action required",status:"warning"},{number:"3",headline:"Deposit",status:"default"}]}},d={args:{id:"stepper-points",items:[{headline:"Step 1",status:"resolved",style:"point"},{headline:"Step 2",status:"active",style:"point"},{headline:"Step 3",status:"default",style:"point"}]}};var l,u,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: "stepper-default",
    items: [{
      number: "1",
      headline: "Account created",
      description: "Your account has been set up",
      status: "resolved"
    }, {
      number: "2",
      headline: "Identity verification",
      description: "Upload your documents",
      status: "active"
    }, {
      number: "3",
      headline: "Deposit",
      description: "Make your first deposit",
      status: "default"
    }, {
      number: "4",
      headline: "Ready to play",
      description: "Start playing",
      status: "default"
    }]
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,f,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "stepper-warning",
    items: [{
      number: "1",
      headline: "Registration",
      status: "resolved"
    }, {
      number: "2",
      headline: "Verification",
      description: "Action required",
      status: "warning"
    }, {
      number: "3",
      headline: "Deposit",
      status: "default"
    }]
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,v,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "stepper-points",
    items: [{
      headline: "Step 1",
      status: "resolved",
      style: "point"
    }, {
      headline: "Step 2",
      status: "active",
      style: "point"
    }, {
      headline: "Step 3",
      status: "default",
      style: "point"
    }]
  }
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const _=["Default","WithWarning","PointStyle"];export{i as Default,d as PointStyle,o as WithWarning,_ as __namedExportsOrder,W as default};
