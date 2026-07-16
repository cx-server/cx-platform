import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-iU2omdTy.js";var a,o,s,c=t((()=>{a=i(),o=n(r(),1),s=({progressPercentage:e,className:t=`bg-border-subtile rounded-md`,barClassName:n=`h-1.5 rounded-full bg-gradient-to-r from-highlight to-primary`})=>{let r=o.useRef(null),[i,s]=o.useState(0);return o.useEffect(()=>{r.current?.clientWidth&&s(e*r.current.clientWidth/100)},[e]),(0,a.jsx)(`div`,{className:t,ref:r,children:(0,a.jsx)(`div`,{className:n,style:{width:i},role:`progressbar`,"aria-label":`progress bar`})})}})),l=t((()=>{c()})),u=e({Default:()=>p,Empty:()=>m,Full:()=>g,Half:()=>h,Steps:()=>_,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v,y=t((()=>{l(),d=i(),f={title:`Components/ProgressBar`,component:s,tags:[],argTypes:{progressPercentage:{control:{type:`range`,min:0,max:100,step:1}}},args:{progressPercentage:65},decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:`320px`,padding:`20px`},children:(0,d.jsx)(e,{})})]},p={args:{progressPercentage:65}},m={args:{progressPercentage:0}},h={args:{progressPercentage:50}},g={args:{progressPercentage:100}},_={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`text-xs text-subtile`,children:`25%`}),(0,d.jsx)(s,{progressPercentage:25})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`text-xs text-subtile`,children:`50%`}),(0,d.jsx)(s,{progressPercentage:50})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`text-xs text-subtile`,children:`75%`}),(0,d.jsx)(s,{progressPercentage:75})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`text-xs text-subtile`,children:`100%`}),(0,d.jsx)(s,{progressPercentage:100})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    progressPercentage: 65
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    progressPercentage: 0
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    progressPercentage: 50
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    progressPercentage: 100
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div><span className="text-xs text-subtile">25%</span><ProgressBar progressPercentage={25} /></div>
      <div><span className="text-xs text-subtile">50%</span><ProgressBar progressPercentage={50} /></div>
      <div><span className="text-xs text-subtile">75%</span><ProgressBar progressPercentage={75} /></div>
      <div><span className="text-xs text-subtile">100%</span><ProgressBar progressPercentage={100} /></div>
    </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Empty`,`Half`,`Full`,`Steps`]}));y();export{p as Default,m as Empty,g as Full,h as Half,_ as Steps,v as __namedExportsOrder,f as default,y as n,u as t};