import React, { useState } from 'react';
import { Shield, Clock, Mail, Copy, Check, Printer, Search, ChevronRight, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/games';

export const PrivacyPolicy: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('funwaveg@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: 'section-1', num: '1', title: 'Information We Collect' },
    { id: 'section-2', num: '2', title: 'How We Use Your Information' },
    { id: 'section-3', num: '3', title: 'Advertising and Third-Party Partners' },
    { id: 'section-4', num: '4', title: 'Data Sharing and Disclosure' },
    { id: 'section-5', num: '5', title: 'Data Security' },
    { id: 'section-6', num: '6', title: 'Children’s Privacy' },
    { id: 'section-7', num: '7', title: 'International Data Transfers' },
    { id: 'section-8', num: '8', title: 'Your Rights and Choices' },
    { id: 'section-9', num: '9', title: 'Data Retention' },
    { id: 'section-10', num: '10', title: 'Updates to This Privacy Policy' },
    { id: 'section-11', num: '11', title: 'Contact Us' },
  ];

  return (
    <div id="privacy-policy-view" className="py-12 sm:py-20 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Policy Header Banner */}
        <div className="rounded-xl p-6 sm:p-10 bg-[#121217] border border-zinc-800 shadow-xl mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-widest bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/30">
              <Shield className="w-3.5 h-3.5" />
              <span>OFFICIAL PRIVACY POLICY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] italic uppercase tracking-tight">
              PRIVACY POLICY FOR FUN WAVE GAMES
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 pt-1 font-mono">
              <div className="flex items-center gap-1.5 bg-[#0a0a0c] px-3.5 py-2 rounded-lg border border-zinc-800">
                <Clock className="w-4 h-4 text-[#3b82f6]" />
                <span>LAST UPDATED: <strong className="text-white">01/10/2026</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0a0a0c] px-3.5 py-2 rounded-lg border border-zinc-800">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>CONTACT: <strong className="text-white">FUNWAVEG@GMAIL.COM</strong></span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-2 font-normal">
              Fun Wave Games is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your information when you interact with our games available on Amazon, iOS, Android, and other platforms. By using our Services, you agree to the terms outlined in this Privacy Policy.
            </p>

            {/* Quick Action Utilities */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="copy-support-email-btn"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-black font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'EMAIL COPIED' : 'COPY CONTACT EMAIL'}</span>
              </button>

              <button
                id="print-privacy-btn"
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold font-['JetBrains_Mono',monospace] uppercase tracking-wider bg-[#0a0a0c] hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / SAVE POLICY</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Layout with Table of Contents */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 sticky top-24 space-y-4 font-mono">
            <div className="p-5 rounded-xl bg-[#121217] border border-zinc-800 shadow-lg">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-300 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#3b82f6]" />
                <span>POLICY NAVIGATION</span>
              </h3>

              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    id={`toc-link-${sec.id}`}
                    onClick={() => scrollToSection(sec.id)}
                    className="w-full flex items-center justify-between p-2.5 rounded-md text-left text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors group cursor-pointer"
                  >
                    <span className="truncate uppercase text-[11px]">
                      <span className="font-bold text-zinc-500 group-hover:text-[#60a5fa] mr-1.5">{sec.num}.</span>
                      {sec.title}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3b82f6] shrink-0" />
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800 text-[10px] text-zinc-500 uppercase">
                APPLICABLE TO ALL FUN WAVE GAMES RELEASES ON AMAZON APPSTORE, ANDROID, IOS AND AFFILIATED PLATFORMS.
              </div>
            </div>

            {/* Quick Contact Widget */}
            <div className="p-5 rounded-xl bg-[#121217] border border-zinc-800 text-xs text-zinc-400 space-y-2 font-mono">
              <span className="font-bold text-white uppercase block text-[11px]">DIRECT PRIVACY INQUIRIES</span>
              <p className="text-[11px] font-sans text-zinc-400">For data rights requests or inquiries under GDPR, CCPA, or COPPA, contact:</p>
              <a
                href="mailto:funwaveg@gmail.com"
                className="inline-flex items-center gap-1 text-[#60a5fa] hover:underline font-bold"
              >
                <span>funwaveg@gmail.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </aside>

          {/* Main Privacy Policy Text Content */}
          <main className="lg:col-span-8 space-y-8">
            <div className="p-6 sm:p-10 rounded-xl bg-[#121217] border border-zinc-800 shadow-xl space-y-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
              
              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">1.</span>
                  <span>INFORMATION WE COLLECT</span>
                </h2>
                <p className="text-zinc-300">
                  We collect different types of information to operate our Services effectively and provide a better user experience.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800">
                    <h3 className="font-black text-white text-xs font-['JetBrains_Mono',monospace] uppercase tracking-wider">PERSONAL INFORMATION</h3>
                    <p className="mt-1 text-zinc-400 text-sm">
                      We may collect personal information such as your name or email address if you voluntarily provide it, for example when contacting customer support.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800">
                    <h3 className="font-black text-white text-xs font-['JetBrains_Mono',monospace] uppercase tracking-wider">DEVICE INFORMATION</h3>
                    <p className="mt-1 text-zinc-400 text-sm">
                      We may collect information such as device model, operating system, IP address, device identifiers, and related technical data.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800">
                    <h3 className="font-black text-white text-xs font-['JetBrains_Mono',monospace] uppercase tracking-wider">USAGE INFORMATION</h3>
                    <p className="mt-1 text-zinc-400 text-sm">
                      This includes information about how you interact with our games, such as gameplay progress, scores, preferences, and in-game activity.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800">
                    <h3 className="font-black text-white text-xs font-['JetBrains_Mono',monospace] uppercase tracking-wider">ADVERTISING INFORMATION</h3>
                    <p className="mt-1 text-zinc-400 text-sm">
                      If our games display ads, we may collect ad interaction data to help improve ad relevance and performance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">2.</span>
                  <span>HOW WE USE YOUR INFORMATION</span>
                </h2>
                <p>We use the collected information to:</p>
                <ul className="space-y-2 pt-1">
                  {[
                    'Operate, maintain, and improve our games and Services',
                    'Provide customer support and respond to inquiries',
                    'Analyze usage trends and enhance user experience',
                    'Ensure security and prevent fraud or misuse',
                    'Comply with legal obligations',
                    'Display relevant advertisements, including promotions for our own games',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="text-[#3b82f6] font-bold mt-0.5 font-mono">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">3.</span>
                  <span>ADVERTISING AND THIRD-PARTY PARTNERS</span>
                </h2>
                <p>
                  Some of our games include advertisements provided by third-party advertising partners. These partners may collect limited device information to show ads relevant to users.
                </p>

                <div className="pt-2 space-y-3">
                  <h3 className="font-black font-['JetBrains_Mono',monospace] text-white text-xs uppercase tracking-wider">TYPES OF ADS IN OUR GAMES</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800 space-y-1">
                      <h4 className="font-bold text-[#60a5fa] text-xs font-mono uppercase">THIRD-PARTY ADS</h4>
                      <p className="text-xs text-zinc-400">
                        Ads served by partners such as Google AdMob, Unity Ads, or similar networks.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800 space-y-1">
                      <h4 className="font-bold text-[#60a5fa] text-xs font-mono uppercase">STUDIO PROMOTIONS</h4>
                      <p className="text-xs text-zinc-400">
                        Ads promoting our own games and services within Fun Wave Games ecosystem.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800 space-y-1 mt-3">
                    <h4 className="font-bold text-white text-xs font-mono uppercase">OPTING OUT OF INTEREST-BASED ADS</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      You can manage or limit interest-based ads through your device settings or, where available, in-game settings. Opting out may reduce ad personalization but will not remove ads completely.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">4.</span>
                  <span>DATA SHARING AND DISCLOSURE</span>
                </h2>
                <p>We may share your information in the following cases:</p>
                <ul className="space-y-2 pt-1">
                  {[
                    'With trusted service providers who help operate our Services',
                    'When required by law or legal process',
                    'In case of a merger, acquisition, or business transfer',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="text-[#3b82f6] font-bold mt-0.5 font-mono">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">5.</span>
                  <span>DATA SECURITY</span>
                </h2>
                <p>
                  We use reasonable security measures to protect your information. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">6.</span>
                  <span>CHILDREN’S PRIVACY</span>
                </h2>
                <p>
                  Our games are not intended for children under the age of 13 without parental consent. We do not knowingly collect personal information from children under 13. If such information is discovered, it will be deleted promptly.
                </p>
                <p className="text-amber-400 font-mono text-xs uppercase">
                  IF YOU BELIEVE A CHILD UNDER 13 HAS PROVIDED US WITH PERSONAL DATA, PLEASE CONTACT US.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">7.</span>
                  <span>INTERNATIONAL DATA TRANSFERS</span>
                </h2>
                <p>
                  Our Services are available worldwide. By using our games, you consent to the transfer and processing of your information in countries outside your residence.
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">8.</span>
                  <span>YOUR RIGHTS AND CHOICES</span>
                </h2>
                <p>
                  Depending on your location, you may have rights regarding your personal data, including access, correction, deletion, portability, and restriction of processing.
                </p>
                <p>
                  To exercise these rights, please contact us. Identity verification may be required.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">9.</span>
                  <span>DATA RETENTION</span>
                </h2>
                <p>
                  We retain personal data only as long as necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, and resolve disputes.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-28 space-y-3 pb-6 border-b border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">10.</span>
                  <span>UPDATES TO THIS PRIVACY POLICY</span>
                </h2>
                <p>
                  Fun Wave Games may update this Privacy Policy from time to time. Changes will be reflected by updating the “Last Updated” date. We encourage you to review this policy regularly.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] italic uppercase tracking-tight flex items-center gap-2">
                  <span className="text-[#3b82f6]">11.</span>
                  <span>CONTACT US</span>
                </h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy, please contact us:
                </p>
                
                <div className="p-5 rounded-lg bg-[#0a0a0c] border border-zinc-800 space-y-2 font-mono">
                  <div className="text-base font-black text-white font-['Outfit'] italic uppercase">FUN WAVE GAMES</div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="text-zinc-400">EMAIL:</span>
                    <a
                      href="mailto:funwaveg@gmail.com"
                      className="text-[#60a5fa] font-bold hover:underline"
                    >
                      funwaveg@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'COPIED' : 'COPY EMAIL ADDRESS'}</span>
                  </button>
                </div>
              </section>

            </div>
          </main>

        </div>

      </div>
    </div>
  );
};
