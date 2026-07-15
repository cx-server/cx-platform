import{i as e}from"./preload-helper-BdFrVu1K.js";import{b as t,c as n,n as r,r as i,s as a}from"./blocks-t6I_Xufi.js";import{t as o}from"./jsx-runtime-f3rHp9ZU.js";import{t as s}from"./mdx-react-shim-BOMfMsdk.js";import{Default as c,NonCloseable as l,n as u,t as d}from"./Dialog.stories-DMOj2Voa.js";function f(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`dialog`,children:`Dialog`}),`
`,(0,m.jsx)(n.p,{children:`A modal overlay that focuses user attention on a specific task or decision. Blocks interaction with the page behind it until dismissed.`}),`
`,(0,m.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsx)(n.p,{children:`| Use Dialog when... | Don't use Dialog when... |
|---|---|
| Requiring user confirmation before a destructive action | Showing a simple notification (use Toast) |
| Collecting a small amount of input | Presenting a full page of content (use a page) |
| Displaying important information that requires acknowledgment | Showing inline help or tips (use Tooltip or Alert) |
| Interrupting the flow for a required decision | Filtering or sorting a list (use Dropdown) |`}),`
`,(0,m.jsx)(n.h2,{id:`positions`,children:`Positions`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsxs)(n.p,{children:[`| Position | When to use |
|---|---|
| `,(0,m.jsx)(n.code,{children:`default`}),` | Standard modal — slides up from bottom on mobile, appears centered on desktop |
| `,(0,m.jsx)(n.code,{children:`bottom`}),` | Bottom sheet pattern — selection lists, payment methods, filters |
| `,(0,m.jsx)(n.code,{children:`center`}),` | Centered overlay — success confirmations, small decisions |`]}),`
`,(0,m.jsx)(n.h2,{id:`behavior`,children:`Behavior`}),`
`,(0,m.jsx)(n.h3,{id:`closeable-default`,children:`Closeable (default)`}),`
`,(0,m.jsx)(n.p,{children:`The user can dismiss the dialog by:`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Clicking the X button in the header`}),`
`,(0,m.jsx)(n.li,{children:`Clicking the backdrop overlay`}),`
`,(0,m.jsx)(n.li,{children:`Pressing Escape (keyboard)`}),`
`]}),`
`,(0,m.jsxs)(n.h3,{id:`non-closeable-closeablefalse`,children:[`Non-closeable (`,(0,m.jsx)(n.code,{children:`closeable={false}`}),`)`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n.p,{children:`Use when the user MUST take an action (session expired, mandatory acceptance). Remove the X button and disable backdrop-click-to-close.`}),`
`,(0,m.jsx)(n.h2,{id:`composition`,children:`Composition`}),`
`,(0,m.jsx)(n.p,{children:`Dialog is composed of sub-components:`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<Dialog id="my-dialog" isOpen={isOpen} onCloseClick={handleClose}>
  <DialogHeader title="Title" onCloseClick={handleClose} />
  <DialogContent>
    {/* Your content here */}
  </DialogContent>
</Dialog>
`})}),`
`,(0,m.jsxs)(n.p,{children:[`| Sub-component | Purpose |
|---|---|
| `,(0,m.jsx)(n.code,{children:`DialogHeader`}),` | Title bar with optional close button |
| `,(0,m.jsx)(n.code,{children:`DialogContent`}),` | Scrollable content area with padding |`]}),`
`,(0,m.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(n.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,m.jsx)(n.h3,{id:`do`,children:`Do`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Keep dialog content focused on one task`}),`
`,(0,m.jsx)(n.li,{children:`Provide a clear title that describes the purpose`}),`
`,(0,m.jsx)(n.li,{children:`Include a primary action button (confirm/submit/accept)`}),`
`,(0,m.jsxs)(n.li,{children:[`Use `,(0,m.jsx)(n.code,{children:`position="bottom"`}),` for mobile-first selection flows`]}),`
`,(0,m.jsx)(n.li,{children:`Always provide a way to dismiss (unless the action is mandatory)`}),`
`]}),`
`,(0,m.jsx)(n.h3,{id:`dont`,children:`Don't`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Don't nest dialogs inside dialogs`}),`
`,(0,m.jsx)(n.li,{children:`Don't use dialogs for simple yes/no that could be inline`}),`
`,(0,m.jsx)(n.li,{children:`Don't put long forms inside dialogs (use a dedicated page instead)`}),`
`,(0,m.jsx)(n.li,{children:`Don't auto-open dialogs on page load without user intent`}),`
`,(0,m.jsxs)(n.li,{children:[`Don't use `,(0,m.jsx)(n.code,{children:`closeable={false}`}),` unless truly mandatory (it frustrates users)`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[`Renders with `,(0,m.jsx)(n.code,{children:`role="dialog"`}),` and `,(0,m.jsx)(n.code,{children:`aria-modal="true"`})]}),`
`,(0,m.jsx)(n.li,{children:`Focus is trapped inside the dialog when open`}),`
`,(0,m.jsx)(n.li,{children:`Previous focus is restored when dialog closes`}),`
`,(0,m.jsx)(n.li,{children:`Body scroll is locked while dialog is visible`}),`
`,(0,m.jsx)(n.li,{children:`Escape key closes the dialog (when closeable)`}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Dialog } from "@tipico/ui";
import { DialogHeader } from "@tipico/ui/dist/components/Dialog/DialogHeader";
import { DialogContent } from "@tipico/ui/dist/components/Dialog/DialogContent";
`})}),`
`,(0,m.jsxs)(n.p,{children:[`| Property | Detail |
|---|---|
| Package | `,(0,m.jsx)(n.code,{children:`@tipico/ui`}),` |
| Path | `,(0,m.jsx)(n.code,{children:`packages/libs/ui/src/components/Dialog/`}),` |
| Figma | `,(0,m.jsx)(n.a,{href:`https://www.figma.com/design/FazkRi1zigs8vJlcPzn8Xx/Tipico-Tailwind-DS?node-id=dialog`,rel:`nofollow`,children:`Dialog Component`}),` |
| Replaces | AppDialog, Modal, ErrorModal, InfoModal, SuccessModal, GenericModal |`]}),`
`,(0,m.jsx)(n.h2,{id:`migration-guide`,children:`Migration guide`}),`
`,(0,m.jsx)(n.p,{children:`If your platform uses a custom dialog (AppDialog, Modal variants), here's how to migrate:`}),`
`,(0,m.jsx)(n.h3,{id:`before-custom`,children:`Before (custom)`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { AppDialog } from "common/components/AppDialog";

<AppDialog title="Confirm" onClose={handleClose}>
  <p>Are you sure?</p>
</AppDialog>
`})}),`
`,(0,m.jsx)(n.h3,{id:`after-ds`,children:`After (DS)`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Dialog } from "@tipico/ui";
import { DialogHeader } from "@tipico/ui/dist/components/Dialog/DialogHeader";
import { DialogContent } from "@tipico/ui/dist/components/Dialog/DialogContent";

<Dialog id="confirm-dialog" isOpen={isOpen} onCloseClick={handleClose}>
  <DialogHeader title="Confirm" onCloseClick={handleClose} />
  <DialogContent>
    <p>Are you sure?</p>
  </DialogContent>
</Dialog>
`})}),`
`,(0,m.jsx)(n.h3,{id:`key-differences`,children:`Key differences`}),`
`,(0,m.jsxs)(n.p,{children:[`| Custom | DS Dialog |
|---|---|
| `,(0,m.jsx)(n.code,{children:`onClose`}),` prop | `,(0,m.jsx)(n.code,{children:`onCloseClick`}),` prop |
| `,(0,m.jsx)(n.code,{children:`title`}),` on root | `,(0,m.jsx)(n.code,{children:`title`}),` on `,(0,m.jsx)(n.code,{children:`DialogHeader`}),` |
| Auto-visible | Controlled via `,(0,m.jsx)(n.code,{children:`isOpen`}),` |
| No focus management | Auto focus trap + restore |
| No scroll lock | Body scroll locked automatically |`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=o(),s(),n(),u()}))();export{p as default};