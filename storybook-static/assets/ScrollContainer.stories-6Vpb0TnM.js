import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as l}from"./index-Cs7sjTYM.js";import{S as y}from"./ScrollContainer-BTGyWr62.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-La_wTmJS.js";import"./chevron-right-icon-_rshvSJP.js";import"./index-lrnWVvcy.js";const T={title:"Retail Components/ScrollContainer",component:y,tags:["autodocs"],args:{children:[e.jsx("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aut excepturi aliquid amet dolore eaque nisi ullam! Nemo, consectetur libero?"},0),e.jsx("p",{children:"Sunt consequatur, ipsum iure velit autem fuga dolore consequuntur voluptatibus eaque praesentium exercitationem, explicabo laborum. Quo dolore ut accusamus est."},1),e.jsx("p",{children:"Velit sint, vero, tenetur ducimus maiores, sunt consequuntur incidunt fuga enim magnam fugiat delectus assumenda laudantium sit! Id, maxime molestiae?"},2),e.jsx("p",{children:"Perspiciatis quod iure quibusdam officiis, delectus ab at amet minus, ducimus placeat sunt consectetur rerum vitae alias nesciunt, dicta dolorem?"},3),e.jsx("p",{children:"Nemo, natus optio sequi error voluptas tempore est illo consequatur unde eveniet quisquam sapiente ab rerum laborum facilis voluptatem maiores."},4)]},decorators:[r=>e.jsx("div",{className:"mx-auto w-80 h-40",children:e.jsx(r,{})})]},s={},o={args:{direction:"horizontal",className:"flex gap-6"}},a={args:{showPages:!0}},t={args:{snap:"center",direction:"horizontal",className:"flex gap-6 *:shrink-0 *:w-48 *:border *:p-1 *:rounded"}},n={args:{showShadow:!0}},i={args:{scrollByFactor:.5}};function I({children:r}){const[R,F]=l.useState(null);return l.useEffect(()=>{setTimeout(()=>F(document.getElementById("btns-container")))},[]),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold",children:"Scroll container"}),e.jsx("div",{className:"mx-auto w-80 h-40 relative",children:e.jsx(y,{scrollButtonsPortalRef:R,children:r})})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold",children:"Separate container for buttons"}),e.jsx("div",{id:"btns-container",className:"border rounded p-2"})]})]})}const c={render:r=>e.jsx(I,{children:r.children}),parameters:{docs:{source:{transform:()=>`
<div className="flex gap-2">
    <div>
        <h2 className="font-semibold">Scroll container</h2>
        <div className="mx-auto w-80 h-40 relative">
            <ScrollContainer scrollButtonsPortalRef={document.getElementById("btns-container")}>{children}</ScrollContainer>
        </div>
    </div>
    <div>
        <h2 className="font-semibold">Separate container for buttons</h2>
        <div id="btns-container" className="border rounded p-2" />
    </div>
</div>`}}}};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,h,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    className: "flex gap-6"
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showPages: true
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,b,N;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    snap: "center",
    direction: "horizontal",
    className: "flex gap-6 *:shrink-0 *:w-48 *:border *:p-1 *:rounded"
  }
}`,...(N=(b=t.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var j,C,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showShadow: true
  }
}`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var B,P,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    scrollByFactor: 0.5
  }
}`,...(q=(P=i.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var W,E,z;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <CustomButtonPositionWrapper>{args.children}</CustomButtonPositionWrapper>,
  parameters: {
    docs: {
      source: {
        transform: () => \`
<div className="flex gap-2">
    <div>
        <h2 className="font-semibold">Scroll container</h2>
        <div className="mx-auto w-80 h-40 relative">
            <ScrollContainer scrollButtonsPortalRef={document.getElementById("btns-container")}>{children}</ScrollContainer>
        </div>
    </div>
    <div>
        <h2 className="font-semibold">Separate container for buttons</h2>
        <div id="btns-container" className="border rounded p-2" />
    </div>
</div>\`
      }
    }
  }
}`,...(z=(E=c.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const U=["Default","Horizontal","WithPages","WithCenterSnap","WithShadows","CustomScrollFactor","CustomPositionOfScrollButtons"];export{c as CustomPositionOfScrollButtons,i as CustomScrollFactor,s as Default,o as Horizontal,t as WithCenterSnap,a as WithPages,n as WithShadows,U as __namedExportsOrder,T as default};
