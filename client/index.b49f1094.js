import{S as s,i as e,s as t,e as a,t as r,a as l,c as n,b as i,g as o,d as c,f as h,h as f,j as m,k as d,m as p,n as u,T as v,W as g}from"./index.d1564c2f.js";function V(s){let e;return{c(){this.h()},l(s){this.h()},h(){e=new g(s[1],null)},m(s,t){e.m(s,t)},p(s,t){2&t&&e.p(s[1])},d(s){s&&e.d()}}}function E(s){let e,t,l,h,p;return{c(){e=a("div"),t=a("article"),l=a("div"),h=a("p"),p=r("Can't get the latest version of Skript. Please refresh the page."),this.h()},l(s){e=n(s,"DIV",{class:!0});var a=i(e);t=n(a,"ARTICLE",{class:!0});var r=i(t);l=n(r,"DIV",{class:!0});var f=i(l);h=n(f,"P",{});var m=i(h);p=o(m,"Can't get the latest version of Skript. Please refresh the page."),m.forEach(c),f.forEach(c),r.forEach(c),a.forEach(c),this.h()},h(){f(l,"class","message-body"),f(t,"class","message is-danger"),f(e,"class","small-section")},m(s,a){m(s,e,a),d(e,t),d(t,l),d(l,h),d(h,p)},p:u,d(s){s&&c(e)}}}function k(s){let e,t,v,g,k,H,S,x;function D(s,e){return"error"===s[0]?E:V}let I=D(s),w=I(s);return{c(){e=a("div"),t=a("div"),v=a("div"),g=a("h1"),k=r("Latest version of Skript ("),H=r(s[0]),S=r(")"),x=l(),w.c(),this.h()},l(a){e=n(a,"DIV",{class:!0});var r=i(e);t=n(r,"DIV",{class:!0});var l=i(t);v=n(l,"DIV",{class:!0});var f=i(v);g=n(f,"H1",{class:!0});var m=i(g);k=o(m,"Latest version of Skript ("),H=o(m,s[0]),S=o(m,")"),m.forEach(c),x=h(f),w.l(f),f.forEach(c),l.forEach(c),r.forEach(c),this.h()},h(){f(g,"class","title"),f(v,"class","container section"),f(t,"class","is-white"),f(e,"class","section top")},m(s,a){m(s,e,a),d(e,t),d(t,v),d(v,g),d(g,k),d(g,H),d(g,S),d(v,x),w.m(v,null)},p(s,[e]){1&e&&p(H,s[0]),I===(I=D(s))&&w?w.p(s,e):(w.d(1),(w=I(s))&&(w.c(),w.m(v,null)))},i:u,o:u,d(s){s&&c(e),w.d()}}}async function H(s,e){return this.fetch("https://github.com/SkriptLang/Skript/releases/latest/",{headers:{"Access-Control-Allow-Origin":"*"}}).then(s=>Promise.all([s.text(),s.url.split("/")])).then(([s,e])=>({latestVersion:e[e.length-1],releaseHtml:s})).catch(s=>({latestVersion:"error",releaseHtml:""}))}function S(s,e,t){let a,{latestVersion:r}=e,{releaseHtml:l}=e;return v(async()=>{if("error"===r)return document.location.reload(!0);t(2,l=(new DOMParser).parseFromString(l,"text/html")),t(1,a=l.getElementsByClassName("markdown-body")[0].innerHTML)}),s.$set=(s=>{"latestVersion"in s&&t(0,r=s.latestVersion),"releaseHtml"in s&&t(2,l=s.releaseHtml)}),[r,a,l]}export default class extends s{constructor(s){super(),e(this,s,S,k,t,{latestVersion:0,releaseHtml:2})}}export{H as preload};
