import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{P as n,t as r}from"./iframe-B76dCzL_.js";import{n as i,t as a}from"./Icon-CbD8-nth.js";import{n as o,t as s}from"./chevron-down-icon-LxIlX2lU.js";var c,l=e((()=>{c=``+new URL(`chevron-up-icon-wl_QqqOn.svg`,import.meta.url).href})),u,d,f,p=e((()=>{u=r(),d=t(n(),1),o(),l(),i(),f=(0,d.forwardRef)(function({id:e,header:t,subHeader:n,isOpen:r,onToggle:i,children:o,footer:l,className:f,animated:p=!0,...m},h){let g=(0,d.useRef)(null),[_,v]=(0,d.useState)(`0px`);(0,d.useEffect)(()=>{g.current&&p&&v(r?`${g.current.scrollHeight}px`:`0px`)},[r,o,p]);let y=p?{maxHeight:_}:{},b=`overflow-hidden w-full ${p?`transition-[max-height] duration-500 ease-in-out`:r?``:`max-h-0`}${r?``:` hidden`}${r&&l?` border-subtile border-b pb-2 mb-2`:``}`;return(0,u.jsxs)(`div`,{id:e,"data-testid":e,className:`w-full max-w-full p-4 bg-card rounded-card flex flex-col justify-start ${f??``}`,ref:h,...m,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-0.5 cursor-pointer border-subtile border-b pb-2 mb-2`,onClick:i,children:[(0,u.jsxs)(`div`,{className:`flex items-start justify-between`,children:[t,(0,u.jsx)(a,{id:`${e}-collapsible-header-icon`,href:r?c:s,className:`icon-md text-subtile`})]}),n]}),(0,u.jsx)(`div`,{ref:g,style:y,className:b,children:o}),l]})}),f.__docgenInfo={description:``,methods:[],displayName:`Collapsible`,props:{animated:{defaultValue:{value:`true`,computed:!1},required:!1}}}})),m=e((()=>{p()})),h,g,_,v,y,b,x;e((()=>{h=t(n(),1),m(),g=r(),_={title:`Components/Collapsible`,component:f,tags:[],decorators:[e=>(0,g.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,g.jsx)(e,{})})]},v={render:function(){let[e,t]=(0,h.useState)(!1);return(0,g.jsx)(f,{id:`col-default`,header:(0,g.jsx)(`span`,{className:`text-highlight font-medium`,children:`What is cashout?`}),isOpen:e,onToggle:()=>t(!e),children:(0,g.jsx)(`p`,{className:`text-standard text-sm p-3`,children:`Cashout lets you settle a bet before the event ends. You can take a profit early or cut your losses.`})})}},y={render:function(){let[e,t]=(0,h.useState)(!0);return(0,g.jsx)(f,{id:`col-sub`,header:(0,g.jsx)(`span`,{className:`text-highlight font-medium`,children:`Deposit Limits`}),subHeader:(0,g.jsx)(`span`,{className:`text-subtile text-xs`,children:`Daily: €500 | Weekly: €2,000`}),isOpen:e,onToggle:()=>t(!e),children:(0,g.jsx)(`div`,{className:`p-3 text-sm text-standard`,children:(0,g.jsx)(`p`,{children:`You can adjust your deposit limits at any time. Decreases take effect immediately, increases after 7 days.`})})})}},b={render:function(){let[e,t]=(0,h.useState)(`faq-1`);return(0,g.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2px`},children:[{id:`faq-1`,q:`How do I withdraw?`,a:`Go to Account → Withdrawal and select your payment method.`},{id:`faq-2`,q:`How long do withdrawals take?`,a:`Most withdrawals are processed within 24 hours.`},{id:`faq-3`,q:`Can I cancel a withdrawal?`,a:`Yes, if the withdrawal hasn't been processed yet.`}].map(n=>(0,g.jsx)(f,{id:n.id,header:(0,g.jsx)(`span`,{className:`text-highlight font-medium text-sm`,children:n.q}),isOpen:e===n.id,onToggle:()=>t(e===n.id?null:n.id),children:(0,g.jsx)(`p`,{className:`text-standard text-sm p-3`,children:n.a})},n.id))})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function CollapsibleDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible id="col-default" header={<span className="text-highlight font-medium">What is cashout?</span>} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
        <p className="text-standard text-sm p-3">
          Cashout lets you settle a bet before the event ends. You can take a profit early or cut your losses.
        </p>
      </Collapsible>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function SubHeaderDemo() {
    const [isOpen, setIsOpen] = useState(true);
    return <Collapsible id="col-sub" header={<span className="text-highlight font-medium">Deposit Limits</span>} subHeader={<span className="text-subtile text-xs">Daily: €500 | Weekly: €2,000</span>} isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
        <div className="p-3 text-sm text-standard">
          <p>You can adjust your deposit limits at any time. Decreases take effect immediately, increases after 7 days.</p>
        </div>
      </Collapsible>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithSubHeader`,`Multiple`]}))();export{v as Default,b as Multiple,y as WithSubHeader,x as __namedExportsOrder,_ as default};