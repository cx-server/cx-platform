import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-CIzVDn8r.js";function a({children:e,id:t,className:n,selected:r=!1,disabled:i=!1,badge:a,badgeMinWidth:l,icon:u,...d}){let f=r?`tab-selected`:``,p=i?`tab-disabled`:``,m=u?(0,s.cloneElement)(u,{className:`tab-icon`}):null,h=a!==void 0||l!==void 0,g=m!==null,_=l?c[l]:``;return(0,o.jsxs)(`button`,{id:t,"data-testid":t,role:`tab`,"aria-selected":r,className:`tab ${f} ${p} ${n??``}`,...d,children:[m,(0,o.jsxs)(`div`,{className:`tab-container`,children:[e&&(0,o.jsx)(`span`,{className:`tab-content`,children:e}),h&&(0,o.jsx)(`sup`,{id:`${t}-badge`,"data-testid":`${t}-badge`,className:`flex text-[10px] ml-1 font-normal ${_} ${g?`tab-badge-with-icon`:``}`,children:a??``})]})]})}var o,s,c,l=t((()=>{o=i(),s=n(r(),1),c={sm:`min-w-2`,md:`min-w-3`,lg:`min-w-4`}}));function u({children:e,id:t,className:n,variant:r=`default`,size:i=`md`,itemsFill:a,theme:o=`default`,hideBars:s,...c}){let l=a?`tab-fill`:``,u=s?`hide-bars`:``;return(0,d.jsx)(`div`,{id:t,"data-testid":t,role:`tablist`,className:`${p[r]} ${f[o]} tab-${i} ${l} ${u} ${n??``}`,...c,children:e})}var d,f,p,m=t((()=>{d=i(),f={default:`default`,white:`white`},p={default:`tab-menu`,tabbars:`tabbars`,iconbar:`iconbar`}})),h=t((()=>{l(),m()})),g=e({Default:()=>b,Disabled:()=>C,Selected:()=>x,SmallSize:()=>E,TabGroup:()=>w,Tabbars:()=>D,WithBadge:()=>S,WithBadges:()=>T,__namedExportsOrder:()=>O,default:()=>y}),_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{_=n(r(),1),h(),v=i(),y={title:`Components/Tab`,component:a,tags:[],args:{id:`tab-demo`,children:`Tab`,selected:!1},decorators:[e=>(0,v.jsx)(u,{id:`tab-menu-decorator`,children:(0,v.jsx)(e,{})})]},b={args:{id:`tab-default`,children:`Sports`,selected:!0}},x={args:{id:`tab-selected`,children:`Casino`,selected:!0}},S={args:{id:`tab-badge`,children:`Bets`,badge:`3`,selected:!0}},C={args:{id:`tab-disabled`,children:`Promotions`,disabled:!0}},w={decorators:[],render:function(){let[e,t]=(0,_.useState)(0);return(0,v.jsx)(u,{id:`tab-group-demo`,children:[`All`,`Live`,`Today`,`Tomorrow`].map((n,r)=>(0,v.jsx)(a,{id:`tab-${r}`,selected:e===r,onClick:()=>t(r),children:n},n))})}},T={decorators:[],render:function(){let[e,t]=(0,_.useState)(0);return(0,v.jsxs)(u,{id:`tab-badges-demo`,children:[(0,v.jsx)(a,{id:`t-open`,selected:e===0,badge:`12`,onClick:()=>t(0),children:`Open`}),(0,v.jsx)(a,{id:`t-settled`,selected:e===1,badge:`48`,onClick:()=>t(1),children:`Settled`}),(0,v.jsx)(a,{id:`t-cashout`,selected:e===2,badge:`3`,onClick:()=>t(2),children:`Cashout`})]})}},E={decorators:[],render:function(){let[e,t]=(0,_.useState)(0);return(0,v.jsx)(u,{id:`tab-sm-demo`,size:`sm`,children:[`Sports`,`Casino`,`Live`].map((n,r)=>(0,v.jsx)(a,{id:`tab-sm-${r}`,selected:e===r,onClick:()=>t(r),children:n},n))})}},D={decorators:[],render:function(){let[e,t]=(0,_.useState)(0);return(0,v.jsx)(u,{id:`tab-bars-demo`,variant:`tabbars`,children:[`All`,`Kombi`,`System`,`Single`].map((n,r)=>(0,v.jsx)(a,{id:`tabbar-${r}`,selected:e===r,onClick:()=>t(r),children:n},n))})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "tab-default",
    children: "Sports",
    selected: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "tab-selected",
    children: "Casino",
    selected: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "tab-badge",
    children: "Bets",
    badge: "3",
    selected: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: "tab-disabled",
    children: "Promotions",
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  decorators: [],
  // Remove the default TabMenu decorator — we provide our own
  render: function TabGroupDemo() {
    const [active, setActive] = useState(0);
    const tabs = ["All", "Live", "Today", "Tomorrow"];
    return <TabMenu id="tab-group-demo">
        {tabs.map((label, i) => <Tab key={label} id={\`tab-\${i}\`} selected={active === i} onClick={() => setActive(i)}>
            {label}
          </Tab>)}
      </TabMenu>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: function BadgeDemo() {
    const [active, setActive] = useState(0);
    return <TabMenu id="tab-badges-demo">
        <Tab id="t-open" selected={active === 0} badge="12" onClick={() => setActive(0)}>Open</Tab>
        <Tab id="t-settled" selected={active === 1} badge="48" onClick={() => setActive(1)}>Settled</Tab>
        <Tab id="t-cashout" selected={active === 2} badge="3" onClick={() => setActive(2)}>Cashout</Tab>
      </TabMenu>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: function SmallDemo() {
    const [active, setActive] = useState(0);
    const tabs = ["Sports", "Casino", "Live"];
    return <TabMenu id="tab-sm-demo" size="sm">
        {tabs.map((label, i) => <Tab key={label} id={\`tab-sm-\${i}\`} selected={active === i} onClick={() => setActive(i)}>
            {label}
          </Tab>)}
      </TabMenu>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: function TabbarsDemo() {
    const [active, setActive] = useState(0);
    const tabs = ["All", "Kombi", "System", "Single"];
    return <TabMenu id="tab-bars-demo" variant="tabbars">
        {tabs.map((label, i) => <Tab key={label} id={\`tabbar-\${i}\`} selected={active === i} onClick={() => setActive(i)}>
            {label}
          </Tab>)}
      </TabMenu>;
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Selected`,`WithBadge`,`Disabled`,`TabGroup`,`WithBadges`,`SmallSize`,`Tabbars`]}));k();export{b as Default,C as Disabled,x as Selected,E as SmallSize,w as TabGroup,D as Tabbars,S as WithBadge,T as WithBadges,O as __namedExportsOrder,y as default,k as n,g as t};