import{c as f,d as _,r as p,o as m,a,b as l,e,n as h,p as y,f as b,g as u,F as x,h as $}from"./vendor.9bd31718.js";const S=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}};S();const k=!1,N=[],B=f({plugins:N,modules:{},strict:k});var v=(t,n)=>{for(const[c,i]of n)t[c]=i;return t};const d=t=>(y("data-v-29d6e074"),t=t(),b(),t),I={class:"burger-menu"},L=d(()=>e("span",{class:"sr-only"},"toggle menu",-1)),w=[L],A=d(()=>e("ul",null,[e("li",null,[e("a",{href:"#the-book"},"Book")]),e("li",null,[e("a",{href:"#the-exhibition"},"the exhibition")]),e("li",null,[e("a",{href:"#shop-coming"},"shop coming soon")])],-1)),C=[A],E=d(()=>e("li",null,"JA",-1)),O=d(()=>e("li",null,"EN",-1)),F=[E,O],H=_({setup(t){const n=p("light-theme");function c(r){localStorage.setItem("user-theme",r),n.value=r,document.body.className=r}m(()=>{c("light-theme")});const i=p(!1),o=()=>{i.value=!i.value},s=p("ja");return(r,te)=>(a(),l("div",I,[e("button",{onClick:o,class:h({opened:i.value})},w,2),e("nav",{class:h(["navigation",{visible:i.value}])},C,2),e("ul",{class:h(["languages",{language:s.value}])},F,2)]))}});var J=v(H,[["__scopeId","data-v-29d6e074"]]);const M={class:"hero-logo-section"},j=e("div",{class:"cover-layer"},[e("h1",null,[e("span",{class:"sr-only"},"Jewerly Hunting \u2014 Book \u2014")])],-1),P=[j],T=_({setup(t){return(n,c)=>(a(),l("div",M,P))}});const V={id:"the-book"},q=e("h2",null,"Jewelry Hunting -Book-",-1),z=[q],K=_({setup(t){return(n,c)=>(a(),l("div",V,z))}});const D={id:"the-exhibition"},G=e("h2",null,"the exhibition",-1),Q=[G],R=_({setup(t){return(n,c)=>(a(),l("div",D,Q))}});const U={id:"shop-coming-soon"},W=e("h2",null,"shop coming soon",-1),X=[W],Y=_({setup(t){return(n,c)=>(a(),l("div",U,X))}});const Z={class:"wrapper"},ee=_({setup(t){return(n,c)=>(a(),l(x,null,[u(J),e("section",Z,[u(T),u(K),u(R),u(Y)])],64))}});var oe=v(ee,[["__scopeId","data-v-c1e00c34"]]);const g=$(oe);g.use(B);g.mount("#app");
