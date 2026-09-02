import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GamesSection } from './components/GamesSection';
import { GameDetailModal } from './components/GameDetailModal';
import { UpcomingSection } from './components/UpcomingSection';
import { AboutSection } from './components/AboutSection';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FEATURED_GAMES } from './data/games';
import { ActivePage, GameItem } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('games');
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);

  // Sync with window.location hash for deep linking (e.g. for Amazon store privacy policy link submission)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'privacy-policy' || hash === 'privacy') {
        setActivePage('privacy-policy');
      } else if (hash === 'games') {
        setActivePage('games');
      } else if (hash === 'upcoming') {
        setActivePage('upcoming');
      } else if (hash === 'about') {
        setActivePage('about');
      } else if (hash === 'contact') {
        setActivePage('contact');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page === 'games' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGameById = (gameId: string) => {
    const found = FEATURED_GAMES.find((g) => g.id === gameId);
    if (found) {
      setSelectedGame(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c] text-white selection:bg-[#3b82f6] selection:text-white">
      {/* Navigation Header */}
      <Navbar activePage={activePage} setActivePage={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'privacy-policy' ? (
          <PrivacyPolicy />
        ) : activePage === 'upcoming' ? (
          <div className="py-6">
            <UpcomingSection />
          </div>
        ) : activePage === 'about' ? (
          <div className="py-6">
            <AboutSection
              onContactClick={() => navigateTo('contact')}
              onPrivacyClick={() => navigateTo('privacy-policy')}
            />
          </div>
        ) : activePage === 'contact' ? (
          <div className="py-6">
            <ContactSection />
          </div>
        ) : (
          /* Default Home / Games View */
          <>
            <Hero
              onExploreGames={() => {
                const el = document.getElementById('games-showcase-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenPrivacy={() => navigateTo('privacy-policy')}
              onSelectGame={handleSelectGameById}
            />

            <GamesSection
              onOpenDetails={(game) => setSelectedGame(game)}
              onExploreUpcoming={() => navigateTo('upcoming')}
            />

            <UpcomingSection />

            <AboutSection
              onContactClick={() => navigateTo('contact')}
              onPrivacyClick={() => navigateTo('privacy-policy')}
            />

            <ContactSection />
          </>
        )}
      </main>

      {/* Game Detail Modal */}
      <GameDetailModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
