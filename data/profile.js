// Single source of truth for all portfolio content.
// Update this file to change what appears on the site.

import gowTomTech from "../public/gowtomtech.png";
import bkms from "../public/bkms.png";

export const profile = {
  name: "Niamh Gowran",
  role: "Software Engineer II",
  company: "Microsoft Azure",
  location: "Dublin, Ireland",
  summary:
    "",
  email: "nsgowran@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/niamh-gowran/",
    github: "https://github.com/ngowran",
    website: "https://www.niamhgowran.ie/",
  },
};

export const experience = [
  {
    company: "Microsoft",
    team: "Azure",
    link: "https://www.microsoft.com/",
    roles: [
      {
        title: "Software Engineer II",
        date: "Sept 2026 – Present",
        points: [
          {
            text: "Working on a Geneva metrics exporter for OpenTelemetry Arrow, which sends metrics to Azure Monitor.",
            link: "https://github.com/open-telemetry/otel-arrow/issues/3873",
          },
        ],
      },
      {
        title: "Software Engineer",
        date: "July 2025 – Sept 2026",
        points: [
          {
            text: "Worked on adding configurable OTLP ports to Azure Monitor Agent.",
            link: "https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview",
          },
          { text: "Helped automate our release checks and end-to-end tests." },
          {
            text: "Worked on the fix for a security issue in the agent (CVE-2026-42830).",
            link: "https://www.cve.org/CVERecord?id=CVE-2026-42830",
          },
        ],
      },
      {
        title: "Software Engineer Intern",
        date: "2023 & 2024",
        points: [
          { text: "Two summers on the same observability team, working in C++, C# and eBPF." },
        ],
      },
    ],
  },
  {
    company: "Before Microsoft",
    roles: [
      {
        title: "Dashboard developer at ADAPT, lab tutor at DCU, developer support at Global Payments",
        date: "2022 – 2024",
        points: [
          { text: "Made React dashboards for researchers, helped students with Python, and supported payment integrations." },
        ],
      },
    ],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "Dublin City University",
  date: "2021 – 2025",
  result: "First Class Honours",
};

export const achievements = [
  {
    title: "A Review of Estimation in Software Engineering",
    year: "2025",
    text: "My first peer-reviewed paper, published by Springer.",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-04288-0_10",
  },
  {
    title: "Generation Google Scholar",
    year: "2023/24",
    text: "A scholarship for students combining academics with social impact.",
    link: "https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-emea",
  },
];

export const projects = [
  {
    name: "GowTom Tech",
    description: "Full-stack software engineering blog.",
    tech: ["Next.js", "ASP.NET Core", "Cosmos DB", "Terraform"],
    url: "https://gowtom.tech",
    image: gowTomTech,
  },
  {
    name: "Choose Local",
    description: "Community platform helping people discover and support small local businesses.",
    tech: ["Next.js", "ASP.NET Core", "Cosmos DB"],
    url: "https://chooselocal.vercel.app/",
  },
  {
    name: "Brian Kelly Motoring School",
    description: "Client website with a Sanity CMS so the owner can edit content.",
    tech: ["Next.js", "Sanity"],
    url: "https://www.bkms.ie/",
    image: bkms,
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["C++", "C#", "Rust", "Python", "TypeScript", "C"],
  },
  {
    group: "Frameworks",
    items: [".NET", "ASP.NET Core", "Next.js", "React"],
  },
  {
    group: "Cloud & Infra",
    items: ["Azure", "Kubernetes", "Docker", "Terraform", "Bicep", "CI/CD"],
  },
  {
    group: "Observability & Data",
    items: ["OpenTelemetry", "eBPF", "SQL", "NoSQL", "Cosmos DB", "OpenAPI"],
  },
];