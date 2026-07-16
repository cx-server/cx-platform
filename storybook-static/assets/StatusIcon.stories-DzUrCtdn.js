import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-iU2omdTy.js";import{n as i,t as a}from"./Icon-BYqkmHco.js";var o,s=t((()=>{o=``+new URL(`status-canceled-B8n7Biqs.svg`,import.meta.url).href})),c,l,u=t((()=>{n(),c=r(),l=e=>(0,c.jsxs)(`svg`,{id:`default`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 12 12`,style:{fill:`var(--icon-secondary, transparent)`},...e,children:[(0,c.jsx)(`defs`,{children:(0,c.jsx)(`style`,{children:`
      .live-pulse {
        animation: livePulse 1.8s infinite;
      }

      @keyframes livePulse {
        0% { opacity: 0.8; transform: scale(1); }
        55% { opacity: 0.8; transform: scale(1); }
        70% { opacity: 0.4; transform: scale(4.5); }
        100% { opacity: 0; transform: scale(1); }
      }
    `})}),(0,c.jsx)(`circle`,{cx:6,cy:6,r:5.25,stroke:`currentColor`,strokeWidth:1.5}),(0,c.jsx)(`circle`,{cx:6,cy:6,r:1.5,fill:`#C8102E`}),(0,c.jsx)(`circle`,{cx:6,cy:6,r:1,fill:`#C8102E`,className:`live-pulse`,"transform-origin":`50% 50%`})]})})),d,f=t((()=>{d=``+new URL(`status-lost-6ggO9J5J.svg`,import.meta.url).href})),p,m=t((()=>{p=``+new URL(`status-more-DtRE8lRH.svg`,import.meta.url).href})),h,g=t((()=>{h=``+new URL(`status-not-evaluated-CX58ooNJ.svg`,import.meta.url).href})),_,v=t((()=>{_=``+new URL(`status-open-sp5glt4r.svg`,import.meta.url).href})),y,b=t((()=>{y=``+new URL(`status-won-C6sx7HSp.svg`,import.meta.url).href}));function x({className:e=``,id:t,active:n,variant:r,href:i,...o}){let[s,c]=r?w[r]:[],u=i??s;if(!u)return null;let d={id:t,"data-testid":t,className:`${c} ${n?``:`opacity-50`} ${e}`,height:24,width:24,...o};return u===`live`?(0,S.jsx)(l,{...d}):(0,S.jsx)(a,{href:u,...d})}var S,C,w,T=t((()=>{S=r(),s(),u(),f(),m(),g(),v(),b(),i(),(function(e){e.BorderHighlight=`icon-border-highlight`,e.Positive=`icon-positive`,e.Negative=`icon-negative`,e.Subtile=`icon-subtile`,e.Neutral=`icon-neutral`,e.PrimaryBorderHighlight=`icon-primary-border-highlight`,e.SecondaryWhiteInverse=`icon-secondary-white-inverse`})(C||={}),w={open:[_,C.BorderHighlight],won:[y,C.Positive],lost:[d,C.Negative],lost_subtle:[d,C.Subtile],canceled:[o,C.Subtile],live:[`live`,`${C.PrimaryBorderHighlight} ${C.SecondaryWhiteInverse}`],more:[p,C.Subtile],not_evaluated:[h,C.BorderHighlight],won_subtle:[y,C.Neutral]}})),E=t((()=>{T()})),D=e({AllVariants:()=>B,Canceled:()=>P,InContext:()=>V,Inactive:()=>z,Live:()=>F,Lost:()=>M,LostSubtle:()=>N,More:()=>I,NotEvaluated:()=>L,Open:()=>A,Won:()=>j,WonSubtle:()=>R,__namedExportsOrder:()=>H,default:()=>k}),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=t((()=>{E(),O=r(),k={title:`Components/StatusIcon`,component:x,tags:[],argTypes:{variant:{control:`select`,options:[`open`,`won`,`lost`,`lost_subtle`,`canceled`,`live`,`more`,`not_evaluated`,`won_subtle`],description:`Status variant determining icon shape and color`},active:{control:`boolean`,description:`When false, the icon renders at 50% opacity`}},args:{id:`status-icon-demo`,variant:`open`,active:!0},decorators:[e=>(0,O.jsx)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`,padding:`20px`},children:(0,O.jsx)(e,{})})]},A={args:{id:`si-open`,variant:`open`,active:!0}},j={args:{id:`si-won`,variant:`won`,active:!0}},M={args:{id:`si-lost`,variant:`lost`,active:!0}},N={args:{id:`si-lost-subtle`,variant:`lost_subtle`,active:!0}},P={args:{id:`si-canceled`,variant:`canceled`,active:!0}},F={args:{id:`si-live`,variant:`live`,active:!0}},I={args:{id:`si-more`,variant:`more`,active:!0}},L={args:{id:`si-not-evaluated`,variant:`not_evaluated`,active:!0}},R={args:{id:`si-won-subtle`,variant:`won_subtle`,active:!0}},z={args:{id:`si-inactive`,variant:`won`,active:!1}},B={render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,O.jsx)(x,{id:`all-open`,variant:`open`,active:!0}),(0,O.jsx)(`span`,{className:`text-xs text-subtile`,children:`Open`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,O.jsx)(x,{id:`all-won`,variant:`won`,active:!0}),(0,O.jsx)(`span`,{className:`text-xs text-subtile`,children:`Won`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,O.jsx)(x,{id:`all-lost`,variant:`lost`,active:!0}),(0,O.jsx)(`span`,{className:`text-xs text-subtile`,children:`Lost`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,O.jsx)(x,{id:`all-canceled`,variant:`canceled`,active:!0}),(0,O.jsx)(`span`,{className:`text-xs text-subtile`,children:`Canceled`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,O.jsx)(x,{id:`all-live`,variant:`live`,active:!0}),(0,O.jsx)(`span`,{className:`text-xs text-subtile`,children:`Live`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,O.jsx)(x,{id:`all-more`,variant:`more`,active:!0}),(0,O.jsx)(`span`,{className:`text-xs text-subtile`,children:`More`})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,O.jsx)(x,{id:`all-not-eval`,variant:`not_evaluated`,active:!0}),(0,O.jsx)(`span`,{className:`text-xs text-subtile`,children:`Not Evaluated`})]})]})},V={render:()=>(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`,maxWidth:`300px`},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,O.jsx)(x,{id:`ctx-won`,variant:`won`,active:!0}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-highlight text-sm font-medium`,children:`Bayern 2 – 1 Dortmund`}),(0,O.jsx)(`p`,{className:`text-subtile text-xs`,children:`Won · €15.00`})]})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,O.jsx)(x,{id:`ctx-lost`,variant:`lost`,active:!0}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-highlight text-sm font-medium`,children:`Arsenal 0 – 1 Chelsea`}),(0,O.jsx)(`p`,{className:`text-subtile text-xs`,children:`Lost · €10.00`})]})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,O.jsx)(x,{id:`ctx-live`,variant:`live`,active:!0}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-highlight text-sm font-medium`,children:`Real Madrid vs Barcelona`}),(0,O.jsx)(`p`,{className:`text-subtile text-xs`,children:`Live · 67'`})]})]})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-open",
    variant: "open",
    active: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-won",
    variant: "won",
    active: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-lost",
    variant: "lost",
    active: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-lost-subtle",
    variant: "lost_subtle",
    active: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-canceled",
    variant: "canceled",
    active: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-live",
    variant: "live",
    active: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-more",
    variant: "more",
    active: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-not-evaluated",
    variant: "not_evaluated",
    active: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-won-subtle",
    variant: "won_subtle",
    active: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    id: "si-inactive",
    variant: "won",
    active: false
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center",
    flexWrap: "wrap"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px"
    }}>
        <StatusIcon id="all-open" variant="open" active />
        <span className="text-xs text-subtile">Open</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px"
    }}>
        <StatusIcon id="all-won" variant="won" active />
        <span className="text-xs text-subtile">Won</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px"
    }}>
        <StatusIcon id="all-lost" variant="lost" active />
        <span className="text-xs text-subtile">Lost</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px"
    }}>
        <StatusIcon id="all-canceled" variant="canceled" active />
        <span className="text-xs text-subtile">Canceled</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px"
    }}>
        <StatusIcon id="all-live" variant="live" active />
        <span className="text-xs text-subtile">Live</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px"
    }}>
        <StatusIcon id="all-more" variant="more" active />
        <span className="text-xs text-subtile">More</span>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px"
    }}>
        <StatusIcon id="all-not-eval" variant="not_evaluated" active />
        <span className="text-xs text-subtile">Not Evaluated</span>
      </div>
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
        <StatusIcon id="ctx-won" variant="won" active />
        <div><p className="text-highlight text-sm font-medium">Bayern 2 – 1 Dortmund</p><p className="text-subtile text-xs">Won · €15.00</p></div>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
        <StatusIcon id="ctx-lost" variant="lost" active />
        <div><p className="text-highlight text-sm font-medium">Arsenal 0 – 1 Chelsea</p><p className="text-subtile text-xs">Lost · €10.00</p></div>
      </div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
        <StatusIcon id="ctx-live" variant="live" active />
        <div><p className="text-highlight text-sm font-medium">Real Madrid vs Barcelona</p><p className="text-subtile text-xs">Live · 67'</p></div>
      </div>
    </div>
}`,...V.parameters?.docs?.source}}},H=[`Open`,`Won`,`Lost`,`LostSubtle`,`Canceled`,`Live`,`More`,`NotEvaluated`,`WonSubtle`,`Inactive`,`AllVariants`,`InContext`]}));U();export{B as AllVariants,P as Canceled,V as InContext,z as Inactive,F as Live,M as Lost,N as LostSubtle,I as More,L as NotEvaluated,A as Open,j as Won,R as WonSubtle,H as __namedExportsOrder,k as default,U as n,D as t};