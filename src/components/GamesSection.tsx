import React, { useState, useMemo } from 'react';
import { Gamepad2, Search, Filter, ExternalLink } from 'lucide-react';
import { FEATURED_GAMES, STUDIO_INFO } from '../data/games';
import { GameItem } from '../types';
import { GameCard } from './GameCard';

interface GamesSectionProps {
  onOpenDetails: (game: GameItem) => void;
  onExploreUpcoming: () => void;
}

export const GamesSection: React.FC<GamesSectionProps> = ({ onOpenDetails, onExploreUpcoming }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    return ['all', 'Puzzle', 'Action'];
  }, []);

  const filteredGames = useMemo(() => {
    return FEATURED_GAMES.filter((game) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        game.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch =
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="games-showcase-section" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 text-[#60a5fa] font-bold font-['JetBrains_Mono',monospace] text-xs uppercase tracking-widest mb-2">
              <Gamepad2 className="w-4 h-4 text-[#3b82f6]" />
              <span>OFFICIAL CATALOG PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] italic tracking-tight uppercase">
              FEATURED AMAZON GAMES
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl font-normal">
              Download and play instantly on Amazon Fire Tablets, Fire TV, and Android mobile devices.
            </p>
          </div>

          {/* Quick Filter & Search controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="games-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH CATALOG..."
                className="w-full sm:w-52 pl-9 pr-3 py-2.5 rounded-lg text-xs font-mono uppercase bg-[#121217] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#3b82f6]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#121217] border border-zinc-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`filter-category-${cat.toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#3b82f6] text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'ALL' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, index) => (
              <GameCard
                key={game.id}
                game={game}
                index={index}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#121217] rounded-xl border border-zinc-800 mt-8">
            <p className="text-zinc-400 text-sm font-mono uppercase">NO MATCHING GAMES FOUND IN CATALOG.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-mono uppercase text-[#60a5fa] hover:underline font-bold"
            >
              RESET FILTERS
            </button>
          </div>
        )}

        {/* Coming Soon Callout Strip */}
        <div className="mt-14 rounded-xl p-6 sm:p-8 bg-[#121217] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-black font-['JetBrains_Mono',monospace] text-amber-400 uppercase tracking-widest">
              ACTIVE PRODUCTION PIPELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">
              MORE TITLES UNDER DEVELOPMENT
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl">
              We are actively engineering fresh casual, puzzle, and action titles to expand the Fun Wave Games Amazon portfolio.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              id="games-strip-upcoming-btn"
              onClick={onExploreUpcoming}
              className="px-5 py-3 rounded-lg font-black font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-all cursor-pointer"
            >
              VIEW ROADMAP
            </button>
            <a
              href={STUDIO_INFO.amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-3 rounded-lg font-black font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider bg-[#f59e0b] hover:bg-[#d97706] text-black transition-all shadow-md"
            >
              <span>AMAZON PAGE</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
