window.ASVAB = window.ASVAB || {};

window.ASVAB.ui = (function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  /**
   * Element factory. Children may be nodes, strings, arrays of either, or null.
   * All text goes through textContent, never innerHTML.
   *
   * The props argument is optional and detected rather than positional: passing a
   * node or string second treats it as the first child, so a call site can never
   * silently swallow an element by mistaking it for a props bag.
   */
  function el(tag, props) {
    var node = document.createElement(tag);
    var first = 1;
    var isProps =
      props !== null &&
      typeof props === "object" &&
      !Array.isArray(props) &&
      !props.nodeType;

    if (isProps) {
      first = 2;
      Object.keys(props).forEach(function (key) {
        var val = props[key];
        if (val === null || val === undefined || val === false) return;
        if (key === "class") node.className = val;
        else if (key === "text") node.textContent = val;
        else if (key === "html") node.innerHTML = val;
        else if (key === "dataset") Object.assign(node.dataset, val);
        else if (key.slice(0, 2) === "on" && typeof val === "function") {
          node.addEventListener(key.slice(2).toLowerCase(), val);
        } else if (val === true) node.setAttribute(key, "");
        else node.setAttribute(key, String(val));
      });
    }

    for (var i = first; i < arguments.length; i++) append(node, arguments[i]);
    return node;
  }

  function append(parent, child) {
    if (child === null || child === undefined || child === false) return;
    if (Array.isArray(child)) {
      child.forEach(function (c) { append(parent, c); });
      return;
    }
    parent.appendChild(typeof child === "object" ? child : document.createTextNode(String(child)));
  }

  function frag(children) {
    var f = document.createDocumentFragment();
    append(f, children);
    return f;
  }

  /** Split prose on blank lines so authors can write multi-paragraph strings. */
  function paragraphs(text, cls) {
    return String(text || "")
      .split(/\n{2,}/)
      .map(function (chunk) { return chunk.trim(); })
      .filter(Boolean)
      .map(function (chunk) {
        var p = el("p", { class: cls || null, text: chunk.replace(/\n/g, " ") });
        return p;
      });
  }

  /* ---------- lesson block renderer ---------- */

  function renderBlocks(blocks, idPrefix) {
    var prefix = idPrefix || "";
    return frag((blocks || []).map(function (block, index) {
      return renderBlock(block, prefix + index);
    }));
  }

  function renderBlock(block, uid) {
    switch (block.type) {
      case "h":
        return el("div", { class: "blk" }, el("h2", { class: "blk-h", text: block.text }));

      case "p":
        return el("div", { class: "blk" }, paragraphs(block.text, "blk-p"));

      case "list": {
        var ordered = block.ordered === true;
        return el(
          "div",
          { class: "blk" },
          el(
            ordered ? "ol" : "ul",
            { class: "blk-list", dataset: { ordered: String(ordered) } },
            (block.items || []).map(function (item) { return el("li", { text: item }); })
          )
        );
      }

      case "key":
      case "tip":
      case "warn":
        return el(
          "div",
          { class: "blk" },
          el(
            "div",
            { class: "blk-callout", dataset: { kind: block.type }, role: block.type === "warn" ? "note" : null },
            el("strong", { class: "c-label", text: block.label || block.type.toUpperCase() }),
            el("div", { class: "c-text" }, paragraphs(block.text))
          )
        );

      case "example":
        return el("div", { class: "blk" }, renderExample(block, uid));

      default:
        return el("div", { class: "blk" }, paragraphs(block.text || "", "blk-p"));
    }
  }

  function renderExample(block, uid) {
    var solId = "ex-sol-" + (uid === undefined || uid === null ? Math.random().toString(36).slice(2, 8) : uid);

    var solution = el(
      "div",
      { class: "ex-solution", id: solId, hidden: true },
      el(
        "ol",
        { class: "ex-steps" },
        (block.steps || []).map(function (step) { return el("li", { text: step }); })
      ),
      el("div", { class: "ex-answer" }, el("span", { text: "Answer" }), block.answer || ""),
      block.note ? el("p", { class: "ex-note", text: block.note }) : null
    );

    var toggle = el("button", {
      class: "btn btn-ghost btn-sm",
      type: "button",
      "aria-expanded": "false",
      "aria-controls": solId,
      onclick: function (ev) {
        var btn = ev.currentTarget;
        var open = solution.hidden;
        solution.hidden = !open;
        btn.setAttribute("aria-expanded", String(open));
        btn.textContent = open ? "Hide worked solution" : "Show worked solution";
      }
    }, "Show worked solution");

    return el(
      "div",
      { class: "blk-example" },
      el("div", { class: "ex-head", text: "Worked example" }),
      el("div", { class: "ex-prompt" }, paragraphs(block.prompt)),
      el("div", { class: "ex-toggle" }, toggle),
      solution
    );
  }

  /* ---------- misc formatting ---------- */

  function clock(totalSeconds) {
    var s = Math.max(0, Math.round(totalSeconds));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function pct(n, d) {
    if (!d) return 0;
    return Math.round((n / d) * 100);
  }

  function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  return {
    el: el,
    append: append,
    frag: frag,
    paragraphs: paragraphs,
    renderBlocks: renderBlocks,
    LETTERS: LETTERS,
    clock: clock,
    pct: pct,
    ordinal: ordinal
  };
})();
