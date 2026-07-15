import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CRUx604k.js";import{b as n,c as r,r as i,s as a}from"./blocks-CHfmhAUj.js";import{t as o}from"./mdx-react-shim-DM5xVLe9.js";import{Default as s,LargeSpinner as c,SmallSpinner as l,n as u,t as d}from"./Preloader.stories-C9gzYAZr.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`preloader`,children:`Preloader`}),`
`,(0,m.jsx)(t.p,{children:`A full-screen loading overlay with a spinner. Blocks interaction while content is loading.`}),`
`,(0,m.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Use Preloader when...`}),(0,m.jsx)(t.th,{children:`Don't use Preloader when...`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`A full page is loading after navigation`}),(0,m.jsx)(t.td,{children:`A single section is loading (use Skeleton)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`An async operation blocks the entire UI`}),(0,m.jsx)(t.td,{children:`Data is refreshing in the background`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Payment processing, form submission`}),(0,m.jsx)(t.td,{children:`Lazy-loaded images or components`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,m.jsx)(i,{of:s}),`
`,(0,m.jsx)(t.h2,{id:`small-spinner`,children:`Small Spinner`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`large-spinner`,children:`Large Spinner`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,m.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Show after 300ms delay (avoid flash for fast loads)`}),`
`,(0,m.jsx)(t.li,{children:`Use for critical blocking operations (payment, auth)`}),`
`,(0,m.jsx)(t.li,{children:`Keep the overlay dark enough to prevent interaction`}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Don't show for operations under 500ms`}),`
`,(0,m.jsx)(t.li,{children:`Don't use for partial page loads (use Skeleton)`}),`
`,(0,m.jsx)(t.li,{children:`Don't leave the preloader visible indefinitely — add a timeout`}),`
`,(0,m.jsx)(t.li,{children:`Don't use multiple preloaders simultaneously`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Renders with `,(0,m.jsx)(t.code,{children:`role="status"`}),` — announced by screen readers`]}),`
`,(0,m.jsx)(t.li,{children:`Full overlay prevents keyboard interaction with background`}),`
`,(0,m.jsx)(t.li,{children:`Spinner has no accessible text (parent overlay provides context)`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Preloader } from "@tipico/ui/Preloader";

// Full screen loading
<Preloader />

// Custom spinner size
<Preloader spinnerSize="icon-xl" />
`})}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Property`}),(0,m.jsx)(t.th,{children:`Detail`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Package`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Path`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`packages/libs/ui/src/components/Preloader/`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Replaces`}),(0,m.jsx)(t.td,{children:`CircularLoading, MUI CircularProgress`})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Note:`}),` Preloader uses Portal internally and renders as a full-screen overlay. It cannot be rendered inside a Storybook Canvas without layout issues. The examples above simulate its appearance.`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),o(),r(),u()}))();export{p as default};