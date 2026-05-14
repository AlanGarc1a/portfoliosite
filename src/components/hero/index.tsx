import { Download } from "lucide-react";
import Button from "@/components/button";

const Hero = () => {
  return (
    <section
      aria-label="Hero"
      className="w-full max-w-4xl mx-auto py-20 px-8 flex flex-col gap-6"
    >
      <p className="text-gold uppercase tracking-widest text-xs">
        Software Engineer - React / Next.js
      </p>
      <h1 className="text-white text-5xl font-bold leading-tight">
        Building things that{" "}
        <em className="text-gold not-italic">actually work</em>
      </h1>
      <p className="text-white text-base leading-relaxed max-w-sm">
        Full-stack engineer specialising in React, Next.js, and scalable Node
        backends. Currently open to full-time.
      </p>
      <div className="flex gap-3 pt-2">
        <Button variant="primary">
          {" "}
          <Download className="w-4 h-4" aria-hidden="true" />
          Download CV
        </Button>
        <Button variant="secondary">Get in touch</Button>
      </div>
    </section>
  );
};

export default Hero;
