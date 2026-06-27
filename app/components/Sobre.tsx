import Image from "next/image";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative pt-36 pb-24 overflow-hidden"
      style={{ background: "#f0f4c3" }}
    >
      {/* Decorative background number */}
      <span
        className="absolute top-16 right-[-2rem] text-[20vw] font-[family-name:var(--font-playfair)] font-bold text-[#99d252]/10 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        01
      </span>

      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial layout: text-heavy left, logo accent right */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left column */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7ab83e] mb-4">
              Quem somos
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a2e0f] leading-tight mb-7">
              Especialistas em{" "}
              <span className="italic font-semibold text-[#2d5016]">
                bem-estar
              </span>{" "}
              que vai fundo
            </h2>
            <p className="text-[#333333]/80 text-base sm:text-lg leading-relaxed mb-6">
              A <strong className="font-semibold text-[#1a2e0f]">Massoterapia das Dores</strong> é um
              espaço dedicado ao cuidado completo do ser humano, guiado pela
              terapeuta <strong className="font-semibold text-[#1a2e0f]">Cláudia Oliveira</strong>.
              Trabalhamos com terapias manuais que atuam nas raízes da dor —
              física, emocional e energética — para devolver ao seu corpo o
              equilíbrio que ele merece.
            </p>
            <p className="text-[#333333]/70 text-base leading-relaxed mb-10">
              Com atendimento personalizado e técnicas validadas, cada sessão é
              pensada exclusivamente para você — suas queixas, seu ritmo e seus
              objetivos de saúde.
            </p>

            {/* Differentiators — editorial list, not icon boxes */}
            <ul className="space-y-4">
              {[
                "Avaliação individualizada antes de cada protocolo",
                "Técnicas terapêuticas com embasamento científico",
                "Ambiente acolhedor e confidencial em Brasília, DF",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#333333]/80 text-sm">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#99d252] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5.5l2 2 4-4" stroke="#1a2e0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo accent — large, centered */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-[#99d252]/30">
              <Image
                src="/assets/logo/logo-original.jpg"
                alt="Símbolo da Massoterapia das Dores — árvore da vida"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>

            {/* Slogan card */}
            <div className="bg-[#1a2e0f] text-white rounded-2xl px-8 py-6 max-w-xs text-center shadow-lg">
              <p className="font-[family-name:var(--font-playfair)] text-xl italic text-[#99d252] mb-2">
                &ldquo;Alívio para corpo,<br />mente e emoções&rdquo;
              </p>
              <span className="text-white/50 text-xs tracking-widest uppercase">
                Massoterapia das Dores
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider bottom → into dark section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#1a2e0f"
          />
        </svg>
      </div>
    </section>
  );
}
