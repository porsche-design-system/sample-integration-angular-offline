"use strict";(self.webpackChunkPorscheDesignSystem_3_13_0=self.webpackChunkPorscheDesignSystem_3_13_0||[]).push([["fieldset"],{6760:(e,s,t)=>{t.d(s,{c:()=>o,h:()=>a});const a={"&([hidden])":{display:"none"}},o={colorScheme:"light dark"}},5302:(e,s,t)=>{t.d(s,{F:()=>a});const a=["small","medium"]},5758:(e,s,t)=>{t.d(s,{a:()=>a,f:()=>o});const a="'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif",o="calc(6px + 2.125ex)"},8828:(e,s,t)=>{t.d(s,{f:()=>a});const a=t(3747).f},4433:(e,s,t)=>{t.d(s,{f:()=>a});const a=t(5388).f},3747:(e,s,t)=>{t.d(s,{f:()=>a});const a="clamp(1.13rem, 0.21vw + 1.08rem, 1.33rem)"},5388:(e,s,t)=>{t.d(s,{f:()=>a});const a="1rem"},6557:(e,s,t)=>{t.d(s,{a:()=>o,f:()=>a});const a="normal",o="normal"},3212:(e,s,t)=>{t.d(s,{f:()=>a});const a=400},609:(e,s,t)=>{t.d(s,{f:()=>a});const a=600},3231:(e,s,t)=>{t.d(s,{g:()=>o});var a=t(7442);const o=(e,s)=>(0,a.S)(e,`[slot="${s}"]`)},2545:(e,s,t)=>{t.d(s,{h:()=>o});var a=t(3231);const o=(e,s)=>!!(0,a.g)(e,s)},1614:(e,s,t)=>{t.d(s,{h:()=>r});var a=t(5241),o=t(8828);const r={font:`${a._}${o.f}${a.a}`}},5241:(e,s,t)=>{t.d(s,{_:()=>n,a:()=>l});var a=t(5758),o=t(609),r=t(6557);const n=`${r.f} ${r.a} ${o.f} `,l=`/${a.f} ${a.a}`},6182:(e,s,t)=>{t.d(s,{h:()=>r});var a=t(5241),o=t(4433);const r={font:`${a._}${o.f}${a.a}`}},190:(e,s,t)=>{t.r(s),t.d(s,{p_fieldset:()=>m});var a=t(7442),o=t(6357),r=t(6339),n=t(5302),l=t(6760),i=t(8551),c=t(6182),h=t(1614);t(2545),t(3231),t(3880),t(2086);const f=(e,s,t,r)=>(0,a.g)({"@global":{":host":{display:"block",...(0,a.d)({...l.c,...l.h})},fieldset:{margin:0,padding:0,border:"none"},...t&&{legend:{margin:`0 0 ${i.s}`,padding:0,color:(0,a.C)(r).primaryColor,...(0,a.B)(r,{color:(0,a.C)("dark").primaryColor}),..."small"===s?c.h:h.h}}},...(0,o.b)(),...(0,a.m)((0,o.g)(r,e),{message:{marginTop:i.s}})}),d={label:a.A.string,labelSize:a.A.oneOf(n.F),required:a.A.boolean,state:a.A.oneOf(o.F),message:a.A.string,theme:a.A.oneOf(r.T)},m=class{constructor(e){(0,a.r)(this,e),this.label="",this.labelSize="medium",this.required=!1,this.state="none",this.message="",this.theme="light"}render(){(0,a.v)(this,d),(0,a.e)(this.host,f,this.state,this.labelSize,(0,o.h)(this.host,this.label),this.theme);const e=(0,o.c)(this.host,this.message,this.state);return(0,a.f)("fieldset",{key:"cfae8818fc349eb0ae167ab8b2a59575be31419b","aria-describedby":e?o.m:null},(0,o.h)(this.host,this.label)&&(0,a.f)("legend",null,this.label||(0,a.f)("slot",{name:"label"}),this.required&&(0,a.f)(o.R,null)),(0,a.f)("slot",{key:"67f18f2080c03f1c4f924ad96335d4fb5b954f2b"}),(0,a.f)(o.S,{key:"f7efb6fb6e68a0fcc6e047a0faaffac7978f1a54",state:this.state,message:this.message,theme:this.theme,host:this.host}))}get host(){return(0,a.i)(this)}}},6357:(e,s,t)=>{t.d(s,{F:()=>l,R:()=>u,S:()=>b,a:()=>f,b:()=>m,c:()=>h,g:()=>d,h:()=>c,m:()=>g});var a=t(7442),o=t(2545),r=t(3036),n=t(3880);const l=["none","error","success"],i=e=>"error"===e?"alert":"success"===e?"status":null,c=(e,s)=>!!s||(0,o.h)(e,"label"),h=(e,s,t)=>(s||(0,o.h)(e,"message"))&&["success","error"].includes(t),f=(e,s)=>{const t=(0,a.C)(e);return{formStateColor:t[`${s}Color`],formStateHoverColor:t[`${s}ColorDarken`]}},d=(e,s,t)=>({message:{display:"flex",gap:r.s,...n.t,color:f(e,s).formStateColor,...(0,a.B)(e,{color:f("dark",s).formStateColor}),transition:(0,a.y)("color"),...t}}),m=()=>({required:{userSelect:"none"}}),g="message",b=({state:e,message:s,theme:t,host:o})=>{const r=(0,a.k)(o),n="error"===e;return h(o,s,e)&&(0,a.f)("span",{id:g,class:"message",role:i(e)},(0,a.f)(r.pIcon,{name:n?"exclamation":"check",color:n?"notification-error":"notification-success",theme:t,"aria-hidden":"true"}),s||(0,a.f)("slot",{name:"message"}))},u=()=>(0,a.f)("span",{class:"required"}," *")},8551:(e,s,t)=>{t.d(s,{s:()=>a});const a="16px"},3036:(e,s,t)=>{t.d(s,{s:()=>a});const a="4px"},2086:(e,s,t)=>{t.d(s,{_:()=>l,a:()=>i,f:()=>n});var a=t(5758),o=t(3212),r=t(6557);const n={overflowWrap:"break-word",hyphens:"auto"},l=`${r.f} ${r.a} ${o.f} `,i=`/${a.f} ${a.a}`},3880:(e,s,t)=>{t.d(s,{t:()=>r});var a=t(2086),o=t(5388);const r={font:`${a._}${o.f}${a.a}`,...a.f}},6339:(e,s,t)=>{t.d(s,{T:()=>a});const a=["light","dark","auto"]}}]);