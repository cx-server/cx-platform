import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Ci2TpDd0.js";import{b as n,c as r,n as i,r as a,s as o}from"./blocks-RRNhqIXK.js";import{t as s}from"./mdx-react-shim-BR2YnT47.js";import{AllVariants as c,WithClose as l,n as u,t as d}from"./Alert.stories-CAWq9B0l.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`alert`,children:`Alert`}),`
`,(0,m.jsx)(t.p,{children:`Displays a brief, important message that attracts attention without interrupting the user's task. Non-modal — stays inline with the content.`}),`
`,(0,m.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Use Alert when...`}),(0,m.jsx)(t.th,{children:`Don't use Alert when...`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Showing feedback after an action (success, error)`}),(0,m.jsx)(t.td,{children:`Requiring user confirmation (use Dialog)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Displaying system status (maintenance, warnings)`}),(0,m.jsx)(t.td,{children:`Showing transient notifications (use Toast)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Informing about important context`}),(0,m.jsx)(t.td,{children:`The message needs immediate action`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Providing non-blocking errors or tips`}),(0,m.jsx)(t.td,{children:`Content is purely decorative`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Variant`}),(0,m.jsx)(t.th,{children:`When to use`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`info`})}),(0,m.jsx)(t.td,{children:`General information, tips, guidance`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`positive`})}),(0,m.jsx)(t.td,{children:`Success confirmations, completed actions`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`negative`})}),(0,m.jsx)(t.td,{children:`Errors, failed operations, critical issues`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`warning`})}),(0,m.jsx)(t.td,{children:`Caution, consequences, pending actions`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`neutral`})}),(0,m.jsx)(t.td,{children:`Low-emphasis information, system notes`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`plain`})}),(0,m.jsx)(t.td,{children:`Minimal styling, for custom contexts`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`dismissible`,children:`Dismissible`}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsxs)(t.p,{children:[`Add `,(0,m.jsx)(t.code,{children:`onCloseClick`}),` to make the alert dismissible. Use for non-critical messages the user may want to hide.`]}),`
`,(0,m.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,m.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Keep messages concise — one or two sentences max`}),`
`,(0,m.jsx)(t.li,{children:`Use a header for scannability, body for detail`}),`
`,(0,m.jsxs)(t.li,{children:[`Match variant to severity (don't use `,(0,m.jsx)(t.code,{children:`positive`}),` for errors)`]}),`
`,(0,m.jsx)(t.li,{children:`Place alerts near the content they relate to`}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Don't stack more than 2 alerts in one view`}),`
`,(0,m.jsx)(t.li,{children:`Don't use alerts for marketing content`}),`
`,(0,m.jsxs)(t.li,{children:[`Don't use `,(0,m.jsx)(t.code,{children:`negative`}),` for non-critical validation hints`]}),`
`,(0,m.jsx)(t.li,{children:`Don't rely only on color — the icon conveys meaning too`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Renders with `,(0,m.jsx)(t.code,{children:`role="alert"`}),` — screen readers announce it immediately`]}),`
`,(0,m.jsx)(t.li,{children:`Icon provides visual redundancy beyond color`}),`
`,(0,m.jsx)(t.li,{children:`Close button is keyboard-accessible`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Alert } from "@tipico/ui/Alert";
`})}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Property`}),(0,m.jsx)(t.th,{children:`Detail`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Package`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Path`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`packages/libs/ui/src/components/Alert/`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Figma`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.a,{href:`https://www.figma.com/design/FazkRi1zigs8vJlcPzn8Xx/Tipico-Tailwind-DS`,rel:`nofollow`,children:`Alert Component`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Key`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`a0f3a07b9ee9015bc59b6bbe0d54443388a07b8c`})})]})]})]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),r(),u()}))();export{p as default};