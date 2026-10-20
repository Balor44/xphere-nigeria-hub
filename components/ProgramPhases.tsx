export default function ProgramPhases() {
  return (
    <section id="roadmap" className="bg-white text-slate-900 py-20 px-6 scroll-mt-20">
      {/* ... (keep existing ProgramPhases content) ... */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">The Program</p>
          <h2 className="text-3xl font-bold mb-4">Three Phases. One Vision.</h2>
          <p className="text-slate-600">A structured journey from education to execution, designed to equip Nigerian developers with the skills, tools, and support to build on XPHERE.</p>
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-t-2 border-blue-500 pt-6">
            <h3 className="text-blue-600 font-bold text-xl mb-2">01</h3>
            <h4 className="text-lg font-bold mb-4">Campus Workshops</h4>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>Wallet onboarding</li>
              <li>RPC / network setup</li>
              <li>First contract deployment</li>
            </ul>
          </div>
          <div className="border-t-2 border-blue-500 pt-6">
            <h3 className="text-blue-600 font-bold text-xl mb-2">02</h3>
            <h4 className="text-lg font-bold mb-4">Testnet Build Sprint</h4>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>Teams prototype payment tools</li>
              <li>Stablecoin utilities</li>
              <li>RWA concepts</li>
            </ul>
          </div>
          <div className="border-t-2 border-blue-500 pt-6">
            <h3 className="text-blue-600 font-bold text-xl mb-2">03</h3>
            <h4 className="text-lg font-bold mb-4">Digital Economy Hub</h4>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>Proposed 60-seat developer incubator</li>
              <li>University of Abuja</li>
              <li>Long-term ecosystem growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


