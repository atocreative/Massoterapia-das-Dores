import Image from "next/image";

export default function CinematicCTA() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/pexels/service-back-massage.jpg"
          alt="Sessão de massagem terapêutica"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,46,15,0.92) 0%, rgba(26,46,15,0.75) 60%, rgba(26,46,15,0.50) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content — single message, single CTA */}
      <div className="relative z-10 flex items-center min-h-[480px]">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#99d252] mb-5">
              Pronto para transformar?
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
              Seu corpo pede{" "}
              <span className="italic text-[#99d252]">cuidado</span> —{" "}
              responda a esse chamado.
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Agende agora pelo WhatsApp e receba orientação personalizada sobre
              qual terapia é mais indicada para o seu caso.
            </p>
            <a
              href="https://wa.me/5561954804440"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#99d252] hover:bg-[#88bb42] text-[#1a2e0f] font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.352-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.504-5.22-1.384l-.374-.22-3.771.895.912-3.672-.243-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
