import{j as e}from"./jsx-runtime-8P-18mTY.js";import{A as ue,a as pe,L as xe,D as E,M as oe}from"./match-kombi-tab-icon-6V_HEpdE.js";import{I as a}from"./index-lrnWVvcy.js";import{b as he,a as L}from"./ListHeader-iKCZ9M2k.js";import{B as ve}from"./index-BaNkBGB5.js";import{S as fe}from"./jersey-BsGAYmTZ.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const V={md:{title:"text-base",teams:"text-sm"},lg:{title:"text-lg",teams:"text-base"}};function ie({icon:d,disabled:n,marketName:r,team1Name:o,team2Name:i,time:l,score:s,isLive:m,selectionTitle:D,size:c="md"}){const S=o||i,u=l||s,p=V[c]??V.md;return e.jsxs("div",{className:`flex-1 flex flex-col ${n?"text-subtile":"text-highlight"}`,children:[e.jsxs("div",{className:`flex gap-1 ${p.title}`,children:[d,e.jsxs("div",{children:[r&&e.jsxs("span",{className:`font-normal ${n?"text-subtile":"text-standard"}`,children:[r,":"," "]}),e.jsx("span",{className:"font-medium",children:D})]})]}),S&&e.jsxs("div",{className:`text-subtile ${p.teams} font-normal`,children:[o,e.jsx("span",{className:!o||!i?"hidden":"",children:" – "}),i]}),u&&e.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[l&&e.jsx("span",{className:m&&!n?"text-brand":"",children:l}),e.jsx("span",{className:"h-3 w-px bg-border-standard first:hidden last:hidden"}),s&&e.jsx("span",{children:s})]})]})}ie.__docgenInfo={description:"",methods:[],displayName:"BetslipEventDetails",props:{marketName:{required:!1,tsType:{name:"string"},description:""},selectionTitle:{required:!0,tsType:{name:"ReactNode"},description:""},team1Name:{required:!1,tsType:{name:"string"},description:""},team2Name:{required:!1,tsType:{name:"string"},description:""},isLive:{required:!1,tsType:{name:"boolean"},description:""},time:{required:!1,tsType:{name:"string"},description:""},score:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"md" | "lg"',elements:[{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}}};const k={default:"text-highlight",locked:"text-subtile","not-available":"text-subtile line-through",error:"text-subtile",tendup:"text-positive",tenddown:"text-negative"},ge={locked:xe,tendup:pe,tenddown:ue},q={default:"text-highlight",info:"text-info",warning:"text-warning",error:"text-negative"};function le({betSystem:d,jersey:n,status:r="default",eventData:o,icon:i,oddsValue:l,prevOddsValue:s,supportText:m,supportTextSeverity:D="default",disabled:c,onDeleteClick:S,children:u,className:p="",size:x="md",...de}){const me=k[r]??k.default,I=ge[r],w=x==="lg"?"icon-lg":"icon-sm",ce=q[D]??q.default;return e.jsxs("div",{className:`p-1 pl-2 flex gap-3 rounded-list ${c?"bg-odds-default-locked":""} ${p}`,...de,children:[d&&e.jsx("div",{className:"py-1 pr-2",children:d}),n,e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsx(ie,{icon:i,disabled:!!c,size:x,...o}),e.jsxs("div",{className:`flex gap-1 items-start ${me}`,children:[I?e.jsx(a,{href:I,className:`mt-1 ${w}`}):e.jsx("div",{className:w}),e.jsxs("div",{className:`text-right ${x==="lg"?"mt-2 text-lg":"mt-0.5 text-sm"} font-semibold`,children:[l,s&&e.jsx("div",{className:"font-normal line-through text-subtile",children:s})]}),e.jsx("button",{className:`${x==="lg"?"size-10":"size-6"} flex items-center justify-center`,"data-testid":"delete-event",onClick:S,children:e.jsx(a,{href:E,className:`${w} text-subtile`})})]})]}),u&&e.jsx("div",{className:"mt-2",children:u}),m&&e.jsx("div",{className:`text-sm font-medium ${ce}`,children:m})]})]})}le.__docgenInfo={description:"",methods:[],displayName:"BetslipEvent",props:{betSystem:{required:!1,tsType:{name:"ReactNode"},description:""},jersey:{required:!1,tsType:{name:"ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "locked" | "not-available" | "error" | "tendup" | "tenddown"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"locked"'},{name:"literal",value:'"not-available"'},{name:"literal",value:'"error"'},{name:"literal",value:'"tendup"'},{name:"literal",value:'"tenddown"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},eventData:{required:!0,tsType:{name:"BetslipEventData"},description:""},oddsValue:{required:!0,tsType:{name:"ReactNode"},description:""},prevOddsValue:{required:!1,tsType:{name:"ReactNode"},description:""},supportText:{required:!1,tsType:{name:"ReactNode"},description:""},supportTextSeverity:{required:!1,tsType:{name:"union",raw:'"default" | "info" | "warning" | "error"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"md" | "lg"',elements:[{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},onDeleteClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["HTMLAttributes"]};const we={title:"Components Sports/BetslipEvent",component:le,tags:["autodocs"],argTypes:{betSystem:{control:"boolean",mapping:{true:e.jsx(ve,{selected:!1}),false:void 0}},jersey:{control:"boolean",mapping:{true:e.jsx(fe,{className:"icon-md"}),false:void 0}},icon:{control:"boolean",mapping:{true:e.jsx(a,{href:oe,className:"icon-md"}),false:void 0}},supportText:{control:"text"}}},t={marketName:"3-way",selectionTitle:"TSG 1899 Hoffenheim",team1Name:"Vfb Stuttgart",team2Name:"TSG 1899 Hoffenheim",time:"74'",score:"2:3",isLive:!0},h={args:{eventData:t,oddsValue:"1,42"}},v={args:{eventData:t,oddsValue:"1,42",size:"lg"}},f={args:{eventData:{marketName:t.marketName??"",selectionTitle:t.selectionTitle,team1Name:t.team1Name??"",team2Name:t.team2Name??""},oddsValue:"1,42"}},g={args:{eventData:t,oddsValue:"1,42",status:"locked",disabled:!0,supportText:"Odds temporarily unavailable."}},N={args:{eventData:t,oddsValue:"2,90",status:"tendup"}},b={args:{eventData:t,oddsValue:"1,35",status:"tenddown"}},T={args:{eventData:{...t,time:"END"},oddsValue:"0,95",status:"not-available",disabled:!0,supportText:"Bet not available anymore."}},y={args:{eventData:t,status:"error",oddsValue:"1,42",disabled:!0,supportText:"There's an error with this event.",supportTextSeverity:"error"}},j={args:{eventData:{selectionTitle:"3x MatchKombi",team1Name:"Vfb Stuttgart",team2Name:"Bayern Munich"},oddsValue:"1,42",icon:e.jsx(a,{href:oe,className:"icon-md"}),children:e.jsxs(he,{id:"match-kombi-list",showChain:!0,children:[e.jsx(L,{id:"match-kombi-list-item-1",rightComponent:e.jsx(a,{href:E,className:"icon-sm text-subtile"}),className:"text-sm font-normal text-highlight",children:"3-way: Bayernt Munich"}),e.jsx(L,{id:"match-kombi-list-item-2",rightComponent:e.jsx(a,{href:E,className:"icon-sm text-subtile"}),className:"text-sm font-normal text-highlight",children:"Over/under bet (2,5): Over 2,5 goals"}),e.jsxs(L,{id:"match-kombi-list-item-3",rightComponent:e.jsx(a,{href:E,className:"icon-sm text-subtile"}),chainStatus:"error",className:"text-sm font-normal text-subtile",children:["Does FC Bayern München score a goal in the 1st half? Yes",e.jsx("div",{className:"text-xs font-medium text-negative",children:"This selection doesn't increase your odds"})]})]})}};var C,B,M;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    eventData,
    oddsValue: "1,42"
  }
}`,...(M=(B=h.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var $,R,_;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    eventData,
    oddsValue: "1,42",
    size: "lg"
  }
}`,...(_=(R=v.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var A,O,H;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    eventData: {
      marketName: eventData.marketName ?? "",
      selectionTitle: eventData.selectionTitle,
      team1Name: eventData.team1Name ?? "",
      team2Name: eventData.team2Name ?? ""
    },
    oddsValue: "1,42"
  }
}`,...(H=(O=f.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var K,z,P;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    eventData,
    oddsValue: "1,42",
    status: "locked",
    disabled: true,
    supportText: "Odds temporarily unavailable."
  }
}`,...(P=(z=g.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var U,F,G;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    eventData,
    oddsValue: "2,90",
    status: "tendup"
  }
}`,...(G=(F=N.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var Y,J,X;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    eventData,
    oddsValue: "1,35",
    status: "tenddown"
  }
}`,...(X=(J=b.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,Q,W;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    eventData: {
      ...eventData,
      time: "END"
    },
    oddsValue: "0,95",
    status: "not-available",
    disabled: true,
    supportText: "Bet not available anymore."
  }
}`,...(W=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var ee,te,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    eventData,
    status: "error",
    oddsValue: "1,42",
    disabled: true,
    supportText: "There's an error with this event.",
    supportTextSeverity: "error"
  }
}`,...(ae=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,ne,re;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    eventData: {
      selectionTitle: "3x MatchKombi",
      team1Name: "Vfb Stuttgart",
      team2Name: "Bayern Munich"
    },
    oddsValue: "1,42",
    icon: <Icon href={MatchKombiTabIcon} className="icon-md" />,
    children: <List id="match-kombi-list" showChain>
                <ListItem id="match-kombi-list-item-1" rightComponent={<Icon href={DeleteIcon} className="icon-sm text-subtile" />} className="text-sm font-normal text-highlight">
                    3-way: Bayernt Munich
                </ListItem>
                <ListItem id="match-kombi-list-item-2" rightComponent={<Icon href={DeleteIcon} className="icon-sm text-subtile" />} className="text-sm font-normal text-highlight">
                    Over/under bet (2,5): Over 2,5 goals
                </ListItem>
                <ListItem id="match-kombi-list-item-3" rightComponent={<Icon href={DeleteIcon} className="icon-sm text-subtile" />} chainStatus="error" className="text-sm font-normal text-subtile">
                    Does FC Bayern München score a goal in the 1st half? Yes
                    <div className="text-xs font-medium text-negative">
                        This selection doesn&apos;t increase your odds
                    </div>
                </ListItem>
            </List>
  }
}`,...(re=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const Le=["LiveEvent","LargeLiveEvent","PrematchEvent","LockedEvent","TendUpEvent","TendDownEvent","NotAvailableEvent","ErroredEvent","MatchKombi"];export{y as ErroredEvent,v as LargeLiveEvent,h as LiveEvent,g as LockedEvent,j as MatchKombi,T as NotAvailableEvent,f as PrematchEvent,b as TendDownEvent,N as TendUpEvent,Le as __namedExportsOrder,we as default};
