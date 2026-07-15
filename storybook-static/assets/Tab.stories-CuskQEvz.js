import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-CzdaheLX.js";function a({children:e,id:t,className:n,selected:r=!1,disabled:i=!1,badge:a,badgeMinWidth:l,icon:u,...d}){let f=r?`tab-selected`:``,p=i?`tab-disabled`:``,m=u?(0,s.cloneElement)(u,{className:`tab-icon`}):null,h=a!==void 0||l!==void 0,g=m!==null,_=l?c[l]:``;return(0,o.jsxs)(`button`,{id:t,"data-testid":t,role:`tab`,"aria-selected":r,className:`tab ${f} ${p} ${n??``}`,...d,children:[m,(0,o.jsxs)(`div`,{className:`tab-container`,children:[e&&(0,o.jsx)(`span`,{className:`tab-content`,children:e}),h&&(0,o.jsx)(`sup`,{id:`${t}-badge`,"data-testid":`${t}-badge`,className:`flex text-[10px] ml-1 font-normal ${_} ${g?`tab-badge-with-icon`:``}`,children:a??``})]})]})}var o,s,c,l=t((()=>{o=i(),s=n(r(),1),c={sm:`min-w-2`,md:`min-w-3`,lg:`min-w-4`}})),u=t((()=>{i()})),d=t((()=>{l(),u()})),f=e({Default:()=>g,Disabled:()=>y,Selected:()=>_,TabGroup:()=>b,WithBadge:()=>v,WithBadges:()=>x,__namedExportsOrder:()=>S,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C=t((()=>{p=n(r(),1),d(),m=i(),h={title:`Components/Tab`,component:a,tags:[],args:{id:`tab-demo`,children:`Tab`,selected:!1}},g={args:{id:`tab-default`,children:`Sports`}},_={args:{id:`tab-selected`,children:`Casino`,selected:!0}},v={args:{id:`tab-badge`,children:`Bets`,badge:`3`,selected:!0}},y={args:{id:`tab-disabled`,children:`Promotions`,disabled:!0}},b={render:function(){let[e,t]=(0,p.useState)(0);return(0,m.jsx)(`div`,{style:{display:`flex`,gap:`0`},role:`tablist`,children:[`All`,`Live`,`Today`,`Tomorrow`].map((n,r)=>(0,m.jsx)(a,{id:`tab-${r}`,selected:e===r,onClick:()=>t(r),children:n},n))})}},x={render:function(){let[e,t]=(0,p.useState)(0);return(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`0`},role:`tablist`,children:[(0,m.jsx)(a,{id:`t-open`,selected:e===0,badge:`12`,onClick:()=>t(0),children:`Open`}),(0,m.jsx)(a,{id:`t-settled`,selected:e===1,badge:`48`,onClick:()=>t(1),children:`Settled`}),(0,m.jsx)(a,{id:`t-cashout`,selected:e===2,badge:`3`,onClick:()=>t(2),children:`Cashout`})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "tab-default",
    children: "Sports"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "tab-selected",
    children: "Casino",
    selected: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "tab-badge",
    children: "Bets",
    badge: "3",
    selected: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "tab-disabled",
    children: "Promotions",
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function TabGroupDemo() {
    const [active, setActive] = useState(0);
    const tabs = ["All", "Live", "Today", "Tomorrow"];
    return <div style={{
      display: "flex",
      gap: "0"
    }} role="tablist">
        {tabs.map((label, i) => <Tab key={label} id={\`tab-\${i}\`} selected={active === i} onClick={() => setActive(i)}>
            {label}
          </Tab>)}
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function BadgeDemo() {
    const [active, setActive] = useState(0);
    return <div style={{
      display: "flex",
      gap: "0"
    }} role="tablist">
        <Tab id="t-open" selected={active === 0} badge="12" onClick={() => setActive(0)}>Open</Tab>
        <Tab id="t-settled" selected={active === 1} badge="48" onClick={() => setActive(1)}>Settled</Tab>
        <Tab id="t-cashout" selected={active === 2} badge="3" onClick={() => setActive(2)}>Cashout</Tab>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Selected`,`WithBadge`,`Disabled`,`TabGroup`,`WithBadges`]}));C();export{g as Default,y as Disabled,_ as Selected,b as TabGroup,v as WithBadge,x as WithBadges,S as __namedExportsOrder,h as default,C as n,f as t};