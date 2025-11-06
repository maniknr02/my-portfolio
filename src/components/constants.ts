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

export const experiences = [
  {
    role: "Full Stack Engineer",
    company: "CoreConnect Systems",
    duration: "2023 – Present",
    desc: [
      "Built durable workflows using Temporal SDK ensuring transactional consistency.",
      "Developed scalable backend services with Spring Boot & Node.js.",
      "Optimized API latency by 40% and improved dashboard rendering by 30%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Innotech Labs",
    duration: "2022 – 2023",
    desc: [
      "Implemented RESTful APIs with authentication & caching strategies.",
      "Collaborated in Agile sprints delivering 3 features per iteration.",
    ],
  },
];

export const skills = {
  Frontend: ["React", "TypeScript", "Redux", "Material UI"],
  Backend: ["Node.js", "Spring Boot", "PostgreSQL", "Redis"],
  DevOps: ["AWS", "Docker", "GitHub Actions", "NGINX"],
};
