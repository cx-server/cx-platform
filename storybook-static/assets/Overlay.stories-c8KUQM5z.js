import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-iU2omdTy.js";import{n as i,t as a}from"./Overlay-DvDNKE-V.js";var o,s,c,l,u,d;e((()=>{o=t(n(),1),a(),s=r(),c={title:`Components/Overlay`,component:i,tags:[],argTypes:{isVisible:{control:`boolean`,description:`Controls fade-in/out animation`},backdrop:{control:`boolean`,description:`Show dark backdrop (true) or transparent (false)`},addAnimation:{control:`boolean`,description:`Enable animation`}},args:{isVisible:!0,backdrop:!0,addAnimation:!1},parameters:{docs:{description:{component:`Full-screen overlay with optional dark backdrop and fade animation. Foundation for modals and sheets.`}}}},l={render:()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`button`,{className:`text-interaction text-sm font-medium`,onClick:()=>t(!0),children:`Open Overlay`}),e&&(0,s.jsx)(i,{isVisible:!0,backdrop:!0,addAnimation:!0,children:(0,s.jsx)(`div`,{className:`flex items-center justify-center h-full`,children:(0,s.jsxs)(`div`,{className:`bg-card rounded-lg p-6 flex flex-col gap-3`,children:[(0,s.jsx)(`span`,{className:`text-highlight font-semibold`,children:`Overlay Content`}),(0,s.jsx)(`button`,{className:`text-interaction text-sm`,onClick:()=>t(!1),children:`Close`})]})})})]})}},u={render:()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`button`,{className:`text-interaction text-sm font-medium`,onClick:()=>t(!0),children:`Open Transparent Overlay`}),e&&(0,s.jsx)(i,{isVisible:!0,backdrop:!1,addAnimation:!0,children:(0,s.jsx)(`div`,{className:`flex items-end justify-center h-full p-4`,children:(0,s.jsxs)(`div`,{className:`bg-card rounded-lg p-4 shadow-lg`,children:[(0,s.jsx)(`span`,{className:`text-highlight text-sm`,children:`Floating panel`}),(0,s.jsx)(`button`,{className:`ml-4 text-interaction text-sm`,onClick:()=>t(!1),children:`Close`})]})})})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button className="text-interaction text-sm font-medium" onClick={() => setOpen(true)}>
          Open Overlay
        </button>
        {open && <Overlay isVisible backdrop addAnimation>
            <div className="flex items-center justify-center h-full">
              <div className="bg-card rounded-lg p-6 flex flex-col gap-3">
                <span className="text-highlight font-semibold">Overlay Content</span>
                <button className="text-interaction text-sm" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </Overlay>}
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button className="text-interaction text-sm font-medium" onClick={() => setOpen(true)}>
          Open Transparent Overlay
        </button>
        {open && <Overlay isVisible backdrop={false} addAnimation>
            <div className="flex items-end justify-center h-full p-4">
              <div className="bg-card rounded-lg p-4 shadow-lg">
                <span className="text-highlight text-sm">Floating panel</span>
                <button className="ml-4 text-interaction text-sm" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </Overlay>}
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`WithBackdrop`,`Transparent`]}))();export{u as Transparent,l as WithBackdrop,d as __namedExportsOrder,c as default};