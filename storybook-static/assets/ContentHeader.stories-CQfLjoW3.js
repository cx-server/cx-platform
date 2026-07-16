import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-iU2omdTy.js";var n,r,i=e((()=>{n=t(),r=({id:e,title:t,subtitle:r,leftContent:i,rightContent:a,variant:o=`interaction`,horizontalOffset:s=!0,noWrap:c,className:l=``})=>{let u=s?`px-4`:``,d=o===`date`?`text-highlight font-semibold`:`text-interaction font-medium`,f=c?``:`flex-wrap`;return(0,n.jsxs)(`header`,{id:e,"data-testid":e,className:`flex gap-2 py-1 ${u} ${l}`,children:[i,(0,n.jsxs)(`div`,{className:`flex-1 py-0.5 flex gap-1 items-center truncate ${f}`,children:[(0,n.jsx)(`span`,{className:`${d} truncate text-sm shrink-0 max-w-full`,children:t}),r&&(0,n.jsx)(`span`,{className:`text-xs text-subtile truncate`,children:r})]}),a]})}})),a,o,s,c,l,u,d;e((()=>{i(),a=t(),o={title:`Components/ContentHeader`,component:r,tags:[],argTypes:{variant:{control:`select`,options:[`interaction`,`date`],description:`Visual variant — interaction (blue link) or date (bold highlight)`},horizontalOffset:{control:`boolean`,description:`Apply px-4 horizontal padding`}},args:{id:`content-header`,title:`Section Title`,variant:`interaction`,horizontalOffset:!0},parameters:{docs:{description:{component:`Section header with title, optional subtitle, and left/right content slots.`}}}},s={args:{title:`Popular`,subtitle:`12 events`}},c={args:{title:`Today, 16 July`,variant:`date`}},l={args:{title:`Live Now`,subtitle:`5 matches`,rightContent:(0,a.jsx)(`span`,{className:`text-xs text-interaction cursor-pointer`,children:`See All`})}},u={args:{title:`No Padding`,horizontalOffset:!1}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Popular",
    subtitle: "12 events"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Today, 16 July",
    variant: "date"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Live Now",
    subtitle: "5 matches",
    rightContent: <span className="text-xs text-interaction cursor-pointer">See All</span>
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "No Padding",
    horizontalOffset: false
  }
}`,...u.parameters?.docs?.source}}},d=[`Interaction`,`DateVariant`,`WithRightContent`,`NoOffset`]}))();export{c as DateVariant,s as Interaction,u as NoOffset,l as WithRightContent,d as __namedExportsOrder,o as default};