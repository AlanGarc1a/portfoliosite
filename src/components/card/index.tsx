// components/card.tsx
import Link from "next/link";
import Pill from "@/components/pill";
import type { Project } from "@/types";

type CardProps = {
  project: Project;
};

const Card = ({ project }: CardProps) => {
  return (
    <div className="bg-white border border-light-blue rounded-md overflow-hidden flex flex-col h-full">
      {/* Coloured top accent bar */}
      <div className="h-1 bg-navy" />

      <div className="flex flex-col gap-3 p-4 flex-1">
        {/* Type tags */}
        <ul className="flex gap-3" aria-label="Project type">
          {project.type.map((t) => (
            <li
              key={t}
              className="uppercase text-blue font-mono text-xs tracking-wide"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Title */}
        <p className="text-navy font-semibold text-base">{project.title}</p>

        {/* Description */}
        <p className="text-muted-gray text-xs leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Pill key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Card footer with link */}
      {project.githubUrl && (
        <div className="px-4 py-2.5 border-t border-light-blue bg-cream">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-blue hover:text-gold transition-colors"
          >
            GitHub →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
