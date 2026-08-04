import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CIzVDn8r.js";import{t as n}from"./Article-zKI1z7Mj.js";import{i as r,n as i,t as a}from"./Article-DlY6rXwe.js";var o,s,c,l,u,d;e((()=>{a(),o=t(),s={title:`Components/Article`,component:n,tags:[],parameters:{docs:{description:{component:`Content container for article-style layouts with header and body sections. Use ArticleHeader and ArticleContent for proper spacing.`}}}},c={render:()=>(0,o.jsxs)(n,{id:`article-default`,children:[(0,o.jsxs)(r,{children:[(0,o.jsx)(`h3`,{className:`font-semibold text-highlight text-base`,children:`Article Title`}),(0,o.jsx)(`p`,{className:`text-subtile text-sm`,children:`Subtitle or meta info`})]}),(0,o.jsx)(i,{children:(0,o.jsx)(`p`,{className:`text-standard text-sm`,children:`This is the article content. It can contain any elements — text, images, lists, etc.`})})]})},l={render:()=>(0,o.jsxs)(n,{id:`article-no-gap`,noHeaderContentGap:!0,children:[(0,o.jsx)(r,{children:(0,o.jsx)(`h3`,{className:`font-semibold text-highlight text-base`,children:`Compact Layout`})}),(0,o.jsx)(i,{children:(0,o.jsx)(`p`,{className:`text-standard text-sm`,children:`With noHeaderContentGap, header and content sit closer together.`})})]})},u={render:()=>(0,o.jsxs)(n,{id:`article-list`,children:[(0,o.jsx)(r,{children:(0,o.jsx)(`h3`,{className:`font-semibold text-highlight text-base`,children:`Steps to Complete`})}),(0,o.jsxs)(i,{children:[(0,o.jsx)(`p`,{className:`text-standard text-sm`,children:`1. Enter your details`}),(0,o.jsx)(`p`,{className:`text-standard text-sm`,children:`2. Verify your identity`}),(0,o.jsx)(`p`,{className:`text-standard text-sm`,children:`3. Make your first deposit`})]})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Article id="article-default">
      <ArticleHeader>
        <h3 className="font-semibold text-highlight text-base">Article Title</h3>
        <p className="text-subtile text-sm">Subtitle or meta info</p>
      </ArticleHeader>
      <ArticleContent>
        <p className="text-standard text-sm">
          This is the article content. It can contain any elements — text, images, lists, etc.
        </p>
      </ArticleContent>
    </Article>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Article id="article-no-gap" noHeaderContentGap>
      <ArticleHeader>
        <h3 className="font-semibold text-highlight text-base">Compact Layout</h3>
      </ArticleHeader>
      <ArticleContent>
        <p className="text-standard text-sm">
          With noHeaderContentGap, header and content sit closer together.
        </p>
      </ArticleContent>
    </Article>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Article id="article-list">
      <ArticleHeader>
        <h3 className="font-semibold text-highlight text-base">Steps to Complete</h3>
      </ArticleHeader>
      <ArticleContent>
        <p className="text-standard text-sm">1. Enter your details</p>
        <p className="text-standard text-sm">2. Verify your identity</p>
        <p className="text-standard text-sm">3. Make your first deposit</p>
      </ArticleContent>
    </Article>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`NoHeaderGap`,`WithList`]}))();export{c as Default,l as NoHeaderGap,u as WithList,d as __namedExportsOrder,s as default};