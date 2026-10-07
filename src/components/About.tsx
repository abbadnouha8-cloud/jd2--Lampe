import React from 'react';
import { Award, Compass, Users, BookOpen, ShieldCheck, User, Quote, Sparkles, Building2, Calendar, Target, Globe2 } from 'lucide-react';
import { CONFERENCE_INFO, LAB_PRESENTATION } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section
      id="a-propos"
      className="bg-[#f8fafc] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#8da9c4]/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase font-extrabold tracking-widest text-[#0052cc] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
            <span>{t("Présentation Officielle", "Official Presentation")}</span>
          </div>
          <h2
            id="about-title"
            className="font-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0b2545] leading-tight"
          >
            {t(
              "À Propos du Laboratoire LAMPE & de la Journée",
              "About the LAMPE Laboratory & Doctoral Day"
            )}
          </h2>
          {/* Accent bar */}
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-[#13315c] leading-relaxed">
            {t(
              "Un pôle d'excellence en recherche scientifique, développement technologique durable et formation doctorale de haut niveau à l'Université Ibn Tofaïl de Kénitra.",
              "A center of excellence in scientific research, sustainable technological development, and high-level doctoral training at Ibn Tofail University of Kenitra."
            )}
          </p>
        </div>

        {/* 2 Columns: Official Presentation & Key Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Column 1: Justified text from official brochure */}
          <div className="lg:col-span-7 space-y-6 text-base text-[#13315c] leading-relaxed">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#8da9c4]/30 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0052cc]" />
              <h3 className="font-title text-xl font-bold text-[#0b2545] mb-3">
                {t("Origine & Accréditation du Laboratoire", "Laboratory Origin & Accreditation")}
              </h3>
              <p className="text-justify leading-relaxed">
                {LAB_PRESENTATION.history[language]}
              </p>
              
              <div className="mt-5 pt-4 border-t border-[#8da9c4]/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-[#0b2545]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0052cc]" />
                  <span>{t("Accrédité : 14 Janvier 2020", "Accredited: Jan 14, 2020")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#00bf72]" />
                  <span>{t("51 Chercheurs membres", "51 Member researchers")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#f5a623]" />
                  <span>{t("Faculté des Sciences, Kénitra", "Faculty of Sciences, Kenitra")}</span>
                </div>
              </div>
            </div>

            {/* Leadership box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[#8da9c4]/40 p-4 sm:p-5 rounded-lg shadow-2xs">
                <div className="text-[0.7rem] uppercase tracking-wider font-bold text-[#8da9c4] mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0052cc]" />
                  <span>{t("Directeur du Laboratoire", "Laboratory Director")}</span>
                </div>
                <div className="text-base font-bold text-[#0b2545]">{CONFERENCE_INFO.lab.director}</div>
                <div className="text-xs text-[#8da9c4]">Faculté des Sciences de Kénitra</div>
              </div>

              <div className="bg-white border border-[#8da9c4]/40 p-4 sm:p-5 rounded-lg shadow-2xs">
                <div className="text-[0.7rem] uppercase tracking-wider font-bold text-[#8da9c4] mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0052cc]" />
                  <span>{t("Directeur Adjoint", "Deputy Director")}</span>
                </div>
                <div className="text-base font-bold text-[#0b2545]">{CONFERENCE_INFO.lab.coDirector}</div>
                <div className="text-xs text-[#8da9c4]">Faculté des Sciences de Kénitra</div>
              </div>
            </div>
          </div>

          {/* Column 2: Institutional Identity & Values Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-[#071933] to-[#0b2545] text-white p-7 sm:p-8 rounded-lg border border-[#00a3ff]/30 shadow-lg relative overflow-hidden">
              {/* Golden orbital curves */}
              <div className="absolute top-0 right-0 w-64 h-64 border border-[#f5a623]/20 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              
              <div className="inline-block px-3 py-1 bg-[#00a3ff]/20 border border-[#00a3ff]/40 text-[#38bdf8] text-xs uppercase font-extrabold tracking-wider rounded-xs mb-4">
                {t("Édition 2026", "2026 Edition")}
              </div>

              <h3 className="font-title text-2xl font-bold text-white mb-3 leading-snug">
                {t(
                  "Pourquoi la Journée Doctorale LAMPE ?",
                  "Why the LAMPE Doctoral Day?"
                )}
              </h3>

              <p className="text-sm text-[#8da9c4] leading-relaxed mb-6">
                {t(
                  "Cet événement constitue l'opportunité privilégiée pour les doctorants de présenter leurs recherches, d'échanger avec les enseignants-chercheurs et de créer une synergie productive entre les différentes équipes.",
                  "This event provides a privileged opportunity for doctoral students to present their findings, interact with senior faculty, and foster productive synergy across research teams."
                )}
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                  <Award className="w-4 h-4 text-[#f5a623] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{t("Prix de la Meilleure Présentation Orale", "Best Oral Presentation Award")}</strong>
                    <span className="text-[#8da9c4]">{t("Distinction récompensant les meilleures communications orales des doctorants.", "Distinction rewarding top oral presentations by PhD researchers.")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                  <BookOpen className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{t("Recueil Officiel des Actes", "Official Proceedings")}</strong>
                    <span className="text-[#8da9c4]">{t("Publication de l'ensemble des résumés validés par le comité.", "Publication of all accepted abstracts in the proceedings.")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded border border-white/10">
                  <Globe2 className="w-4 h-4 text-[#00bf72] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{t("Validation Doctorale", "Doctoral Credits Validation")}</strong>
                    <span className="text-[#8da9c4]">{t("Attestation de participation pour la formation doctorale.", "Official certificate for doctoral training credits.")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Département de Chimie Photographic Card */}
            <div className="bg-white border border-[#8da9c4]/30 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src="/dept-chimie.jpg"
                  alt="Département de Chimie - Faculté des Sciences, Université Ibn Tofaïl"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-[#071933]/90 backdrop-blur-xs text-white text-xs flex items-center justify-between border border-white/20 shadow-md">
                  <span className="font-bold">Département de Chimie • شعبة الكيمياء</span>
                  <span className="text-[#38bdf8] text-[0.68rem] font-bold">FSK • UIT</span>
                </div>
              </div>
              <div className="p-3.5 bg-[#f8fafc] text-xs text-[#13315c] leading-relaxed border-t border-[#8da9c4]/20">
                <span className="font-bold text-[#0b2545]">{t("Ancrage Académique :", "Academic Roots:")}</span>{" "}
                {t(
                  "Le Département de Chimie de la Faculté des Sciences de Kénitra héberge les activités de recherche, ateliers et plateformes d'analyse du Laboratoire LAMPE.",
                  "The Chemistry Department at the Faculty of Sciences of Kenitra hosts the research activities, doctoral workshops, and analytical facilities of the LAMPE Laboratory."
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 5 Strategic Objectives of LAMPE from Brochure */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="font-title text-2xl sm:text-3xl font-bold text-[#0b2545]">
              {t("Missions & Objectifs du Laboratoire", "Laboratory Missions & Strategic Goals")}
            </h3>
            <div className="w-16 h-[2px] bg-[#0052cc] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LAB_PRESENTATION.objectives.map((obj, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#8da9c4]/40 hover:border-[#0052cc] p-6 rounded-lg shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-[#0052cc]/10 text-[#0052cc] font-bold text-sm flex items-center justify-center mb-4 group-hover:bg-[#0052cc] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h4 className="font-title text-base font-bold text-[#0b2545] mb-2 leading-snug">
                    {obj.title[language]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#13315c] leading-relaxed">
                    {obj.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
