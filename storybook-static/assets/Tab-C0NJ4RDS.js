import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DR8dukPV.js";import{b as n,c as r,n as i,r as a,s as o}from"./blocks-CBprdfes.js";import{t as s}from"./mdx-react-shim-DvkpjnUO.js";import{TabGroup as c,WithBadges as l,n as u,t as d}from"./Tab.stories-DPFPCmlc.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`tab`,children:`Tab`}),`
`,(0,m.jsx)(t.p,{children:`A button-like element used for switching between views or content panels. Tabs are always used in groups.`}),`
`,(0,m.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Use Tab when...`}),(0,m.jsx)(t.th,{children:`Don't use Tab when...`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Switching between related content panels`}),(0,m.jsx)(t.td,{children:`Navigating to a different page (use a link or nav)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Filtering a list by category`}),(0,m.jsx)(t.td,{children:`Triggering an action (use Button)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Organizing content at the same hierarchy level`}),(0,m.jsx)(t.td,{children:`Only 1 option exists (nothing to switch between)`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`tab-group`,children:`Tab Group`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsxs)(t.p,{children:[`Tabs are always used together. Wrap in a container with `,(0,m.jsx)(t.code,{children:`role="tablist"`}),`:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<div role="tablist">
  <Tab id="tab-1" selected={active === 0} onClick={() => setActive(0)}>All</Tab>
  <Tab id="tab-2" selected={active === 1} onClick={() => setActive(1)}>Live</Tab>
</div>
`})}),`
`,(0,m.jsx)(t.h2,{id:`with-badges`,children:`With Badges`}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsxs)(t.p,{children:[`Use `,(0,m.jsx)(t.code,{children:`badge`}),` to show a count — useful for "Open Bets (12)" patterns.`]}),`
`,(0,m.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,m.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Always have one tab selected by default`}),`
`,(0,m.jsx)(t.li,{children:`Keep labels short (1–2 words)`}),`
`,(0,m.jsx)(t.li,{children:`Use badges for dynamic counts (unread, active items)`}),`
`,(0,m.jsx)(t.li,{children:`Place tabs at the top of the content they control`}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Don't use more than 5 tabs in one group (consider Dropdown)`}),`
`,(0,m.jsx)(t.li,{children:`Don't use tabs for sequential steps (use Stepper)`}),`
`,(0,m.jsx)(t.li,{children:`Don't nest tab groups inside tab panels`}),`
`,(0,m.jsx)(t.li,{children:`Don't mix tabs with other navigation patterns in the same row`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Renders as `,(0,m.jsx)(t.code,{children:`<button role="tab">`}),` with `,(0,m.jsx)(t.code,{children:`aria-selected`})]}),`
`,(0,m.jsxs)(t.li,{children:[`Use `,(0,m.jsx)(t.code,{children:`role="tablist"`}),` on the container`]}),`
`,(0,m.jsxs)(t.li,{children:[`Content panels should have `,(0,m.jsx)(t.code,{children:`role="tabpanel"`}),` with `,(0,m.jsx)(t.code,{children:`aria-labelledby`})]}),`
`,(0,m.jsx)(t.li,{children:`Keyboard: Arrow keys navigate between tabs`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Tab } from "@tipico/ui/Tab";
`})}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Property`}),(0,m.jsx)(t.th,{children:`Detail`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Package`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Path`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`packages/libs/ui/src/components/Tab/`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Figma`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.a,{href:`https://www.figma.com/design/FazkRi1zigs8vJlcPzn8Xx/Tipico-Tailwind-DS`,rel:`nofollow`,children:`Tabs Component`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Replaces`}),(0,m.jsx)(t.td,{children:`TabsGeneric, MUI Tabs`})]})]})]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),r(),u()}))();export{p as default};