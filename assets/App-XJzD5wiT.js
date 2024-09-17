import{j as n,c as T}from"./spa-CHOmGAZ9.js";import k,{useState as O,useEffect as F}from"react";import N from"react-dom";import l from"styled-components";function P(){return{name:"Jared",age:33,job:"Software Engineer"}}function z(){return[{title:"Fox Sports 1",url:"https://d22cst65zw0ae2.cloudfront.net/channels/FOX_SPORTS_1.png"},{title:"ESPN",url:"https://d22cst65zw0ae2.cloudfront.net/raptor/ESPN.png"},{title:"TNT",url:"https://d22cst65zw0ae2.cloudfront.net/raptor/TNT.png"},{title:"Caffeine TV",url:"https://d22cst65zw0ae2.cloudfront.net/channels/CAFFEINE_TV.png"},{title:"Fox Weather",url:"https://d22cst65zw0ae2.cloudfront.net/channels/FOX_WEATHER.png"}]}var B=Object.defineProperty,V=(t,o,e)=>o in t?B(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,j=(t,o,e)=>(V(t,typeof o!="symbol"?o+"":o,e),e);const G={stringify:t=>t,parse:t=>t},L={stringify:t=>`${t}`,parse:t=>parseFloat(t)},_={stringify:t=>t?"true":"false",parse:t=>/^[ty1-9]/i.test(t)},J={stringify:t=>t.name,parse:(t,o,e)=>{const s=(()=>{if(typeof window<"u"&&t in window)return window[t];if(typeof global<"u"&&t in global)return global[t]})();return typeof s=="function"?s.bind(e):void 0}},I={stringify:t=>JSON.stringify(t),parse:t=>JSON.parse(t)},S={string:G,number:L,boolean:_,function:J,json:I};function U(t){return t.replace(/([a-z0-9])([A-Z])/g,(o,e,s)=>`${e}-${s.toLowerCase()}`)}const v=Symbol.for("r2wc.render"),C=Symbol.for("r2wc.connected"),m=Symbol.for("r2wc.context"),h=Symbol.for("r2wc.props");function W(t,o,e){var s,g,b;o.props||(o.props=t.propTypes?Object.keys(t.propTypes):[]);const y=Array.isArray(o.props)?o.props.slice():Object.keys(o.props),i={},c={},f={};for(const r of y){i[r]=Array.isArray(o.props)?"string":o.props[r];const a=U(r);c[r]=a,f[a]=r}class x extends HTMLElement{constructor(){super(),j(this,s,!0),j(this,g),j(this,b,{}),j(this,"container"),o.shadow?this.container=this.attachShadow({mode:o.shadow}):this.container=this,this[h].container=this.container;for(const a of y){const w=c[a],u=this.getAttribute(w),p=i[a],d=p?S[p]:null;d!=null&&d.parse&&u&&(this[h][a]=d.parse(u,w,this))}}static get observedAttributes(){return Object.keys(f)}connectedCallback(){this[C]=!0,this[v]()}disconnectedCallback(){this[C]=!1,this[m]&&e.unmount(this[m]),delete this[m]}attributeChangedCallback(a,w,u){const p=f[a],d=i[p],A=d?S[d]:null;p in i&&A!=null&&A.parse&&u&&(this[h][p]=A.parse(u,a,this),this[v]())}[(s=C,g=m,b=h,v)](){this[C]&&(this[m]?e.update(this[m],this[h]):this[m]=e.mount(this.container,t,this[h]))}}for(const r of y){const a=c[r],w=i[r];Object.defineProperty(x.prototype,r,{enumerable:!0,configurable:!0,get(){return this[h][r]},set(u){this[h][r]=u;const p=w?S[w]:null;if(p!=null&&p.stringify){const d=p.stringify(u,a,this);this.getAttribute(a)!==d&&this.setAttribute(a,d)}else this[v]()}})}return x}function E(t,o,e,s={}){function g(i,c,f){const x=o.createElement(c,f);if("createRoot"in e){const r=e.createRoot(i);return r.render(x),{container:i,root:r,ReactComponent:c}}if("render"in e)return e.render(x,i),{container:i,ReactComponent:c};throw new Error("Invalid ReactDOM instance provided.")}function b({container:i,root:c,ReactComponent:f},x){const r=o.createElement(f,x);if(c){c.render(r);return}if("render"in e){e.render(r,i);return}}function y({container:i,root:c}){if(c){c.unmount();return}if("unmountComponentAtNode"in e){e.unmountComponentAtNode(i);return}}return W(t,s,{mount:g,unmount:y,update:b})}function H({text:t,onClick:o}){const e={margin:"0 10px",height:"50px",width:"160px",backgroundColor:"#405cf5",borderRadius:"6px",fontSize:"100%",padding:"0 25px",cursor:"pointer",color:"#fff",fontWeight:"bold"};return n.jsx("button",{onClick:o,style:e,children:t})}const M=E(H,k,N,{props:{text:"string",onClick:"function"}});customElements.get("react-button")||customElements.define("react-button",M);const X=l.div`
  width: 44px;
  height: 44px;
  position: relative;
  margin-left: 18px;
  border-radius: 50%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  background: #1b2c50;
  &:hover {
    background: #2e4c89;
  }
`,q=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 80px;
  cursor: pointer;
  color: white;
`,D=l.div`
  color: var(--color-white);
  font-family: Heebo;
  font-size: 19px;
  line-height: 28px;
  user-select: none;
  font-weight: 300;
  margin-top: 2px;
  font-family: Heebo;
`;function Y({text:t}){return n.jsx(q,{children:n.jsx(X,{children:n.jsx(D,{children:t})})})}const Z=E(Y,k,T,{props:{text:"string"}});customElements.get("account-button")||customElements.define("account-button",Z);const K=l.div`
  min-width: 250px;
  max-width: 250px;
  margin-bottom: 5px;
  transition: 0.3s;
  box-shadow: 0 3px 5px 0 hsla(0, 0%, 85%, .8);
  display: flex;
  flex-direction: column;
  width: 100%;
  scroll-snap-align: unset;
  border: 1px solid rgb(var(--rgb-color-border-gainsboro));
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  margin-top: 10px;
`,Q=l.div`
  ${({$url:t})=>t&&`background-image: url(${t})`};
  border-radius: 6px;
  margin: 8px 8px 0;
  width: calc(100% - 16px);
  background-color: #000;
  background-size: 100% 100%;
  height: 132px;
  padding-bottom: var(--channels-thumbnail-bottom-padding);
  position: relative;
`,tt=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 15px 12px 12px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 20px;
`,et=l.div`
  font-size: 14px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: Heebo;
`,nt=l.div`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow-x: overlay;
  scroll-snap-type: x mandatory;
  justify-content: unset;
  min-height: 175px !important;
  width: 96vw;
  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;function ot({children:t}){return n.jsx(nt,{children:t})}function $({items:t}){return n.jsx(ot,{children:Array.isArray(t)&&t.map(({title:o,url:e},s)=>n.jsxs(K,{children:[n.jsx(Q,{$url:e}),n.jsx(tt,{children:n.jsx(et,{children:o})})]},s))})}const rt=E($,k,T,{props:{items:"json"}});customElements.get("collection-cards")||customElements.define("collection-cards",rt);function it(){const t=z();return console.log(t),n.jsx($,{items:t})}const st=E(it,k,T,{});customElements.get("recently-viewed-channels")||customElements.define("recently-viewed-channels",st);function R({text:t}){const o={display:"block",marginLeft:"auto",marginRight:"auto"},[e,s]=O(),g=()=>{const b=P();s(b)};return n.jsxs(n.Fragment,{children:[n.jsx("img",{style:o,src:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",alt:"react-icon",height:"200px"}),n.jsxs("h1",{style:{color:"#000"},children:["You are on the ",t," page, in react micro front end."]}),n.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:n.jsx(H,{onClick:g,text:"call sdk"})}),e&&n.jsx(n.Fragment,{children:n.jsxs("div",{children:[n.jsxs("h2",{children:["user name: ",e.name]}),n.jsxs("h2",{children:["user job: ",e.job]}),n.jsxs("h2",{children:["user age: ",e.age]})]})})]})}const ct=l.div`
    padding: 0px;
    border-bottom: unset;
    margin: 0px 20px;
`,at=l.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 4px 20px 0px 0px;
`;l.div`

`;const lt=l.div`
    color: var(--color-daintree);
    font-family: Heebo;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    cursor: pointer;
    position: relative;
`;function pt(){const t=z();return n.jsxs(ct,{children:[n.jsx(at,{children:n.jsx(lt,{children:"Recently Viewed Channels"})}),n.jsx($,{items:t})]})}function dt(){const[t,o]=O(window.location.pathname);F(()=>(window.addEventListener("popstate",()=>{o(window.location.pathname)}),()=>window.removeEventListener("popstate",()=>{})),[]);const e=window.location.hostname==="fox-poc.github.io"?"/mediacloud-ux-root-config-poc":"";return n.jsxs(n.Fragment,{children:[t===`${e}/home`&&n.jsx(pt,{}),t===`${e}/assets`&&n.jsx(R,{text:"Assets"}),t===`${e}/collections`&&n.jsx(R,{text:"Collections"}),t===`${e}/replay`&&n.jsx(R,{text:"Channels"})]})}function mt(){return n.jsx("div",{children:n.jsx(dt,{})})}export{mt as default};
