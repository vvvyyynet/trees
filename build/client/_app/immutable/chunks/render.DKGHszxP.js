import{B as m,C as D,H as I,D as L,E as p,F as h,G as T,I as O,J as u,K as b,L as H,M as V,N as C,O as M,P as Y,Q as P,R as $,p as j,S as E,c as k,o as B,g as F}from"./runtime.DiIO-n5k.js";import{a as G,r as N,h as v}from"./events.CVmn9GpM.js";import{b as J}from"./disclose-version.C5a5Vo_S.js";const K=["touchstart","touchmove"];function Q(t){return K.includes(t)}function X(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function W(t,e){return S(t,e)}function Z(t,e){m(),e.intro=e.intro??!1;const n=e.target,_=E,l=u;try{for(var r=D(n);r&&(r.nodeType!==8||r.data!==I);)r=L(r);if(!r)throw p;h(!0),T(r),O();const d=S(t,{...e,anchor:r});if(u===null||u.nodeType!==8||u.data!==b)throw H(),p;return h(!1),d}catch(d){if(d===p)return e.recover===!1&&V(),m(),C(n),h(!1),W(t,e);throw d}finally{h(_),T(l)}}const i=new Map;function S(t,{target:e,anchor:n,props:_={},events:l,context:r,intro:d=!0}){m();var y=new Set,g=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!y.has(s)){y.add(s);var f=Q(s);e.addEventListener(s,v,{passive:f});var R=i.get(s);R===void 0?(document.addEventListener(s,v,{passive:f}),i.set(s,1)):i.set(s,R+1)}}};g(M(G)),N.add(g);var c=void 0,A=Y(()=>{var o=n??e.appendChild(P());return $(()=>{if(r){j({});var a=F;a.c=r}l&&(_.$$events=l),E&&J(o,null),c=t(o,_)||{},E&&(k.nodes_end=u),r&&B()}),()=>{var f;for(var a of y){e.removeEventListener(a,v);var s=i.get(a);--s===0?(document.removeEventListener(a,v),i.delete(a)):i.set(a,s)}N.delete(g),w.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(c,A),c}let w=new WeakMap;function x(t){const e=w.get(t);e&&e()}export{Z as h,W as m,X as s,x as u};