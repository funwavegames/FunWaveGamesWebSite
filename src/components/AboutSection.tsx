import React from 'react';
import { User, Heart, Sparkles, Smartphone, Shield, Zap, Mail } from 'lucide-react';
import { STUDIO_INFO } from '../data/games';

interface AboutSectionProps {
  onContactClick: () => void;
  onPrivacyClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, onPrivacyClick }) => {
  return (
    <section id="about-studio-section" className="py-16 sm:py-24 border-t border-zinc-800/80 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-widest bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/30">
              <User className="w-3.5 h-3.5" />
              <span>SOLO INDEPENDENT CREATOR</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">
              ABOUT FUN WAVE GAMES
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              <strong className="text-white font-bold">Fun Wave Games</strong> is an independent solo development studio driven by a singular mission: crafting instant-fun, accessible, and high-performance casual games for players across the globe on the Amazon Appstore.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              From deeply satisfying color-sorting liquid puzzles and jewel blast block grids, to high-octane arena demolition derby showdowns, every title is engineered with meticulous attention to responsive touch controls, smooth frame rates, and rewarding audio-visual feedback.
            </p>

            {/* Value Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#121217] border border-zinc-800 space-y-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <h4 className="text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider text-white">INSTANT GAMEPLAY</h4>
                <p className="text-xs text-zinc-400">Quick to learn, zero friction, intuitive one-touch mechanics.</p>
              </div>

              <div className="p-4 rounded-lg bg-[#121217] border border-zinc-800 space-y-2">
                <Smartphone className="w-5 h-5 text-[#60a5fa]" />
                <h4 className="text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider text-white">DEVICE OPTIMIZED</h4>
                <p className="text-xs text-zinc-400">Tailored specifically for Amazon Fire tablets, phones, and Fire TV.</p>
              </div>

              <div className="p-4 rounded-lg bg-[#121217] border border-zinc-800 space-y-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h4 className="text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider text-white">SAFE & COMPLIANT</h4>
                <p className="text-xs text-zinc-400">Strict adherence to children's privacy and clear player guidelines.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="about-contact-btn"
                onClick={onContactClick}
                className="px-6 py-3.5 rounded-lg font-black font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider bg-[#3b82f6] hover:bg-[#2563eb] text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>GET IN TOUCH</span>
              </button>
              <button
                id="about-privacy-btn"
                onClick={onPrivacyClick}
                className="px-6 py-3.5 rounded-lg font-bold font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all cursor-pointer"
              >
                PRIVACY TERMS
              </button>
            </div>
          </div>

          {/* Right Column: Studio Card & Avatar */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md p-6 rounded-xl bg-[#121217] border border-zinc-800 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-zinc-700 shadow-lg">
                  <img
                    src={STUDIO_INFO.logoUrl}
                    alt="Fun Wave Games Studio Emblem"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">{STUDIO_INFO.name}</h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#60a5fa] font-bold">SOLO GAME CREATOR</p>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">{STUDIO_INFO.email}</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-zinc-800 text-xs text-zinc-300 font-mono">
                <div className="flex justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-400 uppercase">Primary Store:</span>
                  <span className="font-bold text-[#f59e0b] uppercase">Amazon Appstore</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-400 uppercase">Supported OS:</span>
                  <span className="font-bold text-white uppercase">Amazon Fire OS & Android</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-800/80">
                  <span className="text-zinc-400 uppercase">Published Games:</span>
                  <span className="font-bold text-[#60a5fa] uppercase">03 Live Titles</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-400 uppercase">Direct Support:</span>
                  <a href="mailto:funwaveg@gmail.com" className="font-bold text-[#60a5fa] hover:underline">
                    funwaveg@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800 text-xs text-zinc-300 leading-relaxed font-normal">
                Thank you to all players downloading, reviewing, and playing our games on Amazon Appstore. Your support powers every single new update and title!
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
