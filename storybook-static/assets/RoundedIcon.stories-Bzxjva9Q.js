import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-iU2omdTy.js";function i({id:e,className:t,children:n,...r}){let i=(0,o.cloneElement)(n,{className:`icon-md`});return(0,a.jsx)(`div`,{className:`w-8 h-8 rounded-full border border-standard border-opacity-15 flex items-center justify-center text-standard ${t??``}`,id:e,"data-testid":e,...r,children:i})}var a,o,s=e((()=>{a=r(),o=t(n(),1)})),c=e((()=>{s()}));function l(){return(0,f.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,f.jsx)(`polyline`,{points:`9 18 15 12 9 6`})})}function u(){return(0,f.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`currentColor`,children:[(0,f.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`}),(0,f.jsx)(`line`,{x1:`12`,y1:`16`,x2:`12`,y2:`12`,stroke:`currentColor`,strokeWidth:`2`}),(0,f.jsx)(`circle`,{cx:`12`,cy:`8`,r:`1`})]})}function d(){return(0,f.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,f.jsx)(`polyline`,{points:`5 12 10 17 19 7`})})}var f,p,m,h,g,_;e((()=>{c(),f=r(),p={title:`Components/RoundedIcon`,component:i,tags:[],parameters:{docs:{description:{component:`Icon wrapped in a circular border container. Used for list item leading icons and action indicators.`}}}},m={render:()=>(0,f.jsx)(i,{id:`rounded-icon-default`,children:(0,f.jsx)(l,{})})},h={render:()=>(0,f.jsx)(i,{id:`rounded-icon-info`,children:(0,f.jsx)(u,{})})},g={render:()=>(0,f.jsxs)(`div`,{className:`flex gap-3`,children:[(0,f.jsx)(i,{id:`ri-1`,children:(0,f.jsx)(l,{})}),(0,f.jsx)(i,{id:`ri-2`,children:(0,f.jsx)(u,{})}),(0,f.jsx)(i,{id:`ri-3`,children:(0,f.jsx)(d,{})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <RoundedIcon id="rounded-icon-default">
      <ChevronRight />
    </RoundedIcon>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <RoundedIcon id="rounded-icon-info">
      <InfoIcon />
    </RoundedIcon>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3">
      <RoundedIcon id="ri-1"><ChevronRight /></RoundedIcon>
      <RoundedIcon id="ri-2"><InfoIcon /></RoundedIcon>
      <RoundedIcon id="ri-3"><CheckIcon /></RoundedIcon>
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Info`,`Multiple`]}))();export{m as Default,h as Info,g as Multiple,_ as __namedExportsOrder,p as default};