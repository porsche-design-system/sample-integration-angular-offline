"use strict";(self.webpackChunkPorscheDesignSystem_3_13_0=self.webpackChunkPorscheDesignSystem_3_13_0||[]).push([["radio-button-wrapper"],{1722:(o,e,t)=>{t.d(e,{a:()=>h,g:()=>p});var r=t(7442),s=t(4537),a=t(74),n=t(6357),i=t(5758),l=t(5388);const d=new Map,c=(()=>{try{return"function"==typeof(new CSSStyleSheet).replaceSync}catch{return!1}})(),h=o=>{if(c){const e=o.getRootNode(),t=(o=>{const e=o.tagName;return d.has(e)||d.set(e,new Map),d.get(e)})(o);if(!t.has(e)){t.set(e,!0);const r=new CSSStyleSheet;r.replaceSync(`${o.tagName.toLowerCase()}>input:checked{transform:rotateZ(0)}`),e.adoptedStyleSheets?.push(r)}}},p=(o,e,t,d)=>{const{primaryColor:c,contrastMediumColor:h,contrastHighColor:p,disabledColor:g}=(0,r.C)(d),{primaryColor:f,contrastMediumColor:u,contrastHighColor:m,disabledColor:b}=(0,r.C)("dark"),{formStateColor:C,formStateHoverColor:k}=(0,n.a)(d,o),{formStateColor:y,formStateHoverColor:v}=(0,n.a)("dark",o),{canvasTextColor:S}=(0,r.Q)(),w=(0,s.i)(e,t),L=w?g:C||h,$=w?b:y||u,x=k||c,A=v||f,E=r.P?S:w?g:C||c,H=r.P?S:w?b:y||f,D=k||p,N=v||m;return{"::slotted":{"&(input)":{width:i.f,height:i.f,font:`${l.f} ${i.a}`,display:"block",margin:0,padding:0,WebkitAppearance:"none",appearance:"none",boxSizing:"content-box",background:`transparent 0% 0% / ${i.f}`,transition:`${(0,r.y)("background-color")}, ${(0,r.y)("border-color")}`,border:`${r.N} solid ${L}`,outline:0,...w?{pointerEvents:"none"}:{cursor:"pointer"},...(0,r.B)(d,{borderColor:$})},"&(input:checked)":{borderColor:E,backgroundColor:E,...(0,r.B)(d,{borderColor:H,backgroundColor:H})},...!w&&!r.P&&(0,a.h)({"&(input:hover),label:hover~.wrapper &(input)":{borderColor:x,...(0,r.B)(d,{borderColor:A})},"&(input:checked:hover),label:hover~.wrapper &(input:checked)":{borderColor:D,backgroundColor:D,...(0,r.B)(d,{borderColor:N,backgroundColor:N})},"label:hover~.wrapper &(input)":(T={transition:"unset"},{"@media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm)":T})}),...!e&&(0,r.J)(d,{slotted:"input"})}};var T}},6760:(o,e,t)=>{t.d(e,{c:()=>s,h:()=>r});const r={"&([hidden])":{display:"none"}},s={colorScheme:"light dark"}},8692:(o,e,t)=>{t.d(e,{e:()=>s,g:()=>r});const r=o=>`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${o}</svg>')`,s=o=>o.replace("#","%23")},5758:(o,e,t)=>{t.d(e,{a:()=>r,f:()=>s});const r="'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif",s="calc(6px + 2.125ex)"},5388:(o,e,t)=>{t.d(e,{f:()=>r});const r="1rem"},2526:(o,e,t)=>{t.d(e,{f:()=>r});const r="clamp(0.81rem, 0.23vw + 0.77rem, 0.88rem)"},6557:(o,e,t)=>{t.d(e,{a:()=>s,f:()=>r});const r="normal",s="normal"},3212:(o,e,t)=>{t.d(e,{f:()=>r});const r=400},6611:(o,e,t)=>{function r(o,e){return o?.closest(e)}t.d(e,{g:()=>r})},6372:(o,e,t)=>{t.d(e,{g:()=>a});var r=t(9171),s=t(3929);function a(o,e){return(0,s.t)(e).split(",").map((e=>(0,r.g)(o,e))).flat()}},9171:(o,e,t)=>{function r(o,e){return o?Array.from(o.querySelectorAll(e)):[]}t.d(e,{g:()=>r})},3231:(o,e,t)=>{t.d(e,{g:()=>s});var r=t(7442);const s=(o,e)=>(0,r.S)(o,`[slot="${e}"]`)},9494:(o,e,t)=>{t.d(e,{g:()=>a});var r=t(7442),s=t(6372);function a(o,e){const t=(0,s.g)(o,e);return 1!==t.length&&(0,r.t)(`${(0,r.j)(o)} has to contain a single direct child of: ${e}`),t[0]}},8263:(o,e,t)=>{t.d(e,{h:()=>s});t(7442);var r=t(2545);const s=(o,e)=>!!e||(0,r.h)(o,"description")},2545:(o,e,t)=>{t.d(e,{h:()=>s});var r=t(3231);const s=(o,e)=>!!(0,r.g)(o,e)},74:(o,e,t)=>{t.d(e,{h:()=>r});const r=o=>({"@media(hover:hover)":o})},4908:(o,e,t)=>{t.d(e,{C:()=>i,I:()=>l,L:()=>n,g:()=>s,l:()=>a});var r=t(7442);const s=()=>({loading:(0,r.O)()}),a="loading",n=({loading:o,initialLoading:e})=>(0,r.f)("span",{id:a,class:"loading",role:"status"},o?"Loading":e?"Loading finished":"");class i{constructor(o){this.host=o,this.controllers=new Set;const{connectedCallback:e,disconnectedCallback:t,componentWillLoad:r,componentDidLoad:s,componentWillUpdate:a,componentDidUpdate:n}=o;o.connectedCallback=()=>{this.controllers.forEach((o=>o.hostConnected?.())),e?.apply(o)},o.disconnectedCallback=()=>{this.controllers.forEach((o=>o.hostDisconnected?.())),t?.apply(o)},o.componentWillLoad=()=>{this.controllers.forEach((o=>o.hostWillLoad?.())),r?.apply(o)},o.componentDidLoad=()=>{this.controllers.forEach((o=>o.hostDidLoad?.())),s?.apply(o)},o.componentWillUpdate=()=>{this.controllers.forEach((o=>o.hostWillUpdate?.())),a?.apply(o)},o.componentDidUpdate=()=>{this.controllers.forEach((o=>o.hostDidUpdate?.())),n?.apply(o)}}addController(o){this.controllers.add(o)}removeController(o){this.controllers.delete(o)}requestUpdate(){(0,r.o)(this.host)}}class l{constructor(o){this.controllerHost=o,this.initialLoading=!1,this.controllerHost.addController(this)}hostConnected(){this.initialLoading=this.controllerHost.host.loading}hostWillLoad(){this.initialLoading=this.controllerHost.host.loading}hostWillUpdate(){this.controllerHost.host.loading&&(this.initialLoading=!0)}}},4537:(o,e,t)=>{t.d(e,{i:()=>r});const r=(o,e)=>o||e},8421:(o,e,t)=>{t.d(e,{i:()=>s});var r=t(7442);const s=(o,e)=>{const{parentElement:t}=o;return t&&(0,r.j)(t)===e}},8371:(o,e,t)=>{t.d(e,{L:()=>b,d:()=>m,g:()=>f,i:()=>g,l:()=>u});var r=t(7442),s=t(6357),a=t(3880),n=t(3036),i=t(2526),l=t(6611),d=t(8263),c=t(8421);const h=o=>!!o?.required,p=o=>((0,c.i)(o,"p-fieldset")||(0,c.i)(o,"p-fieldset-wrapper"))&&h(o.parentElement),g=(o,e)=>h(e)&&!p(o),f=(o,e,t,l,d)=>{const{primaryColor:c,disabledColor:h,contrastHighColor:p}=(0,r.C)(t),{primaryColor:g,disabledColor:f,contrastHighColor:u}=(0,r.C)("dark");return{label:{...a.t,cursor:o?"not-allowed":"pointer",justifySelf:"flex-start",color:o?h:c,transition:(0,r.y)("color"),...(0,r.a)(e,(o=>(0,r.O)(o,d))),...(0,r.B)(t,{color:o?f:g}),"&:empty":{display:"none"},"&+&":{cursor:"unset",marginTop:`-${n.s}`,fontSize:i.f,...!o&&{color:p,...(0,r.B)(t,{color:u})}},...l},...(0,s.b)()}},u="label",m="description",b=({host:o,label:e,description:t,htmlFor:a,isRequired:n,isLoading:i,isDisabled:l,formElement:c})=>(0,r.f)(r.R,null,(0,r.f)("label",{class:"label",id:u,"aria-disabled":i||l?"true":null,...a?{htmlFor:a}:{onClick:e=>C(e,c,i,l,o)}},(0,s.h)(o,e)&&(0,r.f)(r.R,null,e||(0,r.f)("slot",{name:"label"}),(n&&!p(o)||c&&g(o,c))&&(0,r.f)(s.R,null))),(0,d.h)(o,t)&&(0,r.f)("span",{class:"label",id:m,"aria-disabled":i||l?"true":null},t||(0,r.f)("slot",{name:"description"}))),C=(o,e,t,r,s)=>{if(!t&&!r&&null===(0,l.g)(o.target,"a"))if("INPUT"!==e.tagName||"checkbox"!==e.type&&"radio"!==e.type)if("SELECT"===e.tagName){const o=s.shadowRoot.children[0].querySelector(".dropdown")?.shadowRoot.children[0];o?(o.click(),o.focus()):e.focus()}else"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName||e.focus();else e.click()}},6870:(o,e,t)=>{t.r(e),t.d(e,{p_radio_button_wrapper:()=>y});var r=t(7442),s=t(6357),a=t(6339),n=t(9494),i=t(1722),l=t(6760),d=t(4537),c=t(8692),h=t(8371),p=t(4908),g=t(3036),f=t(5758),u=t(5388),m=t(8602);t(2545),t(3231),t(3880),t(2086),t(8263),t(8421);const b=o=>(0,c.g)(`<circle fill="${o}" cx="12" cy="12" r="6"/>`),C=(o,e,t,a,n)=>{const C=r.P?(0,r.Q)().canvasColor:(0,c.e)((0,r.a2)(n).primaryColor),k=r.P?(0,r.Q)().canvasColor:(0,c.e)((0,r.a2)("dark").primaryColor);return(0,r.g)({"@global":{":host":{display:"block",...(0,r.d)({...l.c,...l.h})},...(0,r.d)((0,r.m)((0,i.g)(e,t,a,n),{"::slotted":{"&(input)":{gridArea:"1/1",borderRadius:"50%"},...!a&&{"&(input:checked)":{backgroundImage:b(C),...(0,r.B)(n,{backgroundImage:b(k)})}}}}))},root:{display:"grid",gridTemplateColumns:"auto minmax(0, 1fr)",rowGap:g.s},wrapper:{display:"grid",gridArea:"1/1",alignSelf:"flex-start",...(0,d.i)(t,a)&&{cursor:"not-allowed"}},...a&&{spinner:{position:"relative",gridArea:"1/1",placeSelf:"center",width:f.f,height:f.f,font:`${u.f} ${f.a}`,pointerEvents:"none"}},...(0,h.g)(t||a,o,n,{gridArea:"1/2"},{paddingTop:"2px",paddingInlineStart:m.s}),...(0,s.g)(n,e,{gridColumn:"1/3"}),...(0,p.g)()})},k={label:r.A.string,state:r.A.oneOf(s.F),message:r.A.string,hideLabel:r.A.breakpoint("boolean"),loading:r.A.boolean,theme:r.A.oneOf(a.T)},y=class{constructor(o){(0,r.r)(this,o),this.controllerHost=new p.C(this),this.loadingCtrl=new p.I(this.controllerHost),this.observeAttributes=()=>{(0,r.Y)(this.input,["disabled","required"],(()=>(0,r.o)(this.host)))},this.label="",this.state="none",this.message="",this.hideLabel=!1,this.loading=!1,this.theme="light"}connectedCallback(){(0,i.a)(this.host),this.observeAttributes()}componentWillLoad(){this.input=(0,n.g)(this.host,"input[type=radio]"),this.observeAttributes()}componentShouldUpdate(o,e){return(0,r.h)(o,e)}componentDidRender(){(0,r.W)(this.input,{label:this.label,message:this.message,state:this.state})}disconnectedCallback(){(0,r.X)(this.input)}render(){(0,r.v)(this,k);const{disabled:o}=this.input,e=this.loading&&!this.input.checked;(0,r.e)(this.host,C,this.hideLabel,this.state,o,e,this.theme);const t=(0,r.k)(this.host);return(0,r.f)("div",{key:"6364771df5926e3477bd0dbfe30c03c42286176a",class:"root"},(0,r.f)(h.L,{key:"526ee5db535be80dd3638ad47e6ecf1e3acb6505",host:this.host,label:this.label,isLoading:e,isDisabled:o,formElement:this.input}),(0,r.f)("div",{key:"9c58aee0290448ceecb279555d3595e2b67760a7",class:"wrapper"},(0,r.f)("slot",{key:"1557e28335d7316817207f5d31f9f5e743d90da0"}),e&&(0,r.f)(t.pSpinner,{class:"spinner",size:"inherit",theme:this.theme,"aria-hidden":"true"})),(0,r.f)(s.S,{key:"31ddea2422848cf4171d49d69ee6c6087cb49c75",state:this.state,message:this.message,theme:this.theme,host:this.host}),(0,r.f)(p.L,{key:"fc7549fdb9dfdd1bf1f571e82805f5090bf57f26",loading:e,initialLoading:this.loadingCtrl.initialLoading}))}get host(){return(0,r.i)(this)}}},6357:(o,e,t)=>{t.d(e,{F:()=>i,R:()=>m,S:()=>u,a:()=>h,b:()=>g,c:()=>c,g:()=>p,h:()=>d,m:()=>f});var r=t(7442),s=t(2545),a=t(3036),n=t(3880);const i=["none","error","success"],l=o=>"error"===o?"alert":"success"===o?"status":null,d=(o,e)=>!!e||(0,s.h)(o,"label"),c=(o,e,t)=>(e||(0,s.h)(o,"message"))&&["success","error"].includes(t),h=(o,e)=>{const t=(0,r.C)(o);return{formStateColor:t[`${e}Color`],formStateHoverColor:t[`${e}ColorDarken`]}},p=(o,e,t)=>({message:{display:"flex",gap:a.s,...n.t,color:h(o,e).formStateColor,...(0,r.B)(o,{color:h("dark",e).formStateColor}),transition:(0,r.y)("color"),...t}}),g=()=>({required:{userSelect:"none"}}),f="message",u=({state:o,message:e,theme:t,host:s})=>{const a=(0,r.k)(s),n="error"===o;return c(s,e,o)&&(0,r.f)("span",{id:f,class:"message",role:l(o)},(0,r.f)(a.pIcon,{name:n?"exclamation":"check",color:n?"notification-error":"notification-success",theme:t,"aria-hidden":"true"}),e||(0,r.f)("slot",{name:"message"}))},m=()=>(0,r.f)("span",{class:"required"}," *")},8602:(o,e,t)=>{t.d(e,{s:()=>r});const r="8px"},3036:(o,e,t)=>{t.d(e,{s:()=>r});const r="4px"},2086:(o,e,t)=>{t.d(e,{_:()=>i,a:()=>l,f:()=>n});var r=t(5758),s=t(3212),a=t(6557);const n={overflowWrap:"break-word",hyphens:"auto"},i=`${a.f} ${a.a} ${s.f} `,l=`/${r.f} ${r.a}`},3880:(o,e,t)=>{t.d(e,{t:()=>a});var r=t(2086),s=t(5388);const a={font:`${r._}${s.f}${r.a}`,...r.f}},6339:(o,e,t)=>{t.d(e,{T:()=>r});const r=["light","dark","auto"]},3929:(o,e,t)=>{t.d(e,{t:()=>r});const r=o=>o.split(",").map((o=>":scope>"+o)).join()}}]);