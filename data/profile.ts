/**
 * Centralised profile data for the About page and any other section
 * that needs personal/professional content.
 * Update this file to change content across the whole site.
 */

export const profile = {
  name: "Léo Sollvelles",
  title: "Full-Stack Developer",
  subtitle: "Backend · Infrastructure · Data Systems",
  tagline: "Designing and building real-world software systems.",
  email: "leox77100@gmail.com",
  github: "https://github.com/Leoleoxtu",
  linkedin: "https://www.linkedin.com/in/leo-sollvelles-2538a21b0/",

  bio: [
    "I'm a full-stack developer focused on building real-world software systems. My work spans SaaS platforms, backend architectures, data pipelines and AI-driven tools — with an emphasis on well-structured code, clean architecture and systems that hold up in production.",
    "I started developing websites between the ages of 16 and 18, initially building WordPress sites before moving toward full software development. Over the last four years, I've built several independent projects — including production SaaS platforms, developer tools and experimental AI systems.",
    "I also completed the Meta Full-Stack Developer Professional Certificate on Coursera to formalise and validate the technical knowledge I built through self-learning and practical projects.",
  ],

  approach: [
    {
      title: "Architecture first",
      description:
        "Before writing a line of code, I think about structure. Clear data models, clean service boundaries and well-defined responsibilities make systems easier to build, maintain and extend.",
    },
    {
      title: "From idea to production",
      description:
        "My projects go from concept to deployed system — covering API design, database modeling, containerisation and production deployment. I care about the full lifecycle, not just the frontend.",
    },
    {
      title: "Practical by default",
      description:
        "I start from real problems. Most of my projects exist because I identified a concrete use case and built a system to address it — not as exercises, but as working products.",
    },
    {
      title: "Maintainability matters",
      description:
        "Code is read far more than it is written. I aim for clarity, consistency and structure that makes a codebase easy to understand — for me, and for anyone else who works on it.",
    },
  ],

  domains: [
    {
      id: "saas",
      title: "SaaS Product Development",
      description:
        "Design and development of complete software platforms, from backend architecture to user interfaces. End-to-end product thinking with a focus on real-world usability.",
      tags: ["Multi-tenant architecture", "Auth & billing flows", "Practitioner tooling"],
    },
    {
      id: "backend",
      title: "Backend Architecture",
      description:
        "Designing reliable APIs, services and application structures. Clear data models, robust service logic and pragmatic solutions to complex backend problems.",
      tags: ["REST APIs", "Database design", "Service architecture"],
    },
    {
      id: "infra",
      title: "Infrastructure & Deployment",
      description:
        "Working with containers, servers and production environments. Building systems that run reliably outside of a local machine.",
      tags: ["Docker", "VPS deployment", "CI/CD"],
    },
    {
      id: "data",
      title: "Data Pipelines & AI Systems",
      description:
        "Building systems that collect, process and analyse data. Exploring how machine learning and multi-agent AI can work on top of structured data flows.",
      tags: ["Data pipelines", "NLP & sentiment", "Multi-agent systems"],
    },
    {
      id: "tools",
      title: "Developer Tools & Security",
      description:
        "Creating utilities that improve developer workflows and system reliability. Tools built for real development problems — port management, service monitoring and more.",
      tags: ["Rust tooling", "VS Code extensions", "Port management"],
    },
  ],

  philosophy: [
    "Most of my projects start from a concrete problem — something that either I or someone else actually needed to solve. They then evolve into complete software systems.",
    "I'm particularly interested in the intersection of software engineering, data systems and automation. I find it meaningful to build tools that process information, reduce manual work or provide visibility into complex systems.",
    "Building independently has shaped how I think about software. Without a team to delegate to, you have to understand the full stack — infrastructure, backend, data and frontend. That constraint has been the biggest driver of my growth.",
  ],

  openTo: [
    "Software Engineer",
    "Backend Developer",
    "Systems / Infrastructure Engineer",
    "AI & Data Engineer",
  ],
} as const;
