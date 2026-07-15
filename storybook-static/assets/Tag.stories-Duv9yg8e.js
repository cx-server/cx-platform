import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-DR8dukPV.js";function r({variant:e=`brand`,className:t=``,children:n,...r}){let o=a[e];return(0,i.jsx)(`div`,{className:`px-1.5 py-1 flex items-center gap-0.5 rounded-pills text-2xs font-semibold overflow-hidden whitespace-nowrap ${o} ${t}`,...r,children:n})}var i,a,o=t((()=>{i=n(),a={brand:`bg-brand text-white`,card:`bg-card text-highlight`,positive:`bg-positive text-white`}})),s=t((()=>{o()})),c=e({AllVariants:()=>m,Brand:()=>d,Card:()=>f,OnCard:()=>h,Positive:()=>p,__namedExportsOrder:()=>g,default:()=>u}),l,u,d,f,p,m,h,g,_=t((()=>{s(),l=n(),u={title:`Components/Tag`,component:r,tags:[],argTypes:{variant:{control:`select`,options:[`brand`,`card`,`positive`]}},args:{variant:`brand`}},d={args:{variant:`brand`,children:`NEW`}},f={args:{variant:`card`,children:`Popular`}},p={args:{variant:`positive`,children:`LIVE`}},m={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,l.jsx)(r,{variant:`brand`,children:`NEW`}),(0,l.jsx)(r,{variant:`card`,children:`Popular`}),(0,l.jsx)(r,{variant:`positive`,children:`LIVE`})]})},h={render:()=>(0,l.jsxs)(`div`,{className:`bg-card rounded-card p-4 relative`,style:{width:`200px`},children:[(0,l.jsx)(`div`,{style:{position:`absolute`,top:`8px`,right:`8px`},children:(0,l.jsx)(r,{variant:`positive`,children:`LIVE`})}),(0,l.jsx)(`p`,{className:`text-highlight font-medium mt-6`,children:`Bayern vs Dortmund`}),(0,l.jsx)(`p`,{className:`text-subtile text-xs`,children:`Bundesliga`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "brand",
    children: "NEW"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "card",
    children: "Popular"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    children: "LIVE"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px"
  }}>
      <Tag variant="brand">NEW</Tag>
      <Tag variant="card">Popular</Tag>
      <Tag variant="positive">LIVE</Tag>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-card rounded-card p-4 relative" style={{
    width: "200px"
  }}>
      <div style={{
      position: "absolute",
      top: "8px",
      right: "8px"
    }}>
        <Tag variant="positive">LIVE</Tag>
      </div>
      <p className="text-highlight font-medium mt-6">Bayern vs Dortmund</p>
      <p className="text-subtile text-xs">Bundesliga</p>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Brand`,`Card`,`Positive`,`AllVariants`,`OnCard`]}));_();export{m as AllVariants,d as Brand,f as Card,h as OnCard,p as Positive,g as __namedExportsOrder,u as default,_ as n,c as t};