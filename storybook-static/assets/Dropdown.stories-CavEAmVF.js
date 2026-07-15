import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-CME29FwW.js";function r({id:e,children:t,className:n,...r}){return(0,i.jsx)(`select`,{id:e,"data-testid":e,className:`dropdown-select${n?` ${n}`:``} `,...r,children:t})}var i,a=t((()=>{i=n()})),o=t((()=>{})),s=t((()=>{n(),o()})),c=t((()=>{n()})),l=t((()=>{n()})),u=t((()=>{a(),s(),c(),l()})),d=e({Default:()=>m,Disabled:()=>g,WithSelection:()=>h,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=t((()=>{u(),f=n(),p={title:`Components/Dropdown`,component:r,tags:[],args:{id:`dropdown-demo`},decorators:[e=>(0,f.jsx)(`div`,{style:{maxWidth:`280px`},children:(0,f.jsx)(e,{})})]},m={render:()=>(0,f.jsxs)(r,{id:`dd-default`,children:[(0,f.jsx)(`option`,{value:``,children:`Select an option`}),(0,f.jsx)(`option`,{value:`1`,children:`Germany`}),(0,f.jsx)(`option`,{value:`2`,children:`Austria`}),(0,f.jsx)(`option`,{value:`3`,children:`Switzerland`})]})},h={render:()=>(0,f.jsxs)(r,{id:`dd-selected`,defaultValue:`2`,children:[(0,f.jsx)(`option`,{value:`1`,children:`Daily`}),(0,f.jsx)(`option`,{value:`2`,children:`Weekly`}),(0,f.jsx)(`option`,{value:`3`,children:`Monthly`})]})},g={render:()=>(0,f.jsx)(r,{id:`dd-disabled`,disabled:!0,children:(0,f.jsx)(`option`,{children:`Locked option`})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown id="dd-default">
      <option value="">Select an option</option>
      <option value="1">Germany</option>
      <option value="2">Austria</option>
      <option value="3">Switzerland</option>
    </Dropdown>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown id="dd-selected" defaultValue="2">
      <option value="1">Daily</option>
      <option value="2">Weekly</option>
      <option value="3">Monthly</option>
    </Dropdown>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown id="dd-disabled" disabled>
      <option>Locked option</option>
    </Dropdown>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithSelection`,`Disabled`]}));v();export{m as Default,g as Disabled,h as WithSelection,_ as __namedExportsOrder,p as default,v as n,d as t};