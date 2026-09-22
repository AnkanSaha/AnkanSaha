<div align="center">

# Ankan Saha

**Backend Engineer**  
*TypeScript · Node.js · Fastify · Go (Working Knowledge) · Cloudflare Workers*

📍 Kolkata, India | 📧 [connect@ankan.in](mailto:connect@ankan.in) | 📄 [Resume (PDF)](https://resume.ankan.in/Resume_of_Ankan_Saha.pdf)  
**Open to Backend / SDE roles** (Bangalore · Hyderabad · Delhi NCR · Remote)

[![Portfolio](https://img.shields.io/badge/Portfolio-ankan.in-00ADD8?style=flat-square&logo=google-chrome&logoColor=white)](https://ankan.in)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-theankansaha-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/theankansaha)
[![GitHub followers](https://img.shields.io/github/followers/AnkanSaha?label=Followers&style=flat-square&logo=github)](https://github.com/AnkanSaha)
[![GitHub stars](https://img.shields.io/github/stars/AnkanSaha?label=Stars&style=flat-square&logo=github)](https://github.com/AnkanSaha)

</div>

---

## About Me

I am a backend engineer with 2 years of professional experience building web APIs, data pipelines, and developer tooling. Most recently at [Hoichoi](https://hoichoi.tv) (10M+ users), I worked across our Next.js web application, Go subscription services, and edge deployments on Cloudflare Workers.

In open source, I maintain projects under [Nexoral](https://github.com/orgs/nexoral), including **AxioDB** (an embedded NoSQL database with 20K+ downloads/year) and **NexoralDNS** (a self-hosted DNS resolver). I enjoy exploring Node.js internals, socket communication, and writing clean, reliable backend code.

---

## Experience

- **Full Stack Developer** · [Hoichoi](https://hoichoi.tv) · *Jul 2025 – Mar 2026*  
  - Migrated the Next.js web application from Vercel to Cloudflare Workers using OpenNext, cutting monthly compute costs by $3,000.
  - Implemented retention and cancellation flows in the Go subscription service, integrating Churnkey webhooks and exposing GraphQL queries via NestJS.
  - Fixed notification race conditions by leveraging MongoDB Change Streams to publish to AWS SQS only after database writes commit.

- **Software Engineer** · [Openweb Solutions (Pitangent Group)](https://pitangent.com) · *Sep 2024 – Jul 2025*  
  - Handled RTSP camera feeds and WebSocket alert streams in Node.js for an AI video analytics dashboard.
  - Packaged services into Docker containers and configured deployment pipelines to AWS ECS on Fargate.

- **Junior Software Developer** · [Excellis IT](https://excellisit.com) · *Apr 2024 – Aug 2024*  
  - Added exponential backoff reconnect logic to prevent MQTT dropouts across 200+ smart lock devices.
  - Set up path-based change detection in GitHub Actions to avoid rebuilding untouched microservices.

Full details → [resume.ankan.in](https://resume.ankan.in/Resume_of_Ankan_Saha.pdf)

---

## Featured Projects

### [AxioDB](https://github.com/nexoral/AxioDB) — Zero-Dependency Embedded Database for Node.js
[![NPM Downloads](https://img.shields.io/npm/dy/axiodb?label=npm%20downloads%2Fyear&color=brightgreen)](https://www.npmjs.com/package/axiodb) [![Stars](https://img.shields.io/github/stars/nexoral/AxioDB?style=social)](https://github.com/nexoral/AxioDB) [![CI](https://img.shields.io/github/actions/workflow/status/nexoral/AxioDB/Push.yml?branch=main&label=tests&logo=githubactions&logoColor=white)](https://github.com/nexoral/AxioDB/actions)

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

- **Languages:** TypeScript, JavaScript, Go (Working Knowledge), SQL
- **Backend & APIs:** Node.js, Fastify, Express.js, NestJS, REST APIs, GraphQL, WebSockets
- **Databases & Caching:** PostgreSQL, MongoDB, Redis, SQLite
- **Queues & Asynchronous Workflows:** RabbitMQ, AWS SQS, MongoDB Change Streams
- **Deployment & Tools:** Docker, Linux, Cloudflare Workers, GitHub Actions CI/CD, AWS (ECS, S3)
- **Protocols & Standards:** DNS (UDP/TCP), MQTT, Model Context Protocol (MCP)

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
