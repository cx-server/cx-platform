import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as te}from"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const se={default:"",selected:"border-highlight shadow-input-box",typing:"border-highlight shadow-input-box",disabled:"",error:"border-subtile",empty:"border-subtile"},g="text-highlight",f={default:g,selected:"text-subtile",typing:g,disabled:"text-standard",error:"text-subtile",empty:g},ne="relative flex flex-col justify-center p-2 w-full h-full min-w-10 min-h-[60px] bg-input border border-standard border-opacity-standard rounded-inputs",N="text-base font-normal animate-blink",m=te.forwardRef(({id:r,className:h,multiplier:x,currency:s,children:Q,labelComponent:b,label:y,isCentered:X,blinkingCursorPosition:C,status:n="default",currencyPosition:S="right",...Y},Z)=>{const ee=h?`${h}`:"",re=X?"items-center":"";return e.jsxs("div",{id:r,className:`${ne} ${se[n]} ${re} ${ee}`,...Y,children:[(b||y)&&e.jsx("label",{"data-testid":`${r}-label`,className:"text-xs text-subtile font-normal",children:b||y}),e.jsxs("div",{ref:Z,id:`${r}-value`,className:"flex flex-row text-lg font-semibold items-center",children:[x&&e.jsx("span",{className:"text-subtile pr-0.5 font-normal",children:x}),s&&S==="left"&&e.jsx("span",{className:`${f[n]} mr-0.5`,children:s}),C==="left"&&e.jsx("div",{className:N,children:"|"}),e.jsx("div",{className:`${f[n]}`,children:Q}),C==="right"&&e.jsx("div",{className:N,children:"|"}),s&&S==="right"&&e.jsx("span",{className:`${f[n]} ml-0.5`,children:s})]})]})});m.displayName="InputBox";m.__docgenInfo={description:"",methods:[],displayName:"InputBox",props:{id:{required:!0,tsType:{name:"string"},description:""},isCentered:{required:!1,tsType:{name:"boolean"},description:""},blinkingCursorPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right" | undefined',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"undefined"}]},description:""},multiplier:{required:!1,tsType:{name:"ReactNode"},description:""},currency:{required:!1,tsType:{name:"ReactNode"},description:""},currencyPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right" | undefined',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"undefined"}]},description:"",defaultValue:{value:'"right"',computed:!1}},labelComponent:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"default"',computed:!1}}},composes:["HTMLProps"]};const le={title:"Components/InputBox",component:m,tags:["autodocs"],argTypes:{status:{control:"select",options:["default","selected","typing","disabled","error","empty"]},isCentered:{control:"boolean"},blinkingCursorPosition:{control:"select",options:["left","right"]},multiplier:{control:"text"},currency:{control:"text"},label:{control:"text"}},decorators:[r=>e.jsx("div",{className:"w-[187px] h-[60px]",children:e.jsx(r,{})})]},t={args:{id:"test-input-box",status:"default",label:"Stake per bet",isCentered:!1,children:[e.jsx("span",{children:"200"})]}},a={args:{...t.args,multiplier:"2x"}},i={args:{...t.args,currency:"€"}},o={args:{...t.args,isCentered:!0}},l={args:{...t.args,currency:"€",blinkingCursorPosition:"right",children:[e.jsx("span",{children:"5"})]}},d={args:{...t.args,currency:"€",children:void 0}},c={render:()=>e.jsx("div",{style:{display:"grid",gap:"1rem"},children:["default","selected","typing","disabled","error","empty"].map(r=>e.jsx(m,{id:"test-input-box",status:r,label:`Status: ${r}`,blinkingCursorPosition:r==="default"?void 0:r==="selected"?"left":"right",currency:"€",children:r!=="empty"&&e.jsx("span",{children:"200"})},r))})},u={args:{id:"test-input-box",status:"default",label:"Total Stake",multiplier:"13x",currency:"€",currencyPosition:"left",isCentered:!1,blinkingCursorPosition:"left",children:[e.jsx("span",{children:"200"})]}},p={args:{...t.args,isCentered:!0,currency:"€",blinkingCursorPosition:"right",label:void 0}};var j,v,T;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "test-input-box",
    status: "default",
    label: "Stake per bet",
    isCentered: false,
    children: [<span>200</span>]
  }
}`,...(T=(v=t.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var k,P,$;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiplier: "2x"
  }
}`,...($=(P=a.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var W,q,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    currency: "€"
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var D,I,_;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCentered: true
  }
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var B,E,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    currency: "€",
    blinkingCursorPosition: "right",
    children: [<span>5</span>]
  }
}`,...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var A,L,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    currency: "€",
    children: undefined
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,F,H;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
            {(["default", "selected", "typing", "disabled", "error", "empty"] as const).map(status => <InputBox id="test-input-box" key={status} status={status} label={\`Status: \${status}\`} blinkingCursorPosition={status === "default" ? undefined : status === "selected" ? "left" : "right"} currency="€">
                    {status !== "empty" && <span>200</span>}
                </InputBox>)}
        </div>
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var O,U,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: "test-input-box",
    status: "default",
    label: "Total Stake",
    multiplier: "13x",
    currency: "€",
    currencyPosition: "left",
    isCentered: false,
    blinkingCursorPosition: "left",
    children: [<span>200</span>]
  }
}`,...(z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCentered: true,
    currency: "€",
    blinkingCursorPosition: "right",
    label: undefined
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const de=["Default","WithMultiplier","WithMoneySign","Centered","WithSmallText","WithNoChildren","StatusVariants","CombinedFeatures","WithoutLabel"];export{o as Centered,u as CombinedFeatures,t as Default,c as StatusVariants,i as WithMoneySign,a as WithMultiplier,d as WithNoChildren,l as WithSmallText,p as WithoutLabel,de as __namedExportsOrder,le as default};
