import Image from "next/image";


export default function CampusTour() {
  const stops = [
    { name: "University of Nigeria, Nsukka (UNN)", target: "100+ learners", img: "tour-unn.jpg" },
    { name: "University of Nigeria, Enugu Campus (UNEC)", target: "100+ learners", img: "tour-unec.jpg" },
    { name: "Godfrey Okoye University", target: "100+ learners", img: "tour-gou.jpg" },
    { name: "University of Abuja", target: "100+ learners", img: "tour-uniabuja.jpg" },
  ];


  return (
    <section id="tour" className="bg-slate-50 py-20 px-6 border-b border-slate-200 scroll-mt-20">
      {/* ... (keep existing CampusTour content) ... */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/4">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Campus Tour</p>
          <h2 className="text-3xl text-slate-900 font-bold mb-4">Proposed Stops</h2>
          <p className="text-slate-600">Four leading Nigerian universities.<br/>One unified program.</p>
        </div>
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stops.map((stop, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <div className="relative h-32 bg-slate-200">
                <Image 
                  src={`/${stop.img}`} 
                  alt={stop.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 uppercase">Proposed stop</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{stop.name}</h4>
                <p className="text-xs text-blue-600">Target: {stop.target}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


