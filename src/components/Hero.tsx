import React from 'react';
import { ExternalLink, Sparkles, ShieldCheck, Flame, ArrowRight, Gamepad } from 'lucide-react';
import { STUDIO_INFO, FEATURED_GAMES } from '../data/games';
import { ActivePage } from '../types';

interface HeroProps {
  onExploreGames: () => void;
  onOpenPrivacy: () => void;
  onSelectGame: (gameId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreGames, onOpenPrivacy, onSelectGame }) => {
  return (
    <section className="relative overflow-hidden py-14 lg:py-24 border-b border-zinc-800/80 bg-[#0a0a0c]">
      {/* Subtle grid pattern & atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none -z-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3b82f6]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-700 text-[#60a5fa] text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span>OFFICIAL SOLO GAME STUDIO</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-['Outfit'] italic tracking-tight text-white leading-[0.95] uppercase">
              EXPERIENCE <br />
              <span className="text-[#3b82f6]">
                FUN WAVE
              </span>{' '}
              GAMES
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Official catalog for indie creator <strong className="text-white font-bold">Fun Wave Games</strong> on the Amazon Appstore.
              From color-matching puzzle challenges to high-octane monster truck demolition derby, build your next mobile obsession.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-explore-games-btn"
                onClick={onExploreGames}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg font-black font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <Gamepad className="w-4 h-4" />
                <span>EXPLORE CATALOG</span>
              </button>

              <a
                id="hero-amazon-btn"
                href={STUDIO_INFO.amazonStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg font-black font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider bg-[#f59e0b] hover:bg-[#d97706] text-black shadow-md shadow-amber-500/20 transition-all hover:scale-102 active:scale-98"
              >
                <span>AMAZON APPSTORE</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <button
                id="hero-privacy-btn"
                onClick={onOpenPrivacy}
                className="flex items-center gap-2 px-5 py-3.5 rounded-lg font-bold font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>PRIVACY POLICY</span>
              </button>
            </div>

            {/* Credibility badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 border-t border-zinc-800/90">
              <div className="p-3 rounded-lg bg-[#121217] border border-zinc-800 text-center">
                <div className="text-2xl sm:text-3xl font-black italic text-white font-['Outfit']">03</div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mt-0.5">LIVE RELEASES</div>
              </div>
              <div className="p-3 rounded-lg bg-[#121217] border border-zinc-800 text-center">
                <div className="text-2xl sm:text-3xl font-black italic text-[#f59e0b] font-['Outfit']">100%</div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mt-0.5">FREE TO PLAY</div>
              </div>
              <div className="p-3 rounded-lg bg-[#121217] border border-zinc-800 text-center">
                <div className="text-2xl sm:text-3xl font-black italic text-[#3b82f6] font-['Outfit']">2026</div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mt-0.5">ACTIVE PIPELINE</div>
              </div>
            </div>
          </div>

          {/* Right Hero Showcase Cards */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-xl p-5 bg-[#121217] border border-zinc-800 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider text-white">
                      FEATURED RELEASES
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/30 font-bold">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3">
                  {FEATURED_GAMES.map((game, idx) => (
                    <div
                      key={game.id}
                      id={`hero-card-preview-${game.id}`}
                      onClick={() => onSelectGame(game.id)}
                      className="group flex items-center gap-3.5 p-3 rounded-lg bg-[#0e0e12] hover:bg-zinc-800/80 border border-zinc-800 hover:border-[#3b82f6]/60 transition-all cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-zinc-900 ring-1 ring-zinc-700 group-hover:ring-[#3b82f6] transition-all">
                        <img
                          src={game.imageUrl}
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black font-['JetBrains_Mono',monospace] text-[#60a5fa] uppercase tracking-wider">
                            0{idx + 1}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 uppercase">
                            {game.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white truncate group-hover:text-[#60a5fa] transition-colors mt-0.5 font-['Outfit'] uppercase">
                          {game.shortTitle}
                        </h4>
                        <p className="text-xs text-zinc-400 truncate">
                          {game.tagline}
                        </p>
                      </div>
                      <div className="shrink-0 text-zinc-500 group-hover:text-white transition-colors pr-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3.5 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span className="uppercase text-[11px]">AMAZON APPSTORE STOREFRONT</span>
                  <a
                    href={STUDIO_INFO.amazonStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f59e0b] hover:text-amber-300 font-bold flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>BROWSE ALL</span>
                    <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
