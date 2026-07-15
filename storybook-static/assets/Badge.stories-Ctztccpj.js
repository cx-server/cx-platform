import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CzdaheLX.js";function n({id:e,animate:t,children:n,className:i,renderSupTag:a=!0,...o}){let s=`badge ${t?`animate-jump-in`:``} ${i??``}`;return a?(0,r.jsx)(`sup`,{id:e,"data-testid":e,className:s,...o,children:n}):(0,r.jsx)(`div`,{id:e,"data-testid":e,className:s,...o,children:n})}var r,i=e((()=>{r=t()})),a=e((()=>{i()})),o,s,c,l,u,d,f;e((()=>{a(),o=t(),s={title:`Components/Badge`,component:n,tags:[],argTypes:{animate:{control:`boolean`}},args:{id:`badge-demo`,animate:!1}},c={args:{id:`badge-default`,children:`3`}},l={args:{id:`badge-animated`,children:`1`,animate:!0}},u={args:{id:`badge-large`,children:`99+`}},d={render:()=>(0,o.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`},children:[(0,o.jsx)(`button`,{className:`btn btn-primary h-10 py-2 text-sm w-fit px-3 gap-2 min-w-20`,children:`Notifications`}),(0,o.jsx)(n,{id:`badge-on-btn`,className:`absolute -top-1 -right-1`,children:`5`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "badge-default",
    children: "3"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "badge-animated",
    children: "1",
    animate: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "badge-large",
    children: "99+"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: "relative",
    display: "inline-block"
  }}>
      <button className="btn btn-primary h-10 py-2 text-sm w-fit px-3 gap-2 min-w-20">Notifications</button>
      <Badge id="badge-on-btn" className="absolute -top-1 -right-1">5</Badge>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Animated`,`LargeNumber`,`OnButton`]}))();export{l as Animated,c as Default,u as LargeNumber,d as OnButton,f as __namedExportsOrder,s as default};