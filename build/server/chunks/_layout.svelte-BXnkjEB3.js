import { T as store_get, V as unsubscribe_stores, x as pop, W as stringify, v as push } from './index-DT4dZ9zQ.js';
import { p as page } from './stores-DVT0gVAS.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import './exports-CTha0ECg.js';
import './escaping-CqgfEcN3.js';

function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  let isRoot = store_get($$store_subs ??= {}, "$page", page).url.pathname === "/";
  $$payload.out += `<div${attr("class", `absolute h-screen w-screen overflow-hidden ${stringify(isRoot ? "bg-[#212822] text-white" : "bg-white text-black")}`)}><div class="absolute top-0 flex h-[50px] w-screen flex-row gap-4 px-4 py-2"><button type="button" class="mr-[40px] text-xl hover:text-green-300">Visualising Urban Tree Ecosystems</button> <button class="text-xl hover:text-green-300" type="button">Requirements</button> <button class="text-xl hover:text-green-300" type="button">Info</button></div> <div class="absolute top-[50px] h-[calc(100%-50px)] w-screen overflow-y-auto py-2">`;
  children($$payload);
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BXnkjEB3.js.map
