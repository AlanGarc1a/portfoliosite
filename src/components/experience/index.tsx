// components/journey.tsx
import { experiences } from "@/lib/data";
import { Calendar, MapPin } from "lucide-react";

const Journey = () => {
  return (
    <section id="experience" className="bg-cream py-20">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-10">
          <p className="font-mono uppercase text-gold text-xs tracking-widest whitespace-nowrap">
            Experience
          </p>
          <div className="flex-1 h-px bg-light-blue" />
        </div>

        <div className="border border-light-blue rounded-lg overflow-hidden">
          {/* Card header */}
          <div className="bg-pale-blue border-b border-light-blue px-6 py-5">
            <p className="font-serif text-navy text-lg font-bold mb-1">
              Guitar Center Corporate
            </p>
            <p className="text-blue text-sm font-semibold mb-3">
              Software Engineer — Lessons Team
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs border border-light-blue bg-white rounded-full px-3 py-1">
                <Calendar
                  className="w-3.5 h-3.5 text-blue"
                  aria-hidden="true"
                />
                <span className="text-blue font-mono">
                  July 2022 – June 2026
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs border border-light-blue bg-white rounded-full px-3 py-1">
                <MapPin className="w-3.5 h-3.5 text-blue" aria-hidden="true" />
                <span className="text-blue font-mono">
                  Remote — Westlake Village
                </span>
              </div>
              <div className="flex items-center text-xs border border-light-blue bg-white rounded-full px-3 py-1">
                <span className="text-blue font-mono">Ecommerce</span>
              </div>
            </div>
          </div>

          {/* Bullets */}
          <div className="px-6 py-5">
            <ul className="flex flex-col gap-0">
              {experiences.map((e, index) => (
                <li
                  key={e.id}
                  className="flex items-start gap-4 py-3.5 border-b border-light-blue last:border-b-0"
                >
                  <span className="font-mono text-gold text-xs pt-0.5 flex-shrink-0">
                    0{index + 1}
                  </span>
                  <p className="text-muted-gray text-sm leading-relaxed">
                    {e.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
