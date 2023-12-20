import{r as p,e as g,p as T,q as D,k as b,v as P,w as N,x as j,y as O,z as A,A as I,B as G,C as R}from"./scheduler.S95KkVxN.js";let $=!1;function q(){$=!0}function z(){$=!1}function F(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function J(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let c=0;c<t.length;c++){const u=t[c];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const c=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=c?s+1:F(1,s,d=>t[n[d]].claim_order,c))-1;i[r]=n[u]+1;const o=u+1;n[o]=r,s=Math.max(o,s)}const a=[],l=[];let f=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(a.push(t[r-1]);f>=r;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);a.reverse(),l.sort((r,c)=>r.claim_order-c.claim_order);for(let r=0,c=0;r<l.length;r++){for(;c<a.length&&l[r].claim_order>=a[c].claim_order;)c++;const u=c<a.length?a[c]:null;e.insertBefore(l[r],u)}}function K(e,t){if($){for(J(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function U(e,t,n){e.insertBefore(t,n||null)}function V(e,t,n){$&&!n?K(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function H(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function re(){return x(" ")}function le(){return x("")}function ce(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const W=["width","height"];function ae(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&W.indexOf(i)===-1?e[i]=t[i]:L(e,i,t[i])}function fe(e,t){for(const n in t)L(e,n,t[n])}function oe(e){return e.dataset.svelteH}function ue(e){return e===""?null:+e}function k(e){return Array.from(e.childNodes)}function C(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function M(e,t,n,i,s=!1){C(e);const a=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function B(e,t,n,i){return M(e,s=>s.nodeName===t,s=>{const a=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||a.push(f.name)}a.forEach(l=>s.removeAttribute(l))},()=>i(t))}function _e(e,t,n){return B(e,t,n,S)}function de(e,t,n){return B(e,t,n,H)}function Q(e,t){return M(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function he(e){return Q(e," ")}function E(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function me(e,t){const n=E(e,"HTML_TAG_START",0),i=E(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new y(t);C(e);const s=e.splice(n,i-n+1);m(s[0]),m(s[s.length-1]);const a=s.slice(1,s.length-1);if(a.length===0)return new y(t);for(const l of a)l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new y(t,a)}function pe(e,t){t=""+t,e.data!==t&&(e.data=t)}function $e(e,t){e.value=t??""}function ye(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ge(e,t,n){e.classList.toggle(t,!!n)}function xe(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const a=s.textContent.trim();a===`HEAD_${e}_END`?(i-=1,n.push(s)):a===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class X{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(t=!1){this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=H(n.nodeName):this.e=S(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(m)}}class y extends X{l=void 0;constructor(t=!1,n){super(t),this.e=this.n=null,this.l=n}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],t)}}function ve(e,t){return new e(t)}const h=new Set;let _;function we(){_={r:0,c:[],p:_}}function Te(){_.r||p(_.c),_=_.p}function Y(e,t){e&&e.i&&(h.delete(e),e.i(t))}function Ne(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),_.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Ae(e){e&&e.c()}function Ee(e,t){e&&e.l(t)}function Z(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),N(()=>{const a=e.$$.on_mount.map(I).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...a):p(a),e.$$.on_mount=[]}),s.forEach(N)}function ee(e,t){const n=e.$$;n.fragment!==null&&(j(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(G.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,i,s,a,l=null,f=[-1]){const r=O;A(e);const c=e.$$={fragment:null,ctx:[],props:a,update:g,not_equal:s,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:T(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};l&&l(c.root);let u=!1;if(c.ctx=n?n(e,t.props||{},(o,d,...v)=>{const w=v.length?v[0]:d;return c.ctx&&s(c.ctx[o],c.ctx[o]=w)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](w),u&&te(e,o)),d}):[],c.update(),u=!0,p(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){q();const o=k(t.target);c.fragment&&c.fragment.l(o),o.forEach(m)}else c.fragment&&c.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor),z(),D()}A(r)}class Se{$$=void 0;$$set=void 0;$destroy(){ee(this,1),this.$destroy=g}$on(t,n){if(!b(n))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);export{ge as A,ae as B,oe as C,$e as D,ce as E,ue as F,se as G,y as H,H as I,de as J,fe as K,Se as S,V as a,Te as b,he as c,Y as d,le as e,m as f,S as g,_e as h,be as i,k as j,L as k,ye as l,x as m,Q as n,pe as o,we as p,ve as q,Ae as r,re as s,Ne as t,Ee as u,Z as v,ee as w,xe as x,K as y,me as z};
