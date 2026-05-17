import { SectionTransition } from "../components/SectionTransition";
import { CONTACT_WHATSAPP } from "../data/content";

export function FinalCTA() {
  return (
    <SectionTransition className="py-24 md:py-40 bg-primary relative z-10 border-t border-border-subtle overflow-hidden">
      {/* Intense glow layer behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-medium text-main mb-8 leading-tight">
          Запустим ваш сайт<br className="hidden md:block" /> уже сегодня
        </h2>
        <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
          Пишите в WhatsApp Айдару напрямую — без менеджеров и колл-центров. Ответим в течение 15 минут, обсудим задачу и закрепим за вами слот.
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
            className="px-10 py-5 bg-secondary border border-border-medium text-main font-bold rounded-full hover:bg-slate-800 transition-transform active:scale-95 w-full sm:w-auto"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </SectionTransition>
  );
}
