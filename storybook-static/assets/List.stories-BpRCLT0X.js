import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as w}from"./index-Cs7sjTYM.js";import{S as $}from"./chevron-right-icon-CA_hVjOj.js";import{S as c}from"./globe-icon-BlpZtAhL.js";import{C as f}from"./ChipMenu-BagfA6fO.js";import{I as v,T as pe}from"./Toggle-CCT0L0fo.js";import{L as de,a as o,b as N}from"./ListHeader-iKCZ9M2k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./close-icon-oalAFRG9.js";import"./index-pbwLPNgv.js";import"./checkmark-Cbg41s1-.js";import"./index-lrnWVvcy.js";import"./chevron-down-icon-Cd9OjU95.js";const{useArgs:he}=__STORYBOOK_MODULE_PREVIEW_API__,l=t=>{const[n,i]=w.useState(null);return e.jsx(N,{...t,children:t.children.map(s=>w.cloneElement(s,{selected:t.clickable&&s.props.id===n,onClick:t.clickable?()=>i(s.props.id):void 0}))})},Re={title:"Components/List/List",component:N,subcomponents:{ListItem:o,ListHeader:de},argTypes:{children:{},className:{control:{type:"text"}}},decorators:[t=>e.jsx(t,{})],tags:["autodocs"]},r=[{title:"Bundesliga",subtitle:"Germany",count:"24"},{title:"La Liga",subtitle:"Spain",count:"32"},{title:"Serie A",subtitle:"Italy",count:"12"}],m={args:{id:"simple-list",children:r.map(({title:t,subtitle:n,count:i},s)=>e.jsx(o,{id:`list-item-${s}`,subtitle:n,info:i,iconComponent:e.jsx(c,{}),children:t}))},render:l},d={args:{id:"clickable-list",clickable:!0,children:r.map(({title:t,subtitle:n,count:i},s)=>e.jsx(o,{id:`list-item-${s}`,subtitle:n,info:i,iconComponent:e.jsx(c,{}),rightComponent:e.jsx($,{className:"icon-md"}),children:t}))},render:l},p={args:{id:"no-hover-list",hoverable:!1,children:r.map(({title:t,subtitle:n,count:i},s)=>e.jsx(o,{id:`list-item-${s}`,subtitle:n,info:i,iconComponent:e.jsx(c,{}),children:t}))}},h={args:{id:"list-with-header",children:[e.jsx(de,{id:"list-header",subtitle:"Subtitle",info:"Info",rightComponent:e.jsx($,{className:"icon-md"}),children:"Section Header"}),...r.map(({title:t,subtitle:n,count:i},s)=>e.jsx(o,{id:`list-item-${s}`,subtitle:n,info:i,iconComponent:e.jsx(c,{}),children:t}))]}},u={args:{id:"items-border-list",itemsBorder:!0,children:r.map(({title:t,subtitle:n,count:i},s)=>e.jsx(o,{id:`list-item-${s}`,subtitle:n,info:i,iconComponent:e.jsx(c,{}),rightComponent:e.jsx($,{className:"icon-md"}),children:t}))},render:l},g={args:{id:"custom-list",children:r.map(({title:t,subtitle:n,count:i},s)=>e.jsxs(o,{id:`list-item-${s}`,className:"flex",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("span",{className:"text-highlight",children:t})," | ",e.jsx("span",{className:"text-subtile",children:n})]}),e.jsx("div",{className:"emphasis",children:i})]}))},render:l},b={args:{id:"radio-list",clickable:!0,children:r.map(({title:t,subtitle:n},i)=>e.jsx(o,{id:`list-item-${i}`,htmlFor:`radio-${i}`,subtitle:n,iconComponent:e.jsx(c,{}),rightComponent:e.jsx(v,{id:`radio-${i}`,name:"radio-group-1",type:"radio"}),children:t}))}},C={args:{id:"checkbox-list",clickable:!0,children:r.map(({title:t,subtitle:n},i)=>e.jsx(o,{id:`list-item-${i}`,htmlFor:`checkbox-${i}`,subtitle:n,iconComponent:e.jsx(c,{}),rightComponent:e.jsx(v,{id:`checkbox-${i}`,name:"checkbox-group-1",type:"checkbox"}),children:t}))}},k={args:{id:"checkmark-list",clickable:!0,children:r.map(({title:t,subtitle:n},i)=>e.jsx(o,{id:`list-item-${i}`,htmlFor:`checkmark-${i}`,subtitle:n,iconComponent:e.jsx(c,{}),rightComponent:e.jsx(v,{id:`checkmark-${i}`,name:"checkmark-group-1",type:"checkmark",checked:!0}),children:t}))}},ue=()=>{const[{toggles:t=[],clickable:n},i]=he(),s=j=>S=>{if(!n)return;const a=[...t];a[j]=S.target.checked,i({toggles:a}),console.info("toggle")};return e.jsx(N,{id:"switch-list",children:r.map(({title:j,subtitle:S},a)=>e.jsx(o,{id:`listitem-${a}`,htmlFor:`switch-${a}`,subtitle:S,iconComponent:e.jsx(c,{}),rightComponent:e.jsx(pe,{id:`switch-${a}`,name:"switch-group-1",checked:t[a],onChange:s(a)}),children:j}))})},L={argTypes:{toggles:{control:"object"},clickable:{control:"boolean"}},args:{id:"switch-list",clickable:!0,toggles:r.map(()=>!1)},render:ue},x={args:{id:"chip-list",children:[e.jsx(o,{id:"listitem-1",subtitle:"Germany",iconComponent:e.jsx(c,{}),rightComponent:e.jsx(f,{id:"listitem-chip-1",className:"chip chip-warning",children:"Pending"}),children:"Bundesliga"}),e.jsx(o,{id:"listitem-2",subtitle:"Spain",iconComponent:e.jsx(c,{}),rightComponent:e.jsx(f,{id:"listitem-chip-2",className:"chip chip-positive",children:"Completed"}),children:"La Liga"}),e.jsx(o,{id:"listitem-3",subtitle:"Italy",iconComponent:e.jsx(c,{}),rightComponent:e.jsx(f,{id:"listitem-chip-3",className:"chip chip-negative",children:"Failed"}),children:"Serie A"})]}},ge=t=>{if(t===2||t===3)return"error";if(t===4||t===5)return"warning";if(t===6||t===7)return"info"},I={args:{id:"chained-list",showChain:!0,hoverable:!1,children:[...r,...r,...r].map(({title:t},n)=>e.jsx(o,{id:`list-item-${n}`,chainStatus:ge(n),children:t}))},render:l};var R,y,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: "simple-list",
    children: mockData.map(({
      title,
      subtitle,
      count
    }, i) => <ListItem id={\`list-item-\${i}\`} subtitle={subtitle} info={count} iconComponent={<GlobeIcon />}>
                {title}
            </ListItem>)
  },
  render: useListRender
}`,...(D=(y=m.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var G,F,H;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: "clickable-list",
    clickable: true,
    children: mockData.map(({
      title,
      subtitle,
      count
    }, i) => <ListItem id={\`list-item-\${i}\`} subtitle={subtitle} info={count} iconComponent={<GlobeIcon />} rightComponent={<ChevronRightIcon className="icon-md" />}>
                {title}
            </ListItem>)
  },
  render: useListRender
}`,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var _,B,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: "no-hover-list",
    hoverable: false,
    children: mockData.map(({
      title,
      subtitle,
      count
    }, i) => <ListItem id={\`list-item-\${i}\`} subtitle={subtitle} info={count} iconComponent={<GlobeIcon />}>
                {title}
            </ListItem>)
  }
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var T,A,O;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: "list-with-header",
    children: [<ListHeader id="list-header" subtitle="Subtitle" info="Info" rightComponent={<ChevronRightIcon className="icon-md" />}>
                Section Header
            </ListHeader>, ...mockData.map(({
      title,
      subtitle,
      count
    }, i) => <ListItem id={\`list-item-\${i}\`} subtitle={subtitle} info={count} iconComponent={<GlobeIcon />}>
                    {title}
                </ListItem>)]
  }
}`,...(O=(A=h.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var P,W,K;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "items-border-list",
    itemsBorder: true,
    children: mockData.map(({
      title,
      subtitle,
      count
    }, i) => <ListItem id={\`list-item-\${i}\`} subtitle={subtitle} info={count} iconComponent={<GlobeIcon />} rightComponent={<ChevronRightIcon className="icon-md" />}>
                {title}
            </ListItem>)
  },
  render: useListRender
}`,...(K=(W=u.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var M,U,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "custom-list",
    children: mockData.map(({
      title,
      subtitle,
      count
    }, i) => <ListItem id={\`list-item-\${i}\`} className="flex">
                <div className="flex-grow">
                    <span className="text-highlight">{title}</span>&nbsp;|&nbsp;
                    <span className="text-subtile">{subtitle}</span>
                </div>
                <div className="emphasis">{count}</div>
            </ListItem>)
  },
  render: useListRender
}`,...(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var Y,q,z;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    id: "radio-list",
    clickable: true,
    children: mockData.map(({
      title,
      subtitle
    }, i) => <ListItem id={\`list-item-\${i}\`} htmlFor={\`radio-\${i}\`} subtitle={subtitle} iconComponent={<GlobeIcon />} rightComponent={<Input id={\`radio-\${i}\`} name="radio-group-1" type="radio" />}>
                {title}
            </ListItem>)
  }
}`,...(z=(q=b.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,Q,X;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    id: "checkbox-list",
    clickable: true,
    children: mockData.map(({
      title,
      subtitle
    }, i) => <ListItem id={\`list-item-\${i}\`} htmlFor={\`checkbox-\${i}\`} subtitle={subtitle} iconComponent={<GlobeIcon />} rightComponent={<Input id={\`checkbox-\${i}\`} name="checkbox-group-1" type="checkbox" />}>
                {title}
            </ListItem>)
  }
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    id: "checkmark-list",
    clickable: true,
    children: mockData.map(({
      title,
      subtitle
    }, i) => <ListItem id={\`list-item-\${i}\`} htmlFor={\`checkmark-\${i}\`} subtitle={subtitle} iconComponent={<GlobeIcon />} rightComponent={<Input id={\`checkmark-\${i}\`} name="checkmark-group-1" type="checkmark" checked />}>
                {title}
            </ListItem>)
  }
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,ne,se;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  argTypes: {
    toggles: {
      control: "object"
    },
    clickable: {
      control: "boolean"
    }
  },
  args: {
    id: "switch-list",
    clickable: true,
    toggles: mockData.map(() => false)
  },
  render: RenderSwitchList
}`,...(se=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,re,ce;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    id: "chip-list",
    children: [<ListItem id="listitem-1" subtitle="Germany" iconComponent={<GlobeIcon />} rightComponent={<Chip id="listitem-chip-1" className="chip chip-warning">
                        Pending
                    </Chip>}>
                Bundesliga
            </ListItem>, <ListItem id="listitem-2" subtitle="Spain" iconComponent={<GlobeIcon />} rightComponent={<Chip id="listitem-chip-2" className="chip chip-positive">
                        Completed
                    </Chip>}>
                La Liga
            </ListItem>, <ListItem id="listitem-3" subtitle="Italy" iconComponent={<GlobeIcon />} rightComponent={<Chip id="listitem-chip-3" className="chip chip-negative">
                        Failed
                    </Chip>}>
                Serie A
            </ListItem>]
  }
}`,...(ce=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ae,le,me;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    id: "chained-list",
    showChain: true,
    hoverable: false,
    children: [...mockData, ...mockData, ...mockData].map(({
      title
    }, i) => <ListItem id={\`list-item-\${i}\`} chainStatus={getChainStatus(i)}>
                {title}
            </ListItem>)
  },
  render: useListRender
}`,...(me=(le=I.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};const ye=["SimpleList","ClickableList","NoHoverList","ListWithHeader","ItemsBorderList","CustomList","RadioList","CheckboxList","CheckmarkList","SwitchList","ChipList","ChainedList"];export{I as ChainedList,C as CheckboxList,k as CheckmarkList,x as ChipList,d as ClickableList,g as CustomList,u as ItemsBorderList,h as ListWithHeader,p as NoHoverList,b as RadioList,m as SimpleList,L as SwitchList,ye as __namedExportsOrder,Re as default};
