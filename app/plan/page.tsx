import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function ExecutionPlan() {
  return (
    <main className="min-h-screen bg-[#0f141e] text-slate-300 font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="text-blue-500 text-sm font-semibold hover:underline mb-8 inline-block">
          &larr; Back to Initiative
        </Link>
        
        <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">Grant Proposal</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
            Xphere Nigeria Developer Onboarding & Campus Tour: Phase 1
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 border-b border-slate-800 pb-8 mb-8 text-sm">
            <div>
              <span className="block text-slate-500 uppercase tracking-wider text-[10px] mb-1">Project Lead</span>
              <span className="text-white font-semibold">Nwafor Obinna Balor</span>
            </div>
            <div>
              <span className="block text-slate-500 uppercase tracking-wider text-[10px] mb-1">Target Audience</span>
              <span className="text-white font-semibold">Web3 developers, engineering students, and tech hubs</span>
            </div>
            <div>
              <span className="block text-slate-500 uppercase tracking-wider text-[10px] mb-1">Budget Request</span>
              <span className="text-white font-semibold">$6,500 USD (Payable in XP)</span>
            </div>
          </div>


          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Project Overview</h2>
              <p className="text-slate-400 leading-relaxed">
                While Xphere 2.0 boasts high TPS and EVM compatibility through its dual-chain architecture, building early grassroots developer communities in emerging markets is essential for capturing the next wave of Web3 adoption. This proposal seeks funding for a 4-part campus and tech hub tour in Nigeria. The initiative is designed to educate student engineers on Xphere's PoW and PBFT infrastructure, onboard them into the ecosystem, and establish a foundational developer community ahead of a dedicated hackathon and permanent physical hub.
              </p>
            </section>


            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Target Locations & Execution Plan</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                The tour will target regions with established, high-density engineering and tech communities where I have a proven track record of organizing large-scale Web3 education series:
              </p>
              <ul className="list-disc pl-5 text-slate-400 space-y-2">
                <li><strong className="text-white">Tour Stop 1:</strong> University of Nigeria, Nsukka (UNN)</li>
                <li><strong className="text-white">Tour Stop 2:</strong> University of Nigeria, Enugu Campus (UNEC)</li>
                <li><strong className="text-white">Tour Stop 3:</strong> Godfrey Okoye University (GOU)</li>
                <li><strong className="text-white">Tour Stop 4:</strong> University of Abuja (UniAbuja)</li>
              </ul>
            </section>


            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Event Curriculum</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Each stop will feature a 3-hour intensive session broken into the following modules:
              </p>
              <ul className="list-disc pl-5 text-slate-400 space-y-2">
                <li><strong className="text-white">Module 1:</strong> Introduction to Xphere Architecture (Focus on the xpHash Proof Chain + PBFT Main Chain).</li>
                <li><strong className="text-white">Module 2:</strong> Wallet Setup & Network Configuration (Connecting MetaMask to Xphere Mainnet via Ankr RPC).</li>
                <li><strong className="text-white">Module 3:</strong> EVM Deployment Workshop (Live coding session deploying a basic Solidity smart contract on Xphere testnet).</li>
                <li><strong className="text-white">Module 4:</strong> Ideation (Exploring B2G and Real-World Asset applications specific to the African market).</li>
              </ul>
            </section>


            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Key Performance Indicators (KPIs)</h2>
              <ul className="list-disc pl-5 text-slate-400 space-y-2">
                <li><strong className="text-white">400+</strong> total attendees across all four tour stops.</li>
                <li><strong className="text-white">300+</strong> new active wallets generated and configured for the Xphere network.</li>
                <li><strong className="text-white">50+</strong> developers successfully deploying testnet contracts and joining the official Xphere Nigeria developer group.</li>
              </ul>
            </section>


            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Budget Breakdown</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">A. Venue Rentals & Technical Infrastructure: $1,200</h3>
                  <ul className="list-disc pl-5 text-slate-400 space-y-1 text-sm">
                    <li>Securing 100+ capacity lecture halls across the 4 universities.</li>
                    <li>Dedicated portable Wi-Fi routers, projector rentals, and backup power generators.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">B. Food & Beverage (Attendee Retention): $1,600</h3>
                  <ul className="list-disc pl-5 text-slate-400 space-y-1 text-sm">
                    <li>Light meals, snacks, and bottled water for an estimated 100 attendees per event ($4 per head).</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">C. Branding, Merchandise & Marketing: $1,400</h3>
                  <ul className="list-disc pl-5 text-slate-400 space-y-1 text-sm">
                    <li>150 high-quality Xphere-branded T-shirts for early registrants.</li>
                    <li>Pull-up banners, directional signage, and printed developer cheat sheets.</li>
                    <li>Targeted digital marketing to drive registration.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">D. Team Logistics & Travel: $1,800</h3>
                  <ul className="list-disc pl-5 text-slate-400 space-y-1 text-sm">
                    <li>Domestic flights and interstate ground transport for the core organizing team.</li>
                    <li>2-3 nights hotel stay per event location for the 3-person technical team.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">E. Contingency & Buffer: $500</h3>
                  <ul className="list-disc pl-5 text-slate-400 space-y-1 text-sm">
                    <li>Unforeseen logistical hurdles and on-the-day technical emergency purchases.</li>
                  </ul>
                </div>
              </div>
            </section>


            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. The Long-Term Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                This tour acts as Phase 1 of a broader ecosystem expansion. The developers onboarded during this tour will immediately be funneled into Phase 2: a dedicated Xphere Testnet Hackathon. Finally, using the traction and data gathered from Phases 1 and 2, we will establish Phase 3: a permanent 60-seater, solar-powered Digital Economy Hub and Web3 co-working space located inside the University of Abuja, serving as the physical anchor for Xphere's B2G and developer pipeline in Africa.
              </p>
            </section>


          </div>
        </div>
      </div>


      <Footer />
    </main>
  );
}


