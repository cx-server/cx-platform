import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-VTvy7VYz.js";import{b as n,c as r,r as i,s as a}from"./blocks-Db-ZyFc2.js";import{t as o}from"./mdx-react-shim-BGd8DGkX.js";import{Default as s,FullScreen as c,n as l,t as u}from"./Preloader.stories-Dbu4778f.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`preloader`,children:`Preloader`}),`
`,(0,p.jsx)(t.p,{children:`A full-screen loading overlay with a spinner. Blocks interaction while content is loading.`}),`
`,(0,p.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Use Preloader when...`}),(0,p.jsx)(t.th,{children:`Don't use Preloader when...`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`A full page is loading after navigation`}),(0,p.jsx)(t.td,{children:`A single section is loading (use Skeleton)`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`An async operation blocks the entire UI`}),(0,p.jsx)(t.td,{children:`Data is refreshing in the background`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Payment processing, form submission`}),(0,p.jsx)(t.td,{children:`Lazy-loaded images or components`})]})]})]}),`
`,(0,p.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,p.jsx)(i,{of:s}),`
`,(0,p.jsx)(t.h2,{id:`full-screen-with-overlay`,children:`Full Screen (with overlay)`}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,p.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Show after 300ms delay (avoid flash for fast loads)`}),`
`,(0,p.jsx)(t.li,{children:`Use for critical blocking operations (payment, auth)`}),`
`,(0,p.jsx)(t.li,{children:`Keep the overlay dark enough to prevent interaction`}),`
`]}),`
`,(0,p.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Don't show for operations under 500ms`}),`
`,(0,p.jsx)(t.li,{children:`Don't use for partial page loads (use Skeleton)`}),`
`,(0,p.jsx)(t.li,{children:`Don't leave the preloader visible indefinitely — add a timeout`}),`
`,(0,p.jsx)(t.li,{children:`Don't use multiple preloaders simultaneously`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Renders with `,(0,p.jsx)(t.code,{children:`role="status"`}),` — announced by screen readers`]}),`
`,(0,p.jsx)(t.li,{children:`Full overlay prevents keyboard interaction with background`}),`
`,(0,p.jsx)(t.li,{children:`Spinner has no accessible text (parent overlay provides context)`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Preloader } from "@tipico/ui/Preloader";

// Full screen loading
<Preloader />

// Custom spinner size
<Preloader spinnerSize="icon-xl" />
`})}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Property`}),(0,p.jsx)(t.th,{children:`Detail`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Package`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Path`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`packages/libs/ui/src/components/Preloader/`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:`Replaces`}),(0,p.jsx)(t.td,{children:`CircularLoading, MUI CircularProgress`})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Note:`}),` Preloader uses Portal internally and renders as a full-screen overlay. It cannot be rendered inside a Storybook Canvas without layout issues. The examples above simulate its appearance.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),o(),r(),l()}))();export{f as default};