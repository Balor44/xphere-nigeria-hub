import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
          Xphere Nigeria / Developer Initiative
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          From first deployment<br />to real-world <span className="text-blue-500">utility.</span>
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
          We're taking Nigerian university developers from EVM fundamentals to shipping real projects on XPHERE — an EVM-compatible Layer 1 blockchain with a live mainnet and open developer testnet.
        </p>
        <div className="flex gap-4">
          <Link href="#program" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Explore the program &rarr;
          </Link>
          <Link href="/plan" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md font-medium border border-slate-700 transition-colors">
            Read the execution plan
          </Link>
        </div>
      </div>
      
      <div className="relative w-full max-w-md mx-auto aspect-video md:aspect-[4/3] bg-[#161b22] rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
        <Image 
          src="/hero-graphic.png" 
          alt="Xphere Developer Environment" 
          fill 
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain p-4"
          priority
        />
      </div>
    </section>
  );
}


