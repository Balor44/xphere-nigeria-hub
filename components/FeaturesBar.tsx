export default function FeaturesBar() {
  return (
    <div id="program" className="border-y border-slate-800 bg-[#0d1117] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
        {/* ... (keep existing feature bar code inside) ... */}
        <div className="flex items-center gap-4 md:px-6 first:px-0">
          <div className="text-blue-500 text-2xl">⚙️</div>
          <div>
            <h3 className="text-white font-semibold">EVM-compatible</h3>
            <p className="text-sm text-slate-400">100% Ethereum compatible</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
          <div className="text-blue-500 text-2xl">🔗</div>
          <div>
            <h3 className="text-white font-semibold">Mainnet + Testnet</h3>
            <p className="text-sm text-slate-400">Live network and developer testnet</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
          <div className="text-blue-500 text-2xl">&lt;/&gt;</div>
          <div>
            <h3 className="text-white font-semibold">Smart contracts</h3>
            <p className="text-sm text-slate-400">Build and deploy with ease</p>
          </div>
        </div>
        <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
          <div className="text-blue-500 text-2xl">💰</div>
          <div>
            <h3 className="text-white font-semibold">Build toward grants</h3>
            <p className="text-sm text-slate-400">Access ecosystem funding opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}


