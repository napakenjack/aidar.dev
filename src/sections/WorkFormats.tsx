import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";

export function WorkFormats() {
  return (
    <SectionTransition className="py-24 md:py-32 bg-secondary relative z-10 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-main">Форматы работы</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.formats.map((format, i) => (
            <div 
              key={i} 
              className="p-8 border border-border-medium bg-primary rounded-3xl group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-display font-bold text-xl mb-6 group-hover:bg-blue-500 group-hover:text-main transition-colors duration-300">
                {i + 1}
              </div>
              <h3 className="text-2xl font-display text-main mb-4">{format.title}</h3>
              <p className="text-sub">
                {format.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
