import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-CRUx604k.js";import{t as a}from"./react-dom-DxdVXKR-.js";import{n as o,t as s}from"./Article-C9_dTVy2.js";import{n as c,r as l,t as u}from"./Button-CwPJhbBk.js";import{n as d,t as f}from"./Overlay-KBT0Dg9R.js";function p(){return x+=1,`scroll-lock-${x}-${Date.now()}`}function m(){let e=document.documentElement.getAttribute(b);return e?new Set(e.split(`,`)):new Set}function h(e){e.size>0?(document.documentElement.setAttribute(b,[...e].join(`,`)),document.body.style.overflow=`hidden`):(document.documentElement.removeAttribute(b),document.body.style.overflow=``)}function g(e){let t=m();t.add(e),h(t)}function _(e){let t=m();t.delete(e),h(t)}function v(e){let t=(0,y.useRef)(null),n=(0,y.useCallback)(()=>{t.current||=p(),g(t.current)},[]),r=(0,y.useCallback)(()=>{t.current&&=(_(t.current),null)},[]);return(0,y.useEffect)(()=>{e?n():r()},[e,n,r]),(0,y.useEffect)(()=>()=>{t.current&&=(_(t.current),null)},[]),{lock:n,unlock:r}}var y,b,x,S=t((()=>{y=n(r(),1),b=`data-scroll-locks`,x=0})),C,w,T,E,D,O=t((()=>{C=i(),w=n(r(),1),T=n(a(),1),E=`MODALS_ROOT`,D=({id:e,children:t})=>{let n=e||E,[r,i]=(0,w.useState)(null),a=(0,w.useRef)(null);return(0,w.useEffect)(()=>{if(!a.current)return;let e=a.current,t=null,r=null,o=e?.getRootNode();return o instanceof ShadowRoot&&(r=o.firstElementChild),r?(t=r?.querySelector(`#${n}`),t||(t=document.createElement(`div`),t.id=n,r.appendChild(t))):(t=document.getElementById(n),t||(t=document.createElement(`div`),t.id=n,document.body.appendChild(t))),i(t),()=>{t&&r?.contains(t)&&r.removeChild(t)}},[n]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{ref:a,style:{display:`none`}}),r&&(0,T.createPortal)(t,r)]})}}));function k({isOpen:e=!0,onCloseClick:t,closeable:n=!0,className:r,panelClassName:i,panelStyle:a,children:o,portalId:s,id:c=`dialog`,position:l=`default`,backdrop:u=!0,overlay:f=!0,isCustomPosition:p=!1,animationIn:m=`animate-slide-up`,animationOut:h=`animate-slide-down`}){let[g,_]=(0,j.useState)(!1),[y,b]=(0,j.useState)(!1),x=(0,j.useRef)(null),S=(0,j.useRef)(null),C=(0,j.useRef)(!1);v(f&&e);let w=(0,j.useCallback)((e=!0)=>{C.current||=(S.current=document.activeElement,!0),_(!0),e&&b(!0)},[]),T=(0,j.useCallback)(()=>{C.current&&S.current&&document.contains(S.current)&&(S.current.focus({preventScroll:!0}),C.current=!1,S.current=null)},[]);(0,j.useEffect)(()=>{e&&w(!1)},[e,w]),(0,j.useLayoutEffect)(()=>{g&&!e&&(b(!0),T())},[e,g,T]),(0,j.useEffect)(()=>()=>{T()},[T]);let E=(0,j.useCallback)(e=>{!n||y||t?.(e)},[n,y,t]),O=(0,j.useCallback)(t=>{if(t.target!==t.currentTarget)return;let n=t.target.classList.contains(h);b(!1),!e&&n&&_(!1)},[e,h]),k=e=>{e.stopPropagation()};if(!g&&!y)return null;let M=g?`animate-fade-in`:`animate-fade-out`,N=f?p?`center`:l:`default`,P=`dialog dialog-${N} ${r??``}`,F=(0,A.jsx)(`div`,{ref:x,className:`
                        dialog-panel
                        ${p?`fixed`:``} 
                        ${e?m:h}
                        ${i||``}
                        pointer-events-auto
                    `,style:a,onClick:k,onAnimationEnd:O,"aria-modal":`true`,"aria-labelledby":c,role:`dialog`,tabIndex:-1,children:o});return(0,A.jsx)(D,{id:s,children:f?(0,A.jsx)(d,{id:c,"data-testid":c,role:`alertdialog`,isVisible:g,onClick:E,className:P,addAnimation:!0,backdrop:u,children:F}):(0,A.jsx)(`div`,{id:c,"data-testid":c,role:`alertdialog`,className:`fixed w-full z-30 ${N===`bottom`?`bottom-0`:``} ${P} ${M} `,children:F})})}var A,j,M=t((()=>{A=i(),j=n(r(),1),f(),S(),O()}));function N({id:e=`dialog-header`,className:t,centralComponent:n,leftComponent:r,rightComponent:i,centralWrapperClassName:a,...o}){return(0,P.jsxs)(`div`,{id:e,className:`grid grid-cols-[auto_1fr_auto] items-center min-h-14 ${t??``}`,...o,children:[(0,P.jsx)(`div`,{className:`justify-self-start`,children:r}),n&&(0,P.jsx)(`div`,{className:`justify-self-center px-2 font-medium text-lg text-highlight text-wrap ${a??``}`,children:n}),(0,P.jsx)(`div`,{className:`justify-self-end`,children:i})]})}var P,F=t((()=>{P=i()}));function I({id:e=`dialog-content`,className:t,title:n,iconComponent:r,children:i,buttonId:a,buttonLabel:o,buttonDisabled:l=!1,secondaryButtonDisabled:u=!1,onButtonClick:d,secondaryButtonId:f,secondaryButtonLabel:p,onSecondaryButtonClick:m,footer:h}){let g=r?(0,R.cloneElement)(r,{className:`size-full ${r.props.className??``}`}):null;return(0,L.jsxs)(`div`,{id:e,"data-testid":e,className:`pt-2 flex flex-col gap-6 ${t??``}`,children:[(0,L.jsxs)(`div`,{className:`flex flex-col gap-2 items-center w-full`,children:[g&&(0,L.jsx)(`div`,{className:`size-[72px] flex items-center justify-center`,children:g}),(0,L.jsxs)(s,{id:`${e}-article`,className:`text-center w-full`,children:[n&&(0,L.jsx)(`div`,{className:`text-xl font-medium text-highlight py-0`,children:n}),(0,L.jsx)(`div`,{children:i})]})]}),(d||m)&&(0,L.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[d&&(0,L.jsx)(c,{id:a??`${e}-button`,variant:`primary`,size:`lg`,disabled:l,onClick:d,children:o}),m&&(0,L.jsx)(c,{id:f??`${e}-secondary-button`,variant:`outline`,size:`lg`,disabled:u,onClick:m,children:p})]}),h]})}var L,R,z=t((()=>{L=i(),R=n(r(),1),o(),l()})),B=t((()=>{M(),F(),z()})),V=e({BottomSheet:()=>K,CenteredDialog:()=>J,Default:()=>G,NonCloseable:()=>q,__namedExportsOrder:()=>Y,default:()=>W}),H,U,W,G,K,q,J,Y,X=t((()=>{H=n(r(),1),u(),B(),U=i(),W={title:`Components/Dialog`,component:k,tags:[],argTypes:{isOpen:{control:`boolean`,description:`Controls dialog visibility`},closeable:{control:`boolean`,description:`Whether the dialog can be closed by clicking overlay or X`},position:{control:`select`,options:[`default`,`bottom`,`center`],description:`Dialog position on screen`},backdrop:{control:`boolean`,description:`Show dark backdrop overlay`}},args:{isOpen:!0,closeable:!0,position:`default`,backdrop:!0},parameters:{layout:`fullscreen`}},G={render:function(){let[e,t]=(0,H.useState)(!1);return(0,U.jsxs)(`div`,{style:{padding:`24px`},children:[(0,U.jsx)(c,{id:`open-dialog`,variant:`primary`,autoWidth:!0,onClick:()=>t(!0),children:`Open Dialog`}),(0,U.jsxs)(k,{id:`demo-dialog`,isOpen:e,onCloseClick:()=>t(!1),children:[(0,U.jsx)(N,{title:`Confirm Action`,onCloseClick:()=>t(!1)}),(0,U.jsxs)(I,{children:[(0,U.jsx)(`p`,{style:{marginBottom:`16px`},children:`Are you sure you want to proceed with this action?`}),(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,justifyContent:`flex-end`},children:[(0,U.jsx)(c,{id:`cancel`,variant:`outline`,autoWidth:!0,onClick:()=>t(!1),children:`Cancel`}),(0,U.jsx)(c,{id:`confirm`,variant:`primary`,autoWidth:!0,onClick:()=>t(!1),children:`Confirm`})]})]})]})]})}},K={render:function(){let[e,t]=(0,H.useState)(!1);return(0,U.jsxs)(`div`,{style:{padding:`24px`},children:[(0,U.jsx)(c,{id:`open-bottom`,variant:`primary`,autoWidth:!0,onClick:()=>t(!0),children:`Open Bottom Sheet`}),(0,U.jsxs)(k,{id:`bottom-dialog`,isOpen:e,onCloseClick:()=>t(!1),position:`bottom`,children:[(0,U.jsx)(N,{title:`Select Payment Method`,onCloseClick:()=>t(!1)}),(0,U.jsx)(I,{children:(0,U.jsx)(`p`,{children:`Choose how you'd like to deposit funds.`})})]})]})}},q={render:function(){let[e,t]=(0,H.useState)(!1);return(0,U.jsxs)(`div`,{style:{padding:`24px`},children:[(0,U.jsx)(c,{id:`open-locked`,variant:`warning`,autoWidth:!0,onClick:()=>t(!0),children:`Open Mandatory Dialog`}),(0,U.jsxs)(k,{id:`locked-dialog`,isOpen:e,closeable:!1,children:[(0,U.jsx)(N,{title:`Session Expired`}),(0,U.jsxs)(I,{children:[(0,U.jsx)(`p`,{style:{marginBottom:`16px`},children:`Your session has expired. Please log in again.`}),(0,U.jsx)(c,{id:`relogin`,variant:`primary`,onClick:()=>t(!1),children:`Log In`})]})]})]})}},J={render:function(){let[e,t]=(0,H.useState)(!1);return(0,U.jsxs)(`div`,{style:{padding:`24px`},children:[(0,U.jsx)(c,{id:`open-center`,variant:`primary`,autoWidth:!0,onClick:()=>t(!0),children:`Open Centered`}),(0,U.jsxs)(k,{id:`center-dialog`,isOpen:e,onCloseClick:()=>t(!1),position:`center`,children:[(0,U.jsx)(N,{title:`Success`,onCloseClick:()=>t(!1)}),(0,U.jsx)(I,{children:(0,U.jsx)(`p`,{children:`Your bet has been placed successfully!`})})]})]})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`BottomSheet`,`NonCloseable`,`CenteredDialog`]}));X();export{K as BottomSheet,J as CenteredDialog,G as Default,q as NonCloseable,Y as __namedExportsOrder,W as default,X as n,V as t};