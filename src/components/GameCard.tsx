import React, { useState } from 'react';
import { ExternalLink, Check, Copy, Info, Star, Tablet, Smartphone } from 'lucide-react';
import { GameItem } from '../types';

interface GameCardProps {
  game: GameItem;
  index: number;
  onOpenDetails: (game: GameItem) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, index, onOpenDetails }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(game.amazonUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={`game-card-${game.id}`}
      className="group relative flex flex-col rounded-xl overflow-hidden bg-[#121217] border border-zinc-800 hover:border-[#3b82f6] transition-all duration-300 hover:shadow-2xl hover:shadow-[#3b82f6]/10"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/20 to-transparent" />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded text-[10px] font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-black/80 text-[#60a5fa] border border-[#3b82f6]/40 backdrop-blur-md">
            TITLE #0{index + 1}
          </span>
          <span className="px-2.5 py-1 rounded text-[10px] font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-[#f59e0b] text-black shadow-md">
            AMAZON STORE
          </span>
        </div>

        {/* Category & Status bottom of image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[10px] font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider text-white bg-zinc-900/90 backdrop-blur-sm px-2.5 py-1 rounded border border-zinc-700">
            {game.category}
          </span>
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-black/80 border border-emerald-500/30 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE</span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-black text-white group-hover:text-[#60a5fa] transition-colors font-['Outfit'] italic uppercase tracking-tight">
            {game.title}
          </h3>
          <p className="mt-1 text-xs font-mono uppercase tracking-wider text-[#60a5fa] font-bold">
            {game.tagline}
          </p>
          <p className="mt-2.5 text-sm text-zinc-300 line-clamp-3 leading-relaxed">
            {game.description}
          </p>
        </div>

        {/* Highlights preview */}
        <div className="space-y-1.5 pt-3 border-t border-zinc-800">
          <div className="text-[10px] font-black font-['JetBrains_Mono',monospace] text-zinc-400 uppercase tracking-widest">KEY HIGHLIGHTS</div>
          <ul className="space-y-1">
            {game.highlights.slice(0, 3).map((item, i) => (
              <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                <span className="text-[#3b82f6] font-black text-sm leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform & Specs Info */}
        <div className="pt-2 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800 font-mono">
          <div className="flex items-center gap-2">
            <Tablet className="w-3.5 h-3.5 text-zinc-400" />
            <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
            <span className="uppercase text-[11px]">FIRE OS / ANDROID</span>
          </div>
          <span className="font-bold text-white uppercase text-[11px]">{game.price}</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2">
          {/* Main Direct Amazon Link */}
          <a
            id={`game-amazon-link-${game.id}`}
            href={game.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-black font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider bg-[#f59e0b] hover:bg-[#d97706] text-black shadow-md shadow-amber-500/20 transition-all hover:scale-101 active:scale-98"
          >
            <span>GET ON AMAZON</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Details modal trigger */}
          <button
            id={`game-details-btn-${game.id}`}
            onClick={() => onOpenDetails(game)}
            className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-lg text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all cursor-pointer"
            title="View Full Game Overview"
          >
            <Info className="w-3.5 h-3.5 text-[#60a5fa]" />
            <span>DETAILS</span>
          </button>

          {/* Copy Amazon link */}
          <button
            id={`game-copy-link-btn-${game.id}`}
            onClick={handleCopyLink}
            className="flex items-center justify-center p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white border border-zinc-700 transition-all cursor-pointer"
            title="Copy Amazon Store Link"
            aria-label="Copy Amazon Store Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
