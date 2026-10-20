import Image from "next/image";
import Link from "next/link";


export default function Resources() {
  const cards = [
    { 
      title: "Protocol Updates", 
      desc: "Latest network and ecosystem updates.", 
      img: "/resource-updates.jpg", 
      link: "https://x-phere.com" 
    },
    { 
      title: "Developer Guides", 
      desc: "Step-by-step tutorials and technical docs.", 
      img: "/resource-guides.jpg", 
      link: "https://docs.x-phere.com/" 
    },
    { 
      title: "Grant Opportunities", 
      desc: "Funding for builders and innovators.", 
      img: "/resource-grants.jpg", 
      link: "https://x-phere.com/grant.html" 
    },
    { 
      title: "Community Events", 
      desc: "Workshops, hackathons and global meetups.", 
      img: "/resource-events.jpg", 
      link: "https://x.com/XPHERE_Official" 
    },
  ];


  return (
    <section id="ecosystem" className="bg-white text-slate-900 py-20 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/4">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Field Notes</p>
          <h2 className="text-2xl font-bold mb-4">Ecosystem & Developer Resources</h2>
          <p className="text-sm text-slate-600 mb-4">Stay updated with the latest from the XPHERE ecosystem, including developer guides, grant opportunities and community events.</p>
          <Link href="#ecosystem" className="text-blue-600 text-sm font-semibold hover:underline">Explore all resources &rarr;</Link>
        </div>
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-24 bg-slate-200">
                <Image 
                  src={card.img} 
                  alt={card.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="text-sm font-bold mb-1">{card.title}</h4>
                <p className="text-xs text-slate-600 mb-3">{card.desc}</p>
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-blue-600 font-semibold hover:underline mt-auto"
                >
                  Read more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


