import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as t}from"./index-Cs7sjTYM.js";import{A as pe}from"./Article-SXNvf8K4.js";import{a as me}from"./ArticleContent-D4v8PQBD.js";import{B as fe}from"./Button-CAptm3MV.js";import{O as we}from"./Overlay-BUckQOZg.js";import{r as Re}from"./index-La_wTmJS.js";import{D as ge}from"./DialogHeader-CY1EaPqF.js";import{D as Oe}from"./DialogContent-RUMFlzIS.js";import{R as g}from"./RoundedIcon-BTIBcA3W.js";import{S as Ee}from"./chevron-down-icon-Difh_ekr.js";import{S as be}from"./chevron-left-icon-CQx5u3AZ.js";import{S as ye}from"./close-icon-oalAFRG9.js";import"./_commonjsHelpers-BosuxZz1.js";const E="data-scroll-locks";let V=0;function Ie(){return V+=1,`scroll-lock-${V}-${Date.now()}`}function he(){const o=document.documentElement.getAttribute(E);return o?new Set(o.split(",")):new Set}function xe(o){o.size>0?(document.documentElement.setAttribute(E,[...o].join(",")),document.body.style.overflow="hidden"):(document.documentElement.removeAttribute(E),document.body.style.overflow="")}function Be(o){const n=he();n.add(o),xe(n)}function $(o){const n=he();n.delete(o),xe(n)}function qe(o){const n=t.useRef(null),s=t.useCallback(()=>{n.current||(n.current=Ie()),Be(n.current)},[]),l=t.useCallback(()=>{n.current&&($(n.current),n.current=null)},[]);return t.useEffect(()=>{o?s():l()},[o,s,l]),t.useEffect(()=>()=>{n.current&&($(n.current),n.current=null)},[]),{lock:s,unlock:l}}const Ae="MODALS_ROOT",ve=({id:o,children:n})=>{const s=o||Ae,[l,p]=t.useState(null),d=t.useRef(null);return t.useEffect(()=>{if(!d.current)return;const c=d.current;let a=null,r=null;const b=c==null?void 0:c.getRootNode();return b instanceof ShadowRoot&&(r=b.firstElementChild),r?(a=r==null?void 0:r.querySelector(`#${s}`),a||(a=document.createElement("div"),a.id=s,r.appendChild(a))):(a=document.getElementById(s),a||(a=document.createElement("div"),a.id=s,document.body.appendChild(a))),p(a),()=>{a&&(r!=null&&r.contains(a))&&r.removeChild(a)}},[s]),e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:d,style:{display:"none"}}),l&&Re.createPortal(n,l)]})};ve.__docgenInfo={description:"",methods:[],displayName:"Portal",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};function I({isOpen:o=!0,onCloseClick:n,closeable:s=!0,className:l,panelClassName:p,panelStyle:d,children:c,portalId:a,id:r="dialog",position:b="default",backdrop:B=!0,overlay:S=!0,isCustomPosition:q=!1,animationIn:Ce="animate-slide-up",animationOut:w="animate-slide-down"}){const[m,A]=t.useState(!1),[R,O]=t.useState(!1),je=t.useRef(null),f=t.useRef(null),y=t.useRef(!1);qe(S&&o);const L=t.useCallback((i=!0)=>{y.current||(f.current=document.activeElement,y.current=!0),A(!0),i&&O(!0)},[]),h=t.useCallback(()=>{y.current&&f.current&&document.contains(f.current)&&(f.current.focus({preventScroll:!0}),y.current=!1,f.current=null)},[]);t.useEffect(()=>{o&&L(!1)},[o,L]),t.useLayoutEffect(()=>{m&&!o&&(O(!0),h())},[o,m,h]),t.useEffect(()=>()=>{h()},[h]);const De=t.useCallback(i=>{!s||R||n==null||n(i)},[s,R,n]),ke=t.useCallback(i=>{if(i.target!==i.currentTarget)return;const Se=i.target.classList.contains(w);O(!1),!o&&Se&&A(!1)},[o,w]),Ne=i=>{i.stopPropagation()};if(!m&&!R)return null;const Te=m?"animate-fade-in":"animate-fade-out",P=S?q?"center":b:"default",M=`dialog dialog-${P} ${l??""}`,z=e.jsx("div",{ref:je,className:`
                        dialog-panel
                        ${q?"fixed":""} 
                        ${o?Ce:w}
                        ${p||""}
                        pointer-events-auto
                    `,style:d,onClick:Ne,onAnimationEnd:ke,"aria-modal":"true","aria-labelledby":r,role:"dialog",tabIndex:-1,children:c});return e.jsx(ve,{id:a,children:S?e.jsx(we,{id:r,"data-testid":r,role:"alertdialog",isVisible:m,onClick:De,className:M,addAnimation:!0,backdrop:B,children:z}):e.jsx("div",{id:r,"data-testid":r,role:"alertdialog",className:`fixed w-full z-30 ${P==="bottom"?"bottom-0":""} ${M} ${Te} `,children:z})})}I.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},closeable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},panelClassName:{required:!1,tsType:{name:"string"},description:""},panelStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"dialog"',computed:!1}},portalId:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},backdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"default" | "bottom" | "center"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},overlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isCustomPosition:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animationIn:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"animate-slide-up"',computed:!1}},animationOut:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"animate-slide-down"',computed:!1}}}};const Le=o=>t.createElement("svg",{id:"default",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...o},t.createElement("path",{d:"M12 6.48999L20 14.49L18.9905 15.4995L12 8.50901L5.00951 15.4995L4 14.49L12 6.48999Z",fill:"currentColor"})),Xe={title:"Components/Dialog",component:I,decorators:[o=>e.jsx("div",{className:"bg-input h-[800px] p-4",children:e.jsx(o,{})})],argTypes:{children:{},className:{control:{type:"text"}},position:{control:{type:"select"},options:["default","bottom","center"]},overlay:{control:{type:"boolean"}},backdrop:{control:{type:"boolean"}},closeable:{control:{type:"boolean"}}},tags:["autodocs"]},x={argTypes:{},args:{id:"default-dialog",isOpen:!0,position:"default",children:[e.jsx(ge,{id:"dialog-header",centralComponent:e.jsx("h3",{className:"headline",children:"Welcome to Tipico!"}),leftComponent:e.jsx(g,{id:"chevron-back",children:e.jsx(be,{className:"icon-md text-standard"})}),rightComponent:e.jsx(g,{id:"chevron-back",children:e.jsx(ye,{className:"icon-md text-standard"})})}),e.jsxs(Oe,{children:[e.jsx(pe,{id:"default-dialog-article",children:e.jsx(me,{children:e.jsx("p",{className:"text-standard",children:"You are now verified, and you can proceed to your first deposit!"})})}),e.jsx("footer",{children:e.jsx(fe,{id:"deposit-button",variant:"brand",children:"Deposit"})})]})]}},u=o=>{const[n,s]=t.useState(!1),[l,p]=t.useState(!1),d=()=>{console.info("minimize button clicked"),p(r=>!r)},c=()=>{s(!1)},a=()=>e.jsx(g,{id:"minimized",onClick:d,children:o.isMinimized?e.jsx(Le,{}):e.jsx(Ee,{})});return e.jsxs("div",{className:"flex items-start justify-start h-screen",children:[e.jsx("button",{onClick:()=>s(!0),className:"px-4 py-2 bg-black text-white rounded",children:"Open Dialog"}),e.jsxs(I,{...o,isOpen:n,onCloseClick:c,children:[e.jsx(ge,{id:"dialog-header",centralComponent:e.jsx("h3",{className:"headline",children:"Welcome to Tipico!"}),leftComponent:e.jsx(g,{id:"chevron-back",children:e.jsx(be,{className:"icon-md text-standard"})}),rightComponent:o.minimizable?a():o.closeable?e.jsx(g,{id:"chevron-back",onClick:c,children:e.jsx(ye,{className:"icon-md text-standard"})}):void 0}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(pe,{id:"article-behaviour",children:e.jsx(me,{className:"max-w-[90%]",children:l?e.jsx("p",{className:"text-standard",children:"Minified version"}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-standard",children:"You are now verified, and you can proceed to your first deposit!"}),e.jsx("p",{className:"text-standard",children:"You are now verified, and you can proceed to your first deposit!"}),e.jsx("p",{className:"text-standard",children:"You are now verified, and you can proceed to your first deposit!"})]})})}),!l&&e.jsx("footer",{children:e.jsx(fe,{id:"deposit-button",variant:"brand",children:"Deposit"})})]})]})]})},v={argTypes:{isOpen:{control:{type:"boolean"}},closeable:{control:{type:"boolean"}}},args:{id:"minimizable-dialog",closeable:!0},render:o=>e.jsx(u,{...o})},C={argTypes:{isOpen:{control:{type:"boolean"}},closeable:{control:{type:"boolean"}},position:{control:{type:"select"},options:["default","bottom","center"]}},args:{id:"default-position-dialog",closeable:!0,position:"default"},render:o=>e.jsx(u,{...o})},j={argTypes:{isOpen:{control:{type:"boolean"}},closeable:{control:{type:"boolean"}},position:{control:{type:"select"},options:["default","bottom","center"]}},args:{id:"center-dialog",closeable:!0,position:"center"},render:o=>e.jsx(u,{...o})},D={argTypes:{isOpen:{control:{type:"boolean"}},closeable:{control:{type:"boolean"}},position:{control:{type:"select"},options:["default","bottom","center"]}},args:{id:"bottom-dialog",closeable:!0,position:"bottom"},render:o=>e.jsx(u,{...o})},k={argTypes:{isOpen:{control:{type:"boolean"}},overlay:{control:{type:"boolean"}},backdrop:{control:{type:"boolean"}}},args:{id:"no-overlay-dialog",closeable:!0,overlay:!1,position:"center"},render:o=>e.jsx(u,{...o})},N={argTypes:{isOpen:{control:{type:"boolean"}},backdrop:{control:{type:"boolean"}}},args:{id:"no-backdrop-dialog",closeable:!0,backdrop:!1,position:"center"},render:o=>e.jsx(u,{...o})},T={argTypes:{isOpen:{control:{type:"boolean"}},icoPosition:{control:{type:"boolean"}},panelClassName:{control:{type:"text"}}},args:{id:"custom-bottom-dialog",closeable:!0,panelClassName:"bottom-safe-bottom-16",position:"center",icoPosition:!0},render:o=>e.jsx(u,{...o})};var _,Y,F;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    id: "default-dialog",
    isOpen: true,
    position: "default",
    children: [<DialogHeader id="dialog-header" centralComponent={<h3 className="headline">Welcome to Tipico!</h3>} leftComponent={<RoundedIcon id="chevron-back">
                        <ChevronLeftIcon className="icon-md text-standard" />
                    </RoundedIcon>} rightComponent={<RoundedIcon id="chevron-back">
                        <CloseIcon className="icon-md text-standard" />
                    </RoundedIcon>} />, <DialogContent>
                <Article id="default-dialog-article">
                    <ArticleContent>
                        <p className="text-standard">
                            You are now verified, and you can proceed to your first deposit!
                        </p>
                    </ArticleContent>
                </Article>
                <footer>
                    <Button id="deposit-button" variant="brand">
                        Deposit
                    </Button>
                </footer>
            </DialogContent>]
  }
}`,...(F=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var W,H,K;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        type: "boolean"
      }
    },
    closeable: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    id: "minimizable-dialog",
    closeable: true
  },
  render: args => <BehaviourDialogComp {...args} />
}`,...(K=(H=v.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var U,Z,G;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        type: "boolean"
      }
    },
    closeable: {
      control: {
        type: "boolean"
      }
    },
    position: {
      control: {
        type: "select"
      },
      options: ["default", "bottom", "center"]
    }
  },
  args: {
    id: "default-position-dialog",
    closeable: true,
    position: "default"
  },
  render: args => <BehaviourDialogComp {...args} />
}`,...(G=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,Q,X;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        type: "boolean"
      }
    },
    closeable: {
      control: {
        type: "boolean"
      }
    },
    position: {
      control: {
        type: "select"
      },
      options: ["default", "bottom", "center"]
    }
  },
  args: {
    id: "center-dialog",
    closeable: true,
    position: "center"
  },
  render: args => <BehaviourDialogComp {...args} />
}`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,oe,ne;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        type: "boolean"
      }
    },
    closeable: {
      control: {
        type: "boolean"
      }
    },
    position: {
      control: {
        type: "select"
      },
      options: ["default", "bottom", "center"]
    }
  },
  args: {
    id: "bottom-dialog",
    closeable: true,
    position: "bottom"
  },
  render: args => <BehaviourDialogComp {...args} />
}`,...(ne=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var te,ae,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        type: "boolean"
      }
    },
    overlay: {
      control: {
        type: "boolean"
      }
    },
    backdrop: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    id: "no-overlay-dialog",
    closeable: true,
    overlay: false,
    position: "center"
  },
  render: args => <BehaviourDialogComp {...args} />
}`,...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,le,ie;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        type: "boolean"
      }
    },
    backdrop: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    id: "no-backdrop-dialog",
    closeable: true,
    backdrop: false,
    position: "center"
  },
  render: args => <BehaviourDialogComp {...args} />
}`,...(ie=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  argTypes: {
    isOpen: {
      control: {
        type: "boolean"
      }
    },
    icoPosition: {
      control: {
        type: "boolean"
      }
    },
    panelClassName: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    id: "custom-bottom-dialog",
    closeable: true,
    panelClassName: "bottom-safe-bottom-16",
    position: "center",
    icoPosition: true
  },
  render: args => <BehaviourDialogComp {...args} />
}`,...(ue=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const eo=["DefaultDialog","BehaviourDialog","DefaultPositionDialog","CenterDialog","BottomDialog","NoOverlayDialog","NoBackdropDialog","CustomBottomPositionDialog"];export{v as BehaviourDialog,D as BottomDialog,j as CenterDialog,T as CustomBottomPositionDialog,x as DefaultDialog,C as DefaultPositionDialog,N as NoBackdropDialog,k as NoOverlayDialog,eo as __namedExportsOrder,Xe as default};
