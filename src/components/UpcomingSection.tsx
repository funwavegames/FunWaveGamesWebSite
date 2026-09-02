import React from 'react';
import { Sparkles, Clock, Hammer, Layers, Flame, Bell } from 'lucide-react';
import { UPCOMING_GAMES } from '../data/games';

export const UpcomingSection: React.FC = () => {
  return (
    <section id="upcoming-games-section" className="py-16 sm:py-24 bg-[#0a0a0c] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEVELOPMENT PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">
            MORE GAMES COMING SOON
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base font-normal">
            Fun Wave Games is continually designing, prototyping, and testing fresh game ideas for Amazon Appstore players. Here is a sneak peek at what’s in the workshop!
          </p>
        </div>

        {/* Grid of Upcoming Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_GAMES.map((game, i) => (
            <div
              key={game.id}
              id={`upcoming-card-${game.id}`}
              className="relative flex flex-col justify-between p-6 rounded-xl bg-[#121217] border border-zinc-800 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/5 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 font-mono">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#f59e0b] px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                    {game.stage}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{game.expectedYear}</span>
                  </span>
                </div>

                <h3 className="text-xl font-black text-white font-['Outfit'] italic uppercase tracking-tight group-hover:text-amber-300 transition-colors">
                  {game.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#60a5fa] font-bold mt-1">
                  {game.category}
                </p>
                <p className="text-sm text-zinc-300 mt-3 leading-relaxed font-normal">
                  {game.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800">
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {game.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-medium border border-zinc-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Pipeline Guarantee */}
        <div className="mt-12 text-center p-6 rounded-xl bg-[#121217] border border-zinc-800 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            HAVE AN IDEA OR MECHANIC YOU’D LOVE TO SEE NEXT? REACH OUT DIRECTLY TO THE SOLO DEVELOPER AT{' '}
            <a
              href="mailto:funwaveg@gmail.com"
              className="text-[#60a5fa] hover:underline font-bold"
            >
              FUNWAVEG@GMAIL.COM
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
