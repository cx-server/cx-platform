import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{P as r,t as i}from"./iframe-DR8dukPV.js";import{n as a,t as o}from"./Icon-CM1OMwIl.js";import{n as s,t as c}from"./chevron-down-icon-LxIlX2lU.js";var l,u=t((()=>{l=``+new URL(`chevron-up-icon-wl_QqqOn.svg`,import.meta.url).href})),d,f,p,m=t((()=>{d=i(),f=n(r(),1),s(),u(),a(),p=(0,f.forwardRef)(function({id:e,header:t,subHeader:n,isOpen:r,onToggle:i,children:a,footer:s,className:u,animated:p=!0,...m},h){let g=(0,f.useRef)(null),[_,v]=(0,f.useState)(`0px`);(0,f.useEffect)(()=>{g.current&&p&&v(r?`${g.current.scrollHeight}px`:`0px`)},[r,a,p]);let y=p?{maxHeight:_}:{},b=`overflow-hidden w-full ${p?`transition-[max-height] duration-500 ease-in-out`:r?``:`max-h-0`}${r?``:` hidden`}${r&&s?` border-subtile border-b pb-2 mb-2`:``}`;return(0,d.jsxs)(`div`,{id:e,"data-testid":e,className:`w-full max-w-full p-4 bg-card rounded-card flex flex-col justify-start ${u??``}`,ref:h,...m,children:[(0,d.jsxs)(`div`,{className:`flex flex-col gap-0.5 cursor-pointer border-subtile border-b pb-2 mb-2`,onClick:i,children:[(0,d.jsxs)(`div`,{className:`flex items-start justify-between`,children:[t,(0,d.jsx)(o,{id:`${e}-collapsible-header-icon`,href:r?l:c,className:`icon-md text-subtile`})]}),n]}),(0,d.jsx)(`div`,{ref:g,style:y,className:b,children:a}),s]})}),p.__docgenInfo={description:``,methods:[],displayName:`Collapsible`,props:{animated:{defaultValue:{value:`true`,computed:!1},required:!1}}}})),h=t((()=>{m()})),g=e({Default:()=>b,Multiple:()=>S,WithSubHeader:()=>x,__namedExportsOrder:()=>C,default:()=>y}),_,v,y,b,x,S,C,w=t((()=>{_=n(r(),1),h(),v=i(),y={title:`Components/Collapsible`,component:p,tags:[],decorators:[e=>(0,v.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,v.jsx)(e,{})})]},b={render:function(){let[e,t]=(0,_.useState)(!1);return(0,v.jsx)(p,{id:`col-default`,header:(0,v.jsx)(`span`,{className:`text-highlight font-medium`,children:`What is cashout?`}),isOpen:e,onToggle:()=>t(!e),children:(0,v.jsx)(`p`,{className:`text-standard text-sm p-3`,children:`Cashout lets you settle a bet before the event ends. You can take a profit early or cut your losses.`})})}},x={render:function(){let[e,t]=(0,_.useState)(!0);return(0,v.jsx)(p,{id:`col-sub`,header:(0,v.jsx)(`span`,{className:`text-highlight font-medium`,children:`Deposit Limits`}),subHeader:(0,v.jsx)(`span`,{className:`text-subtile text-xs`,children:`Daily: €500 | Weekly: €2,000`}),isOpen:e,onToggle:()=>t(!e),children:(0,v.jsx)(`div`,{className:`p-3 text-sm text-standard`,children:(0,v.jsx)(`p`,{children:`You can adjust your deposit limits at any time. Decreases take effect immediately, increases after 7 days.`})})})}},S={render:function(){let[e,t]=(0,_.useState)(`faq-1`);return(0,v.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2px`},children:[{id:`faq-1`,q:`How do I withdraw?`,a:`Go to Account → Withdrawal and select your payment method.`},{id:`faq-2`,q:`How long do withdrawals take?`,a:`Most withdrawals are processed within 24 hours.`},{id:`faq-3`,q:`Can I cancel a withdrawal?`,a:`Yes, if the withdrawal hasn't been processed yet.`}].map(n=>(0,v.jsx)(p,{id:n.id,header:(0,v.jsx)(`span`,{className:`text-highlight font-medium text-sm`,children:n.q}),isOpen:e===n.id,onToggle:()=>t(e===n.id?null:n.id),children:(0,v.jsx)(`p`,{className:`text-standard text-sm p-3`,children:n.a})},n.id))})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function CollapsibleDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible id="col-default" header={<span className="text-highlight font-medium">What is cashout?</span>} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
        <p className="text-standard text-sm p-3">
          Cashout lets you settle a bet before the event ends. You can take a profit early or cut your losses.
        </p>
      </Collapsible>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function SubHeaderDemo() {
    const [isOpen, setIsOpen] = useState(true);
    return <Collapsible id="col-sub" header={<span className="text-highlight font-medium">Deposit Limits</span>} subHeader={<span className="text-subtile text-xs">Daily: €500 | Weekly: €2,000</span>} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
        <div className="p-3 text-sm text-standard">
          <p>You can adjust your deposit limits at any time. Decreases take effect immediately, increases after 7 days.</p>
        </div>
      </Collapsible>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function MultipleDemo() {
    const [openId, setOpenId] = useState<string | null>("faq-1");
    const faqs = [{
      id: "faq-1",
      q: "How do I withdraw?",
      a: "Go to Account → Withdrawal and select your payment method."
    }, {
      id: "faq-2",
      q: "How long do withdrawals take?",
      a: "Most withdrawals are processed within 24 hours."
    }, {
      id: "faq-3",
      q: "Can I cancel a withdrawal?",
      a: "Yes, if the withdrawal hasn't been processed yet."
    }];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }}>
        {faqs.map(faq => <Collapsible key={faq.id} id={faq.id} header={<span className="text-highlight font-medium text-sm">{faq.q}</span>} isOpen={openId === faq.id} onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}>
            <p className="text-standard text-sm p-3">{faq.a}</p>
          </Collapsible>)}
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithSubHeader`,`Multiple`]}));w();export{b as Default,S as Multiple,x as WithSubHeader,C as __namedExportsOrder,y as default,w as n,g as t};