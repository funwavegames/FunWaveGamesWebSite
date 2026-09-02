import React, { useState } from 'react';
import { Gamepad2, ExternalLink, Shield, Menu, X, Sparkles, Mail, Info } from 'lucide-react';
import { STUDIO_INFO } from '../data/games';
import { ActivePage } from '../types';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#0a0a0c]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('games')}
            className="flex items-center gap-3 group text-left transition-transform active:scale-98"
          >
            <div className="relative w-11 h-11 rounded-lg overflow-hidden ring-2 ring-zinc-700 group-hover:ring-[#3b82f6] transition-all shadow-lg shadow-black/50">
              <img
                src={STUDIO_INFO.logoUrl}
                alt="Fun Wave Games Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl sm:text-2xl tracking-tighter text-white font-['Outfit'] group-hover:text-[#3b82f6] transition-colors italic">
                  FUN WAVE GAMES
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold font-['JetBrains_Mono',monospace] tracking-wider uppercase bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/30">
                  SOLO STUDIO
                </span>
              </div>
              <p className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">OFFICIAL AMAZON APPSTORE CREATOR</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            <button
              id="nav-games-btn"
              onClick={() => handleNavClick('games')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider transition-all ${
                activePage === 'games'
                  ? 'bg-zinc-800 text-white border border-zinc-600 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              GAMES
            </button>
            <button
              id="nav-upcoming-btn"
              onClick={() => handleNavClick('upcoming')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                activePage === 'upcoming'
                  ? 'bg-zinc-800 text-white border border-zinc-600 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              COMING SOON
            </button>
            <button
              id="nav-about-btn"
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider transition-all ${
                activePage === 'about'
                  ? 'bg-zinc-800 text-white border border-zinc-600 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              ABOUT
            </button>
            <button
              id="nav-privacy-btn"
              onClick={() => handleNavClick('privacy-policy')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                activePage === 'privacy-policy'
                  ? 'bg-zinc-800 text-white border border-zinc-600 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              PRIVACY POLICY
            </button>
            <button
              id="nav-contact-btn"
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider transition-all ${
                activePage === 'contact'
                  ? 'bg-zinc-800 text-white border border-zinc-600 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Amazon Store External Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="amazon-store-header-btn"
              href={STUDIO_INFO.amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-[#f59e0b] hover:bg-[#d97706] text-black shadow-md shadow-amber-500/20 transition-all active:scale-95"
            >
              <span>AMAZON STORE</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0e0e12] px-4 pt-3 pb-6 space-y-2">
          <button
            id="mobile-nav-games-btn"
            onClick={() => handleNavClick('games')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider ${
              activePage === 'games' ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-400 hover:bg-zinc-900'
            }`}
          >
            <Gamepad2 className="w-4 h-4 text-[#3b82f6]" />
            GAMES CATALOG
          </button>
          <button
            id="mobile-nav-upcoming-btn"
            onClick={() => handleNavClick('upcoming')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider ${
              activePage === 'upcoming' ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-400 hover:bg-zinc-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            COMING SOON TITLES
          </button>
          <button
            id="mobile-nav-about-btn"
            onClick={() => handleNavClick('about')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider ${
              activePage === 'about' ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-400 hover:bg-zinc-900'
            }`}
          >
            <Info className="w-4 h-4 text-[#3b82f6]" />
            ABOUT STUDIO
          </button>
          <button
            id="mobile-nav-privacy-btn"
            onClick={() => handleNavClick('privacy-policy')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider ${
              activePage === 'privacy-policy' ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-400 hover:bg-zinc-900'
            }`}
          >
            <Shield className="w-4 h-4 text-[#3b82f6]" />
            PRIVACY POLICY
          </button>
          <button
            id="mobile-nav-contact-btn"
            onClick={() => handleNavClick('contact')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider ${
              activePage === 'contact' ? 'bg-zinc-800 text-white border border-zinc-700' : 'text-zinc-400 hover:bg-zinc-900'
            }`}
          >
            <Mail className="w-4 h-4 text-[#3b82f6]" />
            CONTACT DEVELOPER
          </button>
          <div className="pt-2">
            <a
              id="mobile-amazon-store-btn"
              href={STUDIO_INFO.amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-[#f59e0b] text-black shadow-md shadow-amber-500/20"
            >
              <span>VIEW ALL ON AMAZON APPSTORE</span>
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
