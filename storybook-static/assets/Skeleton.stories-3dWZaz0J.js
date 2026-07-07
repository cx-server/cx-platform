import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as F}from"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const r=({width:s,height:x,borderRadius:u,style:l,className:I,id:W})=>{const $=F.useMemo(()=>({width:s,height:x,borderRadius:u,...l}),[s,x,u,l]);return e.jsx("div",{id:W,className:`rounded-list animate-[shimmer_1.5s_linear_infinite] [background-image:linear-gradient(to_right,rgb(var(--bg-list-hover))_0%,rgb(var(--bg-list-active))_20%,rgb(var(--bg-list-hover))_40%,rgb(var(--bg-list-hover))_100%)] [background-size:200vw] ${I??""}`,style:$,children:" "})};r.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},borderRadius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const Q={title:"Components/Skeleton",component:r,decorators:[s=>e.jsx("div",{className:"max-w-md mx-auto p-4",children:e.jsx(s,{})})],argTypes:{width:{control:{type:"text"},description:"Width of the skeleton (string or number)"},height:{control:{type:"text"},description:"Height of the skeleton (string or number)"},borderRadius:{control:{type:"text"},description:"Border radius of the skeleton (string or number)"},id:{control:{type:"text"},description:"HTML id attribute"}},args:{width:"100%",height:"20px"},tags:["autodocs"]},t={args:{id:"default-skeleton"},render:s=>e.jsx(r,{...s})},a={args:{id:"text-line-skeleton",width:"200px",height:"16px",borderRadius:"4px"}},i={args:{id:"avatar-skeleton",width:"48px",height:"48px",borderRadius:"50%"}},n={args:{id:"button-skeleton",width:"120px",height:"40px",borderRadius:"8px"}},d={args:{id:"card-skeleton",width:"300px",height:"200px",borderRadius:"12px"}},o={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{width:"100%",height:"16px",borderRadius:"4px"}),e.jsx(r,{width:"90%",height:"16px",borderRadius:"4px"}),e.jsx(r,{width:"75%",height:"16px",borderRadius:"4px"})]})},p={render:()=>e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(r,{width:"48px",height:"48px",borderRadius:"50%"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{width:"120px",height:"16px",borderRadius:"4px"}),e.jsx(r,{width:"80px",height:"14px",borderRadius:"4px"})]})]})},c={render:()=>e.jsxs("div",{className:"border rounded-lg p-4 space-y-3",children:[e.jsx(r,{width:"100%",height:"160px",borderRadius:"8px"}),e.jsx(r,{width:"100%",height:"20px",borderRadius:"4px"}),e.jsx(r,{width:"80%",height:"16px",borderRadius:"4px"}),e.jsx(r,{width:"60%",height:"16px",borderRadius:"4px"})]})},h={args:{id:"custom-skeleton",width:"250px",height:"60px",borderRadius:"16px",style:{opacity:.5}}};var m,g,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "default-skeleton"
  },
  render: args => <Skeleton {...args} />
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,R,k;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "text-line-skeleton",
    width: "200px",
    height: "16px",
    borderRadius: "4px"
  }
}`,...(k=(R=a.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var S,v,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: "avatar-skeleton",
    width: "48px",
    height: "48px",
    borderRadius: "50%"
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,j,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "button-skeleton",
    width: "120px",
    height: "40px",
    borderRadius: "8px"
  }
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var _,T,C;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: "card-skeleton",
    width: "300px",
    height: "200px",
    borderRadius: "12px"
  }
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var q,P,A;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
            <Skeleton width="100%" height="16px" borderRadius="4px" />
            <Skeleton width="90%" height="16px" borderRadius="4px" />
            <Skeleton width="75%" height="16px" borderRadius="4px" />
        </div>
}`,...(A=(P=o.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var B,E,L;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-3">
            <Skeleton width="48px" height="48px" borderRadius="50%" />
            <div className="space-y-2">
                <Skeleton width="120px" height="16px" borderRadius="4px" />
                <Skeleton width="80px" height="14px" borderRadius="4px" />
            </div>
        </div>
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,H,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="border rounded-lg p-4 space-y-3">
            <Skeleton width="100%" height="160px" borderRadius="8px" />
            <Skeleton width="100%" height="20px" borderRadius="4px" />
            <Skeleton width="80%" height="16px" borderRadius="4px" />
            <Skeleton width="60%" height="16px" borderRadius="4px" />
        </div>
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,U,z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: "custom-skeleton",
    width: "250px",
    height: "60px",
    borderRadius: "16px",
    style: {
      opacity: 0.5
    }
  }
}`,...(z=(U=h.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const V=["Default","TextLine","Avatar","Button","Card","Paragraph","UserProfile","ArticleCard","CustomStyles"];export{c as ArticleCard,i as Avatar,n as Button,d as Card,h as CustomStyles,t as Default,o as Paragraph,a as TextLine,p as UserProfile,V as __namedExportsOrder,Q as default};
