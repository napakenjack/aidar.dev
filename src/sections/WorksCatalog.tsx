import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";
import { ArrowUpRight } from "lucide-react";

export function WorksCatalog() {
  return (
    <SectionTransition id="works" className="py-24 md:py-32 bg-navy relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
            Избранные <br className="hidden md:block"/>работы
          </h2>
          <p className="text-slate-400 max-w-md">
            Проекты, разработанные с фокусом на удобство, конверсию и бизнес-задачи.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {siteData.works.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3] bg-white/5">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight strokeWidth={2} />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="text-sm font-medium text-blue-400 uppercase tracking-wider">{work.category}</div>
                <h3 className="text-2xl font-display text-white">{work.title}</h3>
                <p className="text-slate-400 line-clamp-2">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
