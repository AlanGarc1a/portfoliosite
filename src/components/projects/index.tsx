"use client";

import { motion, type Variants } from "framer-motion";
import Card from "@/components/card";
import { projects } from "@/lib/data";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="bg-cream py-20">
      <div className="flex flex-col gap-10 px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <p className="font-mono uppercase text-gold text-xs tracking-widest whitespace-nowrap">
            Projects
          </p>
          <div className="flex-1 h-px bg-light-blue" />
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariant}>
              <Card project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
