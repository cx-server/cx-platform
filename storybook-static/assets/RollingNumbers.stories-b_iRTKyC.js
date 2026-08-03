import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-Beb_X3EP.js";import{n as i,t as a}from"./RollingNumbers-B7Ze307u.js";var o,s,c,l,u,d,f;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/RollingNumbers`,component:a,tags:[],argTypes:{value:{control:`text`,description:`Numeric value to display`}},args:{id:`rolling`,value:`1234`},parameters:{docs:{description:{component:`Animated rolling number display with per-digit transitions. Used for odds changes, balance updates, and counters.`}}}},l={args:{id:`rolling-default`,value:`42.50`},decorators:[e=>(0,s.jsx)(`div`,{className:`text-2xl font-semibold text-highlight`,children:(0,s.jsx)(e,{})})]},u={render:()=>{let[e,t]=(0,o.useState)(100);return(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsxs)(`div`,{className:`text-3xl font-bold text-highlight`,children:[(0,s.jsx)(a,{id:`rolling-interactive`,value:e.toFixed(2)}),(0,s.jsx)(`span`,{className:`ml-1 text-subtile`,children:`€`})]}),(0,s.jsxs)(`div`,{className:`flex gap-2`,children:[(0,s.jsx)(`button`,{className:`px-3 py-1 rounded bg-card text-sm text-interaction border border-standard`,onClick:()=>t(e=>e+Math.floor(Math.random()*50)),children:`Add Random`}),(0,s.jsx)(`button`,{className:`px-3 py-1 rounded bg-card text-sm text-interaction border border-standard`,onClick:()=>t(0),children:`Reset`})]})]})}},d={render:()=>{let[e,t]=(0,o.useState)(`2.45`);return(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(`span`,{className:`text-lg font-semibold text-highlight`,children:(0,s.jsx)(a,{id:`rolling-odds`,value:e})}),(0,s.jsx)(`div`,{className:`flex gap-2`,children:(0,s.jsx)(`button`,{className:`px-3 py-1 rounded bg-card text-sm border border-standard`,onClick:()=>t((Math.random()*4+1).toFixed(2)),children:`Change Odds`})})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "rolling-default",
    value: "42.50"
  },
  decorators: [Story => <div className="text-2xl font-semibold text-highlight">
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Interactive`,`OddsChange`]}))();export{l as Default,u as Interactive,d as OddsChange,f as __namedExportsOrder,c as default};