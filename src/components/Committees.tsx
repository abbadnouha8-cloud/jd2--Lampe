import React, { useState } from 'react';
import { COMMITTEE_DATA, CONFERENCE_INFO } from '../data';
import { Crown, Users, Award, Sparkles, Building2, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Committees: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'honneur' | 'organisation' | 'scientifique'>('all');

  const honorCommittee = COMMITTEE_DATA.find((c) => c.id === 'comite-honneur');
  const orgCommittee = COMMITTEE_DATA.find((c) => c.id === 'comite-organisation');
  const sciCommittee = COMMITTEE_DATA.find((c) => c.id === 'comite-scientifique');

  return (
    <section id="comites" className="bg-[#f8fafc] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#8da9c4]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase font-extrabold tracking-widest text-[#0052cc] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a623]" />
            <span>{t("Instances Universitaires & Scientifiques", "University & Scientific Bodies")}</span>
          </div>
          <h2
            id="committees-title"
            className="font-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0b2545] leading-tight uppercase"
          >
            {t("Comités de la 2ème Journée Doctorale", "Committees of the 2nd Doctoral Day")}
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#0052cc] via-[#00a3ff] to-[#f5a623] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#13315c] leading-relaxed">
            {t(
              "Placé sous la bienveillance des autorités de l'Université Ibn Tofaïl, avec le concours des enseignants-chercheurs, docteurs et doctorants.",
              "Placed under the patronage of Ibn Tofail University authorities, with faculty professors, doctors, and doctoral researchers."
            )}
          </p>
        </div>

        {/* Committee Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0052cc] text-white shadow-md'
                : 'bg-white text-[#13315c] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {t("Tous les Comités", "All Committees")}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('honneur')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'honneur'
                ? 'bg-[#0052cc] text-white shadow-md'
                : 'bg-white text-[#13315c] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Crown className="w-4 h-4 text-[#f5a623]" />
            <span>{t("Comité d'Honneur", "Honorary Committee")}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('organisation')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'organisation'
                ? 'bg-[#0052cc] text-white shadow-md'
                : 'bg-white text-[#13315c] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Users className="w-4 h-4 text-[#00a3ff]" />
            <span>{t("Comité d'Organisation", "Organizing Committee")} ({orgCommittee?.members.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('scientifique')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'scientifique'
                ? 'bg-[#0052cc] text-white shadow-md'
                : 'bg-white text-[#13315c] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Award className="w-4 h-4 text-[#00bf72]" />
            <span>{t("Comité Scientifique", "Scientific Committee")} ({sciCommittee?.members.length})</span>
          </button>
        </div>

        <div className="space-y-12">
          
          {/* 1. COMITÉ D'HONNEUR */}
          {(activeTab === 'all' || activeTab === 'honneur') && honorCommittee && (
            <div className="bg-white border-2 border-[#f5a623]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 text-[#0052cc] mb-2">
                <Crown className="w-6 h-6 text-[#f5a623]" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#f5a623]">
                  {honorCommittee.subtitle[language]}
                </span>
              </div>
              <h3 className="font-title text-2xl sm:text-3xl font-bold text-[#0b2545] mb-2">
                {honorCommittee.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {honorCommittee.description[language]}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {honorCommittee.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#f5a623]/40 hover:border-[#f5a623] transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-xl bg-[#f5a623]/15 text-[#f5a623] flex items-center justify-center shrink-0">
                            <Crown className="w-5 h-5 text-[#f5a623]" />
                          </div>
                          <span className="text-[0.7rem] uppercase font-bold tracking-widest text-[#f5a623]">
                            {t("Membre d'Honneur", "Honorary Member")}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>
                      
                      <h4 className="font-bold text-xl text-[#0b2545] leading-snug tracking-tight">
                        {member.name}
                      </h4>
                      <div className="text-sm font-semibold text-[#0052cc] mt-1.5 leading-snug">
                        {member.role[language]}
                      </div>
                    </div>

                    {member.affiliation && (
                      <div className="text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100 font-medium flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{member.affiliation[language]}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. COMITÉ D'ORGANISATION */}
          {(activeTab === 'all' || activeTab === 'organisation') && orgCommittee && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-[#00a3ff] mb-1">
                    <Users className="w-5 h-5 text-[#0052cc]" />
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#0052cc]">
                      {orgCommittee.subtitle[language]}
                    </span>
                  </div>
                  <h3 className="font-title text-2xl sm:text-3xl font-bold text-[#0b2545]">
                    {orgCommittee.title[language]}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0052cc]/10 text-[#0052cc] font-bold text-xs">
                  {orgCommittee.members.length} {t("Membres", "Members")}
                </span>
              </div>

              {/* Members Grid: 4 columns on large screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {orgCommittee.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-[#0052cc]/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-bold text-sm text-[#0b2545] leading-snug">
                        {member.name}
                      </div>
                      {member.role?.[language] && (
                        <div className="text-xs font-semibold text-[#0052cc] mt-0.5">
                          {member.role[language]}
                        </div>
                      )}
                    </div>
                    {member.affiliation && (
                      <div className="text-[0.7rem] text-slate-500 mt-2 font-medium">
                        {member.affiliation[language]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. COMITÉ SCIENTIFIQUE */}
          {(activeTab === 'all' || activeTab === 'scientifique') && sciCommittee && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 text-[#00bf72] mb-1">
                    <Award className="w-5 h-5 text-[#00bf72]" />
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#00bf72]">
                      {sciCommittee.subtitle[language]}
                    </span>
                  </div>
                  <h3 className="font-title text-2xl sm:text-3xl font-bold text-[#0b2545]">
                    {sciCommittee.title[language]}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#00bf72]/15 text-[#008f55] font-bold text-xs">
                  {sciCommittee.members.length} {t("Professeurs & Experts", "Professors & Experts")}
                </span>
              </div>

              {/* Members Grid: 4 columns on large screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {sciCommittee.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 hover:border-[#00bf72]/50 transition-colors flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="font-bold text-xs sm:text-[13px] text-[#0b2545] truncate">
                        {member.name}
                      </div>
                    </div>
                    {member.affiliation && (
                      <span className="shrink-0 text-[0.68rem] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-300 text-[#0052cc]">
                        {member.affiliation[language].split(' - ')[0] || member.affiliation[language]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
