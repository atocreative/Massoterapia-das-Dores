import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ background: "#1a2e0f" }}
    >
      {/* Diagonal top connector from white section */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-8">
          <polygon points="0,0 1440,40 0,40" fill="white" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden">
                <Image
                  src="/assets/logo/logo-original.jpg"
                  alt="Massoterapia das Dores"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-[family-name:var(--font-playfair)] text-white text-base font-semibold leading-tight">
                Massoterapia<br />
                <span className="font-normal text-sm text-[#99d252]">das Dores</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Especialistas em bem-estar. Terapias personalizadas com carinho
              para o seu corpo, mente e emoções.
            </p>
          </div>

          {/* Links column */}
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {[
                { label: "Sobre nós", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Contato", href: "#contato" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/55 hover:text-[#99d252] text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5561954804440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-[#99d252] text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.352-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.504-5.22-1.384l-.374-.22-3.771.895.912-3.672-.243-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  +55 61 9548-0440
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/massoterapiadasdores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-[#99d252] text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @massoterapiadasdores
                </a>
              </li>
              <li className="text-white/40 text-sm flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Brasília, DF
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>
            &copy; {new Date().getFullYear()} Massoterapia das Dores. Todos os direitos reservados.
          </span>
          {/* Developer credit — ATO. */}
          <span className="flex items-center gap-2">
            Desenvolvido por{" "}
            <a
              href="https://atodev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-70 transition-opacity duration-200 inline-flex items-center"
              aria-label="ATO."
            >
              <img
                src="/assets/logo/ato-logo.svg"
                alt="ATO."
                width={48}
                height={17}
                style={{ display: "inline", verticalAlign: "middle" }}
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
