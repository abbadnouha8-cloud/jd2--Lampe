import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Themes } from './components/Themes';
import { Speakers } from './components/Speakers';
import { SubmissionWorkflow } from './components/SubmissionWorkflow';
import { Committees } from './components/Committees';
import { Registration } from './components/Registration';
import { PracticalInfo } from './components/PracticalInfo';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { AbstractTemplateModal } from './components/AbstractTemplateModal';
import { RegistrationTier } from './types';

function MainApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<RegistrationTier | null>(null);

  const handleOpenRegistration = () => {
    setSelectedTier(null);
    setIsModalOpen(true);
  };

  const handleSelectTier = (tier: RegistrationTier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden bg-[#071933] text-[#13315c] selection:bg-[#8da9c4] selection:text-[#0b2545]">
      {/* 1. HEADER / NAVIGATION with Language Switcher & UIT Logo */}
      <Header 
        onOpenRegistration={handleOpenRegistration} 
        onOpenTemplate={() => setIsTemplateModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. HERO SECTION matching Poster Aesthetic with Campus Photo Background & UIT Logo */}
        <Hero 
          onOpenRegistration={handleOpenRegistration} 
          onOpenTemplate={() => setIsTemplateModalOpen(true)}
        />

        {/* 3. SECTION À PROPOS (LAMPE History, Accreditation & Missions) */}
        <About />

        {/* 4. SECTION THÈMES (Poster 01, 02, 03 & Accredited Areas) */}
        <Themes />

        {/* 5. SECTION CONFÉRENCIERS PLÉNIERS (Pr. Belmabkhout & Pr. El Kadib with Scholar profiles & photos) */}
        <Speakers />

        {/* 6. SECTION PROCESSUS DE SOUMISSION */}
        <SubmissionWorkflow 
          onOpenTemplate={() => setIsTemplateModalOpen(true)}
          onOpenRegistration={handleOpenRegistration}
        />

        {/* 7. SECTION COMITÉS */}
        <Committees />

        {/* 8. SECTION INSCRIPTION (Google Form Link & Embed) */}
        <Registration 
          onSelectTier={handleSelectTier} 
          onOpenTemplate={() => setIsTemplateModalOpen(true)}
        />

        {/* 9. SECTION INFOS PRATIQUES & CONTACT */}
        <PracticalInfo />

        {/* 10. SECTION FAQ */}
        <FAQ />
      </main>

      {/* 11. FOOTER */}
      <Footer />

      {/* Interactive Registration Guidance Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier={selectedTier}
      />

      {/* Abstract Template Modal */}
      <AbstractTemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
