import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/2a26c2d7-e0b9-4dcb-b326-51961abc6286/files/57f33ae9-6059-4365-bb4d-8c526d9a35da.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "services", label: "Услуги" },
  { id: "about", label: "О компании" },
  { id: "contacts", label: "Контакты" },
];

const CATALOG_CATEGORIES = [
  { id: "all", label: "Весь каталог" },
  { id: "sheet", label: "Листовой прокат" },
  { id: "pipe", label: "Трубы" },
  { id: "beam", label: "Балки и швеллер" },
  { id: "angle", label: "Уголок" },
  { id: "rod", label: "Арматура и прут" },
];

const PRODUCTS = [
  { id: 1, category: "sheet", name: "Лист горячекатаный", spec: "ст3сп, ГОСТ 19903-2015", sizes: "2–50 мм × 1250–2500 мм", price: "от 68 900 ₽/т", tag: "Популярно" },
  { id: 2, category: "sheet", name: "Лист холоднокатаный", spec: "08кп, ГОСТ 19904-2012", sizes: "0.5–5 мм × 1000–2000 мм", price: "от 82 500 ₽/т", tag: "" },
  { id: 3, category: "pipe", name: "Труба круглая бесшовная", spec: "ст20, ГОСТ 8732-78", sizes: "Ø 25–325 мм", price: "от 74 000 ₽/т", tag: "Популярно" },
  { id: 4, category: "pipe", name: "Труба профильная", spec: "ст3сп, ГОСТ 8645-68", sizes: "20×20 – 200×200 мм", price: "от 71 000 ₽/т", tag: "" },
  { id: 5, category: "beam", name: "Двутавровая балка", spec: "ст3сп5, ГОСТ 8239-89", sizes: "Б10–Б60, длина 6–12 м", price: "от 72 500 ₽/т", tag: "" },
  { id: 6, category: "beam", name: "Швеллер", spec: "ст3сп, ГОСТ 8240-97", sizes: "5П–40П, длина 6–12 м", price: "от 73 000 ₽/т", tag: "" },
  { id: 7, category: "angle", name: "Уголок равнополочный", spec: "ст3сп, ГОСТ 8509-93", sizes: "20×3 – 200×20 мм", price: "от 70 000 ₽/т", tag: "Популярно" },
  { id: 8, category: "rod", name: "Арматура рифлёная", spec: "А500С, ГОСТ 52544-2006", sizes: "Ø 6–40 мм, длина 11.7 м", price: "от 63 000 ₽/т", tag: "Акция" },
];

const PRICE_LISTS = [
  { name: "Листовой прокат", date: "апрель 2026", file: "#" },
  { name: "Трубы и профили", date: "апрель 2026", file: "#" },
  { name: "Балки, швеллер, уголок", date: "апрель 2026", file: "#" },
  { name: "Арматура и прут", date: "апрель 2026", file: "#" },
];

const SERVICES = [
  { icon: "Scissors", title: "Резка металла", desc: "Плазменная, газовая и лазерная резка по чертежам заказчика. Точность до 0.1 мм." },
  { icon: "Wrench", title: "Сварочные работы", desc: "Изготовление металлоконструкций любой сложности: рамы, фермы, опоры, ворота." },
  { icon: "Layers", title: "Гибка и штамповка", desc: "Гибка листа до 20 мм на листогибочных прессах. Серийное и единичное производство." },
  { icon: "Shield", title: "Антикоррозийная обработка", desc: "Грунтовка, покраска, цинкование. Защита изделий в любых условиях эксплуатации." },
  { icon: "Truck", title: "Доставка", desc: "Собственный парк манипуляторов и бортовых машин. Доставка по городу и регионам." },
  { icon: "FileText", title: "Проектирование", desc: "Разработка КМД, расчёт несущих конструкций, согласование документации." },
];

const STATS = [
  { value: "18+", label: "лет на рынке" },
  { value: "6 000+", label: "тонн в наличии" },
  { value: "1 200+", label: "клиентов" },
  { value: "47", label: "регионов доставки" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--steel-dark)" }}>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(13,15,18,0.97)", borderBottom: "1px solid var(--steel-border)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
              <div className="w-8 h-8 flex items-center justify-center" style={{ background: "var(--rust)" }}>
                <Icon name="Triangle" size={16} color="#0d0f12" />
              </div>
              <span className="text-lg font-bold tracking-widest uppercase" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>
                <span style={{ color: "var(--rust)" }}>Остов</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className={`nav-link text-sm font-medium tracking-wider uppercase ${activeSection === item.id ? "active" : ""}`} style={{ fontFamily: "Oswald, sans-serif", fontSize: "13px", background: "none", border: "none", cursor: "pointer" }}>
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <span style={{ color: "var(--metal-shine)", fontSize: "13px" }}>8 999 330-96-86</span>
              <button onClick={() => scrollTo("contacts")} className="px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all" style={{ fontFamily: "Oswald, sans-serif", background: "var(--rust)", color: "#0d0f12", border: "none", cursor: "pointer" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--rust-bright)")} onMouseLeave={(e) => (e.currentTarget.style.background = "var(--rust)")}>
                Связаться
              </button>
            </div>

            <button className="md:hidden p-2" style={{ color: "var(--metal-text)", background: "none", border: "none", cursor: "pointer" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div style={{ background: "var(--steel-mid)", borderTop: "1px solid var(--steel-border)" }}>
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left px-6 py-3 text-sm uppercase tracking-widest" style={{ fontFamily: "Oswald, sans-serif", color: activeSection === item.id ? "var(--rust)" : "var(--metal-text)", borderBottom: "1px solid var(--steel-border)", background: "none", border: "none", borderBottom: "1px solid var(--steel-border)", cursor: "pointer" }}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center" style={{ paddingTop: "64px" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,15,18,0.93) 0%, rgba(13,15,18,0.72) 50%, rgba(13,15,18,0.90) 100%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(224, 120, 32, 0.04) 10px, rgba(224, 120, 32, 0.04) 11px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs tracking-widest uppercase fade-up fade-up-delay-1" style={{ border: "1px solid var(--rust)", color: "var(--rust)", fontFamily: "Oswald, sans-serif" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--rust)" }} />
              Металлопрокат и металлоконструкции
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold uppercase leading-none mb-6 fade-up fade-up-delay-2" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)", letterSpacing: "0.04em" }}>
              Сталь.<br />
              <span style={{ color: "var(--rust)" }}>Надёжность.</span><br />
              Точность.
            </h1>

            <p className="text-lg leading-relaxed mb-10 fade-up fade-up-delay-3" style={{ color: "var(--metal-shine)", maxWidth: "520px", fontFamily: "Roboto, sans-serif", fontWeight: 300 }}>
              Поставки металлопроката от 1 тонны. Изготовление металлоконструкций любой сложности. Собственный склад 6 000+ тонн в наличии.
            </p>

            <div className="flex flex-wrap gap-4 fade-up fade-up-delay-4">
              <button onClick={() => scrollTo("catalog")} className="px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all" style={{ background: "var(--rust)", color: "#0d0f12", fontFamily: "Oswald, sans-serif", border: "none", cursor: "pointer", boxShadow: "0 0 20px rgba(224,120,32,0.3)" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--rust-bright)")} onMouseLeave={(e) => (e.currentTarget.style.background = "var(--rust)")}>
                Смотреть каталог
              </button>
              <button onClick={() => scrollTo("contacts")} className="px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all" style={{ border: "1px solid var(--steel-border)", color: "var(--metal-text)", fontFamily: "Oswald, sans-serif", background: "transparent", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--rust)"; e.currentTarget.style.color = "var(--rust)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--steel-border)"; e.currentTarget.style.color = "var(--metal-text)"; }}>
                Запросить прайс
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0" style={{ background: "rgba(26,30,36,0.97)", borderTop: "1px solid var(--steel-border)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {STATS.map((s, i) => (
                <div key={i} className="py-5 px-6 text-center" style={{ borderRight: i < 3 ? "1px solid var(--steel-border)" : "none" }}>
                  <div className="text-2xl font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "var(--rust)" }}>{s.value}</div>
                  <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "var(--metal-shine)", fontFamily: "Oswald, sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-8">
            <div>
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--rust)", fontFamily: "Oswald, sans-serif" }}>— Ассортимент</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>
                Каталог <span style={{ color: "var(--rust)" }}>металлопроката</span>
              </h2>
            </div>

            <div style={{ minWidth: "290px" }}>
              <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--metal-shine)", fontFamily: "Oswald, sans-serif" }}>Скачать актуальные прайсы:</div>
              <div className="space-y-2">
                {PRICE_LISTS.map((p, i) => (
                  <a key={i} href={p.file} className="flex items-center justify-between px-4 py-2.5 transition-all" style={{ background: "var(--steel-mid)", border: "1px solid var(--steel-border)", textDecoration: "none", display: "flex" }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--rust)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--steel-border)")}>
                    <div>
                      <div className="text-xs font-medium" style={{ color: "var(--metal-text)", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}>{p.name}</div>
                      <div className="text-xs" style={{ color: "var(--metal-shine)" }}>Обновлён: {p.date}</div>
                    </div>
                    <Icon name="Download" size={16} color="var(--rust)" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATALOG_CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className="px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all" style={{ fontFamily: "Oswald, sans-serif", background: activeCategory === cat.id ? "var(--rust)" : "var(--steel-mid)", color: activeCategory === cat.id ? "#0d0f12" : "var(--metal-shine)", border: "1px solid", borderColor: activeCategory === cat.id ? "var(--rust)" : "var(--steel-border)", cursor: "pointer" }}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="metal-card p-5 cursor-pointer relative">
                {product.tag && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 text-xs uppercase tracking-widest" style={{ background: product.tag === "Акция" ? "#c0392b" : "var(--rust)", color: "#0d0f12", fontFamily: "Oswald, sans-serif" }}>
                    {product.tag}
                  </div>
                )}
                <div className="mb-4 pb-4" style={{ borderBottom: "1px solid var(--steel-border)" }}>
                  <div className="w-10 h-10 flex items-center justify-center mb-3" style={{ background: "var(--steel-light)" }}>
                    <Icon name="Layers" size={20} color="var(--rust)" />
                  </div>
                  <h3 className="font-bold text-base uppercase leading-tight" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>{product.name}</h3>
                </div>
                <div className="space-y-1.5 mb-4">
                  <div className="text-xs" style={{ color: "var(--metal-shine)" }}>
                    <span style={{ color: "var(--rust)" }}>ГОСТ: </span>{product.spec}
                  </div>
                  <div className="text-xs" style={{ color: "var(--metal-shine)" }}>
                    <span style={{ color: "var(--rust)" }}>Размеры: </span>{product.sizes}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-base font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>{product.price}</div>
                  <button className="px-3 py-1.5 text-xs uppercase tracking-wider transition-all" style={{ background: "var(--rust)", color: "#0d0f12", fontFamily: "Oswald, sans-serif", border: "none", cursor: "pointer" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--rust-bright)")} onMouseLeave={(e) => (e.currentTarget.style.background = "var(--rust)")}>
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: "var(--steel-mid)", backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(224,120,32,0.04) 10px, rgba(224,120,32,0.04) 11px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--rust)", fontFamily: "Oswald, sans-serif" }}>— Что мы делаем</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>
              Услуги по <span style={{ color: "var(--rust)" }}>изготовлению</span><br />металлоконструкций
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <div key={i} className="p-6 transition-all" style={{ background: "var(--steel-dark)", border: "1px solid var(--steel-border)", borderLeft: "3px solid var(--rust)", cursor: "default" }} onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--steel-light)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(224,120,32,0.12)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--steel-dark)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                <div className="w-12 h-12 flex items-center justify-center mb-4" style={{ background: "var(--steel-mid)" }}>
                  <Icon name={service.icon} size={22} color="var(--rust)" fallback="Settings" />
                </div>
                <h3 className="font-bold text-lg uppercase mb-2" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--metal-shine)", fontFamily: "Roboto, sans-serif", fontWeight: 300 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: "var(--rust)" }}>
            <div>
              <h3 className="text-2xl font-bold uppercase" style={{ fontFamily: "Oswald, sans-serif", color: "#0d0f12" }}>Есть проект? Рассчитаем стоимость бесплатно</h3>
              <p className="text-sm mt-1" style={{ color: "rgba(0,0,0,0.65)" }}>Пришлите чертежи или опишите задачу — ответим в течение 2 часов</p>
            </div>
            <button onClick={() => scrollTo("contacts")} className="shrink-0 px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all" style={{ background: "#0d0f12", color: "var(--rust)", fontFamily: "Oswald, sans-serif", border: "none", cursor: "pointer" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--steel-mid)")} onMouseLeave={(e) => (e.currentTarget.style.background = "#0d0f12")}>
              Отправить запрос
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--rust)", fontFamily: "Oswald, sans-serif" }}>— О компании</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>
                18 лет в <span style={{ color: "var(--rust)" }}>металле</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--metal-shine)", fontFamily: "Roboto, sans-serif", fontWeight: 300 }}>
                Остов основан в 2006 году. За эти годы мы выросли из небольшого склада в полноценное металлообрабатывающее предприятие с собственным производством, парком оборудования и профессиональной командой.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--metal-shine)", fontFamily: "Roboto, sans-serif", fontWeight: 300 }}>
                Мы работаем напрямую с крупнейшими металлургическими комбинатами России — это позволяет предлагать лучшие цены и гарантировать качество по ГОСТ.
              </p>
              <div className="space-y-3">
                {["Собственный склад площадью 8 500 м²", "Сертифицированная лаборатория контроля качества", "Отдел проектирования металлоконструкций", "Транспортный парк: 12 единиц спецтехники", "Работа с НДС, заключение договоров"].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center mt-0.5" style={{ background: "var(--rust)" }}>
                      <Icon name="Check" size={12} color="#0d0f12" />
                    </div>
                    <span className="text-sm" style={{ color: "var(--metal-text)", fontFamily: "Roboto, sans-serif" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--metal-shine)", fontFamily: "Oswald, sans-serif" }}>Производственные возможности</div>
              {[
                { label: "Резка металла", value: "до 50 мм", percent: 90 },
                { label: "Гибка листа", value: "до 20 мм", percent: 75 },
                { label: "Сварочные работы", value: "любая сложность", percent: 95 },
                { label: "Антикоррозийная обработка", value: "5 видов", percent: 70 },
                { label: "Лазерная резка", value: "до 10 мм", percent: 80 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)", letterSpacing: "0.05em" }}>{item.label}</span>
                    <span className="text-xs" style={{ color: "var(--rust)", fontFamily: "Oswald, sans-serif" }}>{item.value}</span>
                  </div>
                  <div className="h-1.5 w-full" style={{ background: "var(--steel-light)" }}>
                    <div className="h-full" style={{ width: `${item.percent}%`, background: "var(--rust)" }} />
                  </div>
                </div>
              ))}

              <div className="mt-8 p-5" style={{ background: "var(--steel-mid)", border: "1px solid var(--steel-border)", borderLeft: "3px solid var(--rust)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Award" size={20} color="var(--rust)" />
                  <span className="font-bold text-sm uppercase tracking-widest" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>Сертификаты качества</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--metal-shine)" }}>
                  ISO 9001:2015, СРО НП «Строители», сертификат соответствия на сварочные работы, разрешение Ростехнадзора на изготовление сосудов давления.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ background: "var(--steel-mid)", borderTop: "1px solid var(--steel-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--rust)", fontFamily: "Oswald, sans-serif" }}>— Свяжитесь с нами</div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>
              Контакты и <span style={{ color: "var(--rust)" }}>адреса</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="p-8" style={{ background: "var(--steel-dark)", border: "1px solid var(--steel-border)" }}>
              <h3 className="text-xl font-bold uppercase mb-6" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>Оставьте заявку</h3>
              <div className="space-y-4">
                {[
                  { label: "Имя и организация", placeholder: "ООО «Ваша компания»", type: "text" },
                  { label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                  { label: "Email", placeholder: "info@company.ru", type: "email" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-shine)" }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} className="w-full px-4 py-3 text-sm outline-none transition-all" style={{ background: "var(--steel-mid)", border: "1px solid var(--steel-border)", color: "var(--metal-text)", fontFamily: "Roboto, sans-serif" }} onFocus={(e) => (e.target.style.borderColor = "var(--rust)")} onBlur={(e) => (e.target.style.borderColor = "var(--steel-border)")} />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-1.5" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-shine)" }}>Сообщение / описание задачи</label>
                  <textarea rows={4} placeholder="Опишите что нужно: материал, размеры, количество..." className="w-full px-4 py-3 text-sm outline-none transition-all resize-none" style={{ background: "var(--steel-mid)", border: "1px solid var(--steel-border)", color: "var(--metal-text)", fontFamily: "Roboto, sans-serif" }} onFocus={(e) => (e.target.style.borderColor = "var(--rust)")} onBlur={(e) => (e.target.style.borderColor = "var(--steel-border)")} />
                </div>
                <button className="w-full py-4 font-bold tracking-widest uppercase transition-all" style={{ background: "var(--rust)", color: "#0d0f12", fontFamily: "Oswald, sans-serif", fontSize: "13px", border: "none", cursor: "pointer" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--rust-bright)")} onMouseLeave={(e) => (e.currentTarget.style.background = "var(--rust)")}>
                  Отправить заявку
                </button>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { title: "Главный офис и склад", addr: "г. Москва, пр-т Промышленный, д. 14, стр. 2", hours: "Пн–Пт: 8:00–18:00, Сб: 9:00–15:00", phone: "8 999 330-96-86", email: "ooo.ostov@mail.ru" },
                { title: "Производственный цех", addr: "Московская обл., г. Химки, ул. Заводская, д. 8", hours: "Пн–Пт: 7:00–19:00", phone: "8 913 899-72-07", email: "ooo.ostov@mail.ru" },
              ].map((office, i) => (
                <div key={i} className="p-6" style={{ background: "var(--steel-dark)", border: "1px solid var(--steel-border)", borderLeft: "3px solid var(--rust)" }}>
                  <h4 className="font-bold text-base uppercase mb-4" style={{ fontFamily: "Oswald, sans-serif", color: "var(--metal-text)" }}>{office.title}</h4>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={15} color="var(--rust)" />
                      <span className="text-sm" style={{ color: "var(--metal-shine)" }}>{office.addr}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={15} color="var(--rust)" />
                      <span className="text-sm" style={{ color: "var(--metal-shine)" }}>{office.hours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={15} color="var(--rust)" />
                      <a href={`tel:${office.phone.replace(/\D/g, "")}`} className="text-sm" style={{ color: "var(--metal-text)", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rust)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--metal-text)")}>{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={15} color="var(--rust)" />
                      <a href={`mailto:${office.email}`} className="text-sm" style={{ color: "var(--metal-text)", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rust)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--metal-text)")}>{office.email}</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-6" style={{ background: "var(--steel-dark)", border: "1px solid var(--steel-border)" }}>
                <div className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--metal-shine)", fontFamily: "Oswald, sans-serif" }}>Мессенджеры и соцсети</div>
                <div className="flex gap-3 flex-wrap">
                  {[{ label: "WhatsApp", icon: "MessageCircle" }, { label: "Telegram", icon: "Send" }, { label: "ВКонтакте", icon: "Users" }].map((s, i) => (
                    <button key={i} className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider transition-all" style={{ background: "var(--steel-mid)", border: "1px solid var(--steel-border)", color: "var(--metal-text)", fontFamily: "Oswald, sans-serif", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--rust)"; e.currentTarget.style.color = "var(--rust)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--steel-border)"; e.currentTarget.style.color = "var(--metal-text)"; }}>
                      <Icon name={s.icon} size={14} fallback="Link" />
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "var(--steel-dark)", borderTop: "1px solid var(--steel-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              <div className="w-6 h-6 flex items-center justify-center" style={{ background: "var(--rust)" }}>
                <Icon name="Triangle" size={11} color="#0d0f12" />
              </div>
              <span style={{ color: "var(--metal-shine)", fontSize: "13px" }}>ООО Остов © 2006–2026. Все права защищены.</span>
            </div>
            <div className="flex gap-6">
              {["Политика конфиденциальности", "Реквизиты"].map((link, i) => (
                <a key={i} href="#" className="text-xs transition-colors" style={{ color: "var(--metal-shine)", textDecoration: "none" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rust)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--metal-shine)")}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}