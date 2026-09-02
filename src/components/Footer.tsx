import React from 'react';
import { ExternalLink, Shield, Mail, ArrowUp } from 'lucide-react';
import { STUDIO_INFO, FEATURED_GAMES } from '../data/games';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0c] text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Studio Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-zinc-700">
                <img
                  src={STUDIO_INFO.logoUrl}
                  alt="Fun Wave Games"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">
                FUN WAVE GAMES
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Solo independent game developer creating engaging casual puzzle adventures, 
              arcade racing, and brain-teasing mobile games on the Amazon Appstore.
            </p>
            <div className="pt-1">
              <a
                href={STUDIO_INFO.amazonStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
              >
                <span>AMAZON ACCOUNT STORE</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Amazon Released Games */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-widest text-white">
              AMAZON GAMES
            </h4>
            <ul className="space-y-2 text-xs">
              {FEATURED_GAMES.map((game) => (
                <li key={game.id}>
                  <a
                    href={game.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#60a5fa] flex items-center justify-between group transition-colors uppercase text-[11px] text-zinc-400"
                  >
                    <span className="truncate mr-2">{game.shortTitle}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#3b82f6] shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-widest text-white">
              EXPLORE SITE
            </h4>
            <ul className="space-y-2 text-[11px] uppercase">
              <li>
                <button
                  id="footer-nav-games"
                  onClick={() => onNavigate('games')}
                  className="hover:text-[#60a5fa] transition-colors cursor-pointer text-zinc-400"
                >
                  GAMES PORTFOLIO
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-upcoming"
                  onClick={() => onNavigate('upcoming')}
                  className="hover:text-[#60a5fa] transition-colors cursor-pointer text-zinc-400"
                >
                  PIPELINE TEASERS
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#60a5fa] transition-colors cursor-pointer text-zinc-400"
                >
                  ABOUT STUDIO
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-privacy"
                  onClick={() => onNavigate('privacy-policy')}
                  className="hover:text-[#60a5fa] flex items-center gap-1.5 transition-colors cursor-pointer font-bold text-zinc-300"
                >
                  <Shield className="w-3 h-3 text-[#3b82f6]" />
                  <span>PRIVACY POLICY (01/10/2026)</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#60a5fa] transition-colors cursor-pointer text-zinc-400"
                >
                  CONTACT & SUPPORT
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Notice */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-widest text-white">
              SUPPORT & LEGAL
            </h4>
            <div className="space-y-2 text-xs text-zinc-400 font-sans">
              <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase">
                <Mail className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                <a href="mailto:funwaveg@gmail.com" className="hover:text-white underline font-bold text-[#60a5fa]">
                  funwaveg@gmail.com
                </a>
              </p>
              <p className="leading-relaxed text-xs text-zinc-400">
                All listed titles are distributed through the official Amazon Appstore for Fire OS and Android devices.
              </p>
              <p className="text-[10px] font-mono uppercase text-zinc-500">
                Amazon, Fire, and all related logos are trademarks of Amazon.com, Inc. or its affiliates.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-zinc-400 uppercase text-[11px]">
            <span>© 2026 <strong className="text-white">Fun Wave Games</strong>. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 uppercase text-[11px]">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="text-zinc-400 hover:text-[#60a5fa] transition-colors cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <span className="text-zinc-700">•</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
