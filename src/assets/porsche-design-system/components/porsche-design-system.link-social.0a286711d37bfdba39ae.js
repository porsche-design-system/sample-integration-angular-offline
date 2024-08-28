"use strict";(self.webpackChunkPorscheDesignSystem_3_13_0=self.webpackChunkPorscheDesignSystem_3_13_0||[]).push([["link-social"],{5086:(o,r,e)=>{e.d(r,{b:()=>t});const t="4px"},4135:(o,r,e)=>{e.d(r,{h:()=>a,w:()=>i});var t=e(7442),n=e(8421);const a=(o,r)=>"none"!==o||!!r,i=(o,r,e)=>{!a(r,e)&&(0,n.i)(o,"p-text")&&(0,t.c)(`${(0,t.j)(o)} should not be used inside p-text. Please use a <button> or <a> tag.`)}},6760:(o,r,e)=>{e.d(r,{c:()=>n,h:()=>t});const t={"&([hidden])":{display:"none"}},n={colorScheme:"light dark"}},5758:(o,r,e)=>{e.d(r,{a:()=>t,f:()=>n});const t="'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif",n="calc(6px + 2.125ex)"},5388:(o,r,e)=>{e.d(r,{f:()=>t});const t="1rem"},6557:(o,r,e)=>{e.d(r,{a:()=>n,f:()=>t});const t="normal",n="normal"},3212:(o,r,e)=>{e.d(r,{f:()=>t});const t=400},6372:(o,r,e)=>{e.d(r,{g:()=>a});var t=e(9171),n=e(3929);function a(o,r){return(0,n.t)(r).split(",").map((r=>(0,t.g)(o,r))).flat()}},9171:(o,r,e)=>{function t(o,r){return o?Array.from(o.querySelectorAll(r)):[]}e.d(r,{g:()=>t})},9494:(o,r,e)=>{e.d(r,{g:()=>a});var t=e(7442),n=e(6372);function a(o,r){const e=(0,n.g)(o,r);return 1!==e.length&&(0,t.t)(`${(0,t.j)(o)} has to contain a single direct child of: ${r}`),e[0]}},74:(o,r,e)=>{e.d(r,{h:()=>t});const t=o=>({"@media(hover:hover)":o})},8421:(o,r,e)=>{e.d(r,{i:()=>n});var t=e(7442);const n=(o,r)=>{const{parentElement:e}=o;return e&&(0,t.j)(e)===r}},3888:(o,r,e)=>{e.d(r,{g:()=>p});var t=e(7442),n=e(4135),a=e(6760),i=e(74),s=e(5086),l=e(3880),c=e(8602),d=e(5758);const{primaryColor:h}=(0,t.C)("dark"),{primaryColor:b}=(0,t.C)("light"),g=(o,r)=>{const{primaryColor:e,contrastHighColor:n,contrastMediumColor:a,hoverColor:i}=(0,t.C)(r),{canvasColor:s}=(0,t.Q)();return{primary:{textColor:"dark"===r?b:h,borderColor:e,borderColorHover:n,backgroundColor:e,backgroundColorHover:n},secondary:{textColor:e,borderColor:e,borderColorHover:a,backgroundColor:t.P?s:"transparent",backgroundColorHover:i}}["tertiary"===o?"secondary":o]},p=(o,r,e,h,b,p,u)=>{const f="primary"===e,{textColor:C,borderColor:m,borderColorHover:v,backgroundColor:k,backgroundColorHover:x}=g(e,u),{textColor:y,borderColor:$,borderColorHover:A,backgroundColor:w,backgroundColorHover:S}=g(e,"dark"),{focusColor:H}=(0,t.C)(u),_=(0,n.h)(o,r)||h;return{"@global":{":host":{display:"inline-block",...(0,t.d)({verticalAlign:"top",outline:0,...a.c,...a.h})}},root:{display:"flex",alignItems:"flex-start",justifyContent:"center",width:"100%",minWidth:"54px",minHeight:"54px",boxSizing:"border-box",textAlign:"start",WebkitAppearance:"none",appearance:"none",textDecoration:"none",border:`2px solid ${m}`,borderRadius:s.b,transform:"translate3d(0,0,0)",backgroundColor:k,color:C,...l.t,transition:`${(0,t.y)("background-color")}, ${(0,t.y)("border-color")}, ${(0,t.y)("color")}`,...(0,t.a)(h,(o=>({padding:o?"13px":"13px 26px",gap:o?0:c.s}))),...!p&&(0,t.J)(u),...!b&&(0,i.h)({"&:hover":{backgroundColor:x,borderColor:t.P?H:v,...!f&&t.a1,...(0,t.B)(u,{backgroundColor:S,borderColor:A})}}),...(0,t.B)(u,{borderColor:$,backgroundColor:w,color:y})},label:(0,t.a)(h,t.O),..._&&{icon:{width:d.f,height:d.f,...(0,t.a)(h,(o=>({marginInlineStart:o?0:"-8px"})))}}}}},1892:(o,r,e)=>{e.d(r,{g:()=>i});var t=e(7442),n=e(3888),a=e(5086);const i=(o,r,e,i,s,l)=>{const{linkColor:c}=(0,t.Q)(),d="primary"===e;return(0,t.g)((0,t.m)((0,n.g)(o,r,e,i,!1,s,l),{label:{clip:(0,t.K)("unset")},icon:{...d&&!t.P&&{filter:"invert(1)"}}},s&&{...t.P&&{root:{borderColor:c}},"@global":(0,t.d)({"::slotted":{"&(a)":{...t.ad,textDecoration:"none",font:"inherit",color:"inherit"},"&(a)::before":{content:'""',position:"fixed",inset:"-2px",borderRadius:a.b},...(0,t.J)(l,{slotted:"a",pseudo:!0})}})}))}},4360:(o,r,e)=>{e.r(r),e.d(r,{p_link_social:()=>c});var t=e(7442),n=e(6678),a=e(6339),i=e(8157),s=e(1892);e(9494),e(3888),e(4135),e(8421),e(6760),e(3880),e(2086);const l={icon:t.A.string,iconSource:t.A.string,href:t.A.string,theme:t.A.oneOf(a.T),target:t.A.string,rel:t.A.string,hideLabel:t.A.breakpoint("boolean")},c=class{constructor(o){(0,t.r)(this,o),this.icon=void 0,this.iconSource=void 0,this.href=void 0,this.theme="light",this.target="_self",this.rel=void 0,this.hideLabel=!1}componentWillLoad(){(0,i.t)(this.host,this.href),(0,n.w)(this.host,"Use p-link component with corresponding social icon instead."),(0,t.ae)()}componentShouldUpdate(o,r){return(0,t.h)(o,r)}render(){(0,t.v)(this,l),(0,t.e)(this.host,s.g,this.icon,this.iconSource,"primary",this.hideLabel,!this.href,this.theme);const o=void 0===this.href?"span":"a",r=(0,t.k)(this.host);return(0,t.f)(o,{key:"cc1e5909e3bb7d462b7beb26086e105630b0699c",class:"root",..."a"===o&&{href:this.href,target:this.target,rel:this.rel}},(0,t.f)(r.pIcon,{key:"a2a0b22a8ed0aa1dda8e27b179b045c44e78d58d",class:"icon",size:"inherit",name:this.icon,source:this.iconSource,theme:this.theme,"aria-hidden":"true"}),(0,t.f)("span",{key:"2a0d451c8e4a8f45991a8d6f4a48169148dbb744",class:"label"},(0,t.f)("slot",{key:"82fcd03213eb2ed5a61c0779c81cf3c8a5094bb5"})))}static get delegatesFocus(){return!0}get host(){return(0,t.i)(this)}}},8602:(o,r,e)=>{e.d(r,{s:()=>t});const t="8px"},2086:(o,r,e)=>{e.d(r,{_:()=>s,a:()=>l,f:()=>i});var t=e(5758),n=e(3212),a=e(6557);const i={overflowWrap:"break-word",hyphens:"auto"},s=`${a.f} ${a.a} ${n.f} `,l=`/${t.f} ${t.a}`},3880:(o,r,e)=>{e.d(r,{t:()=>a});var t=e(2086),n=e(5388);const a={font:`${t._}${n.f}${t.a}`,...t.f}},6339:(o,r,e)=>{e.d(r,{T:()=>t});const t=["light","dark","auto"]},8157:(o,r,e)=>{e.d(r,{t:()=>a});var t=e(7442),n=e(9494);const a=(o,r)=>{let e=r&&o.children.length>0;if(!e||!r)try{r||(0,n.g)(o,"a")}catch{e=!0}e&&(0,t.t)(`usage of ${(0,t.j)(o)} is not valid. Please provide a href property or a single and direct <a> child element.`)}},3929:(o,r,e)=>{e.d(r,{t:()=>t});const t=o=>o.split(",").map((o=>":scope>"+o)).join()},6678:(o,r,e)=>{e.d(r,{w:()=>n});var t=e(7442);const n=(o,r)=>{(0,t.c)(`component ${(0,t.j)(o)} is deprecated and will be removed with next major release.`,r)}}}]);