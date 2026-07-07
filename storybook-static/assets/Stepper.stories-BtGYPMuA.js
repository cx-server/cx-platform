import{j as t}from"./jsx-runtime-8P-18mTY.js";import{C as H}from"./checkmark-CJtnrsx8.js";import{I as V}from"./index-lrnWVvcy.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const P={default:"stepper-indicator-default",active:"stepper-indicator-active",resolved:"stepper-indicator-resolved",warning:"stepper-indicator-warning",error:"stepper-indicator-error",pending:"stepper-indicator-pending"};function q(e,i){const r=e.style??"text";return r==="icon"?e.icon?e.icon:t.jsx(V,{href:H,className:"stepper-indicator-icon",width:14,height:14}):r==="point"?t.jsx("span",{className:"stepper-indicator-dot"}):e.number??String(i+1)}function o({id:e,items:i,showConnector:r=!0,className:h,"aria-label":y="Progress steps",...w}){return t.jsx("ol",{id:e,"data-testid":e,"aria-label":y,className:`stepper ${h??""}`.trim(),...w,children:i.map((n,a)=>{const d=n.status??"default",I=a===i.length-1,s=`${e}-item-${a}`,x=n.headline??n.label;return t.jsxs("li",{id:s,"data-testid":s,"data-status":d,className:"stepper-item","aria-current":d==="active"?"step":void 0,children:[t.jsxs("div",{className:"stepper-indicator-column",children:[t.jsx("div",{"data-testid":`${s}-indicator`,className:`stepper-indicator ${P[d]}`,"aria-hidden":"true",children:q(n,a)}),r&&!I&&t.jsx("div",{"data-testid":`${s}-connector`,className:"stepper-connector","aria-hidden":"true"})]}),(x||n.description)&&t.jsxs("div",{className:"stepper-content",children:[x&&t.jsx("div",{"data-testid":`${s}-label`,className:"stepper-headline",children:x}),n.description&&t.jsx("div",{"data-testid":`${s}-description`,className:"stepper-description",children:n.description})]})]},s)})})}o.__docgenInfo={description:'Stepper renders a vertical list of steps with a status indicator per item and\nan optional connector line between the indicators. It mirrors the\n`Micro/Stepper` component from the Tipico Tailwind Design System.\n\nEach step can display a number (text), a dot (point), or a custom icon.\nUse `style: "icon"` with `status: "resolved"` for a checkmark indicator.',methods:[],displayName:"Stepper",props:{id:{required:!0,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"StepperItem"}],raw:"StepperItem[]"},description:""},showConnector:{required:!1,tsType:{name:"boolean"},description:"The last step never shows a connector. Defaults to `true`.",defaultValue:{value:"true",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:'Defaults to `"Progress steps"`.',defaultValue:{value:'"Progress steps"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const M={title:"Components/Stepper",component:o,parameters:{layout:"centered"},argTypes:{showConnector:{control:{type:"boolean"},description:"Show connector lines between steps (last step never shows one)"}},tags:["autodocs"]},c={argTypes:{style:{control:{type:"select"},options:["text","point","icon"],description:"Indicator display mode"},status:{control:{type:"select"},options:["default","active","resolved","warning","error","pending"],description:"Visual status of the step"},showHeadline:{control:{type:"boolean"},description:"Show headline"},headline:{control:{type:"text"},description:"Headline text"},showDescription:{control:{type:"boolean"},description:"Show description"},description:{control:{type:"text"},description:"Description text"},number:{control:{type:"text"},description:"Content inside the indicator (style=text)"},showConnector:{control:{type:"boolean"},description:"Show connector line"}},args:{id:"stepper-playground",showHeadline:!0,headline:"Under review",showDescription:!0,description:"This might take up to 24 hours.",number:"1",status:"pending",style:"point",showConnector:!0},render:({id:e,showHeadline:i,headline:r,showDescription:h,description:y,number:w,status:n,style:a,showConnector:d})=>t.jsx(o,{id:e,showConnector:d,items:[{headline:i?r:void 0,description:h?y:void 0,number:w,status:n,style:a},{headline:"Sent to bank",description:"The amount should be in your account within 5 business days.",number:"2",status:"default",style:"point"}]})},p=["default","active","resolved","warning","error","pending"],l={render:()=>t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx("div",{className:"flex gap-8",children:p.map(e=>t.jsx("span",{className:"w-8 text-center text-xs text-standard capitalize",children:e},e))}),t.jsx("div",{className:"flex gap-8",children:p.map(e=>t.jsx(o,{id:`text-${e}`,items:[{number:"X",status:e,style:"text"}]},`text-${e}`))}),t.jsx("div",{className:"flex gap-8",children:p.map(e=>t.jsx(o,{id:`icon-${e}`,items:[{status:e,style:"icon"}]},`icon-${e}`))}),t.jsx("div",{className:"flex gap-8",children:p.map(e=>t.jsx(o,{id:`point-${e}`,items:[{status:e,style:"point"}]},`point-${e}`))})]}),args:{id:"all-variants",items:[]}},u={args:{id:"stepper-withdrawal",showConnector:!0,items:[{headline:"Under review",description:"This might take up to 24 hours.",status:"pending",style:"point"},{headline:"Sent to bank",description:"The amount should be in your account within 5 business days.",status:"default",style:"point"}]}},m={args:{id:"stepper-multi",showConnector:!0,items:[{number:"1",headline:"Account created",status:"resolved"},{number:"2",headline:"Verify your identity",description:"We need to confirm your details.",status:"active"},{number:"3",headline:"Place your first bet",status:"default"}]}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    style: {
      control: {
        type: "select"
      },
      options: ["text", "point", "icon"],
      description: "Indicator display mode"
    },
    status: {
      control: {
        type: "select"
      },
      options: ["default", "active", "resolved", "warning", "error", "pending"],
      description: "Visual status of the step"
    },
    showHeadline: {
      control: {
        type: "boolean"
      },
      description: "Show headline"
    },
    headline: {
      control: {
        type: "text"
      },
      description: "Headline text"
    },
    showDescription: {
      control: {
        type: "boolean"
      },
      description: "Show description"
    },
    description: {
      control: {
        type: "text"
      },
      description: "Description text"
    },
    number: {
      control: {
        type: "text"
      },
      description: "Content inside the indicator (style=text)"
    },
    showConnector: {
      control: {
        type: "boolean"
      },
      description: "Show connector line"
    }
  },
  args: {
    id: "stepper-playground",
    showHeadline: true,
    headline: "Under review",
    showDescription: true,
    description: "This might take up to 24 hours.",
    number: "1",
    status: "pending",
    style: "point",
    showConnector: true
  },
  render: ({
    id,
    showHeadline,
    headline,
    showDescription,
    description,
    number,
    status,
    style,
    showConnector
  }) => <Stepper id={id} showConnector={showConnector} items={[{
    headline: showHeadline ? headline : undefined,
    description: showDescription ? description : undefined,
    number,
    status,
    style
  }, {
    headline: "Sent to bank",
    description: "The amount should be in your account within 5 business days.",
    number: "2",
    status: "default",
    style: "point"
  }]} />
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,S,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            <div className="flex gap-8">
                {statuses.map(s => <span key={s} className="w-8 text-center text-xs text-standard capitalize">
                        {s}
                    </span>)}
            </div>
            <div className="flex gap-8">
                {statuses.map(status => <Stepper key={\`text-\${status}\`} id={\`text-\${status}\`} items={[{
        number: "X",
        status,
        style: "text"
      }]} />)}
            </div>
            <div className="flex gap-8">
                {statuses.map(status => <Stepper key={\`icon-\${status}\`} id={\`icon-\${status}\`} items={[{
        status,
        style: "icon"
      }]} />)}
            </div>
            <div className="flex gap-8">
                {statuses.map(status => <Stepper key={\`point-\${status}\`} id={\`point-\${status}\`} items={[{
        status,
        style: "point"
      }]} />)}
            </div>
        </div>,
  args: {
    id: "all-variants",
    items: []
  }
}`,...(N=(S=l.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var j,C,$;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "stepper-withdrawal",
    showConnector: true,
    items: [{
      headline: "Under review",
      description: "This might take up to 24 hours.",
      status: "pending",
      style: "point"
    }, {
      headline: "Sent to bank",
      description: "The amount should be in your account within 5 business days.",
      status: "default",
      style: "point"
    }]
  }
}`,...($=(C=u.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var T,k,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: "stepper-multi",
    showConnector: true,
    items: [{
      number: "1",
      headline: "Account created",
      status: "resolved"
    }, {
      number: "2",
      headline: "Verify your identity",
      description: "We need to confirm your details.",
      status: "active"
    }, {
      number: "3",
      headline: "Place your first bet",
      status: "default"
    }]
  }
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const z=["Playground","AllVariants","WithdrawalFlow","MultiStep"];export{l as AllVariants,m as MultiStep,c as Playground,u as WithdrawalFlow,z as __namedExportsOrder,M as default};
