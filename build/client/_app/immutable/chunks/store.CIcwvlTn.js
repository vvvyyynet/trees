import{P as E,Q as l,R as _,S as L,L as P,T as S,U as x,V as B,W as O,n as y,X as D,i as M}from"./runtime.DJmhe8UL.js";import{s as N}from"./utils.CxNHRzZ3.js";function A(r,e){if(e){const t=document.body;r.autofocus=!0,E(()=>{document.activeElement===t&&r.focus()})}}let w=!1;function Q(){w||(w=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var e;if(!r.defaultPrevented)for(const t of r.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function T(r){var e=L,t=P;l(null),_(null);try{return r()}finally{l(e),_(t)}}function C(r,e,t,n=t){r.addEventListener(e,()=>T(t));const s=r.__on_r;s?r.__on_r=()=>{s(),n(!0)}:r.__on_r=()=>n(!0),Q()}const R=new Set,U=new Set;function V(r,e,t,n){function s(a){if(n.capture||X.call(e,a),!a.cancelBubble)return T(()=>t.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?E(()=>{e.addEventListener(r,s,n)}):e.addEventListener(r,s,n),s}function F(r,e,t,n,s){var a={capture:n,passive:s},i=V(r,e,t,a);(e===document.body||e===window||e===document)&&S(()=>{e.removeEventListener(r,i,a)})}function G(r){for(var e=0;e<r.length;e++)R.add(r[e]);for(var t of U)t(r)}function X(r){var h;var e=this,t=e.ownerDocument,n=r.type,s=((h=r.composedPath)==null?void 0:h.call(r))||[],a=s[0]||r.target,i=0,b=r.__root;if(b){var d=s.indexOf(b);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var p=s.indexOf(e);if(p===-1)return;d<=p&&(i=d)}if(a=s[i]||r.target,a!==e){x(r,"currentTarget",{configurable:!0,get(){return a||t}});var W=L,k=P;l(null),_(null);try{for(var u,g=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var o=a["__"+n];if(o!==void 0&&!a.disabled)if(B(o)){var[m,...q]=o;m.apply(a,[r,...q])}else o.call(a,r)}catch(c){u?g.push(c):u=c}if(r.cancelBubble||v===e||v===null)break;a=v}if(u){for(let c of g)queueMicrotask(()=>{throw c});throw u}}finally{r.__root=e,delete r.currentTarget,l(W),_(k)}}}let f=!1;function H(r,e,t){const n=t[e]??(t[e]={store:null,source:O(void 0),unsubscribe:y});if(n.store!==r)if(n.unsubscribe(),n.store=r??null,r==null)n.source.v=void 0,n.unsubscribe=y;else{var s=!0;n.unsubscribe=N(r,a=>{s?n.source.v=a:D(n.source,a)}),s=!1}return M(n.source)}function I(){const r={};return S(()=>{for(var e in r)r[e].unsubscribe()}),r}function J(r){var e=f;try{return f=!1,[r(),f]}finally{f=e}}export{H as a,R as b,J as c,G as d,Q as e,V as f,A as g,X as h,F as i,C as l,U as r,I as s};
