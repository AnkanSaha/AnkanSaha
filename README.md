<div align="center">

# Ankan Saha

**Backend & Distributed Systems Engineer**  
*Node.js · TypeScript · Go · Cloudflare Workers · AWS · Network Internals*

📍 Kolkata, India | 📧 [connect@ankan.in](mailto:connect@ankan.in) | 📄 [Resume (PDF)](https://resume.ankan.in/Resume_of_Ankan_Saha.pdf)  
**Actively seeking Backend / Distributed Systems / SDE II roles** (Open to Bangalore, Hyderabad, Delhi NCR, Remote)

[![Portfolio](https://img.shields.io/badge/Portfolio-ankan.in-00ADD8?style=flat-square&logo=google-chrome&logoColor=white)](https://ankan.in)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-theankansaha-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/theankansaha)
[![GitHub followers](https://img.shields.io/github/followers/AnkanSaha?label=Followers&style=flat-square&logo=github)](https://github.com/AnkanSaha)
[![GitHub stars](https://img.shields.io/github/stars/AnkanSaha?label=Stars&style=flat-square&logo=github)](https://github.com/AnkanSaha)

</div>

---

## About Me

I build high-throughput backend services, developer infrastructure, and network tools. Most recently, I was a Full Stack Developer at [Hoichoi](https://hoichoi.tv), Eastern India's largest OTT streaming platform (10M+ users), where I migrated core web workloads to Cloudflare Workers to eliminate compute overhead and scale edge delivery.

In open source, I maintain three systems under [Nexoral](https://github.com/orgs/nexoral): an embedded ACID-compliant database, a high-QPS recursive DNS resolver, and an edge load-balancing control plane. I focus heavily on runtime internals (Node.js event loop & worker threads, Go concurrency, memory indexing) and pragmatic system design.

---

## Experience

- **Full Stack Developer** · [Hoichoi](https://hoichoi.tv) · *Jul 2025 – Mar 2026*  
  Migrated high-traffic Next.js frontends to Cloudflare Workers via OpenNext (saving $3,000/month in compute spend); built Go subscription retention flows with Churnkey webhooks and eliminated payment notification race conditions using MongoDB Change Data Capture (CDC) + SQS.
- **Software Engineer** · [Openweb Solutions (Pitangent Group)](https://pitangent.com) · *Sep 2024 – Jul 2025*  
  Engineered RTSP camera stream processing and WebSocket telemetry in Node.js for an AI CCTV platform; established CI/CD and autoscaling on AWS ECS/Fargate.
- **Junior Software Developer** · [Excellis IT](https://excellisit.com) · *Apr 2024 – Aug 2024*  
  Stabilized MQTT telemetry across 200+ IoT smart locks using exponential backoff reconnection; optimized monorepo CI builds using path-based change detection.

Full details → [resume.ankan.in](https://resume.ankan.in/Resume_of_Ankan_Saha.pdf)

---

## Featured Systems

### [AxioDB](https://github.com/nexoral/AxioDB) — Zero-Dependency Embedded Database for Node.js
![NPM Downloads](https://img.shields.io/npm/dy/axiodb?label=npm%20downloads%2Fyear&color=brightgreen) ![Stars](https://img.shields.io/github/stars/nexoral/AxioDB?style=social) ![CI](https://img.shields.io/github/actions/workflow/status/nexoral/AxioDB/Push.yml?branch=main&label=tests&logo=githubactions&logoColor=white)

**The Problem:** SQLite requires native C bindings, creating platform-specific compile issues in Electron apps and requiring `node-gyp`. Raw JSON storage lacks indexing, transactions, and crash resilience. Client-server databases (like MongoDB) require an external daemon.

**Architecture & Implementation:**
- Pure TypeScript engine with zero native dependencies; runs directly inside the Node.js/Electron host process.
- Implements MongoDB-compatible query syntax, hash-indexed lookups, and ACID transactions backed by a Write-Ahead Log (WAL).
- Multi-core processing utilizing Node.js `worker_threads` for parallel dataset operations.
- Ships with an interactive Go CLI, web control dashboard, Dockerized TCP server mode, and a 32-tool Model Context Protocol (MCP) server for direct AI agent interaction.
- Verified with 10 automated test suites covering crash recovery under unexpected `SIGKILL`, TCP/TLS authentication, and data rollbacks.

**Scale & Impact:** 20,000+ NPM downloads/year. Used across Electron desktop software and local-first tooling.

---

### [NexoralDNS](https://github.com/nexoral/NexoralDNS) — High-Throughput Recursive DNS Resolver
![Stars](https://img.shields.io/github/stars/nexoral/NexoralDNS?style=social) ![CI](https://img.shields.io/github/actions/workflow/status/nexoral/NexoralDNS/push_to_github_registry.yml?branch=main&label=tests&logo=githubactions&logoColor=white)

**The Problem:** Managing DNS records and ad/threat filtering across LAN devices typically requires maintaining decentralized `/etc/hosts` configurations, with zero query audit trails and external DNS providers inspecting outbound queries.

**Performance & Architecture:**
- **The Go Rewrite:** Prototyped the initial engine in TypeScript (benchmarked at 8,050 QPS with 0.97% packet loss under 500 concurrent connections). Re-engineered in **Go**, pushing resolution to **12,746 QPS at 3.8ms latency with zero dropped packets** under `dnsperf` on identical hardware (AMD Ryzen 5 5500U, 9 query worker threads).
- **Asynchronous Audit Logging:** Shifted query logging and metrics capture to RabbitMQ background consumers after sending the DNS response packet, keeping resolution latency strictly minimal.
- **In-Memory Caching:** Multi-tier caching layer (in-memory + Redis) absorbs 98% of repetitive lookup traffic.
- **Control Interface:** Includes a Next.js administrative console and an integrated MCP server for programmatic natural-language DNS rule configuration.

---

### [EdgeBalancer](https://github.com/nexoral/EdgeBalancer) — Edge Load Balancer & API Gateway Control Plane
![Stars](https://img.shields.io/github/stars/nexoral/EdgeBalancer?style=social) ![CI](https://img.shields.io/github/actions/workflow/status/nexoral/EdgeBalancer/deploy.yml?branch=main&label=tests&logo=githubactions&logoColor=white)

**The Problem:** Managed cloud load balancers (such as AWS ALB at ~$22/month idle) impose prohibitive fixed base costs for distributed side projects and micro-deployments.

**Architecture & Cost Engineering:**
- A control plane SaaS that compiles and deploys production load balancers and API gateways directly onto Cloudflare Workers across 330+ edge locations in under 90 seconds.
- Provides 7 routing strategies (weighted, failover, round-robin, etc.), active health checks, JWT validation, and canary releases.
- **Cost Efficiency:** Reduces idle load-balancing costs to zero by executing within Cloudflare's serverless edge invocation model.
- **Optimized AI Tooling:** Incorporates a LangChain.js deployment assistant. Dynamically scoped tool definitions decreased token consumption by **66% (from 4,788 down to 1,612 tokens/run)**, with real-time deployment status streamed via Server-Sent Events (SSE).

---

## Technical Skills

- **Languages:** TypeScript, JavaScript, Go (Golang), SQL
- **Runtimes & Frameworks:** Node.js, Fastify, NestJS, Express.js, React.js, Next.js, Cloudflare Workers
- **Data & Message Queues:** PostgreSQL, MongoDB, Redis, RabbitMQ, SQLite
- **Cloud & DevOps:** AWS (ECS, Fargate, ECR, S3, SQS), Docker, K3s, Nginx, Linux, GitHub Actions CI/CD
- **System Architecture:** Distributed Systems, Event-Driven Architecture, Change Data Capture (CDC), Modular Monoliths, WebSockets, SSE, GraphQL
- **Protocols & Standards:** DNS, TCP/UDP, HTTP/REST, MQTT, RTSP, Model Context Protocol (MCP)

---

## Connect With Me

<p align="center">
<a href="https://linkedin.com/in/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="https://x.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"/></a>
<a href="mailto:connect@ankan.in"><img src="https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

---

<div align="center">

**⭐️ Maintained by [AnkanSaha](https://github.com/AnkanSaha)**

</div>
