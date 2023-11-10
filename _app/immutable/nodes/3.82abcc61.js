import{n as ge,c as se,u as ne,g as re,d as oe,h as el,l as Ie,e as je}from"../chunks/scheduler.149b6ed4.js";import{S as ve,i as ke,g,s as P,m as j,h as v,j as k,f as h,c as z,C as sl,n as D,k as u,a as S,y as _,d as A,p as fe,t as T,b as ie,o as x,l as de,A as y,G as ll,e as De,r as _e,u as he,v as ue,w as pe}from"../chunks/index.07c3a0d5.js";import{b as Ae,c as Se,f as Ne,d as me,e as ae,u as nl,h as rl,L as ol,p as al,a as Oe,s as fl}from"../chunks/package.93029f71.js";import{p as tl}from"../chunks/stores.cc78e804.js";import{e as il}from"../chunks/singletons.b3eea650.js";function Ce(r,e,t){var a,f;const l=r.slice();l[24]=e[t],l[29]=t;const n=l[16](l[11],l[24]);l[25]=n;const s=(a=l[3])==null?void 0:a[l[29]];l[26]=s;const o=l[26]&&((f=l[5])==null?void 0:f[l[26]]);return l[27]=o,l}function Ve(r,e,t){const l=r.slice();return l[15]=e[t].name,l[30]=e[t].kind,l}const cl=r=>({homepage_url:r[0]&512}),Te=r=>({homepage_url:r[9]}),_l=r=>({npm_url:r[0]&8192}),Le=r=>({npm_url:r[13]}),hl=r=>({description:r[0]&128}),Me=r=>({description:r[7]}),ul=r=>({repo_name:r[0]&4096}),We=r=>({repo_name:r[12]});function Pe(r){let e=" ",t,l;return{c(){t=j(e),l=j(r[6])},l(n){t=D(n,e),l=D(n,r[6])},m(n,s){S(n,t,s),S(n,l,s)},p(n,s){s[0]&64&&x(l,n[6])},d(n){n&&(h(t),h(l))}}}function pl(r){let e,t,l=r[6]&&Pe(r);return{c(){e=g("div"),t=j(r[12]),l&&l.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var s=k(e);t=D(s,r[12]),l&&l.l(s),s.forEach(h),this.h()},h(){u(e,"class","repo_name svelte-1rnqnfh")},m(n,s){S(n,e,s),_(e,t),l&&l.m(e,null)},p(n,s){s[0]&4096&&x(t,n[12]),n[6]?l?l.p(n,s):(l=Pe(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(n){n&&h(e),l&&l.d()}}}function ze(r){let e;const t=r[23].description,l=se(t,r,r[22],Me),n=l||ml(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),e=!0},p(s,o){l?l.p&&(!e||o[0]&4194432)&&ne(l,t,s,s[22],e?oe(t,s[22],o,hl):re(s[22]),Me):n&&n.p&&(!e||o[0]&128)&&n.p(s,e?o:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){T(n,s),e=!1},d(s){n&&n.d(s)}}}function ml(r){let e,t;return{c(){e=g("div"),t=j(r[7]),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=k(e);t=D(n,r[7]),n.forEach(h),this.h()},h(){u(e,"class","spaced")},m(l,n){S(l,e,n),_(e,t)},p(l,n){n[0]&128&&x(t,l[7])},d(l){l&&h(e)}}}function He(r){let e;const t=r[23].npm_url,l=se(t,r,r[22],Le),n=l||dl(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),e=!0},p(s,o){l?l.p&&(!e||o[0]&4202496)&&ne(l,t,s,s[22],e?oe(t,s[22],o,_l):re(s[22]),Le):n&&n.p&&(!e||o[0]&32768)&&n.p(s,e?o:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){T(n,s),e=!1},d(s){n&&n.d(s)}}}function dl(r){let e,t,l;return{c(){e=g("blockquote"),t=j("npm i -D "),l=j(r[15]),this.h()},l(n){e=v(n,"BLOCKQUOTE",{class:!0});var s=k(e);t=D(s,"npm i -D "),l=D(s,r[15]),s.forEach(h),this.h()},h(){u(e,"class","npm_url spaced svelte-1rnqnfh")},m(n,s){S(n,e,s),_(e,t),_(e,l)},p(n,s){s[0]&32768&&x(l,n[15])},d(n){n&&h(e)}}}function Be(r){let e;const t=r[23].homepage_url,l=se(t,r,r[22],Te),n=l||gl(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,o){n&&n.m(s,o),e=!0},p(s,o){l?l.p&&(!e||o[0]&4194816)&&ne(l,t,s,s[22],e?oe(t,s[22],o,cl):re(s[22]),Te):n&&n.p&&(!e||o[0]&16896)&&n.p(s,e?o:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){T(n,s),e=!1},d(s){n&&n.d(s)}}}function gl(r){let e,t,l,n,s,o,a,f=Ne(r[9])+"",d;return{c(){e=g("div"),t=j(`homepage:
					`),l=g("a"),n=g("img"),a=P(),d=j(f),this.h()},l(i){e=v(i,"DIV",{class:!0});var p=k(e);t=D(p,`homepage:
					`),l=v(p,"A",{class:!0,href:!0});var c=k(l);n=v(c,"IMG",{src:!0,alt:!0}),a=z(c),d=D(c,f),c.forEach(h),p.forEach(h),this.h()},h(){Ie(n.src,s=me(r[9],"/")+"favicon.png")||u(n,"src",s),u(n,"alt",o="favicon to homepage at "+r[9]),de(n,"width","16px"),de(n,"height","16px"),de(n,"margin-right","var(--spacing_xs)"),u(l,"class","chip row svelte-1rnqnfh"),u(l,"href",r[9]),y(l,"active",r[9]===r[14].url.href),u(e,"class","row svelte-1rnqnfh")},m(i,p){S(i,e,p),_(e,t),_(e,l),_(l,n),_(l,a),_(l,d)},p(i,p){p[0]&512&&!Ie(n.src,s=me(i[9],"/")+"favicon.png")&&u(n,"src",s),p[0]&512&&o!==(o="favicon to homepage at "+i[9])&&u(n,"alt",o),p[0]&512&&f!==(f=Ne(i[9])+"")&&x(d,f),p[0]&512&&u(l,"href",i[9]),p[0]&16896&&y(l,"active",i[9]===i[14].url.href)},d(i){i&&h(e)}}}function Re(r){let e,t,l,n;return{c(){e=g("div"),t=j("repo: "),l=g("a"),n=j(r[12]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=k(e);t=D(o,"repo: "),l=v(o,"A",{class:!0,title:!0,href:!0});var a=k(l);n=D(a,r[12]),a.forEach(h),o.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","repo"),u(l,"href",r[11]),u(e,"class","row svelte-1rnqnfh")},m(s,o){S(s,e,o),_(e,t),_(e,l),_(l,n)},p(s,o){o[0]&4096&&x(n,s[12]),o[0]&2048&&u(l,"href",s[11])},d(s){s&&h(e)}}}function Ue(r){let e,t,l,n;return{c(){e=g("div"),t=j("npm: "),l=g("a"),n=j(r[15]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=k(e);t=D(o,"npm: "),l=v(o,"A",{class:!0,title:!0,href:!0});var a=k(l);n=D(a,r[15]),a.forEach(h),o.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","npm"),u(l,"href",r[13]),u(e,"class","row svelte-1rnqnfh")},m(s,o){S(s,e,o),_(e,t),_(e,l),_(l,n)},p(s,o){o[0]&32768&&x(n,s[15]),o[0]&8192&&u(l,"href",s[13])},d(s){s&&h(e)}}}function Ge(r){let e,t,l,n;return{c(){e=g("div"),t=j("version: "),l=g("a"),n=j(r[8]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=k(e);t=D(o,"version: "),l=v(o,"A",{class:!0,title:!0,href:!0});var a=k(l);n=D(a,r[8]),a.forEach(h),o.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","version"),u(l,"href",r[10]),u(e,"class","row svelte-1rnqnfh")},m(s,o){S(s,e,o),_(e,t),_(e,l),_(l,n)},p(s,o){o[0]&256&&x(n,s[8]),o[0]&1024&&u(l,"href",s[10])},d(s){s&&h(e)}}}function Je(r){let e,t,l,n;return{c(){e=g("div"),t=j("license: "),l=g("a"),n=j(r[1]),this.h()},l(s){e=v(s,"DIV",{class:!0});var o=k(e);t=D(o,"license: "),l=v(o,"A",{class:!0,title:!0,href:!0});var a=k(l);n=D(a,r[1]),a.forEach(h),o.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","license"),u(l,"href",r[4]),u(e,"class","row svelte-1rnqnfh")},m(s,o){S(s,e,o),_(e,t),_(e,l),_(l,n)},p(s,o){o[0]&2&&x(n,s[1]),o[0]&16&&u(l,"href",s[4])},d(s){s&&h(e)}}}function Fe(r){let e,t,l,n,s;return{c(){e=g("section"),t=j(`data:
				`),l=g("a"),n=j("package.json"),this.h()},l(o){e=v(o,"SECTION",{class:!0});var a=k(e);t=D(a,`data:
				`),l=v(a,"A",{class:!0,title:!0,href:!0});var f=k(l);n=D(f,"package.json"),f.forEach(h),a.forEach(h),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","data"),u(l,"href",s=me(r[9],"/")+".well-known/package.json"),u(e,"class","row spaced svelte-1rnqnfh")},m(o,a){S(o,e,a),_(e,t),_(e,l),_(l,n)},p(o,a){a[0]&512&&s!==(s=me(o[9],"/")+".well-known/package.json")&&u(l,"href",s)},d(o){o&&h(e)}}}function Ke(r){let e,t,l=[],n=new Map,s=ae(r[2]);const o=a=>a[24];for(let a=0;a<s.length;a+=1){let f=Ce(r,s,a),d=o(f);n.set(d,l[a]=Xe(d,f))}return{c(){e=g("section"),t=g("menu");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=v(a,"SECTION",{class:!0});var f=k(e);t=v(f,"MENU",{});var d=k(t);for(let i=0;i<l.length;i+=1)l[i].l(d);d.forEach(h),f.forEach(h),this.h()},h(){u(e,"class","width_full spaced")},m(a,f){S(a,e,f),_(e,t);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null)},p(a,f){f[0]&67628&&(s=ae(a[2]),l=nl(l,f,o,1,a,s,n,t,rl,Xe,null,Ce))},d(a){a&&h(e);for(let f=0;f<l.length;f+=1)l[f].d()}}}function Qe(r){let e,t=ae(r[27].declarations),l=[];for(let n=0;n<t.length;n+=1)l[n]=Ye(Ve(r,t,n));return{c(){e=g("ul");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=v(n,"UL",{class:!0});var s=k(e);for(let o=0;o<l.length;o+=1)l[o].l(s);s.forEach(h),this.h()},h(){u(e,"class","declarations svelte-1rnqnfh")},m(n,s){S(n,e,s);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(n,s){if(s[0]&44){t=ae(n[27].declarations);let o;for(o=0;o<t.length;o+=1){const a=Ve(n,t,o);l[o]?l[o].p(a,s):(l[o]=Ye(a),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(n){n&&h(e),ll(l,n)}}}function Ye(r){let e,t=r[15]+"",l,n,s;return{c(){e=g("li"),l=j(t),n=P(),this.h()},l(o){e=v(o,"LI",{class:!0});var a=k(e);l=D(a,t),n=z(a),a.forEach(h),this.h()},h(){u(e,"class",s="declaration chip "+r[30]+"_declaration svelte-1rnqnfh")},m(o,a){S(o,e,a),_(e,l),_(e,n)},p(o,a){a[0]&44&&t!==(t=o[15]+"")&&x(l,t),a[0]&44&&s!==(s="declaration chip "+o[30]+"_declaration svelte-1rnqnfh")&&u(e,"class",s)},d(o){o&&h(e)}}}function Xe(r,e){let t,l,n,s=e[24]+"",o,a,f,d,i=e[27]&&Qe(e);return{key:r,first:null,c(){t=g("li"),l=g("div"),n=g("a"),o=j(s),f=P(),i&&i.c(),d=P(),this.h()},l(p){t=v(p,"LI",{class:!0});var c=k(t);l=v(c,"DIV",{});var E=k(l);n=v(E,"A",{class:!0,href:!0});var w=k(n);o=D(w,s),w.forEach(h),E.forEach(h),f=z(c),i&&i.l(c),d=z(c),c.forEach(h),this.h()},h(){u(n,"class","chip svelte-1rnqnfh"),u(n,"href",a=e[25]),u(t,"class","module svelte-1rnqnfh"),y(t,"ts",e[24].endsWith(".js")),y(t,"svelte",e[24].endsWith(".svelte")),y(t,"css",e[24].endsWith(".css")),y(t,"json",e[24].endsWith(".json")),this.first=t},m(p,c){S(p,t,c),_(t,l),_(l,n),_(n,o),_(t,f),i&&i.m(t,null),_(t,d)},p(p,c){e=p,c[0]&4&&s!==(s=e[24]+"")&&x(o,s),c[0]&2052&&a!==(a=e[25])&&u(n,"href",a),e[27]?i?i.p(e,c):(i=Qe(e),i.c(),i.m(t,d)):i&&(i.d(1),i=null),c[0]&4&&y(t,"ts",e[24].endsWith(".js")),c[0]&4&&y(t,"svelte",e[24].endsWith(".svelte")),c[0]&4&&y(t,"css",e[24].endsWith(".css")),c[0]&4&&y(t,"json",e[24].endsWith(".json"))},d(p){p&&h(t),i&&i.d()}}}function vl(r){let e,t,l,n,s,o,a,f,d,i,p,c,E,w,N,O,Y,B="raw data for <code>pkg: Package_Meta</code>",le,q,C,X=JSON.stringify(r[0],null,"	")+"",Z,H;const V=r[23].repo_name,te=se(V,r,r[22],We),I=te||pl(r),Q=r[23].default,$=se(Q,r,r[22],null);let L=r[7]&&ze(r),M=r[13]&&He(r),W=r[9]&&Be(r),R=r[11]&&Re(r),U=r[13]&&Ue(r),G=r[10]&&Ge(r),J=r[4]&&Je(r),F=r[9]&&Fe(r),K=r[2]&&r[11]&&Ke(r);return{c(){e=g("div"),t=g("header"),I&&I.c(),l=P(),$&&$.c(),n=P(),L&&L.c(),s=P(),M&&M.c(),o=P(),a=g("section"),W&&W.c(),f=P(),R&&R.c(),d=P(),U&&U.c(),i=P(),G&&G.c(),p=P(),J&&J.c(),c=P(),F&&F.c(),E=P(),K&&K.c(),w=P(),N=g("section"),O=g("details"),Y=g("summary"),Y.innerHTML=B,le=P(),q=g("pre"),C=g("code"),Z=j(X),this.h()},l(m){e=v(m,"DIV",{class:!0});var b=k(e);t=v(b,"HEADER",{class:!0});var be=k(t);I&&I.l(be),be.forEach(h),l=z(b),$&&$.l(b),n=z(b),L&&L.l(b),s=z(b),M&&M.l(b),o=z(b),a=v(b,"SECTION",{class:!0});var ee=k(a);W&&W.l(ee),f=z(ee),R&&R.l(ee),d=z(ee),U&&U.l(ee),i=z(ee),G&&G.l(ee),p=z(ee),J&&J.l(ee),c=z(ee),F&&F.l(ee),ee.forEach(h),E=z(b),K&&K.l(b),w=z(b),N=v(b,"SECTION",{class:!0});var Ee=k(N);O=v(Ee,"DETAILS",{});var ce=k(O);Y=v(ce,"SUMMARY",{"data-svelte-h":!0}),sl(Y)!=="svelte-k220bw"&&(Y.innerHTML=B),le=z(ce),q=v(ce,"PRE",{class:!0});var qe=k(q);C=v(qe,"CODE",{});var we=k(C);Z=D(we,X),we.forEach(h),qe.forEach(h),ce.forEach(h),Ee.forEach(h),b.forEach(h),this.h()},h(){u(t,"class","spaced"),u(a,"class","properties width_full spaced svelte-1rnqnfh"),u(q,"class","svelte-1rnqnfh"),u(N,"class","width_full spaced"),u(e,"class","package_detail svelte-1rnqnfh")},m(m,b){S(m,e,b),_(e,t),I&&I.m(t,null),_(e,l),$&&$.m(e,null),_(e,n),L&&L.m(e,null),_(e,s),M&&M.m(e,null),_(e,o),_(e,a),W&&W.m(a,null),_(a,f),R&&R.m(a,null),_(a,d),U&&U.m(a,null),_(a,i),G&&G.m(a,null),_(a,p),J&&J.m(a,null),_(a,c),F&&F.m(a,null),_(e,E),K&&K.m(e,null),_(e,w),_(e,N),_(N,O),_(O,Y),_(O,le),_(O,q),_(q,C),_(C,Z),H=!0},p(m,b){te?te.p&&(!H||b[0]&4198400)&&ne(te,V,m,m[22],H?oe(V,m[22],b,ul):re(m[22]),We):I&&I.p&&(!H||b[0]&4160)&&I.p(m,H?b:[-1,-1]),$&&$.p&&(!H||b[0]&4194304)&&ne($,Q,m,m[22],H?oe(Q,m[22],b,null):re(m[22]),null),m[7]?L?(L.p(m,b),b[0]&128&&A(L,1)):(L=ze(m),L.c(),A(L,1),L.m(e,s)):L&&(fe(),T(L,1,1,()=>{L=null}),ie()),m[13]?M?(M.p(m,b),b[0]&8192&&A(M,1)):(M=He(m),M.c(),A(M,1),M.m(e,o)):M&&(fe(),T(M,1,1,()=>{M=null}),ie()),m[9]?W?(W.p(m,b),b[0]&512&&A(W,1)):(W=Be(m),W.c(),A(W,1),W.m(a,f)):W&&(fe(),T(W,1,1,()=>{W=null}),ie()),m[11]?R?R.p(m,b):(R=Re(m),R.c(),R.m(a,d)):R&&(R.d(1),R=null),m[13]?U?U.p(m,b):(U=Ue(m),U.c(),U.m(a,i)):U&&(U.d(1),U=null),m[10]?G?G.p(m,b):(G=Ge(m),G.c(),G.m(a,p)):G&&(G.d(1),G=null),m[4]?J?J.p(m,b):(J=Je(m),J.c(),J.m(a,c)):J&&(J.d(1),J=null),m[9]?F?F.p(m,b):(F=Fe(m),F.c(),F.m(a,null)):F&&(F.d(1),F=null),m[2]&&m[11]?K?K.p(m,b):(K=Ke(m),K.c(),K.m(e,w)):K&&(K.d(1),K=null),(!H||b[0]&1)&&X!==(X=JSON.stringify(m[0],null,"	")+"")&&x(Z,X)},i(m){H||(A(I,m),A($,m),A(L),A(M),A(W),H=!0)},o(m){T(I,m),T($,m),T(L),T(M),T(W),H=!1},d(m){m&&h(e),I&&I.d(m),$&&$.d(m),L&&L.d(),M&&M.d(),W&&W.d(),R&&R.d(),U&&U.d(),G&&G.d(),J&&J.d(),F&&F.d(),K&&K.d()}}}function kl(r,e,t){let l,n,s,o,a,f,d,i,p,c,E,w,N,O,Y,B,le,q,C,X;el(r,tl,I=>t(14,X=I));let{$$slots:Z={},$$scope:H}=e,{pkg:V}=e;const te=(I,Q)=>I+"/blob/main/src/lib/"+(Q.endsWith(".js")?Q.slice(0,-3)+".ts":Q);return r.$$set=I=>{"pkg"in I&&t(0,V=I.pkg),"$$scope"in I&&t(22,H=I.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&1&&t(21,{package_json:l,src_json:n,npm_url:s,repo_name:o,repo_url:a,changelog_url:f,homepage_url:d}=V,l,(t(20,n),t(0,V)),(t(13,s),t(0,V)),(t(12,o),t(0,V)),(t(11,a),t(0,V)),(t(10,f),t(0,V)),(t(9,d),t(0,V))),r.$$.dirty[0]&2097152&&t(15,{name:i,version:p,description:c,icon:E,license:w,repository:N,exports:O}=l,i,(t(8,p),t(21,l),t(0,V)),(t(7,c),t(21,l),t(0,V)),(t(6,E),t(21,l),t(0,V)),(t(1,w),t(21,l),t(0,V)),(t(19,N),t(21,l),t(0,V)),(t(17,O),t(21,l),t(0,V))),r.$$.dirty[0]&1048576&&t(5,{modules:Y}=n,Y),r.$$.dirty[0]&524288&&t(18,B=N?Ae(Se(Se(typeof N=="string"?N:N.url,".git"),"/"),"git+"):null),r.$$.dirty[0]&262146&&t(4,le=w&&B?B+"/blob/main/LICENSE":null),r.$$.dirty[0]&131072&&t(3,q=O&&Object.keys(O)),r.$$.dirty[0]&131072&&t(2,C=O?Object.keys(O).map(I=>{const Q=Ae(I,"./");return Q==="."?"index.js":Q}):null)},[V,w,C,q,le,Y,E,c,p,d,f,a,o,s,X,i,te,O,B,N,n,l,H,Z]}class bl extends ve{constructor(e){super(),ke(this,e,kl,vl,ge,{pkg:0},null,[-1,-1])}}const El=r=>r.split("/").filter(e=>e&&e!=="."&&e!==".."),ql=r=>{const e=[],t=El(r);t.length&&e.push({type:"separator",path:"/"});let l="";for(let n=0;n<t.length;n++){const s=t[n];l+="/"+s,e.push({type:"piece",name:s,path:l}),n!==t.length-1&&e.push({type:"separator",path:l})}return e};function Ze(r,e,t){const l=r.slice();return l[11]=e[t],l}const wl=r=>({}),ye=r=>({});function Il(r){let e;return{c(){e=j("•")},l(t){e=D(t,"•")},m(t,l){S(t,e,l)},d(t){t&&h(e)}}}function jl(r){let e,t;const l=r[10].separator,n=se(l,r,r[9],ye),s=n||Al();return{c(){e=g("span"),s&&s.c(),this.h()},l(o){e=v(o,"SPAN",{class:!0});var a=k(e);s&&s.l(a),a.forEach(h),this.h()},h(){u(e,"class","separator svelte-g6c005")},m(o,a){S(o,e,a),s&&s.m(e,null),t=!0},p(o,a){n&&n.p&&(!t||a&512)&&ne(n,l,o,o[9],t?oe(l,o[9],a,wl):re(o[9]),ye)},i(o){t||(A(s,o),t=!0)},o(o){T(s,o),t=!1},d(o){o&&h(e),s&&s.d(o)}}}function Dl(r){let e,t=r[11].name+"",l,n;return{c(){e=g("a"),l=j(t),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var o=k(e);l=D(o,t),o.forEach(h),this.h()},h(){u(e,"href",n=r[0]+r[11].path),u(e,"class","svelte-g6c005"),y(e,"selected",r[11].path===r[3])},m(s,o){S(s,e,o),_(e,l)},p(s,o){o&4&&t!==(t=s[11].name+"")&&x(l,t),o&5&&n!==(n=s[0]+s[11].path)&&u(e,"href",n),o&12&&y(e,"selected",s[11].path===s[3])},i:je,o:je,d(s){s&&h(e)}}}function Al(r){let e;return{c(){e=j("/")},l(t){e=D(t,"/")},m(t,l){S(t,e,l)},d(t){t&&h(e)}}}function $e(r){let e,t,l,n;const s=[Dl,jl],o=[];function a(f,d){return f[11].type==="piece"?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),l=De()},l(f){t.l(f),l=De()},m(f,d){o[e].m(f,d),S(f,l,d),n=!0},p(f,d){let i=e;e=a(f),e===i?o[e].p(f,d):(fe(),T(o[i],1,1,()=>{o[i]=null}),ie(),t=o[e],t?t.p(f,d):(t=o[e]=s[e](f),t.c()),A(t,1),t.m(l.parentNode,l))},i(f){n||(A(t),n=!0)},o(f){T(t),n=!1},d(f){f&&h(l),o[e].d(f)}}}function Sl(r){let e,t,l;const n=r[10].default,s=se(n,r,r[9],null),o=s||Il();let a=ae(r[2]),f=[];for(let i=0;i<a.length;i+=1)f[i]=$e(Ze(r,a,i));const d=i=>T(f[i],1,1,()=>{f[i]=null});return{c(){e=g("div"),t=g("a"),o&&o.c();for(let i=0;i<f.length;i+=1)f[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var p=k(e);t=v(p,"A",{href:!0,class:!0});var c=k(t);o&&o.l(c),c.forEach(h);for(let E=0;E<f.length;E+=1)f[E].l(p);p.forEach(h),this.h()},h(){u(t,"href",r[1]),u(t,"class","svelte-g6c005"),y(t,"selected",r[1]===r[3]),u(e,"class","breadcrumb svelte-g6c005")},m(i,p){S(i,e,p),_(e,t),o&&o.m(t,null);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(e,null);l=!0},p(i,[p]){if(s&&s.p&&(!l||p&512)&&ne(s,n,i,i[9],l?oe(n,i[9],p,null):re(i[9]),null),(!l||p&2)&&u(t,"href",i[1]),(!l||p&10)&&y(t,"selected",i[1]===i[3]),p&525){a=ae(i[2]);let c;for(c=0;c<a.length;c+=1){const E=Ze(i,a,c);f[c]?(f[c].p(E,p),A(f[c],1)):(f[c]=$e(E),f[c].c(),A(f[c],1),f[c].m(e,null))}for(fe(),c=a.length;c<f.length;c+=1)d(c);ie()}},i(i){if(!l){A(o,i);for(let p=0;p<a.length;p+=1)A(f[p]);l=!0}},o(i){T(o,i),f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)T(f[p]);l=!1},d(i){i&&h(e),o&&o.d(i),ll(f,i)}}}function Nl(r,e,t){let l,n,s,o,a,f;el(r,tl,w=>t(8,f=w));let{$$slots:d={},$$scope:i}=e,{path:p=void 0}=e,{selected_path:c=void 0}=e,{base_path:E=void 0}=e;return r.$$set=w=>{"path"in w&&t(4,p=w.path),"selected_path"in w&&t(5,c=w.selected_path),"base_path"in w&&t(6,E=w.base_path),"$$scope"in w&&t(9,i=w.$$scope)},r.$$.update=()=>{r.$$.dirty&272&&t(7,l=p??f.url.pathname),r.$$.dirty&160&&t(3,n=c===null?null:c===void 0?l:c),r.$$.dirty&64&&t(0,s=E??il),r.$$.dirty&128&&t(2,o=ql(l)),r.$$.dirty&1&&t(1,a=s||"/")},[s,a,o,n,p,c,E,l,f,i,d]}class xe extends ve{constructor(e){super(),ke(this,e,Nl,Sl,ge,{path:4,selected_path:5,base_path:6})}}function Ol(r){let e;return{c(){e=j("🧶")},l(t){e=D(t,"🧶")},m(t,l){S(t,e,l)},d(t){t&&h(e)}}}function Cl(r){let e;return{c(){e=j("🧶")},l(t){e=D(t,"🧶")},m(t,l){S(t,e,l)},d(t){t&&h(e)}}}function Vl(r){let e,t,l,n,s,o=r[0].repo_name+"",a,f,d,i,p,c,E,w,N,O,Y,B,le;return d=new xe({props:{$$slots:{default:[Ol]},$$scope:{ctx:r}}}),E=new bl({props:{pkg:r[0]}}),O=new ol({props:{pkg:r[0]}}),B=new xe({props:{$$slots:{default:[Cl]},$$scope:{ctx:r}}}),{c(){e=g("main"),t=g("div"),l=g("section"),n=g("header"),s=g("h1"),a=j(o),f=P(),_e(d.$$.fragment),i=P(),p=g("section"),c=g("div"),_e(E.$$.fragment),w=P(),N=g("section"),_e(O.$$.fragment),Y=P(),_e(B.$$.fragment),this.h()},l(q){e=v(q,"MAIN",{class:!0});var C=k(e);t=v(C,"DIV",{class:!0});var X=k(t);l=v(X,"SECTION",{class:!0});var Z=k(l);n=v(Z,"HEADER",{});var H=k(n);s=v(H,"H1",{class:!0});var V=k(s);a=D(V,o),V.forEach(h),H.forEach(h),f=z(Z),he(d.$$.fragment,Z),Z.forEach(h),X.forEach(h),i=z(C),p=v(C,"SECTION",{class:!0});var te=k(p);c=v(te,"DIV",{class:!0});var I=k(c);he(E.$$.fragment,I),I.forEach(h),te.forEach(h),w=z(C),N=v(C,"SECTION",{class:!0});var Q=k(N);he(O.$$.fragment,Q),Y=z(Q),he(B.$$.fragment,Q),Q.forEach(h),C.forEach(h),this.h()},h(){u(s,"class","svelte-1tz8tj3"),u(l,"class","svelte-1tz8tj3"),u(t,"class","prose"),u(c,"class","panel padded_md width_md"),u(p,"class","box width_full spaced svelte-1tz8tj3"),u(N,"class","box svelte-1tz8tj3"),u(e,"class","width_md svelte-1tz8tj3")},m(q,C){S(q,e,C),_(e,t),_(t,l),_(l,n),_(n,s),_(s,a),_(l,f),ue(d,l,null),_(e,i),_(e,p),_(p,c),ue(E,c,null),_(e,w),_(e,N),ue(O,N,null),_(N,Y),ue(B,N,null),le=!0},p(q,[C]){const X={};C&2&&(X.$$scope={dirty:C,ctx:q}),d.$set(X);const Z={};C&2&&(Z.$$scope={dirty:C,ctx:q}),B.$set(Z)},i(q){le||(A(d.$$.fragment,q),A(E.$$.fragment,q),A(O.$$.fragment,q),A(B.$$.fragment,q),le=!0)},o(q){T(d.$$.fragment,q),T(E.$$.fragment,q),T(O.$$.fragment,q),T(B.$$.fragment,q),le=!1},d(q){q&&h(e),pe(d),pe(E),pe(O),pe(B)}}}function Tl(r){return[al(Oe.homepage,Oe,fl)]}class Hl extends ve{constructor(e){super(),ke(this,e,Tl,Vl,ge,{})}}export{Hl as component};
