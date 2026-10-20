import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import ProgramPhases from "@/components/ProgramPhases";
import CampusTour from "@/components/CampusTour";
import Workflow from "@/components/Workflow";
import Resources from "@/components/Resources";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f141e] text-slate-300 font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <FeaturesBar />
      <ProgramPhases />
      <CampusTour />
      <Workflow />
      <Resources />
      <FooterCTA />
      <Footer />
    </main>
  );
}
