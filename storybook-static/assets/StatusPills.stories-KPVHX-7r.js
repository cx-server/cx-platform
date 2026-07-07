import{j as e}from"./jsx-runtime-8P-18mTY.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const L=(r="")=>typeof r!="string"?"":r.toLowerCase()==="w"?"bg-positive":r.toLowerCase()==="l"?"bg-negative":"bg-neutral",s=({className:r,children:N,isUnderlined:i,id:l,backgroundColorIndicator:w,pillSize:c,undelineSize:d})=>{const u=L(w),k=c||"size-5",I=d||"h-0.5 w-3",P=`flex flex-col justify-center items-center w-max ${i?"gap-0.5":""} ${r??""}`;return e.jsxs("div",{className:P,children:[e.jsx("div",{className:`flex overflow-hidden justify-center items-center rounded-xl font-medium text-2xs text-white-inverse lg:transition-opacity lg:[@media(hover:hover)]:hover:opacity-90 ${u} ${k}`,id:l,"data-testid":l,children:N}),i&&e.jsx("span",{className:`rounded-md ${u} ${I}`})]})};s.__docgenInfo={description:"",methods:[],displayName:"StatusPill",props:{isUnderlined:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | string",elements:[{name:"JSX.Element"},{name:"string"}]},description:""},pillSize:{required:!1,tsType:{name:"string"},description:""},undelineSize:{required:!1,tsType:{name:"string"},description:""},backgroundColorIndicator:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]};const W={title:"Components Sports/StatusPill",component:s,parameters:{layout:"fullscreen"},argTypes:{children:{type:"string"},isUnderlined:{control:{type:"boolean"}},backgroundColorIndicator:{control:{type:"radio"},options:["W","L","D"]}},tags:["autodocs"]},n={render:r=>e.jsx("div",{className:"p-4 flex justify-center",children:e.jsx("div",{className:"w-[100px]",children:e.jsx(s,{...r,children:e.jsx("span",{children:r.backgroundColorIndicator})})})})};n.args={backgroundColorIndicator:"W"};const a={render:r=>e.jsx("div",{className:"p-4 flex justify-center",children:e.jsx("div",{className:"w-[100px]",children:e.jsx(s,{...r,backgroundColorIndicator:"w",children:e.jsx("span",{children:r.backgroundColorIndicator})})})})};a.args={backgroundColorIndicator:"W"};const t={render:r=>e.jsx("div",{className:"p-4 flex justify-center",children:e.jsx("div",{className:"w-[100px]",children:e.jsx(s,{...r,backgroundColorIndicator:"l",children:e.jsx("span",{children:r.backgroundColorIndicator})})})})};t.args={backgroundColorIndicator:"L"};const o={render:r=>e.jsx("div",{className:"p-4 flex justify-center",children:e.jsx("div",{className:"w-[100px]",children:e.jsx(s,{...r,backgroundColorIndicator:"d",children:e.jsx("span",{children:r.backgroundColorIndicator})})})})};o.args={backgroundColorIndicator:"D"};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <div className="p-4 flex justify-center">
                <div className="w-[100px]">
                    <StatusPill {...args}>
                        <span>{args.backgroundColorIndicator}</span>
                    </StatusPill>
                </div>
            </div>;
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,f,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <div className="p-4 flex justify-center">
                <div className="w-[100px]">
                    <StatusPill {...args} backgroundColorIndicator="w">
                        <span>{args.backgroundColorIndicator}</span>
                    </StatusPill>
                </div>
            </div>;
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var j,C,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return <div className="p-4 flex justify-center">
                <div className="w-[100px]">
                    <StatusPill {...args} backgroundColorIndicator="l">
                        <span>{args.backgroundColorIndicator}</span>
                    </StatusPill>
                </div>
            </div>;
  }
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var h,y,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return <div className="p-4 flex justify-center">
                <div className="w-[100px]">
                    <StatusPill {...args} backgroundColorIndicator="d">
                        <span>{args.backgroundColorIndicator}</span>
                    </StatusPill>
                </div>
            </div>;
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const E=["DefaultStatusPill","WinStatusPill","LostStatusPill","DrawStatusPill"];export{n as DefaultStatusPill,o as DrawStatusPill,t as LostStatusPill,a as WinStatusPill,E as __namedExportsOrder,W as default};
