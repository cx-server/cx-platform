import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Cd-Mih9Z.js";function n({id:e,children:t,className:n,...i}){return(0,r.jsx)(`select`,{id:e,"data-testid":e,className:`dropdown-select${n?` ${n}`:``} `,...i,children:t})}var r,i=e((()=>{r=t()})),a=e((()=>{})),o=e((()=>{t(),a()})),s=e((()=>{t()})),c=e((()=>{t()})),l=e((()=>{i(),o(),s(),c()})),u,d,f,p,m,h;e((()=>{l(),u=t(),d={title:`Components/Dropdown`,component:n,tags:[],args:{id:`dropdown-demo`},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:`280px`},children:(0,u.jsx)(e,{})})]},f={render:()=>(0,u.jsxs)(n,{id:`dd-default`,children:[(0,u.jsx)(`option`,{value:``,children:`Select an option`}),(0,u.jsx)(`option`,{value:`1`,children:`Germany`}),(0,u.jsx)(`option`,{value:`2`,children:`Austria`}),(0,u.jsx)(`option`,{value:`3`,children:`Switzerland`})]})},p={render:()=>(0,u.jsxs)(n,{id:`dd-selected`,defaultValue:`2`,children:[(0,u.jsx)(`option`,{value:`1`,children:`Daily`}),(0,u.jsx)(`option`,{value:`2`,children:`Weekly`}),(0,u.jsx)(`option`,{value:`3`,children:`Monthly`})]})},m={render:()=>(0,u.jsx)(n,{id:`dd-disabled`,disabled:!0,children:(0,u.jsx)(`option`,{children:`Locked option`})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown id="dd-default">
      <option value="">Select an option</option>
      <option value="1">Germany</option>
      <option value="2">Austria</option>
      <option value="3">Switzerland</option>
    </Dropdown>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown id="dd-selected" defaultValue="2">
      <option value="1">Daily</option>
      <option value="2">Weekly</option>
      <option value="3">Monthly</option>
    </Dropdown>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown id="dd-disabled" disabled>
      <option>Locked option</option>
    </Dropdown>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithSelection`,`Disabled`]}))();export{f as Default,m as Disabled,p as WithSelection,h as __namedExportsOrder,d as default};