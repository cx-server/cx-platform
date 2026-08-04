import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-LpsTSIod.js";function a(e){let t=(0,o.useMemo)(()=>`(min-width: ${e})`,[e]);return(0,o.useSyncExternalStore)((0,o.useCallback)(e=>{if(typeof window>`u`)return()=>!1;let n=window.matchMedia(t);return n.addEventListener(`change`,e),()=>{n.removeEventListener(`change`,e)}},[t]),(0,o.useCallback)(()=>typeof window<`u`&&window.matchMedia(t).matches,[t]),(0,o.useCallback)(()=>!1,[]))}var o,s,c=t((()=>{o=n(r(),1),s={sm:`640px`,md:`768px`,lg:`1200px`,xl:`1280px`,"2xl":`1440px`}}));function l({children:e,className:t,hoverable:n=!1,clickable:r,itemsBorder:i,listSize:o=`sm`,showChain:c,...l}){let d=a(s.lg);return(0,u.jsx)(`ul`,{className:`list ${`${n||d?`hoverable`:``} ${r?`clickable`:``} ${i?`borderlist`:``} ${c?`chained`:``} ${o}`} ${t??``}`,...l,children:e})}var u,d=t((()=>{u=i(),c()}));function f({children:e,className:t,subtitle:n,subtitleClassName:r,info:i,infoClassName:a,rightComponent:o}){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`flex-grow flex flex-col`,children:[e&&(0,p.jsx)(`div`,{className:`text-highlight ${t}`,children:e}),n&&(0,p.jsx)(`span`,{className:`text-subtile ${r}`,children:n})]}),(i||o)&&(0,p.jsxs)(`div`,{className:`flex items-center text-subtile`,children:[(0,p.jsx)(`span`,{className:a,children:i}),o]})]})}var p,m=t((()=>{p=i()}));function h({children:e,id:t,htmlFor:n,selected:r,iconComponent:i,subtitle:a,info:o,rightComponent:s,border:c,className:l,listItemClassName:u,infoClassName:d,chainStatus:p=`default`,...m}){let h=`${c?`border-standard`:``} ${r?`selected`:``} ${u??``}`,v=i&&(0,_.cloneElement)(i,{className:`icon-md text-icon-highlight ${i.props.className??``}`}),y=s&&(0,_.cloneElement)(s,{className:`text-subtile ${s.props.className??``}`}),b=`text-sm font-normal text-standard ${d??``}`,x=(0,g.jsxs)(g.Fragment,{children:[v,(0,g.jsx)(f,{className:`text-base font-medium ${l??``}`,subtitle:a??``,subtitleClassName:`text-xs font-normal`,info:o??``,infoClassName:b,...y&&{rightComponent:y},children:e})]});return n?(0,g.jsx)(`li`,{id:t,"data-testid":t,...m,children:(0,g.jsxs)(`label`,{"data-testid":`${t}-label`,className:`listitem cursor-pointer ${h} chain-${p}`,htmlFor:n,children:[(0,g.jsx)(`i`,{className:`listitem-chain`}),x]})}):(0,g.jsxs)(`li`,{id:t,"data-testid":t,className:`listitem ${h} chain-${p}`,...m,children:[(0,g.jsx)(`i`,{className:`listitem-chain`}),x]})}var g,_,v=t((()=>{g=i(),_=n(r(),1),m()}));function y({id:e,className:t=``,containerClassName:n=``,onClick:r,...i}){return(0,b.jsx)(`div`,{id:e,className:`list-header ${r?`cursor-pointer lg:hover:bg-list-hover lg:active:bg-list-active`:``} ${n}`,onClick:r,children:(0,b.jsx)(f,{className:`text-lg font-semibold ${t}`,subtitleClassName:`text-xs font-medium`,infoClassName:`text-sm font-normal text-standard`,...i})})}var b,x=t((()=>{b=i(),m()})),S=t((()=>{d(),v(),x()})),C=e({Clickable:()=>k,Default:()=>E,Sizes:()=>A,WithHeader:()=>O,WithSubtitles:()=>D,__namedExportsOrder:()=>j,default:()=>T}),w,T,E,D,O,k,A,j,M=t((()=>{S(),w=i(),T={title:`Components/List`,component:l,tags:[],argTypes:{listSize:{control:`select`,options:[`xs`,`sm`,`md`,`lg`]},hoverable:{control:`boolean`},clickable:{control:`boolean`},itemsBorder:{control:`boolean`}},args:{id:`list-demo`,listSize:`sm`,hoverable:!1,clickable:!1,itemsBorder:!0},decorators:[e=>(0,w.jsx)(`div`,{style:{maxWidth:`360px`},children:(0,w.jsx)(e,{})})]},E={render:e=>(0,w.jsxs)(l,{...e,children:[(0,w.jsx)(h,{id:`li-1`,children:`Account Settings`}),(0,w.jsx)(h,{id:`li-2`,children:`Payment Methods`}),(0,w.jsx)(h,{id:`li-3`,children:`Notifications`}),(0,w.jsx)(h,{id:`li-4`,children:`Help & Support`})]})},D={render:()=>(0,w.jsxs)(l,{id:`list-subtitles`,itemsBorder:!0,listSize:`md`,children:[(0,w.jsx)(h,{id:`li-dep`,subtitle:`Visa, PayPal, Apple Pay`,children:`Deposit`}),(0,w.jsx)(h,{id:`li-wd`,subtitle:`Bank transfer, PayPal`,children:`Withdrawal`}),(0,w.jsx)(h,{id:`li-hist`,subtitle:`Last 30 days`,children:`Transaction History`})]})},O={render:()=>(0,w.jsxs)(l,{id:`list-header`,itemsBorder:!0,listSize:`sm`,children:[(0,w.jsx)(y,{id:`lh-1`,children:`Account`}),(0,w.jsx)(h,{id:`li-profile`,children:`Profile`}),(0,w.jsx)(h,{id:`li-security`,children:`Security`}),(0,w.jsx)(h,{id:`li-limits`,children:`Limits`})]})},k={render:()=>(0,w.jsxs)(l,{id:`list-clickable`,clickable:!0,itemsBorder:!0,listSize:`md`,children:[(0,w.jsx)(h,{id:`li-c1`,children:`Deposit`}),(0,w.jsx)(h,{id:`li-c2`,children:`Withdrawal`}),(0,w.jsx)(h,{id:`li-c3`,children:`Transaction History`})]})},A={render:()=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`xs`}),(0,w.jsxs)(l,{id:`l-xs`,listSize:`xs`,itemsBorder:!0,children:[(0,w.jsx)(h,{id:`xs-1`,children:`Item 1`}),(0,w.jsx)(h,{id:`xs-2`,children:`Item 2`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`sm`}),(0,w.jsxs)(l,{id:`l-sm`,listSize:`sm`,itemsBorder:!0,children:[(0,w.jsx)(h,{id:`sm-1`,children:`Item 1`}),(0,w.jsx)(h,{id:`sm-2`,children:`Item 2`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`md`}),(0,w.jsxs)(l,{id:`l-md`,listSize:`md`,itemsBorder:!0,children:[(0,w.jsx)(h,{id:`md-1`,children:`Item 1`}),(0,w.jsx)(h,{id:`md-2`,children:`Item 2`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-subtile text-xs mb-2`,children:`lg`}),(0,w.jsxs)(l,{id:`l-lg`,listSize:`lg`,itemsBorder:!0,children:[(0,w.jsx)(h,{id:`lg-1`,children:`Item 1`}),(0,w.jsx)(h,{id:`lg-2`,children:`Item 2`})]})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <ListItem id="li-1">Account Settings</ListItem>
      <ListItem id="li-2">Payment Methods</ListItem>
      <ListItem id="li-3">Notifications</ListItem>
      <ListItem id="li-4">Help & Support</ListItem>
    </List>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <List id="list-subtitles" itemsBorder listSize="md">
      <ListItem id="li-dep" subtitle="Visa, PayPal, Apple Pay">Deposit</ListItem>
      <ListItem id="li-wd" subtitle="Bank transfer, PayPal">Withdrawal</ListItem>
      <ListItem id="li-hist" subtitle="Last 30 days">Transaction History</ListItem>
    </List>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <List id="list-header" itemsBorder listSize="sm">
      <ListHeader id="lh-1">Account</ListHeader>
      <ListItem id="li-profile">Profile</ListItem>
      <ListItem id="li-security">Security</ListItem>
      <ListItem id="li-limits">Limits</ListItem>
    </List>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <List id="list-clickable" clickable itemsBorder listSize="md">
      <ListItem id="li-c1">Deposit</ListItem>
      <ListItem id="li-c2">Withdrawal</ListItem>
      <ListItem id="li-c3">Transaction History</ListItem>
    </List>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <div>
        <p className="text-subtile text-xs mb-2">xs</p>
        <List id="l-xs" listSize="xs" itemsBorder>
          <ListItem id="xs-1">Item 1</ListItem>
          <ListItem id="xs-2">Item 2</ListItem>
        </List>
      </div>
      <div>
        <p className="text-subtile text-xs mb-2">sm</p>
        <List id="l-sm" listSize="sm" itemsBorder>
          <ListItem id="sm-1">Item 1</ListItem>
          <ListItem id="sm-2">Item 2</ListItem>
        </List>
      </div>
      <div>
        <p className="text-subtile text-xs mb-2">md</p>
        <List id="l-md" listSize="md" itemsBorder>
          <ListItem id="md-1">Item 1</ListItem>
          <ListItem id="md-2">Item 2</ListItem>
        </List>
      </div>
      <div>
        <p className="text-subtile text-xs mb-2">lg</p>
        <List id="l-lg" listSize="lg" itemsBorder>
          <ListItem id="lg-1">Item 1</ListItem>
          <ListItem id="lg-2">Item 2</ListItem>
        </List>
      </div>
    </div>
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithSubtitles`,`WithHeader`,`Clickable`,`Sizes`]}));M();export{k as Clickable,E as Default,A as Sizes,O as WithHeader,D as WithSubtitles,j as __namedExportsOrder,T as default,M as n,C as t};