/* AURELION HUD: cycles the hero's readouts and types the boot console.
   It only adds motion: every page reads complete without it, and it does
   nothing when the reader asks for reduced motion. */
(function () {
  "use strict";

  var motion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  function still() {
    return motion !== null && motion.matches;
  }
  if (still()) {
    return;
  }

  // A readout with data-cycle="A|B|C" shows each value in turn.
  function cycle(el, offset) {
    var values = el.getAttribute("data-cycle").split("|");
    var i = 0;
    if (values.length < 2) {
      return;
    }
    window.setTimeout(function () {
      window.setInterval(function () {
        if (still() || document.hidden) {
          return;
        }
        i = (i + 1) % values.length;
        el.classList.add("is-switching");
        window.setTimeout(function () {
          el.textContent = values[i];
          el.classList.remove("is-switching");
        }, 160);
      }, 3000);
    }, offset);
  }

  // A .console types itself out once, when it scrolls into view. The text
  // stays in the page; only its text nodes are emptied and refilled, so the
  // markup and colours inside are kept.
  function type(block) {
    var walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    var texts = [];
    var total = 0;
    var node;
    while ((node = walker.nextNode())) {
      nodes.push(node);
      texts.push(node.nodeValue);
      total += node.nodeValue.length;
    }
    if (total === 0) {
      return;
    }
    var delay = Math.max(4, Math.min(22, 2400 / total));
    var n = 0;
    var c = 0;

    block.style.minHeight = block.offsetHeight + "px";
    block.setAttribute("aria-busy", "true");
    block.classList.add("is-typing");
    nodes.forEach(function (t) {
      t.nodeValue = "";
    });

    function done() {
      nodes.forEach(function (t, k) {
        t.nodeValue = texts[k];
      });
      block.classList.remove("is-typing");
      block.removeAttribute("aria-busy");
      block.style.minHeight = "";
    }

    function step() {
      if (still()) {
        done();
        return;
      }
      while (n < nodes.length && c >= texts[n].length) {
        n += 1;
        c = 0;
      }
      if (n >= nodes.length) {
        done();
        return;
      }
      c += 1;
      nodes[n].nodeValue = texts[n].slice(0, c);
      var ch = texts[n].charAt(c - 1);
      window.setTimeout(step, ch === "\n" ? delay * 14 : delay);
    }
    step();
  }

  function start() {
    var readouts = document.querySelectorAll("[data-cycle]");
    var k;
    for (k = 0; k < readouts.length; k += 1) {
      cycle(readouts[k], k * 1300);
    }

    var consoles = document.querySelectorAll(".console");
    if (!("IntersectionObserver" in window)) {
      for (k = 0; k < consoles.length; k += 1) {
        type(consoles[k]);
      }
      return;
    }
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          seen.unobserve(entry.target);
          type(entry.target);
        }
      });
    }, { threshold: 0.35 });
    for (k = 0; k < consoles.length; k += 1) {
      seen.observe(consoles[k]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
