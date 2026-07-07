import{j as t}from"./jsx-runtime-8P-18mTY.js";import{S as s}from"./StatusLabel-Csiszj1P.js";import{S as C}from"./checkmark-Cbg41s1-.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ByMkMMla.js";const B={title:"Components Sports/StatusLabel",component:s,tags:["autodocs"],argTypes:{statusType:{control:"select",options:["DELIVERED","BOUGHT_BACK","BUY_BACK","LOST","PAID_OUT","PAYOUT","PAID_BACK","CANCELED","ALLOWED","REQUESTED","REJECTED","ACCEPTED","INVALID"]}}},e={args:{id:"status-label",statusType:"DELIVERED",children:"Delivered"}},a={args:{id:"status-with-icon",statusType:"BUY_BACK",children:"Cash Out"}},n={args:{id:"status-custom-icon",statusType:"ACCEPTED",icon:t.jsx(C,{}),children:"Accepted"}},r={render:()=>t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx(s,{id:"delivered",statusType:"DELIVERED",children:"DELIVERED"}),t.jsx(s,{id:"bought-back",statusType:"BOUGHT_BACK",children:"BOUGHT_BACK"}),t.jsx(s,{id:"buy-back",statusType:"BUY_BACK",children:"BUY_BACK"}),t.jsx(s,{id:"lost",statusType:"LOST",children:"LOST"}),t.jsx(s,{id:"paid-out",statusType:"PAID_OUT",children:"PAID_OUT"}),t.jsx(s,{id:"payout",statusType:"PAYOUT",children:"PAYOUT"}),t.jsx(s,{id:"paid-back",statusType:"PAID_BACK",children:"PAID_BACK"}),t.jsx(s,{id:"canceled",statusType:"CANCELED",children:"CANCELED"}),t.jsx(s,{id:"allowed",statusType:"ALLOWED",children:"ALLOWED"}),t.jsx(s,{id:"requested",statusType:"REQUESTED",children:"REQUESTED"}),t.jsx(s,{id:"rejected",statusType:"REJECTED",children:"REJECTED"}),t.jsx(s,{id:"accepted",statusType:"ACCEPTED",children:"ACCEPTED"}),t.jsx(s,{id:"invalid",statusType:"INVALID",children:"INVALID"})]})};var u,d,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: "status-label",
    statusType: "DELIVERED",
    children: "Delivered"
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,l,o;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: "status-with-icon",
    statusType: "BUY_BACK",
    children: "Cash Out"
  }
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var E,p,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: "status-custom-icon",
    statusType: "ACCEPTED",
    icon: <CheckIcon />,
    children: "Accepted"
  }
}`,...(T=(p=n.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var D,L,A;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
            <StatusLabel id="delivered" statusType="DELIVERED">
                DELIVERED
            </StatusLabel>
            <StatusLabel id="bought-back" statusType="BOUGHT_BACK">
                BOUGHT_BACK
            </StatusLabel>
            <StatusLabel id="buy-back" statusType="BUY_BACK">
                BUY_BACK
            </StatusLabel>
            <StatusLabel id="lost" statusType="LOST">
                LOST
            </StatusLabel>
            <StatusLabel id="paid-out" statusType="PAID_OUT">
                PAID_OUT
            </StatusLabel>
            <StatusLabel id="payout" statusType="PAYOUT">
                PAYOUT
            </StatusLabel>
            <StatusLabel id="paid-back" statusType="PAID_BACK">
                PAID_BACK
            </StatusLabel>
            <StatusLabel id="canceled" statusType="CANCELED">
                CANCELED
            </StatusLabel>
            <StatusLabel id="allowed" statusType="ALLOWED">
                ALLOWED
            </StatusLabel>
            <StatusLabel id="requested" statusType="REQUESTED">
                REQUESTED
            </StatusLabel>
            <StatusLabel id="rejected" statusType="REJECTED">
                REJECTED
            </StatusLabel>
            <StatusLabel id="accepted" statusType="ACCEPTED">
                ACCEPTED
            </StatusLabel>
            <StatusLabel id="invalid" statusType="INVALID">
                INVALID
            </StatusLabel>
        </div>
}`,...(A=(L=r.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};const O=["Default","WithDefaultIcon","WithCustomIcon","AllStatuses"];export{r as AllStatuses,e as Default,n as WithCustomIcon,a as WithDefaultIcon,O as __namedExportsOrder,B as default};
