import React, { useState } from 'react';
import { Menu, X, ChevronRight, ExternalLink, FileText } from 'lucide-react';
import { CONFERENCE_INFO, GOOGLE_FORM_URL } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenRegistration: () => void;
  onOpenTemplate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegistration, onOpenTemplate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Navigation links with Conférenciers
  const navLinks = [
    { label: t("À propos", "About"), href: "#a-propos" },
    { label: t("Thèmes", "Themes"), href: "#themes" },
    { label: t("Conférenciers", "Speakers"), href: "#conferenciers" },
    { label: t("Soumission", "Submission"), href: "#soumission" },
    { label: t("Comités", "Committees"), href: "#comites" },
    { label: t("Infos", "Info"), href: "#infos" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#07152b]/95 backdrop-blur-md border-b border-white/15 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand: Highly Visible University Ibn Tofaïl Logo & Title */}
        <a 
          id="brand-logo"
          href="#hero" 
          className="flex items-center gap-3.5 group shrink-0"
        >
          {/* Official University Ibn Tofaïl Logo */}
          <div className="flex items-center shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1.5 flex items-center justify-center group-hover:scale-105 transition-all shadow-md border border-white/80 shrink-0" title="Université Ibn Tofaïl">
              <img 
                src="/logo-uit.png" 
                alt="Logo Université Ibn Tofaïl" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-title text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-[#38bdf8] transition-colors leading-none uppercase">
                UNIVERSITÉ IBN TOFAÏL
              </span>
              <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-md bg-[#00a3ff]/20 text-[#7dd3fc] border border-[#00a3ff]/30 uppercase tracking-wider shrink-0">
                JD2L 2026
              </span>
            </div>
            <span className="text-xs sm:text-[0.8rem] text-slate-300 font-medium leading-tight mt-1 flex items-center gap-1.5">
              <span>{CONFERENCE_INFO.university.faculty[language]}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/70 font-normal">Kénitra, Maroc</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Bar */}
        <nav id="desktop-navigation" className="hidden xl:flex items-center gap-5 xl:gap-6 text-xs font-bold tracking-wide uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/80 hover:text-[#38bdf8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#38bdf8] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Abstract Template Button */}
          <button
            id="nav-template-btn"
            type="button"
            onClick={onOpenTemplate}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#38bdf8] px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer"
            title={t("Consulter le modèle d'abstract (Arial 12)", "View abstract template (Arial 12)")}
          >
            <FileText className="w-4 h-4 text-[#38bdf8]" />
            <span>{t("Modèle", "Template")}</span>
          </button>

          {/* Language Toggle */}
          <div 
            id="language-switcher"
            className="flex items-center bg-white/10 border border-white/15 rounded-xl p-0.5"
            title={t("Changer de langue", "Switch language")}
          >
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 text-[0.72rem] font-black rounded-lg transition-all cursor-pointer ${
                language === 'fr' 
                  ? 'bg-[#00a3ff] text-white shadow-xs' 
                  : 'text-[#8da9c4] hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-[0.72rem] font-black rounded-lg transition-all cursor-pointer ${
                language === 'en' 
                  ? 'bg-[#00a3ff] text-white shadow-xs' 
                  : 'text-[#8da9c4] hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Primary CTA Button: Register */}
          <a
            id="nav-register-btn"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-black uppercase tracking-wider rounded-xl bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#00a3ff] hover:brightness-110 text-white shadow-md shadow-[#0052cc]/40 transition-all cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>{t("S'inscrire", "Register")}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="xl:hidden bg-[#07152b] border-b border-white/10 px-5 py-5 flex flex-col gap-2.5 animate-fade-in shadow-2xl"
        >
          <div className="pb-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white p-1">
                <img src="/logo-uit.png" alt="UIT" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-sm text-white">{CONFERENCE_INFO.university.name}</span>
            </div>
            <span className="text-[#f5a623] font-black text-xs">JD2L 2026</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/85 hover:text-[#38bdf8] text-sm font-semibold py-2 transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-white/30" />
            </a>
          ))}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTemplate();
              }}
              className="w-full py-2.5 text-center text-xs font-bold rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#38bdf8]" />
              <span>{t("Télécharger le Modèle Abstract (Arial 12)", "Download Abstract Template (Arial 12)")}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
