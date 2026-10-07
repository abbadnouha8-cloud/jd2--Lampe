import React, { useState } from 'react';
import { AGENDA_DATA, CONFERENCE_INFO } from '../data';
import { Clock, MapPin, Award, Coffee, Users, BookOpen, Filter, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Agenda: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { language, t } = useLanguage();

  const filterCategories = [
    { id: 'all', label: t('Tout le programme', 'Full Program') },
    { id: 'ceremony', label: t('Cérémonies & Allocutions', 'Ceremonies & Addresses') },
    { id: 'session', label: t('Sessions Orales', 'Oral Sessions') },
    { id: 'break', label: t('Pauses & Réseautage', 'Breaks & Networking') },
  ];

  const filteredAgenda = AGENDA_DATA.filter(item => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ceremony') return item.category === 'ceremony' || item.category === 'closing';
    if (selectedFilter === 'session') return item.category === 'session' || item.category === 'roundtable';
    if (selectedFilter === 'break') return item.category === 'break';
    return true;
  });

  const getCategoryBadge = (category?: string) => {
    switch (category) {
      case 'ceremony':
      case 'closing':
        return { label: t('Cérémonie', 'Ceremony'), bg: 'bg-[#0052cc] text-white', icon: Award };
      case 'session':
        return { label: t('Communication Orale', 'Oral Talk'), bg: 'bg-[#00a3ff]/15 text-[#0052cc] border border-[#00a3ff]/30', icon: BookOpen };
      case 'roundtable':
        return { label: t('Table Ronde', 'Roundtable'), bg: 'bg-[#13315c] text-white', icon: Users };
      case 'break':
        return { label: t('Pause & Échanges', 'Break & Networking'), bg: 'bg-[#f1f5f9] text-[#13315c] border border-[#8da9c4]/30', icon: Coffee };
      default:
        return { label: t('Événement', 'Event'), bg: 'bg-[#f1f5f9] text-[#13315c]', icon: Clock };
    }
  };

  return (
    <section id="programme" className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#8da9c4]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-[#0052cc] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
              <span>{t("Déroulement de la Journée", "Schedule of the Day")}</span>
            </div>
            <h2
              id="agenda-title"
              className="font-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0b2545] leading-tight"
            >
              {t("Programme Prévisionnel", "Provisional Program")}
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] mt-3 rounded-full" />
            <p className="mt-4 text-base text-[#13315c] max-w-2xl leading-relaxed">
              {t(
                "Déroulement cadencé des sessions orales, des échanges scientifiques et de la table ronde à la Faculté des Sciences de Kénitra.",
                "Paced schedule of oral sessions, scientific discussions, and the roundtable at the Faculty of Sciences of Kenitra."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <span className="text-xs text-[#0b2545] font-semibold bg-[#f8fafc] px-3.5 py-2 border border-[#8da9c4]/30 rounded flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0052cc]" />
              <span>08:30 – 17:45</span>
            </span>

            <span className="text-xs text-[#0b2545] font-semibold bg-[#f8fafc] px-3.5 py-2 border border-[#8da9c4]/30 rounded flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f5a623]" />
              <span>{CONFERENCE_INFO.venue[language]}</span>
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-[#8da9c4]/30 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0052cc] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            {t("Filtrer :", "Filter:")}
          </span>
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-[#0052cc] text-white shadow-xs'
                  : 'bg-[#f1f5f9] text-[#13315c] hover:bg-[#8da9c4]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-[#0052cc]/30 ml-4 sm:ml-28 space-y-6 sm:space-y-8">
            {filteredAgenda.map((item, idx) => {
              const badge = getCategoryBadge(item.category);
              const BadgeIcon = badge.icon;
              const isPrizeCeremony = item.category === 'closing';

              return (
                <div key={idx} className="relative pl-6 sm:pl-8 group">
                  {/* Marker Dot */}
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[#0052cc] group-hover:bg-[#0052cc] group-hover:border-[#00a3ff] transition-all flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0052cc] group-hover:bg-white transition-all" />
                  </div>

                  {/* Time Badge */}
                  <div className="sm:absolute sm:-left-28 sm:top-1.5 text-left sm:text-right sm:w-20 mb-2 sm:mb-0">
                    <span className="inline-flex items-center gap-1 font-bold text-xs sm:text-sm text-[#0052cc] bg-[#f1f5f9] px-2 py-0.5 rounded font-mono">
                      <Clock className="w-3 h-3 text-[#0052cc] sm:hidden" />
                      {item.time}
                    </span>
                  </div>

                  {/* Event Details Card */}
                  <div className={`border p-5 rounded-lg transition-all shadow-2xs ${
                    isPrizeCeremony
                      ? 'bg-gradient-to-r from-white via-[#f8fafc] to-[#e0f2fe] border-[#0052cc] shadow-sm'
                      : 'bg-white hover:border-[#0052cc] border-[#8da9c4]/30'
                  }`}>
                    {/* Header: Title + Category Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#0b2545] group-hover:text-[#0052cc] transition-colors leading-snug">
                        {item.title[language]}
                      </h3>
                      
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${badge.bg}`}>
                          <BadgeIcon className="w-3 h-3" />
                          <span>{badge.label}</span>
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#13315c] leading-relaxed">
                      {item.description[language]}
                    </p>

                    {/* Location Tag */}
                    {item.location && (
                      <div className="mt-3 pt-2.5 border-t border-[#8da9c4]/20 flex items-center gap-1.5 text-xs text-[#0052cc] font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#f5a623] shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
