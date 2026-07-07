import{j as a}from"./jsx-runtime-8P-18mTY.js";import{r as j}from"./index-Cs7sjTYM.js";import{L as sa}from"./live-Dyvvcghr.js";import{F as ta}from"./soccer-Cg3Rw2DS.js";import{F as u,I as h,L as g}from"./icon-lineups-D7E9I4vF.js";import{I as e}from"./index-lrnWVvcy.js";import{a as r,T as $}from"./TabMenu-DM90Ueos.js";import"./_commonjsHelpers-BosuxZz1.js";const ia=""+new URL("all-HmExnA5K.png",import.meta.url).href,ca=""+new URL("calendar-40STx7JT.png",import.meta.url).href,oa=({children:n,...aa})=>{const[ra,ea]=j.useState(0);return a.jsx($,{...aa,className:"max-w-[365px]",children:n.map((na,x)=>j.cloneElement(na,{selected:ra===x,onClick:()=>ea(x)}))})},ga={title:"Components/Tab/TabMenu",component:$,subcomponents:{Tab:r},decorators:[n=>a.jsx(n,{})],render:oa,argTypes:{children:{},className:{control:{type:"text"}},size:{if:{arg:"variant",neq:"tabbars"}}},args:{children:[a.jsx(r,{id:"tab-1",children:"Tab 1"},"tab-1"),a.jsx(r,{id:"tab-2",children:"Tab 2"},"tab-2"),a.jsx(r,{id:"tab-3",children:"Tab 3"},"tab-3")]},tags:["autodocs"]},s={args:{id:"simple-tab-menu"}},t={args:{id:"small-tab-menu",size:"sm"}},i={args:{id:"small-tab-menu",size:"xs"}},c={args:{id:"no-bars-tab-menu",hideBars:!0}},o={args:{id:"badge-tab-menu",children:[a.jsx(r,{id:"tab-1",children:"Tab 1"},"tab-1"),a.jsx(r,{id:"tab-2",badge:10,children:"Tab 2"},"tab-2"),a.jsx(r,{id:"tab-3",children:"Tab 3"},"tab-3")]}},b={args:{id:"3d-tab-menu",itemsFill:!0,children:[a.jsx(r,{id:"tab-1",icon:a.jsx("img",{src:sa,alt:""}),children:"Live"},"tab-1"),a.jsx(r,{id:"tab-2",icon:a.jsx("img",{src:ca,alt:""}),children:"Today"},"tab-2"),a.jsx(r,{id:"tab-3",icon:a.jsx("img",{src:ta,alt:""}),badge:5,children:"Football"},"tab-3"),a.jsx(r,{id:"tab-4",icon:a.jsx("img",{src:ia,alt:""}),children:"Basketball"},"tab-4")]},decorators:[n=>a.jsx("div",{className:"w-[400px]",children:a.jsx(n,{})})]},d={args:{id:"tab-bars",variant:"tabbars"}},m={args:{id:"tab-bars",variant:"tabbars",children:[a.jsx(r,{id:"tab-1",icon:a.jsx(e,{href:u}),children:"Facts"},"tab-1"),a.jsx(r,{id:"tab-2",icon:a.jsx(e,{href:h}),children:"Statistics"},"tab-2")]}},l={args:{id:"tab-iconbar",variant:"iconbar",children:[a.jsx(r,{id:"tab-1",icon:a.jsx(e,{href:u}),children:"Facts"},"tab-1"),a.jsx(r,{id:"tab-2",icon:a.jsx(e,{href:h}),children:"Statistics"},"tab-2"),a.jsx(r,{id:"tab-3",icon:a.jsx(e,{href:g}),children:"Lineups"},"tab-3")]}},p={args:{id:"tab-iconbar-no-text",variant:"iconbar",children:[a.jsx(r,{id:"tab-1",icon:a.jsx(e,{href:u})},"tab-1"),a.jsx(r,{id:"tab-2",icon:a.jsx(e,{href:h})},"tab-2"),a.jsx(r,{id:"tab-3",icon:a.jsx(e,{href:g})},"tab-3")]}},T={args:{id:"tab-iconbar",variant:"iconbar",size:"md",children:[a.jsx(r,{id:"tab-1",icon:a.jsx(e,{href:u}),children:"Facts"},"tab-1"),a.jsx(r,{id:"tab-2",icon:a.jsx(e,{href:h}),children:"Statistics"},"tab-2"),a.jsx(r,{id:"tab-3",icon:a.jsx(e,{href:g}),children:"Lineups"},"tab-3")]}};var I,f,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: "simple-tab-menu"
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,k,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "small-tab-menu",
    size: "sm"
  }
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var B,F,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "small-tab-menu",
    size: "xs"
  }
}`,...(L=(F=i.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,D,N;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "no-bars-tab-menu",
    hideBars: true
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var z,E,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "badge-tab-menu",
    children: [<Tab key="tab-1" id="tab-1">
                Tab 1
            </Tab>, <Tab key="tab-2" id="tab-2" badge={10}>
                Tab 2
            </Tab>, <Tab key="tab-3" id="tab-3">
                Tab 3
            </Tab>]
  }
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var R,W,C;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: "3d-tab-menu",
    itemsFill: true,
    children: [<Tab key="tab-1" id="tab-1" icon={<img src={Live3DIcon} alt="" />}>
                Live
            </Tab>, <Tab key="tab-2" id="tab-2" icon={<img src={Today3DIcon} alt="" />}>
                Today
            </Tab>, <Tab key="tab-3" id="tab-3" icon={<img src={Football3DIcon} alt="" />} badge={5}>
                Football
            </Tab>, <Tab key="tab-4" id="tab-4" icon={<img src={Basketball3DIcon} alt="" />}>
                Basketball
            </Tab>]
  },
  decorators: [Story => <div className="w-[400px]">
                <Story />
            </div>]
}`,...(C=(W=b.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var U,_,q;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    id: "tab-bars",
    variant: "tabbars"
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,H,J;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: "tab-bars",
    variant: "tabbars",
    children: [<Tab key="tab-1" id="tab-1" icon={<Icon href={Facts} />}>
                Facts
            </Tab>, <Tab key="tab-2" id="tab-2" icon={<Icon href={Iconh2h} />}>
                Statistics
            </Tab>]
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,O,G;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    id: "tab-iconbar",
    variant: "iconbar",
    children: [<Tab key="tab-1" id="tab-1" icon={<Icon href={Facts} />}>
                Facts
            </Tab>, <Tab key="tab-2" id="tab-2" icon={<Icon href={Iconh2h} />}>
                Statistics
            </Tab>, <Tab key="tab-3" id="tab-3" icon={<Icon href={Lineups} />}>
                Lineups
            </Tab>]
  }
}`,...(G=(O=l.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var P,Q,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "tab-iconbar-no-text",
    variant: "iconbar",
    children: [<Tab key="tab-1" id="tab-1" icon={<Icon href={Facts} />} />, <Tab key="tab-2" id="tab-2" icon={<Icon href={Iconh2h} />} />, <Tab key="tab-3" id="tab-3" icon={<Icon href={Lineups} />} />]
  }
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: "tab-iconbar",
    variant: "iconbar",
    size: "md",
    children: [<Tab key="tab-1" id="tab-1" icon={<Icon href={Facts} />}>
                Facts
            </Tab>, <Tab key="tab-2" id="tab-2" icon={<Icon href={Iconh2h} />}>
                Statistics
            </Tab>, <Tab key="tab-3" id="tab-3" icon={<Icon href={Lineups} />}>
                Lineups
            </Tab>]
  }
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const xa=["SimpleTabMenu","SmallTabMenu","ExtraSmallTabMenu","NoBarsTabMenu","TabMenuWithBadge","TabMenu3DNavigation","TabBars","TabBarsWithIcon","TabIconBar","TabIconBarNoText","TabIconBarLarge"];export{i as ExtraSmallTabMenu,c as NoBarsTabMenu,s as SimpleTabMenu,t as SmallTabMenu,d as TabBars,m as TabBarsWithIcon,l as TabIconBar,T as TabIconBarLarge,p as TabIconBarNoText,b as TabMenu3DNavigation,o as TabMenuWithBadge,xa as __namedExportsOrder,ga as default};
