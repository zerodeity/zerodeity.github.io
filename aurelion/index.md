---
title: AURELION
hero: true
description: An AI coding agent that lives in your terminal. It plans, edits and checks its own work in one cockpit, and one key undoes a turn.
---

<nav class="cta" aria-label="Get started">
  <a class="cta-go" href="#boot-sequence">▸ Engage · install</a>
  <a href="docs/">Docs</a>
  <a href="https://github.com/zerodeity/aurelion-dist/releases">Releases</a>
  <a href="https://github.com/zerodeity/aurelion-dist">GitHub</a>
</nav>

## Boot sequence

<pre class="console" data-label="BOOT SEQUENCE · INSTALL"><span class="prompt">$</span> curl -fsSL https://raw.githubusercontent.com/zerodeity/aurelion-dist/main/install.sh | sh

  <span class="ok">AURELION</span>  <span class="dim">installer</span>

  <span class="ok">✓</span> platform   macos-arm64
  <span class="ok">✓</span> release    vX.Y.Z

  <span class="dim">downloading aurelion-macos-arm64.tar.gz</span>
  <span class="ok">✓</span> signature  verified
  <span class="ok">✓</span> checksum   verified
  <span class="ok">✓</span> installed   ~/.local/bin/aurelion

  <span class="ok">AURELION vX.Y.Z installed.</span>

  <span class="prompt">Activate</span>   aurelion activate &lt;key&gt;
  <span class="prompt">Run</span>        aurelion
  <span class="prompt">Upgrade</span>    aurelion update</pre>

The installer:

- picks the build for your machine and the latest release, betas included;
- checks the download against the release's SHA-256 checksums, and checks their signature too when `minisign` is installed. `AURELION_REQUIRE_SIGNATURE=1` refuses to install without it;
- puts `aurelion` in `~/.local/bin`, with no `sudo`, and adds that folder to your `PATH` when it is missing.

Release builds need a license key: run `aurelion activate <key>` once per machine. Then start `aurelion` in a project, and the setup wizard connects a model. `aurelion update` installs the newest release whenever you like. [Getting started](docs/getting-started.md) walks you through it.

## Systems

<div class="systems" markdown="1">

<div class="system" markdown="1">

### ◉ Cockpit TUI

Every tool call is a row you can open, and what needs you waits in one place. Four layouts, a live flow view and eight dark themes, by keyboard or mouse.

[The cockpit](docs/cockpit.md)
{: .more}

</div>

<div class="system" markdown="1">

### ⟲ Total undo

Every turn that edits starts with a snapshot. `u` puts the files back, `u` again takes the undo back, and the review pane accepts or reverts each hunk.

[Undo and review](docs/undo-and-review.md)
{: .more}

</div>

<div class="system" markdown="1">

### ✓ Self-checking

When a turn changes files in a folder you trust, AURELION runs the project's checks. A failure goes back to the model to fix, and `✓ VERIFIED` means they passed.

[Checks after a turn](docs/undo-and-review.md#checks-after-a-turn)
{: .more}

</div>

<div class="system" markdown="1">

### ⇉ Agent squadrons

Subagents work in parallel or as a graph of steps. In a repository you trust, each writer gets its own git worktree, and the changes are merged back.

[Agents](docs/agents.md)
{: .more}

</div>

<div class="system" markdown="1">

### ◈ Any model

84 providers, your Claude, ChatGPT or Copilot plan, and local models with no key. When a model is busy, your fallbacks take over.

[Models and providers](docs/models.md)
{: .more}

</div>

<div class="system" markdown="1">

### ☍ Everywhere

Headless runs and CI, scheduled jobs and a kanban board, a daemon that answers in your chat apps, and your editor over ACP.

[Automation](docs/automation.md) · [Serve and chat](docs/serve-and-chat.md) · [Editors](docs/editors-and-devices.md)
{: .more}

</div>

</div>

## Cockpit screens

<figure class="capture">
  <a href="/assets/svg/captures/turn.svg"><img src="/assets/svg/captures/turn.svg" alt="A finished turn in the cockpit: the prompt, the snapshot row, an Edit and a Bash row, the checks after the edit and the VERIFIED chip"></a>
  <figcaption>A turn the checks verified · the ⟲ snapshot row is its undo point</figcaption>
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

## Flight modes

<div class="modes" markdown="1">

<div class="mode" markdown="1">

### PLAN

Reads and plans only. The tools that write files or run code are off, and the plan lands in `.aurelion/PLAN.md`.

</div>

<div class="mode" markdown="1">

### ASK

Every tool call that isn't read-only waits for your answer. For a codebase you don't know yet.

</div>

<div class="mode" markdown="1">

### AUTO

The default. Most reads and edits run, and a risky command waits on a card: `y` once, `A` always, `n` deny.

</div>

</div>

`Shift+Tab` cycles the modes. A fourth, BYPASS, skips the questions but never the refusals, and starts only when you ask for it. [Modes and safety](docs/modes-and-safety.md#the-four-modes) has the details.

## What you can do

<div class="ops" markdown="1">

<div class="op" markdown="1">

### Watch every step

Each tool call is a row with one line of why. The rail holds the Inbox, changed files, context, jobs, models and MCP servers.

```text
/layout cockpit
```

[The cockpit](docs/cockpit.md)
{: .more}

</div>

<div class="op" markdown="1">

### Keep control

Approval cards that can't be answered by accident, trusted folders, permission rules, a bash sandbox, spend caps, and one command that stops every agent.

```text
aurelion estop "deploy window"
```

[Modes and safety](docs/modes-and-safety.md)
{: .more}

</div>

<div class="op" markdown="1">

### Take it back

`u` undoes a turn's files. `/undo` takes back the files and the conversation, and `/rewind` single file steps.

```text
/undo 2
```

[Undo and review](docs/undo-and-review.md)
{: .more}

</div>

<div class="op" markdown="1">

### Bring your model

Your Claude Pro or Max plan runs through the official Claude Code CLI. ChatGPT and Copilot plans sign in with a device code, and local servers need no key.

```text
aurelion connect claude
```

[Models and providers](docs/models.md)
{: .more}

</div>

<div class="op" markdown="1">

### Give it tools

Files, the shell, the web and your own Chrome are built in. Extension tools load when needed, and any MCP server, language server or plugin joins them.

```text
aurelion mcp install context7
```

[Tools](docs/tools.md)
{: .more}

</div>

<div class="op" markdown="1">

### Put agents to work

The lead agent hands parts of a job to subagents. `/background` gives a prompt its own worker, and `/review` has a subagent read your uncommitted changes.

```text
/background update the changelog for the last five commits
```

[Agents](docs/agents.md)
{: .more}

</div>

<div class="op" markdown="1">

### Remember

Project instructions, memory across sessions, key facts and pins that survive compaction, search over past sessions, and skills loaded only when a task calls for one.

```text
/remember the staging database is read-only
```

[Memory and context](docs/memory-and-context.md)
{: .more}

</div>

<div class="op" markdown="1">

### Run without you

One prompt from a script or CI, JSON output, batch runs, cron jobs that report to a chat, a kanban board for worker agents, and hooks.

```text
aurelion -p "fix the failing test" --max-spend 2
```

[Automation](docs/automation.md)
{: .more}

</div>

<div class="op" markdown="1">

### Answer from anywhere

`aurelion serve` answers in Telegram, Slack, Discord, Matrix, email and more, takes signed webhooks and answers phone calls. `aurelion api` serves an OpenAI-compatible API.

```text
aurelion serve --telegram
```

[Serve and chat](docs/serve-and-chat.md)
{: .more}

</div>

<div class="op" markdown="1">

### Work in your editor

Zed and other ACP editors use it as their coding agent, any MCP client can use its tools, and device nodes let it work on other machines.

```text
aurelion acp
```

[Editors and devices](docs/editors-and-devices.md)
{: .more}

</div>

<div class="op" markdown="1">

### Make it yours

Layered config, profiles for each run, your own slash commands, eight themes and a personality for the session.

```text
aurelion --profile cheap
```

[Configuration](docs/configuration.md) · [Your commands](docs/commands.md#your-own-commands) · [Personality](docs/models.md#identity-and-personality)
{: .more}

</div>

<div class="op" markdown="1">

### Fix what breaks

One command checks your setup line by line, with a fix for each problem. The log keeps every failed request, and `aurelion diagnostics` writes a redacted report to send.

```text
aurelion doctor
```

[Troubleshooting](docs/troubleshooting.md)
{: .more}

</div>

</div>

## Docs directory

<nav class="docs-dir" aria-label="Docs" markdown="1">

- [Getting started<span>Install, activate, first turn</span>](docs/getting-started.md)
- [The cockpit<span>Stream, rail, layouts, themes</span>](docs/cockpit.md)
- [Keys<span>Every key, and when it acts</span>](docs/keys.md)
- [Commands<span>Every slash command</span>](docs/commands.md)
- [Modes and safety<span>Approvals, trust, sandbox</span>](docs/modes-and-safety.md)
- [Undo and review<span>Snapshots, review, checks</span>](docs/undo-and-review.md)
- [Models and providers<span>84 providers, plans, fallbacks</span>](docs/models.md)
- [Tools<span>Built-in, MCP, LSP, plugins</span>](docs/tools.md)
- [Agents<span>Subagents, workers, swarms</span>](docs/agents.md)
- [Memory and context<span>Memory, compaction, skills</span>](docs/memory-and-context.md)
- [Automation<span>Headless, CI, cron, kanban</span>](docs/automation.md)
- [Serve and chat<span>Daemon, chats, webhooks, API</span>](docs/serve-and-chat.md)
- [Editors and devices<span>ACP, MCP server, nodes</span>](docs/editors-and-devices.md)
- [Configuration<span>Layers and every setting</span>](docs/configuration.md)
- [Troubleshooting<span>Doctor, logs, crashes</span>](docs/troubleshooting.md)
- [Security and releases<span>Signing, updates, your data</span>](docs/security-and-releases.md)

</nav>

## Platforms

| System | Processor | Release build |
| --- | --- | --- |
| macOS | Apple silicon (arm64) | `aurelion-macos-arm64.tar.gz` |
| macOS | Intel (x64) | `aurelion-macos-x64.tar.gz` |
| Linux | x64 | `aurelion-linux-x64.tar.gz` |
| Linux | arm64 | `aurelion-linux-arm64.tar.gz` |

The Linux builds are self-contained, so they run in any Linux image, containers included. Windows is not supported. [Getting started](docs/getting-started.md#install) covers the installer's options.

## Signed releases

<div class="hud-panel" markdown="1">

Every release carries `sha256sums.txt`, the SHA-256 checksum of each build. Every release since v0.6.12-beta also carries its minisign signature, made with AURELION's release key. The signature names the release, so an old build can't pass for a new one. Releases up to v0.6.11-beta came before signing, and `aurelion update` never installs them.

```text
RWTYDrAGVq6o7mUSXgXddDuctD0V0t/mDm6EqcH8OStUBPTFkvsRzAeu
```

- `aurelion update` checks the signature against the key built into AURELION before it trusts any checksum, and refuses a release signed with any other key. If a step fails, your binary stays as it was.
- A plain `aurelion` launch looks for a new release at most once a day, without holding up the start. `[update] mode` picks `notify` (the default), `auto` or `off`.
- To check a download yourself:

```sh
minisign -V -m sha256sums.txt -P RWTYDrAGVq6o7mUSXgXddDuctD0V0t/mDm6EqcH8OStUBPTFkvsRzAeu
shasum -a 256 -c sha256sums.txt --ignore-missing   # Linux: sha256sum -c sha256sums.txt --ignore-missing
```

[Security and releases](docs/security-and-releases.md) explains what AURELION sends where, and how your keys are kept.

</div>

![](/assets/svg/divider.svg)
