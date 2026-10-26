---
title: AURELION
brand: AURELION
layout: zp
group: AURELION
crumb: AURELION
description: An AI coding agent that lives in your terminal. It plans, edits and checks its own work in one cockpit, and one key undoes a turn.
---

<div class="panel au-hero">
  <button class="pow" type="button"><span>ZAP!</span></button>
  <p class="kicker">CONSTRUCT 01 · BY ZERO PRIME</p>
  <h1 class="t">AURELION</h1>
  <p class="lead">The AI pilot for your terminal. It plans, edits, tests its own work and rewinds any turn, in one cockpit.</p>
  <p class="row"><a class="btn" href="#boot-sequence">{% include zp-icon.html i="download" %} INSTALL</a><a class="btn ghost" href="docs/">{% include zp-icon.html i="book" %} DOCS</a></p>
</div>

<h2 class="sec" id="boot-sequence"><span aria-hidden="true">// </span>BOOT SEQUENCE</h2>

<div class="console">
<div class="cmdline"><code><span class="p">$</span> <span id="install-cmd">curl -fsSL https://raw.githubusercontent.com/zerodeity/aurelion-dist/main/install.sh | sh</span></code><button class="btn copy js-only" type="button" data-copy="install-cmd">COPY</button></div>
<pre>  <span class="ok">{% include zp-icon.html i="check" %}</span> platform    detected
  <span class="ok">{% include zp-icon.html i="check" %}</span> signature   verified
  <span class="ok">{% include zp-icon.html i="check" %}</span> checksum    verified
  <span class="ok">{% include zp-icon.html i="check" %}</span> installed   ~/.local/bin/aurelion</pre>
</div>

<ul class="ticks">
<li>The installer picks the build for your machine and the latest release, betas included: macOS on Apple silicon or Intel, Linux on x64 or arm64. Windows is not supported.</li>
<li>It checks the download against the release's SHA-256 checksums, and checks their signature too when <code>minisign</code> is installed. <code>AURELION_REQUIRE_SIGNATURE=1</code> refuses to install without it.</li>
<li>It puts <code>aurelion</code> in <code>~/.local/bin</code>, with no <code>sudo</code>, and adds that folder to your <code>PATH</code> when it is missing.</li>
<li>Release builds need a license key: run <code>aurelion activate &lt;key&gt;</code> once per machine. Then start <code>aurelion</code> in a project, and the setup wizard connects a model. <code>aurelion update</code> installs the newest release whenever you like. <a href="docs/getting-started/">Getting started</a> walks you through it.</li>
</ul>

<h2 class="sec"><span aria-hidden="true">// </span>SYSTEMS</h2>

<div class="sys">
<div class="x"><h3>{% include zp-icon.html i="layout-dashboard" %} COCKPIT TUI</h3><p>Every tool call is a row you can open. Four layouts, a flow view, eight themes.</p><a class="more" href="docs/cockpit/">The cockpit</a></div>
<div class="x"><h3>{% include zp-icon.html i="arrow-back-up" %} TOTAL UNDO</h3><p>Every turn is snapshotted. One key puts the files back.</p><a class="more" href="docs/undo-and-review/">Undo and review</a></div>
<div class="x"><h3>{% include zp-icon.html i="circle-check" %} SELF-CHECKING</h3><p>Runs your project's checks after a turn, and fixes what breaks.</p><a class="more" href="docs/undo-and-review/#checks-after-a-turn">Checks after a turn</a></div>
<div class="x"><h3>{% include zp-icon.html i="users-group" %} AGENT SQUADRONS</h3><p>Subagents, parallel workers, debate and swarm.</p><a class="more" href="docs/agents/">Agents</a></div>
<div class="x"><h3>{% include zp-icon.html i="bolt" %} ANY MODEL</h3><p>Your Claude subscription, API keys, local models, fallbacks.</p><a class="more" href="docs/models/">Models and providers</a></div>
<div class="x"><h3>{% include zp-icon.html i="world" %} EVERYWHERE</h3><p>Chat apps, cron, headless runs, your editor.</p><p class="more"><a href="docs/automation/">Automation</a> · <a href="docs/serve-and-chat/">Serve and chat</a> · <a href="docs/editors-and-devices/">Editors</a></p></div>
</div>

<h2 class="sec"><span aria-hidden="true">// </span>COCKPIT SCREENS</h2>

<figure class="capture">
<a href="/assets/svg/captures/turn.svg"><img src="/assets/svg/captures/turn.svg" alt="A finished turn in the cockpit: the prompt, the snapshot row, an Edit and a Bash row, the checks after the edit and the VERIFIED chip"></a>
<figcaption>A turn the checks verified · the snapshot row is its undo point</figcaption>
</figure>

<div class="captures">
<figure class="capture">
<a href="/assets/svg/captures/approval.svg"><img src="/assets/svg/captures/approval.svg" alt="ASK mode: a Bash call waits for approval, and its card waits in the Inbox"></a>
<figcaption>ASK mode · go vet waits in the Inbox</figcaption>
</figure>
<figure class="capture">
<a href="/assets/svg/captures/review.svg"><img src="/assets/svg/captures/review.svg" alt="The review pane beside the stream, on an edit of flight.go"></a>
<figcaption>The review pane · accept, revert or comment per hunk</figcaption>
</figure>
<figure class="capture">
<a href="/assets/svg/captures/flow.svg"><img src="/assets/svg/captures/flow.svg" alt="The flow view: the map, the readouts, the timeline and the event log"></a>
<figcaption>F8 · the flow view of a session</figcaption>
</figure>
<figure class="capture">
<a href="/assets/svg/captures/cockpit.svg"><img src="/assets/svg/captures/cockpit.svg" alt="The cockpit layout with its icon rail and the Ctx tab open"></a>
<figcaption>The cockpit layout · the Ctx tab open</figcaption>
</figure>
</div>

<h2 class="sec"><span aria-hidden="true">// </span>FLIGHT MODES<span class="js-only"> · click one</span></h2>

<div class="modes" role="group" aria-label="Flight modes">
<button class="mode" type="button" data-mode="plan" aria-pressed="false"><b>PLAN</b>look, don't touch</button>
<button class="mode" type="button" data-mode="ask" aria-pressed="false"><b>ASK</b>you hold the key</button>
<button class="mode" type="button" data-mode="auto" aria-pressed="true"><b>AUTO</b>full throttle</button>
</div>

<div class="mode-tx" aria-live="polite">
<p data-mode="plan"><b>PLAN</b> Reads and plans only. The tools that write files or run code are off, and the plan lands in <code>.aurelion/PLAN.md</code>.</p>
<p data-mode="ask"><b>ASK</b> Every tool call that isn't read-only waits for your answer. For a codebase you don't know yet.</p>
<p data-mode="auto" class="on"><b>AUTO</b> The default. Most reads and edits run, and a risky command waits on a card: <code>y</code> once, <code>A</code> always, <code>n</code> deny.</p>
</div>

<p class="lead"><code>Shift+Tab</code> cycles the modes. A fourth, BYPASS, skips the questions but never the refusals, and starts only when you ask for it. <a href="docs/modes-and-safety/#the-four-modes">Modes and safety</a> has the details.</p>

<h2 class="sec"><span aria-hidden="true">// </span>DOCS DIRECTORY</h2>

<nav aria-label="Docs">
<ul class="docs">
<li><a href="docs/getting-started/">{% include zp-icon.html i="chevron-right" %} Getting started<span>Install, activate, first turn</span></a></li>
<li><a href="docs/cockpit/">{% include zp-icon.html i="chevron-right" %} The cockpit<span>Stream, rail, layouts, themes</span></a></li>
<li><a href="docs/keys/">{% include zp-icon.html i="chevron-right" %} Keys<span>Every key, and when it acts</span></a></li>
<li><a href="docs/commands/">{% include zp-icon.html i="chevron-right" %} Commands<span>Every slash command</span></a></li>
<li><a href="docs/modes-and-safety/">{% include zp-icon.html i="chevron-right" %} Modes &amp; safety<span>Approvals, trust, sandbox</span></a></li>
<li><a href="docs/undo-and-review/">{% include zp-icon.html i="chevron-right" %} Undo &amp; review<span>Snapshots, review, checks</span></a></li>
<li><a href="docs/models/">{% include zp-icon.html i="chevron-right" %} Models<span>84 providers, plans, fallbacks</span></a></li>
<li><a href="docs/tools/">{% include zp-icon.html i="chevron-right" %} Tools<span>Built-in, MCP, LSP, plugins</span></a></li>
<li><a href="docs/agents/">{% include zp-icon.html i="chevron-right" %} Agents<span>Subagents, workers, swarms</span></a></li>
<li><a href="docs/memory-and-context/">{% include zp-icon.html i="chevron-right" %} Memory<span>Memory, compaction, skills</span></a></li>
<li><a href="docs/automation/">{% include zp-icon.html i="chevron-right" %} Automation<span>Headless, CI, cron, kanban</span></a></li>
<li><a href="docs/serve-and-chat/">{% include zp-icon.html i="chevron-right" %} Serve &amp; chat<span>Daemon, chats, webhooks, API</span></a></li>
<li><a href="docs/editors-and-devices/">{% include zp-icon.html i="chevron-right" %} Editors<span>ACP, MCP server, nodes</span></a></li>
<li><a href="docs/configuration/">{% include zp-icon.html i="chevron-right" %} Configuration<span>Layers and every setting</span></a></li>
<li><a href="docs/troubleshooting/">{% include zp-icon.html i="chevron-right" %} Troubleshooting<span>Doctor, logs, crashes</span></a></li>
<li><a href="docs/security-and-releases/">{% include zp-icon.html i="chevron-right" %} Security<span>Signing, updates, your data</span></a></li>
</ul>
</nav>

<h2 class="sec"><span aria-hidden="true">// </span>SIGNED RELEASES</h2>

<div class="panel prose">
<p>Every release carries <code>sha256sums.txt</code>, the SHA-256 checksum of each build. Every release since v0.6.12-beta also carries its minisign signature, made with AURELION's release key. The signature names the release, so an old build can't pass for a new one. Releases up to v0.6.11-beta came before signing, and <code>aurelion update</code> never installs them.</p>
<pre><code>RWTYDrAGVq6o7mUSXgXddDuctD0V0t/mDm6EqcH8OStUBPTFkvsRzAeu</code></pre>
<ul>
<li><code>aurelion update</code> checks the signature against the key built into AURELION before it trusts any checksum, and refuses a release signed with any other key. If a step fails, your binary stays as it was.</li>
<li>A plain <code>aurelion</code> launch looks for a new release at most once a day, without holding up the start. <code>[update] mode</code> picks <code>notify</code> (the default), <code>auto</code> or <code>off</code>.</li>
<li>To check a download yourself:</li>
</ul>
<pre><code>minisign -V -m sha256sums.txt -P RWTYDrAGVq6o7mUSXgXddDuctD0V0t/mDm6EqcH8OStUBPTFkvsRzAeu
shasum -a 256 -c sha256sums.txt --ignore-missing   # Linux: sha256sum -c sha256sums.txt --ignore-missing</code></pre>
<p><a href="docs/security-and-releases/">Security and releases</a> explains what AURELION sends where, and how your keys are kept. The builds are on the <a href="https://github.com/zerodeity/aurelion-dist/releases">releases page</a>.</p>
</div>
