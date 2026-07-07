import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as E}from"./index-Cs7sjTYM.js";import{L as h}from"./index-ByMkMMla.js";import{S as _}from"./checkmark-Cbg41s1-.js";import"./_commonjsHelpers-BosuxZz1.js";const v=a=>E.createElement("svg",{id:"default",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a},E.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M11.481 4.01664C8.26682 4.22328 5.48513 6.3492 4.4352 9.40143C3.87571 11.0279 3.85711 12.8085 4.38255 14.4386C5.179 16.9095 7.09044 18.8209 9.56131 19.6174C11.1348 20.1245 12.8663 20.1245 14.4398 19.6174C15.9842 19.1195 17.313 18.1911 18.3152 16.9094C19.1964 15.7826 19.762 14.4141 19.9402 12.9779C19.9674 12.7584 20.0021 12.2667 20.0021 12.0989L20.0022 11.9994H18.5528L18.5418 12.2981C18.4917 13.6555 17.9896 14.9932 17.1199 16.0868C16.8987 16.3648 16.366 16.8975 16.0879 17.1187C15.2141 17.8137 14.1696 18.2818 13.1003 18.4576C12.6542 18.531 12.5704 18.537 12.0005 18.537C11.4307 18.537 11.3468 18.531 10.9008 18.4576C9.91908 18.2962 8.92208 17.8726 8.10914 17.2714C7.73036 16.9912 7.22236 16.506 6.92351 16.1387C6.13745 15.1728 5.66684 14.072 5.49455 12.7961C5.44926 12.4607 5.44926 11.5381 5.49455 11.2027C5.66618 9.93165 6.1243 8.85604 6.91458 7.86865C7.09316 7.64553 7.64671 7.09198 7.86983 6.9134C8.99397 6.01368 10.3242 5.50847 11.7018 5.45805L12.0005 5.44713V3.99774L11.849 4.00024C11.7657 4.0016 11.6 4.00898 11.481 4.01664ZM13.5939 4.16716C13.5939 4.17255 13.5308 4.48809 13.4536 4.86838C13.3764 5.24866 13.3199 5.56601 13.328 5.57358C13.3362 5.58113 13.4168 5.6042 13.5073 5.62481C13.8704 5.70752 14.3021 5.85358 14.6893 6.02471C14.7822 6.06574 14.8614 6.09604 14.8654 6.09204C14.8805 6.07674 15.4818 4.82589 15.4818 4.80961C15.4818 4.77657 14.9155 4.53699 14.5519 4.41616C14.1953 4.29768 13.5939 4.14137 13.5939 4.16716ZM16.3594 6.18161C16.1229 6.49686 15.9321 6.75655 15.9351 6.75872C15.9382 6.76088 16.0148 6.82166 16.1053 6.89376C16.4353 7.1567 16.8674 7.59024 17.1151 7.90669C17.1836 7.99429 17.244 8.06444 17.2492 8.06256C17.2778 8.05236 18.3898 7.20818 18.3905 7.1961C18.3921 7.17167 18.0775 6.78937 17.8648 6.55722C17.7538 6.43605 17.5638 6.24609 17.4427 6.13509C17.2146 5.92611 16.8291 5.60846 16.8037 5.60846C16.7957 5.60846 16.5958 5.86638 16.3594 6.18161ZM18.5387 8.82371C18.1957 8.99068 17.9119 9.13056 17.9079 9.13454C17.9039 9.13852 17.9342 9.21774 17.9752 9.31057C18.1477 9.7009 18.3115 10.1879 18.3835 10.5245C18.4006 10.604 18.4233 10.6724 18.4341 10.6766C18.4495 10.6825 19.8306 10.4107 19.84 10.4C19.8479 10.3909 19.7143 9.86189 19.6542 9.66446C19.5168 9.21371 19.2376 8.53045 19.1878 8.52363C19.1737 8.5217 18.8816 8.65673 18.5387 8.82371ZM11.2731 12.3025L14.1308 15.1601L15.1613 14.1297L12.728 11.6962V8.69133H11.2731V12.3025Z"})),P="bg-warning-hover",R={DELIVERED:"neutral",BOUGHT_BACK:"positive",BUY_BACK:"positive",LOST:"neutral",PAID_OUT:"positive",PAYOUT:"positive",PAID_BACK:"neutral",CANCELED:"neutral",ALLOWED:"positive",REQUESTED:"warning",REJECTED:"neutral",ACCEPTED:"accent",INVALID:"neutral"},g=["BUY_BACK","PAYOUT","REQUESTED"];function t({id:a,statusType:i,className:B,children:U,icon:O,...b}){const u=R[i],y=O||(g.includes(i)?e.jsx(v,{className:"w-4 h-4",id:"step-watch-icon","data-testid":"step-watch-icon"}):void 0);return e.jsx(h,{className:`uppercase ${u==="warning"?P:""} ${B??""}`,id:a,"data-testid":a,variant:u,leftIconComponent:y,...b,children:U})}t.__docgenInfo={description:"",methods:[],displayName:"StatusLabel",props:{id:{required:!0,tsType:{name:"string"},description:""},statusType:{required:!0,tsType:{name:"union",raw:`| "DELIVERED"
| "BOUGHT_BACK"
| "BUY_BACK"
| "LOST"
| "PAID_OUT"
| "PAYOUT"
| "PAID_BACK"
| "CANCELED"
| "ALLOWED"
| "REQUESTED"
| "REJECTED"
| "ACCEPTED"
| "INVALID"`,elements:[{name:"literal",value:'"DELIVERED"'},{name:"literal",value:'"BOUGHT_BACK"'},{name:"literal",value:'"BUY_BACK"'},{name:"literal",value:'"LOST"'},{name:"literal",value:'"PAID_OUT"'},{name:"literal",value:'"PAYOUT"'},{name:"literal",value:'"PAID_BACK"'},{name:"literal",value:'"CANCELED"'},{name:"literal",value:'"ALLOWED"'},{name:"literal",value:'"REQUESTED"'},{name:"literal",value:'"REJECTED"'},{name:"literal",value:'"ACCEPTED"'},{name:"literal",value:'"INVALID"'}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"ReactElement | undefined",elements:[{name:"ReactElement"},{name:"undefined"}]},description:""}},composes:["Omit"]};const j={title:"Components Sports/StatusLabel",component:t,tags:["autodocs"],argTypes:{statusType:{control:"select",options:["DELIVERED","BOUGHT_BACK","BUY_BACK","LOST","PAID_OUT","PAYOUT","PAID_BACK","CANCELED","ALLOWED","REQUESTED","REJECTED","ACCEPTED","INVALID"]}}},s={args:{id:"status-label",statusType:"DELIVERED",children:"Delivered"}},n={args:{id:"status-with-icon",statusType:"BUY_BACK",children:"Cash Out"}},l={args:{id:"status-custom-icon",statusType:"ACCEPTED",icon:e.jsx(_,{}),children:"Accepted"}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{id:"delivered",statusType:"DELIVERED",children:"DELIVERED"}),e.jsx(t,{id:"bought-back",statusType:"BOUGHT_BACK",children:"BOUGHT_BACK"}),e.jsx(t,{id:"buy-back",statusType:"BUY_BACK",children:"BUY_BACK"}),e.jsx(t,{id:"lost",statusType:"LOST",children:"LOST"}),e.jsx(t,{id:"paid-out",statusType:"PAID_OUT",children:"PAID_OUT"}),e.jsx(t,{id:"payout",statusType:"PAYOUT",children:"PAYOUT"}),e.jsx(t,{id:"paid-back",statusType:"PAID_BACK",children:"PAID_BACK"}),e.jsx(t,{id:"canceled",statusType:"CANCELED",children:"CANCELED"}),e.jsx(t,{id:"allowed",statusType:"ALLOWED",children:"ALLOWED"}),e.jsx(t,{id:"requested",statusType:"REQUESTED",children:"REQUESTED"}),e.jsx(t,{id:"rejected",statusType:"REJECTED",children:"REJECTED"}),e.jsx(t,{id:"accepted",statusType:"ACCEPTED",children:"ACCEPTED"}),e.jsx(t,{id:"invalid",statusType:"INVALID",children:"INVALID"})]})};var c,d,o;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: "status-label",
    statusType: "DELIVERED",
    children: "Delivered"
  }
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var C,p,T;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: "status-with-icon",
    statusType: "BUY_BACK",
    children: "Cash Out"
  }
}`,...(T=(p=n.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var D,A,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: "status-custom-icon",
    statusType: "ACCEPTED",
    icon: <CheckIcon />,
    children: "Accepted"
  }
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var m,S,I;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Y=["Default","WithDefaultIcon","WithCustomIcon","AllStatuses"];export{r as AllStatuses,s as Default,l as WithCustomIcon,n as WithDefaultIcon,Y as __namedExportsOrder,j as default};
