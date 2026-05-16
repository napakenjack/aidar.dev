import { SectionTransition } from "../components/SectionTransition";
import { CONTACT_WHATSAPP } from "../data/content";

export function FinalCTA() {
  return (
    <SectionTransition className="py-24 md:py-40 bg-navy relative z-10 border-t border-white/5 overflow-hidden">
      {/* Intense glow layer behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8 leading-tight">
          Хотите сайт, CRM или <br className="hidden md:block" />веб-систему под ваш бизнес?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Напишите нам — мы предложим структуру проекта под вашу нишу и покажем, как можно улучшить процесс заявок, клиентов и продаж.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={CONTACT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-navy font-bold rounded-full hover:bg-slate-200 transition-transform active:scale-95 shadow-xl w-full sm:w-auto"
          >
            Заказать сайт
          </a>
          <a
            href={CONTACT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-navy-light border border-white/10 text-white font-bold rounded-full hover:bg-slate-800 transition-transform active:scale-95 w-full sm:w-auto"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </SectionTransition>
  );
}
