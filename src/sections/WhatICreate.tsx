import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";
import { LayoutTemplate, Database, MonitorDot, PenTool } from "lucide-react";

const iconMap = [LayoutTemplate, Database, MonitorDot, PenTool];

export function WhatICreate() {
  return (
    <SectionTransition id="services" className="py-24 md:py-32 bg-navy-light relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
            Создаем цифровые инструменты <br className="hidden md:block"/>под ваш бизнес
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {siteData.services.map((service, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div 
                key={i} 
                className="group relative p-8 md:p-10 rounded-3xl glass-panel overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all">
                    <Icon strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-display text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto inline-flex items-center gap-2 text-sm text-cyan-400 font-medium uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Результат: {service.outcome}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
