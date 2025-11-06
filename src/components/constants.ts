import type { Project } from "./Projects";

export const navItems = [
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
];

export const projects: Project[] = [
  {
    title: "CoreConnect Workflows",
    description:
      "Built persistent workflows ensuring durable execution of transactions using Temporal SDK. Improved reliability and reduced latency significantly.",
    image: "/project1.png",
    tech: ["Node.js", "Temporal", "AWS", "PostgreSQL"],
  },
  {
    title: "Polling Platform",
    description:
      "Developed a full-stack polling platform with user and admin panels, real-time updates, and JWT-based authentication.",
    image: "/project2.png",
    tech: ["React", "Spring Boot", "Redis"],
  },
  {
    title: "Microservices Monitoring Dashboard",
    description:
      "Engineered a metrics dashboard visualizing service health, request latency, and failure rates across distributed systems.",
    image: "/project3.png",
    tech: ["React", "TypeScript", "Grafana", "Docker"],
  },
];
