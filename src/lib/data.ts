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
];
