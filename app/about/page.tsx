import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";


export default function About() {
  return (
    <main className="min-h-screen bg-[#0f141e] text-slate-300 font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="text-blue-500 text-sm font-semibold hover:underline mb-8 inline-block">
          &larr; Back to Initiative
        </Link>
        
        <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-12 items-start">
          
          <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center md:items-start">
            <div className="relative w-48 md:w-full aspect-square bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
               <Image 
                 src="/founder-profile.jpg" 
                 alt="Nwafor Obinna Balor" 
                 fill 
                 sizes="(max-width: 768px) 100vw, 33vw"
                 className="object-cover"
                 priority
               />
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px] mb-1">Role</span>
                <span className="text-white text-sm font-semibold">Project Lead & Developer Advocate</span>
              </div>
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px] mb-1">Education</span>
                <span className="text-white text-sm font-semibold">B.Eng. Electrical Engineering, UNN</span>
              </div>
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px] mb-1">Tech Stack</span>
                <span className="text-white text-sm font-semibold">Next.js, TypeScript, Supabase, Solidity</span>
              </div>
            </div>
          </div>


          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2">
              Nwafor Obinna Balor
            </h1>
            <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-8">
              Blockchain Educator & Software Engineer
            </p>


            <div className="space-y-6 text-slate-400 leading-relaxed text-sm md:text-base">
              <p>
                I am a full-stack engineer and Web3 ecosystem builder dedicated to bridging the gap between emerging market talent and decentralized infrastructure. With a background in Electrical Engineering from the University of Nigeria, Nsukka, I specialize in architecting accessible, high-utility decentralized applications and fostering grassroots developer communities.
              </p>
              <p>
                Since 2023, I have been actively leading Layer-1 ecosystem expansion across Africa. I have organized and executed large-scale developer education series across major Nigerian institutions—including UNN, UNEC, Godfrey Okoye University, and the University of Abuja—successfully onboarding hundreds of students into the Web3 space.
              </p>
              <p>
                On the technical front, my focus is on building practical, real-world utility. I develop mobile-first, EVM-compatible infrastructure and stablecoin payment bots using Next.js, React Native, and Supabase. 
              </p>
              <p>
                My current long-term vision with the Xphere Nigeria Developer Initiative is to move beyond temporary events by establishing a permanent, solar-powered 60-seater Digital Economy Hub—a physical B2G incubator where the next generation of African engineers can build enterprise-grade dApps on the Xphere network.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800 flex gap-4">
              <a href="https://x.com/0x_ObinnaNwafor" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                Connect on X &rarr;
              </a>
            </div>
          </div>


        </div>
      </div>


      <Footer />
    </main>
  );
}


