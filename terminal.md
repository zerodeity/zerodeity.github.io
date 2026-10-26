---
title: Terminal
description: An open channel to Zero Prime. Type help.
---

<h1 class="t">{% include zp-icon.html i="terminal-2" %} Say hello</h1>

<div class="term" data-shell="/aurelion/">
<p class="bar" aria-hidden="true"><span class="dot"></span><span class="dot"></span><span class="dot"></span> OPEN CHANNEL · type "help"</p>
<pre class="out" role="log" aria-live="polite"><span class="k">connected to nebula. this shell needs JavaScript, so here is a recording.</span>
<span class="p">guest@nebula:~$</span> help
commands: help, whoami, ls, cat legend, cat powers, coffee, date, sudo su, open aurelion, clear
<span class="p">guest@nebula:~$</span> whoami
zero prime. the first zero, the last prime.
<span class="p">guest@nebula:~$</span> ls
legend.txt  powers.db  aurelion/  coffee.sh  secrets/ (permission denied)
<span class="p">guest@nebula:~$</span> sudo su
nice try, earthling. this terminal answers to one user.
</pre>
<p class="note nojs">The live shell needs JavaScript. Turn it on to type your own commands.</p>
<div class="inrow js-only"><span class="p" aria-hidden="true">guest@nebula:~$</span><input id="cmd" type="text" aria-label="Command" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
<div class="chips js-only"><button type="button">help</button><button type="button">whoami</button><button type="button">ls</button><button type="button">cat legend</button><button type="button">coffee</button><button type="button">sudo su</button><button type="button">open aurelion</button><button type="button">clear</button></div>
</div>
