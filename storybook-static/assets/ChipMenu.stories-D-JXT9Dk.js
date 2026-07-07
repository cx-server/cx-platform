import{j as e}from"./jsx-runtime-8P-18mTY.js";import{a as h,C as i}from"./ChipMenu-BagfA6fO.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./close-icon-oalAFRG9.js";const f={title:"Components/Chip/ChipMenu",component:h,decorators:[d=>e.jsx("div",{className:"bg-input p-4",children:e.jsx("div",{className:"max-w-sm mx-auto p-4",children:e.jsx(d,{})})})],parameters:{layout:"fullscreen"},argTypes:{children:{},className:{control:{type:"text"}}},tags:["autodocs"]},c={argTypes:{},args:{id:"default-chip-menu",children:[e.jsx(i,{id:"chip1",children:"Bayern Munich"}),e.jsx(i,{id:"chip1",selected:!0,children:"Liverpool"}),e.jsx(i,{id:"chip1",selected:!0,children:"Juventus"}),e.jsx(i,{id:"chip1",children:"Real Madrid"})]}},o={argTypes:{},args:{id:"closeable-chip-menu",children:[e.jsx(i,{id:"chip-1",closeable:!0,onCloseClick:()=>console.info("close clicked"),children:"Bayern Munich"}),e.jsx(i,{id:"chip-2",closeable:!0,onCloseClick:()=>console.info("close clicked"),children:"Liverpool"}),e.jsx(i,{id:"chip-3",closeable:!0,onCloseClick:()=>console.info("close clicked"),children:"Juventus"}),e.jsx(i,{id:"chip-4",closeable:!0,onCloseClick:()=>console.info("close clicked"),children:"Real Madrid"})]}};var l,s,n;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    id: "default-chip-menu",
    children: [<Chip id="chip1">Bayern Munich</Chip>, <Chip id="chip1" selected={true}>
                Liverpool
            </Chip>, <Chip id="chip1" selected={true}>
                Juventus
            </Chip>, <Chip id="chip1">Real Madrid</Chip>]
  }
}`,...(n=(s=c.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var r,a,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    id: "closeable-chip-menu",
    children: [<Chip id="chip-1" closeable={true} onCloseClick={() => console.info("close clicked")}>
                Bayern Munich
            </Chip>, <Chip id="chip-2" closeable={true} onCloseClick={() => console.info("close clicked")}>
                Liverpool
            </Chip>, <Chip id="chip-3" closeable={true} onCloseClick={() => console.info("close clicked")}>
                Juventus
            </Chip>, <Chip id="chip-4" closeable={true} onCloseClick={() => console.info("close clicked")}>
                Real Madrid
            </Chip>]
  }
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const k=["DefaultChipMenu","CloseableChipMenu"];export{o as CloseableChipMenu,c as DefaultChipMenu,k as __namedExportsOrder,f as default};
