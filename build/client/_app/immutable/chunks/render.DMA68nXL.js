import{q as g,v as R,H as S,w as k,x as m,y as p,z as A,A as D,B as l,C as V,D as O,E as C,F as H,G as M,I as j,J as Y,K as z,p as B,h as E,L as G,a as W,d as $}from"./runtime.Dd0jTHCb.js";import{b as q,r as I,h}from"./store.DyrHtE07.js";import{b as F}from"./disclose-version.M3PKwsxC.js";function ee(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const J=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function te(e){return J.includes(e)}const K={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function oe(e){return e=e.toLowerCase(),K[e]??e}const P=["touchstart","touchmove"];function U(e){return P.includes(e)}let w=!0;function re(e){w=e}function ne(e,t){var s=t==null?"":typeof t=="object"?t+"":t;s!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=s,e.nodeValue=s==null?"":s+"")}function x(e,t){return L(e,t)}function se(e,t){g(),t.intro=t.intro??!1;const s=t.target,c=E,f=l;try{for(var o=R(s);o&&(o.nodeType!==8||o.data!==S);)o=k(o);if(!o)throw m;p(!0),A(o),D();const i=L(e,{...t,anchor:o});if(l===null||l.nodeType!==8||l.data!==V)throw O(),m;return p(!1),i}catch(i){if(i===m)return t.recover===!1&&C(),g(),H(s),p(!1),x(e,t);throw i}finally{p(c),A(f)}}const u=new Map;function L(e,{target:t,anchor:s,props:c={},events:f,context:o,intro:i=!0}){g();var v=new Set,y=a=>{for(var r=0;r<a.length;r++){var n=a[r];if(!v.has(n)){v.add(n);var d=U(n);t.addEventListener(n,h,{passive:d});var b=u.get(n);b===void 0?(document.addEventListener(n,h,{passive:d}),u.set(n,1)):u.set(n,b+1)}}};y(M(q)),I.add(y);var _=void 0,N=j(()=>{var a=s??t.appendChild(Y());return z(()=>{if(o){B({});var r=$;r.c=o}f&&(c.$$events=f),E&&F(a,null),w=i,_=e(a,c)||{},w=!0,E&&(G.nodes_end=l),o&&W()}),()=>{var d;for(var r of v){t.removeEventListener(r,h);var n=u.get(r);--n===0?(document.removeEventListener(r,h),u.delete(r)):u.set(r,n)}I.delete(y),T.delete(_),a!==s&&((d=a.parentNode)==null||d.removeChild(a))}});return T.set(_,N),_}let T=new WeakMap;function ae(e){const t=T.get(e);t&&t()}export{re as a,te as b,w as c,se as h,ee as i,x as m,oe as n,ne as s,ae as u};