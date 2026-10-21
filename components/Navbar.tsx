"use client";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0f141e]/90 backdrop-blur-md border-b border-slate-800">
      <div className="flex items-center gap-2">
        <Image 
          src="/xphere-logo.png" 
          alt="Xphere Logo" 
          width={32} 
          height={32} 
          className="object-contain"
        />
        <span className="text-xl font-semibold text-white tracking-wide ml-1">XPHERE</span>
        <span className="text-sm text-blue-400 ml-1">Nigeria</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="#program" className="hover:text-white transition-colors">Program</Link>
        <Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link>
        <Link href="#tour" className="hover:text-white transition-colors">Campus Tour</Link>
        <Link href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
      </div>
      <Link href="#waitlist" className="hidden sm:inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
       Join the Cohort &rarr;
      </Link>
    </nav>
  );
}


