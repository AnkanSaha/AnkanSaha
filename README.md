<div align="center">

# Ankan Saha | Backend Engineer

*Node.js · TypeScript · Distributed Systems · Database Internals · Networking Protocols · Open Source*

**📍 Kolkata, India** | **📧 connect@ankan.in** | **💼 6+ Years Coding · 2 Years Production**

---

**🎯 Actively seeking Backend Engineer roles** | Immediate availability (Remote or Kolkata-based)
**📄 Resume:** [resume.ankan.in](https://resume.ankan.in/Resume_of_Ankan_Saha.pdf)

---

[![Website](https://img.shields.io/badge/-Portfolio-00ADD8?style=flat-square&logo=google-chrome&logoColor=white)](https://ankan.in)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/theankansaha)
[![GitHub followers](https://img.shields.io/github/followers/AnkanSaha?label=Followers&style=flat&logo=github)](https://github.com/AnkanSaha)
[![GitHub stars](https://img.shields.io/github/stars/AnkanSaha?label=Stars&style=flat&logo=github)](https://github.com/AnkanSaha)
[![Profile Views](https://komarev.com/ghpvc/?username=AnkanSaha&label=Profile%20views&color=0e75b6&style=flat)](https://github.com/AnkanSaha)

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=header" width="100%"/>

## 🚀 About Me

Node.js and TypeScript Backend Engineer building production-ready infrastructure tools and distributed systems. Maintained systems serving **10M+ users** at Hoichoi (OTT platform), built [AxioDB](https://github.com/nexoral/AxioDB), an embedded NoSQL database engine with **2,000+ NPM downloads**, and currently developing [NexoralDNS](https://github.com/nexoral/NexoralDNS), a high-performance DNS server achieving **8,050+ QPS** with 0.00% packet loss.

**Focus areas:** Database internals, networking protocols (DNS, TCP/IP), distributed systems, Node.js runtime architecture, RESTful API design, and microservices. I build tools that solve real problems I've encountered, from dependency compilation nightmares to home lab DNS management. Most of my production-grade projects are organized under the [Nexoral](https://github.com/orgs/nexoral) organization.

---

## 🛠️ Technical Skills

**6+ years of coding (2 years in production)** with JavaScript, TypeScript, and Node.js ecosystem. Built and maintained systems serving 10M+ users, handling 40+ concurrent video streams, and managing 200+ IoT devices in production.

**Core Stack (since 2020):** Node.js, TypeScript, JavaScript, Express.js, Fastify, NestJS, React.js, Next.js, Golang
**Databases & Messaging:** MongoDB, Redis, Redis Streams, RabbitMQ, SQL, Database Internals
**Infrastructure & DevOps:** Docker, AWS Lambda, Cloudflare Workers, Nginx, Linux, Git, GitHub Actions, CircleCI
**Specialized:** Video Streaming (FFmpeg, RTSP), IoT (MQTT, WebSockets), Microservices Architecture, RESTful APIs, GraphQL
**AI & LLM Integration:** OpenAI API, Gemini API, Prompt Engineering, Structured Output (Zod)
**Additional:** Firebase

---

## 🤖 AI Integration

My focus is building **production-grade AI features** inside real backend systems:

- **LLM API Integration:** Building backend services on top of OpenAI and Gemini APIs with retry logic, rate-limit handling, and error monitoring.
- **Structured Output and Validation:** Using Zod schemas to validate and type-check structured data at API and model boundaries.
- **AI Inference Pipelines:** Built the backend for an AI-powered CCTV system that pulled RTSP camera streams, extracted frames, and forwarded them to external inference servers for real-time threat detection.
- **Prompt Engineering:** Designing system prompts for consistent, structured output.

<!-- TODO: Add RAG Pipelines bullet once a public repo demonstrating embedding pipelines and vector search is built and linked. -->

---

## 🎯 Featured Projects

### [EdgeBalancer](https://github.com/nexoral/EdgeBalancer)
A SaaS control plane that generates and deploys Cloudflare Worker based load balancers from a dashboard. Users register their origin servers, choose a routing strategy, and EdgeBalancer provisions a Worker at the edge that distributes their traffic, with no hand-written Worker scripts or edge infrastructure to manage.

**Why built:** Resilient load balancing usually means running your own proxy layer or paying for a managed load balancer. Cloudflare Workers can do it at the edge for almost nothing, but writing and maintaining the Worker logic, health checks, and failover by hand is tedious. EdgeBalancer turns that into a few clicks.

**Features:** Seven routing strategies (weighted round-robin, IP-hash, cookie-sticky, failover, geo-steering, and more), Redis-backed idempotency with cross-replica operation cancellation, and AES-256-GCM encrypted storage of Cloudflare credentials. Self-hosted on a two-replica K3s cluster (ARM64 / Graviton) with a GitHub Actions pipeline that builds ARM64 Docker images to GHCR and performs rolling updates with automatic rollback.

**Tech Stack:** TypeScript, Fastify, Next.js, Cloudflare Workers, Redis, MongoDB, K3s, GitHub Actions

### [AxioDB](https://github.com/nexoral/AxioDB) ![NPM Downloads](https://img.shields.io/badge/npm-2000%2B%20downloads-brightgreen)
Lightweight embedded NoSQL database engine for Node.js applications. Pure JavaScript alternative to SQLite with MongoDB-style queries, zero native dependencies, and built-in web GUI at `localhost:27018`. Uses tree-like file structure for fast retrieval and worker threads for parallel processing. Optimized for 10K-500K documents.

**Why built:** Started building an Electron app and needed local storage. Tried JSON files first, worked fine with 50 records, got painfully slow at 1K+. Switched to SQLite, spent 6 hours fighting `node-gyp` rebuild errors across Windows and Mac. Deployed to production, got native binding errors. That weekend, I built AxioDB: pure JavaScript, no native dependencies, works everywhere Node.js runs. **2,000+ downloads on NPM** later, turns out I wasn't the only one tired of this struggle.

**Problem solved:** AxioDB gives you MongoDB-like queries (`find`, `insert`, `update`, `delete`, `aggregate`) without the hassle. Just `npm install axiodb` and you have a database: no `mongod` process, no native bindings, no cross-platform compilation nightmares. Perfect for Electron apps, CLI tools, small websites, and anywhere you need a lightweight database that just works.

**Tech Stack:** Node.js, TypeScript, Worker Threads, Filesystem APIs

### [NexoralDNS](https://github.com/nexoral/NexoralDNS)
High-performance Docker-based DNS server for Local Area Networks. Built from scratch with custom UDP packet parsing, Redis caching, and Change Streams. Features web-based management interface and Docker deployment. Built with Node.js and TypeScript using dgram for UDP/TCP socket handling, Fastify for the API layer, and Next.js for the management dashboard.

**Why built:** Ever edited `/etc/hosts` on five different machines just to test one local domain? Ever wanted your own DNS server for your home lab without exposing it to the internet? That's why this exists.

**Problem solved:** Eliminates the hassle of managing `/etc/hosts` files across multiple machines, provides network-wide custom domain resolution, and adds security filtering for home/office networks.

**Performance:** 8,050+ QPS throughput, 0.00% packet loss, 500 concurrent clients, Redis-backed caching, 9-worker cluster

**Tech Stack:** Node.js, TypeScript, Docker, dgram, Redis, MongoDB, Fastify, Next.js

### [ContainDB](https://github.com/nexoral/ContainDB)
CLI tool for automating containerized database management. Provides instant setup of MongoDB, Redis, MySQL, PostgreSQL, and MariaDB with one-click installation of management tools (phpMyAdmin, pgAdmin, RedisInsight). Features Docker network integration, data persistence, and Docker Compose export/import capabilities.

**Why built:** Ever faced "core dumped" errors while installing MongoDB on your local Linux machine? Ever spent three hours debugging Docker network configurations just to connect pgAdmin to PostgreSQL? This tool was born from that pain.

**Problem solved:** Turns database environment setup from a multi-hour debugging session into a single command. Solves version compatibility issues, complex Docker configurations, and provides consistent development databases across teams.

**Tech Stack:** Go, Docker, CLI

### [More Projects →](https://github.com/orgs/nexoral)
Additional infrastructure and tooling projects available at the Nexoral organization.

---

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=AnkanSaha&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" height="165" alt="Ankan Saha GitHub Stats - Backend Engineer, Node.js, TypeScript"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AnkanSaha&layout=compact&theme=tokyonight&hide_border=true" height="165" alt="Ankan Saha Most Used Languages"/>
</div>

<div align="center">
  <img src="https://streak-stats.demolab.com/?user=AnkanSaha&theme=tokyonight&hide_border=true" alt="Ankan Saha GitHub Contribution Streak"/>
</div>

<div align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,go,nodejs,express,nestjs,react,nextjs,mongodb,redis,mysql,postgres,rabbitmq,docker,aws,workers,nginx,linux,git,github,githubactions,graphql,firebase,npm,bash,ubuntu,postman,vercel&theme=dark&perline=10" alt="Ankan Saha Tech Stack - Node.js TypeScript Go Docker Redis MongoDB RabbitMQ GraphQL AWS"/>
</div>

---

## 🤝 Connect With Me

<p align="center">
<a href="https://resume.ankan.in/Resume_of_Ankan_Saha.pdf" target="_blank"><img src="https://img.shields.io/badge/-Resume-00ADD8?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Ankan Saha Resume"/></a>
<a href="https://linkedin.com/in/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="https://twitter.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"/></a>
<a href="https://discord.com/users/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/></a>
<a href="https://dev.to/AnkanSaha" target="_blank"><img src="https://img.shields.io/badge/-Dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white" alt="Dev.to"/></a>
<a href="https://hashnode.com/@theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" alt="Hashnode"/></a>
<a href="https://instagram.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
<a href="mailto:connect@ankan.in"><img src="https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=footer" width="100%"/>

<div align="center">

**⭐️ From [AnkanSaha](https://github.com/AnkanSaha) | Last Updated: 2026**

</div>
