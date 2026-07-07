import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as a}from"./index-Cs7sjTYM.js";import{C as M}from"./chevron-down-icon-Cd9OjU95.js";import{C as K}from"./chevron-up-icon-BvYfRx8B.js";import{I as U}from"./index-lrnWVvcy.js";import"./_commonjsHelpers-BosuxZz1.js";const x=a.forwardRef(function({id:t,header:m,subHeader:A,isOpen:i,onToggle:v,children:b,footer:f,className:k,animated:r=!0,...L},R){const p=a.useRef(null),[$,D]=a.useState("0px");a.useEffect(()=>{p.current&&r&&D(i?`${p.current.scrollHeight}px`:"0px")},[i,b,r]);const E=r?{maxHeight:$}:{},_=`overflow-hidden w-full ${r?"transition-[max-height] duration-500 ease-in-out":i?"":"max-h-0"}${i?"":" hidden"}${i&&f?" border-subtile border-b pb-2 mb-2":""}`,B=h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),v())};return e.jsxs("div",{id:t,"data-testid":t,className:`w-full max-w-full p-4 bg-card rounded-card flex flex-col justify-start ${k??""}`,ref:R,...L,children:[e.jsxs("div",{className:"flex flex-col gap-0.5 cursor-pointer border-subtile border-b pb-2 mb-2 rounded-md transition-colors lg:hover:bg-list-hover lg:active:bg-list-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-interaction",onClick:v,onKeyDown:B,tabIndex:0,role:"button","aria-expanded":i,children:[e.jsxs("div",{className:"flex items-start justify-between",children:[m,e.jsx(U,{id:`${t}-collapsible-header-icon`,href:i?K:M,className:"icon-md text-subtile"})]}),A]}),e.jsx("div",{ref:p,style:E,className:_,children:b}),f]})});x.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{id:{required:!0,tsType:{name:"string"},description:""},header:{required:!0,tsType:{name:"ReactNode"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},subHeader:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["HTMLProps"]};const ee={title:"Components/Collapsible",component:x,tags:["autodocs"]},n=s=>{const[t,m]=a.useState(s.isOpen);return e.jsx("div",{className:"w-[600px]",children:e.jsx(x,{...s,isOpen:t,onToggle:()=>m(!t)})})},o={args:{id:"example",isOpen:!0,header:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{children:"Title"}),e.jsx("div",{children:"Subtitle very very long one and another bit more of characters"})]}),footer:e.jsx("div",{className:"text-sm text-standard",children:"Footer content here"}),children:e.jsxs("div",{children:[e.jsx("p",{className:"py-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis libero sed nunc pretium, a sagittis orci euismod. Fusce lacus neque, pellentesque et mi non, egestas blandit diam. Curabitur sed scelerisque ex. Proin tristique sollicitudin est bibendum dictum."}),e.jsx("p",{className:"py-4",children:"Aliquam tincidunt dictum risus sit amet varius. Sed pharetra molestie nibh, vitae sollicitudin diam semper eget. In hac habitasse platea dictumst. Proin at turpis ut tortor rhoncus luctus."})]})},render:s=>e.jsx(n,{...s})},l={args:{id:"no-footer-example",isOpen:!1,header:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{children:"Collapsible Without Footer"}),e.jsx("div",{children:"Click to expand"})]}),children:e.jsxs("div",{children:[e.jsx("p",{className:"py-4",children:"This collapsible component does not have a footer section."}),e.jsx("p",{className:"py-4",children:"The content will slide down when expanded and slide up when collapsed."})]})},render:s=>e.jsx(n,{...s})},d={args:{id:"no-animation-example",isOpen:!1,animated:!1,header:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{children:"Collapsible Without Animation"}),e.jsx("div",{children:"Click to expand"})]}),footer:e.jsx("div",{className:"text-sm text-standard",children:"Footer content here"}),children:e.jsxs("div",{children:[e.jsx("p",{className:"py-4",children:"This collapsible component does not have animation."}),e.jsx("p",{className:"py-4",children:"The content will show when expanded and hide when collapsed."})]})},render:s=>e.jsx(n,{...s})},c={args:{id:"example",isOpen:!0,header:e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{children:"Title"})}),subHeader:e.jsx("div",{children:"Aliquam tincidunt dictum risus sit amet varius. Sed pharetra molestie nibh, vitae sollicitudin diam semper eget. In hac habitasse platea dictumst. Proin at turpis ut tortor rhoncus luctus."}),footer:e.jsx("div",{className:"text-sm text-standard",children:"Footer content here"}),children:e.jsx("div",{children:e.jsx("p",{className:"py-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis libero sed nunc pretium, a sagittis orci euismod. Fusce lacus neque, pellentesque et mi non, egestas blandit diam. Curabitur sed scelerisque ex. Proin tristique sollicitudin est bibendum dictum."})})},render:s=>e.jsx(n,{...s})},u={args:{id:"example",isOpen:!0,header:e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{children:"Title"})}),subHeader:e.jsx("div",{className:"whitespace-nowrap truncate leading-6",children:"Aliquam tincidunt dictum risus sit amet varius. Sed pharetra molestie nibh, vitae sollicitudin diam semper eget. In hac habitasse platea dictumst. Proin at turpis ut tortor rhoncus luctus."}),footer:e.jsx("div",{className:"text-sm text-standard",children:"Footer content here"}),children:e.jsx("div",{children:e.jsx("p",{className:"py-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis libero sed nunc pretium, a sagittis orci euismod. Fusce lacus neque, pellentesque et mi non, egestas blandit diam. Curabitur sed scelerisque ex. Proin tristique sollicitudin est bibendum dictum."})})},render:s=>e.jsx(n,{...s})};var g,N,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "example",
    isOpen: true,
    header: <div className="flex flex-col">
                <div>Title</div>
                <div>Subtitle very very long one and another bit more of characters</div>
            </div>,
    footer: <div className="text-sm text-standard">Footer content here</div>,
    children: <div>
                <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis libero sed nunc pretium,
                    a sagittis orci euismod. Fusce lacus neque, pellentesque et mi non, egestas blandit diam. Curabitur
                    sed scelerisque ex. Proin tristique sollicitudin est bibendum dictum.
                </p>
                <p className="py-4">
                    Aliquam tincidunt dictum risus sit amet varius. Sed pharetra molestie nibh, vitae sollicitudin diam
                    semper eget. In hac habitasse platea dictumst. Proin at turpis ut tortor rhoncus luctus.
                </p>
            </div>
  },
  render: args => <CollapsibleWithState {...args} />
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,y,C;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: "no-footer-example",
    isOpen: false,
    header: <div className="flex flex-col">
                <div>Collapsible Without Footer</div>
                <div>Click to expand</div>
            </div>,
    children: <div>
                <p className="py-4">This collapsible component does not have a footer section.</p>
                <p className="py-4">The content will slide down when expanded and slide up when collapsed.</p>
            </div>
  },
  render: args => <CollapsibleWithState {...args} />
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var w,S,T;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "no-animation-example",
    isOpen: false,
    animated: false,
    header: <div className="flex flex-col">
                <div>Collapsible Without Animation</div>
                <div>Click to expand</div>
            </div>,
    footer: <div className="text-sm text-standard">Footer content here</div>,
    children: <div>
                <p className="py-4">This collapsible component does not have animation.</p>
                <p className="py-4">The content will show when expanded and hide when collapsed.</p>
            </div>
  },
  render: args => <CollapsibleWithState {...args} />
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var P,F,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "example",
    isOpen: true,
    header: <div className="flex flex-col">
                <div>Title</div>
            </div>,
    subHeader: <div>
                Aliquam tincidunt dictum risus sit amet varius. Sed pharetra molestie nibh, vitae sollicitudin diam
                semper eget. In hac habitasse platea dictumst. Proin at turpis ut tortor rhoncus luctus.
            </div>,
    footer: <div className="text-sm text-standard">Footer content here</div>,
    children: <div>
                <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis libero sed nunc pretium,
                    a sagittis orci euismod. Fusce lacus neque, pellentesque et mi non, egestas blandit diam. Curabitur
                    sed scelerisque ex. Proin tristique sollicitudin est bibendum dictum.
                </p>
            </div>
  },
  render: args => <CollapsibleWithState {...args} />
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,I,O;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: "example",
    isOpen: true,
    header: <div className="flex flex-col">
                <div>Title</div>
            </div>,
    subHeader: <div className="whitespace-nowrap truncate leading-6">
                Aliquam tincidunt dictum risus sit amet varius. Sed pharetra molestie nibh, vitae sollicitudin diam
                semper eget. In hac habitasse platea dictumst. Proin at turpis ut tortor rhoncus luctus.
            </div>,
    footer: <div className="text-sm text-standard">Footer content here</div>,
    children: <div>
                <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis libero sed nunc pretium,
                    a sagittis orci euismod. Fusce lacus neque, pellentesque et mi non, egestas blandit diam. Curabitur
                    sed scelerisque ex. Proin tristique sollicitudin est bibendum dictum.
                </p>
            </div>
  },
  render: args => <CollapsibleWithState {...args} />
}`,...(O=(I=u.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const se=["Default","WithoutFooter","WithoutAnimation","WithSubHeader","WithSubHeaderTruncated"];export{o as Default,c as WithSubHeader,u as WithSubHeaderTruncated,d as WithoutAnimation,l as WithoutFooter,se as __namedExportsOrder,ee as default};
