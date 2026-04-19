<div align="center">

# Ankan Saha - Backend Engineer

*Backend-focused engineer specializing in infrastructure tools and distributed systems*

**📍 Kolkata, India** | **📧 connect@ankan.in** | **💼 2 Years Experience**

---

**🎯 Actively seeking Backend Engineer roles** — Immediate availability (Remote or Kolkata-based)
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

Backend Engineer building production-ready infrastructure tools and distributed systems. Maintained systems serving **10M+ users** at Hoichoi (OTT platform), built [AxioDB](https://github.com/nexoral/AxioDB) (embedded NoSQL database with **2,000+ NPM downloads**), and currently developing [NexoralDNS](https://github.com/nexoral/NexoralDNS) - a high-performance DNS server achieving **8,050+ QPS** with 0.00% packet loss.

**Focus areas:** Database internals, networking protocols (DNS, TCP/IP), distributed systems, Node.js runtime architecture. I build tools that solve real problems I've encountered - from dependency compilation nightmares to home lab DNS management. All projects organized under [Nexoral](https://github.com/orgs/nexoral) for production-grade development workflows.

---

## 🛠️ Technical Skills

**2 years of production experience** with JavaScript, TypeScript, and Node.js ecosystem. Built and maintained systems serving 10M+ users, handling 40+ concurrent video streams, and managing 200+ IoT devices in production.

**Core Expertise:** Node.js, TypeScript, JavaScript, Express.js, Fastify, NestJS, React.js, Next.js, Golang
**Databases & Messaging:** MongoDB, Redis, Redis Streams, RabbitMQ, SQL, Database Internals
**DevOps & Cloud:** Docker, AWS Lambda, Cloudflare Workers, Nginx, Linux, CI/CD, Git
**Specialized:** Video Streaming (FFmpeg, RTSP), IoT (MQTT, WebSockets), Microservices Architecture, RESTful APIs, GraphQL

**Core Stack (2 years production):** Node.js, TypeScript, JavaScript, Express.js, Fastify, NestJS, React.js, Next.js, Golang
**Databases & Messaging:** MongoDB, Redis, Redis Streams, RabbitMQ, SQL, Apache Kafka
**Infrastructure & DevOps:** Docker, AWS Lambda, Cloudflare Workers, Nginx, Linux, Git, GitHub Actions, CircleCI
**Specialized:** Video Streaming (FFmpeg, RTSP), IoT (MQTT, WebSockets), RESTful APIs, GraphQL
**Additional:** Firebase, OpenAI API, Gemini API

---

## 🎯 Featured Projects

### [NexoralDNS](https://github.com/nexoral/NexoralDNS)
High-performance Docker-based DNS server for Local Area Networks achieving **8,050+ QPS** with **0.00% packet loss** under 500 concurrent clients. Built from scratch with custom UDP packet parsing, Redis caching, and Change Streams. Features web-based management interface and Docker deployment. Built with Node.js and TypeScript using dgram for UDP/TCP socket handling, Fastify for the API layer, and Next.js for the management dashboard.

**Why built:** Ever edited `/etc/hosts` on five different machines just to test one local domain? Ever wanted your own DNS server for your home lab without exposing it to the internet? That's why this exists.

**Problem solved:** Eliminates the hassle of managing `/etc/hosts` files across multiple machines, provides network-wide custom domain resolution with enterprise-grade performance (8,050+ QPS, 9-worker cluster), and adds security filtering for home/office networks.

**Performance:** 8,050+ QPS throughput, 0.00% packet loss, handles 500 concurrent clients, Redis-backed caching layer

**Tech Stack:** Node.js, TypeScript, Docker, dgram, Redis, MongoDB, Fastify, Next.js

### [AxioDB](https://github.com/nexoral/AxioDB) ![NPM Downloads](https://img.shields.io/badge/npm-2000%2B%20downloads-brightgreen)
Lightweight embedded NoSQL database for Node.js applications. Pure JavaScript alternative to SQLite with MongoDB-style queries, zero native dependencies, and built-in web GUI at `localhost:27018`. Uses tree-like file structure for fast retrieval and worker threads for parallel processing. Optimized for 10K-500K documents.

**Why built:** Started building an Electron app and needed local storage. Tried JSON files first—worked fine with 50 records, got painfully slow at 1K+. Switched to SQLite, spent 6 hours fighting `node-gyp` rebuild errors across Windows and Mac. Deployed to production, got native binding errors. That weekend, I built AxioDB—pure JavaScript, no native dependencies, works everywhere Node.js runs. **2000+ downloads on NPM** later, turns out I wasn't the only one tired of this struggle.

**Problem solved:** AxioDB gives you MongoDB-like queries (`find`, `insert`, `update`, `delete`, `aggregate`) without the hassle. Just `npm install axiodb` and you have a database—no `mongod` process, no native bindings, no cross-platform compilation nightmares. Perfect for Electron apps, CLI tools, small websites, and anywhere you need a lightweight database that just works.

**Tech Stack:** Node.js, TypeScript, Worker Threads, Filesystem APIs

### [xpack](https://github.com/nexoral/xpack)
Universal Linux package builder that converts standalone binaries into native package formats (.deb, .rpm, tar.gz). Automates the creation of reproducible packages with configurable metadata, installation scripts, and service files. Designed for CI pipelines and Linux software maintainers.

**Why built:** I know many friends who code in C, Golang, Rust—they build, run `./bin`, and it works. But ever thought about how to ship your binary to real users who install packages with `sudo dpkg -i`? That gap between "it works on my machine" and actual distribution is why this exists.

**Problem solved:** Streamlines the packaging process for Linux software distribution, automating repetitive tasks like metadata generation and file layout management. Makes CI/CD packaging simple with one command.

**In Production:** Currently used in ContainDB's Linux version packager for automated CI/CD pipeline builds.

**Tech Stack:** Go, Linux packaging formats

### [ContainDB](https://github.com/nexoral/ContainDB)
CLI tool for automating containerized database management. Provides instant setup of MongoDB, Redis, MySQL, PostgreSQL, and MariaDB with one-click installation of management tools (phpMyAdmin, pgAdmin, RedisInsight). Features Docker network integration, data persistence, and Docker Compose export/import capabilities.

**Why built:** Ever faced "core dumped" errors while installing MongoDB on your local Linux machine? Ever spent three hours debugging Docker network configurations just to connect pgAdmin to PostgreSQL? This tool was born from that pain.

**Problem solved:** Turns database environment setup from a multi-hour debugging session into a single command. Solves version compatibility issues, complex Docker configurations, and provides consistent development databases across teams.

**Tech Stack:** Go, Docker, CLI

### [More Projects →](https://github.com/orgs/nexoral)
Additional infrastructure and tooling projects available at the Nexoral organization.

---

## 🤝 Connect With Me

<p align="center">
<a href="https://resume.ankan.in/Resume_of_Ankan_Saha.pdf" target="_blank"><img src="https://img.shields.io/badge/-Resume-00ADD8?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Resume"/></a>
<a href="https://linkedin.com/in/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="https://twitter.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"/></a>
<a href="https://discord.com/users/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/></a>
<a href="https://dev.to/AnkanSaha" target="_blank"><img src="https://img.shields.io/badge/-Dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white" alt="Dev.to"/></a>
<a href="https://hashnode.com/@theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" alt="Hashnode"/></a>
<a href="https://instagram.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
<a href="mailto:connect@ankan.in"><img src="https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer&text=Happy%20Coding!&fontSize=40&fontAlignY=70&animation=twinkling&fontColor=fff" width="100%"/>

---

<div align="center">
<img src="https://komarev.com/ghpvc/?username=AnkanSaha&label=Profile%20Views&color=0e75b6&style=flat" alt="Profile views"/>

**⭐️ From [AnkanSaha](https://github.com/AnkanSaha) | Last Updated: 2026**

</div>
