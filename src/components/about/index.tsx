const experiences = [
  {
    period: "2022 – 2026",
    role: "Associate Software Engineer",
    company: "Guitar Center — Lessons Team",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="flex flex-col gap-10 px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <p className="font-mono uppercase text-gold text-xs tracking-widest whitespace-nowrap">
            About
          </p>
          <div className="flex-1 h-px bg-light-blue" />
        </div>
        <div className="flex gap-16">
          {/* Bio — takes more space */}
          <div className="flex flex-col gap-5 flex-[3]">
            <p className="text-muted-gray leading-relaxed">
              I&apos;m a front-end engineer with{" "}
              <span className="text-navy font-semibold">4 years</span> building
              production web applications. My applications have served both
              internal employees and thousands of users.
            </p>
            <p className="text-muted-gray leading-relaxed">
              My work sits at the intersection of good engineering and good
              design. I care deeply about UI/UX, component architecture, and
              easy-to-use APIs — but what I enjoy most is taking an idea and
              going through the process of creating it and{" "}
              <span className="text-navy font-semibold">
                shipping it to thousands of users.
              </span>
            </p>
            <p className="text-muted-gray leading-relaxed">
              Currently based in{" "}
              <span className="text-navy font-semibold">Los Angeles.</span> Open
              to remote and hybrid roles.
            </p>
          </div>

          {/* Experience — takes less space */}
          <div className="flex flex-col gap-6 flex-[2]">
            <p className="font-mono uppercase text-gold text-xs tracking-widest">
              Experience
            </p>
            <div className="flex flex-col gap-6 border-l-2 border-light-blue pl-6">
              {experiences.map((exp) => (
                <div key={exp.company}>
                  <p className="font-mono text-gold text-xs uppercase tracking-wide mb-1">
                    {exp.period}
                  </p>
                  <p className="text-navy font-semibold text-sm">{exp.role}</p>
                  <p className="text-muted-gray text-sm">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
