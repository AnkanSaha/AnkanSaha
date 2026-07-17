<div align="center">

# Ankan Saha | Software Engineer

*Node.js · TypeScript · Distributed Systems · Model Context Protocol (MCP) · Open Source*

**📍 Kolkata, India** | **📧 connect@ankan.in** | **💼 6+ Years Coding · 2 Years Production**

---

**🎯 Actively seeking Software Engineer roles** | Immediate availability (Remote or Kolkata-based)
**📄 Resume:** [resume.ankan.in](https://resume.ankan.in/Resume_of_Ankan_Saha.pdf)

---

[![Website](https://img.shields.io/badge/-Portfolio-00ADD8?style=flat-square&logo=google-chrome&logoColor=white)](https://ankan.in)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/theankansaha)
[![GitHub followers](https://img.shields.io/github/followers/AnkanSaha?label=Followers&style=flat&logo=github)](https://github.com/AnkanSaha)
[![GitHub stars](https://img.shields.io/github/stars/AnkanSaha?label=Stars&style=flat&logo=github)](https://github.com/AnkanSaha)

</div>

## 🚀 About Me

Software Engineer building production-ready infrastructure tools and distributed systems. Shipped features for a **10M+ user** OTT platform at Hoichoi. Built [AxioDB](https://github.com/nexoral/AxioDB), an embedded NoSQL database engine with **17K+ NPM downloads/year**, and [NexoralDNS](https://github.com/nexoral/NexoralDNS), a self-hosted DNS server achieving **8,050+ QPS** at 0.97% packet loss under 500 concurrent clients, exposed as a **Model Context Protocol (MCP) server** so AI agents can manage DNS records, blocking rules, and cache through natural-language tool calls.

**Focus areas:** Distributed systems, how Node.js works under the hood, REST API design, and microservices. I build tools that fix real problems I run into, like painful software installs or managing DNS at home. Most of my serious projects live under the [Nexoral](https://github.com/orgs/nexoral) organization.

---

## 💼 Experience

Most recently **Full Stack Developer** at [Hoichoi](https://hoichoi.tv).

---

## 🛠️ Technical Skills

**6+ years of coding (2 years in production)** with JavaScript, TypeScript, and Node.js ecosystem. Built and maintained systems serving 10M+ users, handling 40+ concurrent video streams, and managing 200+ IoT devices in production.

- **Languages:** TypeScript, JavaScript, Golang
- **Runtime & Frameworks:** Node.js, Express.js, Fastify, NestJS, React.js, Next.js
- **Databases & Messaging:** MongoDB, PostgreSQL, MySQL, Redis, Redis Streams, RabbitMQ
- **Infrastructure & DevOps:** Docker, Kubernetes, K3s, AWS Lambda, Cloudflare Workers, Nginx, Linux, Git, GitHub Actions, CircleCI
- **Architecture & APIs:** Microservices, Event-driven Architecture, Modular Monolith, RESTful APIs, GraphQL
- **Security:** JWT, OAuth 2.0
- **Testing & Observability:** Jest, Vitest, Sentry, Middleware.io
- **Additional:** Firebase

---

## 🤖 AI Integration

Built MCP servers for [AxioDB](https://github.com/nexoral/AxioDB) and [NexoralDNS](https://github.com/nexoral/NexoralDNS), letting AI agents query and manage both directly through natural-language tool calls.

---

## 🎯 Featured Projects

### [EdgeBalancer](https://github.com/nexoral/EdgeBalancer)
A SaaS control plane that generates and deploys Cloudflare Worker based load balancers from a dashboard. Users register their origin servers, choose a routing strategy, and EdgeBalancer provisions a Worker at the edge that distributes their traffic, with no hand-written Worker scripts or edge infrastructure to manage.

**Problem solved:** Running your own load balancer usually means paying for a managed service or hand-writing and babysitting Worker scripts yourself. EdgeBalancer turns that into a dashboard: pick from seven routing strategies (weighted round-robin, IP-hash, cookie-sticky, failover, geo-steering, and more) and it provisions and manages the Worker for you. Redis-backed idempotency prevents duplicate deployments across replicas, and Cloudflare credentials are stored AES-256-GCM encrypted. Self-hosted on a two-replica K3s cluster, with a GitHub Actions pipeline that builds Docker images to GHCR and rolls out updates with automatic rollback.

**Tech Stack:** TypeScript, Fastify, Next.js, Cloudflare Workers, Redis, MongoDB, K3s, GitHub Actions

### [AxioDB](https://github.com/nexoral/AxioDB) ![NPM Downloads](https://img.shields.io/npm/dy/axiodb?label=npm%20downloads%2Fyear&color=brightgreen)
Lightweight embedded NoSQL database engine for Node.js applications. Pure JavaScript alternative to SQLite with MongoDB-style queries, zero native dependencies, and built-in web GUI at `localhost:27018`. Uses tree-like file structure for fast retrieval and worker threads for parallel processing. Optimized for 10K-500K documents.

**Problem solved:** AxioDB gives you MongoDB-like queries (`find`, `insert`, `update`, `delete`, `aggregate`) with ACID transactions and hash indexing, without the hassle. Just `npm install axiodb` and you have a database: no `mongod` process, no native bindings, no cross-platform compilation nightmares. Perfect for Electron apps, CLI tools, small websites, and anywhere you need a lightweight database that just works.

**Tech Stack:** Node.js, TypeScript, Worker Threads, Filesystem APIs

### [NexoralDNS](https://github.com/nexoral/NexoralDNS)
High-performance Docker-based DNS server for Local Area Networks. Built from scratch with custom UDP packet parsing, Redis caching, and Change Streams. Features web-based management interface and Docker deployment. Built with Node.js and TypeScript using dgram for UDP/TCP socket handling, Fastify for the API layer, and Next.js for the management dashboard.

**Problem solved:** Eliminates the hassle of managing `/etc/hosts` files across multiple machines, provides network-wide custom domain resolution, and adds security filtering for home/office networks.

**Performance:** 8,050+ QPS throughput, 0.97% packet loss at 500 concurrent clients, Redis-backed caching, 9-node worker cluster

**AI Agent Ready:** Exposed as a Model Context Protocol (MCP) server, letting AI agents manage DNS records, blocking rules, and cache through natural-language tool calls.

**Tech Stack:** Node.js, TypeScript, Docker, dgram, Redis, MongoDB, RabbitMQ, Fastify, Next.js, MCP

### [ContainDB](https://github.com/nexoral/ContainDB)
CLI tool for automating containerized database management. Provides instant setup of MongoDB, Redis, MySQL, PostgreSQL, and MariaDB with one-click installation of management tools (phpMyAdmin, pgAdmin, RedisInsight). Features Docker network integration, data persistence, and Docker Compose export/import capabilities.

**Problem solved:** Turns database environment setup from a multi-hour debugging session into a single command. Solves version compatibility issues, complex Docker configurations, and provides consistent development databases across teams.

**Tech Stack:** Go, Docker, CLI

### [ReviewBuddy](https://github.com/nexoral/ReviewBuddy)
An AI-powered GitHub Action that reviews pull requests like a pair programmer, not a linter. Checks out the full repo instead of a bare diff, so it reviews import-aware, full-file context and doesn't hallucinate architecture from three lines of surrounding code.

**Problem solved:** PRs get pushed with titles like "update" and empty descriptions, leaving reviewers to dig through files to figure out what changed. ReviewBuddy writes the missing PR description, retitles it to Conventional Commits, labels it by change type and quality, flags security/performance issues, suggests before/after fixes, and posts a clear Approve/Request Changes/Reject recommendation. Replies to `/buddy` comments for follow-up questions. Small PRs run in a single AI call; large PRs auto-split into a bounded per-file review so cost never scales unbounded.

**Tech Stack:** Node.js, GitHub Actions, Gemini API, OpenRouter, GitHub Models

### [More Projects →](https://github.com/orgs/nexoral)
Additional infrastructure and tooling projects available at the Nexoral organization.

---

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-stats-extended.vercel.app/api?username=AnkanSaha&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" height="165" alt="Ankan Saha GitHub Stats - Software Engineer, Node.js, TypeScript"/>
  <img src="https://github-stats-extended.vercel.app/api/top-langs?username=AnkanSaha&layout=compact&theme=tokyonight&hide_border=true" height="165" alt="Ankan Saha Most Used Languages"/>
</div>

---

## 🤝 Connect With Me

<p align="center">
<a href="https://linkedin.com/in/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="https://x.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"/></a>
<a href="https://hashnode.com/@theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" alt="Hashnode"/></a>
<a href="mailto:connect@ankan.in"><img src="https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

---

<div align="center">

**⭐️ From [AnkanSaha](https://github.com/AnkanSaha)**

</div>
