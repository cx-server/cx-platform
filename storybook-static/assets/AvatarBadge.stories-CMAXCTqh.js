import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";function x({src:a,letter:y,showBlur:A,blurClassName:b}){return a?e.jsxs("div",{className:"contents",children:[A&&e.jsx("img",{alt:"Avatar","data-testid":"avatar-blured-image",src:a,className:`size-full rounded-full absolute top-2 blur-[8px] ${b}`}),e.jsx("img",{"data-testid":"avatar-image",alt:"Avatar",src:a,className:"size-full rounded-full relative"})]}):e.jsx("span",{children:y??""})}x.__docgenInfo={description:"",methods:[],displayName:"AvatarBadge",props:{src:{required:!1,tsType:{name:"string"},description:""},letter:{required:!1,tsType:{name:"string"},description:""},showBlur:{required:!1,tsType:{name:"boolean"},description:""},blurClassName:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/AvatarBadge",component:x,argTypes:{src:{control:{type:"text"}},letter:{control:{type:"text"}},showBlur:{control:{type:"boolean"}},blurClassName:{control:{type:"text"}}},tags:["autodocs"],decorators:[a=>e.jsx("div",{className:"relative size-12 flex items-center justify-center rounded-full bg-gray-200 text-lg font-bold",children:e.jsx(a,{})})]},r={args:{src:"https://sports-media-knights.dev.irl.aws.tipicodev.de/avatars/Man/Fair/Avatar-01.png"}},t={args:{src:"https://sports-media-knights.dev.irl.aws.tipicodev.de/avatars/Man/Fair/Avatar-01.png",showBlur:!0}},s={args:{letter:"A"}},o={args:{}};var i,n,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: "https://sports-media-knights.dev.irl.aws.tipicodev.de/avatars/Man/Fair/Avatar-01.png"
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: "https://sports-media-knights.dev.irl.aws.tipicodev.de/avatars/Man/Fair/Avatar-01.png",
    showBlur: true
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    letter: "A"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const k=["WithImage","WithImageAndBlur","WithLetter","EmptyFallback"];export{o as EmptyFallback,r as WithImage,t as WithImageAndBlur,s as WithLetter,k as __namedExportsOrder,N as default};
