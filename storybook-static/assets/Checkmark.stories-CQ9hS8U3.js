import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-Cd-Mih9Z.js";import{n as i,t as a}from"./Checkmark-OFhR6CJ8.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Checkmark`,component:a,tags:[],argTypes:{isChecked:{control:`boolean`}},args:{id:`checkmark-demo`,isChecked:!1}},l={args:{id:`cm-unchecked`,isChecked:!1}},u={args:{id:`cm-checked`,isChecked:!0}},d={render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,cursor:`pointer`},onClick:()=>t(!e),children:[(0,s.jsx)(a,{id:`cm-interactive`,isChecked:e,className:`w-6 h-6`}),(0,s.jsx)(`span`,{className:`text-standard text-sm`,children:`I accept the Terms & Conditions`})]})}},f={render:function(){let[e,t]=(0,o.useState)(new Set([0])),n=n=>{let r=new Set(e);r.has(n)?r.delete(n):r.add(n),t(r)};return(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[`Email notifications`,`Push notifications`,`SMS notifications`].map((t,r)=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,cursor:`pointer`},onClick:()=>n(r),children:[(0,s.jsx)(a,{id:`cm-${r}`,isChecked:e.has(r),className:`w-5 h-5`}),(0,s.jsx)(`span`,{className:`text-standard text-sm`,children:t})]},r))})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "cm-unchecked",
    isChecked: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "cm-checked",
    isChecked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function InteractiveDemo() {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      cursor: "pointer"
    }} onClick={() => setChecked(!checked)}>
        <Checkmark id="cm-interactive" isChecked={checked} className="w-6 h-6" />
        <span className="text-standard text-sm">I accept the Terms & Conditions</span>
      </div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function MultiDemo() {
    const [selected, setSelected] = useState<Set<number>>(new Set([0]));
    const toggle = (i: number) => {
      const next = new Set(selected);
      next.has(i) ? next.delete(i) : next.add(i);
      setSelected(next);
    };
    const options = ["Email notifications", "Push notifications", "SMS notifications"];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        {options.map((label, i) => <div key={i} style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer"
      }} onClick={() => toggle(i)}>
            <Checkmark id={\`cm-\${i}\`} isChecked={selected.has(i)} className="w-5 h-5" />
            <span className="text-standard text-sm">{label}</span>
          </div>)}
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p=[`Unchecked`,`Checked`,`Interactive`,`MultipleOptions`]}))();export{u as Checked,d as Interactive,f as MultipleOptions,l as Unchecked,p as __namedExportsOrder,c as default};