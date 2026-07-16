import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-iU2omdTy.js";function n({src:e,letter:t,showBlur:n,blurClassName:i}){return e?(0,r.jsxs)(`div`,{className:`contents`,children:[n&&(0,r.jsx)(`img`,{alt:`Avatar`,"data-testid":`avatar-blured-image`,src:e,className:`size-full rounded-full absolute top-2 blur-[8px] ${i}`}),(0,r.jsx)(`img`,{"data-testid":`avatar-image`,alt:`Avatar`,src:e,className:`size-full rounded-full relative`})]}):(0,r.jsx)(`span`,{children:t??``})}var r,i=e((()=>{r=t()})),a=e((()=>{i()})),o,s,c,l,u,d;e((()=>{a(),o=t(),s={title:`Components/Avatar`,component:n,tags:[],argTypes:{src:{control:`text`,description:`Image URL for the avatar`},letter:{control:`text`,description:`Fallback letter when no image`},showBlur:{control:`boolean`,description:`Show blurred shadow behind image`}},args:{letter:`T`},parameters:{docs:{description:{component:`Avatar badge with image or letter fallback. Supports a blurred shadow effect.`}}}},c={args:{letter:`T`},decorators:[e=>(0,o.jsx)(`div`,{className:`size-12 rounded-full bg-card flex items-center justify-center text-highlight font-semibold text-lg`,children:(0,o.jsx)(e,{})})]},l={args:{src:`https://i.pravatar.cc/48?img=3`,showBlur:!1},decorators:[e=>(0,o.jsx)(`div`,{className:`size-12 rounded-full relative overflow-visible`,children:(0,o.jsx)(e,{})})]},u={args:{src:`https://i.pravatar.cc/48?img=5`,showBlur:!0},decorators:[e=>(0,o.jsx)(`div`,{className:`size-12 rounded-full relative overflow-visible mt-4`,children:(0,o.jsx)(e,{})})]},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    letter: "T"
  },
  decorators: [Story => <div className="size-12 rounded-full bg-card flex items-center justify-center text-highlight font-semibold text-lg">
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/48?img=3",
    showBlur: false
  },
  decorators: [Story => <div className="size-12 rounded-full relative overflow-visible">
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/48?img=5",
    showBlur: true
  },
  decorators: [Story => <div className="size-12 rounded-full relative overflow-visible mt-4">
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}},d=[`WithLetter`,`WithImage`,`WithBlur`]}))();export{u as WithBlur,l as WithImage,c as WithLetter,d as __namedExportsOrder,s as default};