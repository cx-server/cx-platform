import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-CpaiSAt2.js";import{b as n,c as r,n as i,r as a,s as o}from"./blocks-CtBIamN1.js";import{t as s}from"./mdx-react-shim-k4GyUIVK.js";import{AllTypes as c,WithCurrency as l,WithLabel as u,n as d,t as f}from"./Input.stories-boj9DCCt.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`input`,children:`Input`}),`
`,(0,h.jsxs)(t.p,{children:[`A text field for collecting user input. Supports multiple types (text, search, password, currency, phone, checkbox) through the `,(0,h.jsx)(t.code,{children:`type`}),` prop.`]}),`
`,(0,h.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Use Input when...`}),(0,h.jsx)(t.th,{children:`Don't use Input when...`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Collecting text, email, or numeric data`}),(0,h.jsx)(t.td,{children:`Selecting from predefined options (use Dropdown)`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Search functionality`}),(0,h.jsx)(t.td,{children:`Toggling a binary state (use Toggle/Checkbox)`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Password entry`}),(0,h.jsx)(t.td,{children:`Long-form text (use InputTextArea)`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Currency amounts`}),(0,h.jsx)(t.td,{children:`Date selection (use DatePicker)`})]})]})]}),`
`,(0,h.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Type`}),(0,h.jsx)(t.th,{children:`Renders as`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`text`}),` (default)`]}),(0,h.jsx)(t.td,{children:`Standard text input`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`search`})}),(0,h.jsx)(t.td,{children:`Input with search icon + clear button`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`password`})}),(0,h.jsx)(t.td,{children:`Input with show/hide toggle`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`tel`})}),(0,h.jsx)(t.td,{children:`Telephone input with country selector`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`checkbox`})}),(0,h.jsx)(t.td,{children:`Checkbox variant`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`checkmark`})}),(0,h.jsx)(t.td,{children:`Checkmark variant`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`radio`})}),(0,h.jsx)(t.td,{children:`Radio button`})]})]})]}),`
`,(0,h.jsx)(t.h2,{id:`composition-with-inputfield`,children:`Composition with InputField`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.p,{children:`For labeled inputs with descriptions, compose with:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`<InputField id="field">
  <InputFieldTitle id="title">Label</InputFieldTitle>
  <Input id="input" name="field" />
  <InputFieldDescription id="desc">Helper text</InputFieldDescription>
</InputField>
`})}),`
`,(0,h.jsx)(t.h2,{id:`currency-input`,children:`Currency Input`}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsxs)(t.p,{children:[`Set `,(0,h.jsx)(t.code,{children:`showCurrency={true}`}),` and `,(0,h.jsx)(t.code,{children:`currency="€"`}),` to display a currency symbol prefix.`]}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`best-practices`,children:`Best practices`}),`
`,(0,h.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Always pair with `,(0,h.jsx)(t.code,{children:`InputFieldTitle`}),` for accessibility`]}),`
`,(0,h.jsxs)(t.li,{children:[`Use `,(0,h.jsx)(t.code,{children:`placeholder`}),` to show expected format, not as a label`]}),`
`,(0,h.jsxs)(t.li,{children:[`Use `,(0,h.jsx)(t.code,{children:`type="search"`}),` for search fields (adds clear button)`]}),`
`,(0,h.jsxs)(t.li,{children:[`Add `,(0,h.jsx)(t.code,{children:`InputFieldDescription`}),` for complex validation rules`]}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Don't use Input for multi-line text (use InputTextArea)`}),`
`,(0,h.jsx)(t.li,{children:`Don't hide the label — placeholder disappears on focus`}),`
`,(0,h.jsxs)(t.li,{children:[`Don't use `,(0,h.jsx)(t.code,{children:`type="number"`}),` for phone numbers (use `,(0,h.jsx)(t.code,{children:`type="tel"`}),`)`]}),`
`,(0,h.jsxs)(t.li,{children:[`Don't forget `,(0,h.jsx)(t.code,{children:`name`}),` prop — it's required for form submission`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Label connected via `,(0,h.jsx)(t.code,{children:`InputFieldTitle`}),` → `,(0,h.jsx)(t.code,{children:`htmlFor`})]}),`
`,(0,h.jsxs)(t.li,{children:[`Description linked via `,(0,h.jsx)(t.code,{children:`aria-describedby`})]}),`
`,(0,h.jsx)(t.li,{children:`Search type includes clear button with keyboard support`}),`
`,(0,h.jsx)(t.li,{children:`Password type includes accessible show/hide toggle`}),`
`,(0,h.jsx)(t.li,{children:`Disabled state communicated to assistive technology`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`code-reference`,children:`Code reference`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { Input, InputField, InputFieldTitle, InputFieldDescription } from "@tipico/ui/Input";
`})}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Property`}),(0,h.jsx)(t.th,{children:`Detail`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Package`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`@tipico/ui`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Path`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`packages/libs/ui/src/components/Input/`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Figma`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.a,{href:`https://www.figma.com/design/FazkRi1zigs8vJlcPzn8Xx/Tipico-Tailwind-DS`,rel:`nofollow`,children:`Input Component`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Key`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`497a56c5db2be7ad02473200b7b93dc030098247`})})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`Replaces`}),(0,h.jsx)(t.td,{children:`AppInput, custom MUI TextField wrappers`})]})]})]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),r(),d()}))();export{m as default};