import{r as e,c as o,h as a,a as l}from"./p-3336fe3b.js";import{F as t}from"./p-1e979cc8.js";import"./p-2b6bbee5.js";import"./p-1693d6aa.js";const r='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-label{position:relative;display:flex;width:100%}.gov-form-label__label{display:inline-block;color:var(--gov-form-label-color, #686868);cursor:pointer;box-sizing:border-box}.gov-form-label[legend=""] .gov-form-label__label,.gov-form-label[legend=true i] .gov-form-label__label,.gov-form-label[legend="1"] .gov-form-label__label{font-weight:var(--gov-text-l-font-weight);font-size:var(--gov-text-l-font-size);line-height:var(--gov-text-l-line-height);letter-spacing:var(--gov-text-l-letter-spacing);margin-bottom:1rem;padding:0;color:var(--gov-form-legend-color, #3b3b3b)}';const s=r;const i=class{constructor(a){e(this,a);this.govClick=o(this,"gov-click",7);this.identifier=undefined;this.size="m";this.required=false;this.legend=false}render(){const e=this.legend?"legend":"label";return a(l,{key:"6716ea7c0a48f1ae82c47b9272f7f1f21f8b0650",class:t.root,size:this.size},a(e,{key:"a1c90fe0c6dd9b0b467cbaa6d1674fda75e44269",class:t.label,htmlFor:this.identifier,onClick:()=>this.govClick.emit()},a("slot",{key:"f8f27e199398efbe8d684ef88c3265d72bc5e610"}),this.required?a("span",{class:"gov-color--error-500"}," *"):null))}};i.style=s;export{i as gov_form_label};
//# sourceMappingURL=p-f83153e2.entry.js.map