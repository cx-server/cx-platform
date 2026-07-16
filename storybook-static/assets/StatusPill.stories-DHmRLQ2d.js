import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-iU2omdTy.js";var n,r,i,a,o=e((()=>{n=t(),(function(e){e.WON=`w`,e.LOST=`l`})(r||={}),i=(e=``)=>typeof e==`string`?e.toLowerCase()===r.WON?`bg-positive`:e.toLowerCase()===r.LOST?`bg-negative`:`bg-neutral`:``,a=({className:e,children:t,isUnderlined:r,id:a,backgroundColorIndicator:o,pillSize:s,undelineSize:c})=>{let l=i(o),u=s||`size-5`,d=c||`h-0.5 w-3`;return(0,n.jsxs)(`div`,{className:`flex flex-col justify-center items-center w-max ${r?`gap-0.5`:``} ${e??``}`,children:[(0,n.jsx)(`div`,{className:`flex overflow-hidden justify-center items-center rounded-xl font-medium text-2xs text-white-inverse lg:transition-opacity lg:[@media(hover:hover)]:hover:opacity-90 ${l} ${u}`,id:a,"data-testid":a,children:t}),r&&(0,n.jsx)(`span`,{className:`rounded-md ${l} ${d}`})]})}})),s,c,l,u,d,f,p,m;e((()=>{o(),s=t(),c={title:`Components/StatusPill`,component:a,tags:[],argTypes:{backgroundColorIndicator:{control:`select`,options:[`w`,`l`,`other`],description:`Color indicator: w=won (green), l=lost (red), other=neutral`},isUnderlined:{control:`boolean`,description:`Show colored underline beneath the pill`}},args:{id:`status-pill`,backgroundColorIndicator:`w`,isUnderlined:!1},parameters:{docs:{description:{component:`Small circular status indicator with color coding for won/lost/neutral states. Used in betting history.`}}}},l={args:{id:`pill-won`,backgroundColorIndicator:`w`,children:`W`}},u={args:{id:`pill-lost`,backgroundColorIndicator:`l`,children:`L`}},d={args:{id:`pill-neutral`,backgroundColorIndicator:`other`,children:`—`}},f={args:{id:`pill-underline`,backgroundColorIndicator:`w`,isUnderlined:!0,children:`W`}},p={render:()=>(0,s.jsxs)(`div`,{className:`flex gap-4 items-end`,children:[(0,s.jsx)(a,{id:`sp-w`,backgroundColorIndicator:`w`,isUnderlined:!0,children:`W`}),(0,s.jsx)(a,{id:`sp-l`,backgroundColorIndicator:`l`,isUnderlined:!0,children:`L`}),(0,s.jsx)(a,{id:`sp-n`,backgroundColorIndicator:`other`,children:`—`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-won",
    backgroundColorIndicator: "w",
    children: "W"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-lost",
    backgroundColorIndicator: "l",
    children: "L"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-neutral",
    backgroundColorIndicator: "other",
    children: "—"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "pill-underline",
    backgroundColorIndicator: "w",
    isUnderlined: true,
    children: "W"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-end">
      <StatusPill id="sp-w" backgroundColorIndicator="w" isUnderlined>W</StatusPill>
      <StatusPill id="sp-l" backgroundColorIndicator="l" isUnderlined>L</StatusPill>
      <StatusPill id="sp-n" backgroundColorIndicator="other">—</StatusPill>
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Won`,`Lost`,`Neutral`,`WithUnderline`,`AllStates`]}))();export{p as AllStates,u as Lost,d as Neutral,f as WithUnderline,l as Won,m as __namedExportsOrder,c as default};