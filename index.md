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
    <p class="zp-stat">STATUS <b>ONLINE</b> · PROJECTS <b>{{ site.data.projects.size | prepend: '00' | slice: -2, 2 }}</b></p>
  </div>
</header>

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
