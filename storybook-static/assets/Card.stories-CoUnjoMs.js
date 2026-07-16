import{i as e}from"./preload-helper-BdFrVu1K.js";import{P as t,t as n}from"./iframe-iU2omdTy.js";function r({id:e,children:t,className:n,actions:r,...a}){return(0,i.jsxs)(`article`,{id:e,"data-testid":e,className:`rounded-card bg-card p-3 ${r?`pb-0`:``} ${n??``}`,...a,children:[(0,i.jsx)(`div`,{className:`rounded-md bg-input py-3 px-4`,children:t}),r&&(0,i.jsx)(`footer`,{className:`py-3 flex`,children:r})]})}var i,a=e((()=>{i=n()})),o=e((()=>{n(),t()})),s=e((()=>{a(),o()})),c,l,u,d,f,p;e((()=>{s(),c=n(),l={title:`Components/Card`,component:r,tags:[],parameters:{docs:{description:{component:`Content card with rounded corners, background, and optional action footer.`}}}},u={render:()=>(0,c.jsx)(r,{id:`card-default`,children:(0,c.jsx)(`p`,{className:`text-standard text-sm`,children:`Card content goes here.`})})},d={render:()=>(0,c.jsx)(r,{id:`card-actions`,actions:(0,c.jsx)(`button`,{className:`text-interaction text-sm font-medium`,children:`View Details`}),children:(0,c.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,c.jsx)(`span`,{className:`text-highlight font-semibold`,children:`Match Result`}),(0,c.jsx)(`span`,{className:`text-standard text-sm`,children:`Bayern München vs. Dortmund`})]})})},f={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,c.jsx)(r,{id:`card-1`,children:(0,c.jsx)(`span`,{className:`text-standard text-sm`,children:`First card`})}),(0,c.jsx)(r,{id:`card-2`,children:(0,c.jsx)(`span`,{className:`text-standard text-sm`,children:`Second card`})}),(0,c.jsx)(r,{id:`card-3`,children:(0,c.jsx)(`span`,{className:`text-standard text-sm`,children:`Third card`})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Card id="card-default">
      <p className="text-standard text-sm">Card content goes here.</p>
    </Card>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Card id="card-actions" actions={<button className="text-interaction text-sm font-medium">View Details</button>}>
      <div className="flex flex-col gap-1">
        <span className="text-highlight font-semibold">Match Result</span>
        <span className="text-standard text-sm">Bayern München vs. Dortmund</span>
      </div>
    </Card>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Card id="card-1">
        <span className="text-standard text-sm">First card</span>
      </Card>
      <Card id="card-2">
        <span className="text-standard text-sm">Second card</span>
      </Card>
      <Card id="card-3">
        <span className="text-standard text-sm">Third card</span>
      </Card>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithActions`,`MultipleCards`]}))();export{u as Default,f as MultipleCards,d as WithActions,p as __namedExportsOrder,l as default};