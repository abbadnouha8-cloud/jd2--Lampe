import React, { useState } from 'react';
import { X, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { RegistrationTier } from '../types';
import { CONFERENCE_INFO, GOOGLE_FORM_URL, GOOGLE_FORM_EMBED_URL } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: RegistrationTier | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedTier,
}) => {
  const { language, t } = useLanguage();
  const [viewMode, setViewMode] = useState<'info' | 'iframe'>('info');

  if (!isOpen) return null;

  return (
    <div 
      id="registration-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040d1a]/80 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="registration-modal-content"
        className="bg-white border-2 border-[#0052cc] rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#071933] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 border-b border-[#00a3ff]/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[0.68rem] uppercase tracking-widest text-[#f5a623] font-bold">
                {t("Formulaire Officiel Google Forms", "Official Google Form")}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-xs text-[#38bdf8] font-bold">LAMPE 2026</span>
            </div>
            <h3 className="font-title text-xl font-bold text-white leading-tight mt-0.5">
              {t("Inscription - The Second Doctoral Day 2026", "Registration - The Second Doctoral Day 2026")}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#8da9c4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {viewMode === 'info' ? (
            <>
              {/* Introduction box */}
              <div className="bg-[#f0f9ff] border border-[#00a3ff]/30 rounded-lg p-5">
                <div className="flex items-center gap-2 text-[#0052cc] font-bold text-sm mb-2">
                  <Sparkles className="w-4 h-4 text-[#f5a623]" />
                  <span>{t("Inscription Centralisée en Ligne", "Centralized Online Registration")}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#13315c] leading-relaxed">
                  {t(
                    "Les inscriptions pour la Deuxième Journée Doctorale 2026 sont gérées via le formulaire sécurisé Google Forms de l'Université Ibn Tofaïl. Cliquez ci-dessous pour ouvrir le formulaire dans un nouvel onglet ou le charger directement dans cette fenêtre.",
                    "Registration for the Second Doctoral Day 2026 is hosted on the official secure Google Form of Ibn Tofail University. Click below to open the form in a new tab or view it directly in this window."
                  )}
                </p>
              </div>

              {/* Event Details Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-[#f8fafc] rounded border border-[#8da9c4]/30">
                  <span className="font-bold text-[#0b2545] block mb-0.5">{t("Date", "Date")}</span>
                  <span className="text-[#0052cc] font-semibold">{CONFERENCE_INFO.date[language]}</span>
                </div>
                <div className="p-3 bg-[#f8fafc] rounded border border-[#8da9c4]/30">
                  <span className="font-bold text-[#0b2545] block mb-0.5">{t("Lieu", "Venue")}</span>
                  <span className="text-[#13315c]">{CONFERENCE_INFO.venue[language]}</span>
                </div>
                <div className="p-3 bg-[#f8fafc] rounded border border-[#8da9c4]/30 col-span-2 sm:col-span-1">
                  <span className="font-bold text-[#0b2545] block mb-0.5">{t("Frais", "Fees")}</span>
                  <span className="text-[#00bf72] font-semibold">{t("Gratuit pour doctorants UIT", "Free for UIT PhD candidates")}</span>
                </div>
              </div>

              {/* Steps to register */}
              <div className="space-y-2.5">
                <h4 className="font-title text-sm font-bold text-[#0b2545] uppercase tracking-wider">
                  {t("Ce que vous aurez à renseigner dans le formulaire :", "What you will enter in the Google Form:")}
                </h4>
                <ul className="space-y-2 text-xs text-[#13315c]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00bf72] shrink-0 mt-0.5" />
                    <span>{t("Informations personnelles (Nom, Prénom, Email institutionnel, Université, Faculté)", "Personal details (Name, First name, Institutional email, University, Faculty)")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00bf72] shrink-0 mt-0.5" />
                    <span>{t("Choix du type de participation : Doctorant communicant (présentation orale) ou auditeur libre", "Participation type: Presenting PhD candidate (oral presentation) or auditor")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00bf72] shrink-0 mt-0.5" />
                    <span>{t("Axe thématique choisi (Environnement, Eau, Énergie / Chimie Verte / Matériaux)", "Chosen research track (Environment, Water, Energy / Green Chemistry / Materials)")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00bf72] shrink-0 mt-0.5" />
                    <span>{t("Titre de la communication et dépôt de l'abstract compilé", "Communication title and abstract file upload")}</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#8da9c4]/30 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setViewMode('iframe')}
                  className="w-full sm:w-auto px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0052cc] border border-[#8da9c4]/40 transition-colors cursor-pointer"
                >
                  {t("Afficher dans cette fenêtre", "View within this window")}
                </button>

                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#00a3ff] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-opacity cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
                >
                  <span>{t("Ouvrir le Formulaire Google", "Open Google Form")}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setViewMode('info')}
                  className="text-[#0052cc] hover:underline font-bold"
                >
                  ← {t("Retour aux instructions", "Back to instructions")}
                </button>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052cc] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>{t("Ouvrir dans un nouvel onglet", "Open in new tab")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-[600px] bg-white rounded border border-[#0052cc]/30 overflow-hidden">
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Formulaire Google Deuxième Journée Doctorale 2026"
                >
                  Chargement…
                </iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
