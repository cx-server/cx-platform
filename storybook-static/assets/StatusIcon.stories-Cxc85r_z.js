import{j as v}from"./jsx-runtime-8P-18mTY.js";import{S,a as J,b as K,c as Q,d as g,e as U}from"./status-won-D9uFaRex.js";import{r as e}from"./index-Cs7sjTYM.js";import{I as X}from"./index-lrnWVvcy.js";import"./_commonjsHelpers-BosuxZz1.js";const Y=i=>e.createElement("svg",{id:"default",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",style:{fill:"var(--icon-secondary, transparent)"},...i},e.createElement("defs",null,e.createElement("style",null,`
      .live-pulse {
        animation: livePulse 1.8s infinite;
      }

      @keyframes livePulse {
        0% { opacity: 0.8; transform: scale(1); }
        55% { opacity: 0.8; transform: scale(1); }
        70% { opacity: 0.4; transform: scale(4.5); }
        100% { opacity: 0; transform: scale(1); }
      }
    `)),e.createElement("circle",{cx:6,cy:6,r:5.25,stroke:"currentColor",strokeWidth:1.5}),e.createElement("circle",{cx:6,cy:6,r:1.5,fill:"#C8102E"}),e.createElement("circle",{cx:6,cy:6,r:1,fill:"#C8102E",className:"live-pulse","transform-origin":"50% 50%"})),Z={open:[U,"icon-border-highlight"],won:[S,"icon-positive"],lost:[g,"icon-negative"],lost_subtle:[g,"icon-subtile"],canceled:[Q,"icon-subtile"],live:["live","icon-primary-border-highlight icon-secondary-white-inverse"],more:[K,"icon-subtile"],not_evaluated:[J,"icon-border-highlight"],won_subtle:[S,"icon-neutral"]};function B({className:i="",id:d,active:G,variant:m,href:z,...D}){const[F,H]=m?Z[m]:[],u=z??F;if(!u)return null;const p={id:d,"data-testid":d,className:`${H} ${G?"":"opacity-50"} ${i}`,height:24,width:24,...D};return u==="live"?v.jsx(Y,{...p}):v.jsx(X,{href:u,...p})}B.__docgenInfo={description:"",methods:[],displayName:"StatusIcon",props:{id:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "open"
| "won"
| "lost"
| "lost_subtle"
| "canceled"
| "live"
| "more"
| "not_evaluated"
| "won_subtle"`,elements:[{name:"literal",value:'"open"'},{name:"literal",value:'"won"'},{name:"literal",value:'"lost"'},{name:"literal",value:'"lost_subtle"'},{name:"literal",value:'"canceled"'},{name:"literal",value:'"live"'},{name:"literal",value:'"more"'},{name:"literal",value:'"not_evaluated"'},{name:"literal",value:'"won_subtle"'}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["SVGProps"]};const oe={title:"Components/StatusIcon",component:B,tags:["autodocs"]},a={args:{id:"status-won",variant:"won"}},t={args:{id:"status-open",variant:"open"}},s={args:{id:"status-lost",variant:"lost"}},n={args:{id:"status-cancelled",variant:"canceled"}},r={args:{id:"status-live",variant:"live"}},o={args:{id:"status-more",variant:"more"}},c={args:{id:"status-not-evaluated",variant:"not_evaluated"}},l={args:{id:"status-won-subtle",variant:"won_subtle"}};var f,I,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "status-won",
    variant: "won"
  }
}`,...(w=(I=a.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var b,_,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "status-open",
    variant: "open"
  }
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var h,E,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "status-lost",
    variant: "lost"
  }
}`,...(x=(E=s.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var C,N,L;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: "status-cancelled",
    variant: "canceled"
  }
}`,...(L=(N=n.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var W,P,$;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: "status-live",
    variant: "live"
  }
}`,...($=(P=r.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var j,q,M;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "status-more",
    variant: "more"
  }
}`,...(M=(q=o.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var O,T,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: "status-not-evaluated",
    variant: "not_evaluated"
  }
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var A,R,V;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: "status-won-subtle",
    variant: "won_subtle"
  }
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const ce=["StatusIconWon","StatusIconOpen","StatusIconLost","StatusIconCancelled","StatusIconLive","StatusIconMore","StatusIconNotEvaluated","StatusIconWonSubtle"];export{n as StatusIconCancelled,r as StatusIconLive,s as StatusIconLost,o as StatusIconMore,c as StatusIconNotEvaluated,t as StatusIconOpen,a as StatusIconWon,l as StatusIconWonSubtle,ce as __namedExportsOrder,oe as default};
