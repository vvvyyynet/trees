import{n as b,m as a}from"./runtime.DJmhe8UL.js";import{s as p}from"./utils.CxNHRzZ3.js";const i=[];function _(e,n){return{subscribe:d(e,n).subscribe}}function d(e,n=b){let t=null;const o=new Set;function u(r){if(a(e,r)&&(e=r,t)){const c=!i.length;for(const s of o)s[1](),i.push(s,e);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function f(r){u(r(e))}function l(r,c=b){const s=[r,c];return o.add(s),o.size===1&&(t=n(u,f)||b),r(e),()=>{o.delete(s),o.size===0&&t&&(t(),t=null)}}return{set:u,update:f,subscribe:l}}function h(e){let n;return p(e,t=>n=t)(),n}export{h as g,_ as r,d as w};
