import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CME29FwW.js";import{b as n,c as r,r as i,s as a}from"./blocks-DPWIdT5o.js";import{t as o}from"./mdx-react-shim-DoPGp2pX.js";import{Steps as s,n as c,t as l}from"./ProgressBar.stories-CJ2NiuYR.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`progressbar`,children:`ProgressBar`}),`
`,(0,f.jsx)(t.p,{children:`Horizontal bar that visualizes progress from 0% to 100%, commonly used for multi-step flows or wagering requirements.`}),`
`,(0,f.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Use ProgressBar when...`}),(0,f.jsx)(t.th,{children:`Don't use ProgressBar when...`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Showing completion toward a goal (wagering, steps)`}),(0,f.jsx)(t.td,{children:`The process is indeterminate — use a spinner or Skeleton`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Visualizing numeric progress alongside a label`}),(0,f.jsx)(t.td,{children:`You need a circular indicator`})]})]})]}),`
`,(0,f.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,f.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:`Always pair with a text label showing the percentage or step count`}),`
`,(0,f.jsx)(t.li,{children:`Animate transitions smoothly when the value updates`}),`
`]}),`
`,(0,f.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:`Use extremely thin bars that are hard to perceive visually`}),`
`,(0,f.jsx)(t.li,{children:`Show progress bars for values that rarely change (static data)`}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[`Uses `,(0,f.jsx)(t.code,{children:`role="progressbar"`}),` with `,(0,f.jsx)(t.code,{children:`aria-valuenow`}),`, `,(0,f.jsx)(t.code,{children:`aria-valuemin`}),`, and `,(0,f.jsx)(t.code,{children:`aria-valuemax`})]}),`
`,(0,f.jsx)(t.li,{children:`Progress change is announced to assistive technology when the value updates significantly`}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { ProgressBar } from "@tipico/ui/ProgressBar";
`})}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Property`}),(0,f.jsx)(t.th,{children:`Detail`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Package`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Path`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`packages/libs/ui/src/components/ProgressBar/`})})]})]})]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),o(),r(),c()}))();export{d as default};