import { SectionTransition } from "../components/SectionTransition";

const niches = [
  "Турфирмы", "Медицинские центры", "Сервисные компании", 
  "Онлайн-магазины", "Агентства недвижимости", "Образовательные центры", 
  "B2B-компании", "Локальный бизнес", "Строительные компании"
];

export function WhoItIsFor() {
  return (
    <SectionTransition className="py-24 md:py-32 bg-primary border-t border-border-subtle relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-medium text-main mb-16 max-w-3xl">
          Подходит для бизнесов, где важны заявки, клиенты и контроль
        </h2>

        <div className="flex flex-wrap gap-4">
          {niches.map((niche) => (
            <div 
              key={niche} 
              className="px-6 py-4 rounded-full border border-border-medium bg-fg-subtle text-muted font-medium whitespace-nowrap hover:bg-fg-medium transition-colors"
            >
              {niche}
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
