export default function Contato() {
  return (
    <section
      id="contato"
      className="relative pt-24 pb-24 bg-white overflow-hidden"
    >
      {/* Ghost number */}
      <span
        className="absolute top-8 right-[-1rem] text-[18vw] font-[family-name:var(--font-playfair)] font-bold leading-none select-none pointer-events-none" style={{color: 'rgba(153,210,82,0.15)'}}
        aria-hidden="true"
      >
        03
      </span>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7ab83e] mb-4">
            Entre em contato
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a2e0f] leading-tight max-w-lg">
            Agende sua sessão{" "}
            <span className="italic text-[#99d252]">agora</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* WhatsApp — primary card */}
          <div className="md:col-span-2 bg-[#1a2e0f] rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-8">
            <div>
              <p className="text-[#99d252] text-xs font-semibold tracking-widest uppercase mb-3">
                WhatsApp
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-white font-normal leading-snug mb-4">
                A forma mais rápida de agendar e tirar dúvidas sobre sua terapia
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Respondemos com agilidade e orientamos qual protocolo é mais
                adequado para o seu caso antes mesmo da primeira sessão.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://wa.me/5561954804440"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#99d252] hover:bg-[#88bb42] text-[#1a2e0f] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-px text-base"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.352-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.504-5.22-1.384l-.374-.22-3.771.895.912-3.672-.243-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                +55 61 9548-0440
              </a>
              <span className="text-white/30 text-sm">Atendimento em Brasília, DF</span>
            </div>
          </div>

          {/* Instagram card */}
          <div className="bg-[#f0f4c3] rounded-3xl p-8 flex flex-col justify-between gap-6">
            <div>
              <p className="text-[#7ab83e] text-xs font-semibold tracking-widest uppercase mb-3">
                Instagram
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-xl text-[#1a2e0f] font-normal leading-snug mb-3">
                Acompanhe dicas de bem-estar e novidades
              </p>
              <p className="text-[#333333]/60 text-sm leading-relaxed">
                Conteúdo sobre terapias, saúde e qualidade de vida publicado regularmente.
              </p>
            </div>
            <a
              href="https://www.instagram.com/massoterapiadasdores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a2e0f] font-semibold text-sm border border-[#99d252] hover:bg-[#99d252] px-5 py-3 rounded-full transition-all duration-300 w-fit"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @massoterapiadasdores
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
