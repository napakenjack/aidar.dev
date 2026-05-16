import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function CRMShowcase() {
  return (
    <SectionTransition className="py-24 md:py-32 bg-navy relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
              Не шаблонная CRM, а <span className="text-blue-400">система под ваши процессы</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Мы проектируем системы вокруг того, как реально работает ваш бизнес: лиды, клиенты, менеджеры, задачи, статусы и аналитика. Никаких лишних кнопок, только то, что нужно для роста.
            </p>

            <ul className="space-y-4 mb-12">
              {["Экран заявок", "Карточка клиента", "Статусы сделки", "Аналитика", "Задачи менеджеров"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="glass-panel p-6 rounded-2xl">
              <p className="text-sm text-slate-400 uppercase tracking-wider mb-4 font-medium">Подходит для:</p>
              <div className="flex flex-wrap gap-2">
                {siteData.crmShowcase.industries.map((industry) => (
                  <span key={industry} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Abstract UI representation */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl bg-[#0B1120] border border-white/10 shadow-[0_0_50px_rgba(0,163,255,0.15)] overflow-hidden"
            >
              {/* Fake Chrome */}
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              
              <div className="p-6 md:p-8 grid gap-6">
                {/* Visual Dashboard Mockup inside code */}
                <div className="flex justify-between items-center mb-4">
                  <div className="h-6 w-32 bg-white/10 rounded-md" />
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 grid place-items-center text-blue-400 text-xs font-bold">DS</div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                      <div className="h-4 w-1/2 bg-white/10 rounded" />
                      <div className="h-6 w-3/4 bg-blue-400/20 rounded" />
                    </div>
                  ))}
                </div>

                <div className="h-48 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden flex items-end px-4 gap-4 pb-4">
                   {/* Fake chart bars */}
                   {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                     <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                        key={i} 
                        className="flex-1 bg-blue-500/40 rounded-t-sm"
                     />
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
