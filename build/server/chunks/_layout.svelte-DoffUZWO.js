import { T as store_get, V as attr, W as unsubscribe_stores, x as pop, X as stringify, v as push } from './index-ZebA8TUZ.js';
import { p as page } from './stores-DgLMIO3D.js';
import './exports-CTha0ECg.js';

function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  let isRoot = store_get($$store_subs ??= {}, "$page", page).url.pathname === "/";
  $$payload.out += `<div${attr("class", `absolute h-screen w-screen overflow-hidden text-sm md:text-xl ${stringify(isRoot ? "bg-[#212822] text-white" : "bg-white text-black")}`)}><div class="absolute top-0 flex h-[50px] w-screen flex-row gap-2 px-4 py-2 md:gap-8"><button type="button" class="mr-[10px] hover:text-green-300 md:mr-[40px]">Visualising Urban Tree Ecosystems</button> <button class="hover:text-green-300" type="button">Requirements</button> <button class="hover:text-green-300" type="button">Info</button></div> <div class="absolute top-[50px] h-[calc(100%-50px)] w-screen overflow-y-auto py-2">`;
  children($$payload);
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DoffUZWO.js.map
