import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-Cd-Mih9Z.js";var i,a,o,s=e((()=>{i=r(),a=t(n(),1),o=({progressPercentage:e,className:t=`bg-border-subtile rounded-md`,barClassName:n=`h-1.5 rounded-full bg-gradient-to-r from-highlight to-primary`})=>{let r=a.useRef(null),[o,s]=a.useState(0);return a.useEffect(()=>{r.current?.clientWidth&&s(e*r.current.clientWidth/100)},[e]),(0,i.jsx)(`div`,{className:t,ref:r,children:(0,i.jsx)(`div`,{className:n,style:{width:o},role:`progressbar`,"aria-label":`progress bar`})})}})),c=e((()=>{s()})),l,u,d,f,p,m,h,g;e((()=>{c(),l=r(),u={title:`Components/ProgressBar`,component:o,tags:[],argTypes:{progressPercentage:{control:{type:`range`,min:0,max:100,step:1}}},args:{progressPercentage:65},decorators:[e=>(0,l.jsx)(`div`,{style:{maxWidth:`320px`,padding:`20px`},children:(0,l.jsx)(e,{})})]},d={args:{progressPercentage:65}},f={args:{progressPercentage:0}},p={args:{progressPercentage:50}},m={args:{progressPercentage:100}},h={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`text-xs text-subtile`,children:`25%`}),(0,l.jsx)(o,{progressPercentage:25})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`text-xs text-subtile`,children:`50%`}),(0,l.jsx)(o,{progressPercentage:50})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`text-xs text-subtile`,children:`75%`}),(0,l.jsx)(o,{progressPercentage:75})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`text-xs text-subtile`,children:`100%`}),(0,l.jsx)(o,{progressPercentage:100})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    progressPercentage: 65
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    progressPercentage: 0
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    progressPercentage: 50
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    progressPercentage: 100
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Empty`,`Half`,`Full`,`Steps`]}))();export{d as Default,f as Empty,m as Full,p as Half,h as Steps,g as __namedExportsOrder,u as default};