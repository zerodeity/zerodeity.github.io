/* Zero Prime: the toys of the zp layout. Every page reads complete without
   this file. It adds the boot screen, the cycling titles, the avatar's
   quips, the firmware meter, the comic bursts, the card flips, the
   terminal, the copy button, the flight modes, the 1-9 keys and the Konami
   code. Under reduced motion nothing it does moves, and the boot screen
   never shows. */
(function () {
  "use strict";

  var motion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  function still() {
    return motion !== null && motion.matches;
  }
  function one(sel, root) {
    return (root || document).querySelector(sel);
  }
  function all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  // Keys typed into a field are text, not shortcuts.
  function typing(e) {
    var t = e.target;
    return t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" ||
      t.tagName === "SELECT" || t.isContentEditable);
  }
  function modalOpen() {
    return one("dialog[open]") !== null;
  }

  // The boot screen: the layout's head script sets zp-boot once per
  // session. Its lines come in one by one; any key or click skips it.
  var booting = false;
  function boot() {
    var root = document.documentElement;
    var screen = one(".boot");
    if (!screen || !root.classList.contains("zp-boot")) {
      return;
    }
    if (still()) {
      root.classList.remove("zp-boot");
      return;
    }
    booting = true;
    var log = one(".boot-log", screen);
    var lines = log.textContent.split("\n");
    var timers = [];
    function end() {
      if (!booting) {
        return;
      }
      booting = false;
      timers.forEach(window.clearTimeout);
      document.removeEventListener("keydown", skip, true);
      document.removeEventListener("pointerdown", end, true);
      screen.classList.add("done");
      window.setTimeout(function () {
        root.classList.remove("zp-boot");
      }, 300);
    }
    function skip(e) {
      e.stopPropagation();
      end();
    }
    document.addEventListener("keydown", skip, true);
    document.addEventListener("pointerdown", end, true);
    log.textContent = "";
    lines.forEach(function (line, i) {
      timers.push(window.setTimeout(function () {
        log.textContent += (i ? "\n" : "") + line;
      }, 200 + i * 420));
    });
    timers.push(window.setTimeout(end, 200 + lines.length * 420 + 700));
  }

  // Keys 1-9 open the menu entry with that number.
  function keys() {
    document.addEventListener("keydown", function (e) {
      if (booting || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey ||
          typing(e) || modalOpen() || !/^[1-9]$/.test(e.key)) {
        return;
      }
      var a = one('.side a[data-key="' + e.key + '"]');
      if (a) {
        window.location.href = a.href;
      }
    });
  }

  // The menu drawer is a checkbox: Escape closes it too, and it starts
  // closed when the browser brings a page back.
  function drawer() {
    var toggle = document.getElementById("menu");
    if (!toggle) {
      return;
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.checked) {
        toggle.checked = false;
        toggle.focus();
      }
    });
    window.addEventListener("pageshow", function () {
      toggle.checked = false;
    });
  }

  // An element with data-titles="A|B|C" shows each title in turn.
  function titles() {
    all("[data-titles]").forEach(function (el) {
      var t = el.getAttribute("data-titles").split("|");
      var k = 0;
      if (t.length < 2) {
        return;
      }
      window.setInterval(function () {
        if (still() || document.hidden) {
          return;
        }
        k = (k + 1) % t.length;
        el.textContent = t[k];
      }, 1700);
    });
  }

  var QUIPS = [
    "beep boop. I mean… hello, human.",
    "stop poking me. I am thinking.",
    "did you try turning the universe off and on?",
    "I read your source code. it was… brave.",
    "one eye for humans, one eye for packets."
  ];
  var BURSTS = ["BZZT!", "ZAP!", "POW!", "KZZK!", "BOOP!"];
  var MIXES = [
    [50, "50% HUMAN (mostly coffee)", "50% SUPERINTELLIGENCE (mostly ego)"],
    [30, "30% HUMAN (needs sleep)", "70% SUPERINTELLIGENCE (does not)"],
    [70, "70% HUMAN (it is Monday)", "30% SUPERINTELLIGENCE (on strike)"],
    [1, "1% HUMAN (remembers lunch)", "99% SUPERINTELLIGENCE (forgot lunch)"]
  ];

  // The home page's avatar, firmware meter and bursts.
  function hero() {
    var avatar = document.getElementById("avatar");
    var bubble = document.getElementById("bubble");
    var q = 0;
    if (avatar && bubble) {
      avatar.addEventListener("click", function () {
        q = (q + 1) % QUIPS.length;
        bubble.textContent = QUIPS[q];
      });
    }

    var meter = document.getElementById("mixbar");
    var m = 0;
    if (meter) {
      meter.addEventListener("click", function () {
        m = (m + 1) % MIXES.length;
        document.getElementById("mh").style.width = MIXES[m][0] + "%";
        document.getElementById("ml").textContent = MIXES[m][1];
        document.getElementById("mr").textContent = MIXES[m][2];
      });
    }

    all(".pow").forEach(function (b) {
      var face = one("span", b);
      b.addEventListener("click", function () {
        var next = face.textContent;
        while (next === face.textContent) {
          next = BURSTS[Math.floor(Math.random() * BURSTS.length)];
        }
        face.textContent = next;
      });
    });
  }

  // A click anywhere on a card flips it; its FLIP button is the way in
  // from the keyboard.
  function cards() {
    all(".card").forEach(function (card) {
      var btn = one(".flip", card);
      card.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          return;
        }
        var on = card.classList.toggle("flipped");
        if (btn) {
          btn.setAttribute("aria-pressed", on ? "true" : "false");
        }
      });
    });
  }

  var REPLIES = {
    "help": "commands: help, whoami, ls, cat legend, cat powers, coffee, date, sudo su, open aurelion, clear",
    "whoami": "zero prime. the first zero, the last prime.",
    "ls": "legend.txt  powers.db  aurelion/  coffee.sh  secrets/ (permission denied)",
    "cat legend": "some say a debugger got lonely. some say a cosmic ray flipped the right bit.",
    "cat powers": "skeleton key · x-ray vision · exploit alchemy · signal sense · machine whisperer · polyglot",
    "coffee": "brewing… done. superintelligence +1%.",
    "date": "it is always 03:00 somewhere on nebula.",
    "sudo su": "nice try, earthling. this terminal answers to one user.",
    "cd secrets": "permission denied. good instinct though.",
    "rm -rf /": "lol. no.",
    "exit": "there is no exit. only the next prompt."
  };

  // The terminal page: the recording makes way for a live shell.
  function shell() {
    var term = one(".term[data-shell]");
    if (!term) {
      return;
    }
    var out = one(".out", term);
    var cmd = one("input", term);
    function line(text, cls) {
      var s = document.createElement("span");
      if (cls) {
        s.className = cls;
      }
      s.textContent = text;
      out.appendChild(s);
    }
    function run(c) {
      c = c.trim().replace(/\s+/g, " ");
      if (!c) {
        return;
      }
      if (c === "clear") {
        out.textContent = "";
        return;
      }
      line("guest@nebula:~$", "p");
      line(" " + c + "\n");
      var key = c.toLowerCase();
      if (key === "open aurelion") {
        line("opening construct 01…\n");
        window.setTimeout(function () {
          window.location.href = term.getAttribute("data-shell");
        }, 500);
      } else if (Object.prototype.hasOwnProperty.call(REPLIES, key)) {
        line(REPLIES[key] + "\n");
      } else {
        line("command not found: " + c + ". (type help)\n");
      }
      out.scrollTop = out.scrollHeight;
    }
    out.textContent = "";
    line("connected to nebula. type a command, or tap one below.\n", "k");
    cmd.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        run(cmd.value);
        cmd.value = "";
      }
    });
    all(".chips button", term).forEach(function (b) {
      b.addEventListener("click", function () {
        run(b.textContent);
        cmd.focus();
      });
    });
    if (window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
      cmd.focus({ preventScroll: true });
    }
  }

  // A button with data-copy="id" copies that element's text.
  function copy() {
    all("[data-copy]").forEach(function (b) {
      var label = b.textContent;
      var timer = 0;
      function say(t) {
        b.textContent = t;
        window.clearTimeout(timer);
        timer = window.setTimeout(function () {
          b.textContent = label;
        }, 2000);
      }
      b.addEventListener("click", function () {
        var from = document.getElementById(b.getAttribute("data-copy"));
        function select() {
          var r = document.createRange();
          r.selectNodeContents(from);
          var s = window.getSelection();
          s.removeAllRanges();
          s.addRange(r);
          say("SELECTED");
        }
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
          select();
          return;
        }
        // A browser that asks first may never answer: after a second, the
        // text is selected for the reader to copy.
        var slow = window.setTimeout(select, 1000);
        navigator.clipboard.writeText(from.textContent).then(function () {
          window.clearTimeout(slow);
          say("COPIED");
        }, function () {
          window.clearTimeout(slow);
          select();
        });
      });
    });
  }

  // The flight modes: the pressed one's line shows.
  function modes() {
    var buttons = all(".mode[data-mode]");
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var want = b.getAttribute("data-mode");
        buttons.forEach(function (m) {
          m.setAttribute("aria-pressed", m === b ? "true" : "false");
        });
        all(".mode-tx [data-mode]").forEach(function (p) {
          p.classList.toggle("on", p.getAttribute("data-mode") === want);
        });
      });
    });
  }

  // The Konami code opens a modal.
  var KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft",
    "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  function ascend() {
    var dlg = document.getElementById("ascension");
    if (!dlg) {
      dlg = document.createElement("dialog");
      dlg.id = "ascension";
      dlg.className = "modal";
      dlg.setAttribute("aria-labelledby", "ascension-title");
      dlg.innerHTML = '<div class="box"><h2 class="sec" id="ascension-title">// ASCENSION UNLOCKED</h2>' +
        '<p class="lead">You found the cheat code. Zero Prime is now 100% superintelligence for the next five seconds. Do not tell anyone.</p>' +
        '<p class="row"><button class="btn" type="button">CLOSE</button></p></div>';
      var close = function () {
        if (typeof dlg.close === "function") {
          dlg.close();
        } else {
          dlg.removeAttribute("open");
        }
      };
      one("button", dlg).addEventListener("click", close);
      dlg.addEventListener("click", function (e) {
        if (e.target === dlg) {
          close();
        }
      });
      document.body.appendChild(dlg);
    }
    if (dlg.open) {
      return;
    }
    if (typeof dlg.showModal === "function") {
      dlg.showModal();
    } else {
      dlg.setAttribute("open", "");
    }
  }
  function konami() {
    var at = 0;
    document.addEventListener("keydown", function (e) {
      var k = e.key && e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k === KONAMI[at]) {
        at += 1;
      } else {
        at = k === KONAMI[0] ? 1 : 0;
      }
      if (at === KONAMI.length) {
        at = 0;
        ascend();
      }
    });
  }

  function start() {
    boot();
    keys();
    drawer();
    hero();
    cards();
    shell();
    copy();
    modes();
    konami();
    if (!still()) {
      titles();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
