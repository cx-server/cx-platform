import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-B76dCzL_.js";function n({color:e,label:t}){return(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,r.jsxs)(`div`,{style:{width:`24px`,height:`24px`,borderRadius:`50%`,backgroundColor:e,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[t===`Won`&&(0,r.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`white`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,r.jsx)(`path`,{d:`M5 13l4 4L19 7`})}),t===`Lost`&&(0,r.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`white`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,r.jsx)(`path`,{d:`M18 6L6 18M6 6l12 12`})}),t===`Live`&&(0,r.jsx)(`div`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,backgroundColor:`white`,animation:`pulse 1.5s infinite`}})]}),(0,r.jsx)(`span`,{className:`text-xs text-subtile`,children:t})]})}var r,i,a,o,s;e((()=>{r=t(),i={title:`Components/StatusIcon`,tags:[],decorators:[e=>(0,r.jsx)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,padding:`20px`},children:(0,r.jsx)(e,{})})]},a={render:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{color:`rgb(var(--border-highlight))`,label:`Open`}),(0,r.jsx)(n,{color:`rgb(var(--signals-bg-positive))`,label:`Won`}),(0,r.jsx)(n,{color:`rgb(var(--signals-bg-negative))`,label:`Lost`}),(0,r.jsx)(n,{color:`rgb(var(--signals-bg-warning))`,label:`Canceled`}),(0,r.jsx)(n,{color:`rgb(var(--global-styling-branding-interaction))`,label:`Live`})]})},o={render:()=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,maxWidth:`300px`},children:[(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,r.jsx)(n,{color:`rgb(var(--signals-bg-positive))`,label:``}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{className:`text-highlight text-sm font-medium`,children:`Bayern 2 – 1 Dortmund`}),(0,r.jsx)(`p`,{className:`text-subtile text-xs`,children:`Won · €15.00`})]})]}),(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,r.jsx)(n,{color:`rgb(var(--signals-bg-negative))`,label:``}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{className:`text-highlight text-sm font-medium`,children:`Arsenal 0 – 1 Chelsea`}),(0,r.jsx)(`p`,{className:`text-subtile text-xs`,children:`Lost · €10.00`})]})]}),(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,r.jsx)(n,{color:`rgb(var(--global-styling-branding-interaction))`,label:``}),(0,r.jsxs)(`div`,{children:[(0,r.jsx)(`p`,{className:`text-highlight text-sm font-medium`,children:`Real Madrid vs Barcelona`}),(0,r.jsx)(`p`,{className:`text-subtile text-xs`,children:`Live · 67'`})]})]})]})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <StatusDot color="rgb(var(--border-highlight))" label="Open" />
      <StatusDot color="rgb(var(--signals-bg-positive))" label="Won" />
      <StatusDot color="rgb(var(--signals-bg-negative))" label="Lost" />
      <StatusDot color="rgb(var(--signals-bg-warning))" label="Canceled" />
      <StatusDot color="rgb(var(--global-styling-branding-interaction))" label="Live" />
    </>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "300px"
  }}>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
        <StatusDot color="rgb(var(--signals-bg-positive))" label="" />
        <div><p className="text-highlight text-sm font-medium">Bayern 2 – 1 Dortmund</p><p className="text-subtile text-xs">Won · €15.00</p></div>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
        <StatusDot color="rgb(var(--signals-bg-negative))" label="" />
        <div><p className="text-highlight text-sm font-medium">Arsenal 0 – 1 Chelsea</p><p className="text-subtile text-xs">Lost · €10.00</p></div>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
        <StatusDot color="rgb(var(--global-styling-branding-interaction))" label="" />
        <div><p className="text-highlight text-sm font-medium">Real Madrid vs Barcelona</p><p className="text-subtile text-xs">Live · 67'</p></div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s=[`AllStates`,`InContext`]}))();export{a as AllStates,o as InContext,s as __namedExportsOrder,i as default};