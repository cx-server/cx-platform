const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./confetti.module-BpOKvbiw.js","./preload-helper-BdFrVu1K.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,s as n,t as r}from"./preload-helper-BdFrVu1K.js";import{P as i,t as a}from"./iframe-CzdaheLX.js";import{n as o,t as s}from"./Button-DVdzAWc7.js";function c(e,t={}){let n=e.getContext(`2d`);if(!n||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return()=>void 0;let{originX:r=.5,originY:i=.25,particleCount:a=60,colors:o=[`#FFD700`,`#FFDF00`,`#FFC800`,`#DAA520`,`#B8860B`,`#FFF8B0`],speed:s=1,maxSize:c=12}=t,l=e.width,u=e.height,d=l*r,f=u*i,p=0,m=!1,h=[];for(let e=0;e<a;e++){let e=Math.random()*Math.PI*2,t=(1.5+Math.random()*3)*s;h.push({x:d,y:f,vx:Math.cos(e)*t,vy:Math.sin(e)*t*.7,size:.5,maxSize:4+Math.random()*(c-4),growSpeed:.15+Math.random()*.2,alpha:1,decay:.985+Math.random()*.01,gravity:.02+Math.random()*.03,color:o[Math.floor(Math.random()*o.length)],rotation:Math.random()*Math.PI*2,rotationSpeed:-.05+Math.random()*.1})}function g(){if(m)return;n.clearRect(0,0,l,u);let e=0;for(let t of h)t.alpha<=.01||(e++,t.size<t.maxSize&&(t.size+=t.growSpeed*t.size*.5,t.size>t.maxSize&&(t.size=t.maxSize)),t.x+=t.vx,t.y+=t.vy,t.vx*=.98,t.vy*=.98,t.vy+=t.gravity,t.alpha*=t.decay,t.rotation+=t.rotationSpeed,n.save(),n.translate(t.x,t.y),n.rotate(t.rotation),n.globalAlpha=t.alpha,n.fillStyle=t.color,n.beginPath(),n.ellipse(0,0,t.size,t.size*.6,0,0,Math.PI*2),n.fill(),n.globalAlpha=t.alpha*.3,n.fillStyle=`#FFFFFF`,n.beginPath(),n.ellipse(-t.size*.2,-t.size*.2,t.size*.3,t.size*.2,0,0,Math.PI*2),n.fill(),n.restore());e>0&&(p=requestAnimationFrame(g))}return p=requestAnimationFrame(g),()=>{m=!0,cancelAnimationFrame(p),n&&n.clearRect(0,0,l,u)}}var l=e((()=>{}));function u({id:e,trigger:t,mode:n=`rain`,shotOriginY:i=.15,intensity:a=`medium`,opacity:o=.7,speed:s=`normal`,blur:l=!1,colors:u=p,children:g,className:_,...v}){let y=(0,d.useRef)(null),b=(0,d.useRef)(null),x=(0,d.useRef)(null),S=(0,d.useRef)(null),C=(0,d.useRef)(0),w=(0,d.useRef)(null),T=(0,d.useRef)(!1);(0,d.useEffect)(()=>{let e=b.current;if(!e)return;let t=!1;return r(()=>import(`./confetti.module-BpOKvbiw.js`).then(n=>{if(t)return;let r=n.default?.create??n.create;S.current=r(e,{resize:!0,useWorker:!0,disableForReducedMotion:!0})}),__vite__mapDeps([0,1]),import.meta.url).catch(()=>void 0),()=>{t=!0;let e=S.current;e?.reset&&e.reset(),C.current&&cancelAnimationFrame(C.current),w.current&&w.current()}},[]);let E=(0,d.useCallback)(()=>{let e=S.current;if(!e)return;let t=m[a],n=h[s],r=Date.now()+n,i=Date.now();for(let n=0;n<10;n++)e({particleCount:Math.max(1,Math.floor(t/40)),angle:270,spread:60,startVelocity:1+Math.random()*2,gravity:.3+Math.random()*.1,drift:-.1+Math.random()*.2,ticks:120+Math.round(Math.random()*40),decay:.97,colors:u,shapes:[`square`,`circle`],scalar:.7+Math.random()*.5,flat:!1,origin:{x:Math.random(),y:Math.random()*.2}});function o(){let a=(Date.now()-i)/n,s=Math.max(1,Math.round(4*(1-a)));for(let n=0;n<s;n++){let n=1+a*.5;e({particleCount:Math.max(1,Math.floor(t/50)),angle:270,spread:60,startVelocity:1.5+Math.random()*2,gravity:.3+Math.random()*.05,drift:-.1+Math.random()*.2,ticks:Math.round((100+Math.random()*40)*n),decay:.975,colors:u,shapes:[`square`,`circle`],scalar:.8+Math.random()*.4,flat:!1,origin:{x:Math.random(),y:-.03}})}if(Date.now()<r)C.current=requestAnimationFrame(o);else for(let t=0;t<20;t++)e({particleCount:1,angle:270,spread:80,startVelocity:.5+Math.random()*1.5,gravity:.08+Math.random()*.05,drift:-.05+Math.random()*.1,ticks:160+Math.round(Math.random()*60),decay:.985,colors:u,shapes:[`square`,`circle`],scalar:.6+Math.random()*.4,flat:!1,origin:{x:Math.random(),y:Math.random()*.4}})}o()},[a,s,u]),D=(0,d.useCallback)(()=>{let e=x.current;if(!e)return;let t=y.current;if(t){let n=Math.min(window.devicePixelRatio,2);e.width=t.clientWidth*n,e.height=t.clientHeight*n}w.current&&w.current(),w.current=c(e,{originX:.5,originY:i,particleCount:a===`heavy`?140:a===`medium`?100:50,colors:u,speed:1.8,maxSize:16})},[a,u,i]);(0,d.useEffect)(()=>{t&&!T.current&&(C.current&&cancelAnimationFrame(C.current),w.current&&w.current(),n===`shot`?D():E()),T.current=t},[t,E,D,n]);let O=[`absolute inset-0 w-full h-full pointer-events-none will-change-auto`,l?`blur-[0.5px]`:``].join(` `);return(0,f.jsxs)(`div`,{ref:y,id:e,"data-testid":e,className:`relative overflow-hidden ${_??``}`,...v,children:[(0,f.jsx)(`canvas`,{ref:b,className:O,style:{opacity:o,zIndex:5},"aria-hidden":`true`}),n===`shot`&&(0,f.jsx)(`canvas`,{ref:x,className:O,style:{opacity:o,zIndex:5,width:`100%`,height:`100%`},"aria-hidden":`true`}),(0,f.jsx)(`div`,{className:`relative z-10`,children:g})]})}var d,f,p,m,h,g=e((()=>{d=n(i(),1),l(),f=a(),t(),p=[`#078333`,`#24CC5F`,`#5BE28B`,`#98EDB6`,`#CFFCDF`,`#09A540`,`#056126`,`#4ADE80`,`#33CC66`,`#A7F3D0`],m={light:10,medium:25,heavy:50},h={short:250,normal:600,long:1500},u.__docgenInfo={description:``,methods:[],displayName:`CoinConfetti`,props:{id:{required:!0,tsType:{name:`string`},description:``},trigger:{required:!0,tsType:{name:`boolean`},description:``},mode:{required:!1,tsType:{name:`union`,raw:`"rain" | "shot"`,elements:[{name:`literal`,value:`"rain"`},{name:`literal`,value:`"shot"`}]},description:``,defaultValue:{value:`"rain"`,computed:!1}},shotOriginY:{required:!1,tsType:{name:`number`},description:`Vertical origin for shot mode (0=top, 1=bottom). Default 0.15.`,defaultValue:{value:`0.15`,computed:!1}},intensity:{required:!1,tsType:{name:`union`,raw:`"light" | "medium" | "heavy"`,elements:[{name:`literal`,value:`"light"`},{name:`literal`,value:`"medium"`},{name:`literal`,value:`"heavy"`}]},description:``,defaultValue:{value:`"medium"`,computed:!1}},opacity:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0.7`,computed:!1}},speed:{required:!1,tsType:{name:`union`,raw:`"short" | "normal" | "long"`,elements:[{name:`literal`,value:`"short"`},{name:`literal`,value:`"normal"`},{name:`literal`,value:`"long"`}]},description:`How long the rain lasts: short (300ms), normal (500ms), long (800ms).`,defaultValue:{value:`"normal"`,computed:!1}},blur:{required:!1,tsType:{name:`boolean`},description:`Enable soft blur on particles. Disable on low-end devices. Default false.`,defaultValue:{value:`false`,computed:!1}},colors:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[
    "#078333",
    "#24CC5F",
    "#5BE28B",
    "#98EDB6",
    "#CFFCDF",
    "#09A540",
    "#056126",
    "#4ADE80",
    "#33CC66",
    "#A7F3D0"
]`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})),_,v,y,b,x,S,C;e((()=>{_=n(i(),1),g(),s(),v=a(),y={title:`Ready for Release/CoinConfetti`,component:u,tags:[],argTypes:{mode:{control:`select`,options:[`rain`,`shot`]},intensity:{control:`select`,options:[`light`,`medium`,`heavy`]},speed:{control:`select`,options:[`short`,`normal`,`long`]},blur:{control:`boolean`},opacity:{control:{type:`range`,min:.3,max:1,step:.1}}},args:{id:`confetti-demo`,trigger:!1,mode:`shot`,intensity:`medium`,speed:`normal`,blur:!1,opacity:.9}},b={render:function(){let[e,t]=(0,_.useState)(!1);return(0,v.jsx)(u,{id:`confetti-shot`,trigger:e,mode:`shot`,intensity:`medium`,children:(0,v.jsx)(`div`,{style:{padding:`40px`,textAlign:`center`},children:(0,v.jsx)(o,{id:`trigger-shot`,variant:`success`,autoWidth:!0,onClick:()=>{t(!0),setTimeout(()=>t(!1),100)},children:`Trigger Confetti 🎉`})})})}},x={render:function(){let[e,t]=(0,_.useState)(!1);return(0,v.jsx)(u,{id:`confetti-rain`,trigger:e,mode:`rain`,intensity:`heavy`,speed:`long`,children:(0,v.jsx)(`div`,{style:{padding:`40px`,textAlign:`center`},children:(0,v.jsx)(o,{id:`trigger-rain`,variant:`brand`,autoWidth:!0,onClick:()=>{t(!0),setTimeout(()=>t(!1),100)},children:`Make it Rain 💰`})})})}},S={render:function(){let[e,t]=(0,_.useState)(!1);return(0,v.jsx)(u,{id:`confetti-cashout`,trigger:e,mode:`shot`,intensity:`heavy`,speed:`normal`,children:(0,v.jsxs)(`div`,{className:`bg-card rounded-card p-8 text-center`,style:{maxWidth:`320px`,margin:`0 auto`},children:[(0,v.jsx)(`p`,{className:`text-positive text-2xl font-bold mb-2`,children:`€42.50`}),(0,v.jsx)(`p`,{className:`text-standard text-sm mb-4`,children:`Cashout successful!`}),(0,v.jsx)(o,{id:`cashout-btn`,variant:`positive`,autoWidth:!0,onClick:()=>{t(!0),setTimeout(()=>t(!1),100)},children:`Simulate Cashout`})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function ShotDemo() {
    const [trigger, setTrigger] = useState(false);
    return <CoinConfetti id="confetti-shot" trigger={trigger} mode="shot" intensity="medium">
        <div style={{
        padding: "40px",
        textAlign: "center"
      }}>
          <Button id="trigger-shot" variant="success" autoWidth onClick={() => {
          setTrigger(true);
          setTimeout(() => setTrigger(false), 100);
        }}>
            Trigger Confetti 🎉
          </Button>
        </div>
      </CoinConfetti>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function RainDemo() {
    const [trigger, setTrigger] = useState(false);
    return <CoinConfetti id="confetti-rain" trigger={trigger} mode="rain" intensity="heavy" speed="long">
        <div style={{
        padding: "40px",
        textAlign: "center"
      }}>
          <Button id="trigger-rain" variant="brand" autoWidth onClick={() => {
          setTrigger(true);
          setTimeout(() => setTrigger(false), 100);
        }}>
            Make it Rain 💰
          </Button>
        </div>
      </CoinConfetti>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function CashoutDemo() {
    const [trigger, setTrigger] = useState(false);
    return <CoinConfetti id="confetti-cashout" trigger={trigger} mode="shot" intensity="heavy" speed="normal">
        <div className="bg-card rounded-card p-8 text-center" style={{
        maxWidth: "320px",
        margin: "0 auto"
      }}>
          <p className="text-positive text-2xl font-bold mb-2">€42.50</p>
          <p className="text-standard text-sm mb-4">Cashout successful!</p>
          <Button id="cashout-btn" variant="positive" autoWidth onClick={() => {
          setTrigger(true);
          setTimeout(() => setTrigger(false), 100);
        }}>
            Simulate Cashout
          </Button>
        </div>
      </CoinConfetti>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Shot`,`Rain`,`CashoutSuccess`]}))();export{S as CashoutSuccess,x as Rain,b as Shot,C as __namedExportsOrder,y as default};