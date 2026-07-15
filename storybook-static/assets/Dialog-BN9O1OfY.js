import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-Fp6XMQmd.js";import{b as n,c as r,n as i,r as a,s as o}from"./blocks-9ctrxEi2.js";import{t as s}from"./mdx-react-shim-poFJJWQx.js";import{Default as c,NonCloseable as l,n as u,t as d}from"./Dialog.stories-B2Yylmwa.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`dialog`,children:`Dialog`}),`
`,(0,m.jsx)(t.p,{children:`A modal overlay that focuses user attention on a specific task or decision. Blocks interaction with the page behind it until dismissed.`}),`
`,(0,m.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Use Dialog when...`}),(0,m.jsx)(t.th,{children:`Don't use Dialog when...`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Requiring user confirmation before a destructive action`}),(0,m.jsx)(t.td,{children:`Showing a simple notification (use Toast)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Collecting a small amount of input`}),(0,m.jsx)(t.td,{children:`Presenting a full page of content (use a page)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Displaying important information that requires acknowledgment`}),(0,m.jsx)(t.td,{children:`Showing inline help or tips (use Tooltip or Alert)`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Interrupting the flow for a required decision`}),(0,m.jsx)(t.td,{children:`Filtering or sorting a list (use Dropdown)`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`positions`,children:`Positions`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Position`}),(0,m.jsx)(t.th,{children:`When to use`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`default`})}),(0,m.jsx)(t.td,{children:`Standard modal — slides up from bottom on mobile, appears centered on desktop`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`bottom`})}),(0,m.jsx)(t.td,{children:`Bottom sheet pattern — selection lists, payment methods, filters`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`center`})}),(0,m.jsx)(t.td,{children:`Centered overlay — success confirmations, small decisions`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`behavior`,children:`Behavior`}),`
`,(0,m.jsx)(t.h3,{id:`closeable-default`,children:`Closeable (default)`}),`
`,(0,m.jsx)(t.p,{children:`The user can dismiss the dialog by:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Clicking the X button in the header`}),`
`,(0,m.jsx)(t.li,{children:`Clicking the backdrop overlay`}),`
`,(0,m.jsx)(t.li,{children:`Pressing Escape (keyboard)`}),`
`]}),`
`,(0,m.jsxs)(t.h3,{id:`non-closeable-closeablefalse`,children:[`Non-closeable (`,(0,m.jsx)(t.code,{children:`closeable={false}`}),`)`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.p,{children:`Use when the user MUST take an action (session expired, mandatory acceptance). Remove the X button and disable backdrop-click-to-close.`}),`
`,(0,m.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,m.jsx)(t.p,{children:`Dialog is composed of sub-components:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Dialog id="my-dialog" isOpen={isOpen} onCloseClick={handleClose}>
  <DialogHeader title="Title" onCloseClick={handleClose} />
  <DialogContent>
    {/* Your content here */}
  </DialogContent>
</Dialog>
`})}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Sub-component`}),(0,m.jsx)(t.th,{children:`Purpose`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`DialogHeader`})}),(0,m.jsx)(t.td,{children:`Title bar with optional close button`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`DialogContent`})}),(0,m.jsx)(t.td,{children:`Scrollable content area with padding`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,m.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Keep dialog content focused on one task`}),`
`,(0,m.jsx)(t.li,{children:`Provide a clear title that describes the purpose`}),`
`,(0,m.jsx)(t.li,{children:`Include a primary action button (confirm/submit/accept)`}),`
`,(0,m.jsxs)(t.li,{children:[`Use `,(0,m.jsx)(t.code,{children:`position="bottom"`}),` for mobile-first selection flows`]}),`
`,(0,m.jsx)(t.li,{children:`Always provide a way to dismiss (unless the action is mandatory)`}),`
`]}),`
`,(0,m.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`Don't nest dialogs inside dialogs`}),`
`,(0,m.jsx)(t.li,{children:`Don't use dialogs for simple yes/no that could be inline`}),`
`,(0,m.jsx)(t.li,{children:`Don't put long forms inside dialogs (use a dedicated page instead)`}),`
`,(0,m.jsx)(t.li,{children:`Don't auto-open dialogs on page load without user intent`}),`
`,(0,m.jsxs)(t.li,{children:[`Don't use `,(0,m.jsx)(t.code,{children:`closeable={false}`}),` unless truly mandatory (it frustrates users)`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Renders with `,(0,m.jsx)(t.code,{children:`role="dialog"`}),` and `,(0,m.jsx)(t.code,{children:`aria-modal="true"`})]}),`
`,(0,m.jsx)(t.li,{children:`Focus is trapped inside the dialog when open`}),`
`,(0,m.jsx)(t.li,{children:`Previous focus is restored when dialog closes`}),`
`,(0,m.jsx)(t.li,{children:`Body scroll is locked while dialog is visible`}),`
`,(0,m.jsx)(t.li,{children:`Escape key closes the dialog (when closeable)`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Dialog } from "@tipico/ui";
import { DialogHeader } from "@tipico/ui/dist/components/Dialog/DialogHeader";
import { DialogContent } from "@tipico/ui/dist/components/Dialog/DialogContent";
`})}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Property`}),(0,m.jsx)(t.th,{children:`Detail`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Package`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Path`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`packages/libs/ui/src/components/Dialog/`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Figma`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.a,{href:`https://www.figma.com/design/FazkRi1zigs8vJlcPzn8Xx/Tipico-Tailwind-DS?node-id=dialog`,rel:`nofollow`,children:`Dialog Component`})})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Replaces`}),(0,m.jsx)(t.td,{children:`AppDialog, Modal, ErrorModal, InfoModal, SuccessModal, GenericModal`})]})]})]}),`
`,(0,m.jsx)(t.h2,{id:`migration-guide`,children:`Migration guide`}),`
`,(0,m.jsx)(t.p,{children:`If your platform uses a custom dialog (AppDialog, Modal variants), here's how to migrate:`}),`
`,(0,m.jsx)(t.h3,{id:`before-custom`,children:`Before (custom)`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { AppDialog } from "common/components/AppDialog";

<AppDialog title="Confirm" onClose={handleClose}>
  <p>Are you sure?</p>
</AppDialog>
`})}),`
`,(0,m.jsx)(t.h3,{id:`after-ds`,children:`After (DS)`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Dialog } from "@tipico/ui";
import { DialogHeader } from "@tipico/ui/dist/components/Dialog/DialogHeader";
import { DialogContent } from "@tipico/ui/dist/components/Dialog/DialogContent";

<Dialog id="confirm-dialog" isOpen={isOpen} onCloseClick={handleClose}>
  <DialogHeader title="Confirm" onCloseClick={handleClose} />
  <DialogContent>
    <p>Are you sure?</p>
  </DialogContent>
</Dialog>
`})}),`
`,(0,m.jsx)(t.h3,{id:`key-differences`,children:`Key differences`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Custom`}),(0,m.jsx)(t.th,{children:`DS Dialog`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`onClose`}),` prop`]}),(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`onCloseClick`}),` prop`]})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`title`}),` on root`]}),(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`title`}),` on `,(0,m.jsx)(t.code,{children:`DialogHeader`})]})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`Auto-visible`}),(0,m.jsxs)(t.td,{children:[`Controlled via `,(0,m.jsx)(t.code,{children:`isOpen`})]})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`No focus management`}),(0,m.jsx)(t.td,{children:`Auto focus trap + restore`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`No scroll lock`}),(0,m.jsx)(t.td,{children:`Body scroll locked automatically`})]})]})]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),r(),u()}))();export{p as default};