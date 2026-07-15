import{i as e}from"./preload-helper-BdFrVu1K.js";import{b as t,c as n,n as r,r as i,s as a}from"./blocks-t6I_Xufi.js";import{t as o}from"./jsx-runtime-f3rHp9ZU.js";import{t as s}from"./mdx-react-shim-BOMfMsdk.js";import{AllVariants as c,Sizes as l,n as u,t as d}from"./Button.stories-BmBHepWS.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`button`,children:`Button`}),`
`,(0,m.jsx)(n.p,{children:`A clickable element that triggers an action. The most fundamental interactive component in the Design System.`}),`
`,(0,m.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsx)(n.p,{children:`| Use Button when... | Don't use Button when... |
|---|---|
| Triggering an action (submit, confirm, delete) | Navigating to another page (use a link instead) |
| A primary or secondary call-to-action is needed | The action is purely navigational |
| Submitting a form | Toggling a state (use Toggle or Checkbox) |
| Opening a dialog or modal | Showing supplementary info (use a tooltip trigger) |`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.strong,{children:`Exception:`}),` Use `,(0,m.jsx)(n.code,{children:`variant="link"`}),` when the action looks like navigation but triggers behavior (e.g. "Forgot password?" that opens a dialog).`]}),`
`,(0,m.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsxs)(n.p,{children:[`| Variant | When to use |
|---|---|
| `,(0,m.jsx)(n.code,{children:`primary`}),` | Main action on the page. One per view. |
| `,(0,m.jsx)(n.code,{children:`secondary`}),` | Supporting action next to a primary button. |
| `,(0,m.jsx)(n.code,{children:`outline`}),` | Tertiary action, less visual weight. |
| `,(0,m.jsx)(n.code,{children:`link`}),` | Inline action that looks like a text link. |
| `,(0,m.jsx)(n.code,{children:`brand`}),` | Brand-colored CTA (Tipico red). Use sparingly. |
| `,(0,m.jsx)(n.code,{children:`success`}),` | Confirming a positive outcome (e.g. "Deposit confirmed"). |
| `,(0,m.jsx)(n.code,{children:`negative`}),` | Destructive action (delete, cancel bet). |
| `,(0,m.jsx)(n.code,{children:`warning`}),` | Action with consequences (e.g. "Close account"). |
| `,(0,m.jsx)(n.code,{children:`info`}),` | Informational action (e.g. "Learn more"). |
| `,(0,m.jsx)(n.code,{children:`icon`}),` | Icon-only button with no text label. |`]}),`
`,(0,m.jsx)(n.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsxs)(n.p,{children:[`| Size | Height | Use case |
|---|---|---|
| `,(0,m.jsx)(n.code,{children:`xs`}),` | 32px | Compact UI, table actions, inline |
| `,(0,m.jsx)(n.code,{children:`sm`}),` | 32px | Secondary actions, tight spaces |
| `,(0,m.jsx)(n.code,{children:`md`}),` | 40px | Default. Most buttons. |
| `,(0,m.jsx)(n.code,{children:`lg`}),` | 48px | Primary CTAs, mobile touch targets |`]}),`
`,(0,m.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(n.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,m.jsx)(n.h3,{id:`do`,children:`Do`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Always provide a descriptive label that explains the action ("Place Bet", not "OK")`}),`
`,(0,m.jsxs)(n.li,{children:[`Use `,(0,m.jsx)(n.code,{children:`autoWidth`}),` for inline buttons, full-width for form submissions`]}),`
`,(0,m.jsxs)(n.li,{children:[`Only one `,(0,m.jsx)(n.code,{children:`primary`}),` button per view — additional actions use `,(0,m.jsx)(n.code,{children:`secondary`}),` or `,(0,m.jsx)(n.code,{children:`outline`})]}),`
`,(0,m.jsx)(n.li,{children:`Disable the button when the action is not available (with a reason visible to the user)`}),`
`]}),`
`,(0,m.jsx)(n.h3,{id:`dont`,children:`Don't`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[`Don't use multiple `,(0,m.jsx)(n.code,{children:`brand`}),` buttons on one screen`]}),`
`,(0,m.jsxs)(n.li,{children:[`Don't use `,(0,m.jsx)(n.code,{children:`negative`}),` for non-destructive actions`]}),`
`,(0,m.jsx)(n.li,{children:`Don't rely only on color to communicate meaning (add an icon or label)`}),`
`,(0,m.jsxs)(n.li,{children:[`Don't make buttons smaller than `,(0,m.jsx)(n.code,{children:`sm`}),` on touch devices`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[`Renders as a native `,(0,m.jsx)(n.code,{children:`<button>`}),` element (full keyboard support built-in)`]}),`
`,(0,m.jsxs)(n.li,{children:[`When `,(0,m.jsx)(n.code,{children:`href`}),` is provided, renders as `,(0,m.jsx)(n.code,{children:`<a>`}),` with button styling`]}),`
`,(0,m.jsxs)(n.li,{children:[`Use `,(0,m.jsx)(n.code,{children:`id`}),` prop for test identification (`,(0,m.jsx)(n.code,{children:`data-testid`}),` is set automatically)`]}),`
`,(0,m.jsx)(n.li,{children:`Disabled buttons are still visible in the DOM — screen readers announce them as disabled`}),`
`,(0,m.jsx)(n.li,{children:`Color contrast meets WCAG AA for all variants against both light and dark backgrounds`}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Button } from "@tipico/ui";
`})}),`
`,(0,m.jsxs)(n.p,{children:[`| Property | Detail |
|---|---|
| Package | `,(0,m.jsx)(n.code,{children:`@tipico/ui`}),` |
| Path | `,(0,m.jsx)(n.code,{children:`packages/libs/ui/src/components/Button/`}),` |
| Figma | `,(0,m.jsx)(n.a,{href:`https://www.figma.com/design/FazkRi1zigs8vJlcPzn8Xx/Tipico-Tailwind-DS?node-id=button`,rel:`nofollow`,children:`Button Component`}),` |
| Key | `,(0,m.jsx)(n.code,{children:`be786d7e780c44c5d278ed3a4653cac177eae21e`}),` |`]}),`
`,(0,m.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,m.jsx)(n.h3,{id:`form-submission`,children:`Form submission`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<form onSubmit={handleSubmit}>
  <Button id="submit-bet" variant="primary" size="lg">
    Place Bet
  </Button>
</form>
`})}),`
`,(0,m.jsx)(n.h3,{id:`action-pair`,children:`Action pair`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<div className="flex gap-2">
  <Button id="cancel" variant="outline" autoWidth>
    Cancel
  </Button>
  <Button id="confirm" variant="primary" autoWidth>
    Confirm Deposit
  </Button>
</div>
`})}),`
`,(0,m.jsx)(n.h3,{id:`destructive-action`,children:`Destructive action`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<Button id="delete" variant="negative" autoWidth>
  Delete Account
</Button>
`})})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=o(),s(),n(),u()}))();export{p as default};