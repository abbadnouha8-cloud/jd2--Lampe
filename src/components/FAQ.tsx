import React, { useState, useMemo } from 'react';
import { FAQ_DATA, CONFERENCE_INFO } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { language, t } = useLanguage();

  const categories = [
    { id: 'all', label: t('Tous', 'All') },
    { id: 'Inscription', label: t('Inscription & Tarifs', 'Registration & Fees') },
    { id: 'Soumission', label: t('Soumission & Abstract', 'Submission & Abstract') },
    { id: 'Présentation', label: t('Présentations Orales', 'Oral Presentations') },
    { id: 'Attestation', label: t('Attestations & Crédits', 'Certificates & Credits') },
    { id: 'Logistique', label: t('Logistique & Restauration', 'Logistics & Catering') },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = item.question[language].toLowerCase();
      const a = item.answer[language].toLowerCase();
      const s = searchQuery.toLowerCase().trim();
      const matchesSearch = s === '' || q.includes(s) || a.includes(s);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#f8fafc] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#8da9c4]/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="text-xs uppercase font-extrabold tracking-widest text-[#0052cc] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
            <span>{t("Questions Fréquentes", "Frequently Asked Questions")}</span>
          </div>
          <h2
            id="faq-title"
            className="font-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0b2545] leading-tight"
          >
            {t("Foire Aux Questions (FAQ)", "Frequently Asked Questions (FAQ)")}
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-[#13315c] max-w-2xl mx-auto leading-relaxed">
            {t(
              "Trouvez rapidement toutes les réponses concernant l'inscription via Google Form, les présentations orales et les attestations de formation doctorale.",
              "Quickly find answers regarding Google Form registration, oral presentations, and doctoral training certificates."
            )}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-[#8da9c4] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Rechercher une question (ex: abstract, oral, gratuit...)", "Search a question (e.g. abstract, oral, free...)")}
              className="w-full bg-white border border-[#8da9c4]/50 rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#0b2545] placeholder-[#8da9c4] focus:outline-hidden focus:border-[#0052cc] shadow-xs"
            />
          </div>

          {/* Categories pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0052cc] text-white shadow-xs'
                    : 'bg-white text-[#13315c] hover:bg-[#8da9c4]/20 border border-[#8da9c4]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-[#8da9c4]/30 p-6 text-sm text-[#13315c]">
              {t("Aucune question ne correspond à votre recherche.", "No questions match your query.")}
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={faq.id}
                  className="bg-white border border-[#8da9c4]/30 hover:border-[#0052cc] rounded-lg transition-all duration-200 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0052cc] shrink-0 mt-0.5" />
                      <span className="font-title text-base sm:text-lg font-bold text-[#0b2545] leading-snug">
                        {faq.question[language]}
                      </span>
                    </div>

                    <div className="p-1 rounded bg-[#f8fafc] text-[#0052cc] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#13315c] leading-relaxed border-t border-[#8da9c4]/20 bg-[#f8fafc]/50 animate-fade-in pl-12">
                      <p>{faq.answer[language]}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact Help footer */}
        <div className="mt-10 p-5 rounded-lg bg-white border border-[#8da9c4]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-[#0052cc] shrink-0" />
            <div>
              <span className="font-bold text-xs sm:text-sm text-[#0b2545] block">
                {t("Vous avez une question spécifique ?", "Have a specific question?")}
              </span>
              <span className="text-xs text-[#8da9c4]">
                {t("Contactez directement le comité d'organisation.", "Contact the organizing committee directly.")}
              </span>
            </div>
          </div>

          <a
            href={`mailto:${CONFERENCE_INFO.contact.email}`}
            className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider bg-[#0052cc]/10 hover:bg-[#0052cc] text-[#0052cc] hover:text-white transition-colors border border-[#0052cc]/30 inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t("Écrire au comité", "Email Committee")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
