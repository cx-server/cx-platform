import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-iU2omdTy.js";var i,a,o,s,c,l=e((()=>{i=r(),a=t(n(),1),o=Array.from({length:11},(e,t)=>t===10?`-`:t.toString()),s=(0,a.memo)(({id:e,value:t=0,...n})=>{let[r,o]=(0,a.useState)(()=>t.toString().replace(/\d/g,`0`));(0,a.useEffect)(()=>{let e=t.toString();if(e!==r){let t=setTimeout(()=>{o(e)},50);return()=>clearTimeout(t)}},[t,r]);let s=(0,a.useMemo)(()=>r.split(``),[r]);return(0,i.jsx)(`span`,{id:e,"data-testid":e,...n,children:s.map((e,t)=>(0,i.jsx)(c,{char:e},`${t+1}`))})}),c=(0,a.memo)(({char:e})=>isNaN(parseInt(e,10))&&e!==`-`?(0,i.jsx)(`span`,{children:e}):(0,i.jsxs)(`span`,{"data-testid":e,className:`overflow-hidden inline-flex relative w-[1ch]`,children:[(0,i.jsx)(`span`,{className:`select-none absolute left-0 inline-flex flex-col items-center justify-center transition-transform ease-out duration-1000`,style:{transform:`translateY(-${o.indexOf(e)*10}%)`},"aria-hidden":`true`,children:o.map(e=>(0,i.jsx)(`span`,{className:`last:absolute last:bottom-[-10%] last:left-0`,children:e},e))}),(0,i.jsx)(`span`,{className:`opacity-0`,children:e})]}))})),u,d,f,p,m,h,g;e((()=>{u=t(n(),1),l(),d=r(),f={title:`Components/RollingNumbers`,component:s,tags:[],argTypes:{value:{control:`text`,description:`Numeric value to display`}},args:{id:`rolling`,value:`1234`},parameters:{docs:{description:{component:`Animated rolling number display with per-digit transitions. Used for odds changes, balance updates, and counters.`}}}},p={args:{id:`rolling-default`,value:`42.50`},decorators:[e=>(0,d.jsx)(`div`,{className:`text-2xl font-semibold text-highlight`,children:(0,d.jsx)(e,{})})]},m={render:()=>{let[e,t]=(0,u.useState)(100);return(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsxs)(`div`,{className:`text-3xl font-bold text-highlight`,children:[(0,d.jsx)(s,{id:`rolling-interactive`,value:e.toFixed(2)}),(0,d.jsx)(`span`,{className:`ml-1 text-subtile`,children:`€`})]}),(0,d.jsxs)(`div`,{className:`flex gap-2`,children:[(0,d.jsx)(`button`,{className:`px-3 py-1 rounded bg-card text-sm text-interaction border border-standard`,onClick:()=>t(e=>e+Math.floor(Math.random()*50)),children:`Add Random`}),(0,d.jsx)(`button`,{className:`px-3 py-1 rounded bg-card text-sm text-interaction border border-standard`,onClick:()=>t(0),children:`Reset`})]})]})}},h={render:()=>{let[e,t]=(0,u.useState)(`2.45`);return(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(`span`,{className:`text-lg font-semibold text-highlight`,children:(0,d.jsx)(s,{id:`rolling-odds`,value:e})}),(0,d.jsx)(`div`,{className:`flex gap-2`,children:(0,d.jsx)(`button`,{className:`px-3 py-1 rounded bg-card text-sm border border-standard`,onClick:()=>t((Math.random()*4+1).toFixed(2)),children:`Change Odds`})})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "rolling-default",
    value: "42.50"
  },
  decorators: [Story => <div className="text-2xl font-semibold text-highlight">
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(100);
    return <div className="flex flex-col gap-4">
        <div className="text-3xl font-bold text-highlight">
          <RollingNumbers id="rolling-interactive" value={value.toFixed(2)} />
          <span className="ml-1 text-subtile">€</span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-card text-sm text-interaction border border-standard" onClick={() => setValue(v => v + Math.floor(Math.random() * 50))}>
            Add Random
          </button>
          <button className="px-3 py-1 rounded bg-card text-sm text-interaction border border-standard" onClick={() => setValue(0)}>
            Reset
          </button>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [odds, setOdds] = useState("2.45");
    return <div className="flex flex-col gap-3">
        <span className="text-lg font-semibold text-highlight">
          <RollingNumbers id="rolling-odds" value={odds} />
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-card text-sm border border-standard" onClick={() => setOdds((Math.random() * 4 + 1).toFixed(2))}>
            Change Odds
          </button>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Interactive`,`OddsChange`]}))();export{p as Default,m as Interactive,h as OddsChange,g as __namedExportsOrder,f as default};