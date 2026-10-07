import React, { useState } from 'react';
import { X, Copy, Check, Download, FileText, Sparkles, BookOpen, Layers, CheckCircle2, FileCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AbstractTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AbstractTemplateModal: React.FC<AbstractTemplateModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [formatTab, setFormatTab] = useState<'preview' | 'word' | 'latex'>('preview');
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const exactWordText = `Title of the abstract in bold
Main Author, rest of authors not bold
Department address written in italic
Email in italic

Main text of the abstract should be written with font 12, Arial. No indent of the paragraph. The references should be noted as the following example.[1] The figures in the abstract are allowed if they fit into one page limit and should be referred in the text accordingly (figure 1 [2]). One space before and after the figure is required. Abstracts are accepted in .pdf and .doc/docx formats.

[Insert Figure here]
Figure 1: Figure captions should be below the figure.

(1) Author, A.; Author, B.; Author, C. Title of the Journal/Publishing house, Pages.
(2) Elgrishi, N.; Rountree, K. J.; McCarthy, B. D.; Rountree, E. S.; Eisenhart, T. T.; Dempsey, J. L. Journal of Chemical Education 2018, 95, 197–206.`;

  const latexTemplate = `% ==============================================================================
% Official Abstract Template - Universite Ibn Tofail (LAMPE 2026)
% ==============================================================================
\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{helvet}
\\renewcommand{\\familydefault}{\\sfdefault}
\\usepackage{geometry}
\\geometry{a4paper, margin=2.54cm}
\\usepackage{graphicx}
\\usepackage{amsmath}

\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{6pt}

\\begin{document}

\\begin{center}
  {\\Large \\textbf{Title of the abstract in bold}}\\\\[12pt]
  \\textbf{Main Author}, rest of authors not bold\\\\[6pt]
  \\textit{Department address written in italic}\\\\[4pt]
  \\textit{Email in italic}
\\end{center}

\\vspace{12pt}

Main text of the abstract should be written with font 12, Arial. No indent of the paragraph. The references should be noted as the following example.[1] The figures in the abstract are allowed if they fit into one page limit and should be referred in the text accordingly (figure 1 [2]). One space before and after the figure is required. Abstracts are accepted in .pdf and .doc/docx formats.

\\vspace{12pt}

\\begin{figure}[h!]
  \\centering
  % \\includegraphics[width=0.55\\textwidth]{figure1.png}
  \\fbox{\\rule{0pt}{3.5cm}\\rule{7.5cm}{0pt}} % Figure placeholder
  \\caption{Figure captions should be below the figure.}
  \\label{fig:1}
\\end{figure}

\\vspace{12pt}

\\begin{enumerate}
  \\item[(1)] Author, A.; Author, B.; Author, C. Title of the Journal/Publishing house, Pages.
  \\item[(2)] Elgrishi, N.; Rountree, K. J.; McCarthy, B. D.; Rountree, E. S.; Eisenhart, T. T.; Dempsey, J. L. \\textit{Journal of Chemical Education} \\textbf{2018}, \\textit{95}, 197--206.
\\end{enumerate}

\\end{document}`;

  const handleCopy = () => {
    const textToCopy = formatTab === 'latex' ? latexTemplate : exactWordText;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = (type: 'doc' | 'tex') => {
    const filename = type === 'doc' ? 'template-abstract-lampe-2026.doc' : 'template-abstract-lampe-2026.tex';
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      id="abstract-template-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#040d1a]/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="abstract-template-modal-content"
        className="bg-white border-2 border-[#0052cc] rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#071933] text-white px-6 py-4 flex items-center justify-between border-b border-[#00a3ff]/30 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
              <span className="text-[0.68rem] uppercase tracking-widest text-[#f5a623] font-bold">
                {t("Canevas Officiel Obligatoire (1 Page)", "Official Mandatory Template (1 Page)")}
              </span>
            </div>
            <h3 className="font-title text-xl font-bold text-white mt-0.5">
              {t("Modèle Officiel de l'Abstract (Police Arial 12)", "Official Abstract Template (Arial 12 Font)")}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8da9c4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Switcher & Download Actions */}
        <div className="bg-[#f8fafc] px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setFormatTab('preview')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                formatTab === 'preview'
                  ? 'bg-white text-[#0052cc] shadow-xs'
                  : 'text-[#13315c] hover:text-[#0052cc]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t("Aperçu Conforme (PDF)", "Exact Template Preview")}</span>
            </button>
            <button
              type="button"
              onClick={() => setFormatTab('word')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                formatTab === 'word'
                  ? 'bg-white text-[#0052cc] shadow-xs'
                  : 'text-[#13315c] hover:text-[#0052cc]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Word (.docx / .doc)</span>
            </button>
            <button
              type="button"
              onClick={() => setFormatTab('latex')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                formatTab === 'latex'
                  ? 'bg-white text-[#0052cc] shadow-xs'
                  : 'text-[#13315c] hover:text-[#0052cc]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>LaTeX (.tex)</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-md text-xs font-bold bg-white hover:bg-slate-100 text-[#13315c] border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00bf72]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t("Copié !", "Copied!") : t("Copier", "Copy")}</span>
            </button>

            {/* Direct Word Download */}
            <button
              type="button"
              onClick={() => handleDownloadFile('doc')}
              className="px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#0052cc] hover:bg-[#004099] text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Télécharger le modèle au format Word (.doc / .docx)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t("Télécharger (.DOCX)", "Download (.DOCX)")}</span>
            </button>

            {/* Direct LaTeX Download */}
            <button
              type="button"
              onClick={() => handleDownloadFile('tex')}
              className="px-3 py-1.5 rounded-md text-xs font-bold bg-[#071933] hover:bg-[#0b2545] text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs border border-white/20"
              title="Télécharger le modèle au format LaTeX (.tex)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>.TEX</span>
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-100">
          
          {/* Format Guidelines Banner */}
          <div className="max-w-2xl mx-auto mb-4 p-3.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-[#0052cc] space-y-1.5">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 shrink-0 text-[#0052cc]" />
              <span>
                <strong>{t("Normes obligatoires :", "Mandatory rules:")}</strong> {t("Police Arial 12 • Pas de retrait de paragraphe • 1 page maximum • Formats .pdf ou .doc/.docx acceptés", "Font Arial 12 • No paragraph indent • 1 page limit • Accepted in .pdf or .doc/.docx")}
              </span>
            </div>
            <div className="text-[11px] text-amber-800 bg-amber-50 px-2 py-1 rounded border border-amber-200 font-medium">
              ℹ️ {t("Seul l'Abstract (1 page max selon ce modèle) est requis pour la candidature. Il n'est plus nécessaire d'envoyer un résumé long.", "Only the 1-page Abstract (following this template) is required. A long summary is no longer needed.")}
            </div>
          </div>

          {formatTab === 'preview' && (
            <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-slate-300 text-black font-sans text-xs sm:text-[13px] leading-relaxed">
              
              {/* Title: Arial 14pt bold centered */}
              <div className="text-center font-bold text-base sm:text-lg mb-4 text-black">
                Title of the abstract in bold
              </div>

              {/* Authors: Main author bold, rest not bold */}
              <div className="text-center text-xs sm:text-[13px] mb-2 text-black">
                <span className="font-bold">Main Author</span>, rest of authors not bold
              </div>

              {/* Address: Italic */}
              <div className="text-center italic text-xs sm:text-[12px] text-slate-800 mb-1">
                Department address written in italic
              </div>

              {/* Email: Italic */}
              <div className="text-center italic text-xs sm:text-[12px] text-slate-800 mb-6">
                Email in italic
              </div>

              {/* Body: Arial 12pt, justified, no indent */}
              <div className="text-justify text-xs sm:text-[13px] leading-relaxed mb-6 text-black" style={{ textIndent: 0 }}>
                Main text of the abstract should be written with font 12, Arial. No indent of the paragraph. The references should be noted as the following example.[1] The figures in the abstract are allowed if they fit into one page limit and should be referred in the text accordingly (figure 1 [2]). One space before and after the figure is required. Abstracts are accepted in .pdf and .doc/docx formats.
              </div>

              {/* Figure 1 with cyclic voltammetry schematic diagram */}
              <div className="my-6 text-center">
                <div className="inline-block p-4 border border-slate-200 rounded-lg bg-slate-50 shadow-2xs">
                  <svg width="250" height="190" viewBox="0 0 250 190" className="mx-auto block max-w-full">
                    {/* Circular diagram outline */}
                    <circle cx="125" cy="95" r="88" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                    
                    {/* Voltammogram curve / bird shape */}
                    <path
                      d="M 55 135 C 80 135 95 125 110 95 C 120 70 130 50 145 75 C 160 100 175 120 205 115"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    
                    {/* Peak arrows */}
                    <path d="M 98 105 L 98 65" stroke="#047857" strokeWidth="2" strokeDasharray="3,3" />
                    <polygon points="95,70 98,60 101,70" fill="#047857" />
                    <polygon points="95,100 98,110 101,100" fill="#047857" />

                    {/* Head / beak accent */}
                    <polygon points="145,75 170,85 155,95" fill="#f59e0b" opacity="0.9" />
                    <circle cx="138" cy="80" r="3" fill="#1e293b" />

                    {/* Arc Text Labels */}
                    <text x="125" y="32" fontFamily="Arial" fontSize="9.5" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">
                      Non-Aqueous Cyclic Voltammetry
                    </text>
                    <text x="125" y="172" fontFamily="Arial" fontSize="9.5" fontWeight="bold" textAnchor="middle" fill="#047857">
                      A Practical Introduction
                    </text>
                    <text x="82" y="85" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="#047857" transform="rotate(-90 82 85)">
                      Current
                    </text>
                    <text x="125" y="150" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="#047857" textAnchor="middle">
                      Potential
                    </text>
                  </svg>
                </div>
                {/* Caption below figure */}
                <div className="text-center text-xs sm:text-[12px] font-sans text-black mt-2">
                  Figure 1: Figure captions should be below the figure.
                </div>
              </div>

              {/* References */}
              <div className="mt-8 pt-4 border-t border-slate-200 text-xs sm:text-[12px] text-black space-y-2">
                <div>
                  (1) Author, A.; Author, B.; Author, C. <em>Title of the Journal/Publishing house</em>, Pages.
                </div>
                <div>
                  (2) Elgrishi, N.; Rountree, K. J.; McCarthy, B. D.; Rountree, E. S.; Eisenhart, T. T.; Dempsey, J. L. <em>Journal of Chemical Education</em> <b>2018</b>, <em>95</em>, 197–206.
                </div>
              </div>

            </div>
          )}

          {formatTab === 'word' && (
            <div className="max-w-2xl mx-auto bg-[#050f1f] p-6 rounded-xl border border-slate-800 shadow-md">
              <div className="text-xs text-[#38bdf8] font-mono mb-3 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Modèle Word (.docx / .doc)</span>
                <span>Police Arial 12</span>
              </div>
              <pre className="font-mono text-xs text-[#e0f2fe] leading-relaxed whitespace-pre-wrap select-all">
                {exactWordText}
              </pre>
            </div>
          )}

          {formatTab === 'latex' && (
            <div className="max-w-2xl mx-auto bg-[#050f1f] p-6 rounded-xl border border-slate-800 shadow-md">
              <div className="text-xs text-[#38bdf8] font-mono mb-3 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Modèle LaTeX (.tex)</span>
                <span>helvet (Arial-compatible) 12pt</span>
              </div>
              <pre className="font-mono text-xs text-[#e0f2fe] leading-relaxed whitespace-pre-wrap select-all">
                {latexTemplate}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f8fafc] px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#13315c] shrink-0">
          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-[#00bf72] shrink-0" />
            <span>
              <strong className="text-[#0b2545]">{t("Format accepté :", "Accepted format:")}</strong>{" "}
              {t("Déposez votre fichier compilé en format .pdf ou .doc/.docx via le formulaire Google Form.", "Upload your completed abstract in .pdf or .doc/.docx format via the Google Form.")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleDownloadFile('doc')}
              className="px-4 py-2 rounded-lg bg-[#0052cc] hover:bg-[#004099] text-white font-bold cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t("Télécharger le modèle (.docx)", "Download Template (.docx)")}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-[#0b2545] font-bold cursor-pointer"
            >
              {t("Fermer", "Close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
