import React from 'react';
import { ArrowUp, Mail, MapPin, Globe, Atom, ExternalLink } from 'lucide-react';
import { CONFERENCE_INFO, GOOGLE_FORM_URL } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#050f1f] text-white border-t border-[#00a3ff]/20 pt-16 pb-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-md border border-white/80 shrink-0" title="Université Ibn Tofaïl">
                  <img src="/logo-uit.png" alt="Logo Université Ibn Tofaïl" className="w-full h-full object-contain" />
                </div>
                <div className="h-11 px-2 rounded-xl bg-white p-1 flex items-center justify-center shadow-md border border-white/80 shrink-0" title="Laboratory of Advanced Materials and Process Engineering">
                  <img src="/logo-lab-advanced.svg" alt="Logo Laboratoire" className="h-full w-auto max-w-[140px] object-contain" />
                </div>
              </div>
              <div>
                <span className="font-title text-2xl font-bold tracking-tight text-white block">
                  LAMPE 2026
                </span>
                <span className="text-[0.68rem] tracking-wider uppercase text-[#8da9c4] font-semibold">
                  {CONFERENCE_INFO.university.name} • {CONFERENCE_INFO.campus}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-[#8da9c4] max-w-md leading-relaxed">
              {CONFERENCE_INFO.edition[language]} — {CONFERENCE_INFO.lab.name[language]} ({CONFERENCE_INFO.lab.sigle}). {t("Événement académique dédié aux avancées doctorales et au transfert scientifique.", "Academic event dedicated to doctoral advances and scientific knowledge transfer.")}
            </p>

            <div className="text-xs text-[#8da9c4] space-y-2 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                <span>{CONFERENCE_INFO.venue[language]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f5a623]" />
                <a href={`mailto:${CONFERENCE_INFO.contact.email}`} className="hover:text-[#38bdf8] transition-colors">
                  {CONFERENCE_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#00bf72]" />
                <a href="https://www.uit.ac.ma" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors">
                  {CONFERENCE_INFO.contact.website}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] block">
              {t("Navigation Rapide", "Quick Navigation")}
            </span>
            <ul className="space-y-2 text-[#8da9c4]">
              {[
                { label: t("Accueil", "Home"), href: "#hero" },
                { label: t("À propos de LAMPE", "About LAMPE"), href: "#a-propos" },
                { label: t("Thèmes de Recherche", "Research Themes"), href: "#themes" },
                { label: t("Conférenciers Pléniers", "Keynote Speakers"), href: "#conferenciers" },
                { label: t("Processus de Soumission", "Submission Process"), href: "#soumission" },
                { label: t("Comités d'Organisation", "Organizing Committees"), href: "#comites" },
                { label: t("Informations Pratiques", "Practical Info"), href: "#infos" },
                { label: t("Foire Aux Questions", "FAQ"), href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Registration Google Form & Official Links */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8] block">
              {t("Inscription Officielle", "Official Registration")}
            </span>
            <p className="text-xs text-[#8da9c4] leading-relaxed">
              {t(
                "Le formulaire officiel d'inscription et de proposition de communication est hébergé sur Google Forms.",
                "The official registration and abstract submission form is hosted on Google Forms."
              )}
            </p>
            <a
              id="footer-google-form-btn"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#00a3ff] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-opacity cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
            >
              <span>{t("Accéder au Google Formulaire", "Access Google Form")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="pt-2 text-[0.7rem] text-[#8da9c4]">
              <span>{CONFERENCE_INFO.university.name} • {CONFERENCE_INFO.university.faculty[language]}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8da9c4]">
          <div>
            © 2026 {CONFERENCE_INFO.lab.sigle} — {CONFERENCE_INFO.university.name}. {t("Tous droits réservés.", "All rights reserved.")}
          </div>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/80 hover:text-[#38bdf8] transition-colors cursor-pointer py-1 px-2 rounded hover:bg-white/5"
          >
            <span>{t("Haut de page", "Back to top")}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
