import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-B2mmKava.js";import{b as n,c as r,r as i,s as a}from"./blocks-CxnmAqSI.js";import{t as o}from"./mdx-react-shim-ioWSVJz3.js";import{ContentPlaceholder as s,n as c,t as l}from"./Skeleton.stories-CAY6tQ4x.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,f.jsx)(t.p,{children:`Loading placeholder that mirrors the shape of incoming content while data is being fetched.`}),`
`,(0,f.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Use Skeleton when...`}),(0,f.jsx)(t.th,{children:`Don't use Skeleton when...`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Content layout is known but data hasn't loaded yet`}),(0,f.jsx)(t.td,{children:`The wait is less than 200ms — avoid flashing a skeleton`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`You want to reduce perceived load time`}),(0,f.jsx)(t.td,{children:`An error state should be shown instead (use EmptyState)`})]})]})]}),`
`,(0,f.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,f.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:`Match the skeleton shape to the actual content dimensions`}),`
`,(0,f.jsx)(t.li,{children:`Use a subtle shimmer animation to indicate loading`}),`
`]}),`
`,(0,f.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:`Show skeletons indefinitely — add a timeout fallback with an error message`}),`
`,(0,f.jsx)(t.li,{children:`Use skeletons for interactive elements that block user input`}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[`Skeleton regions are marked with `,(0,f.jsx)(t.code,{children:`aria-busy="true"`}),` while loading`]}),`
`,(0,f.jsxs)(t.li,{children:[`Animation respects `,(0,f.jsx)(t.code,{children:`prefers-reduced-motion`}),` (falls back to static gray)`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { Skeleton } from "@tipico/ui/Skeleton";
`})}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Property`}),(0,f.jsx)(t.th,{children:`Detail`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Package`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:`Path`}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`packages/libs/ui/src/components/Skeleton/`})})]})]})]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),o(),r(),c()}))();export{d as default};