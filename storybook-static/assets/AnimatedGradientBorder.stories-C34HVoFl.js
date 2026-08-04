import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-DvPzYsFB.js";function i({id:e,color:t=`info`,speed:n=`normal`,borderWidth:r=2,radius:i=12,bg:u=`card`,children:d,className:f,style:p,...m}){let h=(0,a.useRef)(null),g=(0,a.useRef)(0),[_,v]=(0,a.useState)(!0),[y,b]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);b(e.matches);let t=e=>b(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let x=(0,a.useCallback)(e=>{v(e[0]?.isIntersecting??!0)},[]);(0,a.useEffect)(()=>{let e=h.current;if(!e)return;let t=new IntersectionObserver(x,{threshold:0});return t.observe(e),()=>t.disconnect()},[x]);let[S,C]=s[t],w=c[u],T=l[n];return(0,a.useEffect)(()=>{let e=h.current;if(!e)return;let t=`linear-gradient(${w}, ${w}) padding-box`;if(y||!_){e.style.background=[t,`conic-gradient(from 135deg, ${C} 0%, ${S} 25%, ${C} 50%, ${S} 75%, ${C} 100%) border-box`].join(`, `);return}let n=null;function r(i){n||=i;let a=(i-n)/T*360%360;e.style.background=[t,`conic-gradient(from ${a}deg, ${C} 80%, ${S} 86%, ${S} 90%, ${S} 94%, ${C} 100%) border-box`].join(`, `),g.current=requestAnimationFrame(r)}return g.current=requestAnimationFrame(r),()=>cancelAnimationFrame(g.current)},[_,y,S,C,w,T]),(0,o.jsx)(`div`,{ref:h,id:e,"data-testid":e,className:f,style:{borderRadius:`${i}px`,border:`${r}px solid transparent`,...p},...m,children:d})}var a,o,s,c,l,u=e((()=>{a=t(n(),1),o=r(),s={info:[`rgb(var(--signals-bg-info))`,`rgb(var(--signals-bg-info) / 0.3)`],positive:[`rgb(var(--signals-bg-positive))`,`rgb(var(--signals-bg-positive) / 0.3)`],negative:[`rgb(var(--signals-bg-negative))`,`rgb(var(--signals-bg-negative) / 0.3)`],warning:[`rgb(var(--signals-bg-warning))`,`rgb(var(--signals-bg-warning) / 0.3)`],brand:[`rgb(var(--global-styling-branding-brand))`,`rgb(var(--global-styling-branding-brand) / 0.3)`]},c={card:`rgb(var(--bg-card))`,surface:`rgb(var(--bg-surface))`,white:`rgb(var(--bg-white, 255 255 255))`,input:`rgb(var(--bg-input))`},l={slow:6e3,normal:4e3,fast:2e3},i.__docgenInfo={description:``,methods:[],displayName:`AnimatedGradientBorder`,props:{id:{required:!0,tsType:{name:`string`},description:``},color:{required:!1,tsType:{name:`union`,raw:`"info" | "positive" | "negative" | "warning" | "brand"`,elements:[{name:`literal`,value:`"info"`},{name:`literal`,value:`"positive"`},{name:`literal`,value:`"negative"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"brand"`}]},description:``,defaultValue:{value:`"info"`,computed:!1}},speed:{required:!1,tsType:{name:`union`,raw:`"slow" | "normal" | "fast"`,elements:[{name:`literal`,value:`"slow"`},{name:`literal`,value:`"normal"`},{name:`literal`,value:`"fast"`}]},description:``,defaultValue:{value:`"normal"`,computed:!1}},borderWidth:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`}]},description:``,defaultValue:{value:`2`,computed:!1}},radius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`12`,computed:!1}},bg:{required:!1,tsType:{name:`union`,raw:`"card" | "surface" | "white" | "input"`,elements:[{name:`literal`,value:`"card"`},{name:`literal`,value:`"surface"`},{name:`literal`,value:`"white"`},{name:`literal`,value:`"input"`}]},description:``,defaultValue:{value:`"card"`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})),d,f,p,m,h,g,_,v,y;e((()=>{u(),d=r(),f={title:`Ready for Release/AnimatedGradientBorder`,component:i,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Animated conic-gradient border using the background-origin technique. A transparent border reveals an animated conic-gradient underneath, while the content area is masked with a solid background. The highlight travels around the border smoothly.`}}},argTypes:{color:{control:`select`,options:[`info`,`positive`,`negative`,`warning`,`brand`],description:`Gradient highlight color from design system tokens.`},speed:{control:`select`,options:[`slow`,`normal`,`fast`],description:`Animation speed: slow (6s), normal (4s), fast (2s).`},borderWidth:{control:`select`,options:[1,2,3],description:`Border thickness in pixels.`},radius:{control:{type:`range`,min:0,max:24,step:2},description:`Border radius in pixels.`},bg:{control:`select`,options:[`card`,`surface`,`white`,`input`],description:`Background fill — must match the surface the component sits on.`}},args:{id:`animated-border-demo`,color:`info`,speed:`normal`,borderWidth:2,radius:12,bg:`card`}},p={args:{id:`default-animated-border`,className:`w-72`,children:(0,d.jsxs)(`div`,{className:`p-6`,children:[(0,d.jsx)(`h3`,{className:`font-semibold text-lg mb-1 text-standard`,children:`Animated Border`}),(0,d.jsx)(`p`,{className:`text-sm text-subtile`,children:`The highlight travels around the border continuously.`})]})}},m={render:()=>(0,d.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:[`info`,`positive`,`negative`,`warning`,`brand`].map(e=>(0,d.jsx)(i,{id:`border-${e}`,color:e,className:`w-44`,children:(0,d.jsx)(`div`,{className:`p-4 text-center`,children:(0,d.jsx)(`p`,{className:`text-sm font-medium text-standard capitalize`,children:e})})},e))})},h={render:()=>(0,d.jsx)(`div`,{className:`flex gap-4`,children:[`slow`,`normal`,`fast`].map(e=>(0,d.jsx)(i,{id:`border-${e}`,color:`info`,speed:e,children:(0,d.jsx)(`div`,{className:`p-4 text-center`,children:(0,d.jsx)(`p`,{className:`text-sm font-medium text-standard capitalize`,children:e})})},e))})},g={args:{id:`thick-border`,color:`brand`,borderWidth:3,speed:`fast`,radius:16,className:`w-72`,children:(0,d.jsxs)(`div`,{className:`p-6`,children:[(0,d.jsx)(`h3`,{className:`font-semibold text-lg mb-1 text-standard`,children:`3px Border`}),(0,d.jsx)(`p`,{className:`text-sm text-subtile`,children:`Thicker border for prominent highlights.`})]})}},_={parameters:{backgrounds:{default:`Tipico Surface`}},args:{id:`surface-border`,color:`positive`,bg:`surface`,className:`w-72`,children:(0,d.jsxs)(`div`,{className:`p-6`,children:[(0,d.jsx)(`h3`,{className:`font-semibold text-lg mb-1 text-standard`,children:`On Surface`}),(0,d.jsx)(`p`,{className:`text-sm text-subtile`,children:`Uses bg="surface" to match the page background.`})]})}},v={render:()=>(0,d.jsx)(i,{id:`promo-card`,color:`brand`,speed:`normal`,borderWidth:2,radius:16,className:`w-80`,children:(0,d.jsxs)(`div`,{className:`p-6`,children:[(0,d.jsxs)(`div`,{className:`flex justify-between items-center mb-4`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{className:`text-2xl font-bold text-standard mb-0.5`,children:`17,479`}),(0,d.jsx)(`div`,{className:`text-sm text-subtile`,children:`Monthly visits`})]}),(0,d.jsx)(`span`,{className:`text-xs font-medium text-[rgb(var(--signals-bg-positive))] bg-[rgb(var(--signals-bg-positive)/0.1)] px-2 py-1 rounded-full`,children:`+48%`})]}),(0,d.jsx)(`div`,{className:`h-px bg-[rgb(var(--border-standard))] my-3`}),(0,d.jsx)(`p`,{className:`text-xs text-subtile`,children:`Updated 2 hours ago`})]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "default-animated-border",
    className: "w-72",
    children: <div className="p-6">
        <h3 className="font-semibold text-lg mb-1 text-standard">Animated Border</h3>
        <p className="text-sm text-subtile">The highlight travels around the border continuously.</p>
      </div>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      {(["info", "positive", "negative", "warning", "brand"] as const).map(color => <AnimatedGradientBorder key={color} id={\`border-\${color}\`} color={color} className="w-44">
          <div className="p-4 text-center">
            <p className="text-sm font-medium text-standard capitalize">{color}</p>
          </div>
        </AnimatedGradientBorder>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["slow", "normal", "fast"] as const).map(speed => <AnimatedGradientBorder key={speed} id={\`border-\${speed}\`} color="info" speed={speed}>
          <div className="p-4 text-center">
            <p className="text-sm font-medium text-standard capitalize">{speed}</p>
          </div>
        </AnimatedGradientBorder>)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "thick-border",
    color: "brand",
    borderWidth: 3,
    speed: "fast",
    radius: 16,
    className: "w-72",
    children: <div className="p-6">
        <h3 className="font-semibold text-lg mb-1 text-standard">3px Border</h3>
        <p className="text-sm text-subtile">Thicker border for prominent highlights.</p>
      </div>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "Tipico Surface"
    }
  },
  args: {
    id: "surface-border",
    color: "positive",
    bg: "surface",
    className: "w-72",
    children: <div className="p-6">
        <h3 className="font-semibold text-lg mb-1 text-standard">On Surface</h3>
        <p className="text-sm text-subtile">Uses bg="surface" to match the page background.</p>
      </div>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AnimatedGradientBorder id="promo-card" color="brand" speed="normal" borderWidth={2} radius={16} className="w-80">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-2xl font-bold text-standard mb-0.5">17,479</div>
            <div className="text-sm text-subtile">Monthly visits</div>
          </div>
          <span className="text-xs font-medium text-[rgb(var(--signals-bg-positive))] bg-[rgb(var(--signals-bg-positive)/0.1)] px-2 py-1 rounded-full">
            +48%
          </span>
        </div>
        <div className="h-px bg-[rgb(var(--border-standard))] my-3" />
        <p className="text-xs text-subtile">Updated 2 hours ago</p>
      </div>
    </AnimatedGradientBorder>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`AllColors`,`AllSpeeds`,`ThickBorder`,`OnSurface`,`PromotionCard`]}))();export{m as AllColors,h as AllSpeeds,p as Default,_ as OnSurface,v as PromotionCard,g as ThickBorder,y as __namedExportsOrder,f as default};