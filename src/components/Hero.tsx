import React from 'react';
import { Calendar, MapPin, ExternalLink, Download, FileText, UserCheck, Users } from 'lucide-react';
import { CONFERENCE_INFO, MAIN_THEMES, GOOGLE_FORM_URL } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenRegistration: () => void;
  onOpenTemplate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistration, onOpenTemplate }) => {
  const { language, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative text-white overflow-hidden bg-[#061426] min-h-[85vh] flex items-center justify-center py-8 sm:py-12 px-3 sm:px-6 lg:px-8 border-b border-[#00a3ff]/20 w-full max-w-full"
    >
      {/* High-Visibility Campus Photograph of Université Ibn Tofaïl */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/campus-uit.jpg"
          alt="Campus de l'Université Ibn Tofaïl - Faculté des Sciences de Kénitra"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-100 contrast-105 scale-100"
        />
        {/* Refined dark gradient overlay so the campus photograph remains clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051329]/80 via-[#071933]/70 to-[#040e1d]/85" />
      </div>

      <div className="relative max-w-5xl mx-auto w-full flex flex-col items-center text-center animate-fade-in z-10">
        
        {/* Main Card Container with refined fine borders */}
        <div className="w-full backdrop-blur-md bg-[#051329]/85 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl">
          
          {/* Top Institutional Header Block */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
            
            {/* Left: Université Ibn Tofaïl */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md border border-white/20 shrink-0">
                <img 
                  src="/logo-uit.png" 
                  alt="Logo Université Ibn Tofaïl"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <span className="text-[0.62rem] font-bold text-[#f5a623] uppercase tracking-wider block">
                  {t("Établissement d'Accueil", "Host Institution")}
                </span>
                <h2 className="font-title text-sm sm:text-base font-bold text-white tracking-wide uppercase leading-tight">
                  {CONFERENCE_INFO.university.name}
                </h2>
                <p className="text-[0.72rem] text-[#38bdf8] font-medium mt-0.5">
                  {CONFERENCE_INFO.university.faculty[language]} • Kénitra
                </p>
              </div>
            </div>

            {/* Right: Laboratoire des Matériaux Avancés et Génie des Procédés */}
            <div className="flex items-center gap-3 text-left md:text-right">
              <div>
                <span className="text-[0.62rem] font-bold text-[#f5a623] uppercase tracking-wider block">
                  {t("Laboratoire Organisateur", "Organizing Laboratory")}
                </span>
                <h2 className="font-title text-sm sm:text-base font-bold text-white tracking-wide uppercase leading-tight">
                  {t("Lab. Matériaux Avancés & Génie des Procédés", "Lab. of Advanced Materials & Process Engineering")}
                </h2>
                <p className="text-[0.72rem] text-[#8da9c4] font-medium mt-0.5">
                  {CONFERENCE_INFO.university.faculty[language]} • UIT
                </p>
              </div>
              <div className="h-12 sm:h-13 px-2 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md border border-white/20 shrink-0">
                <img 
                  src="/logo-lab-advanced.svg" 
                  alt="Logo du Laboratoire" 
                  className="h-full w-auto max-w-[130px] sm:max-w-[150px] object-contain" 
                />
              </div>
            </div>
          </div>

          {/* Announcement Highlight Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-100 text-xs sm:text-[13px] font-semibold tracking-wide mb-4 shadow-sm">
            <span>
              {t(
                "Le laboratoire des matériaux avancés et génie des procédés organise",
                "The Laboratory of Advanced Materials and Process Engineering organizes"
              )}
            </span>
          </div>

          {/* Clean Edition & Main Conference Title - Well Proportioned */}
          <div className="max-w-3xl mx-auto my-1 space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#38bdf8] uppercase tracking-[0.2em]">
              <span>{t("2ème Édition Officielle", "2nd Official Edition")}</span>
              <span className="text-white/40">·</span>
              <span className="text-[#f5a623]">JD2L 2026</span>
            </div>

            <h1
              id="hero-main-title"
              className="font-title text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight uppercase leading-[1.18] drop-shadow-sm"
            >
              {t("Deuxième Journée Doctorale", "Second Doctoral Day")}
            </h1>

            {/* Tagline */}
            <div className="pt-0.5 pb-1">
              <p className="text-xs sm:text-[13.5px] font-normal tracking-wide text-slate-300 max-w-xl mx-auto leading-relaxed">
                {CONFERENCE_INFO.tagline[language]}
              </p>
            </div>
          </div>

          {/* Milestone Key Dates Strip - Compact & Refined */}
          <div className="mt-5 w-full max-w-3xl mx-auto bg-[#030d1a]/85 border border-white/10 p-3 sm:p-4 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-left">
              {/* 1. Date */}
              <div className="flex items-center gap-3 pt-1 sm:pt-0 sm:px-2">
                <div className="w-9 h-9 rounded-lg bg-[#00a3ff]/15 border border-[#00a3ff]/30 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                    {t("Date de la Journée", "Conference Date")}
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-white">
                    {CONFERENCE_INFO.date[language]}
                  </span>
                  <span className="text-[0.62rem] text-[#8da9c4] block">
                    {t("Communications orales", "Oral presentations")}
                  </span>
                </div>
              </div>

              {/* 2. Abstract Submission */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
                <div className="w-9 h-9 rounded-lg bg-[#f5a623]/15 border border-[#f5a623]/30 flex items-center justify-center text-[#f5a623] shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                    {t("Date Limite de Soumission", "Submission Deadline")}
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-[#f5a623]">
                    {CONFERENCE_INFO.abstractDeadline[language]}
                  </span>
                  <span className="text-[0.62rem] text-[#8da9c4] block">
                    {t("Abstract 1 page max (Arial 12)", "1-page abstract (Arial 12)")}
                  </span>
                </div>
              </div>

              {/* 3. Registration */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-3">
                <div className="w-9 h-9 rounded-lg bg-[#00bf72]/15 border border-[#00bf72]/30 flex items-center justify-center text-[#00bf72] shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                    {t("Clôture des Inscriptions", "Registration Deadline")}
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-[#00bf72]">
                    {CONFERENCE_INFO.registrationDeadline[language]}
                  </span>
                  <span className="text-[0.62rem] text-[#8da9c4] block">
                    {t("En ligne via Google Forms", "Online via Google Forms")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full max-w-xl mx-auto">
            {/* 1. S'INSCRIRE */}
            <a
              id="hero-register-google-form-btn"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 h-11 rounded-xl bg-[#0052cc] hover:bg-[#0041a8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#0052cc]/30 hover:scale-105 cursor-pointer flex items-center justify-center gap-2 group shrink-0"
            >
              <span>{t("S'inscrire en ligne", "Register Online")}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* 2. ABSTRACT */}
            <button
              id="hero-template-btn"
              type="button"
              onClick={onOpenTemplate}
              className="px-5 h-11 rounded-xl bg-white hover:bg-slate-100 text-[#0052cc] font-bold text-xs uppercase tracking-wider border border-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-md hover:scale-105 shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-[#0052cc]" />
              <span>{t("Modèle d'Abstract", "Abstract Template")}</span>
            </button>

            {/* 3. CONFÉRENCIERS */}
            <a
              href="#conferenciers"
              className="px-5 h-11 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 shrink-0"
            >
              <Users className="w-3.5 h-3.5 text-[#f5a623]" />
              <span>{t("Conférenciers", "Speakers")}</span>
            </a>
          </div>

          {/* 3 Main Themes Strip - Compact & Clean */}
          <div className="mt-6 pt-5 border-t border-white/10 w-full max-w-3xl mx-auto">
            <div className="text-[0.65rem] uppercase font-bold text-[#8da9c4] tracking-widest mb-2.5">
              {t("Axes Scientifiques de la Journée", "Conference Scientific Tracks")}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {MAIN_THEMES.map((theme) => (
                <a
                  key={theme.id}
                  href="#themes"
                  className="group p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#38bdf8]/40 transition-all text-left flex items-center gap-2.5"
                >
                  <div className="w-6 h-6 rounded-md shrink-0 flex items-center justify-center font-bold text-[11px] bg-[#00a3ff]/20 text-[#38bdf8] border border-[#00a3ff]/30 group-hover:bg-[#f5a623]/20 group-hover:text-[#f5a623] group-hover:border-[#f5a623]/40 transition-colors">
                    {theme.badge}
                  </div>
                  <h3 className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors leading-snug line-clamp-1">
                    {theme.title[language]}
                  </h3>
                </a>
              ))}
            </div>
          </div>

          {/* Venue & Contact Footer Band */}
          <div className="mt-5 pt-3.5 text-[11.5px] text-[#8da9c4] flex flex-wrap items-center justify-center gap-2.5 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#f5a623] shrink-0" />
              <span className="font-medium">{CONFERENCE_INFO.venue[language]}</span>
            </div>
            <span className="text-white/30">•</span>
            <span className="text-white/70">{CONFERENCE_INFO.contact.email}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/70">{CONFERENCE_INFO.contact.website}</span>
          </div>

        </div>

      </div>
    </section>
  );
};
