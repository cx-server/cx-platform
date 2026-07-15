import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-B76dCzL_.js";function n({variant:e=`brand`,className:t=``,children:n,...a}){let o=i[e];return(0,r.jsx)(`div`,{className:`px-1.5 py-1 flex items-center gap-0.5 rounded-pills text-2xs font-semibold overflow-hidden whitespace-nowrap ${o} ${t}`,...a,children:n})}var r,i,a=e((()=>{r=t(),i={brand:`bg-brand text-white`,card:`bg-card text-highlight`,positive:`bg-positive text-white`}})),o=e((()=>{a()})),s,c,l,u,d,f,p,m;e((()=>{o(),s=t(),c={title:`Components/Tag`,component:n,tags:[],argTypes:{variant:{control:`select`,options:[`brand`,`card`,`positive`]}},args:{variant:`brand`}},l={args:{variant:`brand`,children:`NEW`}},u={args:{variant:`card`,children:`Popular`}},d={args:{variant:`positive`,children:`LIVE`}},f={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,s.jsx)(n,{variant:`brand`,children:`NEW`}),(0,s.jsx)(n,{variant:`card`,children:`Popular`}),(0,s.jsx)(n,{variant:`positive`,children:`LIVE`})]})},p={render:()=>(0,s.jsxs)(`div`,{className:`bg-card rounded-card p-4 relative`,style:{width:`200px`},children:[(0,s.jsx)(`div`,{style:{position:`absolute`,top:`8px`,right:`8px`},children:(0,s.jsx)(n,{variant:`positive`,children:`LIVE`})}),(0,s.jsx)(`p`,{className:`text-highlight font-medium mt-6`,children:`Bayern vs Dortmund`}),(0,s.jsx)(`p`,{className:`text-subtile text-xs`,children:`Bundesliga`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "brand",
    children: "NEW"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "card",
    children: "Popular"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    children: "LIVE"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px"
  }}>
      <Tag variant="brand">NEW</Tag>
      <Tag variant="card">Popular</Tag>
      <Tag variant="positive">LIVE</Tag>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Brand`,`Card`,`Positive`,`AllVariants`,`OnCard`]}))();export{f as AllVariants,l as Brand,u as Card,p as OnCard,d as Positive,m as __namedExportsOrder,c as default};