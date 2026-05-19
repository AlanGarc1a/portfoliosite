import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    type: ["Full Stack"],
    title: "Watchlisted",
    description:
      "A modern Next.js web application where users can track their movies, tv shows, and track their stats based on saved items. With AI features built into to recommend more based on their interests.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "PostgresSQL",
      "AI",
    ],
    githubUrl: "https://github.com/AlanGarc1a/watchlisted",
  },
  {
    id: 2,
    type: ["Full Stack"],
    title: "GameHub",
    description:
      "A single web application where users can perform CRUD operations for their favorite video games.",
    techStack: ["React", "Material UI", "Express", "MongoDB"],
    githubUrl: "https://github.com/AlanGarc1a/Gamehub",
  },
  {
    id: 3,
    type: ["Frontend"],
    title: "Skynet",
    description:
      "A landing page for the fictional villian Skynet from the Terminator movie series.",
    techStack: ["React", "styled-components"],
    githubUrl: "https://github.com/AlanGarc1a/Skynet",
  },
  {
    id: 4,
    type: ["Frontend"],
    title: "Cloud Systems",
    description:
      "A landing page for a cloud computing company that shows their offers and showcase.",
    techStack: ["HTML5", "CSS3", "SASS", "JavaScript"],
    githubUrl: "https://github.com/AlanGarc1a/cloud-systems",
  },
  {
    id: 5,
    type: ["Frontend"],
    title: "Portfoliov1",
    description: "First portfolio website made.",
    techStack: ["HTML5", "CSS3", "SASS", "JavaScript", "Three.js"],
    githubUrl: "https://github.com/AlanGarc1a/PortfolioWebsite",
  },
];

export const experiences = [
  {
    id: 1,
    description:
      "Engineered and delivered high-traffic, customer-facing features across Guitar Center&apos;s ecommerce and booking platforms using React.js, Next.js, and TypeScript, contributing to a measurable improvement in page performance.",
  },
  {
    id: 2,
    description:
      "Designed and implemented a scalable API orchestration layer integrating Salesforce and POS systems, streamlining data synchronization across distributed services and reducing error rates by 35%.",
  },
  {
    id: 3,
    description:
      "Owned end-to-end refactoring of a legacy React codebase, decomposing tightly coupled components into a reusable design system improving cross-team consistency.",
  },
  {
    id: 4,
    description:
      "Partnered with product, design, and business stakeholders to scope and deliver improvements to the customer lesson booking workflow, driving a smoother checkout experience",
  },
  {
    id: 5,
    description:
      "Performed code reviews, code quality improvements, and contributed to technical documentation.",
  },
];
