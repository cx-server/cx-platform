import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const a="default",j={default:"bg-input border-standard border-opacity-standard",error:"bg-input border-negative",disabled:"border-standard border-opacity-standard opacity-70"},g={default:"text-highlight",placeholder:"text-subtile",error:"text-highlight",disabled:"text-standard"},S={default:"text-standard",error:"text-negative",disabled:"text-standard opacity-70"},le="relative flex flex-col justify-center items-center gap-0.5 p-2 min-w-10 min-h-12 border rounded-inputs",N="text-base font-normal animate-blink h-8 border-r";function f({id:s,className:ee,multiplier:x,currency:b,children:se,label:y,blinkingCursorPosition:n,status:r=a,description:w,...re}){const ne=j[r]??j[a],ae=g[r]??g[a],te=S[r]??S[a],ie=n?"shadow-input-box":"",oe=n&&r==="error"?"border-standard":"";return e.jsxs("div",{className:"flex flex-col gap-2 py-2 w-full",children:[e.jsxs("div",{id:s,"data-testid":s,className:`${le} ${ne} ${ie} ${oe} ${ee??""}`,...re,children:[y&&e.jsx("div",{"data-testid":"inputbox-label",className:"text-xs text-subtile font-normal h-4 shrink-0 self-stretch text-center",children:y}),e.jsxs("div",{className:"flex flex-row text-2xl font-semibold items-center",children:[x&&e.jsx("span",{className:"text-subtile pr-0.5 font-normal",children:x}),n==="left"&&e.jsx("div",{"data-testid":`${s}-blinking-cursor`,className:N}),e.jsx("div",{className:ae,children:se}),n==="right"&&e.jsx("div",{"data-testid":`${s}-blinking-cursor`,className:N}),b&&e.jsx("span",{className:`${g[r]} ml-0.5`,children:b})]})]}),w&&e.jsx("div",{className:`text-center ${te}`,children:w})]})}f.__docgenInfo={description:"",methods:[],displayName:"InputEmphasis",props:{id:{required:!0,tsType:{name:"string"},description:""},blinkingCursorPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},multiplier:{required:!1,tsType:{name:"string"},description:""},currency:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""}},composes:["Omit"]};const ue={title:"Components Sports/InputEmphasis",component:f,tags:["autodocs"],argTypes:{status:{control:"select",options:["default","selected","typing","disabled","error","empty"]},blinkingCursorPosition:{control:"select",options:["left","right"]},multiplier:{control:"text"},currency:{control:"text"},label:{control:"text"},description:{control:"text"}},decorators:[s=>e.jsx("div",{className:"w-[236px] h-[112px]",children:e.jsx(s,{})})]},t={args:{id:"test-input-emphasis-default",status:"default",label:"Label",description:"65% of your max winnings",currency:"€",children:[e.jsx("span",{children:"200"})]}},i={args:{id:"test-input-emphasis-placeholder",status:"placeholder",label:"Label",description:"65% of your max winnings",currency:"€",children:[e.jsx("span",{children:"200"})]}},o={args:{id:"test-input-emphasis-error",status:"error",label:"Label",description:"65% of your max winnings",currency:"€",children:[e.jsx("span",{children:"200"})]}},l={args:{id:"test-input-emphasis-disabled",status:"disabled",label:"Label",description:"65% of your max winnings",currency:"€",children:[e.jsx("span",{children:"200"})]}},c={args:{id:"test-input-emphasis-default-focused",status:"default",label:"Label",description:"65% of your max winnings",currency:"€",blinkingCursorPosition:"right",children:[e.jsx("span",{children:"200"})]}},d={args:{id:"test-input-emphasis-placeholder-focused",status:"placeholder",label:"Label",description:"65% of your max winnings",currency:"€",blinkingCursorPosition:"left",children:[e.jsx("span",{children:"200"})]}},p={args:{id:"test-input-emphasis-error-focused",status:"error",label:"Label",description:"65% of your max winnings",currency:"€",blinkingCursorPosition:"right",children:[e.jsx("span",{children:"200"})]}},u={args:{id:"test-input-emphasis-default-without-label",status:"default",description:"65% of your max winnings",currency:"€",children:[e.jsx("span",{children:"200"})]}},m={args:{id:"test-input-emphasis-default-without-label-focused",status:"default",description:"65% of your max winnings",currency:"€",blinkingCursorPosition:"right",children:[e.jsx("span",{children:"200"})]}},h={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-10 w-[512px]",children:[e.jsxs("div",{className:"flex flex-col gap-2 w-[236px]",children:[e.jsx("h1",{className:"title",children:"Unselected states"}),["default","placeholder","error","disabled"].map(s=>e.jsx(f,{id:`test-input-emphasis-${s}`,status:s,label:"Label",currency:"€",description:"65% of your max winnings",children:"200"},s))]}),e.jsxs("div",{className:"flex flex-col gap-2 w-[236px]",children:[e.jsx("h1",{className:"title",children:"Focus states"}),["default","placeholder","error"].map(s=>e.jsx(f,{id:`test-input-emphasis-${s}`,status:s,label:"Label",currency:"€",description:"65% of your max winnings",blinkingCursorPosition:s==="placeholder"?"left":"right",children:"200"},s))]})]})};var L,v,E;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-default",
    status: "default",
    label: "Label",
    description: "65% of your max winnings",
    currency: "€",
    children: [<span>200</span>]
  }
}`,...(E=(v=t.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var C,k,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-placeholder",
    status: "placeholder",
    label: "Label",
    description: "65% of your max winnings",
    currency: "€",
    children: [<span>200</span>]
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var P,$,D;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-error",
    status: "error",
    label: "Label",
    description: "65% of your max winnings",
    currency: "€",
    children: [<span>200</span>]
  }
}`,...(D=($=o.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var F,I,q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-disabled",
    status: "disabled",
    label: "Label",
    description: "65% of your max winnings",
    currency: "€",
    children: [<span>200</span>]
  }
}`,...(q=(I=l.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var _,A,U;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-default-focused",
    status: "default",
    label: "Label",
    description: "65% of your max winnings",
    currency: "€",
    blinkingCursorPosition: "right",
    children: [<span>200</span>]
  }
}`,...(U=(A=c.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var J,O,W;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-placeholder-focused",
    status: "placeholder",
    label: "Label",
    description: "65% of your max winnings",
    currency: "€",
    blinkingCursorPosition: "left",
    children: [<span>200</span>]
  }
}`,...(W=(O=d.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var X,R,V;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-error-focused",
    status: "error",
    label: "Label",
    description: "65% of your max winnings",
    currency: "€",
    blinkingCursorPosition: "right",
    children: [<span>200</span>]
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var B,z,G;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-default-without-label",
    status: "default",
    description: "65% of your max winnings",
    currency: "€",
    children: [<span>200</span>]
  }
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,K,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: "test-input-emphasis-default-without-label-focused",
    status: "default",
    description: "65% of your max winnings",
    currency: "€",
    blinkingCursorPosition: "right",
    children: [<span>200</span>]
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,Y,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-10 w-[512px]">
            <div className="flex flex-col gap-2 w-[236px]">
                <h1 className="title">Unselected states</h1>
                {(["default", "placeholder", "error", "disabled"] as const).map(status => <InputEmphasis id={\`test-input-emphasis-\${status}\`} key={status} status={status} label="Label" currency="€" description="65% of your max winnings">
                        200
                    </InputEmphasis>)}
            </div>
            <div className="flex flex-col gap-2 w-[236px]">
                <h1 className="title">Focus states</h1>
                {(["default", "placeholder", "error"] as const).map(status => <InputEmphasis id={\`test-input-emphasis-\${status}\`} key={status} status={status} label="Label" currency="€" description="65% of your max winnings" blinkingCursorPosition={status === "placeholder" ? "left" : "right"}>
                        200
                    </InputEmphasis>)}
            </div>
        </div>
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const me=["Default","Placeholder","Error","Disabled","DefaultFocused","PlaceholderFocused","ErrorFocused","DefaultWithoutLabel","DefaultWithoutLabelFocused","Variants"];export{t as Default,c as DefaultFocused,u as DefaultWithoutLabel,m as DefaultWithoutLabelFocused,l as Disabled,o as Error,p as ErrorFocused,i as Placeholder,d as PlaceholderFocused,h as Variants,me as __namedExportsOrder,ue as default};
