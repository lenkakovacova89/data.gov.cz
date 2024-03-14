import{d as t,r as i,h as s,a as n,g as e}from"./p-3336fe3b.js";import{i as o,a}from"./p-32d89c78.js";import{g as r}from"./p-8a8117a5.js";import"./p-2b6bbee5.js";var c;(function(t){t["BASIC"]="basic";t["COMPLEX"]="complex";t["COLORED"]="colored"})(c||(c={}));const h={root:"gov-icon",holder:"gov-icon__holder"};const l="0.0.70";const p=()=>l;const d={};const f={};const u=t=>t.startsWith("http://")||t.startsWith("https://");const g=(i,s,n)=>{if(u(i)){return`${i}/${n}/${s}.svg?v=${p()}`}return t(`${i}/${n}/${s}.svg`)+`?v=${p()}`};async function m({name:t,type:i}){const s=i+"-"+t;if(d[s]){return d[s]}if(!f[s]){f[s]=fetch(g(o(),t,i)).then((t=>{if(t.status===200){return t.text()}else{throw new Error("Gov Icon doesn't exists")}}))}const n=await f[s];d[s]=n;return n}const y=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-icon{display:inline-flex}.gov-icon__holder{display:inline-flex;width:100%;height:100%}.gov-icon__holder+.gov-icon__holder{display:none !important}.gov-icon svg{display:inline-flex;width:100%;height:100%;max-width:100%;max-height:100%}";const v=y;const w=class{constructor(t){i(this,t);this.name=null;this.type="basic";this.iconData=undefined;this.visible=false;this.error=false;this.h=r(this.host)}async loadIconPathData(){const{name:t,visible:i,type:s}=this;if(!t||!i){return}try{this.iconData=await m({name:t,type:s})}catch(t){this.error=true}}connectedCallback(){if(a()){this.visible=true;this.loadIconPathData().finally()}else{this.waitUntilVisible((async()=>{this.visible=true;await this.loadIconPathData()}))}}disconnectedCallback(){if(this.intersectionObserver){this.intersectionObserver.disconnect();this.intersectionObserver=null}}async componentWillLoad(){await this.loadIconPathData()}waitUntilVisible(t){if(typeof window==="undefined"||!window.IntersectionObserver){t();return}this.intersectionObserver=new IntersectionObserver((i=>{i.forEach((i=>{if(i.isIntersecting){if(this.intersectionObserver){this.intersectionObserver.disconnect();this.intersectionObserver=null}t()}}))}),{rootMargin:"50px"});this.intersectionObserver.observe(this.host)}render(){if(this.error){return null}return s(n,{class:this.h.classes(h.root)},s("span",{class:h.holder,innerHTML:this.iconData}))}static get assetsDirs(){return["assets"]}get host(){return e(this)}static get watchers(){return{name:["loadIconPathData"]}}};w.style=v;export{w as gov_icon};
//# sourceMappingURL=p-20b9a2e7.entry.js.map