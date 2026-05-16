import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";
import { AlertCircle } from "lucide-react";

export function ClientProblem() {
  return (
    <SectionTransition id="problem" className="py-24 md:py-32 bg-navy relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
            Если бизнес работает в мессенджерах, Excel и хаосе — <span className="text-blue-400">заявки теряются</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.problems.map((problem, i) => (
            <div 
              key={i}
              className="glass-panel p-8 rounded-2xl flex flex-col gap-4 border border-red-500/10 hover:border-red-500/20 transition-colors"
            >
              <AlertCircle className="w-8 h-8 text-red-400/80" />
              <p className="text-slate-300 text-lg">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
