import{d as S,s as h,a as v,i as k,b as O,c as T}from"./runtime.DFjr8Tfh.js";const q=new Set,x=new Set;function D(a){for(var r=0;r<a.length;r++)q.add(a[r]);for(var c of x)c(a)}function M(a){var p;var r=this,c=r.ownerDocument,g=a.type,e=((p=a.composedPath)==null?void 0:p.call(a))||[],t=e[0]||a.target,s=0,u=a.__root;if(u){var n=e.indexOf(u);if(n!==-1&&(r===document||r===window)){a.__root=r;return}var _=e.indexOf(r);if(_===-1)return;n<=_&&(s=n)}if(t=e[s]||a.target,t!==r){S(a,"currentTarget",{configurable:!0,get(){return t||c}});var y=O,b=T;h(null),v(null);try{for(var o,d=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var i=t["__"+g];if(i!==void 0&&!t.disabled)if(k(i)){var[m,...w]=i;m.apply(t,[a,...w])}else i.call(t,a)}catch(f){o?d.push(f):o=f}if(a.cancelBubble||l===r||l===null)break;t=l}if(o){for(let f of d)queueMicrotask(()=>{throw f});throw o}}finally{a.__root=r,delete a.currentTarget,h(y),v(b)}}}export{q as a,D as d,M as h,x as r};