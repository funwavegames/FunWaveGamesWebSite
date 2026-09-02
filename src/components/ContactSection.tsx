import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Copy, HelpCircle, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/games';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState('Game Feedback / Suggestion');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('funwaveg@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${topic}] Fun Wave Games Inquiry`);
    const body = encodeURIComponent(
      `Hello Fun Wave Games,\n\nName: ${senderName || 'Anonymous Player'}\nTopic: ${topic}\n\nMessage:\n${message}\n\nSent from Fun Wave Games Website`
    );
    window.location.href = `mailto:funwaveg@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact-developer-section" className="py-16 sm:py-24 border-t border-zinc-800/80 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-widest bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/30 mb-3">
            <Mail className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span>PLAYER SUPPORT & INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">
            CONTACT FUN WAVE GAMES
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base font-normal">
            Have questions about one of our Amazon Appstore titles, need assistance, or want to submit feedback? 
            We would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#121217] border border-zinc-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">DIRECT EMAIL CHANNEL</h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">
                  MESSAGES ARE DELIVERED DIRECTLY TO THE DEVELOPER.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800 space-y-3 font-mono">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">DEVELOPER INBOX</div>
                <div className="text-base font-black text-[#60a5fa] select-all">
                  funwaveg@gmail.com
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL ADDRESS'}</span>
                </button>
              </div>

              <div className="space-y-4 text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-['JetBrains_Mono',monospace] uppercase text-[11px]">Player Suggestions</strong>
                    <span className="text-zinc-400">Ideas for new levels, monster trucks, or puzzle game modes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-['JetBrains_Mono',monospace] uppercase text-[11px]">Game Support</strong>
                    <span className="text-zinc-400">Device issues, bug reports, or performance glitches.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-['JetBrains_Mono',monospace] uppercase text-[11px]">Privacy Inquiries</strong>
                    <span className="text-zinc-400">Requests regarding personal data rights under our Privacy Policy.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Message Compose Card */}
          <div className="lg:col-span-7">
            <form
              id="contact-message-form"
              onSubmit={handleSendEmail}
              className="p-6 sm:p-8 rounded-xl bg-[#121217] border border-zinc-800 shadow-xl space-y-4"
            >
              <h3 className="text-lg font-black text-white font-['Outfit'] italic uppercase tracking-tight">
                COMPOSE QUICK MESSAGE
              </h3>

              <div>
                <label className="block text-[10px] font-black font-['JetBrains_Mono',monospace] text-zinc-400 uppercase tracking-widest mb-1.5">
                  TOPIC / INQUIRY CATEGORY
                </label>
                <select
                  id="contact-topic-select"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-lg text-xs font-mono uppercase bg-[#0a0a0c] border border-zinc-800 text-white focus:outline-none focus:border-[#3b82f6]"
                >
                  <option value="Game Feedback / Suggestion">GAME FEEDBACK / SUGGESTION</option>
                  <option value="Technical Support or Bug Report">TECHNICAL SUPPORT OR BUG REPORT</option>
                  <option value="Amazon Appstore Review or Question">AMAZON APPSTORE REVIEW OR QUESTION</option>
                  <option value="Privacy Policy Data Rights Request">PRIVACY POLICY DATA RIGHTS REQUEST</option>
                  <option value="Other Inquiries">OTHER INQUIRIES</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black font-['JetBrains_Mono',monospace] text-zinc-400 uppercase tracking-widest mb-1.5">
                  YOUR NAME / HANDLE (OPTIONAL)
                </label>
                <input
                  id="contact-name-input"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex or Player #42"
                  className="w-full px-3.5 py-3 rounded-lg text-xs font-mono uppercase bg-[#0a0a0c] border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#3b82f6]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black font-['JetBrains_Mono',monospace] text-zinc-400 uppercase tracking-widest mb-1.5">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="contact-message-textarea"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what game you are playing, what level or feature you are referring to, or your question..."
                  className="w-full px-3.5 py-3 rounded-lg text-sm bg-[#0a0a0c] border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#3b82f6]"
                />
              </div>

              <button
                id="contact-submit-email-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-black font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-101 active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>OPEN IN EMAIL CLIENT (FUNWAVEG@GMAIL.COM)</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-xs text-emerald-300 text-center animate-in fade-in font-mono">
                  EMAIL CLIENT OPENED. YOU CAN ALSO WRITE DIRECTLY TO <strong className="text-white">FUNWAVEG@GMAIL.COM</strong>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
