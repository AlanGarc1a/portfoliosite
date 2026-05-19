"use client";
import { BringToFront, Server, Wrench, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Skills = {
  id: number;
  title: string;
  icon: LucideIcon;
  tech: string[];
};

export const skills: Skills[] = [
  {
    id: 1,
    title: "frontend",
    icon: BringToFront,
    tech: [
      "React.js",
      "Next.js",
      "Typescript",
      "JavaScript",
      "Tailwind css",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
  },
  {
    id: 2,
    icon: Server,
    title: "backend",
    tech: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    id: 3,
    icon: Wrench,
    title: "Tooling and Workflow",
    tech: ["Git", "Github", "Gitlab", "CI/CD", "Postman", "Figma"],
  },
];

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const pillVariant = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easing },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <p className="text-gold uppercase tracking-widest text-xs font-mono">
            skills
          </p>
          <div className="h-px bg-light-blue flex-1" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="border-2 border-pale-blue rounded-lg">
                {/* header */}
                <div className="flex gap-2 bg-light-blue p-3">
                  <Icon className="w-4 h-4 text-blue" aria-hidden="true" />
                  <p className="uppercase text-xs text-navy font-mono">
                    {s.title}
                  </p>
                </div>
                {/* body */}
                <motion.div
                  className="flex flex-wrap gap-2 p-4"
                  variants={pillContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {s.tech.map((t) => (
                    <motion.span
                      key={t}
                      variants={pillVariant}
                      className="bg-pale-blue rounded-full border border-light-blue text-navy text-xs font-mono px-3 py-1"
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
