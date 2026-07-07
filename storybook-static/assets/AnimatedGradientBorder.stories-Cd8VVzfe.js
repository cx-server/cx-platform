import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as t}from"./index-Cs7sjTYM.js";import{C as F}from"./CardAction-BH5bsE-c.js";import{A as J}from"./Alert-DhiA1szU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./close-icon-DtnN5aCc.js";import"./positive-DQxB0UtJ.js";import"./Article-SXNvf8K4.js";import"./ArticleContent-D4v8PQBD.js";import"./index-lrnWVvcy.js";const K={info:"rgb(var(--signals-bg-info))",positive:"rgb(var(--signals-bg-positive))",negative:"rgb(var(--signals-bg-negative))",warning:"rgb(var(--signals-bg-warning))",brand:"rgb(var(--global-styling-branding-brand))",interaction:"rgb(var(--global-styling-branding-interaction))"},L={slow:"6s",normal:"4s",fast:"2s"};function p({id:r,color:u="info",speed:x="normal",borderWidth:h=1,rounded:V="rounded-card",children:z,className:M,...E}){const b=t.useRef(null),[f,H]=t.useState(!0),g=t.useCallback(a=>{var s;H(((s=a[0])==null?void 0:s.isIntersecting)??!0)},[]);t.useEffect(()=>{const a=b.current;if(!a)return;const s=new IntersectionObserver(g,{threshold:0});return s.observe(a),()=>{s.disconnect()}},[g]);const _=t.useMemo(()=>{const a=K[u];return{"--animated-border-angle":"0deg","--animated-border-duration":L[x],"--animated-border-color":a,"--animated-border-width":`${h}px`,"--animated-border-play-state":f?"running":"paused"}},[u,x,h,f]);return e.jsx("div",{ref:b,id:r,"data-testid":r,className:`animated-gradient-border ${V} ${M??""}`,style:_,...E,children:z})}p.__docgenInfo={description:`Animated gradient border wrapper. Wraps any child element with a spinning
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
Graceful degradation: static gradient (no spin) in older browsers.`,methods:[],displayName:"AnimatedGradientBorder",props:{id:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"info" | "positive" | "negative" | "warning" | "brand" | "interaction"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"interaction"'}]},description:"The color token for the animated gradient.",defaultValue:{value:'"info"',computed:!1}},speed:{required:!1,tsType:{name:"union",raw:'"slow" | "normal" | "fast"',elements:[{name:"literal",value:'"slow"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"fast"'}]},description:"Animation speed: slow (6s), normal (4s), fast (2s).",defaultValue:{value:'"normal"',computed:!1}},borderWidth:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:"Border width in pixels.",defaultValue:{value:"1",computed:!1}},rounded:{required:!1,tsType:{name:"string"},description:"Border radius class override. Defaults to rounded-card.",defaultValue:{value:'"rounded-card"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const de={title:"DesignOps/AnimatedGradientBorder",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Animated conic-gradient border wrapper. Wraps any child element (Card, Alert, custom div) with a spinning gradient border effect using design system color tokens."}}},argTypes:{color:{control:"select",options:["info","positive","negative","warning","brand","interaction"],description:"Gradient accent color from the design system signal/brand tokens."},speed:{control:"select",options:["slow","normal","fast"],description:"Animation speed: slow (6s), normal (4s), fast (2s)."},borderWidth:{control:"select",options:[1,2],description:"Border thickness in pixels."},rounded:{control:"text",description:"Tailwind border-radius class. Defaults to rounded-card."}},args:{id:"animated-border-demo",color:"info",speed:"normal",borderWidth:1,rounded:"rounded-card"}},n={args:{id:"default-animated-border",children:e.jsxs("div",{className:"p-6 bg-card rounded-card text-standard",children:[e.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Animated Border"}),e.jsx("p",{className:"text-sm text-subtile",children:"Any content works inside this wrapper."})]})}},d={args:{id:"animated-border-card",color:"brand",children:e.jsx(F,{id:"inner-card",children:e.jsx("p",{children:"This Card has an animated gradient border around it."})})}},o={args:{id:"animated-border-alert",color:"positive",speed:"fast",borderWidth:2,rounded:"rounded-alerts",children:e.jsx(J,{id:"inner-alert",variant:"positive",header:"Success",children:"Action completed successfully."})}},i={render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:["info","positive","negative","warning","brand","interaction"].map(r=>e.jsx(p,{id:`border-${r}`,color:r,className:"w-48",children:e.jsx("div",{className:"p-4 bg-card rounded-card text-center",children:e.jsx("p",{className:"text-sm font-medium text-standard capitalize",children:r})})},r))})},l={render:()=>e.jsx("div",{className:"flex gap-4",children:["slow","normal","fast"].map(r=>e.jsx(p,{id:`border-${r}`,color:"interaction",speed:r,children:e.jsx("div",{className:"p-4 bg-card rounded-card text-center",children:e.jsx("p",{className:"text-sm font-medium text-standard capitalize",children:r})})},r))})},c={args:{id:"thick-border",color:"negative",borderWidth:2,speed:"fast",children:e.jsxs("div",{className:"p-6 bg-card rounded-card text-standard",children:[e.jsx("h3",{className:"font-semibold text-lg mb-1",children:"2px Border"}),e.jsx("p",{className:"text-sm text-subtile",children:"Thicker border for more emphasis."})]})}},m={render:()=>e.jsxs("div",{className:"max-w-2xl text-standard font-inter text-sm leading-relaxed space-y-6 p-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"How to Use"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-base",children:"Import"}),e.jsx("pre",{className:"bg-input rounded-md p-3 text-xs overflow-x-auto",children:e.jsx("code",{children:'import {AnimatedGradientBorder} from "@tipico/ui/components/AnimatedGradientBorder";'})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-base",children:"Wrap a Card"}),e.jsx("pre",{className:"bg-input rounded-md p-3 text-xs overflow-x-auto",children:e.jsx("code",{children:`<AnimatedGradientBorder id="promo-border" color="brand" speed="fast">
  <Card id="promo-card">Special Promotion</Card>
</AnimatedGradientBorder>`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-base",children:"Wrap an Alert"}),e.jsx("pre",{className:"bg-input rounded-md p-3 text-xs overflow-x-auto",children:e.jsx("code",{children:`<AnimatedGradientBorder id="alert-border" color="positive" rounded="rounded-alerts">
  <Alert id="inner" variant="positive" header="Done">Success!</Alert>
</AnimatedGradientBorder>`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-base",children:"Wrap any element"}),e.jsx("pre",{className:"bg-input rounded-md p-3 text-xs overflow-x-auto",children:e.jsx("code",{children:`<AnimatedGradientBorder id="custom" color="interaction" borderWidth={2}>
  <div className="p-4 bg-card rounded-card">Any content</div>
</AnimatedGradientBorder>`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-base",children:"Props"}),e.jsxs("table",{className:"w-full text-xs border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-subtile",children:[e.jsx("th",{className:"text-left py-2 pr-4",children:"Prop"}),e.jsx("th",{className:"text-left py-2 pr-4",children:"Default"}),e.jsx("th",{className:"text-left py-2",children:"Description"})]})}),e.jsxs("tbody",{className:"text-subtile",children:[e.jsxs("tr",{className:"border-b border-subtile",children:[e.jsx("td",{className:"py-2 pr-4 font-mono text-standard",children:"color"}),e.jsx("td",{className:"py-2 pr-4",children:'"info"'}),e.jsx("td",{className:"py-2",children:"info, positive, negative, warning, brand, interaction"})]}),e.jsxs("tr",{className:"border-b border-subtile",children:[e.jsx("td",{className:"py-2 pr-4 font-mono text-standard",children:"speed"}),e.jsx("td",{className:"py-2 pr-4",children:'"normal"'}),e.jsx("td",{className:"py-2",children:"slow (6s), normal (4s), fast (2s)"})]}),e.jsxs("tr",{className:"border-b border-subtile",children:[e.jsx("td",{className:"py-2 pr-4 font-mono text-standard",children:"borderWidth"}),e.jsx("td",{className:"py-2 pr-4",children:"1"}),e.jsx("td",{className:"py-2",children:"1px or 2px"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 font-mono text-standard",children:"rounded"}),e.jsx("td",{className:"py-2 pr-4",children:'"rounded-card"'}),e.jsx("td",{className:"py-2",children:"Tailwind radius class — match to child element"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-base",children:"Tips"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-subtile",children:[e.jsxs("li",{children:["Child element ",e.jsx("strong",{className:"text-standard",children:"must"})," have its own opaque background"]}),e.jsxs("li",{children:["Match ",e.jsx("code",{className:"text-standard",children:"rounded"})," prop to child's border-radius (e.g."," ",e.jsx("code",{className:"text-standard",children:'rounded="rounded-alerts"'})," for Alert)"]}),e.jsx("li",{children:"Child keeps its own border-radius — the wrapper does not override it"}),e.jsx("li",{children:"Use sparingly for maximum visual impact (promos, featured items, success states)"}),e.jsx("li",{children:"Browser support: Chrome 85+, Safari 15.4+, Firefox 128+. Graceful fallback: static gradient."}),e.jsx("li",{children:"Animation pauses automatically when offscreen (IntersectionObserver)"}),e.jsxs("li",{children:["Respects ",e.jsx("code",{className:"text-standard",children:"prefers-reduced-motion"})," — no animation, static accent visible"]})]})]})]}),parameters:{layout:"padded"}};var v,N,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: "default-animated-border",
    children: <div className="p-6 bg-card rounded-card text-standard">
                <h3 className="font-semibold text-lg mb-1">Animated Border</h3>
                <p className="text-sm text-subtile">Any content works inside this wrapper.</p>
            </div>
  }
}`,...(y=(N=n.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var j,w,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "animated-border-card",
    color: "brand",
    children: <Card id="inner-card">
                <p>This Card has an animated gradient border around it.</p>
            </Card>
  }
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var B,G,C;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "animated-border-alert",
    color: "positive",
    speed: "fast",
    borderWidth: 2,
    rounded: "rounded-alerts",
    children: <Alert id="inner-alert" variant="positive" header="Success">
                Action completed successfully.
            </Alert>
  }
}`,...(C=(G=o.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var k,T,W;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
            {(["info", "positive", "negative", "warning", "brand", "interaction"] as const).map(color => <AnimatedGradientBorder key={color} id={\`border-\${color}\`} color={color} className="w-48">
                    <div className="p-4 bg-card rounded-card text-center">
                        <p className="text-sm font-medium text-standard capitalize">{color}</p>
                    </div>
                </AnimatedGradientBorder>)}
        </div>
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var S,D,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
            {(["slow", "normal", "fast"] as const).map(speed => <AnimatedGradientBorder key={speed} id={\`border-\${speed}\`} color="interaction" speed={speed}>
                    <div className="p-4 bg-card rounded-card text-center">
                        <p className="text-sm font-medium text-standard capitalize">{speed}</p>
                    </div>
                </AnimatedGradientBorder>)}
        </div>
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var q,U,O;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    id: "thick-border",
    color: "negative",
    borderWidth: 2,
    speed: "fast",
    children: <div className="p-6 bg-card rounded-card text-standard">
                <h3 className="font-semibold text-lg mb-1">2px Border</h3>
                <p className="text-sm text-subtile">Thicker border for more emphasis.</p>
            </div>
  }
}`,...(O=(U=c.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var P,$,R;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl text-standard font-inter text-sm leading-relaxed space-y-6 p-6">
            <h2 className="text-xl font-semibold">How to Use</h2>

            <div className="space-y-2">
                <h3 className="font-semibold text-base">Import</h3>
                <pre className="bg-input rounded-md p-3 text-xs overflow-x-auto">
                    <code>{\`import {AnimatedGradientBorder} from "@tipico/ui/components/AnimatedGradientBorder";\`}</code>
                </pre>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-base">Wrap a Card</h3>
                <pre className="bg-input rounded-md p-3 text-xs overflow-x-auto">
                    <code>{\`<AnimatedGradientBorder id="promo-border" color="brand" speed="fast">
  <Card id="promo-card">Special Promotion</Card>
</AnimatedGradientBorder>\`}</code>
                </pre>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-base">Wrap an Alert</h3>
                <pre className="bg-input rounded-md p-3 text-xs overflow-x-auto">
                    <code>{\`<AnimatedGradientBorder id="alert-border" color="positive" rounded="rounded-alerts">
  <Alert id="inner" variant="positive" header="Done">Success!</Alert>
</AnimatedGradientBorder>\`}</code>
                </pre>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-base">Wrap any element</h3>
                <pre className="bg-input rounded-md p-3 text-xs overflow-x-auto">
                    <code>{\`<AnimatedGradientBorder id="custom" color="interaction" borderWidth={2}>
  <div className="p-4 bg-card rounded-card">Any content</div>
</AnimatedGradientBorder>\`}</code>
                </pre>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-base">Props</h3>
                <table className="w-full text-xs border-collapse">
                    <thead>
                        <tr className="border-b border-subtile">
                            <th className="text-left py-2 pr-4">Prop</th>
                            <th className="text-left py-2 pr-4">Default</th>
                            <th className="text-left py-2">Description</th>
                        </tr>
                    </thead>
                    <tbody className="text-subtile">
                        <tr className="border-b border-subtile">
                            <td className="py-2 pr-4 font-mono text-standard">color</td>
                            <td className="py-2 pr-4">"info"</td>
                            <td className="py-2">info, positive, negative, warning, brand, interaction</td>
                        </tr>
                        <tr className="border-b border-subtile">
                            <td className="py-2 pr-4 font-mono text-standard">speed</td>
                            <td className="py-2 pr-4">"normal"</td>
                            <td className="py-2">slow (6s), normal (4s), fast (2s)</td>
                        </tr>
                        <tr className="border-b border-subtile">
                            <td className="py-2 pr-4 font-mono text-standard">borderWidth</td>
                            <td className="py-2 pr-4">1</td>
                            <td className="py-2">1px or 2px</td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-4 font-mono text-standard">rounded</td>
                            <td className="py-2 pr-4">"rounded-card"</td>
                            <td className="py-2">Tailwind radius class — match to child element</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-base">Tips</h3>
                <ul className="list-disc pl-5 space-y-1 text-subtile">
                    <li>
                        Child element <strong className="text-standard">must</strong> have its own opaque background
                    </li>
                    <li>
                        Match <code className="text-standard">rounded</code> prop to child's border-radius (e.g.{" "}
                        <code className="text-standard">rounded="rounded-alerts"</code> for Alert)
                    </li>
                    <li>Child keeps its own border-radius — the wrapper does not override it</li>
                    <li>Use sparingly for maximum visual impact (promos, featured items, success states)</li>
                    <li>
                        Browser support: Chrome 85+, Safari 15.4+, Firefox 128+. Graceful fallback: static gradient.
                    </li>
                    <li>Animation pauses automatically when offscreen (IntersectionObserver)</li>
                    <li>
                        Respects <code className="text-standard">prefers-reduced-motion</code> — no animation, static
                        accent visible
                    </li>
                </ul>
            </div>
        </div>,
  parameters: {
    layout: "padded"
  }
}`,...(R=($=m.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const oe=["Default","WithCard","WithAlert","AllColors","AllSpeeds","ThickBorder","HowToUse"];export{i as AllColors,l as AllSpeeds,n as Default,m as HowToUse,c as ThickBorder,o as WithAlert,d as WithCard,oe as __namedExportsOrder,de as default};
