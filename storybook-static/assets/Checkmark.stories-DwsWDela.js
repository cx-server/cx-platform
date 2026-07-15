import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-DR8dukPV.js";import{n as a,t as o}from"./Checkmark-CZejI7B1.js";var s=e({Checked:()=>f,Interactive:()=>p,MultipleOptions:()=>m,Unchecked:()=>d,__namedExportsOrder:()=>h,default:()=>u}),c,l,u,d,f,p,m,h,g=t((()=>{c=n(r(),1),a(),l=i(),u={title:`Components/Checkmark`,component:o,tags:[],argTypes:{isChecked:{control:`boolean`}},args:{id:`checkmark-demo`,isChecked:!1}},d={args:{id:`cm-unchecked`,isChecked:!1}},f={args:{id:`cm-checked`,isChecked:!0}},p={render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,cursor:`pointer`},onClick:()=>t(!e),children:[(0,l.jsx)(o,{id:`cm-interactive`,isChecked:e,className:`w-6 h-6`}),(0,l.jsx)(`span`,{className:`text-standard text-sm`,children:`I accept the Terms & Conditions`})]})}},m={render:function(){let[e,t]=(0,c.useState)(new Set([0])),n=n=>{let r=new Set(e);r.has(n)?r.delete(n):r.add(n),t(r)};return(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[`Email notifications`,`Push notifications`,`SMS notifications`].map((t,r)=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,cursor:`pointer`},onClick:()=>n(r),children:[(0,l.jsx)(o,{id:`cm-${r}`,isChecked:e.has(r),className:`w-5 h-5`}),(0,l.jsx)(`span`,{className:`text-standard text-sm`,children:t})]},r))})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "cm-unchecked",
    isChecked: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "cm-checked",
    isChecked: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Unchecked`,`Checked`,`Interactive`,`MultipleOptions`]}));g();export{f as Checked,p as Interactive,m as MultipleOptions,d as Unchecked,h as __namedExportsOrder,u as default,g as n,s as t};