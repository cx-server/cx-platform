import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Cf3IHaYg.js";import{n,t as r}from"./Icon-B6Fva3tR.js";var i,a=e((()=>{i=``+new URL(`checkmark-Rf-O6Hh9.svg`,import.meta.url).href}));function o(e,t){let n=e.style??`text`;return n===`icon`?e.icon?e.icon:(0,c.jsx)(r,{href:i,className:`stepper-indicator-icon`,width:14,height:14}):n===`point`?(0,c.jsx)(`span`,{className:`stepper-indicator-dot`}):e.number??String(t+1)}function s({id:e,items:t,showConnector:n=!0,className:r,"aria-label":i=`Progress steps`,...a}){return(0,c.jsx)(`ol`,{id:e,"data-testid":e,"aria-label":i,className:`stepper ${r??``}`.trim(),...a,children:t.map((r,i)=>{let a=r.status??`default`,s=i===t.length-1,u=`${e}-item-${i}`,d=r.headline??r.label;return(0,c.jsxs)(`li`,{id:u,"data-testid":u,"data-status":a,className:`stepper-item`,"aria-current":a===`active`?`step`:void 0,children:[(0,c.jsxs)(`div`,{className:`stepper-indicator-column`,children:[(0,c.jsx)(`div`,{"data-testid":`${u}-indicator`,className:`stepper-indicator ${l[a]}`,"aria-hidden":`true`,children:o(r,i)}),n&&!s&&(0,c.jsx)(`div`,{"data-testid":`${u}-connector`,className:`stepper-connector`,"aria-hidden":`true`})]}),(d||r.description)&&(0,c.jsxs)(`div`,{className:`stepper-content`,children:[d&&(0,c.jsx)(`div`,{"data-testid":`${u}-label`,className:`stepper-headline`,children:d}),r.description&&(0,c.jsx)(`div`,{"data-testid":`${u}-description`,className:`stepper-description`,children:r.description})]})]},u)})})}var c,l,u=e((()=>{c=t(),a(),n(),l={default:`stepper-indicator-default`,active:`stepper-indicator-active`,resolved:`stepper-indicator-resolved`,warning:`stepper-indicator-warning`,error:`stepper-indicator-error`,pending:`stepper-indicator-pending`}})),d=e((()=>{u()})),f,p,m,h,g,_,v,y;e((()=>{d(),f=t(),p={title:`Components/Stepper`,component:s,tags:[],argTypes:{showConnector:{control:`boolean`,description:`Show connector lines between steps`}},args:{id:`stepper`,showConnector:!0},parameters:{docs:{description:{component:`Vertical progress stepper with configurable step indicators (text, point, icon), status colors, and connector lines.`}}}},m={args:{id:`stepper-default`,items:[{number:`1`,headline:`Personal Details`,status:`resolved`,style:`text`},{number:`2`,headline:`Verification`,status:`active`,style:`text`},{number:`3`,headline:`Payment Method`,status:`default`,style:`text`},{number:`4`,headline:`Confirmation`,status:`default`,style:`text`}]}},h={args:{id:`stepper-points`,items:[{headline:`Step 1`,description:`Create your account`,status:`resolved`,style:`point`},{headline:`Step 2`,description:`Verify your identity`,status:`active`,style:`point`},{headline:`Step 3`,description:`Make a deposit`,status:`default`,style:`point`}]}},g={args:{id:`stepper-icons`,items:[{headline:`Registration`,status:`resolved`,style:`icon`},{headline:`Verification`,status:`resolved`,style:`icon`},{headline:`First Deposit`,status:`active`,style:`icon`},{headline:`Place First Bet`,status:`default`,style:`icon`}]}},_={args:{id:`stepper-errors`,items:[{number:`1`,headline:`Account Created`,status:`resolved`,style:`text`},{number:`2`,headline:`Identity Check`,description:`Document expired`,status:`error`,style:`text`},{number:`3`,headline:`Deposit`,status:`pending`,style:`text`}]}},v={render:function(e){let t=e.indicatorStyle||`text`;return(0,f.jsx)(s,{id:`stepper-all`,items:[{number:`1`,headline:`Resolved`,description:`Step completed`,status:`resolved`,style:t},{number:`2`,headline:`Active`,description:`Currently in progress`,status:`active`,style:t},{number:`3`,headline:`Warning`,description:`Needs attention`,status:`warning`,style:t},{number:`4`,headline:`Error`,description:`Failed validation`,status:`error`,style:t},{number:`5`,headline:`Pending`,description:`Waiting for action`,status:`pending`,style:t},{number:`6`,headline:`Default`,description:`Not started`,status:`default`,style:t}],showConnector:e.showConnector})},args:{id:`stepper-all`,showConnector:!0,indicatorStyle:`text`},argTypes:{indicatorStyle:{control:`select`,options:[`text`,`point`,`icon`],description:`Indicator style for all steps`,name:`Indicator Style`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function AllStatusesDemo(args) {
    const style = args.indicatorStyle || "text";
    const items = [{
      number: "1",
      headline: "Resolved",
      description: "Step completed",
      status: "resolved" as const,
      style
    }, {
      number: "2",
      headline: "Active",
      description: "Currently in progress",
      status: "active" as const,
      style
    }, {
      number: "3",
      headline: "Warning",
      description: "Needs attention",
      status: "warning" as const,
      style
    }, {
      number: "4",
      headline: "Error",
      description: "Failed validation",
      status: "error" as const,
      style
    }, {
      number: "5",
      headline: "Pending",
      description: "Waiting for action",
      status: "pending" as const,
      style
    }, {
      number: "6",
      headline: "Default",
      description: "Not started",
      status: "default" as const,
      style
    }];
    return <Stepper id="stepper-all" items={items} showConnector={args.showConnector} />;
  },
  args: {
    id: "stepper-all",
    showConnector: true,
    indicatorStyle: "text"
  },
  argTypes: {
    indicatorStyle: {
      control: "select",
      options: ["text", "point", "icon"],
      description: "Indicator style for all steps",
      name: "Indicator Style"
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`PointStyle`,`IconStyle`,`WithErrors`,`AllStatuses`]}))();export{v as AllStatuses,m as Default,g as IconStyle,h as PointStyle,_ as WithErrors,y as __namedExportsOrder,p as default};