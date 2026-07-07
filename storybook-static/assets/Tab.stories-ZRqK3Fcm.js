import{j as e}from"./jsx-runtime-8P-18mTY.js";import{L}from"./live-Dyvvcghr.js";import{G as N}from"./globe-icon-hzbulV7l.js";import{I as R}from"./index-lrnWVvcy.js";import{a as r,T as s}from"./TabMenu-DM90Ueos.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const H={title:"Components/Tab/Tab",component:r,argTypes:{children:{},badge:{type:"number"},badgeMinWidth:{options:[void 0,"sm","md","lg"],control:{type:"select"}},icon:{options:["None","3D Icon","Flat Icon"],mapping:{None:null,"3D Icon":e.jsx("img",{src:L,alt:""}),"Flat Icon":e.jsx(R,{href:N})}},className:{control:{type:"text"}}},args:{children:"Tab Item"},tags:["autodocs"]},n={args:{id:"simple-tab"},decorators:[(t,{args:a})=>e.jsxs(s,{id:"tab-menu",children:[e.jsx(t,{}),e.jsx(r,{...a,id:"demo-tab",selected:!a.selected,children:"Tab Item"}),e.jsx(r,{...a,id:"demo-tab",disabled:!0,children:"Tab Item"})]})]},d={args:{id:"small-tab"},decorators:[(t,{args:a})=>e.jsxs(s,{id:"small-tab-menu",size:"sm",children:[e.jsx(t,{}),e.jsx(r,{...a,id:"demo-tab",selected:!0,children:"Active Tab"}),e.jsx(r,{...a,id:"demo-tab",disabled:!0,children:"Tab Item"})]})],parameters:{size:!0}},o={args:{id:"badge-tab",badge:10},decorators:[(t,{args:a})=>e.jsxs(s,{id:"tab-menu",children:[e.jsx(t,{}),e.jsx(r,{...a,id:"demo-tab",selected:!0,children:"Active Tab"}),e.jsx(r,{...a,id:"demo-tab",disabled:!0,children:"Tab Item"})]})]},b={args:{id:"reserved-badge-tab",badgeMinWidth:"lg"},decorators:[(t,{args:a})=>e.jsxs(s,{id:"tab-menu",children:[e.jsx(t,{}),e.jsx(r,{...a,id:"demo-tab",badge:5,selected:!0,children:"Active Tab"}),e.jsx(r,{...a,id:"demo-tab",disabled:!0,children:"Tab Item"})]})]},i={args:{id:"3d-icon-tab",icon:e.jsx("img",{src:L,alt:""})},decorators:[(t,{args:a})=>e.jsxs(s,{id:"tab-menu",children:[e.jsx(t,{}),e.jsx(r,{...a,id:"demo-tab",selected:!0,children:"Active Tab"}),e.jsx(r,{...a,id:"demo-tab",disabled:!0,children:"Tab Item"})]})]},c={args:{id:"flat-icon-tab",icon:e.jsx(R,{href:N})},decorators:[(t,{args:a})=>e.jsxs(s,{id:"tab-menu",children:[e.jsx(t,{}),e.jsx(r,{...a,id:"demo-tab",selected:!0,children:"Active Tab"}),e.jsx(r,{...a,id:"demo-tab",disabled:!0,children:"Tab Item"})]})]},m={args:{id:"tabbars-tab"},decorators:[(t,{args:a})=>e.jsxs(s,{id:"tabbars",variant:"tabbars",children:[e.jsx(t,{}),e.jsx(r,{...a,id:"demo-tab",selected:!0,children:"Active Tab"}),e.jsx(r,{...a,id:"demo-tab",disabled:!0,children:"Tab Item"})]})]};var l,T,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: "simple-tab"
  },
  decorators: [(Story, {
    args
  }) => <TabMenu id="tab-menu">
                <Story />
                <Tab {...args} id="demo-tab" selected={!args.selected}>
                    Tab Item
                </Tab>
                <Tab {...args} id="demo-tab" disabled>
                    Tab Item
                </Tab>
            </TabMenu>]
}`,...(u=(T=n.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var g,p,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "small-tab"
  },
  decorators: [(Story, {
    args
  }) => <TabMenu id="small-tab-menu" size="sm">
                <Story />
                <Tab {...args} id="demo-tab" selected>
                    Active Tab
                </Tab>
                <Tab {...args} id="demo-tab" disabled>
                    Tab Item
                </Tab>
            </TabMenu>],
  parameters: {
    size: true
  }
}`,...(x=(p=d.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var j,h,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "badge-tab",
    badge: 10
  },
  decorators: [(Story, {
    args
  }) => <TabMenu id="tab-menu">
                <Story />
                <Tab {...args} id="demo-tab" selected>
                    Active Tab
                </Tab>
                <Tab {...args} id="demo-tab" disabled>
                    Tab Item
                </Tab>
            </TabMenu>]
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var S,v,y;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: "reserved-badge-tab",
    badgeMinWidth: "lg"
  },
  decorators: [(Story, {
    args
  }) => <TabMenu id="tab-menu">
                <Story />
                <Tab {...args} id="demo-tab" badge={5} selected>
                    Active Tab
                </Tab>
                <Tab {...args} id="demo-tab" disabled>
                    Tab Item
                </Tab>
            </TabMenu>]
}`,...(y=(v=b.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var M,A,f;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "3d-icon-tab",
    icon: <img src={Live3DIcon} alt="" />
  },
  decorators: [(Story, {
    args
  }) => <TabMenu id="tab-menu">
                <Story />
                <Tab {...args} id="demo-tab" selected>
                    Active Tab
                </Tab>
                <Tab {...args} id="demo-tab" disabled>
                    Tab Item
                </Tab>
            </TabMenu>]
}`,...(f=(A=i.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var W,B,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: "flat-icon-tab",
    icon: <Icon href={GlobeIcon} />
  },
  decorators: [(Story, {
    args
  }) => <TabMenu id="tab-menu">
                <Story />
                <Tab {...args} id="demo-tab" selected>
                    Active Tab
                </Tab>
                <Tab {...args} id="demo-tab" disabled>
                    Tab Item
                </Tab>
            </TabMenu>]
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var z,F,G;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "tabbars-tab"
  },
  decorators: [(Story, {
    args
  }) => <TabMenu id="tabbars" variant="tabbars">
                <Story />
                <Tab {...args} id="demo-tab" selected>
                    Active Tab
                </Tab>
                <Tab {...args} id="demo-tab" disabled>
                    Tab Item
                </Tab>
            </TabMenu>]
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const J=["SimpleTab","SmallTab","TabWithBadge","TabWithReservedBadgeSpace","Tab3DIcon","TabFlatIcon","TabBars"];export{n as SimpleTab,d as SmallTab,i as Tab3DIcon,m as TabBars,c as TabFlatIcon,o as TabWithBadge,b as TabWithReservedBadgeSpace,J as __namedExportsOrder,H as default};
