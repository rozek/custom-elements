!function(){"use strict";var e=Promise,t=(e,t)=>{const n=e=>{for(let t=0,{length:n}=e;t<n;t++)r(e[t])},r=({target:e,attributeName:t,oldValue:n})=>{e.attributeChangedCallback(t,n,e.getAttribute(t))};return(o,l)=>{const{observedAttributes:s}=o.constructor;return s&&e(l).then((()=>{new t(n).observe(o,{attributes:!0,attributeOldValue:!0,attributeFilter:s});for(let e=0,{length:t}=s;e<t;e++)o.hasAttribute(s[e])&&r({target:o,attributeName:s[e],oldValue:null})})),o}};const n=!0,r=!1,o="querySelectorAll";function l(e){this.observe(e,{subtree:n,childList:n})}const s="querySelectorAll",{document:c,Element:a,MutationObserver:i,Set:u,WeakMap:f}=self,h=e=>s in e,{filter:d}=[];var g=e=>{const t=new f,g=(n,r)=>{let o;if(r)for(let l,s=(e=>e.matches||e.webkitMatchesSelector||e.msMatchesSelector)(n),c=0,{length:a}=m;c<a;c++)s.call(n,l=m[c])&&(t.has(n)||t.set(n,new u),o=t.get(n),o.has(l)||(o.add(l),e.handle(n,r,l)));else t.has(n)&&(o=t.get(n),t.delete(n),o.forEach((t=>{e.handle(n,r,t)})))},p=(e,t=!0)=>{for(let n=0,{length:r}=e;n<r;n++)g(e[n],t)},{query:m}=e,w=e.root||c,y=((e,t,s)=>{const c=(t,r,l,s,a)=>{for(let i=0,{length:u}=t;i<u;i++){const u=t[i];(a||o in u)&&(s?r.has(u)||(r.add(u),l.delete(u),e(u,s)):l.has(u)||(l.add(u),r.delete(u),e(u,s)),a||c(u[o]("*"),r,l,s,n))}},a=new(s||MutationObserver)((e=>{for(let t=new Set,o=new Set,l=0,{length:s}=e;l<s;l++){const{addedNodes:s,removedNodes:a}=e[l];c(a,t,o,r,r),c(s,t,o,n,r)}}));return a.add=l,a.add(t||document),a})(g,w,i),{attachShadow:b}=a.prototype;return b&&(a.prototype.attachShadow=function(e){const t=b.call(this,e);return y.add(t),t}),m.length&&p(w[s](m)),{drop:e=>{for(let n=0,{length:r}=e;n<r;n++)t.delete(e[n])},flush:()=>{const e=y.takeRecords();for(let t=0,{length:n}=e;t<n;t++)p(d.call(e[t].removedNodes,h),!1),p(d.call(e[t].addedNodes,h),!0)},observer:y,parse:p}};const{document:p,Map:m,MutationObserver:w,Object:y,Set:b,WeakMap:E,Element:v,HTMLElement:S,Node:M,Error:O,TypeError:N,Reflect:A}=self,q=self.Promise||e,{defineProperty:C,keys:T,getOwnPropertyNames:D,setPrototypeOf:L}=y;let P=!self.customElements;const $=e=>{const t=T(e),n=[],{length:r}=t;for(let o=0;o<r;o++)n[o]=e[t[o]],delete e[t[o]];return()=>{for(let o=0;o<r;o++)e[t[o]]=n[o]}};if(P){const{createElement:n}=p,r=new m,o=new m,l=new m,s=new m,c=[],a=(e,t,n)=>{const r=l.get(n);if(t&&!r.isPrototypeOf(e)){const t=$(e);u=L(e,r);try{new r.constructor}finally{u=null,t()}}const o=(t?"":"dis")+"connectedCallback";o in r&&e[o]()},{parse:i}=g({query:c,handle:a});let u=null;const f=t=>{if(!o.has(t)){let n,r=new e((e=>{n=e}));o.set(t,{$:r,_:n})}return o.get(t).$},h=t(f,w);function d(){const{constructor:e}=this;if(!r.has(e))throw new N("Illegal constructor");const t=r.get(e);if(u)return h(u,t);const o=n.call(p,t);return h(L(o,e.prototype),t)}C(self,"customElements",{configurable:!0,value:{define:(e,t)=>{if(s.has(e))throw new O(`the name "${e}" has already been used with this registry`);r.set(t,e),l.set(e,t.prototype),s.set(e,t),c.push(e),f(e).then((()=>{i(p.querySelectorAll(e))})),o.get(e)._(t)},get:e=>s.get(e),whenDefined:f}}),C(d.prototype=S.prototype,"constructor",{value:d}),C(self,"HTMLElement",{configurable:!0,value:d}),C(p,"createElement",{configurable:!0,value(e,t){const r=t&&t.is,o=r?s.get(r):s.get(e);return o?new o:n.call(p,e)}}),"isConnected"in M.prototype||C(M.prototype,"isConnected",{configurable:!0,get(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{function e(){return self.Reflect.construct(HTMLLIElement,[],e)}e.prototype=HTMLLIElement.prototype;const t="extends-li";self.customElements.define("extends-li",e,{extends:"li"}),P=p.createElement("li",{is:t}).outerHTML.indexOf(t)<0;const{get:n,whenDefined:r}=self.customElements;C(self.customElements,"whenDefined",{configurable:!0,value(e){return r.call(this,e).then((t=>t||n.call(this,e)))}})}catch(e){P=!P}if(P){const e=self.customElements,{attachShadow:n}=v.prototype,{createElement:r}=p,{define:o,get:l}=e,{construct:s}=A||{construct(e){return e.call(this)}},c=new E,a=new b,i=new m,u=new m,f=new m,h=new m,d=[],y=[],S=t=>h.get(t)||l.call(e,t),M=(e,t,n)=>{const r=f.get(n);if(t&&!r.isPrototypeOf(e)){const t=$(e);H=L(e,r);try{new r.constructor}finally{H=null,t()}}const o=(t?"":"dis")+"connectedCallback";o in r&&e[o]()},{parse:T}=g({query:y,handle:M}),{parse:P}=g({query:d,handle(e,t){c.has(e)&&(t?a.add(e):a.delete(e),y.length&&_.call(y,e))}}),k=e=>{if(!u.has(e)){let t,n=new q((e=>{t=e}));u.set(e,{$:n,_:t})}return u.get(e).$},I=t(k,w);let H=null;function _(e){const t=c.get(e);T(t.querySelectorAll(this),e.isConnected)}D(self).filter((e=>/^HTML.*Element$/.test(e))).forEach((e=>{const t=self[e];function n(){const{constructor:e}=this;if(!i.has(e))throw new N("Illegal constructor");const{is:n,tag:o}=i.get(e);if(n){if(H)return I(H,n);const t=r.call(p,o);return t.setAttribute("is",n),I(L(t,e.prototype),n)}return s.call(this,t,[],e)}L(n,t),C(n.prototype=t.prototype,"constructor",{value:n}),C(self,e,{value:n})})),C(p,"createElement",{configurable:!0,value(e,t){const n=t&&t.is;if(n){const t=h.get(n);if(t&&i.get(t).tag===e)return new t}const o=r.call(p,e);return n&&o.setAttribute("is",n),o}}),n&&(v.prototype.attachShadow=function(e){const t=n.call(this,e);return c.set(this,t),t}),C(e,"get",{configurable:!0,value:S}),C(e,"whenDefined",{configurable:!0,value:k}),C(e,"define",{configurable:!0,value(t,n,r){if(S(t))throw new O(`'${t}' has already been defined as a custom element`);let l;const s=r&&r.extends;i.set(n,s?{is:t,tag:s}:{is:"",tag:t}),s?(l=`${s}[is="${t}"]`,f.set(l,n.prototype),h.set(t,n),y.push(l)):(o.apply(e,arguments),d.push(l=t)),k(t).then((()=>{s?(T(p.querySelectorAll(l)),a.forEach(_,[l])):P(p.querySelectorAll(l))})),u.get(t)._(n)}})}}();
