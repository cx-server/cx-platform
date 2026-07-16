import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-iU2omdTy.js";import{t as n}from"./Article-BV-9RH4J.js";import{t as r}from"./Article-BlBRRndD.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),a={title:`Components/Article`,component:n,tags:[],parameters:{docs:{description:{component:`Content container for article-style layouts with header and body sections.`}}}},o={render:()=>(0,i.jsxs)(n,{id:`article-default`,children:[(0,i.jsx)(`header`,{className:`font-semibold text-highlight text-base`,children:`Article Title`}),(0,i.jsx)(`div`,{className:`text-standard text-sm`,children:`This is the article content. It can contain any elements — text, images, lists, etc.`})]})},s={render:()=>(0,i.jsxs)(n,{id:`article-no-gap`,noHeaderContentGap:!0,children:[(0,i.jsx)(`header`,{className:`font-semibold text-highlight text-base`,children:`Compact Layout`}),(0,i.jsx)(`div`,{className:`text-standard text-sm`,children:`With noHeaderContentGap, header and content sit closer together.`})]})},c={render:()=>(0,i.jsxs)(n,{id:`article-list`,children:[(0,i.jsx)(`header`,{className:`font-semibold text-highlight text-base`,children:`Steps to Complete`}),(0,i.jsxs)(`div`,{className:`text-standard text-sm flex flex-col gap-2`,children:[(0,i.jsx)(`p`,{children:`1. Enter your details`}),(0,i.jsx)(`p`,{children:`2. Verify your identity`}),(0,i.jsx)(`p`,{children:`3. Make your first deposit`})]})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Article id="article-default">
      <header className="font-semibold text-highlight text-base">Article Title</header>
      <div className="text-standard text-sm">
        This is the article content. It can contain any elements — text, images, lists, etc.
      </div>
    </Article>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Article id="article-no-gap" noHeaderContentGap>
      <header className="font-semibold text-highlight text-base">Compact Layout</header>
      <div className="text-standard text-sm">
        With noHeaderContentGap, header and content sit closer together.
      </div>
    </Article>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Article id="article-list">
      <header className="font-semibold text-highlight text-base">Steps to Complete</header>
      <div className="text-standard text-sm flex flex-col gap-2">
        <p>1. Enter your details</p>
        <p>2. Verify your identity</p>
        <p>3. Make your first deposit</p>
      </div>
    </Article>
}`,...c.parameters?.docs?.source}}},l=[`Default`,`NoHeaderGap`,`WithList`]}))();export{o as Default,s as NoHeaderGap,c as WithList,l as __namedExportsOrder,a as default};