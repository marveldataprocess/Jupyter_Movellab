var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,f,u,l,d,s,c,h,p,v,g,m,b,y,w={6374:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(587),t.e(445),t.e(138)]).then((()=>()=>t(8138))),"./extension":()=>Promise.all([t.e(587),t.e(445),t.e(138),t.e(738)]).then((()=>()=>t(3738))),"./style":()=>t.e(776).then((()=>()=>t(3776)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n=t.S.default,a="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>a,init:()=>o})}},P={};function S(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={id:e,loaded:!1,exports:{}};return w[e].call(t.exports,t,t.exports,S),t.loaded=!0,t.exports}S.m=w,S.c=P,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+"."+{29:"15b6bfaf6042f52d3cfc",138:"4973197295f6f5c07f83",445:"707cbf3c7cee5f548587",587:"73a1c70aa9d3a73a5ec7",700:"161efd6fbf1fd4a8c9ff",713:"163eb1ca2d800f485e53",738:"b82566ef49f1f7a4cfcd",755:"1659e9b1b9f40800c8e3",762:"986ea1aa0053e089171f",776:"545400f5043c01fcf3a5",794:"30ba1b11ba12fadded11"}[e]+".js?v="+{29:"15b6bfaf6042f52d3cfc",138:"4973197295f6f5c07f83",445:"707cbf3c7cee5f548587",587:"73a1c70aa9d3a73a5ec7",700:"161efd6fbf1fd4a8c9ff",713:"163eb1ca2d800f485e53",738:"b82566ef49f1f7a4cfcd",755:"1659e9b1b9f40800c8e3",762:"986ea1aa0053e089171f",776:"545400f5043c01fcf3a5",794:"30ba1b11ba12fadded11"}[e],S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="qgrid2:",S.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,f;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var o=S.S[t],i="qgrid2",f=(e,r,t,n)=>{var a=o[e]=o[e]||{},f=a[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(f("@jupyter-widgets/base","4.0.0",(()=>Promise.all([S.e(713),S.e(445),S.e(29)]).then((()=>()=>S(2713))))),f("jquery","3.6.0",(()=>S.e(755).then((()=>()=>S(9755))))),f("moment","2.29.1",(()=>Promise.all([S.e(762),S.e(700)]).then((()=>()=>S(381))))),f("qgrid2","1.1.3",(()=>Promise.all([S.e(587),S.e(445),S.e(138)]).then((()=>()=>S(8138))))),f("underscore","0",(()=>S.e(794).then((()=>()=>S(7794)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;S.g.importScripts&&(e=S.g.location+"");var r=S.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),S.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(f=e[o]))[0]?"-":(n>0?".":"")+(n=2,f);return t}var i=[];for(o=1;o<e.length;o++){var f=e[o];i.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?i.pop()+" "+i.pop():a(f))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,f=1,u=!0;;f++,i++){var l,d,s=f<e.length?(typeof e[f])[0]:"";if(i>=r.length||"o"==(d=(typeof(l=r[i]))[0]))return!u||("u"==s?f>n&&!a:""==s!=a);if("u"==d){if(!u||"u"!=s)return!1}else if(u)if(s==d)if(f<=n){if(l!=e[f])return!1}else{if(a?l>e[f]:l<e[f])return!1;l!=e[f]&&(u=!1)}else if("s"!=s&&"n"!=s){if(a||f<=n)return!1;u=!1,f--}else{if(f<=n||d<s!=a)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,f--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=S.S[e];if(!t||!S.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},f=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+a(t)+")",d=(e,r,t,n)=>{var a=u(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(l(t,a,n)),c(e[t][a])},s=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},c=e=>(e.loaded=1,e.get()),p=(h=e=>function(r,t,n,a){var o=S.I(r);return o&&o.then?o.then(e.bind(e,r,S.S[r],t,n,a)):e(r,S.S[r],t,n,a)})(((e,r,t,n)=>r&&S.o(r,t)?c(f(r,t)):n())),v=h(((e,r,t,n)=>(i(e,t),d(r,0,t,n)))),g=h(((e,r,t,n,a)=>{var o=r&&S.o(r,t)&&s(r,t,n);return o?c(o):a()})),m={},b={445:()=>p("default","jquery",(()=>S.e(755).then((()=>()=>S(9755))))),2914:()=>g("default","jquery",[1,3,2,1],(()=>S.e(755).then((()=>()=>S(9755))))),3883:()=>g("default","@jupyter-widgets/base",[,[1,4],[1,3],[1,2],[1,1,1],1,1,1],(()=>Promise.all([S.e(713),S.e(29)]).then((()=>()=>S(2713))))),4031:()=>g("default","moment",[1,2,24,0],(()=>Promise.all([S.e(762),S.e(700)]).then((()=>()=>S(381))))),5640:()=>g("default","underscore",[1,1,9,2],(()=>S.e(794).then((()=>()=>S(7794))))),1797:()=>v("default","@lumino/coreutils",[1,1,5,3]),3211:()=>v("default","@lumino/messaging",[1,1,4,3]),3309:()=>g("default","underscore",[0,1,7,0],(()=>S.e(794).then((()=>()=>S(7794))))),3706:()=>v("default","@lumino/widgets",[1,1,19,0]),7190:()=>g("default","jquery",[1,3,1,1],(()=>S.e(755).then((()=>()=>S(9755)))))},y={29:[1797,3211,3309,3706,7190],138:[2914,3883,4031,5640],445:[445]},S.f.consumes=(e,r)=>{S.o(y,e)&&y[e].forEach((e=>{if(S.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}},n=r=>{delete m[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var a=b[e]();a.then?r.push(m[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={578:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(29|445)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=S.p+S.u(r),i=new Error;S.l(o,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,f]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)S.o(i,n)&&(S.m[n]=i[n]);f&&f(S)}for(r&&r(t);u<o.length;u++)a=o[u],S.o(e,a)&&e[a]&&e[a][0](),e[o[u]]=0},t=self.webpackChunkqgrid2=self.webpackChunkqgrid2||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var j=S(6374);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).qgrid2=j})();