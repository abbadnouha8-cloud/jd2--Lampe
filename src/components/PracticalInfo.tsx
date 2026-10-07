import React, { useState } from 'react';
import { PRACTICAL_INFOS, CONFERENCE_INFO } from '../data';
import { 
  Calendar, 
  MapPin, 
  UploadCloud, 
  Monitor, 
  Coffee, 
  HelpCircle,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  Building,
  Navigation
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const INFO_ICONS = [
  Calendar,
  MapPin,
  UploadCloud,
  Monitor,
  Coffee,
  HelpCircle
];

export const PracticalInfo: React.FC = () => {
  const { language, t } = useLanguage();
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setContactSubmitted(true);
  };

  return (
    <section id="infos" className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#8da9c4]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase font-extrabold tracking-widest text-[#0052cc] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
            <span>{t("Logistique & Accès", "Logistics & Access")}</span>
          </div>
          <h2
            id="practical-info-title"
            className="font-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0b2545] leading-tight"
          >
            {t("Informations Pratiques & Contact", "Practical Information & Contact")}
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-[#13315c] leading-relaxed">
            {t(
              "Tous les détails logistiques, techniques et d'accès pour participer sereinement à la Deuxième Journée Doctorale 2026 à Kénitra.",
              "All logistic, technical, and access details for attending the Second Doctoral Day 2026 in Kenitra."
            )}
          </p>
        </div>

        {/* 6 Practical Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PRACTICAL_INFOS.map((info, idx) => {
            const IconComponent = INFO_ICONS[idx % INFO_ICONS.length];

            return (
              <div
                key={info.id}
                id={`practical-info-card-${idx + 1}`}
                className="bg-[#f8fafc] border border-[#8da9c4]/30 hover:border-[#0052cc] p-6 rounded-lg flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center group-hover:bg-[#0052cc] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[0.68rem] uppercase font-bold tracking-wider text-[#8da9c4]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-title text-lg font-bold text-[#0b2545] mb-2 leading-snug">
                    {info.title[language]}
                  </h3>

                  <div className="text-sm font-bold text-[#0052cc] mb-2">
                    {info.subtitle[language]}
                  </div>

                  <p className="text-xs sm:text-sm text-[#13315c] leading-relaxed mb-4">
                    {info.description[language]}
                  </p>
                </div>

                {info.highlight && (
                  <div className="pt-3 border-t border-[#8da9c4]/20 text-xs font-semibold text-[#0b2545] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
                    <span>{info.highlight[language]}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Form & Location Map Information */}
        <div className="bg-[#071933] text-white rounded-xl border border-[#00a3ff]/30 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Direct Institutional Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#38bdf8] block mb-1">
                  {t("Secrétariat du Colloque", "Conference Secretariat")}
                </span>
                <h3 className="font-title text-2xl font-bold text-white">
                  {t("Laboratoire LAMPE", "LAMPE Laboratory")}
                </h3>
                <p className="text-sm text-[#8da9c4] mt-2 leading-relaxed">
                  {t(
                    "Pour toute question relative aux soumissions d'abstracts, au programme ou aux partenariats institutionnels.",
                    "For any inquiries regarding abstract submissions, program schedule, or institutional partnerships."
                  )}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{t("Lieu & Faculté", "Venue & Faculty")}</strong>
                    <span className="text-[#8da9c4]">{CONFERENCE_INFO.venue[language]}</span>
                    <span className="text-[#8da9c4] block">{CONFERENCE_INFO.university.name}, {CONFERENCE_INFO.campus}, {CONFERENCE_INFO.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#f5a623] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{t("Courrier Électronique", "Email")}</strong>
                    <a href={`mailto:${CONFERENCE_INFO.contact.email}`} className="text-[#38bdf8] hover:underline">
                      {CONFERENCE_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#00bf72] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{t("Site Web de l'Université", "University Website")}</strong>
                    <a href="https://www.uit.ac.ma" target="_blank" rel="noopener noreferrer" className="text-[#38bdf8] hover:underline">
                      {CONFERENCE_INFO.contact.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#0b2545]/80 p-6 sm:p-8 rounded-lg border border-[#00a3ff]/20">
              <h4 className="font-title text-xl font-bold text-white mb-2">
                {t("Envoyer un message au comité d'organisation", "Send a message to the organizing committee")}
              </h4>
              <p className="text-xs text-[#8da9c4] mb-6">
                {t("Réponse garantie sous 48 heures ouvrables.", "Guaranteed response within 48 business hours.")}
              </p>

              {contactSubmitted ? (
                <div className="p-6 bg-[#00bf72]/15 border border-[#00bf72]/40 rounded text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#00bf72] mx-auto" />
                  <h5 className="font-bold text-white text-base">
                    {t("Message transmis avec succès !", "Message sent successfully!")}
                  </h5>
                  <p className="text-xs text-[#8da9c4]">
                    {t("Merci pour votre prise de contact. Le secrétariat du LAMPE vous répondra prochainement.", "Thank you for reaching out. The LAMPE secretariat will reply shortly.")}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactForm({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs text-[#38bdf8] hover:underline font-bold mt-2"
                  >
                    {t("Envoyer un autre message", "Send another message")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#8da9c4] mb-1">
                        {t("Nom complet *", "Full name *")}
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Pr. / Dr. / M. Nom Prénom"
                        className="w-full bg-[#06172e] border border-[#00a3ff]/30 rounded px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#38bdf8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#8da9c4] mb-1">
                        {t("Adresse Email *", "Email address *")}
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="votre.email@uit.ac.ma"
                        className="w-full bg-[#06172e] border border-[#00a3ff]/30 rounded px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#38bdf8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#8da9c4] mb-1">
                      {t("Objet du message", "Subject")}
                    </label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder={t("Ex : Renseignement soumission abstract oral", "e.g., Oral abstract inquiry")}
                      className="w-full bg-[#06172e] border border-[#00a3ff]/30 rounded px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#38bdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#8da9c4] mb-1">
                      {t("Votre Message *", "Your Message *")}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder={t("Précisez votre demande ou question...", "Specify your request or question...")}
                      className="w-full bg-[#06172e] border border-[#00a3ff]/30 rounded px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#38bdf8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#00a3ff] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-opacity cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t("Envoyer le message", "Send message")}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
