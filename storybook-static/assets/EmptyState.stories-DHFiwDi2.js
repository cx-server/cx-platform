import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-iU2omdTy.js";import{t as a}from"./Article-BV-9RH4J.js";import{i as o,n as s,t as c}from"./Article-BlBRRndD.js";import{n as l,t as u}from"./Button-CdEK86Ty.js";function d({id:e,children:t,title:n,description:r,icon:i,className:c,articleClassName:l,...u}){let d=i?(0,p.cloneElement)(i,{className:`size-[72px] ${i.props.className??``}`}):null;return(0,f.jsxs)(`div`,{id:e,"data-testid":e,className:`text-subtile empty-state ${c??``}`,...u,children:[d,(0,f.jsxs)(a,{id:e+`-article`,className:`text-center ${l??``}`,children:[(0,f.jsx)(o,{className:`text-highlight text-lg font-medium`,children:n}),(0,f.jsx)(s,{className:`text-standard text-base font-normal`,children:r}),t]})]})}var f,p,m=t((()=>{f=i(),p=n(r(),1),c()})),h=t((()=>{m()})),g=e({Default:()=>y,NoBetsHistory:()=>x,WithAction:()=>b,__namedExportsOrder:()=>S,default:()=>v}),_,v,y,b,x,S,C=t((()=>{h(),u(),_=i(),v={title:`Components/EmptyState`,component:d,tags:[],args:{id:`empty-demo`},decorators:[e=>(0,_.jsx)(`div`,{style:{maxWidth:`400px`,margin:`0 auto`,padding:`40px`},children:(0,_.jsx)(e,{})})]},y={args:{id:`empty-default`,title:`No bets yet`,description:`Place your first bet to see it here.`}},b={render:()=>(0,_.jsx)(d,{id:`empty-action`,title:`No results`,description:`Try adjusting your filters or search terms.`,children:(0,_.jsx)(l,{id:`reset-btn`,variant:`outline`,autoWidth:!0,style:{marginTop:`16px`},children:`Reset Filters`})})},x={args:{id:`empty-bets`,title:`No bet history`,description:`Your settled bets will appear here once they're resolved.`}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "empty-default",
    title: "No bets yet",
    description: "Place your first bet to see it here."
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState id="empty-action" title="No results" description="Try adjusting your filters or search terms.">
      <Button id="reset-btn" variant="outline" autoWidth style={{
      marginTop: "16px"
    }}>Reset Filters</Button>
    </EmptyState>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "empty-bets",
    title: "No bet history",
    description: "Your settled bets will appear here once they're resolved."
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithAction`,`NoBetsHistory`]}));C();export{y as Default,x as NoBetsHistory,b as WithAction,S as __namedExportsOrder,v as default,C as n,g as t};