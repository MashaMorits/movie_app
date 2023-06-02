(function(){"use strict";var e={4426:function(e,t,n){var r=n(9963),o=n(9876),i=n(6252);const u=(0,i._)("div",{class:"app"},null,-1);function a(e,t,n,r,o,a){const s=(0,i.up)("AppHeader"),c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s),u,(0,i.Wm)(c)],64)}var s=n(3577),c=n(2262),f=n(7069);const l={class:"header"},d={class:"container"},p={class:"header__navigation"};var v={__name:"AppHeader",setup(e){const t=(0,f.t)();return(e,n)=>{const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",l,[(0,i._)("div",d,[(0,i._)("nav",p,[(0,i.Wm)(r,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Главная")])),_:1}),(0,i.Wm)(r,{to:"/favorites"},{default:(0,i.w5)((()=>[(0,i.Uk)("Избранное"),(0,i._)("sup",null,(0,s.zw)((0,c.SU)(t).favoritesList.length),1)])),_:1})])])])}}};const h=v;var m=h,g={name:"App",components:{AppHeader:m}},b=n(3744);const y=(0,b.Z)(g,[["render",a]]);var k=y,_=n(2201);const w=[{path:"/",component:()=>Promise.all([n.e(857),n.e(692)]).then(n.bind(n,1692))},{path:"/allfilms",component:()=>n.e(516).then(n.bind(n,8516))},{path:"/films/:id",component:()=>Promise.all([n.e(857),n.e(817)]).then(n.bind(n,4817))},{path:"/favorites",component:()=>n.e(517).then(n.bind(n,6517))}],O=(0,_.p7)({routes:w,history:(0,_.PO)("/movie_app/")});var j=O;const A=(0,o.WB)(),C=(0,r.ri)(k);C.use(j).use(A).mount("#app")},7069:function(e,t,n){n.d(t,{t:function(){return o}});n(7658);var r=n(9876);const o=(0,r.Q_)("favorites",{state:()=>({favoritesList:[]}),actions:{updateFavorites(e){this.favoritesList.find((t=>t.kinopoiskId===e.kinopoiskId))?this.favoritesList=this.favoritesList.filter((t=>t.kinopoiskId!=e.kinopoiskId)):this.favoritesList.push(e)}}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{516:"78004324",517:"22d19c3c",692:"e50b2535",817:"ab651412",857:"c99d1315"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{517:"369380af",692:"bd7c50e3",817:"a5348c5f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="movie__project:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/movie_app/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,i.parentNode&&i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={517:1,692:1,817:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var f=s(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkmovie_project"]=self["webpackChunkmovie_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4426)}));r=n.O(r)})();
//# sourceMappingURL=app.5ee885ca.js.map