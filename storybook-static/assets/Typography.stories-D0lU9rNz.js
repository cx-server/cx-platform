import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-B2mmKava.js";var n,r,i,a,o,s,c;e((()=>{n=t(),r={title:`Foundations/Typography`,tags:[]},i=[{class:`text-2xs`,size:`0.625rem`,px:`10px`,lh:`1.4`},{class:`text-xs`,size:`0.719rem`,px:`11.5px`,lh:`1.39`},{class:`text-sm`,size:`0.813rem`,px:`13px`,lh:`1.54`},{class:`text-base`,size:`0.938rem`,px:`15px`,lh:`1.47`},{class:`text-lg`,size:`1.063rem`,px:`17px`,lh:`1.47`},{class:`text-xl`,size:`1.25rem`,px:`20px`,lh:`1.4`},{class:`text-2xl`,size:`1.5rem`,px:`24px`,lh:`1.33`},{class:`text-3xl`,size:`1.875rem`,px:`30px`,lh:`1.2`}],a={render:()=>(0,n.jsxs)(`div`,{style:{maxWidth:`600px`},children:[(0,n.jsxs)(`p`,{className:`text-subtile text-sm mb-6`,children:[`Font family: `,(0,n.jsx)(`code`,{children:`Inter`}),` · All sizes use rem with custom line-heights.`]}),(0,n.jsx)(`div`,{className:`bg-card rounded-card p-6 border border-subtile`,children:i.map(e=>(0,n.jsxs)(`div`,{style:{marginBottom:`20px`,paddingBottom:`16px`,borderBottom:`1px solid rgb(var(--border-subtile))`},children:[(0,n.jsx)(`p`,{style:{fontSize:e.size,lineHeight:e.lh,color:`rgb(var(--text-highlight))`},children:`The quick brown fox jumps over the lazy dog`}),(0,n.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,marginTop:`4px`},children:[(0,n.jsx)(`code`,{className:`text-xs text-interaction`,children:e.class}),(0,n.jsxs)(`span`,{className:`text-xs text-subtile`,children:[e.size,` (`,e.px,`)`]}),(0,n.jsxs)(`span`,{className:`text-xs text-subtile`,children:[`line-height: `,e.lh]})]})]},e.class))})]})},o={render:()=>(0,n.jsx)(`div`,{style:{maxWidth:`500px`},children:(0,n.jsxs)(`div`,{className:`bg-card rounded-card p-6 border border-subtile`,children:[(0,n.jsx)(`p`,{className:`text-lg mb-4 text-highlight`,style:{fontWeight:400},children:`font-normal (400) — Body text, descriptions`}),(0,n.jsx)(`p`,{className:`text-lg mb-4 text-highlight`,style:{fontWeight:500},children:`font-medium (500) — Labels, sub-headings`}),(0,n.jsx)(`p`,{className:`text-lg mb-4 text-highlight`,style:{fontWeight:600},children:`font-semibold (600) — Headings, buttons, emphasis`}),(0,n.jsx)(`p`,{className:`text-lg text-highlight`,style:{fontWeight:700},children:`font-bold (700) — Large headings, hero text`})]})})},s={render:()=>(0,n.jsxs)(`div`,{style:{maxWidth:`500px`},children:[(0,n.jsx)(`p`,{className:`text-subtile text-sm mb-6`,children:`Common typography patterns in the app.`}),(0,n.jsxs)(`div`,{className:`bg-card rounded-card p-6 border border-subtile`,style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`code`,{className:`text-xs text-interaction`,children:`text-3xl font-bold`}),(0,n.jsx)(`p`,{className:`text-3xl font-bold text-highlight`,children:`Page Title`})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`code`,{className:`text-xs text-interaction`,children:`text-xl font-semibold`}),(0,n.jsx)(`p`,{className:`text-xl font-semibold text-highlight`,children:`Section Heading`})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`code`,{className:`text-xs text-interaction`,children:`text-lg font-medium`}),(0,n.jsx)(`p`,{className:`text-lg font-medium text-highlight`,children:`Card Title`})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`code`,{className:`text-xs text-interaction`,children:`text-base font-normal`}),(0,n.jsx)(`p`,{className:`text-base font-normal text-standard`,children:`Body text, paragraphs, descriptions.`})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`code`,{className:`text-xs text-interaction`,children:`text-sm text-subtile`}),(0,n.jsx)(`p`,{className:`text-sm text-subtile`,children:`Helper text, timestamps, metadata.`})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`code`,{className:`text-xs text-interaction`,children:`text-xs text-subtile`}),(0,n.jsx)(`p`,{className:`text-xs text-subtile`,children:`Labels, captions, footnotes.`})]})]})]})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "600px"
  }}>
      <p className="text-subtile text-sm mb-6">Font family: <code>Inter</code> · All sizes use rem with custom line-heights.</p>
      <div className="bg-card rounded-card p-6 border border-subtile">
        {typographyScale.map(t => <div key={t.class} style={{
        marginBottom: "20px",
        paddingBottom: "16px",
        borderBottom: "1px solid rgb(var(--border-subtile))"
      }}>
            <p style={{
          fontSize: t.size,
          lineHeight: t.lh,
          color: "rgb(var(--text-highlight))"
        }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <div style={{
          display: "flex",
          gap: "16px",
          marginTop: "4px"
        }}>
              <code className="text-xs text-interaction">{t.class}</code>
              <span className="text-xs text-subtile">{t.size} ({t.px})</span>
              <span className="text-xs text-subtile">line-height: {t.lh}</span>
            </div>
          </div>)}
      </div>
    </div>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "500px"
  }}>
      <div className="bg-card rounded-card p-6 border border-subtile">
        <p className="text-lg mb-4 text-highlight" style={{
        fontWeight: 400
      }}>font-normal (400) — Body text, descriptions</p>
        <p className="text-lg mb-4 text-highlight" style={{
        fontWeight: 500
      }}>font-medium (500) — Labels, sub-headings</p>
        <p className="text-lg mb-4 text-highlight" style={{
        fontWeight: 600
      }}>font-semibold (600) — Headings, buttons, emphasis</p>
        <p className="text-lg text-highlight" style={{
        fontWeight: 700
      }}>font-bold (700) — Large headings, hero text</p>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "500px"
  }}>
      <p className="text-subtile text-sm mb-6">Common typography patterns in the app.</p>
      <div className="bg-card rounded-card p-6 border border-subtile" style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        <div><code className="text-xs text-interaction">text-3xl font-bold</code><p className="text-3xl font-bold text-highlight">Page Title</p></div>
        <div><code className="text-xs text-interaction">text-xl font-semibold</code><p className="text-xl font-semibold text-highlight">Section Heading</p></div>
        <div><code className="text-xs text-interaction">text-lg font-medium</code><p className="text-lg font-medium text-highlight">Card Title</p></div>
        <div><code className="text-xs text-interaction">text-base font-normal</code><p className="text-base font-normal text-standard">Body text, paragraphs, descriptions.</p></div>
        <div><code className="text-xs text-interaction">text-sm text-subtile</code><p className="text-sm text-subtile">Helper text, timestamps, metadata.</p></div>
        <div><code className="text-xs text-interaction">text-xs text-subtile</code><p className="text-xs text-subtile">Labels, captions, footnotes.</p></div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Scale`,`Weights`,`Usage`]}))();export{a as Scale,s as Usage,o as Weights,c as __namedExportsOrder,r as default};