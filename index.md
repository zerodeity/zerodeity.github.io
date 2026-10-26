---
title: Zero Prime
description: Architecting autonomous intelligence for the post-human era.
---

<header class="zp-head">
  <img class="zp-banner" src="{{ '/assets/svg/zeroprime-header.svg' | relative_url }}" width="1280" height="300" alt="">
  <div class="zp-text">
    <h1>ZERO PRIME</h1>
    <p class="zp-handle">@ZERODEITY · OPERATOR</p>
    <p class="zp-bio">Architecting autonomous intelligence for the post-human era.</p>
    <p class="zp-stat">STATUS <b>ONLINE</b> · FIELD <b>8+ YRS</b> · PROJECTS <b>{{ site.data.projects.size | prepend: '00' | slice: -2, 2 }}</b></p>
  </div>
</header>

## whoami

<pre class="console" data-label="TERMINAL · WHOAMI"><span class="prompt">$</span> whoami
zero prime

<span class="prompt">$</span> id
uid=0(zero) gid=0(red-team) groups=offensive-security,ai-systems,builders

<span class="prompt">$</span> cat /etc/motd
<span class="ok">Intelligence should never exist inside one mind.</span>

<span class="prompt">$</span> finger zero
<span class="dim">real name:</span>   classified
<span class="dim">location:</span>    wherever the signal is
<span class="dim">status:</span>      building</pre>

## Dossier

<div class="hud-panel" markdown="1">

Zero Prime has spent more than eight years breaking into systems for a living, with permission. Red team, bug bounty, adversary simulation: if it runs on a network, it has been tested from the wrong side.

Now the work turns to autonomous intelligence: AI that thinks like an attacker and builds like an architect. AURELION is the first system out of the lab.

</div>

## Field record

<div class="hud-panel" markdown="1">

- **8+ years** in offensive security, on web, mobile and network targets.
- **Critical findings** credited by some of the world's biggest tech companies.
- **Operator** in a private, invite-only red-team network.
- **+45% detection** from AI-driven testing methods built in the field.
- **−60% vulnerabilities after release** where secure-by-design took hold.
- **15+ organisations'** development teams trained to write code that holds.
- **Mentor** to the next generation of operators.

</div>

## Capabilities

<div class="systems" markdown="1">

<div class="system" markdown="1">

### ⚔ Offensive security

Web, mobile and network. Black, grey and white box. The flaws automated scanners walk past.

</div>

<div class="system" markdown="1">

### ⌬ Code and reverse engineering

Source review, binaries and debuggers, and proof-of-concept exploits that make the risk impossible to ignore.

</div>

<div class="system" markdown="1">

### ◉ AI systems

Autonomous agents, machine learning for threat detection, AI-assisted testing. AURELION is the flagship.

</div>

<div class="system" markdown="1">

### ◈ Adversary simulation

OSINT, social engineering and red-team operations that test people as well as machines.

</div>

<div class="system" markdown="1">

### ⟁ Languages

Python, Rust, C and C++, C#, Java, JavaScript, PHP, Bash.

</div>

<div class="system" markdown="1">

### ▣ Platforms

Linux, macOS and Windows: whatever the target runs.

</div>

</div>

## Projects

<div class="projects">
{%- for p in site.data.projects %}
  <article class="project-card">
    <h3>{{ p.name }}</h3>
    <p>{{ p.tagline }}</p>
    <ul class="tags">
{%- for t in p.tags %}
      <li>{{ t }}</li>
{%- endfor %}
    </ul>
    <ul class="links">
      <li><a href="{{ p.links.website }}">Website</a></li>
      <li><a href="{{ p.links.install }}">Install</a></li>
      <li><a href="{{ p.links.docs }}">Docs</a></li>
      <li><a href="{{ p.links.releases }}">Releases</a></li>
    </ul>
  </article>
{%- endfor %}
  <div class="project-slot">[ NEXT PROJECT SLOT ]</div>
</div>

## Transmission log

<p class="zp-log" markdown="0"><b>AURELION v0.10.1-beta</b> · release binaries no longer show how the code is laid out<br>
<b>AURELION v0.10.0-beta</b> · the cockpit redesign: tabbed rail, undo for every turn, checks after each turn</p>
