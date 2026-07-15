import{i as e}from"./preload-helper-BdFrVu1K.js";import{P as t,t as n}from"./iframe-Cd-Mih9Z.js";function r({children:e,className:t,hoverable:n=!1,clickable:r,itemsBorder:a,listSize:o=`sm`,showChain:s,...c}){return(0,i.jsx)(`ul`,{className:`list ${`${n?`hoverable`:``} ${r?`clickable`:``} ${a?`borderlist`:``} ${s?`chained`:``} ${o}`} ${t??``}`,...c,children:e})}var i,a=e((()=>{i=n()})),o=e((()=>{n()})),s=e((()=>{n(),t(),o()})),c=e((()=>{n(),o()})),l=e((()=>{a(),s(),c()})),u,d,f,p,m,h;e((()=>{l(),u=n(),d={title:`Components/List`,component:r,tags:[],argTypes:{listSize:{control:`select`,options:[`xs`,`sm`,`md`,`lg`]},hoverable:{control:`boolean`},clickable:{control:`boolean`},itemsBorder:{control:`boolean`}},args:{id:`list-demo`,listSize:`sm`,hoverable:!1,clickable:!1,itemsBorder:!0},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:`360px`},children:(0,u.jsx)(e,{})})]},f={render:e=>(0,u.jsxs)(r,{...e,children:[(0,u.jsx)(`li`,{children:`Account Settings`}),(0,u.jsx)(`li`,{children:`Payment Methods`}),(0,u.jsx)(`li`,{children:`Notifications`}),(0,u.jsx)(`li`,{children:`Help & Support`})]})},p={render:()=>(0,u.jsxs)(r,{id:`list-clickable`,clickable:!0,itemsBorder:!0,listSize:`md`,children:[(0,u.jsx)(`li`,{children:`Deposit`}),(0,u.jsx)(`li`,{children:`Withdrawal`}),(0,u.jsx)(`li`,{children:`Transaction History`})]})},m={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`xs`}),(0,u.jsxs)(r,{id:`l-xs`,listSize:`xs`,itemsBorder:!0,children:[(0,u.jsx)(`li`,{children:`Item 1`}),(0,u.jsx)(`li`,{children:`Item 2`})]})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`sm`}),(0,u.jsxs)(r,{id:`l-sm`,listSize:`sm`,itemsBorder:!0,children:[(0,u.jsx)(`li`,{children:`Item 1`}),(0,u.jsx)(`li`,{children:`Item 2`})]})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`md`}),(0,u.jsxs)(r,{id:`l-md`,listSize:`md`,itemsBorder:!0,children:[(0,u.jsx)(`li`,{children:`Item 1`}),(0,u.jsx)(`li`,{children:`Item 2`})]})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`lg`}),(0,u.jsxs)(r,{id:`l-lg`,listSize:`lg`,itemsBorder:!0,children:[(0,u.jsx)(`li`,{children:`Item 1`}),(0,u.jsx)(`li`,{children:`Item 2`})]})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <li>Account Settings</li>
      <li>Payment Methods</li>
      <li>Notifications</li>
      <li>Help & Support</li>
    </List>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <List id="list-clickable" clickable itemsBorder listSize="md">
      <li>Deposit</li>
      <li>Withdrawal</li>
      <li>Transaction History</li>
    </List>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Clickable`,`Sizes`]}))();export{p as Clickable,f as Default,m as Sizes,h as __namedExportsOrder,d as default};