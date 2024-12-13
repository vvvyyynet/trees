import { _ as copy_payload, $ as assign_payload, x as pop, a0 as ensure_array_like, V as attr, X as stringify, Y as escape_html, a1 as spread_props, a2 as rest_props, v as push, a3 as fallback, a4 as spread_attributes, a5 as bind_props, a6 as sanitize_slots, a7 as slot, a8 as element, a9 as sanitize_props, T as store_get, W as unsubscribe_stores, aa as noop } from './index-uLhNszc4.js';
import { marked } from 'marked';
import { g as get, r as readable, w as writable } from './index2-CJkzdQ0j.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function createEventDispatcher() {
  return noop;
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
function Chevron_up($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m18 15-6-6-6 6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-up" },
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
const prefersReducedMotionStore = readable(prefersReducedMotion(), (set) => {
});
function cubic_out(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function split_css_unit(value) {
  const split = typeof value === "string" && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return split ? [parseFloat(split[1]), split[2] || "px"] : [
    /** @type {number} */
    value,
    "px"
  ];
}
function fly(node, { delay = 0, duration = 400, easing = cubic_out, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [x_value, x_unit] = split_css_unit(x);
  const [y_value, y_unit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x_value}${x_unit}, ${(1 - t) * y_value}${y_unit});
			opacity: ${target_opacity - od * u}`
  };
}
function scale(node, { delay = 0, duration = 400, easing = cubic_out, start = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}
function InputChip($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "addChip",
    "removeChip",
    "input",
    "name",
    "value",
    "whitelist",
    "max",
    "minlength",
    "maxlength",
    "allowUpperCase",
    "allowDuplicates",
    "validation",
    "duration",
    "required",
    "chips",
    "invalid",
    "padding",
    "rounded",
    "regionChipWrapper",
    "regionChipList",
    "regionInput",
    "label",
    "transitions",
    "listTransitionIn",
    "listTransitionInParams",
    "listTransitionOut",
    "listTransitionOutParams",
    "chipTransitionIn",
    "chipTransitionInParams",
    "chipTransitionOut",
    "chipTransitionOutParams"
  ]);
  push();
  var $$store_subs;
  let classesInvalid, classesBase, classesChipWrapper, classesChipList, classesInput;
  const dispatch = createEventDispatcher();
  let input = fallback($$props["input"], "");
  let name = $$props["name"];
  let value = fallback($$props["value"], () => [], true);
  let whitelist = fallback($$props["whitelist"], () => [], true);
  let max = fallback($$props["max"], () => -1, true);
  let minlength = fallback($$props["minlength"], () => -1, true);
  let maxlength = fallback($$props["maxlength"], () => -1, true);
  let allowUpperCase = fallback($$props["allowUpperCase"], false);
  let allowDuplicates = fallback($$props["allowDuplicates"], false);
  let validation = fallback($$props["validation"], () => true);
  let duration = fallback($$props["duration"], 150);
  let required = fallback($$props["required"], false);
  let chips = fallback($$props["chips"], "variant-filled");
  let invalid = fallback($$props["invalid"], "input-error");
  let padding = fallback($$props["padding"], "p-2");
  let rounded = fallback($$props["rounded"], "rounded-container-token");
  let regionChipWrapper = fallback($$props["regionChipWrapper"], "");
  let regionChipList = fallback($$props["regionChipList"], "");
  let regionInput = fallback($$props["regionInput"], "");
  let label = fallback($$props["label"], "Chips select");
  let transitions = fallback($$props["transitions"], () => !store_get($$store_subs ??= {}, "$prefersReducedMotionStore", prefersReducedMotionStore), true);
  let listTransitionIn = fallback($$props["listTransitionIn"], fly);
  let listTransitionInParams = fallback($$props["listTransitionInParams"], () => ({ duration: 150, opacity: 0, y: -20 }), true);
  let listTransitionOut = fallback($$props["listTransitionOut"], fly);
  let listTransitionOutParams = fallback($$props["listTransitionOutParams"], () => ({ duration: 150, opacity: 0, y: -20 }), true);
  let chipTransitionIn = fallback($$props["chipTransitionIn"], scale);
  let chipTransitionInParams = fallback($$props["chipTransitionInParams"], () => ({ duration: 150, opacity: 0 }), true);
  let chipTransitionOut = fallback($$props["chipTransitionOut"], scale);
  let chipTransitionOutParams = fallback($$props["chipTransitionOutParams"], () => ({ duration: 150, opacity: 0 }), true);
  const cBase = "textarea cursor-pointer";
  const cChipWrapper = "space-y-4";
  const cChipList = "flex flex-wrap gap-2";
  const cInputField = "unstyled bg-transparent border-0 !ring-0 p-0 w-full";
  let inputValid = true;
  let chipValues = value?.map((val) => {
    return { val, id: Math.random() };
  }) || [];
  function validateCustom(chip) {
    return validation === void 0 || validation(chip);
  }
  function validateCount() {
    return max === -1 || value.length < max;
  }
  function validateLength(chip) {
    return (minlength === -1 || chip.length >= minlength) && (maxlength === -1 || chip.length <= maxlength);
  }
  function validateWhiteList(chip) {
    return whitelist.length === 0 || whitelist.includes(chip);
  }
  function validateDuplicates(chip) {
    return allowDuplicates || !value.includes(chip);
  }
  function validate(chip = "") {
    if (!chip && !input) return false;
    chip = chip !== "" ? chip.trim() : input.trim();
    return validateCustom(chip) && validateCount() && validateLength(chip) && validateWhiteList(chip) && validateDuplicates(chip);
  }
  function addChipCommon(chip) {
    chip = allowUpperCase ? chip : chip.toLowerCase();
    value.push(chip);
    value = value;
    chipValues.push({ val: chip, id: Math.random() });
    chipValues = chipValues;
  }
  function removeChipCommon(chip) {
    let chipIndex = value.indexOf(chip);
    value.splice(chipIndex, 1);
    value = value;
    chipValues.splice(chipIndex, 1);
    chipValues = chipValues;
  }
  function addChip(chip) {
    inputValid = validate(chip);
    if (inputValid === false) {
      return;
    }
    addChipCommon(chip);
    dispatch("addManually", { chipIndex: value.length - 1, chipValue: chip });
  }
  function removeChip(chip) {
    if ($$restProps.disabled) return;
    removeChipCommon(chip);
  }
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  classesInvalid = inputValid === false ? invalid : "";
  classesBase = `${cBase} ${padding} ${rounded} ${$$sanitized_props.class ?? ""} ${classesInvalid}`;
  classesChipWrapper = `${cChipWrapper} ${regionChipWrapper}`;
  classesChipList = `${cChipList} ${regionChipList}`;
  classesInput = `${cInputField} ${regionInput}`;
  chipValues = value?.map((val, i) => {
    if (chipValues[i]?.val === val) return chipValues[i];
    return { id: Math.random(), val };
  }) || [];
  const each_array = ensure_array_like(value);
  $$payload.out += `<div${attr("class", `input-chip ${stringify(classesBase)} ${stringify([$$restProps.disabled ? "opacity-50" : ""].filter(Boolean).join(" "))}`)}><div class="h-0 overflow-hidden"><select${attr("name", name)} multiple${attr("required", required, true)}${attr("aria-label", label)} tabindex="-1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<option${attr("value", option)}>${escape_html(option)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div${attr("class", `input-chip-wrapper ${stringify(classesChipWrapper)}`)}><input${spread_attributes({
    type: "text",
    value: input,
    placeholder: $$restProps.placeholder ?? "Enter values...",
    class: `input-chip-field ${stringify(classesInput)}`,
    disabled: $$restProps.disabled,
    ...prunedRestProps()
  })}> `;
  if (chipValues.length) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(chipValues);
    $$payload.out += `<div${attr("class", `input-chip-list ${stringify(classesChipList)}`)}><!--[-->`;
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let { id, val } = each_array_1[i];
      $$payload.out += `<div><button type="button"${attr("class", `chip ${stringify(chips)}`)}><span>${escape_html(val)}</span> <span>✕</span></button></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    input,
    name,
    value,
    whitelist,
    max,
    minlength,
    maxlength,
    allowUpperCase,
    allowDuplicates,
    validation,
    duration,
    required,
    chips,
    invalid,
    padding,
    rounded,
    regionChipWrapper,
    regionChipList,
    regionInput,
    label,
    transitions,
    listTransitionIn,
    listTransitionInParams,
    listTransitionOut,
    listTransitionOutParams,
    chipTransitionIn,
    chipTransitionInParams,
    chipTransitionOut,
    chipTransitionOutParams,
    addChip,
    removeChip
  });
  pop();
}
function SlideToggle($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "checked",
    "size",
    "background",
    "active",
    "border",
    "rounded",
    "label"
  ]);
  push();
  let cTrackActive, cThumbBackground, cThumbPos, classesDisabled, classesBase, classesLabel, classesTrack, classesThumb;
  let name = $$props["name"];
  let checked = fallback($$props["checked"], false);
  let size = fallback($$props["size"], "md");
  let background = fallback($$props["background"], "bg-surface-400 dark:bg-surface-700");
  let active = fallback($$props["active"], "bg-surface-900 dark:bg-surface-300");
  let border = fallback($$props["border"], "");
  let rounded = fallback($$props["rounded"], "rounded-full");
  let label = fallback($$props["label"], "");
  const cBase = "inline-block";
  const cLabel = "unstyled flex items-center";
  const cTrack = "flex transition-all duration-[200ms] cursor-pointer";
  const cThumb = "w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";
  let trackSize;
  switch (size) {
    case "sm":
      trackSize = "w-12 h-6";
      break;
    case "lg":
      trackSize = "w-20 h-10";
      break;
    default:
      trackSize = "w-16 h-8";
  }
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  cTrackActive = checked ? active : `${background} cursor-pointer`;
  cThumbBackground = checked ? "bg-white/75" : "bg-white";
  cThumbPos = checked ? "translate-x-full" : "";
  classesDisabled = $$sanitized_props.disabled === true ? "opacity-50" : "hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer";
  classesBase = `${cBase} ${rounded} ${classesDisabled} ${$$sanitized_props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesTrack = `${cTrack} ${border} ${rounded} ${trackSize} ${cTrackActive}`;
  classesThumb = `${cThumb} ${rounded} ${cThumbBackground} ${cThumbPos}`;
  $$payload.out += `<div${attr("id", label)}${attr("class", `slide-toggle ${stringify(classesBase)}`)} data-testid="slide-toggle" role="switch"${attr("aria-label", label)}${attr("aria-checked", checked)} tabindex="0"><label${attr("class", `slide-toggle-label ${stringify(classesLabel)}`)}><input${spread_attributes({
    type: "checkbox",
    class: "slide-toggle-input hidden",
    checked,
    name,
    ...prunedRestProps(),
    disabled: $$sanitized_props.disabled
  })}> <div${attr("class", `slide-toggle-track ${stringify(classesTrack)} ${stringify([
    $$sanitized_props.disabled ? "cursor-not-allowed" : ""
  ].filter(Boolean).join(" "))}`)}><div${attr("class", `slide-toggle-thumb ${stringify(classesThumb)} ${stringify([
    $$sanitized_props.disabled ? "cursor-not-allowed" : ""
  ].filter(Boolean).join(" "))}`)}></div></div> `;
  if ($$slots.default) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="slide-toggle-text ml-3"><!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></label></div>`;
  bind_props($$props, {
    name,
    checked,
    size,
    background,
    active,
    border,
    rounded,
    label
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  let markdownFiles = [];
  let selectedTags = [];
  let useSomeTags = false;
  let textChips = [];
  let textChipTyping = "";
  let updatedChipList = [
    textChipTyping.length > 0 ? textChipTyping : null,
    ...textChips
  ].filter(Boolean);
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
        if (useSomeTags) {
          return selectedTags.some((tag) => file.tagsCat.includes(tag) || file.tagsPrio.includes(tag));
        } else {
          return selectedTags.every((tag) => file.tagsCat.includes(tag) || file.tagsPrio.includes(tag));
        }
      });
    }
    if (updatedChipList.length) {
      files = files.filter((file) => {
        const fullTextContent = file.H2blocks.flatMap((block) => block.content).join("|");
        const fullText = [fullTextContent, file.title].join("|");
        {
          return updatedChipList.every((chip) => fullText.toLowerCase().includes(chip.toLowerCase()));
        }
      });
    }
    return files;
  })();
  function highlightText(content, terms) {
    console.log("terms:", terms);
    function escapeRegex(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    if (!terms) return content;
    const flags = "gi";
    const queryPattern = terms.map((term) => escapeRegex(term)).join("|");
    const regex = new RegExp(`(${queryPattern})`, flags);
    return content.replace(regex, "<mark>$1</mark>");
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array_3 = ensure_array_like(filteredFiles);
    $$payload2.out += `<div${attr("class", `grid h-full w-full transition-all ${stringify("grid-rows-[minmax(65%,300px)_auto] md:grid-rows-[minmax(45%,200px)_auto]")}`)}><div class="mb-[50px] flex min-h-[200px] flex-col gap-4 px-2 md:px-5"><button type="button" class="md:text-md btn w-[150px] rounded-full border-2 border-black bg-white py-1 text-xs text-black">`;
    {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<span>`;
      Chevron_up($$payload2, {});
      $$payload2.out += `<!----></span> <span>Hide Filters</span>`;
    }
    $$payload2.out += `<!--]--></button> `;
    {
      $$payload2.out += "<!--[-->";
      const each_array = ensure_array_like(Array.from(new Set(markdownFiles.flatMap((file) => file.tagsCat))));
      const each_array_1 = ensure_array_like(Array.from(new Set(markdownFiles.flatMap((file) => file.tagsPrio))));
      $$payload2.out += `<div><h2 class="mb-2 text-xs">filter by category</h2> <div class="flex flex-wrap gap-2"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$payload2.out += `<button class="btn rounded-full border-2 px-3 py-1 text-xs uppercase"${attr("style", `border-color: ${getTagColor(tag)}; background-color: ${selectedTags.includes(tag) ? getTagColor(tag) : "white"}`)}>${escape_html(tag)}</button>`;
      }
      $$payload2.out += `<!--]--> `;
      SlideToggle($$payload2, {
        class: "ml-5 text-sm",
        size: "sm",
        background: "bg-red-400 dark:bg-red-700",
        get checked() {
          return useSomeTags;
        },
        set checked($$value) {
          useSomeTags = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          $$payload3.out += `<!---->${escape_html(useSomeTags ? "filter some" : "filter all")}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div> <div><h2 class="mb-2 text-xs">filter by priority</h2> <div class="flex flex-wrap gap-2"><!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let tag = each_array_1[$$index_1];
        $$payload2.out += `<button class="btn rounded-none border-2 px-2 py-1 text-xs"${attr("style", `border-color: ${getPrioColor(tag)}; background-color: ${selectedTags.includes(tag) ? getPrioColor(tag) : "white"}`)}>${escape_html(tag)}</button>`;
      }
      $$payload2.out += `<!--]--></div></div> <div class="mb-4"><h2 class="mb-2 text-xs">filter by text</h2>  <div${attr("class", `grid grid-cols-[1fr_auto] rounded-full border border-black px-4 py-0 transition-all ${stringify(updatedChipList.length ? "w-full" : "w-[400px]")}`)}>`;
      InputChip($$payload2, {
        class: "m-0 cursor-default p-0 text-xs focus:border-black focus:outline-none",
        regionChipWrapper: "md:flex md:flex-row-reverse md:gap-5 px-0 md:space-y-0",
        regionChipList: "md:flex md:flex-row md:flex-nowrap px-0 mx-0",
        regionInput: "px-0 mx-0 min-w-[200px]",
        name: "chips",
        placeholder: "Enter any value...",
        get value() {
          return textChips;
        },
        set value($$value) {
          textChips = $$value;
          $$settled = false;
        },
        get input() {
          return textChipTyping;
        },
        set input($$value) {
          textChipTyping = $$value;
          $$settled = false;
        }
      });
      $$payload2.out += `<!----> <div class="flex gap-5"><button${attr("class", `rounded-full py-1 text-sm focus:underline focus:outline-none ${stringify("text-black")}`)}>Aa</button> <button class="rounded-full py-1 text-sm focus:underline focus:outline-none">${escape_html("filter all")}</button></div></div></div>`;
    }
    $$payload2.out += `<!--]--></div> <div class="overflow-scroll px-2 pb-[200px] md:px-5"><table class="svelte-16n6pyh"><thead><tr><th class="min-w-[200px] svelte-16n6pyh">Feature</th>`;
    if (filteredFiles.length > 0) {
      $$payload2.out += "<!--[-->";
      const each_array_2 = ensure_array_like(filteredFiles[0].H2blocks);
      $$payload2.out += `<!--[-->`;
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let H2block = each_array_2[$$index_2];
        $$payload2.out += `<th class="svelte-16n6pyh">${escape_html(H2block.H2block)}</th>`;
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
      const each_array_6 = ensure_array_like(file.H2blocks);
      $$payload2.out += `<tr><td class="w-[200px] svelte-16n6pyh"><div class="mb-4 text-lg md:text-xl">${html(marked(highlightText(file.title, updatedChipList)))}</div> <div class="mt-2 flex flex-col gap-2 pl-4"><div class="flex flex-wrap gap-2"><!--[-->`;
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
        let H2block = each_array_6[$$index_5];
        $$payload2.out += `<td class="w-[200px] svelte-16n6pyh"><p class="prose text-sm">${html(marked(highlightText(H2block.content, updatedChipList)))}</p></td>`;
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
//# sourceMappingURL=_page.svelte-CUlhb_hV.js.map
