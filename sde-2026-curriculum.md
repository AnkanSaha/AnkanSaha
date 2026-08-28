# SDE 2026 Interview Prep Curriculum

> **Target role:** SDE / Generalist Backend · **Duration:** 8 weeks · **Daily minimum:** 25 min

**Core principles** (the break-proof design):

1. **One slot, not an effort goal** — fixed time every day (e.g. 08:00–08:30), not "study 2 hours."
2. **One skill per week** — never rotate topics daily.
3. **Never-miss-twice rule** — one missed day is noise; *two in a row* is the real failure.
4. **Bare-minimum fallback** — the smallest version of each day still counts.
5. **Minimum effective dose** — 25 min/day distributed beats 4-hour weekend binges.
6. **Project depth carries the interview** — prep is a framework, not a mountain.
7. **Pressure/situational handling comes from MOCKS (reps), not studying.**

---

## Subjects & Depth Bars

### 1. DSA — High
- **Depth:** arrays, strings, linked lists, hash maps, two-pointers, sliding window, trees/graphs (BFS/DFS), binary search, intro DP. Mostly Easy + Medium.
- **Count:** 80–120 problems (60% easy, rest medium). **NOT 500.** Skip hard problems.
- **Weeks:** 1, 2, 4

### 2. SQL — High
- **Depth:** joins, subqueries, GROUP BY/HAVING, WHERE vs HAVING, **window functions** (ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, SUM OVER), **CTEs**, normalization (1NF/2NF/3NF — decompose on whiteboard), basic indexing + EXPLAIN.
- **Note:** Window functions tested in ~70% of SQL rounds. This is the main gap; ~1 focused week fixes it. Skip recursive CTEs + DBMS trivia.
- **Week:** 3

### 3. HLD (System Design) — High
- **Depth:** repeatable framework + concepts + 2–3 deep dives. Converts "knowing 60% of the terms" into connecting sentences with decisions.
- **Time budget (45 min):** clarify 5 / estimate 5 / API+data 5 / architecture 15 / deep dive 10 / tradeoffs+10x 5.
- **Concepts:** load balancing, caching, DB scaling (replicas/sharding), message queues, consistency/CAP, rate limiting, idempotency, failure modes, observability.
- **Decision-language:** "We put a cache here because reads are 95% at 20ms p99; we use a queue there because the write path can be async."
- **Weeks:** 5, 6, 8

### 4. LLM / AI Awareness (2026 SDE addition) — High
> **⚠️ UNIQUE STRENGTH — this is your #1 2026 differentiator, not a topic to skim.** You have *already built* MCP servers (AxioDB MCP = 32 tools, NexoralDNS MCP, EdgeBalancer MCP + AI assistant) and used LangChain.js + agentic workflows. That's *executed* AI-engineering work — the rarest, most in-demand 2026 asset. Lead interviews with it as a flagship project, not a footnote.

- **MCP — HIGH (project depth — you've BUILT 3 MCP servers):** what it is, why it standardizes the tool/context interface, how tools + context + resources work. This is a flagship interview story for you.
- **Tool calling — HIGH (project depth — you've shipped it):** how the LLM picks/calls a function, structured outputs, when to trust tool vs model. Frame from your own MCP/AI-assistant work.
- **RAG — HIGH (design depth):** retrieval → vector store → context → generation. Plus system side: caching responses, fallback when model fails, async/queued LLM calls, latency/cost.
- **Model routing — MEDIUM (design depth):** routing a prompt by cost/latency/capability (a router component).
- **Weeks:** 1 (project framing) + 6 (design depth)

**Priority for you:** MCP & Tool-calling (flagship projects) > RAG (design) > Model routing.

### 5. LLD (Object/Class Design) — Medium
- **Depth:** SOLID, core patterns (Strategy, Factory, Observer, Singleton, Builder), class/interface design, classic problems.
- **Classic problems:** parking lot, rate limiter, LRU cache, elevator/vending machine, ATM, Tic-Tac-Toe/Snake & Ladders, booking system.
- **Week:** 7

### 6. Project Walkthrough — High
- **NOT learning** — you already built the projects. Record yourself once (~2–3 hours).
- **Structure:** Problem (15s) → key decision + tradeoff (40s) → what you'd change (15s). Then stop; let them drive.
- **Projects to walk through:**
  - **MCP servers (AxioDB 32 tools / NexoralDNS / EdgeBalancer)** — your FLAGSHIP 2026 differentiator. Lead with these for AI-adjacent questions.
  - AxioDB (embedded DB, SIGKILL crash recovery, 10 test suites)
  - NexoralDNS (12.7K QPS Go rewrite, goroutines/channels)
  - EdgeBalancer (7 routing strategies, health checks, auto-failover)
- **Scale story (hoichoi, 10M users):** you worked on Bengali's biggest OTT with 10M+ users. Mine this into an HLD answer + STAR story (real production scale outside your own projects).
- **Follow-ups to prep:** "Why X over Y?", "What would you change?", "What broke/hardest bug?", "How does it scale at 10x?"
- **Week:** 1

### 7. Go — Working Knowledge (Medium)
- **Depth:** syntax/types, structs/interfaces, maps/slices, error handling + wrapping, concurrency (goroutines, channels, sync, context), and *why* Go (concurrency, single binary, stdlib, networking).
- **Anchor:** re-explain NexoralDNS goroutines/channels — that's your evidence.
- **Weeks:** 1, 2, 4, 5

### 8. Behavioral / Pressure — High
- **NOT a subject** — built from reps (mocks).
- **STAR split:** Situation 15% / Task 15% / Action 50% / Result 20%. Use "I" not "we." End with a number. 60–90 sec.
- **Stories:** conflict, failure, initiative, pressure/deadline, leadership/influence.
- **Extra, high-leverage stories to prep:**
  - **Scale story (hoichoi, 10M users):** a real production-pressure/initiative story from Bengali's biggest OTT. Use for "pressure," "impact," and HLD-scale questions.
  - **AI/engineer story (MCP servers):** you shipped MCP servers + an AI assistant with 295 agent runs — a strong *initiative/innovation* answer that also showcases your differentiator.
- **Week:** 8

---

## 8-Week Plan

### Week 1 — Foundation + Project Narratives + DSA Start
**Focus:** project explain (once) + Go working knowledge + two-pointers/sliding window

| Day | Slot |
|---|---|
| Mon | DSA: 2–3 two-pointer problems |
| Tue | DSA: 2–3 two-pointer problems |
| Wed | PROJECT: record AxioDB walkthrough + **MCP-server framing (your differentiator)** |
| Thu | PROJECT: record NexoralDNS + EdgeBalancer |
| Fri | AI: frame your MCP servers (AxioDB 32 tools / EdgeBalancer AI assistant) as one clean 60-sec story |
| Sat | DSA: sliding window problems |
| Sun | Weekly review + pick next week focus |

> **Fallback:** solve ONE easy two-pointer problem OR read 50 lines of NexoralDNS.

### Week 2 — DSA Trees & Graphs
**Focus:** trees + graphs (BFS/DFS) + Go concurrency folded in

| Day | Slot |
|---|---|
| Mon | DSA: tree traversal |
| Tue | DSA: tree depth/height |
| Wed | DSA: BFS problems |
| Thu | DSA: DFS problems |
| Fri | GO: goroutines + channels mini-exercise |
| Sat | DSA: graph adjacency + traversal |
| Sun | SQL warm-up: review joins |

> **Fallback:** solve ONE tree traversal problem.

### Week 3 — SQL (the main gap)
**Focus:** window functions + CTE + normalization

| Day | Slot |
|---|---|
| Mon | SQL: joins + GROUP BY/HAVING vs WHERE |
| Tue | SQL: subqueries + CTEs |
| Wed | SQL: ROW_NUMBER / RANK / DENSE_RANK |
| Thu | SQL: LAG/LEAD + SUM OVER |
| Fri | SQL: normalization 1NF/2NF/3NF |
| Sat | SQL: indexing + basic EXPLAIN |
| Sun | SQL: top-N per group, dedup, running total |

> **Fallback:** write ONE window function query (ROW_NUMBER with PARTITION BY).

### Week 4 — DSA DP Basics + Binary Search
**Focus:** foundational DP + binary search + Go fold-in

| Day | Slot |
|---|---|
| Mon | DSA: binary search |
| Tue | DSA: DP intro |
| Wed | DSA: 1D DP |
| Thu | DSA: grid DP |
| Fri | GO: error handling + structs/interfaces |
| Sat | DSA: revision of weak patterns |
| Sun | HLD warm-up: read one architecture breakdown |

> **Fallback:** solve ONE binary search problem.

### Week 5 — HLD Framework + Core Concepts
**Focus:** learn the framework + connect terms into decisions

| Day | Slot |
|---|---|
| Mon | HLD: 6-step framework + time budget |
| Tue | HLD: load balancing + caching |
| Wed | HLD: database scaling |
| Thu | HLD: queues + async |
| Fri | HLD: consistency/CAP + rate limiting + idempotency |
| Sat | HLD: design URL shortener out loud |
| Sun | HLD: design chat app out loud |

> **Fallback:** name the 6-step framework + one tradeoff for 3 concepts.

### Week 6 — HLD Deep Dive + LLM/AI Awareness
**Focus:** deeper HLD + the 2026 AI-design layer

| Day | Slot |
|---|---|
| Mon | HLD: design news feed |
| Tue | HLD: design notification/file-storage |
| Wed | AI: RAG (retrieval/vector store/context/generation) |
| Thu | AI: RAG system side + tool calling |
| Fri | AI: model routing + MCP (awareness only) |
| Sat | HLD: design a RAG pipeline for doc-search (combined) |
| Sun | HLD: failure modes + 10x scale stress-test |

> **Fallback:** read ONE RAG system-design section + one-sentence summary.

### Week 7 — LLD (Object/Class Design)
**Focus:** SOLID + patterns + classic problems

| Day | Slot |
|---|---|
| Mon | LLD: SOLID principles |
| Tue | LLD: Strategy + Factory patterns |
| Wed | LLD: design parking lot |
| Thu | LLD: design rate limiter + LRU cache |
| Fri | LLD: design elevator / vending machine |
| Sat | LLD: design tic-tac-toe / booking system |
| Sun | LLD: revise patterns + one classic problem |

> **Fallback:** write classes + methods for ONE classic problem.

### Week 8 — Mocks + Full-Loop Integration
**Focus:** pressure handling via reps — 2–3 real mocks + project walkthroughs under pressure

| Day | Slot |
|---|---|
| Mon | MOCK 1: live coding / DSA |
| Tue | MOCK 2: system design |
| Wed | MOCK 3: behavioral / project walkthrough |
| Thu | Review mock feedback + patch weakest area |
| Fri | Repeat 1–2 weak mocks |
| Sat | Full mock loop: DSA + HLD + behavioral back-to-back |
| Sun | Rest + final gap review |

> **Fallback:** one 30-min recorded self-answer on a project.

---

## Completion Checklist

- [ ] DSA: 80–120 problems (easy + medium)
- [ ] SQL: can write a 3-stage CTE + window function (top-N per group) without notes
- [ ] HLD: can run the 6-step framework out loud on 3 systems
- [ ] HLD: can name a tradeoff for every core concept
- [ ] RAG: can design a RAG pipeline as a component (caching, fallback, cost)
- [ ] LLD: can design 2–3 classic problems with SOLID
- [ ] Project: recorded walkthroughs on all 3 projects + **MCP-server/AI-assistant story**
- [ ] **AI differentiator: can explain your 3 MCP servers + EdgeBalancer AI assistant in one clean minute (this is your edge over other SDE candidates)**
- [ ] **Hoichoi: one STAR scale story from the 10M-user platform**
- [ ] Behavioral: 5 STAR stories with "I" + a number
- [ ] Go: can explain NexoralDNS goroutines/channels (working knowledge)
- [ ] Completed 2–3+ real mocks before first onsite

---

## Application Strategy

- **Gap framing (90/10):** "My role was eliminated in the March reduction. I've spent the time going deep on distributed systems and Go." — one sentence, then pivot. Don't apologize.
- **Referral method:** build rapport 30–60s first, then ask. Give exact role + Job ID, reference their work, offer an out, hand a 3-line paste-ready summary. Target alumni + L4–L6 engineers 1–3 yrs in.
- **Role note:** you chose SDE — broader and more saturated than DB/infra. **Your distinguishing edge vs other SDE candidates is THREE-FOLD:** (1) you've built MCP servers + AI tooling (rarest 2026 asset), (2) Go + database depth, (3) real 10M-user platform scale at hoichoi. Lead with all three.
- **When to start applying:** NOW, in parallel with prep. Readiness comes from reps, not "feeling ready." Do mocks before your first onsite.
