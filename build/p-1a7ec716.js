let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),i=new WeakMap,a=(e,t)=>"sc-"+(t&&32&e.t?e.o+"-"+t:e.o),u=e=>J.push(e),f={},d=e=>"object"==(e=typeof e)||"function"===e,m=(e,t,...n)=>{let l=null,s=!1,o=!1;const c=[],r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!d(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?h(null,l):l),o=s)};r(n);const i=h(e,null);return i.u=t,c.length>0&&(i.m=c),i},h=(e,t)=>({t:0,h:e,i:t,p:null,m:null,u:null}),p={},$=(e,t,n,s,c,r)=>{if(n!==s){let i=_(e,t),a=t.toLowerCase();if(i||"o"!==t[0]||"n"!==t[1]){const l=d(s);if((i||l&&null!==s)&&!c)try{if(e.tagName.includes("-"))e[t]=s;else{const l=null==s?"":s;"list"===t?i=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&r||c)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):_(l,a)?a.slice(2):a[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},y=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||f,c=t.u||f;for(l in o)l in c||$(s,l,o[l],void 0,n,t.t);for(l in c)$(s,l,o[l],c[l],n,t.t)},b=(t,n,l)=>{const o=n.m[l];let c,r,i=0;if(null!==o.i)c=o.p=s.createTextNode(o.i);else if(c=o.p=s.createElement(o.h),y(null,o,!1),null!=e&&c["s-si"]!==e&&c.classList.add(c["s-si"]=e),o.m)for(i=0;i<o.m.length;++i)r=b(t,o,i),r&&c.appendChild(r);return c},w=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=b(null,l,o),r&&(s[o].p=r,i.insertBefore(r,n)))},g=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},S=(e,t)=>e.h===t.h,j=(e,t)=>{const n=t.p=e.p,l=e.m,s=t.m,o=t.i;null===o?("slot"===t.h||y(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],d=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==d?d=l[--u]:S(i,f)?(j(i,f),i=t[++o],f=l[++c]):S(a,d)?(j(a,d),a=t[--r],d=l[--u]):S(i,d)?(j(i,d),e.insertBefore(i.p,a.p.nextSibling),i=t[++o],d=l[--u]):S(a,f)?(j(a,f),e.insertBefore(a.p,i.p),a=t[--r],f=l[++c]):(s=b(t&&t[c],n,c),f=l[++c],s&&i.p.parentNode.insertBefore(s,i.p));o>r?w(e,null==l[u+1]?null:l[u+1].p,n,l,c,u):c>u&&g(t,o,r)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),w(n,null,t,s,0,s.length-1)):null!==l&&g(l,0,l.length-1)):e.i!==o&&(n.data=o)},k=e=>q(e).$,v=(e,t,n)=>{const l=k(e);return{emit:e=>C(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},C=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},M=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},O=(e,t)=>{if(e.t|=16,!(4&e.t))return M(e,e.S),te((()=>P(e,t)));e.t|=512},P=(e,t)=>{const n=e.j;let l;return l=N(n,t?"componentWillLoad":"componentWillUpdate"),T(l,(()=>L(e,n,t)))},L=async(e,t,n)=>{const l=e.$,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.$,l=t.t,o=((e,t,n)=>{let l=a(t,n);const o=I.get(l);if(e=11===e.nodeType?e:s,o)if("string"==typeof o){let t,n=i.get(e=e.head||e);n||i.set(e,n=new Set),n.has(l)||(t=s.createElement("style"),t.innerHTML=o,e.insertBefore(t,e.querySelector("link")),n&&n.add(l))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return l})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.v);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);W(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>x(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},W=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.$,o=n.k,c=n.C||h(null,null),r=(e=>e&&e.h===p)(l)?l:m(null,null,l);t=s.tagName,o.M&&(r.u=r.u||{},o.M.map((([e,t])=>r.u[t]=s[e]))),r.h=null,r.t|=4,n.C=r,r.p=c.p=s.shadowRoot||s,e=s["s-sc"],j(c,r)})(n,l)}catch(e){z(e,n.$)}return null},x=e=>{const t=e.$,n=e.j,l=e.S;64&e.t||(e.t|=64,U(t),N(n,"componentDidLoad"),e.O(t),l||E()),e.P(t),e.g&&(e.g(),e.g=void 0),512&e.t&&ee((()=>O(e,!1))),e.t&=-517},E=()=>{U(s.documentElement),ee((()=>C(l,"appload",{detail:{namespace:"awesome-elements"}})))},N=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){z(e)}},T=(e,t)=>e&&e.then?e.then(t):t(),U=e=>e.classList.add("hydrated"),A=(e,t,n)=>{if(t.L){e.watchers&&(t.W=e.watchers);const l=Object.entries(t.L),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>q(this).N.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=q(e),o=s.$,c=s.N.get(t),r=s.t,i=s.j;if(n=((e,t)=>null==e||d(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.L[t][0]),(!(8&r)||void 0===c)&&n!==c&&(!Number.isNaN(c)||!Number.isNaN(n))&&(s.N.set(t,n),i)){if(l.W&&128&r){const e=l.W[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(e){z(e,o)}}))}2==(18&r)&&O(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=q(this);return n.T.then((()=>n.j[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.M.push([e,s]),s}))}}return e},F=e=>{N(e,"connectedCallback")},H=(e,t={})=>{const n=[],c=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),d=s.createElement("style"),m=[];let h,p=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],o:t[1],L:t[2],U:t[3]};l.L=t[2],l.M=[],l.W={};const s=l.o,u=class extends HTMLElement{constructor(e){super(e),V(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),p?m.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=q(e),n=t.k,l=()=>{};if(1&t.t)F(t.j);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){M(t,t.S=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=G(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.W=s.watchers,A(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){z(e)}t.t&=-9,t.t|=128,e(),F(t.j)}if(s.style){let l=s.style;"string"!=typeof l&&(l=l[t.v=(e=>J.map((t=>t(e))).find((e=>!!e)))(e)]);const o=a(n,t.v);if(!I.has(o)){const e=()=>{};((e,t,n)=>{let l=I.get(e);r&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,I.set(e,l)})(o,l,!!(1&n.t)),e()}}}const o=t.S,c=()=>O(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(e,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{0==(1&o.t)&&N(q(this).j,"disconnectedCallback")})()))}componentOnReady(){return q(this).A}};l.F=e[0],c.includes(s)||i.get(s)||(n.push(s),i.define(s,A(u,l,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u.insertBefore(d,f?f.nextSibling:u.firstChild),p=!1,m.length?m.map((e=>e.connectedCallback())):o.jmp((()=>h=setTimeout(E,30)))},R=new WeakMap,q=e=>R.get(e),D=(e,t)=>R.set(t.j=e,t),V=(e,t)=>{const n={t:0,$:e,k:t,N:new Map};return n.T=new Promise((e=>n.P=e)),n.A=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],R.set(e,n)},_=(e,t)=>t in e,z=(e,t)=>(0,console.error)(e,t),B=new Map,G=e=>{const t=e.o.replace(/-/g,"_"),n=e.F,l=B.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(B.set(n,e),e[t])),z)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},I=new Map,J=[],K=[],Q=[],X=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?ee(Z):o.raf(Z))},Y=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){z(e)}e.length=0},Z=()=>{Y(K),Y(Q),(n=K.length>0)&&o.raf(Z)},ee=e=>c().then(e),te=X(Q,!0);export{p as H,H as b,v as c,k as g,m as h,c as p,D as r,u as s}