import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Copy, Tablet, Smartphone, Sparkles, ShieldCheck } from 'lucide-react';
import { GameItem } from '../types';

interface GameDetailModalProps {
  game: GameItem | null;
  onClose: () => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({ game, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (game) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [game, onClose]);

  if (!game) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(game.amazonUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div
        id="game-detail-modal-card"
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#121217] border border-zinc-700 shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
      >
        {/* Header with Close */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded text-[10px] font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/30">
                {game.category}
              </span>
              <span className="px-2.5 py-1 rounded text-[10px] font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-[#f59e0b]/10 text-[#fbbf24] border border-[#f59e0b]/30">
                {game.price}
              </span>
              <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-300">
                {game.ageRating}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">
              {game.title}
            </h2>
            <p className="text-[#60a5fa] font-mono text-xs uppercase tracking-wider font-bold mt-1">{game.tagline}</p>
          </div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-zinc-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cover Art Banner */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black ring-1 ring-zinc-800">
          <img
            src={game.imageUrl}
            alt={game.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-black font-['JetBrains_Mono',monospace] uppercase tracking-widest text-zinc-400">GAME OVERVIEW</h4>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
            {game.longDescription}
          </p>
        </div>

        {/* Highlights & Features */}
        <div className="space-y-3 p-5 rounded-lg bg-[#0a0a0c] border border-zinc-800">
          <h4 className="text-[11px] font-black font-['JetBrains_Mono',monospace] uppercase tracking-widest text-[#60a5fa] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#3b82f6]" />
            <span>CORE SPECIFICATIONS & HIGHLIGHTS</span>
          </h4>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {game.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200">
                <span className="text-[#3b82f6] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs font-mono">
          <div className="p-3 rounded-lg bg-[#0a0a0c] border border-zinc-800">
            <div className="text-zinc-400 uppercase text-[10px]">Developer</div>
            <div className="font-bold text-white mt-0.5 uppercase text-xs">{game.developer}</div>
          </div>
          <div className="p-3 rounded-lg bg-[#0a0a0c] border border-zinc-800">
            <div className="text-zinc-400 uppercase text-[10px]">Platforms</div>
            <div className="font-bold text-white mt-0.5 uppercase text-xs">{game.platform}</div>
          </div>
          <div className="p-3 rounded-lg bg-[#0a0a0c] border border-zinc-800">
            <div className="text-zinc-400 uppercase text-[10px]">Release Year</div>
            <div className="font-bold text-white mt-0.5 uppercase text-xs">{game.releaseYear}</div>
          </div>
          <div className="p-3 rounded-lg bg-[#0a0a0c] border border-zinc-800">
            <div className="text-zinc-400 uppercase text-[10px]">Target Store</div>
            <div className="font-bold text-[#f59e0b] mt-0.5 uppercase text-xs">Amazon Store</div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center gap-3">
          <a
            id={`modal-amazon-link-${game.id}`}
            href={game.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-black font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider bg-[#f59e0b] hover:bg-[#d97706] text-black shadow-lg shadow-amber-500/25 transition-all hover:scale-101 active:scale-98"
          >
            <span>OPEN ON AMAZON APPSTORE</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>

          <button
            id="modal-copy-link-btn"
            onClick={handleCopyLink}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-lg text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'LINK COPIED!' : 'COPY LINK'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
