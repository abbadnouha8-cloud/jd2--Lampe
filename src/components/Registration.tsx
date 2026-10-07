import React, { useState } from 'react';
import { GOOGLE_FORM_URL, GOOGLE_FORM_EMBED_URL, CONFERENCE_INFO } from '../data';
import { ExternalLink, FileText, Download, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RegistrationProps {
  onOpenTemplate: () => void;
  onSelectTier?: (tier?: any) => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onOpenTemplate }) => {
  const { language, t } = useLanguage();
  const [showEmbedForm, setShowEmbedForm] = useState(false);

  return (
    <section
      id="inscription"
      className="relative bg-gradient-to-b from-[#06172e] via-[#0b2545] to-[#040d1a] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 text-white border-t border-[#00a3ff]/20"
    >
      {/* Background orbital curve */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] border border-[#f5a623]/15 rounded-[100%] rotate-[15deg]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase font-extrabold tracking-widest text-[#38bdf8] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
            <span>{t("Formulaire Officiel", "Official Form")}</span>
          </div>
          <h2
            id="registration-title"
            className="font-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight"
          >
            {t("Inscription - The Second Doctoral Day 2026", "Registration - The Second Doctoral Day 2026")}
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-[#8da9c4] leading-relaxed">
            {t(
              "L'inscription s'effectue via le formulaire officiel Google Forms du Laboratoire LAMPE. Veuillez renseigner vos coordonnées et vos choix de communication avant la clôture fixée au 30 Octobre 2026. Seul l'Abstract (1 page max) est requis (nul besoin de résumé long).",
              "Registration is carried out through the official LAMPE Laboratory Google Form. Please enter your personal details and choices before the deadline of October 30, 2026. Only the 1-page Abstract is required (a long summary is no longer needed)."
            )}
          </p>
        </div>

        {/* Central Official Google Form Action Banner */}
        <div className="mb-14 max-w-4xl mx-auto bg-gradient-to-r from-[#0a2347] via-[#0e3366] to-[#0a2347] border-2 border-[#00a3ff]/50 rounded-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#00a3ff]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bf72]/20 border border-[#00bf72]/40 text-[#00bf72] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#00bf72] animate-pulse" />
                  <span>{t("Inscriptions Ouvertes", "Registration Open")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5a623]/20 border border-[#f5a623]/40 text-[#f5a623] text-xs font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t("Date limite : 30 Octobre 2026", "Deadline: October 30, 2026")}</span>
                </div>
              </div>
              
              <h3 className="font-title text-2xl sm:text-3xl font-bold text-white">
                {t("Formulaire Google d'Inscription Officiel", "Official Google Registration Form")}
              </h3>
              
              <p className="text-sm text-[#8da9c4] max-w-xl leading-relaxed">
                {t(
                  "Cliquez sur le bouton ci-contre pour accéder au formulaire officiel de la Deuxième Journée Doctorale 2026 et soumettre votre participation (date limite : 30 Octobre 2026).",
                  "Click the button below to access the official Google Form for the Second Doctoral Day 2026 and register your participation (deadline: October 30, 2026)."
                )}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#e0f2fe]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00bf72]" />
                  <span>{t("Gratuit pour les doctorants UIT", "Free for UIT PhD candidates")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                  <span>{t("Attestation de participation", "Attendance certificate")}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
              <a
                id="main-google-form-btn"
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-64 py-4 px-6 rounded-md bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#00a3ff] hover:from-[#0066ff] hover:to-[#38bdf8] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#00a3ff]/30 hover:scale-105 cursor-pointer inline-flex items-center justify-center gap-2 group text-center"
              >
                <span>{t("Ouvrir le Formulaire", "Open Google Form")}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => setShowEmbedForm(!showEmbedForm)}
                className="w-full sm:w-64 py-2.5 px-4 rounded-md bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-[#00a3ff]/30 transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <span>{showEmbedForm ? t("Masquer l'aperçu intégré", "Hide embedded preview") : t("Remplir sur cette page", "Fill on this page")}</span>
                {showEmbedForm ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Embedded Iframe Preview when toggled */}
          {showEmbedForm && (
            <div className="mt-8 pt-8 border-t border-white/10 animate-fade-in">
              <div className="text-xs text-[#8da9c4] mb-3 flex items-center justify-between">
                <span>{t("Aperçu interactif du formulaire Google :", "Interactive Google Form preview:")}</span>
                <a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38bdf8] hover:underline inline-flex items-center gap-1"
                >
                  <span>{t("Ouvrir en plein écran", "Open fullscreen")}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-[650px] bg-white rounded-lg overflow-hidden border-2 border-[#00a3ff]/40 shadow-inner">
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Formulaire d'inscription Deuxième Journée Doctorale 2026"
                >
                  Chargement…
                </iframe>
              </div>
            </div>
          )}
        </div>

        {/* Abstract Template Download & Help Banner */}
        <div className="bg-[#071933]/90 border border-[#8da9c4]/30 p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#f5a623]/15 border border-[#f5a623]/40 flex items-center justify-center text-[#f5a623] shrink-0">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-title text-lg font-bold text-white">
                {t("Besoin du Modèle d'Abstract avant de vous inscrire ?", "Need the Abstract Template before registering?")}
              </h4>
              <p className="text-xs text-[#8da9c4] mt-1">
                {t("Téléchargez notre template officiel en format LaTeX (.tex) ou Word (.docx).", "Download our official template in LaTeX (.tex) or Word (.docx) format.")}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenTemplate}
            className="w-full sm:w-auto px-6 py-3 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-[#f5a623]/40 transition-colors shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#f5a623]" />
            <span>{t("Télécharger le Modèle", "Download Template")}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
