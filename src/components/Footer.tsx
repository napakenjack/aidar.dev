import { CONTACT_WHATSAPP } from "../data/content";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-navy-light text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center text-left">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded-sm transform rotate-45 flex items-center justify-center">
                <span className="text-white font-bold text-xs -rotate-45">DS</span>
              </div>
              <span className="font-semibold tracking-tight text-white hidden sm:block">DIGITAL SPECIALIST</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Разрабатываю сайты, CRM и веб-системы для бизнеса, который заботится о конверсии и контроле.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-4">
            <a 
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              WhatsApp: +7 775 401 5204
            </a>
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Digital System. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
