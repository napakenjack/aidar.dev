import { Check } from "lucide-react";
import { CONTACT_WHATSAPP } from "../data/content";
import { SectionTransition } from "../components/SectionTransition";
import { motion } from "motion/react";

const plans = [
  {
    name: "Старт",
    subtitle: "Лендинг 12ч",
    description: "Один экран действия. Идеален для услуг, акций, лид-магнита.",
    price: "39 990",
    oldPrice: "79 990",
    terms: "Готов за 12 часов • Предоплата 20%",
    features: [
      "До 6 секций на одной странице",
      "Полный адаптив (моб/планшет/ПК)",
      "Форма заявки с уведомлением в WhatsApp",
      "Кнопки звонка, мессенджеров, карты",
      "Подключение домена и хостинга",
      "Базовое SEO: мета-теги, favicon, OG",
    ]
  },
  {
    name: "Продающий",
    subtitle: "Лендинг Pro",
    description: "Многоэкранный лендинг с прогревом, кейсами, отзывами, квизом.",
    price: "79 990",
    oldPrice: "159 990",
    terms: "Готов за 2–3 дня • Предоплата 30%",
    popular: true,
    features: [
      "До 12 секций + интерактив и анимации",
      "Квиз-калькулятор стоимости",
      "Кейсы, отзывы, портфолио, FAQ",
      "Интеграция с CRM (Bitrix24 / amoCRM)",
      "1 месяц бесплатных правок",
    ]
  },
  {
    name: "Бизнес",
    subtitle: "Корп. сайт / Магазин",
    description: "Многостраничник, каталог, корзина, личный кабинет, фильтры.",
    price: "199 990",
    oldPrice: "399 990",
    terms: "Готов за 7–14 дней • Этапная оплата",
    features: [
      "До 20 страниц + админ-панель",
      "Каталог товаров с фильтрами и поиском",
      "Корзина, заказы, оплата (Kaspi/Halyk)",
      "Личный кабинет клиента",
      "Расширенное SEO + копирайтинг",
      "3 месяца техподдержки",
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-primary relative overflow-hidden">
      <SectionTransition className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-main mb-6">
            Тарифы и цены
          </h2>
          <p className="text-lg text-sub max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Выберите подходящий формат для вашей задачи.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`glass-panel p-8 rounded-2xl relative flex flex-col ${
                plan.popular ? 'border-blue-500/30' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Хит продаж
                </div>
              )}
              
              <div className="mb-8">
                <div className="text-sub font-medium mb-1 tracking-wide">{plan.name}</div>
                <h3 className="text-2xl font-bold text-main mb-3">{plan.subtitle}</h3>
                <p className="text-sm text-muted h-10">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-main">{plan.price}</span>
                  <span className="text-xl font-bold text-main mb-1">₸</span>
                </div>
                <div className="text-sm text-sub line-through">{plan.oldPrice} ₸</div>
                <div className="text-xs text-blue-500 font-medium mt-2">{plan.terms}</div>
              </div>

              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 text-center rounded-xl font-semibold transition-all mb-8 ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                    : 'bg-fg-medium hover:bg-fg-subtle text-main border border-border-medium'
                }`}
              >
                Выбрать тариф
              </a>

              <div className="mt-auto space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-sub">
                    <Check className="shrink-0 w-5 h-5 text-blue-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 glass-panel p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-main mb-2">Нужно что-то посложнее?</h3>
            <p className="text-sub">Веб-приложение, маркетплейс, кастомная разработка.</p>
          </div>
          <a
            href={CONTACT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 font-medium font-display flex items-center gap-2 group whitespace-nowrap"
          >
            Обсудить индивидуальный проект 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </SectionTransition>
    </section>
  );
}
