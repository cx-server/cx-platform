import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-iU2omdTy.js";function a(e){let t=(0,o.useMemo)(()=>`(min-width: ${e})`,[e]);return(0,o.useSyncExternalStore)((0,o.useCallback)(e=>{if(typeof window>`u`)return()=>!1;let n=window.matchMedia(t);return n.addEventListener(`change`,e),()=>{n.removeEventListener(`change`,e)}},[t]),(0,o.useCallback)(()=>typeof window<`u`&&window.matchMedia(t).matches,[t]),(0,o.useCallback)(()=>!1,[]))}var o,s,c=t((()=>{o=n(r(),1),s={sm:`640px`,md:`768px`,lg:`1200px`,xl:`1280px`,"2xl":`1440px`}}));function l({children:e,className:t,hoverable:n=!1,clickable:r,itemsBorder:i,listSize:o=`sm`,showChain:c,...l}){let d=a(s.lg);return(0,u.jsx)(`ul`,{className:`list ${`${n||d?`hoverable`:``} ${r?`clickable`:``} ${i?`borderlist`:``} ${c?`chained`:``} ${o}`} ${t??``}`,...l,children:e})}var u,d=t((()=>{u=i(),c()})),f=t((()=>{i()})),p=t((()=>{i(),r(),f()})),m=t((()=>{i(),f()})),h=t((()=>{d(),p(),m()})),g=e({Clickable:()=>b,Default:()=>y,Sizes:()=>x,__namedExportsOrder:()=>S,default:()=>v}),_,v,y,b,x,S,C=t((()=>{h(),_=i(),v={title:`Components/List`,component:l,tags:[],argTypes:{listSize:{control:`select`,options:[`xs`,`sm`,`md`,`lg`]},hoverable:{control:`boolean`},clickable:{control:`boolean`},itemsBorder:{control:`boolean`}},args:{id:`list-demo`,listSize:`sm`,hoverable:!1,clickable:!1,itemsBorder:!0},decorators:[e=>(0,_.jsx)(`div`,{style:{maxWidth:`360px`},children:(0,_.jsx)(e,{})})]},y={render:e=>(0,_.jsxs)(l,{...e,children:[(0,_.jsx)(`li`,{children:`Account Settings`}),(0,_.jsx)(`li`,{children:`Payment Methods`}),(0,_.jsx)(`li`,{children:`Notifications`}),(0,_.jsx)(`li`,{children:`Help & Support`})]})},b={render:()=>(0,_.jsxs)(l,{id:`list-clickable`,clickable:!0,itemsBorder:!0,listSize:`md`,children:[(0,_.jsx)(`li`,{children:`Deposit`}),(0,_.jsx)(`li`,{children:`Withdrawal`}),(0,_.jsx)(`li`,{children:`Transaction History`})]})},x={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`xs`}),(0,_.jsxs)(l,{id:`l-xs`,listSize:`xs`,itemsBorder:!0,children:[(0,_.jsx)(`li`,{children:`Item 1`}),(0,_.jsx)(`li`,{children:`Item 2`})]})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`sm`}),(0,_.jsxs)(l,{id:`l-sm`,listSize:`sm`,itemsBorder:!0,children:[(0,_.jsx)(`li`,{children:`Item 1`}),(0,_.jsx)(`li`,{children:`Item 2`})]})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`md`}),(0,_.jsxs)(l,{id:`l-md`,listSize:`md`,itemsBorder:!0,children:[(0,_.jsx)(`li`,{children:`Item 1`}),(0,_.jsx)(`li`,{children:`Item 2`})]})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`lg`}),(0,_.jsxs)(l,{id:`l-lg`,listSize:`lg`,itemsBorder:!0,children:[(0,_.jsx)(`li`,{children:`Item 1`}),(0,_.jsx)(`li`,{children:`Item 2`})]})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <li>Account Settings</li>
      <li>Payment Methods</li>
      <li>Notifications</li>
      <li>Help & Support</li>
    </List>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <List id="list-clickable" clickable itemsBorder listSize="md">
      <li>Deposit</li>
      <li>Withdrawal</li>
      <li>Transaction History</li>
    </List>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Clickable`,`Sizes`]}));C();export{b as Clickable,y as Default,x as Sizes,S as __namedExportsOrder,v as default,C as n,g as t};