import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CRUx604k.js";import{n,t as r}from"./Icon-Cq8akImw.js";function i(e,t){let n=e.style??`text`;return n===`icon`?e.icon?e.icon:(0,o.jsx)(r,{href:s,className:`stepper-indicator-icon`,width:14,height:14}):n===`point`?(0,o.jsx)(`span`,{className:`stepper-indicator-dot`}):e.number??String(t+1)}function a({id:e,items:t,showConnector:n=!0,className:r,"aria-label":a=`Progress steps`,...s}){return(0,o.jsx)(`ol`,{id:e,"data-testid":e,"aria-label":a,className:`stepper ${r??``}`.trim(),...s,children:t.map((r,a)=>{let s=r.status??`default`,l=a===t.length-1,u=`${e}-item-${a}`,d=r.headline??r.label;return(0,o.jsxs)(`li`,{id:u,"data-testid":u,"data-status":s,className:`stepper-item`,"aria-current":s===`active`?`step`:void 0,children:[(0,o.jsxs)(`div`,{className:`stepper-indicator-column`,children:[(0,o.jsx)(`div`,{"data-testid":`${u}-indicator`,className:`stepper-indicator ${c[s]}`,"aria-hidden":`true`,children:i(r,a)}),n&&!l&&(0,o.jsx)(`div`,{"data-testid":`${u}-connector`,className:`stepper-connector`,"aria-hidden":`true`})]}),(d||r.description)&&(0,o.jsxs)(`div`,{className:`stepper-content`,children:[d&&(0,o.jsx)(`div`,{"data-testid":`${u}-label`,className:`stepper-headline`,children:d}),r.description&&(0,o.jsx)(`div`,{"data-testid":`${u}-description`,className:`stepper-description`,children:r.description})]})]},u)})})}var o,s,c,l=e((()=>{o=t(),n(),s=`/icons/checkmark.svg`,c={default:`stepper-indicator-default`,active:`stepper-indicator-active`,resolved:`stepper-indicator-resolved`,warning:`stepper-indicator-warning`,error:`stepper-indicator-error`,pending:`stepper-indicator-pending`},a.__docgenInfo={description:'Stepper renders a vertical list of steps with a status indicator per item and\nan optional connector line between the indicators. It mirrors the\n`Micro/Stepper` component from the Tipico Tailwind Design System.\n\nEach step can display a number (text), a dot (point), or a custom icon.\nUse `style: "icon"` with `status: "resolved"` for a checkmark indicator.',methods:[],displayName:`Stepper`,props:{id:{required:!0,tsType:{name:`string`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`StepperItem`}],raw:`StepperItem[]`},description:``},showConnector:{required:!1,tsType:{name:`boolean`},description:"The last step never shows a connector. Defaults to `true`.",defaultValue:{value:`true`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:'Defaults to `"Progress steps"`.',defaultValue:{value:`"Progress steps"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),u,d,f,p,m,h,g,_,v;e((()=>{l(),u=t(),d={title:`Ready for Release/Stepper`,component:a,tags:[],decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:`360px`,padding:`20px`},children:(0,u.jsx)(e,{})})]},f=[{number:`1`,headline:`Personal Details`,status:`resolved`,style:`text`},{number:`2`,headline:`Verification`,status:`active`,style:`text`},{number:`3`,headline:`Payment Setup`,status:`default`,style:`text`},{number:`4`,headline:`Confirmation`,status:`default`,style:`text`}],p={args:{id:`stepper-default`,items:f}},m={args:{id:`stepper-resolved`,items:[{number:`1`,headline:`Account Created`,status:`resolved`,style:`text`},{number:`2`,headline:`Identity Verified`,status:`resolved`,style:`text`},{number:`3`,headline:`First Deposit`,status:`resolved`,style:`text`}]}},h={args:{id:`stepper-error`,items:[{number:`1`,headline:`Select Amount`,status:`resolved`,style:`text`},{number:`2`,headline:`Payment Method`,status:`error`,description:`Card declined`,style:`text`},{number:`3`,headline:`Confirmation`,status:`default`,style:`text`}]}},g={args:{id:`stepper-points`,items:[{headline:`Step 1`,status:`resolved`,style:`point`},{headline:`Step 2`,status:`resolved`,style:`point`},{headline:`Step 3`,status:`active`,style:`point`},{headline:`Step 4`,status:`default`,style:`point`}]}},_={args:{id:`stepper-desc`,items:[{number:`1`,headline:`Email`,description:`We'll send a confirmation link`,status:`resolved`,style:`text`},{number:`2`,headline:`Password`,description:`Choose a secure password`,status:`active`,style:`text`},{number:`3`,headline:`Done`,description:`You're all set`,status:`default`,style:`text`}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-default",
    items: registrationSteps
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-resolved",
    items: [{
      number: "1",
      headline: "Account Created",
      status: "resolved",
      style: "text"
    }, {
      number: "2",
      headline: "Identity Verified",
      status: "resolved",
      style: "text"
    }, {
      number: "3",
      headline: "First Deposit",
      status: "resolved",
      style: "text"
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-error",
    items: [{
      number: "1",
      headline: "Select Amount",
      status: "resolved",
      style: "text"
    }, {
      number: "2",
      headline: "Payment Method",
      status: "error",
      description: "Card declined",
      style: "text"
    }, {
      number: "3",
      headline: "Confirmation",
      status: "default",
      style: "text"
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-points",
    items: [{
      headline: "Step 1",
      status: "resolved",
      style: "point"
    }, {
      headline: "Step 2",
      status: "resolved",
      style: "point"
    }, {
      headline: "Step 3",
      status: "active",
      style: "point"
    }, {
      headline: "Step 4",
      status: "default",
      style: "point"
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "stepper-desc",
    items: [{
      number: "1",
      headline: "Email",
      description: "We'll send a confirmation link",
      status: "resolved",
      style: "text"
    }, {
      number: "2",
      headline: "Password",
      description: "Choose a secure password",
      status: "active",
      style: "text"
    }, {
      number: "3",
      headline: "Done",
      description: "You're all set",
      status: "default",
      style: "text"
    }]
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`AllResolved`,`WithError`,`PointStyle`,`WithDescription`]}))();export{m as AllResolved,p as Default,g as PointStyle,_ as WithDescription,h as WithError,v as __namedExportsOrder,d as default};