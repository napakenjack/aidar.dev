import { useState } from "react";
import { SectionTransition } from "../components/SectionTransition";
import { siteData } from "../data/content";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionTransition id="faq" className="py-24 md:py-32 bg-primary relative z-10 border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-main">Частые вопросы</h2>
        </div>

        <div className="space-y-4">
          {siteData.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border rounded-2xl transition-colors overflow-hidden ${isOpen ? 'border-blue-500/30 bg-blue-500/5' : 'border-border-medium bg-fg-subtle'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-main pr-8">{item.q}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-blue-400 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-sub shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-sub leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
