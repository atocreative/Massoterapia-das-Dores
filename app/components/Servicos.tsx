const services = [
  {
    num: "01",
    name: "Massagem Terapêutica",
    description:
      "Técnica manual que atua em músculose tecidos profundos para aliviar tensões, contraturas e dores crônicas. Indicada para estresse, lombalgia e fadiga muscular.",
  },
  {
    num: "02",
    name: "Drenagem Linfática",
    description:
      "Manobras suaves que estimulam o sistema linfático, reduzindo inchaços, melhorando a circulação e acelerando a recuperação pós-procedimentos.",
  },
  {
    num: "03",
    name: "Shiatsu",
    description:
      "Pressão rítmica em pontos específicos do corpo inspirada na medicina tradicional japonesa. Reequilibra a energia vital e alivia dores sem uso de óleos.",
  },
  {
    num: "04",
    name: "Reflexologia",
    description:
      "Estimulação de zonas reflexas nos pés e mãos que correspondem a órgãos e sistemas do corpo. Promove relaxamento profundo e equilíbrio orgânico.",
  },
  {
    num: "05",
    name: "Liberação Miofascial",
    description:
      "Trabalho nas fáscias — tecido conectivo que envolve músculos — para eliminar restrições que causam dor, rigidez e limitação de movimento.",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="relative pt-20 pb-36 overflow-hidden"
      style={{ background: "#1a2e0f" }}
    >
      {/* Ghost number */}
      <span
        className="absolute top-12 left-[-1rem] text-[18vw] font-[family-name:var(--font-playfair)] font-bold text-white/[0.03] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        02
      </span>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#99d252] mb-4">
              Terapias disponíveis
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight max-w-xl">
              Tratamentos pensados{" "}
              <span className="italic text-[#99d252]">para você</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-white/50 text-sm max-w-xs text-right hidden md:block">
            Cada protocolo é adaptado às suas necessidades — nenhuma sessão é idêntica à outra.
          </p>
        </div>

        {/* Service list — editorial numbered layout, not card grid */}
        <div className="divide-y divide-white/10">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="group py-8 md:py-10 grid md:grid-cols-[5rem_1fr_1fr] gap-4 md:gap-8 items-start hover:bg-white/[0.03] transition-colors duration-300 rounded-lg px-2 md:px-4 -mx-2 md:-mx-4"
            >
              {/* Number */}
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#99d252]/25 group-hover:text-[#99d252]/50 transition-colors duration-300 leading-none pt-1">
                {s.num}
              </span>

              {/* Service name */}
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-normal text-white leading-snug pt-1">
                {s.name}
              </h3>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed pt-1">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA link */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5561954804440"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#99d252] hover:text-white border border-[#99d252]/40 hover:border-white/40 text-sm font-medium px-7 py-3 rounded-full transition-all duration-300"
          >
            Quero saber qual terapia é ideal para mim
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Diagonal cut bottom → cinematic CTA */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
          <polygon points="0,60 1440,0 1440,60" fill="#1a2e0f" />
        </svg>
      </div>
    </section>
  );
}
