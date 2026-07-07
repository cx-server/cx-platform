import{j as n}from"./jsx-runtime-8P-18mTY.js";import{D as i,a as w,b as m,c as D}from"./DropdownSelectOption-CySh-BJY.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const x={title:"Components/Dropdown",component:i,decorators:[e=>n.jsx("div",{className:"bg-surface p-4",children:n.jsx("div",{className:"card p-4 flex max-w-sm mx-auto",children:n.jsx(e,{})})})],parameters:{layout:"fullscreen"},argTypes:{children:{},className:{control:{type:"text"}}},tags:["autodocs"]},o={argTypes:{},args:{id:"default-dropdown",children:["option 1","option 2","option 3"],className:""},render:e=>n.jsx(w,{id:"dropdown-field",children:n.jsx(i,{...e,id:"dropdown",children:e.children instanceof Array&&e.children.map(r=>n.jsx(m,{value:r,id:r,children:r}))})})},d={argTypes:{},args:{...o.args,id:"dropdown",title:"Title",className:""},name:"Dropdown with title",render:e=>n.jsxs(w,{id:"dropdown-field",children:[n.jsx(D,{...e,children:e.title}),n.jsx(i,{...e,id:"dropdown",children:e.children instanceof Array&&e.children.map(r=>n.jsx(m,{value:r,id:r,children:r}))})]})};var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    id: "default-dropdown",
    children: ["option 1", "option 2", "option 3"],
    className: ""
  },
  render: args => {
    return <DropdownField id="dropdown-field">
                <Dropdown {...args} id="dropdown">
                    {args.children instanceof Array && args.children.map((selection: string) => <DropdownSelectOption value={selection} id={selection}>
                                {selection}
                            </DropdownSelectOption>)}
                </Dropdown>
            </DropdownField>;
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var l,p,c;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    ...DefaultDropdown.args,
    id: "dropdown",
    title: "Title",
    className: ""
  },
  name: "Dropdown with title",
  render: args => {
    return <DropdownField id="dropdown-field">
                <DropdownFieldTitle {...args}>{args.title}</DropdownFieldTitle>
                <Dropdown {...args} id="dropdown">
                    {args.children instanceof Array && args.children.map((selection: string) => <DropdownSelectOption value={selection} id={selection}>
                                {selection}
                            </DropdownSelectOption>)}
                </Dropdown>
            </DropdownField>;
  }
}`,...(c=(p=d.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["DefaultDropdown","DropdownWithTitle"];export{o as DefaultDropdown,d as DropdownWithTitle,j as __namedExportsOrder,x as default};
