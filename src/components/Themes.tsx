import React from 'react';
import { MAIN_THEMES } from '../data';
import { Droplets, Leaf, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const THEME_ICONS = [
  Droplets,  // 01: Environment, Water, Energy
  Leaf,      // 02: Green Chemistry & Process Engineering
  Layers,    // 03: Materials & Nanomaterials
];

export const Themes: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="themes" className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#8da9c4]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase font-extrabold tracking-widest text-[#0052cc] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
            <span>{t("Axes Scientifiques Officiels", "Official Scientific Themes")}</span>
          </div>
          <h2
            id="themes-title"
            className="font-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0b2545] leading-tight"
          >
            {t("Thématiques de la 2ème Journée Doctorale", "Themes of the 2nd Doctoral Day")}
          </h2>
          {/* Accent bar */}
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-[#13315c] leading-relaxed">
            {t(
              "Les travaux de recherche doctorale (communications orales) s'articulent autour des 3 grands volets thématiques et de leurs applications technologiques durables.",
              "Doctoral research work (oral presentations) centers around 3 major thematic axes and their sustainable technological applications."
            )}
          </p>
        </div>

        {/* 3 Main Themes Cards matching the Poster's 01, 02, 03 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {MAIN_THEMES.map((theme, idx) => {
            const IconComp = THEME_ICONS[idx];
            return (
              <div
                key={theme.id}
                id={`theme-card-${theme.badge}`}
                className="group relative bg-[#071933] text-white p-7 sm:p-8 rounded-lg border border-[#00a3ff]/30 hover:border-[#38bdf8] shadow-lg shadow-black/10 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Orbital trajectory decoration */}
                <div className="absolute top-0 right-0 w-36 h-36 border border-[#f5a623]/20 rounded-full translate-x-12 -translate-y-12 pointer-events-none group-hover:scale-110 transition-transform" />

                <div>
                  {/* Top Bar with Numbered Badge matching the Poster */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-full bg-[#040d1a] border-2 border-[#38bdf8] flex items-center justify-center font-extrabold text-xl text-white shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:border-[#f5a623] transition-colors">
                        {theme.badge}
                      </div>
                      <span className="text-[0.7rem] uppercase font-bold tracking-widest text-[#f5a623]">
                        {t(`Axe Thématique 0${idx + 1}`, `Thematic Track 0${idx + 1}`)}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-md bg-[#00a3ff]/10 border border-[#00a3ff]/30 text-[#38bdf8] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-title text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#38bdf8] transition-colors leading-snug">
                    {theme.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#8da9c4] leading-relaxed mb-6">
                    {theme.description[language]}
                  </p>

                  {/* Subtopics bullet list */}
                  <div className="border-t border-white/10 pt-4 space-y-2.5">
                    <span className="text-xs uppercase font-bold tracking-wider text-white/70 block">
                      {t("Domaines de recherche prioritaires :", "Priority Research Fields:")}
                    </span>
                    <ul className="space-y-2 text-xs text-[#e0f2fe]">
                      {theme.subtopics.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                          <span>{sub[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Callout */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <a
                    href="#inscription"
                    className="text-[#f5a623] hover:text-white font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t("Soumettre dans cet axe", "Submit to this track")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed 10 Research Areas from the Official Brochure */}
        <div className="bg-[#f8fafc] border border-[#8da9c4]/30 rounded-lg p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-bold tracking-wider text-[#0052cc] block mb-1">
              {t("Répertoire Spécialisé LAMPE", "LAMPE Specialized Directory")}
            </span>
            <h3 className="font-title text-2xl font-bold text-[#0b2545]">
              {t(
                "Les 10 Thématiques de Recherche du Laboratoire",
                "The 10 Research Themes of the Laboratory"
              )}
            </h3>
            <p className="text-sm text-[#13315c] mt-2 leading-relaxed">
              {t(
                "Consultez la liste exhaustive des sujets accrédités au sein du Laboratoire de Matériaux Avancés et de Génie des Procédés pour orienter votre proposition de communication.",
                "Consult the comprehensive list of accredited research subjects within the LAMPE Laboratory to guide your submission."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                fr: "Technologies membranaires avancées pour le traitement des eaux",
                en: "Advanced membrane technologies for water treatment",
              },
              {
                fr: "Traitement des eaux naturelles et des eaux usées",
                en: "Natural and wastewater treatment",
              },
              {
                fr: "Valorisation des déchets organiques, production de biogaz",
                en: "Valorization of organic waste, biogas production",
              },
              {
                fr: "Valorisation énergétique de la biomasse et des déchets",
                en: "Energetic valorization of biomass and wastes",
              },
              {
                fr: "Production et stockage de l'énergie thermique",
                en: "Production and thermal energy storage",
              },
              {
                fr: "Matériaux hybrides organiques-inorganiques, Biomatériaux",
                en: "Hybrid organic-inorganic materials, Biomaterials",
              },
              {
                fr: "Traitement de surfaces et Inhibition de la corrosion",
                en: "Surface treatment and corrosion inhibition",
              },
              {
                fr: "Valorisation des extraits végétaux : inhibition de la corrosion et activités biologiques",
                en: "Valorization of plant extracts: corrosion inhibition and biological activities",
              },
              {
                fr: "Extraction liquide-liquide",
                en: "Liquid-liquid extraction",
              },
              {
                fr: "Optoélectronique des systèmes organiques",
                en: "Optoelectronics of organic systems",
              },
            ].map((topic, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 bg-white rounded border border-[#8da9c4]/30 text-xs sm:text-sm text-[#0b2545] hover:border-[#0052cc] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#0052cc]/10 text-[#0052cc] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <span className="font-medium leading-relaxed">{topic[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
