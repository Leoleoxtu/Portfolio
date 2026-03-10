import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "osteopets",
    title: "OsteoPets",
    shortDescription:
      "SaaS platform for animal osteopaths to manage clients, sessions and treatment reports.",
    description:
      "OsteoPets is a SaaS platform designed for animal osteopaths. The platform helps practitioners manage their clients, treatment sessions and reports. It provides tools to create detailed session reports, annotate photos and keep track of treatments across multiple animals. The goal is to simplify daily workflows while providing structured digital records.",
    status: "private",
    category: "saas",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    featured: true,
    // thumbnail: "osteopets.png"  — add when asset is ready
    highlights: [
      "Client & animal management",
      "Session tracking and reports",
      "Photo annotation tools",
      "Practitioner-oriented interface",
    ],
  },
  {
    slug: "restobrain",
    title: "RestoBrain",
    shortDescription:
      "Data platform that collects and analyzes restaurant reviews using NLP and sentiment analysis.",
    description:
      "RestoBrain is a data platform designed to analyze restaurant reviews and extract useful insights. The system collects reviews from multiple sources and processes them using NLP techniques to understand customer sentiment and identify patterns in feedback. The project explores how data pipelines can transform unstructured data into structured insights.",
    status: "public",
    category: "data",
    stack: ["Python", "FastAPI", "PostgreSQL", "spaCy", "Docker"],
    featured: true,
    github: "https://github.com/Leoleoxtu/restobrain",
    // thumbnail: "restobrain.png"  — add when asset is ready
    highlights: [
      "Multi-source review scraping",
      "NLP & sentiment analysis pipeline",
      "Structured insight extraction",
      "Data processing architecture",
    ],
  },
  {
    slug: "portguard",
    title: "PortGuard",
    shortDescription:
      "Developer security tool for monitoring open ports and detecting accidental service exposures.",
    description:
      "PortGuard is a developer tool focused on security and system visibility. It helps developers monitor open ports and detect potential service exposures on their machines or servers — preventing accidental exposure of services and improving security awareness during development and deployment.",
    status: "public",
    category: "security",
    stack: ["Go", "CLI", "Linux", "Shell"],
    featured: true,
    github: "https://github.com/Leoleoxtu/portguard",
    // thumbnail: "portguard.png"  — add when asset is ready
    highlights: [
      "Open port monitoring",
      "Service exposure detection",
      "Developer workflow improvement",
      "System visibility tooling",
    ],
  },
  {
    slug: "boursobrain",
    title: "BoursoBrain",
    shortDescription:
      "Experimental AI platform for financial data analysis using multi-agent systems.",
    description:
      "BoursoBrain is an experimental project exploring the use of AI and multi-agent systems in financial data analysis. The platform collects financial data, processes news and market information, and allows experimentation with automated reasoning and strategy exploration — designed as a research environment for data-driven decision systems.",
    status: "in-development",
    category: "ai",
    stack: ["Python", "LangChain", "FastAPI", "PostgreSQL", "Docker"],
    featured: true,
    // thumbnail: "boursobrain.png"  — add when asset is ready
    highlights: [
      "Multi-agent architecture",
      "Financial data ingestion",
      "News & market processing",
      "Experimental reasoning engine",
    ],
  },
];
