import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "osteopets",
    title: "OsteoPets",
    shortDescription:
      "SaaS platform in production, designed for animal osteopaths to manage clients, sessions, reports and invoicing.",
    description:
      "OsteoPets is a production SaaS platform designed for animal osteopaths. Practitioners use it to manage their clients and animals, schedule sessions, write clinical reports, annotate photos and generate invoices. The platform is deployed on a private VPS using a Docker multi-service architecture and is actively used.",
    status: "production",
    repositoryVisibility: "private",
    activityStatus: "active",
    category: "saas",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
    featured: true,
    thumbnail: "osteopets.png",
    highlights: [
      "Client & animal management",
      "Session scheduling and reports",
      "Invoice generation",
      "Photo annotation tools",
      "Production VPS deployment",
    ],
    sections: {
      overview: [
        "OsteoPets is a SaaS platform built specifically for animal osteopaths. The goal was to replace fragmented paper records and generic tools with a single platform tailored to the workflow of a practitioner.",
        "The platform allows osteopaths to manage their full client base — including each animal per client — schedule and track treatment sessions, write structured clinical reports, annotate photos directly in the app, generate invoices and share reports with clients.",
        "The platform is currently in production with active users and is maintained regularly.",
      ],
      problem:
        "Animal osteopaths typically manage their practice with a mix of paper records, generic note-taking apps and spreadsheets. There is no single tool that covers the complete workflow: client intake, session history, clinical reports, photo documentation and billing — all in one place.",
      solution:
        "OsteoPets solves this by providing a unified practitioner dashboard that covers the full workflow from client intake to invoice generation. Each client has a profile containing their animals, each animal has a full session history with attached reports and annotated photos, and the billing module handles invoice creation and tracking.",
      architecture: [
        "Multi-service Docker architecture deployed on a private VPS",
        "Next.js frontend with TypeScript and Tailwind CSS",
        "PostgreSQL database with Prisma ORM for type-safe access",
        "REST API handling client, animal, session and invoice management",
        "Authentication layer with role-based access per practitioner",
        "File storage for report attachments and annotated images",
        "Automated deployment pipeline from repository to production",
      ],
      challenges: [
        "Designing a data model flexible enough to accommodate multiple animals per client, each with independent session histories",
        "Building a clean photo annotation tool usable from a web interface without heavy dependencies",
        "Structuring the invoice generation module to handle different session types and pricing",
        "Ensuring the deployment is stable and maintainable for a solo developer handling production infrastructure",
      ],
      role: [
        "Full product design — user flows, data model and UI architecture",
        "Backend API development with Next.js Route Handlers and Prisma",
        "Database design and migration management",
        "Docker infrastructure setup and VPS deployment",
        "Frontend development and responsive UI implementation",
        "Ongoing production maintenance and feature iteration",
      ],
    },
  },
  {
    slug: "restobrain",
    title: "RestoBrain",
    shortDescription:
      "Data platform that collects and analyzes restaurant reviews using scraping pipelines and NLP sentiment analysis.",
    description:
      "RestoBrain is a data platform designed to collect restaurant reviews at scale and extract structured insights from them using natural language processing. The system scrapes reviews from multiple sources, normalises the data, runs sentiment analysis and surfaces the results through dashboards. The project is currently paused due to scraping stability issues.",
    status: "paused",
    repositoryVisibility: "public",
    activityStatus: "paused",
    category: "data",
    stack: ["Python", "FastAPI", "PostgreSQL", "spaCy", "Docker", "BeautifulSoup"],
    featured: true,
    github: "https://github.com/Leoleoxtu/restobrain",
    thumbnail: "restobrain.png",
    highlights: [
      "Multi-source review scraping",
      "Data normalisation pipeline",
      "NLP & sentiment analysis",
      "Real-time dashboards",
      "Docker-deployed architecture",
    ],
    sections: {
      overview: [
        "RestoBrain is a data platform built to answer a simple question: what are customers actually saying about restaurants, at scale?",
        "The system collects reviews from multiple sources through scraping pipelines, normalises the data into a unified structure and processes it using NLP techniques to extract sentiment scores and recurring themes.",
        "The project is currently paused due to instability in the scraping layer caused by anti-scraping measures on target platforms.",
      ],
      problem:
        "Restaurant review data is scattered across multiple platforms, exists in unstructured text form and is not easily usable for trend analysis or sentiment understanding. Manually reading hundreds of reviews to understand customer patterns is impractical.",
      solution:
        "RestoBrain automates the collection and analysis pipeline: scraping reviews from target platforms, normalising them into a consistent data structure, running sentiment analysis using spaCy-based NLP models, and storing the processed results in a structured database for querying and dashboard display.",
      architecture: [
        "Python scraping layer using BeautifulSoup targeting multiple review platforms",
        "Data normalisation pipeline that standardises review structure across sources",
        "NLP processing module using spaCy for sentiment analysis and keyword extraction",
        "FastAPI backend exposing processed data through a REST API",
        "PostgreSQL database for storing raw and processed review data",
        "Dashboard layer consuming the API to display trends and sentiment summaries",
        "Full stack containerised with Docker for reproducible deployment",
      ],
      challenges: [
        "Scraping stability: anti-bot mechanisms on major platforms caused frequent failures requiring constant adaptation",
        "Data normalisation: review structure varies significantly between platforms, requiring flexible parsing logic",
        "NLP accuracy: general-purpose sentiment models do not always perform well on domain-specific restaurant review language",
        "Maintaining scraping pipelines without a dedicated proxy infrastructure is a long-term scalability constraint",
      ],
      role: [
        "System architecture and pipeline design",
        "Scraping pipeline development and maintenance",
        "Data normalisation and storage layer",
        "NLP model integration using spaCy",
        "FastAPI backend and database schema",
        "Docker deployment setup",
        "Dashboard data layer and API design",
      ],
    },
  },
  {
    slug: "portguard",
    title: "PortGuard",
    shortDescription:
      "Developer tool built in Rust that automatically assigns available ports and prevents conflicts in local and VPS environments.",
    description:
      "PortGuard is a developer tool designed to automatically detect and assign available ports to applications, preventing port conflicts when running multiple services locally or on a VPS. Built in Rust for performance and reliability, it integrates directly into the development environment as a VS Code extension.",
    status: "public",
    repositoryVisibility: "public",
    activityStatus: "active",
    category: "tool",
    stack: ["Rust", "VS Code Extension API", "Shell", "TOML"],
    featured: true,
    github: "https://github.com/Leoleoxtu/portguard",
    thumbnail: "portguard.png",
    highlights: [
      "Automatic port detection",
      "Dynamic port allocation",
      "VS Code extension integration",
      "Conflict-free multi-service setup",
    ],
    sections: {
      overview: [
        "PortGuard solves a common but annoying problem in development: port conflicts when multiple services try to bind to the same port.",
        "The tool scans the host environment to detect which ports are in use and automatically allocates the next available port for the requesting service. It integrates directly into VS Code as an extension, making it a passive background tool that developers don't have to think about.",
        "It is open source and publicly available on GitHub.",
      ],
      problem:
        "When running multiple services locally — API servers, databases, frontends, background workers — port conflicts are a constant source of friction. The same problem occurs on VPS environments where multiple projects share a host. Manually tracking which ports are in use is tedious and error-prone.",
      solution:
        "PortGuard provides automatic port management. Instead of hardcoding ports or manually checking for conflicts, developers declare their services and PortGuard allocates available ports dynamically. The VS Code extension makes it instantly accessible within the development environment without leaving the editor.",
      architecture: [
        "Core logic written in Rust for speed and low system resource usage",
        "System-level port scanning using OS-native APIs to detect occupied ports",
        "Dynamic allocation algorithm that finds the next free port within a configurable range",
        "Configuration via TOML for declaring services and port preferences",
        "VS Code Extension API integration for editor-level access",
        "Shell interoperability for use outside of the VS Code context",
      ],
      challenges: [
        "Handling edge cases in port scanning across different operating systems (Linux, macOS, Windows)",
        "Ensuring the VS Code extension adds zero perceived latency to the development workflow",
        "Designing a configuration format that is concise but handles multi-service and multi-project setups",
        "Learning the Rust ownership model while building a system-level tool — a steep but valuable curve",
      ],
      role: [
        "Core Rust tool design and implementation",
        "System-level port scanning and allocation logic",
        "VS Code extension development using the Extension API",
        "Configuration design using TOML",
        "Testing across local and VPS Linux environments",
        "Open source publication and repository maintenance",
      ],
    },
  },
  {
    slug: "boursobrain",
    title: "BoursoBrain",
    shortDescription:
      "Experimental AI research platform using multi-agent systems to collect, process and reason on financial data.",
    description:
      "BoursoBrain is an experimental platform exploring how AI agents can collect, process and reason on financial market information. The system ingests RSS feeds and financial API data, structures it into news cards, stores them and passes them through a multi-agent AI layer that simulates decision-making and strategy exploration. It is a research environment, not a trading system.",
    status: "in-development",
    repositoryVisibility: "public",
    activityStatus: "in-development",
    category: "ai",
    stack: ["Python", "FastAPI", "MongoDB", "MinIO", "Docker", "LangChain", "Finnhub API"],
    featured: true,
    thumbnail: "bousobrain.png",
    highlights: [
      "RSS + Finnhub financial data ingestion",
      "Structured news card pipeline",
      "Multi-agent AI reasoning layer",
      "MinIO object storage",
      "MongoDB state management",
    ],
    sections: {
      overview: [
        "BoursoBrain is a research-oriented platform for experimenting with AI agent architectures applied to financial data.",
        "The system collects financial news and market data from RSS feeds and the Finnhub API, processes them into structured 'news cards', stores them in MongoDB and MinIO, and then passes them through a multi-agent layer built with LangChain that simulates reasoning and strategy exploration based on incoming signals.",
        "The project is not designed to be a trading bot. It is a research environment for exploring how information flows influence market signals and how AI agents can reason on top of structured financial data.",
      ],
      problem:
        "Financial markets generate enormous volumes of unstructured information — news, social signals, market data — that is difficult to process and reason on systematically. Existing professional tools are expensive and opaque. There is no open, programmable environment designed for experimenting with how AI agents can reason on financial information flows.",
      solution:
        "BoursoBrain provides an end-to-end pipeline: data ingestion, normalisation into structured news cards, persistent storage and an AI reasoning layer. Each stage is modular and independently replaceable. The multi-agent system can be extended with new agents, reasoning strategies and data sources without rebuilding the pipeline.",
      architecture: [
        "Data ingestion: RSS feed parser + Finnhub API client collecting financial news and market data",
        "Normalisation pipeline that structures raw data into typed news card objects",
        "MongoDB for structured state management and news card storage",
        "MinIO for object storage of raw data snapshots and processed assets",
        "FastAPI backend exposing internal pipeline controls and data access",
        "Multi-agent layer built with LangChain coordinating reasoning agents",
        "Each agent specialises in a specific signal type — news, price movement, sentiment",
        "Docker Compose orchestrating all services in a reproducible environment",
      ],
      challenges: [
        "Designing a data model flexible enough to represent heterogeneous financial signals in a unified schema",
        "Managing agent orchestration — coordinating multiple LangChain agents that process overlapping information",
        "Controlling LLM inference costs during research and experimentation",
        "Ensuring the pipeline is reproducible and debuggable across development iterations",
        "Balancing system complexity with research flexibility — keeping the architecture extensible without over-engineering",
      ],
      role: [
        "Full system architecture and pipeline design",
        "Data ingestion layer: RSS parsing and Finnhub API integration",
        "News card normalisation and storage schema design",
        "MongoDB and MinIO infrastructure setup",
        "FastAPI backend and service orchestration",
        "Multi-agent system design using LangChain",
        "Docker Compose deployment configuration",
        "Ongoing research, iteration and agent experimentation",
      ],
    },
  },
];
