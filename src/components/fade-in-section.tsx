"use client";

import { motion } from "framer-motion";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const FadeInSection = ({
  children,
  className,
  delay = 0,
}: FadeInSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
