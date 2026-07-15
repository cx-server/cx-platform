import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-CRUx604k.js";function i({children:e,className:t,hoverable:n=!1,clickable:r,itemsBorder:i,listSize:o=`sm`,showChain:s,...c}){return(0,a.jsx)(`ul`,{className:`list ${`${n?`hoverable`:``} ${r?`clickable`:``} ${i?`borderlist`:``} ${s?`chained`:``} ${o}`} ${t??``}`,...c,children:e})}var a,o=t((()=>{a=r()})),s=t((()=>{r()})),c=t((()=>{r(),n(),s()})),l=t((()=>{r(),s()})),u=t((()=>{o(),c(),l()})),d=e({Clickable:()=>h,Default:()=>m,Sizes:()=>g,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=t((()=>{u(),f=r(),p={title:`Components/List`,component:i,tags:[],argTypes:{listSize:{control:`select`,options:[`xs`,`sm`,`md`,`lg`]},hoverable:{control:`boolean`},clickable:{control:`boolean`},itemsBorder:{control:`boolean`}},args:{id:`list-demo`,listSize:`sm`,hoverable:!1,clickable:!1,itemsBorder:!0},decorators:[e=>(0,f.jsx)(`div`,{style:{maxWidth:`360px`},children:(0,f.jsx)(e,{})})]},m={render:e=>(0,f.jsxs)(i,{...e,children:[(0,f.jsx)(`li`,{children:`Account Settings`}),(0,f.jsx)(`li`,{children:`Payment Methods`}),(0,f.jsx)(`li`,{children:`Notifications`}),(0,f.jsx)(`li`,{children:`Help & Support`})]})},h={render:()=>(0,f.jsxs)(i,{id:`list-clickable`,clickable:!0,itemsBorder:!0,listSize:`md`,children:[(0,f.jsx)(`li`,{children:`Deposit`}),(0,f.jsx)(`li`,{children:`Withdrawal`}),(0,f.jsx)(`li`,{children:`Transaction History`})]})},g={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`xs`}),(0,f.jsxs)(i,{id:`l-xs`,listSize:`xs`,itemsBorder:!0,children:[(0,f.jsx)(`li`,{children:`Item 1`}),(0,f.jsx)(`li`,{children:`Item 2`})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`sm`}),(0,f.jsxs)(i,{id:`l-sm`,listSize:`sm`,itemsBorder:!0,children:[(0,f.jsx)(`li`,{children:`Item 1`}),(0,f.jsx)(`li`,{children:`Item 2`})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`md`}),(0,f.jsxs)(i,{id:`l-md`,listSize:`md`,itemsBorder:!0,children:[(0,f.jsx)(`li`,{children:`Item 1`}),(0,f.jsx)(`li`,{children:`Item 2`})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`lg`}),(0,f.jsxs)(i,{id:`l-lg`,listSize:`lg`,itemsBorder:!0,children:[(0,f.jsx)(`li`,{children:`Item 1`}),(0,f.jsx)(`li`,{children:`Item 2`})]})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <li>Account Settings</li>
      <li>Payment Methods</li>
      <li>Notifications</li>
      <li>Help & Support</li>
    </List>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <List id="list-clickable" clickable itemsBorder listSize="md">
      <li>Deposit</li>
      <li>Withdrawal</li>
      <li>Transaction History</li>
    </List>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <div><p className="text-subtile text-xs mb-2">xs</p><List id="l-xs" listSize="xs" itemsBorder><li>Item 1</li><li>Item 2</li></List></div>
      <div><p className="text-subtile text-xs mb-2">sm</p><List id="l-sm" listSize="sm" itemsBorder><li>Item 1</li><li>Item 2</li></List></div>
      <div><p className="text-subtile text-xs mb-2">md</p><List id="l-md" listSize="md" itemsBorder><li>Item 1</li><li>Item 2</li></List></div>
      <div><p className="text-subtile text-xs mb-2">lg</p><List id="l-lg" listSize="lg" itemsBorder><li>Item 1</li><li>Item 2</li></List></div>
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Clickable`,`Sizes`]}));v();export{h as Clickable,m as Default,g as Sizes,_ as __namedExportsOrder,p as default,v as n,d as t};