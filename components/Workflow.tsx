export default function Workflow() {
  return (
    <section className="bg-[#121822] py-16 px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/4">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">The Xphere Stack</p>
          <h2 className="text-3xl text-white font-bold mb-4">In Practice</h2>
          <p className="text-slate-400">From wallet setup to verified deployment — One unified developer workflow.</p>
        </div>
        <div className="lg:w-3/4 flex flex-col md:flex-row items-center justify-between gap-4 p-8 border border-slate-800 rounded-xl bg-[#0f141e]">
          {[ 
            { id: 1, title: "Wallet Setup", sub: "MetaMask / WalletConnect" },
            { id: 2, title: "Testnet Access", sub: "XPHERE Devnet" },
            { id: 3, title: "Deploy Contract", sub: "Hardhat / Foundry" },
            { id: 4, title: "Verify on Explorer", sub: "XPScan" }
          ].map((step, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 font-bold">
                {step.id}
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">{step.id}. {step.title}</h4>
                <p className="text-xs text-slate-400">{step.sub}</p>
              </div>
              {idx < 3 && <div className="hidden md:block text-slate-600 ml-4">&rarr;</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
