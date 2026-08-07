import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Cf3IHaYg.js";import{n,t as r}from"./Card-DOEHiJ9C.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`Components/Card`,component:n,tags:[],parameters:{docs:{description:{component:`Content card with rounded corners, background, and optional action footer.`}}}},o={render:()=>(0,i.jsx)(n,{id:`card-default`,children:(0,i.jsx)(`p`,{className:`text-standard text-sm`,children:`Card content goes here.`})})},s={render:()=>(0,i.jsx)(n,{id:`card-actions`,actions:(0,i.jsx)(`button`,{className:`text-interaction text-sm font-medium`,children:`View Details`}),children:(0,i.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,i.jsx)(`span`,{className:`text-highlight font-semibold`,children:`Match Result`}),(0,i.jsx)(`span`,{className:`text-standard text-sm`,children:`Bayern München vs. Dortmund`})]})})},c={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(n,{id:`card-1`,children:(0,i.jsx)(`span`,{className:`text-standard text-sm`,children:`First card`})}),(0,i.jsx)(n,{id:`card-2`,children:(0,i.jsx)(`span`,{className:`text-standard text-sm`,children:`Second card`})}),(0,i.jsx)(n,{id:`card-3`,children:(0,i.jsx)(`span`,{className:`text-standard text-sm`,children:`Third card`})})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card id="card-default">
      <p className="text-standard text-sm">Card content goes here.</p>
    </Card>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Card id="card-actions" actions={<button className="text-interaction text-sm font-medium">View Details</button>}>
      <div className="flex flex-col gap-1">
        <span className="text-highlight font-semibold">Match Result</span>
        <span className="text-standard text-sm">Bayern München vs. Dortmund</span>
      </div>
    </Card>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Default`,`WithActions`,`MultipleCards`]}))();export{o as Default,c as MultipleCards,s as WithActions,l as __namedExportsOrder,a as default};