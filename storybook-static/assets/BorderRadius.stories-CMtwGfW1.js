import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-B2mmKava.js";var n,r,i,a,o,s,c;e((()=>{n=t(),r={title:`Foundations/Border Radius`,tags:[]},i=[{class:`rounded-sm`,token:`--radius-sm`,value:`0.25rem (4px)`,usage:`Checkmarks, small icons`},{class:`rounded-md / rounded`,token:`--radius-md`,value:`0.5rem (8px)`,usage:`Buttons, inputs, list items`},{class:`rounded-lg`,token:`--radius-lg`,value:`1rem (16px)`,usage:`Cards, alerts, overlays`},{class:`rounded-xl`,token:`--radius-xl`,value:`1.5rem (24px)`,usage:`Modals, dialog panels`},{class:`rounded-2xl`,token:`--radius-2xl`,value:`2rem (32px)`,usage:`Large containers`},{class:`rounded-full`,token:`9999px`,value:`Circle`,usage:`Badges, avatars, pills`}],a=[{class:`rounded-button`,token:`--radius-button`,maps:`md (8px)`,usage:`All buttons`},{class:`rounded-inputs`,token:`--radius-inputs`,maps:`md (8px)`,usage:`Input fields`},{class:`rounded-card`,token:`--radius-card`,maps:`lg (16px)`,usage:`Cards, containers`},{class:`rounded-alerts`,token:`--radius-alerts`,maps:`lg (16px)`,usage:`Alert banners`},{class:`rounded-odds`,token:`--radius-odds`,maps:`md (8px)`,usage:`Odds buttons`},{class:`rounded-pills`,token:`--radius-pills`,maps:`2xl (32px)`,usage:`Pill labels`},{class:`rounded-modal`,token:`--radius-modal`,maps:`xl (24px)`,usage:`Modal/dialog panels`}],o={render:()=>(0,n.jsxs)(`div`,{style:{maxWidth:`600px`},children:[(0,n.jsx)(`p`,{className:`text-subtile text-sm mb-6`,children:`Base radius scale — use the semantic tokens below in most cases.`}),(0,n.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`16px`},children:i.map(e=>(0,n.jsxs)(`div`,{className:`bg-card border border-subtile p-3`,style:{borderRadius:e.class===`rounded-full`?`9999px`:void 0,width:`140px`,textAlign:`center`},children:[(0,n.jsx)(`div`,{className:`w-16 h-16 bg-interaction mx-auto mb-2 ${e.class}`}),(0,n.jsx)(`code`,{className:`text-xs text-interaction block`,children:e.class}),(0,n.jsx)(`p`,{className:`text-2xs text-subtile`,children:e.value})]},e.class))})]})},s={render:()=>(0,n.jsxs)(`div`,{style:{maxWidth:`600px`},children:[(0,n.jsx)(`p`,{className:`text-subtile text-sm mb-6`,children:`Use these semantic classes — they adapt if the token values change globally.`}),(0,n.jsx)(`div`,{className:`bg-card rounded-card p-4 border border-subtile`,children:(0,n.jsxs)(`table`,{style:{width:`100%`,fontSize:`0.8125rem`},children:[(0,n.jsx)(`thead`,{children:(0,n.jsxs)(`tr`,{style:{borderBottom:`1px solid rgb(var(--border-standard))`},children:[(0,n.jsx)(`th`,{className:`text-left py-2 text-highlight font-medium`,children:`Class`}),(0,n.jsx)(`th`,{className:`text-left py-2 text-highlight font-medium`,children:`Maps to`}),(0,n.jsx)(`th`,{className:`text-left py-2 text-highlight font-medium`,children:`Usage`})]})}),(0,n.jsx)(`tbody`,{children:a.map(e=>(0,n.jsxs)(`tr`,{style:{borderBottom:`1px solid rgb(var(--border-subtile))`},children:[(0,n.jsx)(`td`,{className:`py-2`,children:(0,n.jsx)(`code`,{className:`text-xs text-interaction`,children:e.class})}),(0,n.jsx)(`td`,{className:`py-2 text-standard`,children:e.maps}),(0,n.jsx)(`td`,{className:`py-2 text-subtile`,children:e.usage})]},e.class))})]})})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "600px"
  }}>
      <p className="text-subtile text-sm mb-6">Base radius scale — use the semantic tokens below in most cases.</p>
      <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "16px"
    }}>
        {radii.map(r => <div key={r.class} className="bg-card border border-subtile p-3" style={{
        borderRadius: r.class === "rounded-full" ? "9999px" : undefined,
        width: "140px",
        textAlign: "center"
      }}>
            <div className={\`w-16 h-16 bg-interaction mx-auto mb-2 \${r.class}\`} />
            <code className="text-xs text-interaction block">{r.class}</code>
            <p className="text-2xs text-subtile">{r.value}</p>
          </div>)}
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "600px"
  }}>
      <p className="text-subtile text-sm mb-6">Use these semantic classes — they adapt if the token values change globally.</p>
      <div className="bg-card rounded-card p-4 border border-subtile">
        <table style={{
        width: "100%",
        fontSize: "0.8125rem"
      }}>
          <thead>
            <tr style={{
            borderBottom: "1px solid rgb(var(--border-standard))"
          }}>
              <th className="text-left py-2 text-highlight font-medium">Class</th>
              <th className="text-left py-2 text-highlight font-medium">Maps to</th>
              <th className="text-left py-2 text-highlight font-medium">Usage</th>
            </tr>
          </thead>
          <tbody>
            {semanticRadii.map(r => <tr key={r.class} style={{
            borderBottom: "1px solid rgb(var(--border-subtile))"
          }}>
                <td className="py-2"><code className="text-xs text-interaction">{r.class}</code></td>
                <td className="py-2 text-standard">{r.maps}</td>
                <td className="py-2 text-subtile">{r.usage}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Scale`,`SemanticTokens`]}))();export{o as Scale,s as SemanticTokens,c as __namedExportsOrder,r as default};