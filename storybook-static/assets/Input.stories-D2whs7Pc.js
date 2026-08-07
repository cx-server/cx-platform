import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-Cf3IHaYg.js";import{c as r,i,o as a,t as o,u as s}from"./Input-DkyGDOr5.js";var c=e({AllTypes:()=>v,Default:()=>d,Disabled:()=>p,Password:()=>h,Search:()=>m,WithCurrency:()=>g,WithLabel:()=>_,WithValue:()=>f,__namedExportsOrder:()=>y,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b=t((()=>{o(),l=n(),u={title:`Components/Input`,component:s,tags:[],args:{id:`input-demo`,name:`demo`,placeholder:`Enter text...`}},d={args:{id:`input-default`,name:`default`,placeholder:`Enter your name`}},f={args:{id:`input-value`,name:`value`,defaultValue:`Max Mustermann`}},p={args:{id:`input-disabled`,name:`disabled`,disabled:!0,defaultValue:`Can't edit this`}},m={args:{id:`input-search`,name:`search`,type:`search`,placeholder:`Search games...`}},h={args:{id:`input-password`,name:`password`,type:`password`,placeholder:`Enter password`}},g={args:{id:`input-currency`,name:`amount`,showCurrency:!0,currency:`€`,placeholder:`0.00`}},_={render:()=>(0,l.jsxs)(r,{id:`field-demo`,children:[(0,l.jsx)(i,{id:`field-title`,children:`Email Address`}),(0,l.jsx)(s,{id:`input-email`,name:`email`,type:`email`,placeholder:`name@example.com`}),(0,l.jsx)(a,{id:`field-desc`,children:`We'll never share your email.`})]})},v={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,maxWidth:`320px`},children:[(0,l.jsxs)(r,{id:`f1`,children:[(0,l.jsx)(i,{id:`t1`,children:`Text`}),(0,l.jsx)(s,{id:`i1`,name:`text`,placeholder:`Default text input`})]}),(0,l.jsxs)(r,{id:`f2`,children:[(0,l.jsx)(i,{id:`t2`,children:`Search`}),(0,l.jsx)(s,{id:`i2`,name:`search`,type:`search`,placeholder:`Search...`})]}),(0,l.jsxs)(r,{id:`f3`,children:[(0,l.jsx)(i,{id:`t3`,children:`Password`}),(0,l.jsx)(s,{id:`i3`,name:`password`,type:`password`,placeholder:`Password`})]}),(0,l.jsxs)(r,{id:`f4`,children:[(0,l.jsx)(i,{id:`t4`,children:`Amount`}),(0,l.jsx)(s,{id:`i4`,name:`amount`,showCurrency:!0,currency:`€`,placeholder:`0.00`})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "input-default",
    name: "default",
    placeholder: "Enter your name"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "input-value",
    name: "value",
    defaultValue: "Max Mustermann"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "input-disabled",
    name: "disabled",
    disabled: true,
    defaultValue: "Can't edit this"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "input-search",
    name: "search",
    type: "search",
    placeholder: "Search games..."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "input-password",
    name: "password",
    type: "password",
    placeholder: "Enter password"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "input-currency",
    name: "amount",
    showCurrency: true,
    currency: "€",
    placeholder: "0.00"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <InputField id="field-demo">
      <InputFieldTitle id="field-title">Email Address</InputFieldTitle>
      <Input id="input-email" name="email" type="email" placeholder="name@example.com" />
      <InputFieldDescription id="field-desc">We'll never share your email.</InputFieldDescription>
    </InputField>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "320px"
  }}>
      <InputField id="f1"><InputFieldTitle id="t1">Text</InputFieldTitle><Input id="i1" name="text" placeholder="Default text input" /></InputField>
      <InputField id="f2"><InputFieldTitle id="t2">Search</InputFieldTitle><Input id="i2" name="search" type="search" placeholder="Search..." /></InputField>
      <InputField id="f3"><InputFieldTitle id="t3">Password</InputFieldTitle><Input id="i3" name="password" type="password" placeholder="Password" /></InputField>
      <InputField id="f4"><InputFieldTitle id="t4">Amount</InputFieldTitle><Input id="i4" name="amount" showCurrency={true} currency="€" placeholder="0.00" /></InputField>
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithValue`,`Disabled`,`Search`,`Password`,`WithCurrency`,`WithLabel`,`AllTypes`]}));b();export{v as AllTypes,d as Default,p as Disabled,h as Password,m as Search,g as WithCurrency,_ as WithLabel,f as WithValue,y as __namedExportsOrder,u as default,b as n,c as t};