import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100svh",
        clipPath: "polygon(0 0, 100% 0, 100% 93%, 0 100%)",
        marginBottom: "-5rem",
      }}
    >
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/pexels/hero-massage-4k.jpg"
          alt="Sessão de massagem terapêutica profissional"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,46,15,0.88) 0%, rgba(45,80,22,0.72) 50%, rgba(153,210,82,0.22) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Ghost typography layer */}
        <div
          className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-[22vw] font-[family-name:var(--font-playfair)] font-bold leading-none text-white/[0.04] pr-4 pb-8 tracking-tighter"
          >
            bem-estar
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-32 text-center text-white">
        <h1
          className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] tracking-tight mb-7"
        >
          Conquiste{" "}
          <span className="font-bold text-[#99d252]">bem-estar</span>{" "}
          e{" "}
          <em className="not-italic font-bold text-[#c8f078]">alivie</em>{" "}
          dores com{" "}
          <span className="italic">profissionais</span>{" "}
          especializados
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/75 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Terapias personalizadas em Brasília, DF — cuidando do seu corpo,
          mente e emoções com carinho.
        </p>

        <a
          href="https://api.whatsapp.com/message/WSIT3GPYNFINL1?autoload=1&app_absent=0&utm_source=ig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#99d252] hover:bg-[#88bb42] active:bg-[#77aa32] text-[#1a2e0f] font-semibold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.352-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.504-5.22-1.384l-.374-.22-3.771.895.912-3.672-.243-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Agendar pelo WhatsApp
        </a>

      </div>

      {/* Safe-area bottom spacer for iOS */}
      <div className="absolute bottom-0 left-0 right-0 h-[env(safe-area-inset-bottom)]" aria-hidden="true" />
    </section>
  );
}
