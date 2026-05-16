import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";

export function BusinessResults() {
  return (
    <SectionTransition className="py-24 md:py-32 bg-navy relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white">
            Что получает бизнес после запуска
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.results.map((result, i) => (
            <div 
              key={i}
              className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors flex items-center justify-center text-center rounded-2xl min-h-[160px]"
            >
              <p className="text-lg text-slate-300 font-medium">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
