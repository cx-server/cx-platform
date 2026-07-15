import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-Cd-Mih9Z.js";import{t as i}from"./Article-D31ywxiD.js";import{i as a,n as o,t as s}from"./Article-B8ANPR86.js";import{n as c,t as l}from"./Button-sF4anXCs.js";function u({id:e,children:t,title:n,description:r,icon:s,className:c,articleClassName:l,...u}){let p=s?(0,f.cloneElement)(s,{className:`size-[72px] ${s.props.className??``}`}):null;return(0,d.jsxs)(`div`,{id:e,"data-testid":e,className:`text-subtile empty-state ${c??``}`,...u,children:[p,(0,d.jsxs)(i,{id:e+`-article`,className:`text-center ${l??``}`,children:[(0,d.jsx)(a,{className:`text-highlight text-lg font-medium`,children:n}),(0,d.jsx)(o,{className:`text-standard text-base font-normal`,children:r}),t]})]})}var d,f,p=e((()=>{d=r(),f=t(n(),1),s()})),m=e((()=>{p()})),h,g,_,v,y,b;e((()=>{m(),l(),h=r(),g={title:`Components/EmptyState`,component:u,tags:[],args:{id:`empty-demo`},decorators:[e=>(0,h.jsx)(`div`,{style:{maxWidth:`400px`,margin:`0 auto`,padding:`40px`},children:(0,h.jsx)(e,{})})]},_={args:{id:`empty-default`,title:`No bets yet`,description:`Place your first bet to see it here.`}},v={render:()=>(0,h.jsx)(u,{id:`empty-action`,title:`No results`,description:`Try adjusting your filters or search terms.`,children:(0,h.jsx)(c,{id:`reset-btn`,variant:`outline`,autoWidth:!0,style:{marginTop:`16px`},children:`Reset Filters`})})},y={args:{id:`empty-bets`,title:`No bet history`,description:`Your settled bets will appear here once they're resolved.`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "empty-default",
    title: "No bets yet",
    description: "Place your first bet to see it here."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState id="empty-action" title="No results" description="Try adjusting your filters or search terms.">
      <Button id="reset-btn" variant="outline" autoWidth style={{
      marginTop: "16px"
    }}>Reset Filters</Button>
    </EmptyState>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "empty-bets",
    title: "No bet history",
    description: "Your settled bets will appear here once they're resolved."
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithAction`,`NoBetsHistory`]}))();export{_ as Default,y as NoBetsHistory,v as WithAction,b as __namedExportsOrder,g as default};