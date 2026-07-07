import{j as e}from"./jsx-runtime-8P-18mTY.js";import{a as j,b as r,I as n,c as f,d,e as t,f as a,T as k}from"./Toggle-CCT0L0fo.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-pbwLPNgv.js";import"./checkmark-Cbg41s1-.js";import"./index-lrnWVvcy.js";import"./chevron-down-icon-Cd9OjU95.js";const{useArgs:ee}=__STORYBOOK_MODULE_PREVIEW_API__,ue={title:"Components/Input/InputField",component:j,decorators:[i=>e.jsx("div",{className:"bg-input p-4",children:e.jsx("div",{className:"card p-4 max-w-sm mx-auto",children:e.jsx(i,{})})})],parameters:{layout:"fullscreen"},argTypes:{children:{},className:{control:{type:"text"}}},tags:["autodocs"]},l={argTypes:{},args:{children:[e.jsx(r,{children:"Username"}),e.jsx(n,{type:"text",id:"input-1",name:"input-1"})]}},p={argTypes:{},args:{children:[e.jsx(r,{children:"Email"}),e.jsx(n,{type:"email",id:"input-1",name:"input-1",required:!1}),e.jsx(f,{children:"Write your email address"})]}},c={argTypes:{},args:{children:[e.jsx(r,{children:"Email"}),e.jsx(n,{type:"email",id:"input-1",name:"input-1",required:!0}),e.jsx(f,{variant:"negative",children:"Not a valid email address!"})]}},u={argTypes:{},args:{children:[e.jsx(r,{children:"Email"}),e.jsx(n,{type:"email",id:"input-1",name:"input-1",required:!0}),e.jsx(f,{variant:"warning",children:"Add a valid email address"})]}},g={argTypes:{},args:{children:[e.jsx(r,{children:"Email"}),e.jsx(n,{type:"file",id:"input-1",name:"input-1",required:!0,formNoValidate:!0})]}},m={argTypes:{},args:{children:[e.jsx(r,{children:"Phone"}),e.jsx(n,{type:"tel",id:"input-1",name:"input-1",required:!0,formNoValidate:!0})]}},re=()=>{const[{agreeTerms:i,agreeConditions:s},o]=ee(),y=()=>o({agreeTerms:!i}),T=()=>o({agreeConditions:!s});return e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Legal"}),e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx(n,{id:"agree-terms-checkbox",name:"legal-checkbox-group",type:"checkbox",checked:i,onChange:y}),e.jsx(a,{className:"text-highlight",children:"I have read the terms"})]}),e.jsxs(t,{children:[e.jsx(n,{id:"agree-conditions-checkbox",name:"legal-checkbox-group",type:"checkbox",checked:s,onChange:T}),e.jsx(a,{children:"I agree with the conditions"})]})]})]})},h={args:{agreeTerms:!1,agreeConditions:!1},render:re},I={argTypes:{},args:{children:[e.jsx(r,{children:"Legal"}),e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx(n,{id:"agree-terms-checkmark",name:"legal-checkmark-group",type:"checkmark",onChange:()=>console.info("checked"),checked:!0}),e.jsx(a,{className:"text-highlight",children:"I have read the terms"})]}),e.jsxs(t,{children:[e.jsx(n,{id:"agree-conditions-checkmark",name:"legal-checkmark-group",type:"checkmark",onChange:()=>console.info("checked"),checked:!0}),e.jsx(a,{children:" I agree with the conditions"})]})]})]}},x={argTypes:{disabled:{control:"boolean",description:"Disables the radio inputs"}},args:{disabled:!1},render:({disabled:i})=>e.jsxs(j,{children:[e.jsx(r,{children:"Do you agree?"}),e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx(n,{id:"yes",name:"agreement-radio-group",type:"radio",checked:!0,disabled:i,value:"y",onChange:()=>{console.info("checked")}}),e.jsx(a,{children:"Yes"})]}),e.jsxs(t,{children:[e.jsx(n,{id:"no",name:"agreement-radio-group",type:"radio",disabled:i,value:"n",onChange:()=>{console.info("checked")}}),e.jsx(a,{children:"No"})]})]})]})},ie=()=>{const[{toggle:i,size:s,variant:o},y]=ee(),T=ne=>{y({toggle:ne.target.checked}),console.info("toggle")};return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(r,{children:"Toggle"}),e.jsx(d,{children:e.jsxs(t,{children:[e.jsx(k,{id:"toggle-option-1",onChange:T,checked:i,size:s,variant:o}),e.jsx(a,{children:"Option 1"})]})})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(j,{children:[e.jsx(r,{children:"Toggle Disabled"}),e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx(k,{id:"toggle-option-3",disabled:!0,onChange:()=>{console.info("toggle")},checked:!1,size:s,variant:o}),e.jsx(a,{children:"Option 1"})]}),e.jsxs(t,{children:[e.jsx(k,{id:"toggle-option-4",disabled:!0,onChange:()=>{console.info("toggle")},checked:!0,size:s,variant:o}),e.jsx(a,{children:"Option 2"})]})]})]})]})},F={argTypes:{toggle:{control:"boolean"},size:{control:{type:"radio"},options:["md","lg"]},variant:{control:{type:"radio"},options:["primary","success"]}},args:{toggle:!1,size:"md",variant:"primary"},render:ie};var b,O,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    children: [<InputFieldTitle>Username</InputFieldTitle>, <Input type="text" id="input-1" name="input-1" />]
  }
}`,...(C=(O=l.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var v,D,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    children: [<InputFieldTitle>Email</InputFieldTitle>, <Input type="email" id="input-1" name="input-1" required={false} />, <InputFieldDescription>Write your email address</InputFieldDescription>]
  }
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,S,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    children: [<InputFieldTitle>Email</InputFieldTitle>, <Input type="email" id="input-1" name="input-1" required={true} />, <InputFieldDescription variant="negative">Not a valid email address!</InputFieldDescription>]
  }
}`,...(q=(S=c.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var L,R,_;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    children: [<InputFieldTitle>Email</InputFieldTitle>, <Input type="email" id="input-1" name="input-1" required={true} />, <InputFieldDescription variant="warning">Add a valid email address</InputFieldDescription>]
  }
}`,...(_=(R=u.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,w,A;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    children: [<InputFieldTitle>Email</InputFieldTitle>, <Input type="file" id="input-1" name="input-1" required={true} formNoValidate={true} />]
  }
}`,...(A=(w=g.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var P,z,U;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    children: [<InputFieldTitle>Phone</InputFieldTitle>, <Input type="tel" id="input-1" name="input-1" required={true} formNoValidate={true} />]
  }
}`,...(U=(z=m.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var V,Y,B;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    agreeTerms: false,
    agreeConditions: false
  },
  render: RenderCheckboxInputField
}`,...(B=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var K,M,G;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    children: [<InputFieldTitle>Legal</InputFieldTitle>, <InputFieldOptionList>
                <InputFieldOption>
                    <Input id="agree-terms-checkmark" name="legal-checkmark-group" type="checkmark" onChange={() => console.info("checked")} checked />
                    <InputFieldOptionTitle className="text-highlight">I have read the terms</InputFieldOptionTitle>
                </InputFieldOption>
                <InputFieldOption>
                    <Input id="agree-conditions-checkmark" name="legal-checkmark-group" type="checkmark" onChange={() => console.info("checked")} checked />
                    <InputFieldOptionTitle> I agree with the conditions</InputFieldOptionTitle>
                </InputFieldOption>
            </InputFieldOptionList>]
  }
}`,...(G=(M=I.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var H,J,Q;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the radio inputs"
    }
  },
  args: {
    disabled: false
  },
  render: ({
    disabled
  }) => <InputField>
            <InputFieldTitle>Do you agree?</InputFieldTitle>
            <InputFieldOptionList>
                <InputFieldOption>
                    <Input id="yes" name="agreement-radio-group" type="radio" checked disabled={disabled} value="y" onChange={() => {
          console.info("checked");
        }} />
                    <InputFieldOptionTitle>Yes</InputFieldOptionTitle>
                </InputFieldOption>
                <InputFieldOption>
                    <Input id="no" name="agreement-radio-group" type="radio" disabled={disabled} value="n" onChange={() => {
          console.info("checked");
        }} />
                    <InputFieldOptionTitle>No</InputFieldOptionTitle>
                </InputFieldOption>
            </InputFieldOptionList>
        </InputField>
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`{
  argTypes: {
    toggle: {
      control: "boolean"
    },
    size: {
      control: {
        type: "radio"
      },
      options: ["md", "lg"]
    },
    variant: {
      control: {
        type: "radio"
      },
      options: ["primary", "success"]
    }
  },
  args: {
    toggle: false,
    size: "md",
    variant: "primary"
  },
  render: RenderToggleInput
}`,...($=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ge=["SimpleInputField","InputFieldWithDescription","ErrorInputField","WarningInputField","UploadInputField","PhoneInputField","CheckboxInputField","CheckmarkInputField","RadioInputField","ToggleInput"];export{h as CheckboxInputField,I as CheckmarkInputField,c as ErrorInputField,p as InputFieldWithDescription,m as PhoneInputField,x as RadioInputField,l as SimpleInputField,F as ToggleInput,g as UploadInputField,u as WarningInputField,ge as __namedExportsOrder,ue as default};
