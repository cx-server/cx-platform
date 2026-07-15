import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-CME29FwW.js";import{t as a}from"./react-dom-D7PY4sVd.js";import{n as o,t as s}from"./Article-Btl-36Oh.js";import{n as c,r as l,t as u}from"./Button-DgpJTkiA.js";function d({children:e,className:t,addAnimation:n=!1,isVisible:r=!1,backdrop:i=!0,...a}){return(0,f.jsx)(`div`,{"data-testid":`overlay`,className:`fixed z-30 inset-0 ${t??``} ${n?r?`animate-fade-in`:`animate-fade-out`:``} ${i?`bg-black bg-opacity-40`:`bg-transparent pointer-events-none [&>*]:pointer-events-auto`}`,...a,children:e})}var f,p=t((()=>{f=i()})),m=t((()=>{p()}));function h(){return C+=1,`scroll-lock-${C}-${Date.now()}`}function g(){let e=document.documentElement.getAttribute(S);return e?new Set(e.split(`,`)):new Set}function _(e){e.size>0?(document.documentElement.setAttribute(S,[...e].join(`,`)),document.body.style.overflow=`hidden`):(document.documentElement.removeAttribute(S),document.body.style.overflow=``)}function v(e){let t=g();t.add(e),_(t)}function y(e){let t=g();t.delete(e),_(t)}function b(e){let t=(0,x.useRef)(null),n=(0,x.useCallback)(()=>{t.current||=h(),v(t.current)},[]),r=(0,x.useCallback)(()=>{t.current&&=(y(t.current),null)},[]);return(0,x.useEffect)(()=>{e?n():r()},[e,n,r]),(0,x.useEffect)(()=>()=>{t.current&&=(y(t.current),null)},[]),{lock:n,unlock:r}}var x,S,C,w=t((()=>{x=n(r(),1),S=`data-scroll-locks`,C=0})),T,E,D,O,k,A=t((()=>{T=i(),E=n(r(),1),D=n(a(),1),O=`MODALS_ROOT`,k=({id:e,children:t})=>{let n=e||O,[r,i]=(0,E.useState)(null),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a.current)return;let e=a.current,t=null,r=null,o=e?.getRootNode();return o instanceof ShadowRoot&&(r=o.firstElementChild),r?(t=r?.querySelector(`#${n}`),t||(t=document.createElement(`div`),t.id=n,r.appendChild(t))):(t=document.getElementById(n),t||(t=document.createElement(`div`),t.id=n,document.body.appendChild(t))),i(t),()=>{t&&r?.contains(t)&&r.removeChild(t)}},[n]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`div`,{ref:a,style:{display:`none`}}),r&&(0,D.createPortal)(t,r)]})}}));function j({isOpen:e=!0,onCloseClick:t,closeable:n=!0,className:r,panelClassName:i,panelStyle:a,children:o,portalId:s,id:c=`dialog`,position:l=`default`,backdrop:u=!0,overlay:f=!0,isCustomPosition:p=!1,animationIn:m=`animate-slide-up`,animationOut:h=`animate-slide-down`}){let[g,_]=(0,N.useState)(!1),[v,y]=(0,N.useState)(!1),x=(0,N.useRef)(null),S=(0,N.useRef)(null),C=(0,N.useRef)(!1);b(f&&e);let w=(0,N.useCallback)((e=!0)=>{C.current||=(S.current=document.activeElement,!0),_(!0),e&&y(!0)},[]),T=(0,N.useCallback)(()=>{C.current&&S.current&&document.contains(S.current)&&(S.current.focus({preventScroll:!0}),C.current=!1,S.current=null)},[]);(0,N.useEffect)(()=>{e&&w(!1)},[e,w]),(0,N.useLayoutEffect)(()=>{g&&!e&&(y(!0),T())},[e,g,T]),(0,N.useEffect)(()=>()=>{T()},[T]);let E=(0,N.useCallback)(e=>{!n||v||t?.(e)},[n,v,t]),D=(0,N.useCallback)(t=>{if(t.target!==t.currentTarget)return;let n=t.target.classList.contains(h);y(!1),!e&&n&&_(!1)},[e,h]),O=e=>{e.stopPropagation()};if(!g&&!v)return null;let A=g?`animate-fade-in`:`animate-fade-out`,j=f?p?`center`:l:`default`,P=`dialog dialog-${j} ${r??``}`,F=(0,M.jsx)(`div`,{ref:x,className:`
                        dialog-panel
                        ${p?`fixed`:``} 
                        ${e?m:h}
                        ${i||``}
                        pointer-events-auto
                    `,style:a,onClick:O,onAnimationEnd:D,"aria-modal":`true`,"aria-labelledby":c,role:`dialog`,tabIndex:-1,children:o});return(0,M.jsx)(k,{id:s,children:f?(0,M.jsx)(d,{id:c,"data-testid":c,role:`alertdialog`,isVisible:g,onClick:E,className:P,addAnimation:!0,backdrop:u,children:F}):(0,M.jsx)(`div`,{id:c,"data-testid":c,role:`alertdialog`,className:`fixed w-full z-30 ${j===`bottom`?`bottom-0`:``} ${P} ${A} `,children:F})})}var M,N,P=t((()=>{M=i(),N=n(r(),1),m(),w(),A()}));function F({id:e=`dialog-header`,className:t,centralComponent:n,leftComponent:r,rightComponent:i,centralWrapperClassName:a,...o}){return(0,I.jsxs)(`div`,{id:e,className:`grid grid-cols-[auto_1fr_auto] items-center min-h-14 ${t??``}`,...o,children:[(0,I.jsx)(`div`,{className:`justify-self-start`,children:r}),n&&(0,I.jsx)(`div`,{className:`justify-self-center px-2 font-medium text-lg text-highlight text-wrap ${a??``}`,children:n}),(0,I.jsx)(`div`,{className:`justify-self-end`,children:i})]})}var I,L=t((()=>{I=i()}));function R({id:e=`dialog-content`,className:t,title:n,iconComponent:r,children:i,buttonId:a,buttonLabel:o,buttonDisabled:l=!1,secondaryButtonDisabled:u=!1,onButtonClick:d,secondaryButtonId:f,secondaryButtonLabel:p,onSecondaryButtonClick:m,footer:h}){let g=r?(0,B.cloneElement)(r,{className:`size-full ${r.props.className??``}`}):null;return(0,z.jsxs)(`div`,{id:e,"data-testid":e,className:`pt-2 flex flex-col gap-6 ${t??``}`,children:[(0,z.jsxs)(`div`,{className:`flex flex-col gap-2 items-center w-full`,children:[g&&(0,z.jsx)(`div`,{className:`size-[72px] flex items-center justify-center`,children:g}),(0,z.jsxs)(s,{id:`${e}-article`,className:`text-center w-full`,children:[n&&(0,z.jsx)(`div`,{className:`text-xl font-medium text-highlight py-0`,children:n}),(0,z.jsx)(`div`,{children:i})]})]}),(d||m)&&(0,z.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[d&&(0,z.jsx)(c,{id:a??`${e}-button`,variant:`primary`,size:`lg`,disabled:l,onClick:d,children:o}),m&&(0,z.jsx)(c,{id:f??`${e}-secondary-button`,variant:`outline`,size:`lg`,disabled:u,onClick:m,children:p})]}),h]})}var z,B,V=t((()=>{z=i(),B=n(r(),1),o(),l()})),H=t((()=>{P(),L(),V()})),U=e({BottomSheet:()=>J,CenteredDialog:()=>X,Default:()=>q,NonCloseable:()=>Y,__namedExportsOrder:()=>Z,default:()=>K}),W,G,K,q,J,Y,X,Z,Q=t((()=>{W=n(r(),1),u(),H(),G=i(),K={title:`Components/Dialog`,component:j,tags:[],argTypes:{isOpen:{control:`boolean`,description:`Controls dialog visibility`},closeable:{control:`boolean`,description:`Whether the dialog can be closed by clicking overlay or X`},position:{control:`select`,options:[`default`,`bottom`,`center`],description:`Dialog position on screen`},backdrop:{control:`boolean`,description:`Show dark backdrop overlay`}},args:{isOpen:!0,closeable:!0,position:`default`,backdrop:!0},parameters:{layout:`fullscreen`}},q={render:function(){let[e,t]=(0,W.useState)(!1);return(0,G.jsxs)(`div`,{style:{padding:`24px`},children:[(0,G.jsx)(c,{id:`open-dialog`,variant:`primary`,autoWidth:!0,onClick:()=>t(!0),children:`Open Dialog`}),(0,G.jsxs)(j,{id:`demo-dialog`,isOpen:e,onCloseClick:()=>t(!1),children:[(0,G.jsx)(F,{title:`Confirm Action`,onCloseClick:()=>t(!1)}),(0,G.jsxs)(R,{children:[(0,G.jsx)(`p`,{style:{marginBottom:`16px`},children:`Are you sure you want to proceed with this action?`}),(0,G.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,justifyContent:`flex-end`},children:[(0,G.jsx)(c,{id:`cancel`,variant:`outline`,autoWidth:!0,onClick:()=>t(!1),children:`Cancel`}),(0,G.jsx)(c,{id:`confirm`,variant:`primary`,autoWidth:!0,onClick:()=>t(!1),children:`Confirm`})]})]})]})]})}},J={render:function(){let[e,t]=(0,W.useState)(!1);return(0,G.jsxs)(`div`,{style:{padding:`24px`},children:[(0,G.jsx)(c,{id:`open-bottom`,variant:`primary`,autoWidth:!0,onClick:()=>t(!0),children:`Open Bottom Sheet`}),(0,G.jsxs)(j,{id:`bottom-dialog`,isOpen:e,onCloseClick:()=>t(!1),position:`bottom`,children:[(0,G.jsx)(F,{title:`Select Payment Method`,onCloseClick:()=>t(!1)}),(0,G.jsx)(R,{children:(0,G.jsx)(`p`,{children:`Choose how you'd like to deposit funds.`})})]})]})}},Y={render:function(){let[e,t]=(0,W.useState)(!1);return(0,G.jsxs)(`div`,{style:{padding:`24px`},children:[(0,G.jsx)(c,{id:`open-locked`,variant:`warning`,autoWidth:!0,onClick:()=>t(!0),children:`Open Mandatory Dialog`}),(0,G.jsxs)(j,{id:`locked-dialog`,isOpen:e,closeable:!1,children:[(0,G.jsx)(F,{title:`Session Expired`}),(0,G.jsxs)(R,{children:[(0,G.jsx)(`p`,{style:{marginBottom:`16px`},children:`Your session has expired. Please log in again.`}),(0,G.jsx)(c,{id:`relogin`,variant:`primary`,onClick:()=>t(!1),children:`Log In`})]})]})]})}},X={render:function(){let[e,t]=(0,W.useState)(!1);return(0,G.jsxs)(`div`,{style:{padding:`24px`},children:[(0,G.jsx)(c,{id:`open-center`,variant:`primary`,autoWidth:!0,onClick:()=>t(!0),children:`Open Centered`}),(0,G.jsxs)(j,{id:`center-dialog`,isOpen:e,onCloseClick:()=>t(!1),position:`center`,children:[(0,G.jsx)(F,{title:`Success`,onCloseClick:()=>t(!1)}),(0,G.jsx)(R,{children:(0,G.jsx)(`p`,{children:`Your bet has been placed successfully!`})})]})]})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function DialogDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: "24px"
    }}>
        <Button id="open-dialog" variant="primary" autoWidth onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog id="demo-dialog" isOpen={isOpen} onCloseClick={() => setIsOpen(false)}>
          <DialogHeader title="Confirm Action" onCloseClick={() => setIsOpen(false)} />
          <DialogContent>
            <p style={{
            marginBottom: "16px"
          }}>Are you sure you want to proceed with this action?</p>
            <div style={{
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end"
          }}>
              <Button id="cancel" variant="outline" autoWidth onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button id="confirm" variant="primary" autoWidth onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function BottomSheetDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: "24px"
    }}>
        <Button id="open-bottom" variant="primary" autoWidth onClick={() => setIsOpen(true)}>
          Open Bottom Sheet
        </Button>
        <Dialog id="bottom-dialog" isOpen={isOpen} onCloseClick={() => setIsOpen(false)} position="bottom">
          <DialogHeader title="Select Payment Method" onCloseClick={() => setIsOpen(false)} />
          <DialogContent>
            <p>Choose how you'd like to deposit funds.</p>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function NonCloseableDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: "24px"
    }}>
        <Button id="open-locked" variant="warning" autoWidth onClick={() => setIsOpen(true)}>
          Open Mandatory Dialog
        </Button>
        <Dialog id="locked-dialog" isOpen={isOpen} closeable={false}>
          <DialogHeader title="Session Expired" />
          <DialogContent>
            <p style={{
            marginBottom: "16px"
          }}>Your session has expired. Please log in again.</p>
            <Button id="relogin" variant="primary" onClick={() => setIsOpen(false)}>Log In</Button>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function CenteredDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: "24px"
    }}>
        <Button id="open-center" variant="primary" autoWidth onClick={() => setIsOpen(true)}>
          Open Centered
        </Button>
        <Dialog id="center-dialog" isOpen={isOpen} onCloseClick={() => setIsOpen(false)} position="center">
          <DialogHeader title="Success" onCloseClick={() => setIsOpen(false)} />
          <DialogContent>
            <p>Your bet has been placed successfully!</p>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`BottomSheet`,`NonCloseable`,`CenteredDialog`]}));Q();export{J as BottomSheet,X as CenteredDialog,q as Default,Y as NonCloseable,Z as __namedExportsOrder,K as default,Q as n,U as t};