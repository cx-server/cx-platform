import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-iU2omdTy.js";import{n,t as r}from"./Icon-BYqkmHco.js";var i,a=e((()=>{i=``+new URL(`checkmark-Rf-O6Hh9.svg`,import.meta.url).href}));function o(e,t){let n=e.style??`text`;return n===`icon`?e.icon?e.icon:(0,c.jsx)(r,{href:i,className:`stepper-indicator-icon`,width:14,height:14}):n===`point`?(0,c.jsx)(`span`,{className:`stepper-indicator-dot`}):e.number??String(t+1)}function s({id:e,items:t,showConnector:n=!0,className:r,"aria-label":i=`Progress steps`,...a}){return(0,c.jsx)(`ol`,{id:e,"data-testid":e,"aria-label":i,className:`stepper ${r??``}`.trim(),...a,children:t.map((r,i)=>{let a=r.status??`default`,s=i===t.length-1,u=`${e}-item-${i}`,d=r.headline??r.label;return(0,c.jsxs)(`li`,{id:u,"data-testid":u,"data-status":a,className:`stepper-item`,"aria-current":a===`active`?`step`:void 0,children:[(0,c.jsxs)(`div`,{className:`stepper-indicator-column`,children:[(0,c.jsx)(`div`,{"data-testid":`${u}-indicator`,className:`stepper-indicator ${l[a]}`,"aria-hidden":`true`,children:o(r,i)}),n&&!s&&(0,c.jsx)(`div`,{"data-testid":`${u}-connector`,className:`stepper-connector`,"aria-hidden":`true`})]}),(d||r.description)&&(0,c.jsxs)(`div`,{className:`stepper-content`,children:[d&&(0,c.jsx)(`div`,{"data-testid":`${u}-label`,className:`stepper-headline`,children:d}),r.description&&(0,c.jsx)(`div`,{"data-testid":`${u}-description`,className:`stepper-description`,children:r.description})]})]},u)})})}var c,l,u=e((()=>{c=t(),a(),n(),l={default:`stepper-indicator-default`,active:`stepper-indicator-active`,resolved:`stepper-indicator-resolved`,warning:`stepper-indicator-warning`,error:`stepper-indicator-error`,pending:`stepper-indicator-pending`}})),d=e((()=>{u()})),f,p,m,h,g,_,v;e((()=>{d(),f={title:`Components/Stepper`,component:s,tags:[],argTypes:{showConnector:{control:`boolean`,description:`Show connector lines between steps`}},args:{id:`stepper`,showConnector:!0},parameters:{docs:{description:{component:`Vertical progress stepper with configurable step indicators (text, point, icon), status colors, and connector lines.`}}}},p={args:{id:`stepper-default`,items:[{number:`1`,headline:`Personal Details`,status:`resolved`,style:`text`},{number:`2`,headline:`Verification`,status:`active`,style:`text`},{number:`3`,headline:`Payment Method`,status:`default`,style:`text`},{number:`4`,headline:`Confirmation`,status:`default`,style:`text`}]}},m={args:{id:`stepper-points`,items:[{headline:`Step 1`,description:`Create your account`,status:`resolved`,style:`point`},{headline:`Step 2`,description:`Verify your identity`,status:`active`,style:`point`},{headline:`Step 3`,description:`Make a deposit`,status:`default`,style:`point`}]}},h={args:{id:`stepper-icons`,items:[{headline:`Registration`,status:`resolved`,style:`icon`},{headline:`Verification`,status:`resolved`,style:`icon`},{headline:`First Deposit`,status:`active`,style:`icon`},{headline:`Place First Bet`,status:`default`,style:`icon`}]}},g={args:{id:`stepper-errors`,items:[{number:`1`,headline:`Account Created`,status:`resolved`,style:`text`},{number:`2`,headline:`Identity Check`,description:`Document expired`,status:`error`,style:`text`},{number:`3`,headline:`Deposit`,status:`pending`,style:`text`}]}},_={args:{id:`stepper-all`,items:[{number:`1`,headline:`Resolved`,status:`resolved`,style:`text`},{number:`2`,headline:`Active`,status:`active`,style:`text`},{number:`3`,headline:`Warning`,status:`warning`,style:`text`},{number:`4`,headline:`Error`,status:`error`,style:`text`},{number:`5`,headline:`Pending`,status:`pending`,style:`text`},{number:`6`,headline:`Default`,status:`default`,style:`text`}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-default",
    items: [{
      number: "1",
      headline: "Personal Details",
      status: "resolved",
      style: "text"
    }, {
      number: "2",
      headline: "Verification",
      status: "active",
      style: "text"
    }, {
      number: "3",
      headline: "Payment Method",
      status: "default",
      style: "text"
    }, {
      number: "4",
      headline: "Confirmation",
      status: "default",
      style: "text"
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-points",
    items: [{
      headline: "Step 1",
      description: "Create your account",
      status: "resolved",
      style: "point"
    }, {
      headline: "Step 2",
      description: "Verify your identity",
      status: "active",
      style: "point"
    }, {
      headline: "Step 3",
      description: "Make a deposit",
      status: "default",
      style: "point"
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-icons",
    items: [{
      headline: "Registration",
      status: "resolved",
      style: "icon"
    }, {
      headline: "Verification",
      status: "resolved",
      style: "icon"
    }, {
      headline: "First Deposit",
      status: "active",
      style: "icon"
    }, {
      headline: "Place First Bet",
      status: "default",
      style: "icon"
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-errors",
    items: [{
      number: "1",
      headline: "Account Created",
      status: "resolved",
      style: "text"
    }, {
      number: "2",
      headline: "Identity Check",
      description: "Document expired",
      status: "error",
      style: "text"
    }, {
      number: "3",
      headline: "Deposit",
      status: "pending",
      style: "text"
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-all",
    items: [{
      number: "1",
      headline: "Resolved",
      status: "resolved",
      style: "text"
    }, {
      number: "2",
      headline: "Active",
      status: "active",
      style: "text"
    }, {
      number: "3",
      headline: "Warning",
      status: "warning",
      style: "text"
    }, {
      number: "4",
      headline: "Error",
      status: "error",
      style: "text"
    }, {
      number: "5",
      headline: "Pending",
      status: "pending",
      style: "text"
    }, {
      number: "6",
      headline: "Default",
      status: "default",
      style: "text"
    }]
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`PointStyle`,`IconStyle`,`WithErrors`,`AllStatuses`]}))();export{_ as AllStatuses,p as Default,h as IconStyle,m as PointStyle,g as WithErrors,v as __namedExportsOrder,f as default};