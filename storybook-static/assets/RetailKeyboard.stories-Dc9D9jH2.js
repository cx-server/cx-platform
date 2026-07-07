import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as l}from"./index-Cs7sjTYM.js";import{I as u}from"./index-lrnWVvcy.js";import{C as Z}from"./close-icon-DtnN5aCc.js";import{S as j,K as ee,a as re}from"./search-icon-BfwI2PuJ.js";import{a as te}from"./ScrollContainer-BTGyWr62.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-La_wTmJS.js";import"./chevron-right-icon-_rshvSJP.js";const ae=["0px","32px","55px","78px"],U=({layout:r,display:t,onKeyPress:i})=>{const o=r.default??[],p=s=>t[s]??s;return e.jsx("div",{className:"flex flex-col gap-2",style:{width:"1364px",height:"352px"},children:o.map((s,c)=>e.jsx("div",{className:"flex justify-start gap-3",style:{height:"64px",marginLeft:ae[c]??"0px"},children:s.split(" ").map(a=>e.jsx("button",{className:"border-b border-standard rounded-lg bg-white-inverse/50 flex justify-center items-center text-standard text-xl font-medium transition-colors active:bg-border-standard active:scale-95",style:a!=="{space}"?{width:"103px",height:"64px"}:{height:"64px",flex:1},onPointerDown:m=>{m.preventDefault(),i(a)},type:"button","aria-label":p(a),"data-testid":"ui-keyboard-key-"+a,children:p(a)},a))},s))})};U.__docgenInfo={description:"",methods:[],displayName:"Keyboard",props:{layout:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"Record<string, string[]>"},description:""},display:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},onKeyPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""}}};const se={default:["1 2 3 4 5 6 7 8 9 0 ß {bksp}","q w e r t z u i o p ü","a s d f g h j k l ö ä","y x c v b n m , . - @","{space}"]},ne={"{bksp}":"⌫","{space}":"Leerzeichen"},w=({query:r="",onQueryChange:t,expandible:i=!1,onExpandedChange:o,layout:p=se,display:s=ne,inputBoxVisible:c=!1,inputBoxPlaceholder:a,actions:m})=>{const[n,N]=l.useState(!0);l.useEffect(()=>o==null?void 0:o(n),[n,o]);const H=l.useCallback(d=>{t(d==="{bksp}"?r.slice(0,-1):d==="{space}"?r+" ":r+d)},[r,t]),J=l.useCallback(()=>N(!0),[]),X=l.useCallback(()=>N(d=>!d),[]);return e.jsxs("div",{className:"w-full bg-card-feature p-4 flex flex-col border border-standard rounded-alerts",children:[e.jsxs("div",{className:`flex flex-row items-center ${c?"justify-center relative":"justify-end"} gap-2`,children:[c&&e.jsxs("div",{className:`h-20 w-[758px] px-6 flex items-center bg-input text-highlight text-base cursor-pointer rounded-card border ${n?"border-info":"border-standard"}`,onClick:J,"aria-readonly":"true","data-testid":"input-box",children:[e.jsx(u,{href:j,className:"h-8 w-8 text-subtile"}),e.jsxs("span",{className:"flex-1 text-center text-highlight text-2xl text-ellipsis overflow-hidden whitespace-nowrap","data-testid":"input-box-query",children:[r,n&&e.jsx("span",{className:"inline-block w-0.5 h-6 bg-[currentColor] animate-blink text-base","data-testid":"blinking-cursor"}),!r&&a&&e.jsx("span",{className:"text-subtile",children:a})]}),e.jsx("button",{onClick:()=>t(""),"aria-label":"Clear search",className:`flex-shrink-0 opacity-0 ${r.length>0&&n&&"opacity-100"}`,children:e.jsx(u,{href:Z,className:"h-8 w-8 text-subtile"})})]}),(m||i)&&e.jsxs("div",{"data-testid":"actions-container",className:`flex flex-row gap-4 ${c?"absolute right-0":""}`,children:[m,i&&e.jsx("button",{className:"mx-2",onClick:X,"data-testid":"ui-keyboard-expand",children:e.jsx(u,{href:n?ee:re,className:"size-14"})})]})]}),e.jsx("div",{"data-testid":"key-grid",className:`overflow-hidden transition-all duration-300 ease-in-out ${n?"mt-4 max-h-[500px] opacity-100":"max-h-0 opacity-0"}`,children:e.jsx(U,{layout:p,display:s,onKeyPress:H})})]})};w.__docgenInfo={description:"",methods:[],displayName:"RetailKeyboard",props:{query:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onQueryChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},expandible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:""},layout:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"Record<string, string[]>"},description:"",defaultValue:{value:`{
    default: [
        "1 2 3 4 5 6 7 8 9 0 ß {bksp}",
        "q w e r t z u i o p ü",
        "a s d f g h j k l ö ä",
        "y x c v b n m , . - @",
        "{space}"
    ]
}`,computed:!1}},display:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"",defaultValue:{value:`{
    "{bksp}": "⌫",
    "{space}": "Leerzeichen"
}`,computed:!1}},inputBoxVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},inputBoxPlaceholder:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};const fe={title:"Retail Components/RetailKeyboard",component:w,tags:["autodocs"],args:{onExpandedChange:()=>{}},decorators:[r=>e.jsx("div",{style:{transform:"scale(0.65)",transformOrigin:"top left"},children:e.jsx("div",{className:"w-fit p-4",children:e.jsx(r,{})})})]},x={args:{query:""}},b={args:{query:"",inputBoxVisible:!0}},f={args:{query:"Bundesliga",inputBoxVisible:!0}},g={args:{query:"Bundesliga",expandible:!0,inputBoxVisible:!0}},h={args:{query:"",inputBoxVisible:!0,actions:e.jsx(te,{scrollPrev:()=>alert("Scroll up"),scrollNext:()=>alert("Scroll down"),canScrollNext:!0,canScrollPrev:!0})}},y={args:{query:"",inputBoxVisible:!0,expandible:!0,actions:e.jsx("button",{className:"h-14 w-14 flex items-center justify-center rounded-[175px] border border-standard bg-black-inverse/75 text-interaction-default",onClick:()=>alert("Search"),"aria-label":"Search",children:e.jsx(u,{href:j,className:"h-[42px] w-[42px]"})})}},v={args:{query:"",inputBoxVisible:!1,actions:e.jsx("button",{className:"h-14 w-14 flex items-center justify-center rounded-[175px] border border-standard bg-black-inverse/75 text-interaction-default",onClick:()=>alert("Search"),"aria-label":"Search",children:e.jsx(u,{href:j,className:"h-[42px] w-[42px]"})})}},ie=r=>{const[t,i]=l.useState(r.query??"");return e.jsx(w,{...r,query:t,onQueryChange:i})},S={args:{expandible:!0,inputBoxVisible:!0,inputBoxPlaceholder:"Type anything..."},render:r=>e.jsx(ie,{...r})};var q,B,k;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    query: ""
  }
}`,...(k=(B=x.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var I,R,V;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    query: "",
    inputBoxVisible: true
  }
}`,...(V=(R=b.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var A,T,K;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    query: "Bundesliga",
    inputBoxVisible: true
  }
}`,...(K=(T=f.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var E,C,P;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    query: "Bundesliga",
    expandible: true,
    inputBoxVisible: true
  }
}`,...(P=(C=g.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var W,_,D;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    query: "",
    inputBoxVisible: true,
    actions: <ScrollButtons scrollPrev={() => alert("Scroll up")} scrollNext={() => alert("Scroll down")} canScrollNext canScrollPrev />
  }
}`,...(D=(_=h.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var O,L,z;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    query: "",
    inputBoxVisible: true,
    expandible: true,
    actions: <button className="h-14 w-14 flex items-center justify-center rounded-[175px] border border-standard bg-black-inverse/75 text-interaction-default" onClick={() => alert("Search")} aria-label="Search">
                <Icon href={SearchIcon} className="h-[42px] w-[42px]" />
            </button>
  }
}`,...(z=(L=y.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var $,Y,F;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    query: "",
    inputBoxVisible: false,
    actions: <button className="h-14 w-14 flex items-center justify-center rounded-[175px] border border-standard bg-black-inverse/75 text-interaction-default" onClick={() => alert("Search")} aria-label="Search">
                <Icon href={SearchIcon} className="h-[42px] w-[42px]" />
            </button>
  }
}`,...(F=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var G,M,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    expandible: true,
    inputBoxVisible: true,
    inputBoxPlaceholder: "Type anything..."
  },
  render: args => <InteractiveKeyboard {...args} />
}`,...(Q=(M=S.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const ge=["Default","WithInputBox","WithQuery","Expandible","WithScrollButtons","WithSearchActionAndExpandible","WithSearchActionAndNoInput","Interactive"];export{x as Default,g as Expandible,S as Interactive,b as WithInputBox,f as WithQuery,h as WithScrollButtons,y as WithSearchActionAndExpandible,v as WithSearchActionAndNoInput,ge as __namedExportsOrder,fe as default};
