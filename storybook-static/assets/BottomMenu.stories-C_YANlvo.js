import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-iU2omdTy.js";function i({children:e,safeBottom:t,className:n,...r}){return(0,a.jsx)(`nav`,{className:`bottom-menu ${t?`pb-safe-bottom`:``} ${n??``}`,...r,children:e})}var a,o=e((()=>{a=r()}));function s({children:e,id:t,className:n,iconComponent:r,selected:i=!1,iconClass:a=``,...o}){let s=r?(0,l.cloneElement)(r,{className:`bottom-menu-item-icon ${a}`}):null;return(0,c.jsxs)(`div`,{id:t,"data-testid":t,"aria-selected":i,className:`bottom-menu-item ${i?`selected`:``} ${n??``}`,...o,children:[s,e]})}var c,l,u=e((()=>{c=r(),l=t(n(),1)})),d=e((()=>{o(),u()}));function f(){return(0,h.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`currentColor`,children:(0,h.jsx)(`path`,{d:`M10 2L2 9h3v7h4v-5h2v5h4V9h3L10 2z`})})}function p(){return(0,h.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`currentColor`,children:[(0,h.jsx)(`circle`,{cx:`8`,cy:`8`,r:`5`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`}),(0,h.jsx)(`line`,{x1:`12`,y1:`12`,x2:`17`,y2:`17`,stroke:`currentColor`,strokeWidth:`2`})]})}function m(){return(0,h.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`currentColor`,children:[(0,h.jsx)(`circle`,{cx:`10`,cy:`6`,r:`4`}),(0,h.jsx)(`path`,{d:`M3 18c0-4 3-6 7-6s7 2 7 6`})]})}var h,g,_,v,y;e((()=>{d(),h=r(),g={title:`Components/BottomMenu`,component:i,tags:[],parameters:{docs:{description:{component:`Bottom navigation bar with selectable menu items. Used for primary app navigation.`}}}},_={render:()=>(0,h.jsxs)(i,{children:[(0,h.jsx)(s,{id:`home`,iconComponent:(0,h.jsx)(f,{}),selected:!0,children:(0,h.jsx)(`span`,{className:`text-xs`,children:`Home`})}),(0,h.jsx)(s,{id:`search`,iconComponent:(0,h.jsx)(p,{}),children:(0,h.jsx)(`span`,{className:`text-xs`,children:`Search`})}),(0,h.jsx)(s,{id:`profile`,iconComponent:(0,h.jsx)(m,{}),children:(0,h.jsx)(`span`,{className:`text-xs`,children:`Profile`})})]})},v={render:()=>(0,h.jsxs)(i,{children:[(0,h.jsx)(s,{id:`home`,iconComponent:(0,h.jsx)(f,{}),selected:!0,children:(0,h.jsx)(`span`,{className:`text-xs`,children:`Home`})}),(0,h.jsx)(s,{id:`search`,iconComponent:(0,h.jsx)(p,{}),children:(0,h.jsx)(`span`,{className:`text-xs`,children:`Search`})}),(0,h.jsx)(s,{id:`favorites`,iconComponent:(0,h.jsx)(f,{}),children:(0,h.jsx)(`span`,{className:`text-xs`,children:`Favorites`})}),(0,h.jsx)(s,{id:`profile`,iconComponent:(0,h.jsx)(m,{}),children:(0,h.jsx)(`span`,{className:`text-xs`,children:`Profile`})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <BottomMenu>
      <BottomMenuItem id="home" iconComponent={<HomeIcon />} selected>
        <span className="text-xs">Home</span>
      </BottomMenuItem>
      <BottomMenuItem id="search" iconComponent={<SearchIcon />}>
        <span className="text-xs">Search</span>
      </BottomMenuItem>
      <BottomMenuItem id="profile" iconComponent={<UserIcon />}>
        <span className="text-xs">Profile</span>
      </BottomMenuItem>
    </BottomMenu>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <BottomMenu>
      <BottomMenuItem id="home" iconComponent={<HomeIcon />} selected>
        <span className="text-xs">Home</span>
      </BottomMenuItem>
      <BottomMenuItem id="search" iconComponent={<SearchIcon />}>
        <span className="text-xs">Search</span>
      </BottomMenuItem>
      <BottomMenuItem id="favorites" iconComponent={<HomeIcon />}>
        <span className="text-xs">Favorites</span>
      </BottomMenuItem>
      <BottomMenuItem id="profile" iconComponent={<UserIcon />}>
        <span className="text-xs">Profile</span>
      </BottomMenuItem>
    </BottomMenu>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`FourItems`]}))();export{_ as Default,v as FourItems,y as __namedExportsOrder,g as default};