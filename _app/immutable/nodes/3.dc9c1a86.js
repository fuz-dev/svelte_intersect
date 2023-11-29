import{n as ge,c as se,u as ne,g as re,d as ae,h as el,l as qe,e as Ie}from"../chunks/scheduler.149b6ed4.js";import{S as ve,i as ke,g,s as T,m as j,h as v,j as k,f as p,c as L,C as sl,n as q,k as u,a as S,y as h,d as A,p as ie,t as M,b as ce,o as x,l as de,A as y,G as ll,e as De,r as he,u as ue,v as pe,w as me}from"../chunks/index.e1099bf5.js";import{b as Ae,c as Se,f as Ne,d as oe,e as fe,u as nl,h as rl,L as al,p as ol,a as Oe,s as fl}from"../chunks/package.e0d40ed4.js";import{p as tl}from"../chunks/stores.e4e53c9e.js";import{e as il}from"../chunks/singletons.43b67d75.js";function Ce(r,e,t){var o,i;const l=r.slice();l[24]=e[t],l[29]=t;const n=l[16](l[11],l[24]);l[25]=n;const s=(o=l[3])==null?void 0:o[l[29]];l[26]=s;const a=l[26]&&((i=l[5])==null?void 0:i[l[26]]);return l[27]=a,l}function Ve(r,e,t){const l=r.slice();return l[15]=e[t].name,l[30]=e[t].kind,l}const cl=r=>({homepage_url:r[0]&512}),Te=r=>({homepage_url:r[9]}),_l=r=>({npm_url:r[0]&8192}),Le=r=>({npm_url:r[13]}),hl=r=>({description:r[0]&128}),Me=r=>({description:r[7]}),ul=r=>({repo_name:r[0]&4096}),We=r=>({repo_name:r[12]});function Pe(r){let e=" ",t,l;return{c(){t=j(e),l=j(r[6])},l(n){t=q(n,e),l=q(n,r[6])},m(n,s){S(n,t,s),S(n,l,s)},p(n,s){s[0]&64&&x(l,n[6])},d(n){n&&(p(t),p(l))}}}function pl(r){let e,t,l=r[6]&&Pe(r);return{c(){e=g("div"),t=j(r[12]),l&&l.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var s=k(e);t=q(s,r[12]),l&&l.l(s),s.forEach(p),this.h()},h(){u(e,"class","repo_name svelte-1rnqnfh")},m(n,s){S(n,e,s),h(e,t),l&&l.m(e,null)},p(n,s){s[0]&4096&&x(t,n[12]),n[6]?l?l.p(n,s):(l=Pe(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(n){n&&p(e),l&&l.d()}}}function ze(r){let e;const t=r[23].description,l=se(t,r,r[22],Me),n=l||ml(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),e=!0},p(s,a){l?l.p&&(!e||a[0]&4194432)&&ne(l,t,s,s[22],e?ae(t,s[22],a,hl):re(s[22]),Me):n&&n.p&&(!e||a[0]&128)&&n.p(s,e?a:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){M(n,s),e=!1},d(s){n&&n.d(s)}}}function ml(r){let e,t;return{c(){e=g("div"),t=j(r[7]),this.h()},l(l){e=v(l,"DIV",{class:!0});var n=k(e);t=q(n,r[7]),n.forEach(p),this.h()},h(){u(e,"class","spaced")},m(l,n){S(l,e,n),h(e,t)},p(l,n){n[0]&128&&x(t,l[7])},d(l){l&&p(e)}}}function He(r){let e;const t=r[23].npm_url,l=se(t,r,r[22],Le),n=l||dl(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),e=!0},p(s,a){l?l.p&&(!e||a[0]&4202496)&&ne(l,t,s,s[22],e?ae(t,s[22],a,_l):re(s[22]),Le):n&&n.p&&(!e||a[0]&32768)&&n.p(s,e?a:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){M(n,s),e=!1},d(s){n&&n.d(s)}}}function dl(r){let e,t,l;return{c(){e=g("blockquote"),t=j("npm i -D "),l=j(r[15]),this.h()},l(n){e=v(n,"BLOCKQUOTE",{class:!0});var s=k(e);t=q(s,"npm i -D "),l=q(s,r[15]),s.forEach(p),this.h()},h(){u(e,"class","npm_url spaced svelte-1rnqnfh")},m(n,s){S(n,e,s),h(e,t),h(e,l)},p(n,s){s[0]&32768&&x(l,n[15])},d(n){n&&p(e)}}}function Be(r){let e;const t=r[23].homepage_url,l=se(t,r,r[22],Te),n=l||gl(r);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,a){n&&n.m(s,a),e=!0},p(s,a){l?l.p&&(!e||a[0]&4194816)&&ne(l,t,s,s[22],e?ae(t,s[22],a,cl):re(s[22]),Te):n&&n.p&&(!e||a[0]&16896)&&n.p(s,e?a:[-1,-1])},i(s){e||(A(n,s),e=!0)},o(s){M(n,s),e=!1},d(s){n&&n.d(s)}}}function gl(r){let e,t,l,n,s,a,o,i=Ne(r[9])+"",m;return{c(){e=g("div"),t=j(`homepage:
					`),l=g("a"),n=g("img"),o=T(),m=j(i),this.h()},l(f){e=v(f,"DIV",{class:!0});var c=k(e);t=q(c,`homepage:
					`),l=v(c,"A",{class:!0,href:!0});var _=k(l);n=v(_,"IMG",{src:!0,alt:!0}),o=L(_),m=q(_,i),_.forEach(p),c.forEach(p),this.h()},h(){qe(n.src,s=oe(r[9],"/")+"favicon.png")||u(n,"src",s),u(n,"alt",a="favicon to homepage at "+r[9]),de(n,"width","16px"),de(n,"height","16px"),de(n,"margin-right","var(--spacing_xs)"),u(l,"class","chip row svelte-1rnqnfh"),u(l,"href",r[9]),y(l,"selected",r[9]===r[14].url.href),u(e,"class","row svelte-1rnqnfh")},m(f,c){S(f,e,c),h(e,t),h(e,l),h(l,n),h(l,o),h(l,m)},p(f,c){c[0]&512&&!qe(n.src,s=oe(f[9],"/")+"favicon.png")&&u(n,"src",s),c[0]&512&&a!==(a="favicon to homepage at "+f[9])&&u(n,"alt",a),c[0]&512&&i!==(i=Ne(f[9])+"")&&x(m,i),c[0]&512&&u(l,"href",f[9]),c[0]&16896&&y(l,"selected",f[9]===f[14].url.href)},d(f){f&&p(e)}}}function Re(r){let e,t,l,n;return{c(){e=g("div"),t=j("repo: "),l=g("a"),n=j(r[12]),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=k(e);t=q(a,"repo: "),l=v(a,"A",{class:!0,title:!0,href:!0});var o=k(l);n=q(o,r[12]),o.forEach(p),a.forEach(p),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","repo"),u(l,"href",r[11]),u(e,"class","row svelte-1rnqnfh")},m(s,a){S(s,e,a),h(e,t),h(e,l),h(l,n)},p(s,a){a[0]&4096&&x(n,s[12]),a[0]&2048&&u(l,"href",s[11])},d(s){s&&p(e)}}}function Ue(r){let e,t,l,n;return{c(){e=g("div"),t=j("npm: "),l=g("a"),n=j(r[15]),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=k(e);t=q(a,"npm: "),l=v(a,"A",{class:!0,title:!0,href:!0});var o=k(l);n=q(o,r[15]),o.forEach(p),a.forEach(p),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","npm"),u(l,"href",r[13]),u(e,"class","row svelte-1rnqnfh")},m(s,a){S(s,e,a),h(e,t),h(e,l),h(l,n)},p(s,a){a[0]&32768&&x(n,s[15]),a[0]&8192&&u(l,"href",s[13])},d(s){s&&p(e)}}}function Ge(r){let e,t,l,n;return{c(){e=g("div"),t=j("version: "),l=g("a"),n=j(r[8]),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=k(e);t=q(a,"version: "),l=v(a,"A",{class:!0,title:!0,href:!0});var o=k(l);n=q(o,r[8]),o.forEach(p),a.forEach(p),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","version"),u(l,"href",r[10]),u(e,"class","row svelte-1rnqnfh")},m(s,a){S(s,e,a),h(e,t),h(e,l),h(l,n)},p(s,a){a[0]&256&&x(n,s[8]),a[0]&1024&&u(l,"href",s[10])},d(s){s&&p(e)}}}function Je(r){let e,t,l,n;return{c(){e=g("div"),t=j("license: "),l=g("a"),n=j(r[1]),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=k(e);t=q(a,"license: "),l=v(a,"A",{class:!0,title:!0,href:!0});var o=k(l);n=q(o,r[1]),o.forEach(p),a.forEach(p),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","license"),u(l,"href",r[4]),u(e,"class","row svelte-1rnqnfh")},m(s,a){S(s,e,a),h(e,t),h(e,l),h(l,n)},p(s,a){a[0]&2&&x(n,s[1]),a[0]&16&&u(l,"href",s[4])},d(s){s&&p(e)}}}function Fe(r){let e,t,l,n,s,a,o,i,m;return{c(){e=g("section"),t=j(`data:
				`),l=g("a"),n=j("package.json"),a=T(),o=g("a"),i=j("src.json"),this.h()},l(f){e=v(f,"SECTION",{class:!0});var c=k(e);t=q(c,`data:
				`),l=v(c,"A",{class:!0,title:!0,href:!0});var _=k(l);n=q(_,"package.json"),_.forEach(p),a=L(c),o=v(c,"A",{class:!0,title:!0,href:!0});var E=k(o);i=q(E,"src.json"),E.forEach(p),c.forEach(p),this.h()},h(){u(l,"class","chip svelte-1rnqnfh"),u(l,"title","data"),u(l,"href",s=oe(r[9],"/")+".well-known/package.json"),u(o,"class","chip svelte-1rnqnfh"),u(o,"title","data"),u(o,"href",m=oe(r[9],"/")+".well-known/src.json"),u(e,"class","row spaced svelte-1rnqnfh")},m(f,c){S(f,e,c),h(e,t),h(e,l),h(l,n),h(e,a),h(e,o),h(o,i)},p(f,c){c[0]&512&&s!==(s=oe(f[9],"/")+".well-known/package.json")&&u(l,"href",s),c[0]&512&&m!==(m=oe(f[9],"/")+".well-known/src.json")&&u(o,"href",m)},d(f){f&&p(e)}}}function Ke(r){let e,t,l=[],n=new Map,s=fe(r[2]);const a=o=>o[24];for(let o=0;o<s.length;o+=1){let i=Ce(r,s,o),m=a(i);n.set(m,l[o]=Xe(m,i))}return{c(){e=g("section"),t=g("menu");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=v(o,"SECTION",{class:!0});var i=k(e);t=v(i,"MENU",{});var m=k(t);for(let f=0;f<l.length;f+=1)l[f].l(m);m.forEach(p),i.forEach(p),this.h()},h(){u(e,"class","width_full spaced")},m(o,i){S(o,e,i),h(e,t);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(t,null)},p(o,i){i[0]&67628&&(s=fe(o[2]),l=nl(l,i,a,1,o,s,n,t,rl,Xe,null,Ce))},d(o){o&&p(e);for(let i=0;i<l.length;i+=1)l[i].d()}}}function Qe(r){let e,t=fe(r[27].declarations),l=[];for(let n=0;n<t.length;n+=1)l[n]=Ye(Ve(r,t,n));return{c(){e=g("ul");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=v(n,"UL",{class:!0});var s=k(e);for(let a=0;a<l.length;a+=1)l[a].l(s);s.forEach(p),this.h()},h(){u(e,"class","declarations svelte-1rnqnfh")},m(n,s){S(n,e,s);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(n,s){if(s[0]&44){t=fe(n[27].declarations);let a;for(a=0;a<t.length;a+=1){const o=Ve(n,t,a);l[a]?l[a].p(o,s):(l[a]=Ye(o),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(n){n&&p(e),ll(l,n)}}}function Ye(r){let e,t=r[15]+"",l,n,s;return{c(){e=g("li"),l=j(t),n=T(),this.h()},l(a){e=v(a,"LI",{class:!0});var o=k(e);l=q(o,t),n=L(o),o.forEach(p),this.h()},h(){u(e,"class",s="declaration chip "+r[30]+"_declaration svelte-1rnqnfh")},m(a,o){S(a,e,o),h(e,l),h(e,n)},p(a,o){o[0]&44&&t!==(t=a[15]+"")&&x(l,t),o[0]&44&&s!==(s="declaration chip "+a[30]+"_declaration svelte-1rnqnfh")&&u(e,"class",s)},d(a){a&&p(e)}}}function Xe(r,e){let t,l,n,s=e[24]+"",a,o,i,m,f=e[27]&&Qe(e);return{key:r,first:null,c(){t=g("li"),l=g("div"),n=g("a"),a=j(s),i=T(),f&&f.c(),m=T(),this.h()},l(c){t=v(c,"LI",{class:!0});var _=k(t);l=v(_,"DIV",{});var E=k(l);n=v(E,"A",{class:!0,href:!0});var I=k(n);a=q(I,s),I.forEach(p),E.forEach(p),i=L(_),f&&f.l(_),m=L(_),_.forEach(p),this.h()},h(){u(n,"class","chip svelte-1rnqnfh"),u(n,"href",o=e[25]),u(t,"class","module svelte-1rnqnfh"),y(t,"ts",e[24].endsWith(".js")),y(t,"svelte",e[24].endsWith(".svelte")),y(t,"css",e[24].endsWith(".css")),y(t,"json",e[24].endsWith(".json")),this.first=t},m(c,_){S(c,t,_),h(t,l),h(l,n),h(n,a),h(t,i),f&&f.m(t,null),h(t,m)},p(c,_){e=c,_[0]&4&&s!==(s=e[24]+"")&&x(a,s),_[0]&2052&&o!==(o=e[25])&&u(n,"href",o),e[27]?f?f.p(e,_):(f=Qe(e),f.c(),f.m(t,m)):f&&(f.d(1),f=null),_[0]&4&&y(t,"ts",e[24].endsWith(".js")),_[0]&4&&y(t,"svelte",e[24].endsWith(".svelte")),_[0]&4&&y(t,"css",e[24].endsWith(".css")),_[0]&4&&y(t,"json",e[24].endsWith(".json"))},d(c){c&&p(t),f&&f.d()}}}function vl(r){let e,t,l,n,s,a,o,i,m,f,c,_,E,I,N,O,Y,B="raw data for <code>pkg: Package_Meta</code>",le,w,C,X=JSON.stringify(r[0],null,"	")+"",Z,H;const V=r[23].repo_name,te=se(V,r,r[22],We),D=te||pl(r),Q=r[23].default,$=se(Q,r,r[22],null);let W=r[7]&&ze(r),P=r[13]&&He(r),z=r[9]&&Be(r),R=r[11]&&Re(r),U=r[13]&&Ue(r),G=r[10]&&Ge(r),J=r[4]&&Je(r),F=r[9]&&Fe(r),K=r[2]&&r[11]&&Ke(r);return{c(){e=g("div"),t=g("header"),D&&D.c(),l=T(),$&&$.c(),n=T(),W&&W.c(),s=T(),P&&P.c(),a=T(),o=g("section"),z&&z.c(),i=T(),R&&R.c(),m=T(),U&&U.c(),f=T(),G&&G.c(),c=T(),J&&J.c(),_=T(),F&&F.c(),E=T(),K&&K.c(),I=T(),N=g("section"),O=g("details"),Y=g("summary"),Y.innerHTML=B,le=T(),w=g("pre"),C=g("code"),Z=j(X),this.h()},l(d){e=v(d,"DIV",{class:!0});var b=k(e);t=v(b,"HEADER",{class:!0});var be=k(t);D&&D.l(be),be.forEach(p),l=L(b),$&&$.l(b),n=L(b),W&&W.l(b),s=L(b),P&&P.l(b),a=L(b),o=v(b,"SECTION",{class:!0});var ee=k(o);z&&z.l(ee),i=L(ee),R&&R.l(ee),m=L(ee),U&&U.l(ee),f=L(ee),G&&G.l(ee),c=L(ee),J&&J.l(ee),_=L(ee),F&&F.l(ee),ee.forEach(p),E=L(b),K&&K.l(b),I=L(b),N=v(b,"SECTION",{class:!0});var Ee=k(N);O=v(Ee,"DETAILS",{});var _e=k(O);Y=v(_e,"SUMMARY",{"data-svelte-h":!0}),sl(Y)!=="svelte-k220bw"&&(Y.innerHTML=B),le=L(_e),w=v(_e,"PRE",{class:!0});var we=k(w);C=v(we,"CODE",{});var je=k(C);Z=q(je,X),je.forEach(p),we.forEach(p),_e.forEach(p),Ee.forEach(p),b.forEach(p),this.h()},h(){u(t,"class","spaced"),u(o,"class","properties width_full spaced svelte-1rnqnfh"),u(w,"class","svelte-1rnqnfh"),u(N,"class","width_full spaced"),u(e,"class","package_detail svelte-1rnqnfh")},m(d,b){S(d,e,b),h(e,t),D&&D.m(t,null),h(e,l),$&&$.m(e,null),h(e,n),W&&W.m(e,null),h(e,s),P&&P.m(e,null),h(e,a),h(e,o),z&&z.m(o,null),h(o,i),R&&R.m(o,null),h(o,m),U&&U.m(o,null),h(o,f),G&&G.m(o,null),h(o,c),J&&J.m(o,null),h(o,_),F&&F.m(o,null),h(e,E),K&&K.m(e,null),h(e,I),h(e,N),h(N,O),h(O,Y),h(O,le),h(O,w),h(w,C),h(C,Z),H=!0},p(d,b){te?te.p&&(!H||b[0]&4198400)&&ne(te,V,d,d[22],H?ae(V,d[22],b,ul):re(d[22]),We):D&&D.p&&(!H||b[0]&4160)&&D.p(d,H?b:[-1,-1]),$&&$.p&&(!H||b[0]&4194304)&&ne($,Q,d,d[22],H?ae(Q,d[22],b,null):re(d[22]),null),d[7]?W?(W.p(d,b),b[0]&128&&A(W,1)):(W=ze(d),W.c(),A(W,1),W.m(e,s)):W&&(ie(),M(W,1,1,()=>{W=null}),ce()),d[13]?P?(P.p(d,b),b[0]&8192&&A(P,1)):(P=He(d),P.c(),A(P,1),P.m(e,a)):P&&(ie(),M(P,1,1,()=>{P=null}),ce()),d[9]?z?(z.p(d,b),b[0]&512&&A(z,1)):(z=Be(d),z.c(),A(z,1),z.m(o,i)):z&&(ie(),M(z,1,1,()=>{z=null}),ce()),d[11]?R?R.p(d,b):(R=Re(d),R.c(),R.m(o,m)):R&&(R.d(1),R=null),d[13]?U?U.p(d,b):(U=Ue(d),U.c(),U.m(o,f)):U&&(U.d(1),U=null),d[10]?G?G.p(d,b):(G=Ge(d),G.c(),G.m(o,c)):G&&(G.d(1),G=null),d[4]?J?J.p(d,b):(J=Je(d),J.c(),J.m(o,_)):J&&(J.d(1),J=null),d[9]?F?F.p(d,b):(F=Fe(d),F.c(),F.m(o,null)):F&&(F.d(1),F=null),d[2]&&d[11]?K?K.p(d,b):(K=Ke(d),K.c(),K.m(e,I)):K&&(K.d(1),K=null),(!H||b[0]&1)&&X!==(X=JSON.stringify(d[0],null,"	")+"")&&x(Z,X)},i(d){H||(A(D,d),A($,d),A(W),A(P),A(z),H=!0)},o(d){M(D,d),M($,d),M(W),M(P),M(z),H=!1},d(d){d&&p(e),D&&D.d(d),$&&$.d(d),W&&W.d(),P&&P.d(),z&&z.d(),R&&R.d(),U&&U.d(),G&&G.d(),J&&J.d(),F&&F.d(),K&&K.d()}}}function kl(r,e,t){let l,n,s,a,o,i,m,f,c,_,E,I,N,O,Y,B,le,w,C,X;el(r,tl,D=>t(14,X=D));let{$$slots:Z={},$$scope:H}=e,{pkg:V}=e;const te=(D,Q)=>D+"/blob/main/src/lib/"+(Q.endsWith(".js")?Q.slice(0,-3)+".ts":Q);return r.$$set=D=>{"pkg"in D&&t(0,V=D.pkg),"$$scope"in D&&t(22,H=D.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&1&&t(21,{package_json:l,src_json:n,npm_url:s,repo_name:a,repo_url:o,changelog_url:i,homepage_url:m}=V,l,(t(20,n),t(0,V)),(t(13,s),t(0,V)),(t(12,a),t(0,V)),(t(11,o),t(0,V)),(t(10,i),t(0,V)),(t(9,m),t(0,V))),r.$$.dirty[0]&2097152&&t(15,{name:f,version:c,description:_,icon:E,license:I,repository:N,exports:O}=l,f,(t(8,c),t(21,l),t(0,V)),(t(7,_),t(21,l),t(0,V)),(t(6,E),t(21,l),t(0,V)),(t(1,I),t(21,l),t(0,V)),(t(19,N),t(21,l),t(0,V)),(t(17,O),t(21,l),t(0,V))),r.$$.dirty[0]&1048576&&t(5,{modules:Y}=n,Y),r.$$.dirty[0]&524288&&t(18,B=N?Ae(Se(Se(typeof N=="string"?N:N.url,".git"),"/"),"git+"):null),r.$$.dirty[0]&262146&&t(4,le=I&&B?B+"/blob/main/LICENSE":null),r.$$.dirty[0]&131072&&t(3,w=O&&Object.keys(O)),r.$$.dirty[0]&131072&&t(2,C=O?Object.keys(O).map(D=>{const Q=Ae(D,"./");return Q==="."?"index.js":Q}):null)},[V,I,C,w,le,Y,E,_,c,m,i,o,a,s,X,f,te,O,B,N,n,l,H,Z]}class bl extends ve{constructor(e){super(),ke(this,e,kl,vl,ge,{pkg:0},null,[-1,-1])}}const El=r=>r.split("/").filter(e=>e&&e!=="."&&e!==".."),wl=r=>{const e=[],t=El(r);t.length&&e.push({type:"separator",path:"/"});let l="";for(let n=0;n<t.length;n++){const s=t[n];l+="/"+s,e.push({type:"piece",name:s,path:l}),n!==t.length-1&&e.push({type:"separator",path:l})}return e};function Ze(r,e,t){const l=r.slice();return l[11]=e[t],l}const jl=r=>({}),ye=r=>({});function ql(r){let e;return{c(){e=j("•")},l(t){e=q(t,"•")},m(t,l){S(t,e,l)},d(t){t&&p(e)}}}function Il(r){let e,t;const l=r[10].separator,n=se(l,r,r[9],ye),s=n||Al();return{c(){e=g("span"),s&&s.c(),this.h()},l(a){e=v(a,"SPAN",{class:!0});var o=k(e);s&&s.l(o),o.forEach(p),this.h()},h(){u(e,"class","separator svelte-g6c005")},m(a,o){S(a,e,o),s&&s.m(e,null),t=!0},p(a,o){n&&n.p&&(!t||o&512)&&ne(n,l,a,a[9],t?ae(l,a[9],o,jl):re(a[9]),ye)},i(a){t||(A(s,a),t=!0)},o(a){M(s,a),t=!1},d(a){a&&p(e),s&&s.d(a)}}}function Dl(r){let e,t=r[11].name+"",l,n;return{c(){e=g("a"),l=j(t),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var a=k(e);l=q(a,t),a.forEach(p),this.h()},h(){u(e,"href",n=r[0]+r[11].path),u(e,"class","svelte-g6c005"),y(e,"selected",r[11].path===r[3])},m(s,a){S(s,e,a),h(e,l)},p(s,a){a&4&&t!==(t=s[11].name+"")&&x(l,t),a&5&&n!==(n=s[0]+s[11].path)&&u(e,"href",n),a&12&&y(e,"selected",s[11].path===s[3])},i:Ie,o:Ie,d(s){s&&p(e)}}}function Al(r){let e;return{c(){e=j("/")},l(t){e=q(t,"/")},m(t,l){S(t,e,l)},d(t){t&&p(e)}}}function $e(r){let e,t,l,n;const s=[Dl,Il],a=[];function o(i,m){return i[11].type==="piece"?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),l=De()},l(i){t.l(i),l=De()},m(i,m){a[e].m(i,m),S(i,l,m),n=!0},p(i,m){let f=e;e=o(i),e===f?a[e].p(i,m):(ie(),M(a[f],1,1,()=>{a[f]=null}),ce(),t=a[e],t?t.p(i,m):(t=a[e]=s[e](i),t.c()),A(t,1),t.m(l.parentNode,l))},i(i){n||(A(t),n=!0)},o(i){M(t),n=!1},d(i){i&&p(l),a[e].d(i)}}}function Sl(r){let e,t,l;const n=r[10].default,s=se(n,r,r[9],null),a=s||ql();let o=fe(r[2]),i=[];for(let f=0;f<o.length;f+=1)i[f]=$e(Ze(r,o,f));const m=f=>M(i[f],1,1,()=>{i[f]=null});return{c(){e=g("div"),t=g("a"),a&&a.c();for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=v(f,"DIV",{class:!0});var c=k(e);t=v(c,"A",{href:!0,class:!0});var _=k(t);a&&a.l(_),_.forEach(p);for(let E=0;E<i.length;E+=1)i[E].l(c);c.forEach(p),this.h()},h(){u(t,"href",r[1]),u(t,"class","svelte-g6c005"),y(t,"selected",r[1]===r[3]),u(e,"class","breadcrumb svelte-g6c005")},m(f,c){S(f,e,c),h(e,t),a&&a.m(t,null);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(e,null);l=!0},p(f,[c]){if(s&&s.p&&(!l||c&512)&&ne(s,n,f,f[9],l?ae(n,f[9],c,null):re(f[9]),null),(!l||c&2)&&u(t,"href",f[1]),(!l||c&10)&&y(t,"selected",f[1]===f[3]),c&525){o=fe(f[2]);let _;for(_=0;_<o.length;_+=1){const E=Ze(f,o,_);i[_]?(i[_].p(E,c),A(i[_],1)):(i[_]=$e(E),i[_].c(),A(i[_],1),i[_].m(e,null))}for(ie(),_=o.length;_<i.length;_+=1)m(_);ce()}},i(f){if(!l){A(a,f);for(let c=0;c<o.length;c+=1)A(i[c]);l=!0}},o(f){M(a,f),i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)M(i[c]);l=!1},d(f){f&&p(e),a&&a.d(f),ll(i,f)}}}function Nl(r,e,t){let l,n,s,a,o,i;el(r,tl,I=>t(8,i=I));let{$$slots:m={},$$scope:f}=e,{path:c=void 0}=e,{selected_path:_=void 0}=e,{base_path:E=void 0}=e;return r.$$set=I=>{"path"in I&&t(4,c=I.path),"selected_path"in I&&t(5,_=I.selected_path),"base_path"in I&&t(6,E=I.base_path),"$$scope"in I&&t(9,f=I.$$scope)},r.$$.update=()=>{r.$$.dirty&272&&t(7,l=c??i.url.pathname),r.$$.dirty&160&&t(3,n=_===null?null:_===void 0?l:_),r.$$.dirty&64&&t(0,s=E??il),r.$$.dirty&128&&t(2,a=wl(l)),r.$$.dirty&1&&t(1,o=s||"/")},[s,o,a,n,c,_,E,l,i,f,m]}class xe extends ve{constructor(e){super(),ke(this,e,Nl,Sl,ge,{path:4,selected_path:5,base_path:6})}}function Ol(r){let e;return{c(){e=j("🧶")},l(t){e=q(t,"🧶")},m(t,l){S(t,e,l)},d(t){t&&p(e)}}}function Cl(r){let e;return{c(){e=j("🧶")},l(t){e=q(t,"🧶")},m(t,l){S(t,e,l)},d(t){t&&p(e)}}}function Vl(r){let e,t,l,n,s,a=r[0].repo_name+"",o,i,m,f,c,_,E,I,N,O,Y,B,le;return m=new xe({props:{$$slots:{default:[Ol]},$$scope:{ctx:r}}}),E=new bl({props:{pkg:r[0]}}),O=new al({props:{pkg:r[0]}}),B=new xe({props:{$$slots:{default:[Cl]},$$scope:{ctx:r}}}),{c(){e=g("main"),t=g("div"),l=g("section"),n=g("header"),s=g("h1"),o=j(a),i=T(),he(m.$$.fragment),f=T(),c=g("section"),_=g("div"),he(E.$$.fragment),I=T(),N=g("section"),he(O.$$.fragment),Y=T(),he(B.$$.fragment),this.h()},l(w){e=v(w,"MAIN",{class:!0});var C=k(e);t=v(C,"DIV",{class:!0});var X=k(t);l=v(X,"SECTION",{class:!0});var Z=k(l);n=v(Z,"HEADER",{});var H=k(n);s=v(H,"H1",{class:!0});var V=k(s);o=q(V,a),V.forEach(p),H.forEach(p),i=L(Z),ue(m.$$.fragment,Z),Z.forEach(p),X.forEach(p),f=L(C),c=v(C,"SECTION",{class:!0});var te=k(c);_=v(te,"DIV",{class:!0});var D=k(_);ue(E.$$.fragment,D),D.forEach(p),te.forEach(p),I=L(C),N=v(C,"SECTION",{class:!0});var Q=k(N);ue(O.$$.fragment,Q),Y=L(Q),ue(B.$$.fragment,Q),Q.forEach(p),C.forEach(p),this.h()},h(){u(s,"class","svelte-1tz8tj3"),u(l,"class","svelte-1tz8tj3"),u(t,"class","prose"),u(_,"class","panel padded_md width_md"),u(c,"class","box width_full spaced svelte-1tz8tj3"),u(N,"class","box svelte-1tz8tj3"),u(e,"class","width_md svelte-1tz8tj3")},m(w,C){S(w,e,C),h(e,t),h(t,l),h(l,n),h(n,s),h(s,o),h(l,i),pe(m,l,null),h(e,f),h(e,c),h(c,_),pe(E,_,null),h(e,I),h(e,N),pe(O,N,null),h(N,Y),pe(B,N,null),le=!0},p(w,[C]){const X={};C&2&&(X.$$scope={dirty:C,ctx:w}),m.$set(X);const Z={};C&2&&(Z.$$scope={dirty:C,ctx:w}),B.$set(Z)},i(w){le||(A(m.$$.fragment,w),A(E.$$.fragment,w),A(O.$$.fragment,w),A(B.$$.fragment,w),le=!0)},o(w){M(m.$$.fragment,w),M(E.$$.fragment,w),M(O.$$.fragment,w),M(B.$$.fragment,w),le=!1},d(w){w&&p(e),me(m),me(E),me(O),me(B)}}}function Tl(r){return[ol(Oe.homepage,Oe,fl)]}class Hl extends ve{constructor(e){super(),ke(this,e,Tl,Vl,ge,{})}}export{Hl as component};