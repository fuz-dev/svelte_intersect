function m(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function A(){return Object.create(null)}function E(t){t.forEach(j)}function q(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function F(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function P(t,n){return t!=t?n==n:t!==n}function S(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(v(n,e))}function D(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],d=Math.max(n.dirty.length,o.length);for(let s=0;s<d;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,l){if(o){const d=x(n,e,r,l);t.p(d,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){return t&&q(t.destroy)?t.destroy:m}let f;function _(t){f=t}function g(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){g().$$.on_mount.push(t)}function L(t){g().$$.after_update.push(t)}function N(t,n){return g().$$.context.set(t,n),n}const a=[],b=[];let u=[];const y=[],k=Promise.resolve();let p=!1;function O(){p||(p=!0,k.then(C))}function Q(){return O(),k}function z(t){u.push(t)}const h=new Set;let c=0;function C(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,_(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(_(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;y.length;)y.pop()();p=!1,h.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function R(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{j as A,a as B,O as C,L as a,b,D as c,G as d,m as e,v as f,I as g,U as h,w as i,J as j,q as k,F as l,B as m,P as n,K as o,A as p,C as q,E as r,N as s,Q as t,H as u,S as v,z as w,R as x,f as y,_ as z};
