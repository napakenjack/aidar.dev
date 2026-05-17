import { CONTACT_WHATSAPP } from "../data/content";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border-subtle bg-secondary text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center text-left">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded-sm transform rotate-45 flex items-center justify-center">
                <span className="text-main font-bold text-xs -rotate-45">ADS</span>
              </div>
              <span className="font-semibold tracking-tight text-main hidden sm:block">Aidar Dev Studio</span>
            </div>
            <p className="text-sub text-sm max-w-sm">
              Разрабатываем сайты, CRM и веб-системы для бизнеса, который заботится о конверсии и контроле.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-4">
            <a 
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-main transition-colors"
            >
              WhatsApp: +7 775 401 5204
            </a>
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Aidar Dev Studio. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
