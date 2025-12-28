<div align="center">

# 👋 Hey, I'm Ankan Saha

### Software Engineer | Open Source Contributor

[![Profile Views](https://komarev.com/ghpvc/?username=AnkanSaha&label=Profile%20views&color=0e75b6&style=flat)](https://github.com/AnkanSaha)
[![Twitter Follow](https://img.shields.io/twitter/follow/theankansaha?logo=twitter&style=flat)](https://twitter.com/theankansaha)

</div>

---

## 🚀 About Me

Software Engineer from India. Started with "how does this even work?" and ended up reading documentation at 3 AM to find out. One thing led to another, and now I build the tools I once struggled to understand. Specializing in **networking protocols**, **distributed systems**, and **backend development**.

- 🔭 **Currently Building:** [NexoralDNS](https://github.com/nexoral/NexoralDNS) - A Docker-based DNS server for LANs
- 🌱 **Learning:** Database design, Database internals, Networking, Golang, Node.js internals
- 👯 **Collaborating On:** [AxioDB](https://github.com/nexoral/AxioDB) - A custom NoSQL database built with Node.js & TypeScript
- 💼 **Organization:** [Nexoral](https://github.com/orgs/nexoral) - Where I host my infrastructure and tooling projects
- 📝 **Writing At:** [blog.ankan.in](http://blog.ankan.in) - Documenting what I experience and learn
- 💬 **Talk to me about:** DNS, TCP/IP, Message queues, Database internals, Node.js runtime
- 📫 **Email:** [connect@ankan.in](mailto:connect@ankan.in)

> 💡 **Fun Fact:** I get my best project ideas in the washroom. 🚽 Every single repo I've built started as a shower thought. My brain works best at 3 AM sitting on the toilet. 😂

---

## 🛠️ Technical Skills

### Languages
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Go](https://img.shields.io/badge/-Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Bash](https://img.shields.io/badge/-Bash-4EAA25?style=flat-square&logo=gnu-bash&logoColor=white)

### Backend & Runtime
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)

### Frontend & Frameworks
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)

### Databases & Caching
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

### Message Queues & Streaming
![Apache Kafka](https://img.shields.io/badge/-Apache_Kafka-231F20?style=flat-square&logo=apache-kafka&logoColor=white)
![RabbitMQ](https://img.shields.io/badge/-RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white)

### DevOps & Infrastructure
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Linux](https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Nginx](https://img.shields.io/badge/-Nginx-009639?style=flat-square&logo=nginx&logoColor=white)

### CI/CD & Version Control
![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)
![CircleCI](https://img.shields.io/badge/-CircleCI-343434?style=flat-square&logo=circleci&logoColor=white)

---

## 🎯 Featured Projects

### [NexoralDNS](https://github.com/nexoral/NexoralDNS)
Docker-based smart DNS server for Local Area Networks with custom domain management, DNS traffic monitoring, and security filtering. Features web-based management interface and Docker deployment. Built with Node.js and TypeScript using dgram for UDP/TCP socket handling, Fastify for the API layer, and Next.js for the management dashboard.

**Why built:** Ever edited `/etc/hosts` on five different machines just to test one local domain? Ever wanted your own DNS server for your home lab without exposing it to the internet? That's why this exists.

**Problem solved:** Eliminates the hassle of managing `/etc/hosts` files across multiple machines, provides network-wide custom domain resolution, and adds security filtering for home/office networks.

**Tech Stack:** Node.js, TypeScript, Docker, dgram, Fastify, Next.js

### [AxioDB](https://github.com/nexoral/AxioDB)
Lightweight embedded NoSQL database for Node.js applications. Pure JavaScript alternative to SQLite with MongoDB-style queries, AES-256 encryption, zero native dependencies, and built-in web GUI. Uses tree-like file structure for fast retrieval and worker threads for parallel processing. Optimized for 10K-500K documents.

**Why built:** Ever tried deploying an Electron app only to have SQLite fail because of missing native bindings? Ever spent hours rebuilding node-gyp dependencies for different platforms? Yeah, me too. Never again.

**Problem solved:** Provides MongoDB-like experience without requiring a separate database server, perfect for desktop apps, embedded systems, and rapid prototyping where SQLite's native bindings cause cross-platform headaches.

**Tech Stack:** Node.js, TypeScript, Worker Threads, Filesystem APIs

### [xpack](https://github.com/nexoral/xpack)
Universal Linux package builder that converts standalone binaries into native package formats (.deb, .rpm, tar.gz). Automates the creation of reproducible packages with configurable metadata, installation scripts, and service files. Designed for CI pipelines and Linux software maintainers.

**Why built:** Ever created a .deb package manually and then realized you need an .rpm too? Ever copy-pasted DEBIAN control files and forgot to update the version? Built this to stop the madness.

**Problem solved:** Streamlines the packaging process for Linux software distribution, automating repetitive tasks like metadata generation and file layout management. Makes CI/CD packaging simple with one command.

**Tech Stack:** Go, Linux packaging formats

### [ContainDB](https://github.com/nexoral/ContainDB)
CLI tool for automating containerized database management. Provides instant setup of MongoDB, Redis, MySQL, PostgreSQL, and MariaDB with one-click installation of management tools (phpMyAdmin, pgAdmin, RedisInsight). Features Docker network integration, data persistence, and Docker Compose export/import capabilities.

**Why built:** Ever faced "core dumped" errors while installing MongoDB on your local Linux machine? Ever spent three hours debugging Docker network configurations just to connect pgAdmin to PostgreSQL? This tool was born from that pain.

**Problem solved:** Turns database environment setup from a multi-hour debugging session into a single command. Solves version compatibility issues, complex Docker configurations, and provides consistent development databases across teams.

**Tech Stack:** Go, Docker, CLI

### [More Projects →](https://github.com/orgs/nexoral)
Additional infrastructure and tooling projects available at the Nexoral organization.

---

## 📝 Blog & Writing

Technical articles covering networking, infrastructure, and low-level programming:

🔗 **[blog.ankan.in](http://blog.ankan.in)** - Implementation notes and protocol deep-dives

📡 **[RSS Feed](https://blog.ankan.in/rss.xml)** - Subscribe for updates

---

## 🤝 Connect With Me

<p align="center">
<a href="https://linkedin.com/in/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="https://twitter.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"/></a>
<a href="https://dev.to/AnkanSaha" target="_blank"><img src="https://img.shields.io/badge/-Dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white" alt="Dev.to"/></a>
<a href="https://hashnode.com/@theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" alt="Hashnode"/></a>
<a href="https://instagram.com/theankansaha" target="_blank"><img src="https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
<a href="mailto:connect@ankan.in"><img src="https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

---

<div align="center">

### 💼 Open to technical collaborations and interesting projects

</div>
