import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-CzdaheLX.js";function i({id:e,color:t=`info`,speed:n=`normal`,borderWidth:r=1,rounded:i=`rounded-card`,children:l,className:u,...d}){let f=(0,a.useRef)(null),[p,m]=(0,a.useState)(!0),h=(0,a.useCallback)(e=>{m(e[0]?.isIntersecting??!0)},[]);(0,a.useEffect)(()=>{let e=f.current;if(!e)return;let t=new IntersectionObserver(h,{threshold:0});return t.observe(e),()=>{t.disconnect()}},[h]);let g=(0,a.useMemo)(()=>{let e=s[t];return{"--animated-border-angle":`0deg`,"--animated-border-duration":c[n],"--animated-border-color":e,"--animated-border-width":`${r}px`,"--animated-border-play-state":p?`running`:`paused`}},[t,n,r,p]);return(0,o.jsx)(`div`,{ref:f,id:e,"data-testid":e,className:`animated-gradient-border ${i} ${u??``}`,style:g,...d,children:l})}var a,o,s,c,l=e((()=>{a=t(n(),1),o=r(),s={info:`rgb(var(--signals-bg-info))`,positive:`rgb(var(--signals-bg-positive))`,negative:`rgb(var(--signals-bg-negative))`,warning:`rgb(var(--signals-bg-warning))`,brand:`rgb(var(--global-styling-branding-brand))`,interaction:`rgb(var(--global-styling-branding-interaction))`},c={slow:`6s`,normal:`4s`,fast:`2s`},i.__docgenInfo={description:`Animated gradient border wrapper. Wraps any child element with a spinning
conic-gradient border effect. Uses design system color tokens.

Architecture: Uses a relative container with an absolutely-positioned ::before
pseudo-element for the animated gradient. The child element renders on top with
its own background — no \`bg\` prop needed. The child just needs to have a background
and matching border-radius to cover the gradient underneath.

Performance:
- \`contain: paint\` isolates repaints to this element.
- \`will-change\` on the pseudo-element only (not the container).
- IntersectionObserver pauses animation when element is offscreen.
- Style object memoized to avoid re-renders triggering re-paints.

Accessibility:
- Respects \`prefers-reduced-motion\` — shows static colored border instead.

Browser support: Chrome 85+, Safari 15.4+, Firefox 128+.
Graceful degradation: static gradient (no spin) in older browsers.`,methods:[],displayName:`AnimatedGradientBorder`,props:{id:{required:!0,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`"info" | "positive" | "negative" | "warning" | "brand" | "interaction"`,elements:[{name:`literal`,value:`"info"`},{name:`literal`,value:`"positive"`},{name:`literal`,value:`"negative"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"brand"`},{name:`literal`,value:`"interaction"`}]},description:`The color token for the animated gradient.`,defaultValue:{value:`"info"`,computed:!1}},speed:{required:!1,tsType:{name:`union`,raw:`"slow" | "normal" | "fast"`,elements:[{name:`literal`,value:`"slow"`},{name:`literal`,value:`"normal"`},{name:`literal`,value:`"fast"`}]},description:`Animation speed: slow (6s), normal (4s), fast (2s).`,defaultValue:{value:`"normal"`,computed:!1}},borderWidth:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Border width in pixels.`,defaultValue:{value:`1`,computed:!1}},rounded:{required:!1,tsType:{name:`string`},description:`Border radius class override. Defaults to rounded-card.`,defaultValue:{value:`"rounded-card"`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})),u,d,f,p,m,h,g;e((()=>{l(),u=r(),d={title:`Ready for Release/AnimatedGradientBorder`,component:i,tags:[],argTypes:{color:{control:`select`,options:[`info`,`positive`,`negative`,`warning`,`brand`,`interaction`]},speed:{control:`select`,options:[`slow`,`normal`,`fast`]},borderWidth:{control:`select`,options:[1,2]}},args:{id:`agb-demo`,color:`interaction`,speed:`normal`,borderWidth:2}},f={render:e=>(0,u.jsx)(i,{...e,children:(0,u.jsxs)(`div`,{className:`bg-card rounded-card p-6`,children:[(0,u.jsx)(`p`,{className:`text-highlight font-semibold mb-2`,children:`Featured Content`}),(0,u.jsx)(`p`,{className:`text-standard text-sm`,children:`This card has an animated gradient border that draws attention.`})]})})},p={render:()=>(0,u.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:`16px`},children:[`info`,`positive`,`negative`,`warning`,`brand`,`interaction`].map(e=>(0,u.jsx)(i,{id:`agb-${e}`,color:e,speed:`normal`,borderWidth:2,children:(0,u.jsx)(`div`,{className:`bg-card rounded-card p-4`,children:(0,u.jsx)(`p`,{className:`text-highlight font-medium text-sm`,children:e})})},e))})},m={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,gap:`16px`},children:[`slow`,`normal`,`fast`].map(e=>(0,u.jsx)(i,{id:`agb-${e}`,color:`interaction`,speed:e,borderWidth:2,children:(0,u.jsx)(`div`,{className:`bg-card rounded-card p-4`,children:(0,u.jsx)(`p`,{className:`text-highlight font-medium text-sm`,children:e})})},e))})},h={render:()=>(0,u.jsx)(`div`,{style:{width:`120px`},children:(0,u.jsx)(i,{id:`odds-boosted`,color:`positive`,speed:`fast`,borderWidth:2,rounded:`rounded-odds`,children:(0,u.jsxs)(`div`,{className:`bg-card rounded-odds p-3 text-center`,children:[(0,u.jsx)(`p`,{className:`text-positive font-bold text-lg`,children:`2.50`}),(0,u.jsx)(`p`,{className:`text-subtile text-xs`,children:`Boosted`})]})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <AnimatedGradientBorder {...args}>
      <div className="bg-card rounded-card p-6">
        <p className="text-highlight font-semibold mb-2">Featured Content</p>
        <p className="text-standard text-sm">This card has an animated gradient border that draws attention.</p>
      </div>
    </AnimatedGradientBorder>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px"
  }}>
      {(["info", "positive", "negative", "warning", "brand", "interaction"] as const).map(color => <AnimatedGradientBorder key={color} id={\`agb-\${color}\`} color={color} speed="normal" borderWidth={2}>
          <div className="bg-card rounded-card p-4">
            <p className="text-highlight font-medium text-sm">{color}</p>
          </div>
        </AnimatedGradientBorder>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px"
  }}>
      {(["slow", "normal", "fast"] as const).map(speed => <AnimatedGradientBorder key={speed} id={\`agb-\${speed}\`} color="interaction" speed={speed} borderWidth={2}>
          <div className="bg-card rounded-card p-4">
            <p className="text-highlight font-medium text-sm">{speed}</p>
          </div>
        </AnimatedGradientBorder>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "120px"
  }}>
      <AnimatedGradientBorder id="odds-boosted" color="positive" speed="fast" borderWidth={2} rounded="rounded-odds">
        <div className="bg-card rounded-odds p-3 text-center">
          <p className="text-positive font-bold text-lg">2.50</p>
          <p className="text-subtile text-xs">Boosted</p>
        </div>
      </AnimatedGradientBorder>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`AllColors`,`Speeds`,`OddsCard`]}))();export{p as AllColors,f as Default,h as OddsCard,m as Speeds,g as __namedExportsOrder,d as default};