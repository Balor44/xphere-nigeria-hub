"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function FooterCTA() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    university: "",
    focus: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");


    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      const data = await res.json();


      if (!res.ok) throw new Error(data.error || "Something went wrong");


      setStatus("success");
      setMessage(data.message);
      setFormData({ full_name: "", email: "", university: "", focus: "" }); // Clear form
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message);
    }
  };


  return (
    <section id="waitlist" className="bg-[#161b22] py-16 px-6 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Founder Profile */}
        <div className="bg-[#0f141e] border border-slate-800 rounded-xl p-8 flex flex-col sm:flex-row gap-6 items-center">
          <div className="flex-1">
            <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-2">Founder Profile</p>
            <h3 className="text-xl text-white font-bold mb-3">Building the Next Generation</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              As a blockchain ecosystem builder and developer advocate, I'm committed to creating opportunities for Nigerian talent through education, mentorship and real-world experience on XPHERE.
            </p>
            <Link href="/about" className="inline-block text-xs border border-slate-600 text-white px-4 py-2 rounded hover:bg-slate-800 transition-colors text-center">
              Learn more about me &rarr;
            </Link>
          </div>
          <div className="relative w-32 h-32 bg-slate-800 rounded-xl overflow-hidden shrink-0">
             <Image 
               src="/founder-profile.jpg" 
               alt="Nwafor Obinna Balor" 
               fill 
               sizes="128px"
               className="object-cover"
             />
          </div>
        </div>


        {/* Form CTA */}
        <div className="bg-[#0f141e] border border-slate-800 rounded-xl p-8">
          <h3 className="text-xl text-white font-bold mb-2">Join the Cohort</h3>
          <p className="text-xs text-slate-400 mb-6">
            Be part of the XPHERE Nigeria Developer Initiative. Register your interest to get updates on workshops, events and the next steps.
          </p>
          
          {status === "success" ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded p-4 text-green-400 text-sm">
              {message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase text-slate-500 mb-1">Full Name *</label>
                  <input required type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Your name" className="w-full bg-[#161b22] border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-slate-500 mb-1">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-[#161b22] border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase text-slate-500 mb-1">University / Hub</label>
                  <select name="university" value={formData.university} onChange={handleChange} className="w-full bg-[#161b22] border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none">
                    <option value="">Select your university or hub</option>
                    <option value="UNN">UNN</option>
                    <option value="UNEC">UNEC</option>
                    <option value="GOU">GOU</option>
                    <option value="UniAbuja">UniAbuja</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase text-slate-500 mb-1">Technical Focus</label>
                  <select name="focus" value={formData.focus} onChange={handleChange} className="w-full bg-[#161b22] border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none">
                    <option value="">Select your focus</option>
                    <option value="Smart Contracts">Smart Contracts</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Design/UIUX">Design / UIUX</option>
                  </select>
                </div>
              </div>
              
              {status === "error" && <p className="text-red-400 text-xs">{message}</p>}
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full sm:w-auto mt-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-8 py-2 rounded text-sm font-medium transition-colors float-right"
              >
                {status === "loading" ? "Submitting..." : "Register Interest \u2192"}
              </button>
            </form>
          )}
        </div>


      </div>
    </section>
  );
}


