"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#99d252]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden">
            <Image
              src="/assets/logo/logo-original.jpg"
              alt="Massoterapia das Dores — logo árvore da vida"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span
            className={`font-[family-name:var(--font-playfair)] text-base font-semibold leading-tight transition-colors duration-300 ${
              scrolled ? "text-[#1a2e0f]" : "text-white"
            }`}
          >
            Massoterapia<br />
            <span className="font-normal text-sm text-[#99d252]">das Dores</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Sobre", "Serviços", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("ç", "c").replace("ã", "a").replace("é", "e")}`}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#99d252] ${
                scrolled ? "text-[#333333]" : "text-white/90"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/5561954804440"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#99d252] hover:bg-[#88bb42] text-[#1a2e0f] text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-px shadow-sm hover:shadow-md"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-[#1a2e0f]" : "text-white"
          }`}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="12" x2="19" y2="12" />
                <line x1="3" y1="17" x2="19" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#99d252]/20 px-6 py-6 flex flex-col gap-4">
          {["Sobre", "Serviços", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("ç", "c").replace("ã", "a").replace("é", "e")}`}
              onClick={() => setMenuOpen(false)}
              className="text-[#333333] font-medium text-base hover:text-[#99d252] transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/5561954804440"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#99d252] text-[#1a2e0f] font-semibold text-center py-3 rounded-full"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
