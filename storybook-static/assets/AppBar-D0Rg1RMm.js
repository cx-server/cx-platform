import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Ci2TpDd0.js";import{b as n,c as r,r as i,s as a}from"./blocks-RRNhqIXK.js";import{t as o}from"./mdx-react-shim-BR2YnT47.js";import{Default as s,Transparent as c,WithClose as l,n as u,t as d}from"./AppBar.stories-BQNEWGTU.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`appbar`,children:`AppBar`}),`
`,(0,m.jsx)(t.p,{children:`The top navigation bar of a screen. Contains the page title, back button, and optional action buttons. Fixed at the top of the viewport.`}),`
`,(0,m.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Use AppBar when...`}),(0,m.jsx)(t.th,{children:`Don't use AppBar when...`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Every screen needs a header with navigation`}),(0,m.jsx)(t.td,{children:`Building a full desktop navigation (use custom nav)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Back navigation is needed`}),(0,m.jsx)(t.td,{children:`The page has no hierarchy (top-level landing)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Screen title must be visible`}),(0,m.jsx)(t.td,{children:`Content should be full-bleed without header`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,m.jsx)(i,{of:s}),`
`,(0,m.jsx)(t.h3,{id:`with-close-button`,children:`With Close Button`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h3,{id:`transparent-over-brand-gradient`,children:`Transparent (over brand gradient)`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,m.jsx)(t.p,{children:`AppBar is composed of sub-components:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<AppBar hasBackground>
  <AppBarBackButton id="back" onClick={goBack} />
  <AppBarPageTitle id="title">Page Title</AppBarPageTitle>
  <AppBarCloseButton id="close" onClick={close} />
</AppBar>
`})}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Sub-component`}),(0,m.jsx)(t.th,{children:`Purpose`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`AppBarBackButton`})}),(0,m.jsx)(t.td,{children:`Left arrow — navigates back`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`AppBarPageTitle`})}),(0,m.jsx)(t.td,{children:`Centered page title`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`AppBarCloseButton`})}),(0,m.jsx)(t.td,{children:`Right X — closes current flow`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`AppBarIconButton`})}),(0,m.jsx)(t.td,{children:`Generic icon button (custom actions)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`AppBarPill`})}),(0,m.jsx)(t.td,{children:`Badge/pill next to the title`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`TipicoLogo`})}),(0,m.jsx)(t.td,{children:`Brand logo (home screens)`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Prop`}),(0,m.jsx)(t.th,{children:`Type`}),(0,m.jsx)(t.th,{children:`Default`}),(0,m.jsx)(t.th,{children:`Description`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`hasBackground`})}),(0,m.jsx)(t.td,{children:`boolean`}),(0,m.jsx)(t.td,{children:`false`}),(0,m.jsx)(t.td,{children:`Adds solid background color`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`safeTop`})}),(0,m.jsx)(t.td,{children:`boolean`}),(0,m.jsx)(t.td,{children:`false`}),(0,m.jsx)(t.td,{children:`Adds safe area padding for notch devices`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`className`})}),(0,m.jsx)(t.td,{children:`string`}),(0,m.jsx)(t.td,{children:`—`}),(0,m.jsx)(t.td,{children:`Additional CSS classes`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,m.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Always include a `,(0,m.jsx)(t.code,{children:`BackButton`}),` or `,(0,m.jsx)(t.code,{children:`CloseButton`}),` for navigation`]}),`
`,(0,m.jsxs)(t.li,{children:[`Use `,(0,m.jsx)(t.code,{children:`hasBackground`}),` on content screens (not over hero images)`]}),`
`,(0,m.jsx)(t.li,{children:`Keep the title short (max ~25 characters)`}),`
`,(0,m.jsxs)(t.li,{children:[`Use `,(0,m.jsx)(t.code,{children:`safeTop`}),` on native/PWA screens with device notch`]}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Don't put multiple action buttons (max: back + 1 action)`}),`
`,(0,m.jsx)(t.li,{children:`Don't use for desktop-only layouts (AppBar is mobile-first)`}),`
`,(0,m.jsx)(t.li,{children:`Don't put form elements inside AppBar`}),`
`,(0,m.jsx)(t.li,{children:`Don't change AppBar between screens in the same flow`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Contains semantic navigation landmarks`}),`
`,(0,m.jsx)(t.li,{children:`Back/Close buttons are keyboard accessible`}),`
`,(0,m.jsx)(t.li,{children:`Page title serves as the visible heading for the screen`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { AppBar, AppBarBackButton, AppBarPageTitle, AppBarCloseButton } from "@tipico/ui/AppBar";
`})}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Property`}),(0,m.jsx)(t.th,{children:`Detail`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Package`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Path`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`packages/libs/ui/src/components/AppBar/`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Replaces`}),(0,m.jsx)(t.td,{children:`Header (Account), NavigationBar (Retail)`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`migration-guide`,children:`Migration guide`}),`
`,(0,m.jsx)(t.h3,{id:`before-custom-header`,children:`Before (custom Header)`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Header } from "components/Header";
<Header title="Settings" onBack={goBack} />
`})}),`
`,(0,m.jsx)(t.h3,{id:`after-ds-appbar`,children:`After (DS AppBar)`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { AppBar, AppBarBackButton, AppBarPageTitle } from "@tipico/ui/AppBar";
<AppBar hasBackground>
  <AppBarBackButton id="back" onClick={goBack} />
  <AppBarPageTitle id="title">Settings</AppBarPageTitle>
</AppBar>
`})})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),o(),r(),u()}))();export{p as default};