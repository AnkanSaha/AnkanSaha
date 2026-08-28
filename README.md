<div align="center">

# Ankan Saha | Software Engineer

*Node.js · TypeScript · Go · Distributed Systems · MCP · Open Source*

**📍 Kolkata, India** | **📧 connect@ankan.in**

---

**🎯 Actively seeking Backend / SDE roles** | Open to Bangalore / Hyderabad / Delhi NCR / Remote
**📄 Resume:** [resume.ankan.in](https://resume.ankan.in/Resume_of_Ankan_Saha.pdf)

---

[![Website](https://img.shields.io/badge/-Portfolio-00ADD8?style=flat-square&logo=google-chrome&logoColor=white)](https://ankan.in)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/theankansaha)
[![GitHub followers](https://img.shields.io/github/followers/AnkanSaha?label=Followers&style=flat&logo=github)](https://github.com/AnkanSaha)
[![GitHub stars](https://img.shields.io/github/stars/AnkanSaha?label=Stars&style=flat&logo=github)](https://github.com/AnkanSaha)

</div>

## About Me

I build infrastructure tools and distributed systems. My last role was Full Stack Developer at [Hoichoi](https://hoichoi.tv), Bengali's biggest OTT platform with 10M+ users. On my own time, I maintain three open-source projects under [Nexoral](https://github.com/orgs/nexoral): an embedded database, a DNS server, and an edge infrastructure SaaS.

Most of my work starts with a problem I personally run into — then I build a proper solution and open-source it. I care about how Node.js works under the hood, DNS and networking, database internals, and building things that actually work in production.

---

## Experience

- **Full Stack Developer** · [Hoichoi](https://hoichoi.tv) · Jul 2025 – Mar 2026
- **Software Engineer** · [Openweb Solutions (Pitangent Group)](https://pitangent.com) · Sep 2024 – Jul 2025
- **Junior Software Developer** · [Excellis IT](https://excellisit.com) · Apr 2024 – Aug 2024

Full details → [resume.ankan.in](https://resume.ankan.in/Resume_of_Ankan_Saha.pdf)

---

## Technical Skills

- **Languages:** TypeScript, JavaScript, Go (working knowledge)
- **Runtime & Frameworks:** Node.js, Express.js, Fastify, NestJS, React.js, Next.js
- **Databases & Messaging:** MongoDB, PostgreSQL, Redis, RabbitMQ
- **Infrastructure:** Docker, K3s, AWS (ECS, Fargate, ECR, S3, SQS), Cloudflare Workers, Nginx, Linux, GitHub Actions
- **Architecture:** Microservices, Modular Monolith, Event-driven, REST APIs, GraphQL, WebSockets, SSE
- **AI & Agents:** LangChain.js, Model Context Protocol (MCP), Agentic Workflows
- **Testing:** Jest, Vitest, Sentry

---

## Featured Projects

### [AxioDB](https://github.com/nexoral/AxioDB) ![NPM Downloads](https://img.shields.io/npm/dy/axiodb?label=npm%20downloads%2Fyear&color=brightgreen) ![Stars](https://img.shields.io/github/stars/nexoral/AxioDB?style=social)

**The problem:** SQLite needs native C bindings — breaks Electron builds, requires `node-gyp`, platform-specific binaries. JSON files have no queries, no indexing, no crash safety. MongoDB needs a separate server process. There was no good middle ground for embedded Node.js apps.

**Why I built it:** I kept running into this exact problem — needed a database in an Electron app and every option was either too heavy or too bare. So I built the thing I actually wanted to use.

**What it does:** An embedded NoSQL database you install with `npm install axiodb` and start using. MongoDB-style queries, ACID transactions with crash recovery, built-in caching, and multi-core parallel processing.

- **NPM package** — core database + built-in web GUI + AxioDBCloud TCP client to connect to a Docker-based database remotely, `npm install axiodb` and go
- **Docker image** — containerized deployment so multiple services can share one database over the network
- **MCP server** (Docker only) — 32 tools so AI agents can query and manage the database directly
- **Go CLI** — terminal tool with interactive REPL, tab completion, export/import

**Impact:** 20K+ NPM downloads/year. Used in Electron apps, CLI tools, and local-first applications where a full database server is overkill. 10 test suites covering CRUD, transactions, aggregation, auth (GUI + TCP), TLS, crash recovery (real SIGKILL), and MCP tool confirmation.

**Tech:** TypeScript, Node.js, Fastify, Docker, Go

---

### [NexoralDNS](https://github.com/nexoral/NexoralDNS) ![Stars](https://img.shields.io/github/stars/nexoral/NexoralDNS?style=social)

**The problem:** Managing DNS across devices on a home network means editing `/etc/hosts` on every machine, no ad blocking at the network level, and no visibility into what your devices are querying. Public DNS services see everything you do.

**What it does:** A self-hosted DNS server for your LAN ([live site](https://dns.nexoral.in)). Block ads, adult content, or AI tools network-wide with one click. Create custom domains for your homelab services. Ships with an MCP server so you can manage everything through natural language.

I initially wrote the core DNS query engine in TypeScript — it was my strongest language and I wanted to get the behaviour right first. Then I rewrote it in Go for performance.

- **TypeScript version** — on this machine (Ryzen 5 5500U, 12 threads, 7.1 GiB RAM), using 9 threads for query logic, hit **8,050 QPS** under 500 concurrent clients with 0.97% packet loss
- **Go rewrite** — same machine, same 9-thread allocation, now does **12,746 QPS** at 3.8ms latency with zero dropped queries
- **Architecture** — modular monolith, all services in one process. Made sense for single-server deployment. Each module is designed to be pulled out into its own service when I need to scale

**Impact:** Redis caches 98% of lookups. Logging happens after the reply, so it never slows down your DNS. The whole thing runs on Docker on a mid-range laptop. 307 test files covering the API layer, MCP tools, Redis, RabbitMQ, auth, and access control.

**Tech:** Go, TypeScript, Fastify, Next.js, Docker, Redis, RabbitMQ, MongoDB

---

### [EdgeBalancer](https://github.com/nexoral/EdgeBalancer) ![Stars](https://img.shields.io/github/stars/nexoral/EdgeBalancer?style=social)

**The problem:** I had two free Oracle cloud servers but no load balancer. AWS ALB costs $22/mo even idle. Cloudflare's own LB costs $5/mo plus per-request fees. Nginx needs a server and config management. For a side project with barely any traffic, none of these made sense.

**What it does:** A SaaS that deploys load balancers and API gateways as Cloudflare Workers — runs at 330+ edge locations inside your own Cloudflare account. For load balancing: 7 routing strategies with health checks and auto-failover. For API gateways: path-based routing, JWT auth, caching, canary deploys, rate limiting. An AI assistant builds either from a plain English description. Ships with an MCP server, OAuth, 2FA, and a billing system.

I built it because I needed it. Before this, I deployed it on those two Oracle machines and used EdgeBalancer itself to load balance between them. Now it runs on AWS Fargate. The whole thing is a modular monolith — all services (auth, billing, worker deployment, AI) run in one Fastify process on Fargate. I chose this over microservices because with a free-tier AWS account, I only have so much to work with. When I outgrow it, each module is already cleanly separated so I can split them into independent services without rewriting.

**Production stats** ([live](https://edge.nexoral.in/stats)): 60 users, 10 load balancers, 14 API gateways, 20 origins/upstreams, 295 AI agent runs, 60 Worker scripts deployed.

**Impact:** Under 100K requests/day costs ₹0 (Cloudflare free tier). Saves 90-100% vs AWS ALB at low traffic. 30 test files covering unit tests (AI agent, encryption, JWT, worker generation, rate limiting) and integration tests (auth, sessions, load balancer deployment, Cloudflare API, passkeys, TOTP).

**Tech:** TypeScript, Fastify, Next.js, Cloudflare Workers, Redis, LangChain.js, AWS Fargate, MongoDB

---

Also: [ContainDB](https://github.com/nexoral/ContainDB) — containerized DB CLI · [ReviewBuddy](https://github.com/nexoral/ReviewBuddy) — AI PR reviewer. More at [nexoral](https://github.com/orgs/nexoral).

---

## Connect With Me

<p align="center">
<a href="https://linkedin.com/in/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="https://x.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"/></a>
<a href="mailto:connect@ankan.in"><img src="https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

---

<div align="center">

**⭐️ From [AnkanSaha](https://github.com/AnkanSaha)**

</div>
