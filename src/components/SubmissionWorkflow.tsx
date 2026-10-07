import React from 'react';
import { SUBMISSION_TIMELINE, CONFERENCE_INFO, GOOGLE_FORM_URL } from '../data';
import { Download, FileText, CheckCircle2, Calendar, AlertCircle, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SubmissionWorkflowProps {
  onOpenTemplate: () => void;
  onOpenRegistration: () => void;
}

export const SubmissionWorkflow: React.FC<SubmissionWorkflowProps> = ({ 
  onOpenTemplate, 
  onOpenRegistration 
}) => {
  const { language, t } = useLanguage();

  return (
    <section id="soumission" className="bg-[#f1f5f9] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#8da9c4]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase font-extrabold tracking-widest text-[#0052cc] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
            <span>{t("Procédure & Calendrier", "Procedure & Timeline")}</span>
          </div>
          <h2
            id="submission-title"
            className="font-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0b2545] leading-tight"
          >
            {t("Processus de Soumission & Inscription", "Submission & Registration Workflow")}
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-[#13315c] leading-relaxed">
            {t(
              "Suivez les 4 étapes simples pour préparer votre résumé scientifique, vous inscrire via le formulaire officiel Google Form et participer à la journée.",
              "Follow the 4 simple steps to prepare your scientific abstract, register via the official Google Form, and participate in the conference."
            )}
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUBMISSION_TIMELINE.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              id={`submission-step-${stepItem.step}`}
              className="bg-white border border-[#8da9c4]/40 hover:border-[#0052cc] p-6 rounded-lg shadow-2xs hover:shadow-md flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#0052cc] tracking-tight">
                    {stepItem.step}
                  </span>
                  <span className="text-[0.68rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#0052cc]/10 text-[#0052cc] border border-[#0052cc]/20">
                    {stepItem.date[language]}
                  </span>
                </div>

                <h3 className="font-title text-lg font-bold text-[#0b2545] mb-2 leading-snug">
                  {stepItem.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-[#13315c] leading-relaxed">
                  {stepItem.description[language]}
                </p>
              </div>

              {/* Card footer indicator */}
              <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#8da9c4]">
                  {t(`Étape ${idx + 1} / 4`, `Step ${idx + 1} / 4`)}
                </span>
                
                {idx === 0 && (
                  <button
                    type="button"
                    onClick={onOpenTemplate}
                    className="font-bold text-[#0052cc] hover:text-[#00a3ff] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t("Modèle", "Template")}</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                )}
                
                {idx === 1 && (
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0052cc] hover:text-[#00a3ff] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Google Form</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Guidelines & Checklist Panel */}
        <div className="mt-10 bg-white border border-[#8da9c4]/50 p-6 sm:p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-[#0052cc] font-bold text-sm uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#0052cc]" />
                <span>{t("Normes de Rédaction pour la 2ème Journée Doctorale", "Writing Guidelines for the 2nd Doctoral Day")}</span>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t("Important : Seul l'Abstract (1 page maximum selon le modèle officiel) est requis pour votre candidature. Il n'est plus nécessaire d'envoyer un résumé long.", "Important: Only the Abstract (maximum 1 page per official template) is required for submission. A long summary is no longer needed.")}</span>
              </div>
              <p className="text-sm text-[#13315c] leading-relaxed">
                {t(
                  "Les propositions doivent correspondre à des travaux originaux de recherche doctorale en cours. Chaque abstract doit comporter : Titre, Auteurs & Affiliations (avec identification claire du doctorant communicant), Résumé synthétique (maximum 300 mots), 3 à 5 mots-clés et Références principales.",
                  "Submissions must reflect ongoing, original doctoral research. Each abstract must contain: Title, Authors & Affiliations (clearly identifying the presenting doctoral candidate), Synthetic Abstract (maximum 300 words), 3 to 5 keywords, and core references."
                )}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#f8fafc] rounded border border-[#8da9c4]/30">
                  <span className="font-bold text-[#0b2545] block mb-1">{t("Format & Norme", "Format & Standards")}</span>
                  {t("Police Arial 12, pas d'alinéa, 1 page max. Fichiers acceptés en .pdf et .doc/.docx.", "Font Arial 12, no indent, 1 page limit. Accepted formats: .pdf and .doc/.docx.")}
                </div>
                <div className="p-3 bg-[#f8fafc] rounded border border-[#8da9c4]/30">
                  <span className="font-bold text-[#0b2545] block mb-1">{t("Langues Autorisées", "Accepted Languages")}</span>
                  {t("Français ou Anglais. Présentation orale au choix du candidat.", "French or English. Oral presentation language at speaker's choice.")}
                </div>
                <div className="p-3 bg-[#f8fafc] rounded border border-[#8da9c4]/30">
                  <span className="font-bold text-[#0b2545] block mb-1">{t("Actes du Colloque", "Conference Proceedings")}</span>
                  {t("Tous les résumés validés seront édités dans le Recueil officiel LAMPE.", "All accepted abstracts will be published in official LAMPE Proceedings.")}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center border-t lg:border-t-0 lg:border-l border-[#8da9c4]/30 pt-6 lg:pt-0 lg:pl-8">
              {/* S'INSCRIRE Button directly linking to the Google Form */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-sm bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#00a3ff] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-opacity cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
              >
                <span>{t("Accéder au Formulaire Google", "Access Google Form")}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenTemplate}
                className="w-full py-3 px-4 rounded-sm bg-white hover:bg-[#f1f5f9] text-[#0052cc] font-bold text-xs uppercase tracking-wider border border-[#0052cc] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{t("Télécharger le Modèle Abstract", "Download Abstract Template")}</span>
              </button>

              <span className="text-[0.72rem] text-center text-[#13315c]/70">
                {CONFERENCE_INFO.venue[language]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
