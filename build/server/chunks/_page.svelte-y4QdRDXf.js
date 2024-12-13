import { _ as copy_payload, $ as assign_payload, x as pop, a0 as ensure_array_like, V as attr, X as stringify, Y as escape_html, a1 as spread_props, v as push, a2 as rest_props, a3 as fallback, a4 as spread_attributes, a5 as element, a6 as slot, a7 as bind_props, a8 as sanitize_props } from './index-B3eOkRnr.js';
import { marked } from 'marked';
import { g as get, r as readable, w as writable } from './index2-BArvcXjE.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
/**
 * @license lucide-svelte v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class)
    },
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]--><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Chevron_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-down" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
const stores = {};
function localStorageStore(key, initialValue, options) {
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
function _page($$payload, $$props) {
  push();
  let markdownFiles = [];
  let selectedTags = [];
  let textQuery = "";
  const tagCat1Colors = [
    "#5ddb83",
    "#d4955f",
    "#ff7455",
    "#798cee",
    "#9fece2",
    "#d3e16e"
  ];
  function getTagColor(tag) {
    return tagCat1Colors[allTagsCat.indexOf(tag)];
  }
  function getPrioColor(tag) {
    if (tag === "1") return "#ff7455";
    else if (tag === "2") return "#9fece2";
    else return "white";
  }
  let allTagsCat = Array.from(new Set(markdownFiles.flatMap((file) => file.tagsCat)));
  Array.from(new Set(markdownFiles.flatMap((file) => file.tagsPrio)));
  let filteredFiles = (() => {
    let files;
    if (selectedTags.length === 0) {
      files = markdownFiles;
    } else {
      files = markdownFiles.filter((file) => {
        {
          return selectedTags.every((tag) => file.tagsCat.includes(tag) || file.tagsPrio.includes(tag));
        }
      });
    }
    if (textQuery.trim()) {
      const query = textQuery.trim().toLowerCase();
      files = files.filter((file) => file.headings.some((heading) => heading.content.toLowerCase().includes(query)));
    }
    return files;
  })();
  function highlightText(content, query) {
    return content;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array_3 = ensure_array_like(filteredFiles);
    $$payload2.out += `<div${attr("class", `grid h-full w-full ${stringify("grid-rows-[minmax(10%,20px)_auto]")}`)}><div class="mb-[50px] flex min-h-[200px] flex-col gap-4 px-2 md:px-5"><button type="button" class="md:text-md btn w-[150px] rounded-full border-2 border-black bg-white py-1 text-xs text-black">`;
    {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<span>`;
      Chevron_down($$payload2, {});
      $$payload2.out += `<!----></span> <span>Show Filters</span>`;
    }
    $$payload2.out += `<!--]--></button> `;
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div class="overflow-scroll px-2 pb-[200px] md:px-5"><table class="svelte-16n6pyh"><thead><tr><th class="min-w-[200px] svelte-16n6pyh">Feature</th>`;
    if (filteredFiles.length > 0) {
      $$payload2.out += "<!--[-->";
      const each_array_2 = ensure_array_like(filteredFiles[0].headings);
      $$payload2.out += `<!--[-->`;
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let heading = each_array_2[$$index_2];
        $$payload2.out += `<th class="svelte-16n6pyh">${escape_html(heading.heading)}</th>`;
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></tr></thead><tbody><!--[-->`;
    for (let $$index_6 = 0, $$length = each_array_3.length; $$index_6 < $$length; $$index_6++) {
      let file = each_array_3[$$index_6];
      const each_array_4 = ensure_array_like(file.tagsCat);
      const each_array_5 = ensure_array_like(file.tagsPrio);
      const each_array_6 = ensure_array_like(file.headings);
      $$payload2.out += `<tr><td class="w-[200px] svelte-16n6pyh"><div class="mb-4 text-lg md:text-xl">${escape_html(file.title)}</div> <div class="mt-2 flex flex-col gap-2 pl-4"><div class="flex flex-wrap gap-2"><!--[-->`;
      for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
        let tag = each_array_4[$$index_3];
        $$payload2.out += `<span class="rounded-full px-3 py-1 text-xs uppercase"${attr("style", `background-color: ${getTagColor(tag)}`)}>${escape_html(tag)}</span>`;
      }
      $$payload2.out += `<!--]--></div> <div class="border-1 flex flex-wrap gap-2"><!--[-->`;
      for (let $$index_4 = 0, $$length2 = each_array_5.length; $$index_4 < $$length2; $$index_4++) {
        let tag = each_array_5[$$index_4];
        $$payload2.out += `<span class="border-2 px-2 py-1 text-xs"${attr("style", `border-color: ${getPrioColor(tag)}`)}>${escape_html(tag)}</span>`;
      }
      $$payload2.out += `<!--]--></div></div></td><!--[-->`;
      for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
        let heading = each_array_6[$$index_5];
        $$payload2.out += `<td class="w-[200px] svelte-16n6pyh"><p class="prose text-sm">${html(marked(highlightText(heading.content)))}</p></td>`;
      }
      $$payload2.out += `<!--]--></tr>`;
    }
    $$payload2.out += `<!--]--></tbody></table></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-y4QdRDXf.js.map
