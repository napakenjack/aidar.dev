import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";

export function WorkProcess() {
  return (
    <SectionTransition id="process" className="py-24 md:py-32 bg-navy-light relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white">Как проходит работа</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-[49px] top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

          <div className="flex flex-col gap-12 sm:gap-20">
            {siteData.process.map((step, i) => (
              <div key={i} className="relative flex flex-col sm:flex-row gap-6 sm:gap-16 sm:items-start group">
                <div className="flex items-center gap-6 sm:gap-0 sm:block">
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-navy border border-white/10 flex items-center justify-center relative z-10 font-display text-2xl md:text-3xl text-emerald-400 group-hover:border-emerald-400/50 group-hover:text-emerald-300 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)] transition-all">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-display text-white sm:hidden">{step.title}</h3>
                </div>
                
                <div className="sm:pt-6 md:pt-8 flex-1">
                  <h3 className="text-3xl font-display text-white mb-4 hidden sm:block">{step.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
