let e,t,n=!1,l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},i={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),a="http://www.w3.org/1999/xlink",u=new WeakMap,f=(e,t)=>"sc-"+(t&&32&e.t?e.o+"-"+t:e.o),h=e=>Z.push(e),p={},d=e=>"object"==(e=typeof e)||"function"===e,m=(e,t,...n)=>{let l=null,s=null,o=!1,i=!1;const c=[],r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!d(l))&&(l+=""),o&&i?c[c.length-1].i+=l:c.push(o?y(null,l):l),i=o)};if(r(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const a=y(e,null);return a.u=t,c.length>0&&(a.h=c),a.p=s,a},y=(e,t)=>({t:0,m:e,i:t,$:null,h:null,u:null,p:null}),$={},w=(e,t,n,l,o,c)=>{if(n!==l){let r=J(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,s=g(n),o=g(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const s=d(l);if((r||s&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}let i=!1;u!==(u=u.replace(/^xlink\:?/,""))&&(t=u,i=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(i?e.removeAttributeNS(a,t):e.removeAttribute(t)):(!r||4&c||o)&&!s&&(l=!0===l?"":l,i?e.setAttributeNS(a,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):J(s,u)?u.slice(2):u[2]+t.slice(3),n&&i.rel(e,t,n,!1),l&&i.ael(e,t,l,!1)}},b=/\s/,g=e=>e?e.split(b):[],v=(e,t,n,l)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,o=e&&e.u||p,i=t.u||p;for(l in o)l in i||w(s,l,o[l],void 0,n,t.t);for(l in i)w(s,l,o[l],i[l],n,t.t)},j=(t,l,s)=>{const i=l.h[s];let c,r,a=0;if(null!==i.i)c=i.$=o.createTextNode(i.i);else{if(n||(n="svg"===i.m),c=i.$=o.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.m),n&&"foreignObject"===i.m&&(n=!1),v(null,i,n),null!=e&&c["s-si"]!==e&&c.classList.add(c["s-si"]=e),i.h)for(a=0;a<i.h.length;++a)r=j(t,i,a),r&&c.appendChild(r);"svg"===i.m?n=!1:"foreignObject"===c.tagName&&(n=!0)}return c},k=(e,n,l,s,o,i)=>{let c,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);o<=i;++o)s[o]&&(c=j(null,l,o),c&&(s[o].$=c,r.insertBefore(c,n)))},S=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.$,M(l),s.remove())},O=(e,t)=>e.m===t.m&&e.p===t.p,C=(e,t)=>{const l=t.$=e.$,s=e.h,o=t.h,i=t.m,c=t.i;null===c?(n="svg"===i||"foreignObject"!==i&&n,"slot"===i||v(e,t,n),null!==s&&null!==o?((e,t,n,l)=>{let s,o,i=0,c=0,r=0,a=0,u=t.length-1,f=t[0],h=t[u],p=l.length-1,d=l[0],m=l[p];for(;i<=u&&c<=p;)if(null==f)f=t[++i];else if(null==h)h=t[--u];else if(null==d)d=l[++c];else if(null==m)m=l[--p];else if(O(f,d))C(f,d),f=t[++i],d=l[++c];else if(O(h,m))C(h,m),h=t[--u],m=l[--p];else if(O(f,m))C(f,m),e.insertBefore(f.$,h.$.nextSibling),f=t[++i],m=l[--p];else if(O(h,d))C(h,d),e.insertBefore(h.$,f.$),h=t[--u],d=l[++c];else{for(r=-1,a=i;a<=u;++a)if(t[a]&&null!==t[a].p&&t[a].p===d.p){r=a;break}r>=0?(o=t[r],o.m!==d.m?s=j(t&&t[c],n,r):(C(o,d),t[r]=void 0,s=o.$),d=l[++c]):(s=j(t&&t[c],n,c),d=l[++c]),s&&f.$.parentNode.insertBefore(s,f.$)}i>u?k(e,null==l[p+1]?null:l[p+1].$,n,l,c,p):c>p&&S(t,i,u)})(l,s,t,o):null!==o?(null!==e.i&&(l.textContent=""),k(l,null,t,o,0,o.length-1)):null!==s&&S(s,0,s.length-1),n&&"svg"===i&&(n=!1)):e.i!==c&&(l.data=c)},M=e=>{e.u&&e.u.ref&&e.u.ref(null),e.h&&e.h.map(M)},x=e=>B(e).g,P=(e,t,n)=>{const l=x(e);return{emit:e=>L(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},L=(e,t,n)=>{const l=i.ce(t,n);return e.dispatchEvent(l),l},W=(e,t)=>{t&&!e.v&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.v=t)))},E=(e,t)=>{if(e.t|=16,!(4&e.t))return W(e,e.j),ie((()=>N(e,t)));e.t|=512},N=(e,t)=>{const n=e.k;let l;return l=H(n,t?"componentWillLoad":"componentWillUpdate"),R(l,(()=>T(e,n,t)))},T=async(e,t,n)=>{const l=e.g,s=l["s-rc"];n&&(e=>{const t=e.S,n=e.g,l=t.t,s=((e,t,n)=>{let l=f(t,n);const s=Y.get(l);if(e=11===e.nodeType?e:o,s)if("string"==typeof s){let t,n=u.get(e=e.head||e);n||u.set(e,n=new Set),n.has(l)||(t=o.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return l})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.O);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);U(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>A(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},U=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.g,o=n.S,i=n.C||y(null,null),c=(e=>e&&e.m===$)(l)?l:m(null,null,l);t=s.tagName,o.M&&(c.u=c.u||{},o.M.map((([e,t])=>c.u[t]=s[e]))),c.m=null,c.t|=4,n.C=c,c.$=i.$=s.shadowRoot||s,e=s["s-sc"],C(i,c)})(n,l)}catch(e){K(e,n.g)}return null},A=e=>{const t=e.g,n=e.k,l=e.j;64&e.t||(e.t|=64,q(t),H(n,"componentDidLoad"),e.P(t),l||F()),e.L(t),e.v&&(e.v(),e.v=void 0),512&e.t&&oe((()=>E(e,!1))),e.t&=-517},F=()=>{q(o.documentElement),oe((()=>L(s,"appload",{detail:{namespace:"awesome-elements"}})))},H=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){K(e)}},R=(e,t)=>e&&e.then?e.then(t):t(),q=e=>e.classList.add("hydrated"),D=(e,t,n)=>{if(t.W){e.watchers&&(t.N=e.watchers);const l=Object.entries(t.W),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>B(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=B(e),o=s.g,i=s.T.get(t),c=s.t,r=s.k;if(n=((e,t)=>null==e||d(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),(!(8&c)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.T.set(t,n),r)){if(l.N&&128&c){const e=l.N[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(e){K(e,o)}}))}2==(18&c)&&E(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=B(this);return n.U.then((()=>n.k[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){i.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.M.push([e,s]),s}))}}return e},V=e=>{H(e,"connectedCallback")},_=(e,t={})=>{const n=[],l=t.exclude||[],c=s.customElements,a=o.head,u=a.querySelector("meta[charset]"),h=o.createElement("style"),p=[];let d,m=!0;Object.assign(i,t),i.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],o:t[1],W:t[2],A:t[3]};s.W=t[2],s.M=[],s.N={};const o=s.o,a=class extends HTMLElement{constructor(e){super(e),I(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),m?p.push(this):i.jmp((()=>(e=>{if(0==(1&i.t)){const t=B(e),n=t.S,l=()=>{};if(1&t.t)V(t.k);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){W(t,t.j=n);break}}n.W&&Object.entries(n.W).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=X(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.N=s.watchers,D(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){K(e)}t.t&=-9,t.t|=128,e(),V(t.k)}if(s.style){let l=s.style;"string"!=typeof l&&(l=l[t.O=(e=>Z.map((t=>t(e))).find((e=>!!e)))(e)]);const o=f(n,t.O);if(!Y.has(o)){const e=()=>{};((e,t,n)=>{let l=Y.get(e);r&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,Y.set(e,l)})(o,l,!!(1&n.t)),e()}}}const o=t.j,i=()=>E(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(e,t,n)}l()}})(this)))}disconnectedCallback(){i.jmp((()=>(()=>{0==(1&i.t)&&H(B(this).k,"disconnectedCallback")})()))}componentOnReady(){return B(this).F}};s.H=e[0],l.includes(o)||c.get(o)||(n.push(o),c.define(o,D(a,s,1)))}))})),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),a.insertBefore(h,u?u.nextSibling:a.firstChild),m=!1,p.length?p.map((e=>e.connectedCallback())):i.jmp((()=>d=setTimeout(F,30)))},z=new WeakMap,B=e=>z.get(e),G=(e,t)=>z.set(t.k=e,t),I=(e,t)=>{const n={t:0,g:e,S:t,T:new Map};return n.U=new Promise((e=>n.L=e)),n.F=new Promise((e=>n.P=e)),e["s-p"]=[],e["s-rc"]=[],z.set(e,n)},J=(e,t)=>t in e,K=(e,t)=>(0,console.error)(e,t),Q=new Map,X=e=>{const t=e.o.replace(/-/g,"_"),n=e.H,l=Q.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(Q.set(n,e),e[t])),K)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},Y=new Map,Z=[],ee=[],te=[],ne=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&i.t?oe(se):i.raf(se))},le=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){K(e)}e.length=0},se=()=>{le(ee),le(te),(l=ee.length>0)&&i.raf(se)},oe=e=>c().then(e),ie=ne(te,!0);export{$ as H,_ as b,P as c,x as g,m as h,c as p,G as r,h as s}