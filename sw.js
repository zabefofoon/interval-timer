if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-0f623dd1.js",revision:null},{url:"assets/index-84a34640.css",revision:null},{url:"index.html",revision:"5a443573b18d65a33c697bcf7c29a636"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"service-worker.js",revision:"18d3223c6662dafdf104034bfcb86478"},{url:"manifest.webmanifest",revision:"107405366d8380e01d7e043f4e6a07ac"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));