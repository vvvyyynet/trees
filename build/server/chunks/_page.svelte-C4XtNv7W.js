import { Y as ensure_array_like, x as pop, W as stringify, v as push } from './index-DT4dZ9zQ.js';
import { marked } from 'marked';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
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
      files = markdownFiles.filter((file) => selectedTags.every((tag) => file.tagsCat.includes(tag) || file.tagsPrio.includes(tag)));
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
  const each_array_3 = ensure_array_like(filteredFiles);
  $$payload.out += `<div${attr("class", `grid h-full w-full ${stringify("grid-rows-[minmax(10%,20px)_auto]")}`)}><div class="mb-[50px] flex min-h-[200px] flex-col gap-4 px-2 md:px-5"><button type="button"${attr("class", `md:text-md w-[150px] rounded-full border-2 border-black text-center ${stringify("bg-white text-black")} px-3 py-1 text-xs`)}>${escape_html("show filters")}</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="overflow-scroll px-2 pb-[200px] md:px-5"><table class="svelte-16n6pyh"><thead><tr><th class="min-w-[200px] svelte-16n6pyh">Feature</th>`;
  if (filteredFiles.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array_2 = ensure_array_like(filteredFiles[0].headings);
    $$payload.out += `<!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let heading = each_array_2[$$index_2];
      $$payload.out += `<th class="svelte-16n6pyh">${escape_html(heading.heading)}</th>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></tr></thead><tbody><!--[-->`;
  for (let $$index_6 = 0, $$length = each_array_3.length; $$index_6 < $$length; $$index_6++) {
    let file = each_array_3[$$index_6];
    const each_array_4 = ensure_array_like(file.tagsCat);
    const each_array_5 = ensure_array_like(file.tagsPrio);
    const each_array_6 = ensure_array_like(file.headings);
    $$payload.out += `<tr><td class="w-[200px] svelte-16n6pyh"><div class="mb-4 text-lg md:text-xl">${escape_html(file.title)}</div> <div class="mt-2 flex flex-col gap-2 pl-4"><div class="flex flex-wrap gap-2"><!--[-->`;
    for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
      let tag = each_array_4[$$index_3];
      $$payload.out += `<span class="rounded-full px-3 py-1 text-xs uppercase"${attr("style", `background-color: ${getTagColor(tag)}`)}>${escape_html(tag)}</span>`;
    }
    $$payload.out += `<!--]--></div> <div class="border-1 flex flex-wrap gap-2"><!--[-->`;
    for (let $$index_4 = 0, $$length2 = each_array_5.length; $$index_4 < $$length2; $$index_4++) {
      let tag = each_array_5[$$index_4];
      $$payload.out += `<span class="border-2 px-2 py-1 text-xs"${attr("style", `border-color: ${getPrioColor(tag)}`)}>${escape_html(tag)}</span>`;
    }
    $$payload.out += `<!--]--></div></div></td><!--[-->`;
    for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
      let heading = each_array_6[$$index_5];
      $$payload.out += `<td class="w-[200px] svelte-16n6pyh"><p class="prose text-sm">${html(marked(highlightText(heading.content)))}</p></td>`;
    }
    $$payload.out += `<!--]--></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C4XtNv7W.js.map
