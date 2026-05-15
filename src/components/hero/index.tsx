"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Button from "@/components/button";

const Hero = () => {
  return (
    <section
      aria-label="Hero"
      className="w-full max-w-4xl mx-auto py-20 px-8 flex flex-col gap-8"
    >
      <div className="w-full max-w-4xl mx-auto px-8 flex flex-col gap-6">
        {/* Eyebrow — fades in first */}
        <motion.p
          className="font-mono text-gold uppercase tracking-widest text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Software Engineer — React / Next.js
        </motion.p>

        {/* Heading — fades in second */}
        <motion.h1
          className="font-serif text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        >
          Building things that{" "}
          <em className="text-gold not-italic">actually work</em>
        </motion.h1>

        {/* Subtext — fades in third */}
        <motion.p
          className="text-muted-gray text-base leading-relaxed max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
        >
          Full-stack engineer specialising in React, Next.js, and scalable Node
          backends. Currently open to full-time and contract roles.
        </motion.p>

        {/* CTAs — fades in last */}
        <motion.div
          className="flex gap-3 pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.46 }}
        >
          <a
            href="/resume.pdf"
            download="Alan_Garcia_resume.pdf"
            className="flex items-center gap-2 bg-gold text-navy font-semibold font-mono text-sm px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download CV
          </a>
          <Button
            variant="secondary"
            size="md"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
