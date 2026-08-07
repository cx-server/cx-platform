import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-Cf3IHaYg.js";import{n as i,t as a}from"./Alert-BhGKSeV-.js";import{n as o,t as s}from"./Badge-CGFMSMPa.js";import{n as c,t as l}from"./Button-CqFoFveo.js";import{n as u,t as d}from"./Card-DOEHiJ9C.js";import{n as f,t as p}from"./Toast-CFfQl6tr.js";var m=e((()=>{}));function h(){return(0,C.jsx)(u,{id:`motion-card`,children:(0,C.jsxs)(`div`,{className:`flex flex-col gap-2 min-w-[260px]`,children:[(0,C.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,C.jsx)(`span`,{className:`text-highlight font-semibold text-sm`,children:`Bayern vs. Dortmund`}),(0,C.jsx)(o,{id:`live`,variant:`live`,children:`LIVE`})]}),(0,C.jsx)(`span`,{className:`text-standard text-xs`,children:`Bundesliga · Matchday 12`})]})})}function g(){return(0,C.jsx)(f,{id:`motion-toast`,status:`positive`,show:!0,children:`Deposit of €50.00 confirmed`})}function _(){return(0,C.jsx)(`div`,{style:{width:`300px`},children:(0,C.jsx)(i,{id:`motion-alert`,variant:`info`,header:`Bet placed`,children:`Your bet has been added to the betslip.`})})}function v(){return(0,C.jsxs)(`div`,{className:`flex gap-3 items-center`,children:[(0,C.jsx)(c,{id:`btn-p`,variant:`primary`,autoWidth:!0,children:`Place Bet`}),(0,C.jsx)(c,{id:`btn-o`,variant:`outline`,autoWidth:!0,children:`Cancel`})]})}function y(){return(0,C.jsxs)(`div`,{className:`bg-card rounded-xl p-5 w-[280px] shadow-xl border border-subtile`,children:[(0,C.jsx)(`div`,{className:`text-base font-semibold text-highlight mb-2`,children:`Confirm Cashout`}),(0,C.jsx)(`div`,{className:`text-sm text-standard mb-4`,children:`Cash out €42.50 now?`}),(0,C.jsxs)(`div`,{className:`flex gap-2 justify-end`,children:[(0,C.jsx)(c,{id:`d-c`,variant:`outline`,size:`sm`,autoWidth:!0,children:`Cancel`}),(0,C.jsx)(c,{id:`d-ok`,variant:`primary`,size:`sm`,autoWidth:!0,children:`Cash Out`})]})]})}function b(){return(0,C.jsx)(f,{id:`motion-notif`,status:`info`,show:!0,children:`New offer available: Free Bet €10`})}function x(){let[e,t]=(0,S.useState)(`normal`),[n,r]=(0,S.useState)(`enter`),[i,a]=(0,S.useState)(`slide-up`),[o,s]=(0,S.useState)(`card`),[c,l]=(0,S.useState)(`out`),u=(0,S.useRef)(),d=(0,S.useRef)(),f=(0,S.useCallback)(()=>{u.current&&clearInterval(u.current),d.current&&clearTimeout(d.current);let t=T[e].ms,n=t+Math.max(t*2,600);l(`out`),d.current=setTimeout(()=>{l(`in`)},50),u.current=setInterval(()=>{l(`out`),setTimeout(()=>{l(`in`)},t+200)},n*2)},[e]);(0,S.useEffect)(()=>(f(),()=>{u.current&&clearInterval(u.current),d.current&&clearTimeout(d.current)}),[f,i,n,o]);let p=O[o].component,m=D[i],h={transition:`all ${T[e].value} ${E[n].value}`,opacity:c===`in`?m.opacity.to:m.opacity.from,transform:c===`in`?m.transform.to:m.transform.from},g=`transition: all ${T[e].value} ${E[n].value};`,_=`transition-all ${T[e].tw} ${E[n].tw}`;return(0,C.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`,maxWidth:`760px`},children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h2`,{className:`text-xl font-semibold text-highlight`,children:`Motion Playground`}),(0,C.jsx)(`p`,{className:`text-sm text-subtile mt-1`,children:`Proposed motion token standard. Pick any combination — the element loops continuously so you can feel the transition.`})]}),(0,C.jsxs)(`div`,{className:`motion-controls`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Element`}),(0,C.jsx)(`div`,{className:`motion-selector`,children:Object.keys(O).map(e=>(0,C.jsx)(`button`,{type:`button`,className:`motion-chip`,"data-active":o===e,onClick:()=>s(e),children:O[e].label},e))})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Pattern`}),(0,C.jsx)(`div`,{className:`motion-selector`,children:Object.keys(D).map(e=>(0,C.jsx)(`button`,{type:`button`,className:`motion-chip`,"data-active":i===e,onClick:()=>a(e),children:D[e].label},e))})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Duration`}),(0,C.jsx)(`div`,{className:`motion-selector`,children:Object.keys(T).map(n=>(0,C.jsxs)(`button`,{type:`button`,className:`motion-chip`,"data-active":e===n,onClick:()=>t(n),children:[(0,C.jsx)(`span`,{children:n}),(0,C.jsx)(`span`,{className:`motion-chip-sub`,children:T[n].value})]},n))})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Easing`}),(0,C.jsx)(`div`,{className:`motion-selector`,children:Object.keys(E).map(e=>(0,C.jsxs)(`button`,{type:`button`,className:`motion-chip`,"data-active":n===e,onClick:()=>r(e),children:[(0,C.jsx)(`span`,{children:e}),(0,C.jsx)(`span`,{className:`motion-chip-sub`,children:E[e].desc})]},e))})]})]}),(0,C.jsx)(`div`,{className:`motion-stage`,children:(0,C.jsx)(`div`,{className:`motion-target`,style:h,children:(0,C.jsx)(p,{})})}),(0,C.jsxs)(`div`,{className:`motion-code`,children:[(0,C.jsxs)(`div`,{className:`motion-code-row`,children:[(0,C.jsx)(`span`,{className:`motion-code-key`,children:`CSS`}),(0,C.jsx)(`span`,{className:`motion-code-value`,children:g})]}),(0,C.jsxs)(`div`,{className:`motion-code-row`,children:[(0,C.jsx)(`span`,{className:`motion-code-key`,children:`Tailwind`}),(0,C.jsx)(`span`,{className:`motion-code-value`,children:_})]}),(0,C.jsxs)(`div`,{className:`motion-code-row`,children:[(0,C.jsx)(`span`,{className:`motion-code-key`,children:`Tokens`}),(0,C.jsxs)(`span`,{className:`motion-code-value`,children:[`--motion-duration-`,e,` · --motion-ease-`,n]})]})]}),(0,C.jsxs)(`div`,{className:`motion-controls`,style:{gap:`12px`},children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Recommended Combinations`}),(0,C.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`16px`},children:[{use:`Dialog / Sheet`,combo:`slide-up · normal · enter`},{use:`Toast / Alert`,combo:`fade · fast · standard`},{use:`Button Feedback`,combo:`scale · instant · standard`},{use:`Rewards`,combo:`scale-bounce · deliberate · bounce`},{use:`Page Transition`,combo:`slide-left · normal · enter`},{use:`Dropdown`,combo:`scale · fast · enter`}].map(e=>(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`text-xs font-semibold text-interaction mb-0.5`,children:e.use}),(0,C.jsx)(`div`,{className:`text-xs text-standard`,children:e.combo})]},e.use))})]})]})}var S,C,w,T,E,D,O,k,A,j;e((()=>{S=t(n(),1),l(),d(),p(),a(),s(),m(),C=r(),w={title:`Foundations/Motion`,tags:[],parameters:{layout:`padded`}},T={instant:{value:`100ms`,ms:100,tw:`duration-100`,desc:`Micro`},fast:{value:`200ms`,ms:200,tw:`duration-200`,desc:`Feedback`},normal:{value:`300ms`,ms:300,tw:`duration-300`,desc:`Standard`},slow:{value:`500ms`,ms:500,tw:`duration-500`,desc:`Movement`},deliberate:{value:`800ms`,ms:800,tw:`duration-800`,desc:`Emphasis`}},E={standard:{value:`cubic-bezier(0.2, 0, 0, 1)`,tw:`ease-standard`,desc:`Default`},enter:{value:`cubic-bezier(0, 0, 0, 1)`,tw:`ease-enter`,desc:`Appearing`},exit:{value:`cubic-bezier(0.2, 0, 1, 1)`,tw:`ease-exit`,desc:`Leaving`},bounce:{value:`cubic-bezier(0.34, 1.56, 0.64, 1)`,tw:`ease-bounce`,desc:`Playful`}},D={fade:{label:`Fade`,transform:{from:`none`,to:`none`},opacity:{from:0,to:1}},"slide-up":{label:`Slide Up`,transform:{from:`translateY(30px)`,to:`translateY(0)`},opacity:{from:0,to:1}},"slide-down":{label:`Slide Down`,transform:{from:`translateY(-30px)`,to:`translateY(0)`},opacity:{from:0,to:1}},"slide-left":{label:`Slide Left`,transform:{from:`translateX(40px)`,to:`translateX(0)`},opacity:{from:0,to:1}},"slide-right":{label:`Slide Right`,transform:{from:`translateX(-40px)`,to:`translateX(0)`},opacity:{from:0,to:1}},scale:{label:`Scale`,transform:{from:`scale(0.85)`,to:`scale(1)`},opacity:{from:0,to:1}},"scale-bounce":{label:`Scale Bounce`,transform:{from:`scale(0)`,to:`scale(1)`},opacity:{from:0,to:1}}},O={card:{label:`Card`,component:h},dialog:{label:`Dialog`,component:y},toast:{label:`Toast`,component:g},alert:{label:`Alert`,component:_},button:{label:`Button`,component:v},notification:{label:`Notification`,component:b}},k={render:()=>(0,C.jsx)(x,{})},A={render:()=>(0,C.jsxs)(`div`,{style:{maxWidth:`680px`,display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h2`,{className:`text-xl font-semibold text-highlight`,children:`Motion Token Reference`}),(0,C.jsx)(`p`,{className:`text-sm text-subtile mt-1`,children:`The complete proposed scale. Named, constrained tokens that replace arbitrary values.`})]}),(0,C.jsxs)(`div`,{className:`motion-controls`,children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Duration Scale`}),(0,C.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`14px`},children:Object.keys(T).map(e=>(0,C.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`100px 60px 1fr 100px`,alignItems:`center`,gap:`12px`},children:[(0,C.jsx)(`code`,{className:`text-xs text-interaction font-medium`,children:e}),(0,C.jsx)(`span`,{className:`text-xs text-highlight font-semibold`,children:T[e].value}),(0,C.jsx)(`div`,{style:{height:`6px`,borderRadius:`3px`,background:`rgb(var(--bg-input))`,overflow:`hidden`},children:(0,C.jsx)(`div`,{style:{height:`100%`,width:`${T[e].ms/800*100}%`,background:`rgb(var(--text-interaction))`,borderRadius:`3px`,transition:`width 300ms ease`}})}),(0,C.jsx)(`span`,{className:`text-[11px] text-subtile text-right`,children:T[e].desc})]},e))})]}),(0,C.jsxs)(`div`,{className:`motion-controls`,children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Easing Curves`}),(0,C.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:Object.keys(E).map(e=>(0,C.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`80px 1fr 90px`,alignItems:`center`,gap:`12px`},children:[(0,C.jsx)(`code`,{className:`text-xs text-interaction font-medium`,children:e}),(0,C.jsx)(`code`,{className:`text-[11px] text-standard`,style:{fontFamily:`monospace`},children:E[e].value}),(0,C.jsx)(`span`,{className:`text-[11px] text-subtile text-right`,children:E[e].desc})]},e))})]}),(0,C.jsxs)(`div`,{className:`motion-controls`,children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Pattern Guide — When to Use What`}),(0,C.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0`},children:[{ctx:`Enter (Dialog, Sheet, Toast)`,dur:`normal`,ease:`enter`,pat:`slide-up / fade`},{ctx:`Exit (Dismiss, Close)`,dur:`fast`,ease:`exit`,pat:`fade / slide-down`},{ctx:`Feedback (Button, Toggle)`,dur:`fast`,ease:`standard`,pat:`scale`},{ctx:`Loading (Skeleton, Spinner)`,dur:`1.5s`,ease:`linear`,pat:`shimmer / rotate`},{ctx:`Celebration (Reward, Badge)`,dur:`deliberate`,ease:`bounce`,pat:`scale-bounce`},{ctx:`Navigation (Page, Tab)`,dur:`normal`,ease:`enter`,pat:`slide-left / slide-right`}].map((e,t)=>(0,C.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 80px 80px 130px`,gap:`12px`,padding:`10px 0`,borderTop:t>0?`1px solid rgb(var(--border-subtile))`:`none`},children:[(0,C.jsx)(`span`,{className:`text-xs text-highlight font-medium`,children:e.ctx}),(0,C.jsx)(`code`,{className:`text-[11px] text-interaction`,children:e.dur}),(0,C.jsx)(`code`,{className:`text-[11px] text-interaction`,children:e.ease}),(0,C.jsx)(`span`,{className:`text-[11px] text-subtile`,children:e.pat})]},e.ctx))})]}),(0,C.jsxs)(`div`,{className:`motion-controls`,children:[(0,C.jsx)(`div`,{className:`motion-label`,children:`Implementation (Tailwind Config)`}),(0,C.jsx)(`div`,{className:`motion-code`,style:{fontSize:`11px`,lineHeight:`1.7`},children:(0,C.jsx)(`pre`,{style:{margin:0,whiteSpace:`pre-wrap`,color:`rgb(var(--text-highlight))`},children:`// tailwind.config.ts → theme.extend
transitionDuration: {
  instant: "100ms",
  fast: "200ms",
  normal: "300ms",
  slow: "500ms",
  deliberate: "800ms",
},
transitionTimingFunction: {
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  enter: "cubic-bezier(0, 0, 0, 1)",
  exit: "cubic-bezier(0.2, 0, 1, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
},`})})]})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <MotionPlayground />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "680px",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <div>
        <h2 className="text-xl font-semibold text-highlight">Motion Token Reference</h2>
        <p className="text-sm text-subtile mt-1">
          The complete proposed scale. Named, constrained tokens that replace arbitrary values.
        </p>
      </div>

      {/* Duration visual */}
      <div className="motion-controls">
        <div className="motion-label">Duration Scale</div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px"
      }}>
          {(Object.keys(DURATIONS) as DurationKey[]).map(key => <div key={key} style={{
          display: "grid",
          gridTemplateColumns: "100px 60px 1fr 100px",
          alignItems: "center",
          gap: "12px"
        }}>
              <code className="text-xs text-interaction font-medium">{key}</code>
              <span className="text-xs text-highlight font-semibold">{DURATIONS[key].value}</span>
              <div style={{
            height: "6px",
            borderRadius: "3px",
            background: "rgb(var(--bg-input))",
            overflow: "hidden"
          }}>
                <div style={{
              height: "100%",
              width: \`\${DURATIONS[key].ms / 800 * 100}%\`,
              background: "rgb(var(--text-interaction))",
              borderRadius: "3px",
              transition: "width 300ms ease"
            }} />
              </div>
              <span className="text-[11px] text-subtile text-right">{DURATIONS[key].desc}</span>
            </div>)}
        </div>
      </div>

      {/* Easings */}
      <div className="motion-controls">
        <div className="motion-label">Easing Curves</div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
          {(Object.keys(EASINGS) as EasingKey[]).map(key => <div key={key} style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr 90px",
          alignItems: "center",
          gap: "12px"
        }}>
              <code className="text-xs text-interaction font-medium">{key}</code>
              <code className="text-[11px] text-standard" style={{
            fontFamily: "monospace"
          }}>{EASINGS[key].value}</code>
              <span className="text-[11px] text-subtile text-right">{EASINGS[key].desc}</span>
            </div>)}
        </div>
      </div>

      {/* Pattern guide */}
      <div className="motion-controls">
        <div className="motion-label">Pattern Guide — When to Use What</div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "0"
      }}>
          {[{
          ctx: "Enter (Dialog, Sheet, Toast)",
          dur: "normal",
          ease: "enter",
          pat: "slide-up / fade"
        }, {
          ctx: "Exit (Dismiss, Close)",
          dur: "fast",
          ease: "exit",
          pat: "fade / slide-down"
        }, {
          ctx: "Feedback (Button, Toggle)",
          dur: "fast",
          ease: "standard",
          pat: "scale"
        }, {
          ctx: "Loading (Skeleton, Spinner)",
          dur: "1.5s",
          ease: "linear",
          pat: "shimmer / rotate"
        }, {
          ctx: "Celebration (Reward, Badge)",
          dur: "deliberate",
          ease: "bounce",
          pat: "scale-bounce"
        }, {
          ctx: "Navigation (Page, Tab)",
          dur: "normal",
          ease: "enter",
          pat: "slide-left / slide-right"
        }].map((row, i) => <div key={row.ctx} style={{
          display: "grid",
          gridTemplateColumns: "1fr 80px 80px 130px",
          gap: "12px",
          padding: "10px 0",
          borderTop: i > 0 ? "1px solid rgb(var(--border-subtile))" : "none"
        }}>
              <span className="text-xs text-highlight font-medium">{row.ctx}</span>
              <code className="text-[11px] text-interaction">{row.dur}</code>
              <code className="text-[11px] text-interaction">{row.ease}</code>
              <span className="text-[11px] text-subtile">{row.pat}</span>
            </div>)}
        </div>
      </div>

      {/* Tailwind config snippet */}
      <div className="motion-controls">
        <div className="motion-label">Implementation (Tailwind Config)</div>
        <div className="motion-code" style={{
        fontSize: "11px",
        lineHeight: "1.7"
      }}>
          <pre style={{
          margin: 0,
          whiteSpace: "pre-wrap",
          color: "rgb(var(--text-highlight))"
        }}>{\`// tailwind.config.ts → theme.extend
transitionDuration: {
  instant: "100ms",
  fast: "200ms",
  normal: "300ms",
  slow: "500ms",
  deliberate: "800ms",
},
transitionTimingFunction: {
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  enter: "cubic-bezier(0, 0, 0, 1)",
  exit: "cubic-bezier(0.2, 0, 1, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
},\`}</pre>
        </div>
      </div>
    </div>
}`,...A.parameters?.docs?.source}}},j=[`Playground`,`TokenReference`]}))();export{k as Playground,A as TokenReference,j as __namedExportsOrder,w as default};