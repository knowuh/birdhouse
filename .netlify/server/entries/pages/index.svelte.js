var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2435e811 = require("../../_app/immutable/chunks/index-2435e811.js");
const svgBox_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-vr4k54{padding:5px}.container.svelte-vr4k54{display:flex;flex-direction:row;align-content:flex-end;align-items:center;background-color:white;color:black}.inverted.svelte-vr4k54{color:white;background-color:black}.left.svelte-vr4k54{flex-basis:10%;flex-grow:1;text-align:end}.right.svelte-vr4k54{flex-basis:50%;flex-grow:5;margin-left:5px;text-align:start}",
  map: null
};
const Svg_box = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  $$result.css.add(css$2);
  return `<div class="${["container svelte-vr4k54", inverted ? "inverted" : ""].join(" ").trim()}"><div class="${"left svelte-vr4k54"}">${slots.left ? slots.left({}) : `
      Left
    `}</div>
  <div class="${"right svelte-vr4k54"}">${slots.right ? slots.right({}) : `
      Right
    `}</div>
</div>`;
});
const attributions_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-14spxn5{font-size:10pt;color:gray;margin:10px 0px}p.svelte-14spxn5{margin:2px 0px}a.svelte-14spxn5{color:gray}",
  map: null
};
const Attributions = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"attribution svelte-14spxn5"}"><p class="${"svelte-14spxn5"}">The icons used in the Oblique Birdhouse project
  were created by Shannon E Thomas and are used here under the
    <a target="${"blank"}" rel="${"noopener"}" href="${"https://creativecommons.org/licenses/by/4.0/"}" class="${"svelte-14spxn5"}">Creative Commons 4.0 By license.
    </a></p>
  More information about these icons can be found on the
  <a target="${"blank"}" rel="${"noopener"}" href="${"https://hans.gerwitz.com/projects/the-artificial/toicon/"}" class="${"svelte-14spxn5"}"><em>to [icon]</em></a>
  page at Hans Gerwitz&#39;s website.
</div>`;
});
const Press = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { size = 100 } = $$props;
  let { color = "#000000" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_2435e811.a)("width", size, 0)}${(0, import_index_2435e811.a)("height", size, 0)} viewBox="${"0 0 32 32"}" xml:space="${"preserve"}"><path class="${"puchipuchi_een"}" d="${"M7 6a5 5 0 0 1 10 0 5 5 0 0 1-2 4V6a3 3 0 0 0-6 0v4a5 5 0 0 1-2-4zm17 7a2 2 0 0 0-2 2v-1a2 2 0 0 0-4 0v-1a2 2 0 0 0-4 0V6a2 2 0 0 0-4 0v10.3A2 2 0 0 0 7 18v3c0 .5.2.9.4 1.2L11 28h12l2.3-3.3c.4-.4.7-1.1.7-1.7v-8a2 2 0 0 0-2-2zM11 29v1c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-1H11z"}" style="${"fill:" + (0, import_index_2435e811.e)(color, true)}"></path></svg>`;
});
const Spook = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { size = 100 } = $$props;
  let { color = "#000000" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_2435e811.a)("width", size, 0)}${(0, import_index_2435e811.a)("height", size, 0)} viewBox="${"0 0 32 32"}" xml:space="${"preserve"}"><path class="${"puchipuchi_een"}" d="${"M16 2C9.925 2 5 6.925 5 13v15a2 2 0 1 0 4 0v-1a1 1 0 0 1 2 0v1a2 2 0 1 0 4 0v-1a1 1 0 0 1 2 0v1a2 2 0 1 0 4 0v-1a1 1 0 0 1 2 0v1a2 2 0 1 0 4 0V13c0-6.075-4.925-11-11-11zm-3 14a2 2 0 1 1-.001-3.999A2 2 0 0 1 13 16zm6 0a2 2 0 1 1-.001-3.999A2 2 0 0 1 19 16zm-5-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}" style="${"fill:" + (0, import_index_2435e811.e)(color, true)}"></path></svg>`;
});
const Wand = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { size = 100 } = $$props;
  let { color = "#000000" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_2435e811.a)("width", size, 0)}${(0, import_index_2435e811.a)("height", size, 0)} viewBox="${"0 0 32 32"}" xml:space="${"preserve"}"><path class="${"puchipuchi_een"}" d="${"M31.4 26.4 13.6 8.6a2 2 0 0 0-2.8 0l-2.2 2.2a2 2 0 0 0 0 2.8l17.8 17.8c.8.8 2 .8 2.8 0l2.2-2.2c.8-.7.8-2 0-2.8zM10 12.2l2.2-2.2 3 3-2.1 2.3-3.1-3.1zm-.4 8.4-1.8.6a1 1 0 0 0-.6.6l-.6 1.8c-.2.5-1 .5-1.2 0l-.6-1.8a1 1 0 0 0-.6-.6l-1.8-.6a.6.6 0 0 1 0-1.2l1.8-.6c.3 0 .5-.3.6-.6l.6-1.8c.2-.5 1-.5 1.2 0l.6 1.8c0 .3.3.5.6.6l1.8.6c.5.2.5 1 0 1.2zm6.8-15.2 1.8-.6c.3 0 .5-.3.6-.6l.6-1.8c.2-.5 1-.5 1.2 0l.6 1.8c0 .3.3.5.6.6l1.8.6c.5.2.5 1 0 1.2l-1.8.6a1 1 0 0 0-.6.6l-.6 1.8c-.2.5-1 .5-1.2 0l-.6-1.8a1 1 0 0 0-.6-.6l-1.8-.6a.6.6 0 0 1 0-1.2zm-13.2.8-1.8-.6a.6.6 0 0 1 0-1.2l1.8-.6c.3 0 .5-.3.6-.6l.6-1.8c.2-.5 1-.5 1.2 0l.6 1.8c0 .3.3.5.6.6l1.8.6c.5.2.5 1 0 1.2l-1.8.6a1 1 0 0 0-.6.6l-.6 1.8c-.2.5-1 .5-1.2 0l-.6-1.8a1 1 0 0 0-.6-.6z"}" style="${"fill:" + (0, import_index_2435e811.e)(color, true)}"></path></svg>`;
});
const Yeti = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { size = 100 } = $$props;
  let { color = "#000000" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_2435e811.a)("width", size, 0)}${(0, import_index_2435e811.a)("height", size, 0)} viewBox="${"0 0 32 32"}" xml:space="${"preserve"}"><path class="${"puchipuchi_een"}" d="${"m26.5 23.2-.4-2.4A4 4 0 0 0 29 17c0-4.3-2.8-7.8-5-8.8v-.4A7 7 0 0 0 17 2h-2a7 7 0 0 0-7 5.8v.5c-2.2.9-5 4.4-5 8.7a4 4 0 0 0 2.9 3.8l-.4 2.4A6 6 0 0 0 3 28v1c0 .6.4 1 1 1h1v-1a.5.5 0 0 1 1 0v1h1v-1a.5.5 0 0 1 1 0v1h1v-1a.5.5 0 0 1 1 0v1h4c.6 0 1-.4 1-1v-3h2v3c0 .6.4 1 1 1h4v-1a.5.5 0 0 1 1 0v1h1v-1a.5.5 0 0 1 1 0v1h1v-1a.5.5 0 0 1 1 0v1h1c.6 0 1-.4 1-1v-1c0-2-1-3.8-2.5-4.8zm-9-11.2h-3a3 3 0 0 1-3-3.4l.1-1a3 3 0 0 1 3-2.6h2.8a3 3 0 0 1 3 2.6l.1 1a3 3 0 0 1-3 3.4zM15 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}" style="${"fill:" + (0, import_index_2435e811.e)(color, true)}"></path></svg>`;
});
const Moon = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { size = 100 } = $$props;
  let { color = "#000000" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_2435e811.a)("width", size, 0)}${(0, import_index_2435e811.a)("height", size, 0)} viewBox="${"0 0 32 32"}" xml:space="${"preserve"}"><path class="${"puchipuchi_een"}" d="${"M28.6 17.5a.7.7 0 0 1 1.2.7 14 14 0 1 1-16-16c.8-.1 1.2.7.7 1.2a10 10 0 0 0 14 14.1z"}" style="${"fill:" + (0, import_index_2435e811.e)(color, true)}"></path></svg>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif}.main.svelte-1ofm7g7{display:flex;flex-direction:column;align-items:center;justify-content:space-around;height:100vh;margin:1em;padding:0}h1.svelte-1ofm7g7{font-size:24pt}.list.svelte-1ofm7g7{max-width:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:14pt;margin:0;padding:0}",
  map: null
};
const Routes = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Oblique Birdhouse</title>`, ""}`, ""}
  <div class="${"main svelte-1ofm7g7"}"><div class="${"list svelte-1ofm7g7"}"><h1 class="${"svelte-1ofm7g7"}">The Oblique Birdhouse</h1>
      ${(0, import_index_2435e811.v)(Svg_box, "SvgBox").$$render($$result, { inverted: true }, {}, {
    right: () => {
      return `<p slot="${"right"}">Your decisions matter. Press a <strong>SEQUENCE</strong> of buttons to get a surprise.
        </p>`;
    },
    left: () => {
      return `${(0, import_index_2435e811.v)(Press, "Press").$$render($$result, { slot: "left", color: "white" }, {}, {})}`;
    }
  })}
      ${(0, import_index_2435e811.v)(Svg_box, "SvgBox").$$render($$result, {}, {}, {
    right: () => {
      return `<p slot="${"right"}">Sequences starting with the ghost Clyde will make mazes.</p>`;
    },
    left: () => {
      return `${(0, import_index_2435e811.v)(Spook, "Spook").$$render($$result, { slot: "left" }, {}, {})}`;
    }
  })}
      ${(0, import_index_2435e811.v)(Svg_box, "SvgBox").$$render($$result, {}, {}, {
    right: () => {
      return `<p slot="${"right"}">Sequences starting with the wand will produce text.</p>`;
    },
    left: () => {
      return `${(0, import_index_2435e811.v)(Wand, "Wand").$$render($$result, { slot: "left" }, {}, {})}`;
    }
  })}
      ${(0, import_index_2435e811.v)(Svg_box, "SvgBox").$$render($$result, {}, {}, {
    right: () => {
      return `<p slot="${"right"}">Sequences starting with the moon will make sounds.</p>`;
    },
    left: () => {
      return `${(0, import_index_2435e811.v)(Moon, "Moon").$$render($$result, { slot: "left" }, {}, {})}`;
    }
  })}
      ${(0, import_index_2435e811.v)(Svg_box, "SvgBox").$$render($$result, {}, {}, {
    right: () => {
      return `<p slot="${"right"}">Sequences starting with the Yeti will make images.</p>`;
    },
    left: () => {
      return `${(0, import_index_2435e811.v)(Yeti, "Yeti").$$render($$result, { slot: "left" }, {}, {})}`;
    }
  })}</div>
    <div class="${"list svelte-1ofm7g7"}">${(0, import_index_2435e811.v)(Attributions, "Attribution").$$render($$result, {}, {}, {})}</div>
</div>`;
});
