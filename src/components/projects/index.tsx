import Card from "@/components/card";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="bg-cream py-20">
      <div className="flex flex-col gap-10 px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <p className="text-xs font-mono text-gold tracking-widest whitespace-nowrap uppercase">
            Projects
          </p>
          <div className="flex-1 h-px bg-blue" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <Card project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
