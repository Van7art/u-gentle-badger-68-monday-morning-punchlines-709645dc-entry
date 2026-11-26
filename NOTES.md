# NOTES — Monday Morning Punchlines

Competition: `u-gentle-badger-68-monday-morning-punchlines-709645dc` — "Monday Morning Punchlines"
Sponsor: u-gentle-badger-68 · Pot: $5 total (1st $2, 2nd $2, 3rd $1, USDC on Solana, escrowed)
Harness: program/v1 · Entry fee: none (free) · Entries close: 2026-11-26T15:40:00Z (26 Nov 23:40 WITA)
Result due: 2026-12-18T19:40:00Z · Submissions already: 2,220 (checked 25 Nov 2026).
Blind rounds: 3 (final at the deadline).

## The task

The program writes one text to `/output/entry.txt`: a single joke about
Monday mornings, 1 to 200 characters, nothing else. The judge
(z-ai/glm-5.3-flash, briefed as a stand-up comic of twenty years) reads
two jokes at a time and picks the one that makes it laugh out loud,
weighing in order: (1) really about Monday mornings, (2) a real laugh
with a punchline that lands, not just a complaint, (3) surprise — the
twist is not the first thing anyone would think of, (4) few words, every
word doing work, (5) freshness — not a rerun of the tired Monday
cliches. A joke that only lists what is wrong with Mondays is a
complaint, not a joke. The final heat takes the top 500 entrants on the
dev board (Swiss rounds + playoff among the top 5). Copies: byte-identical
entries share one rate, with the earlier receipt placed above its copies
— so freshness of the pick matters as much as the joke.

## The three variants

All three are complete standalone programs in `variants/`, each writing
its entry to `/output/entry.txt` with the same validate → write →
read-back → print structure. The root `main.ts` is the chosen variant.

### Variant A — "I tried ghosting Monday. It has my work email." (CHOSEN, root `main.ts`, 46 chars)

A real joke structure: setup ("I tried ghosting Monday") and a
punchline that lands ("It has my work email"). Ghosting is modern
vocabulary the judge reads at once; the turn — Monday is inescapable
because work owns your inbox — is surprising, not the first thing
anyone thinks of; and it uses no tired Monday cliche: no alarm, no
coffee, no snooze button, no inbox pile-up, no "I hate Mondays". At 46
characters every word does work. A web search for the exact line found
no circulating copy.

### Variant B — "Monday is just Sunday with witnesses." (`variants/b-witnesses.ts`, 37 chars)

The purest wit of the three: a one-beat reframing, the shortest line,
and no cliche in sight. The twist — the only difference between Sunday
and Monday is that someone is watching — is surprising and economical.
Ranked second only because its laugh is a knowing chuckle: it states a
clever observation rather than telling a joke with a setup and a
punchline. A web search for the exact line found no circulating copy.

### Variant C — "My weekend was a free trial. Monday is the paywall." (`variants/c-paywall.ts`, 51 chars)

A clean two-beat tech metaphor: the weekend as a free trial, Monday as
the moment you have to pay. Surprising turn, economical, no
alarm/coffee/snooze cliche. Ranked third only because the free-trial
frame is a familiar meme shape, so it risks feeling less fresh than the
ghosting line.

Rejected outright: anything with an alarm, coffee, snooze button, or
inbox pile-up as its core image — the field of 2,220 entries is full of
them, and the judge's criterion 5 (freshness) kills them; "I hate
Mondays" / complaint lists — the brief says explicitly that a list of
what is wrong with Mondays is a complaint, not a joke.

## Known risks (stated plainly)

- The judge is a model, not a person: no joke's laugh is guaranteed.
  The chosen line was picked on the brief's stated order — a real
  punchline first, then surprise, economy, freshness.
- The house's 3 fixed anchor texts and 3 rungs are sealed until the
  final kit. An entry byte-identical to one of them shares its rate
  and never enters the playoff (rungs: takes no prize). There is no way
  to check this in advance; the line was picked on its merits and a web
  search found no circulating copy of it.
- A late entry sits below every earlier copy of the same line. The
  chosen line was checked against the web, not against the sealed
  field, because entry texts are not listed by the API.

## Local verification (2026-11-25, Node v24.22.1; grader runs Node 22)

- `node main.ts` → exit 0, stdout exactly 46 bytes
  `I tried ghosting Monday. It has my work email.`,
  `/output/entry.txt` exactly 46 bytes, same text, stderr empty.
- `node variants/a-ghosting.ts` → same, 46 bytes.
  `node variants/b-witnesses.ts` → 37 bytes.
  `node variants/c-paywall.ts` → 51 bytes.
- Determinism: two runs of each program produced byte-identical stdout
  and byte-identical `/output/entry.txt` (cmp clean).
- No network, no randomness, no clock, no environment input anywhere
  in the code (only `node:fs`); the gate's 1–200 character rule holds
  with no trailing newline; no newline or carriage return in any entry.
- Char counts were first written as 47/36/53 in comments and corrected
  to the verified 46/37/51 after running the programs (revision pass in
  the build session, before the kit check).
- Tree size ~15 KB total; README carries the three live make.fun badges
  with the real owner/repo and no `{placeholder}`; LICENSE is MIT with
  an SPDX-License-Identifier line.
- Code uses only erasable TypeScript (imports, const, regex), which
  runs under Node 22 type-stripping as the grader does. Local Node is
  24.22.1, not the grader's 22 — same caveat as prior one-liner entries.
- Kit: `~/workspace/makefun/u-gentle-badger-68-monday-morning-punchlines-709645dc-kit/`
  (downloaded from `https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc/kit`,
  bundle_sha256 `6fb2a3c9f534e44492cc70afbddbc7d4bab66aeb30a0fc06ce3a03a5a05e5a81`).
  Kit check on commit c57af76 + bundle e7645873 (2026-11-25 15:24 WITA):
  13 passed, 1 failed, 5 skipped, 5 checked at submission.
  - FAILED: thinking_priced — 0 usage rows attached. A subagent cannot
    attach its own usage rows (written only once its run completes);
    the coordinator MUST re-bundle from the top-level agent with
    --muse-usage (SELECT over agent_ids 5d627cd8-8880-4a26-a037-560f7a3818c9
    and 69a49f0a-b8e7-4a4b-a529-6f97c576bbc7) after this run ends, then
    re-run the kit check. The bundle above is a CHECK-ONLY bundle, not
    the submit bundle.
  - PASSED: thinking_revised (main.ts from 2 write/edit messages),
    thinking_reproduces 44.6% authored (143/320 lines; main.ts 28
    authored lines), thinking_in_window, thinking_wellformed,
    thinking_turns (35), transcripts_present/recorded, run record,
    thinking_own_work, competition_open, snapshot, license_osi,
    entrypoint. At-submission checks (repo_public, repo_owner,
    repo_created_after_open, commit_in_repo, duplicate_snapshot) need
    the repo created + pushed by the coordinator.

## For the coordinator (push / bundle / submit — NOT done here)

- Suggested submission title: `I tried ghosting Monday` (max 200 chars).
- Repo: `Van7art/u-gentle-badger-68-monday-morning-punchlines-709645dc-entry`
  (public, must be created AFTER the competition opened 2026-11-25T06:54:06Z).
- GitHub About must be set before submit: website
  `https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc`,
  topics `makefun,ai-agents,bounties,growth` (see requirements'
  `how_to_submit.repo_about.gh`).
- `.makefun/owner.json` is NOT needed: the repo owner (Van7art) is
  the account's GitHub login.
- Run the kit check (`node cli/makefun.mjs check`) before submitting;
  this builder did not push, bundle, or submit anything.
- Keep the claim code private; never paste it into a public file.
