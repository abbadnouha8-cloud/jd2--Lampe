import React, { useState } from 'react';
import { Award, BookOpen, ExternalLink, GraduationCap, MapPin, Sparkles, TrendingUp, User } from 'lucide-react';
import { KEYNOTE_SPEAKERS } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const Speakers: React.FC = () => {
  const { language, t } = useLanguage();
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="conferenciers"
      className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#071933] via-[#0b2545] to-[#040d1a] text-white border-b border-[#00a3ff]/20 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00a3ff]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-[#f5a623]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#f5a623] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("Invités d'Honneur & Conférences Plénières", "Distinguished Guests & Keynote Lectures")}</span>
          </div>

          <h2 className="font-title text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            {t("Nos Conférenciers Pléniers", "Our Keynote Speakers")}
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#00a3ff] via-[#f5a623] to-[#00bf72] mx-auto my-5 rounded-full" />

          <p className="text-sm sm:text-base text-[#8da9c4] leading-relaxed">
            {t(
              "La Deuxième Journée Doctorale 2026 a l'honneur d'accueillir d'éminents scientifiques de premier plan international, pionniers dans les domaines du génie des procédés, de la décarbonation, des nanomatériaux et de la chimie verte.",
              "The Second Doctoral Day 2026 is honored to welcome internationally leading scientists, pioneers in process engineering, carbon management, nanomaterials, and green chemistry."
            )}
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {KEYNOTE_SPEAKERS.map((speaker, index) => (
            <div
              key={speaker.id}
              className="group relative bg-[#06172e]/90 hover:bg-[#081e3d] rounded-2xl border border-[#00a3ff]/30 hover:border-[#38bdf8] p-6 sm:p-8 transition-all duration-300 shadow-2xl hover:shadow-[0_10px_35px_rgba(0,163,255,0.25)] flex flex-col justify-between"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Photo + Identity + Institutional badges */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-white/10 text-center sm:text-left">
                  
                  {/* Photo with golden/cyan frame */}
                  <div className="relative shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-br from-[#38bdf8] via-[#0052cc] to-[#f5a623] shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#071933] flex items-center justify-center">
                        {!imageErrors[speaker.id] ? (
                          <img
                            src={speaker.photoUrl}
                            alt={speaker.name}
                            referrerPolicy="no-referrer"
                            onError={() => handleImageError(speaker.id)}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#071933] text-[#38bdf8]">
                            <User className="w-12 h-12" />
                            <span className="text-[0.65rem] font-bold mt-1">Pr.</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#f5a623] text-[#071933] font-black text-xs flex items-center justify-center shadow-md border-2 border-[#06172e]">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Identity & Badges */}
                  <div className="flex-1 min-w-0">
                    {speaker.featuredBadge && (
                      <span className="inline-block text-[0.68rem] font-bold uppercase tracking-wider text-[#38bdf8] bg-[#00a3ff]/15 border border-[#00a3ff]/30 px-2.5 py-1 rounded-full mb-2">
                        {speaker.featuredBadge[language]}
                      </span>
                    )}

                    <h3 className="font-title text-xl sm:text-2xl font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-tight">
                      {speaker.name}
                    </h3>

                    <div className="text-xs sm:text-sm text-[#f5a623] font-semibold mt-1">
                      {speaker.title[language]}
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#e0f2fe] mt-1.5 font-medium">
                      <GraduationCap className="w-4 h-4 text-[#38bdf8] shrink-0" />
                      <span>{speaker.institution[language]}</span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[0.72rem] text-[#8da9c4] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#8da9c4] shrink-0" />
                      <span>{speaker.location[language]}</span>
                    </div>
                  </div>
                </div>

                {/* Google Scholar Metrics Ribbon */}
                <div className="my-5 p-3.5 rounded-xl bg-[#040f21] border border-white/10 grid grid-cols-3 gap-2 text-center">
                  <div className="p-1">
                    <span className="text-[0.68rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                      {t("Citations", "Citations")}
                    </span>
                    <span className="font-title text-base sm:text-lg font-black text-[#38bdf8] flex items-center justify-center gap-1 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#00bf72]" />
                      <span>{speaker.citations}</span>
                    </span>
                  </div>

                  <div className="p-1 border-x border-white/10">
                    <span className="text-[0.68rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                      h-index
                    </span>
                    <span className="font-title text-base sm:text-lg font-black text-[#f5a623] mt-0.5 block">
                      {speaker.hIndex}
                    </span>
                  </div>

                  <div className="p-1">
                    <span className="text-[0.68rem] uppercase font-bold text-[#8da9c4] tracking-wider block">
                      i10-index
                    </span>
                    <span className="font-title text-base sm:text-lg font-black text-[#e0f2fe] mt-0.5 block">
                      {speaker.i10Index}
                    </span>
                  </div>
                </div>

                {/* Keynote Topic */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider text-[#38bdf8] font-bold mb-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{t("Thématique Plénière :", "Keynote Lecture Topic:")}</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#0a254d]/60 border border-[#00a3ff]/20 text-white font-bold text-xs sm:text-sm leading-snug">
                    « {speaker.topicTitle[language]} »
                  </div>
                </div>

                {/* Short Bio */}
                <p className="text-xs sm:text-sm text-[#8da9c4] leading-relaxed mb-5">
                  {speaker.bio[language]}
                </p>

                {/* Research Expertise Tags */}
                <div className="mb-6">
                  <span className="text-[0.68rem] uppercase tracking-wider text-[#8da9c4] font-bold block mb-2">
                    {t("Champs d'Expertise & Mots-clés :", "Fields of Expertise & Keywords:")}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {speaker.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="text-[0.68rem] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#e0f2fe] group-hover:border-[#00a3ff]/30 transition-colors"
                      >
                        {exp[language]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Scholar Link */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <a
                  href={speaker.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0052cc] to-[#00a3ff] hover:from-[#0066ff] hover:to-[#38bdf8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#0052cc]/30 group/btn"
                >
                  <Award className="w-4 h-4 text-[#f5a623]" />
                  <span>{t("Consulter le profil Google Scholar", "View Google Scholar Profile")}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Institutional Notice */}
        <div className="mt-12 p-5 rounded-xl bg-[#06172e]/80 border border-[#00a3ff]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#00a3ff]/10 border border-[#00a3ff]/30 text-[#38bdf8] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#f5a623]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {t("Opportunité Unique pour les Doctorants", "Unique Opportunity for PhD Candidates")}
              </h4>
              <p className="text-xs text-[#8da9c4]">
                {t(
                  "Chaque session plénière sera suivie d'un temps d'échange interactif avec les conférenciers invités.",
                  "Each keynote lecture will be followed by an interactive Q&A discussion with the invited speakers."
                )}
              </p>
            </div>
          </div>

          <a
            href="#soumission"
            className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all shrink-0"
          >
            {t("Soumettre un résumé", "Submit an Abstract")} →
          </a>
        </div>

      </div>
    </section>
  );
};
