if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./sw.js",["./workbox-6f2872fd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.ico",revision:"a23a7f793a00c61f25ce0276448b5c1f"},{url:"icons/apple-icon-180.png",revision:"ddc95f9713183a754993dd59d6f1a2d0"},{url:"icons/manifest-icon-192.png",revision:"bd2957e8879c150330ee0f8a4138f1a7"},{url:"icons/manifest-icon-512.png",revision:"e2c0c085a3c4009d6179e3c0a8fceeb6"},{url:"manifest.json",revision:"ebde3bb956c612168aa231195cf0ae1d"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:30})]}),"GET")}));
