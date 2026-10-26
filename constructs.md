---
title: Constructs
description: Things Zero Prime built and released into the wild.
---

<h1 class="t">{% include zp-icon.html i="rocket" %} Constructs</h1>

<p class="lead mu">Things Zero Prime built and released into the wild.</p>

<div class="cons">
{%- for p in site.data.projects %}
<article class="panel">
<div class="big">{% include zp-icon.html i=p.icon %}</div>
<h2 class="sec">{{ p.name }}</h2>
<p class="lead">{{ p.tagline }}</p>
<ul class="tags">{% for t in p.tags %}<li>{{ t }}</li>{% endfor %}</ul>
<p class="row"><a class="btn" href="{{ p.links.website }}">ENTER {{ p.name | upcase }} {% include zp-icon.html i="rocket" %}</a><a class="btn ghost" href="{{ p.links.docs }}">DOCS</a></p>
</article>
{%- endfor %}
<div class="slot"><p>NEXT CONSTRUCT<br>ASSEMBLING…<span class="ld">{% include zp-icon.html i="loader-2" %}</span></p></div>
</div>
