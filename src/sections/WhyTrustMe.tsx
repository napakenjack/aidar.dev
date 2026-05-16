import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";

export function WhyTrustMe() {
  return (
    <SectionTransition className="py-24 md:py-32 bg-navy-light relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
              Разработка не только визуала, но и <span className="text-blue-400">полной логики продукта</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Я не просто рисую красивые экраны. Я продумываю, как пользователь отправляет заявку, как менеджер её обрабатывает и как владелец бизнеса видит результат.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {siteData.trust.skills.map((skill, i) => (
              <div 
                key={i} 
                className="p-6 border border-white/5 bg-white/5 rounded-2xl flex items-center hover:bg-white/10 transition-colors"
              >
                <span className="text-slate-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
