import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-[#0f141e] py-6 px-6 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <Image 
          src="/xphere-logo.png" 
          alt="Xphere Logo" 
          width={24} 
          height={24} 
          className="object-contain"
        />
        <span className="font-semibold text-white ml-1">XPHERE</span>
        <span className="text-blue-400">Nigeria</span>
      </div>
      <div className="flex gap-6">
        <a href="https://x-phere.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">x-phere.com</a>
        <a href="https://docs.x-phere.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">docs.x-phere.com</a>
        <a href="https://github.com/XPHERE" target="_blank" rel="noopener noreferrer" className="hover:text-white">XPHERE GitHub</a>
        <a href="https://xpscan.io" target="_blank" rel="noopener noreferrer" className="hover:text-white">XPScan</a>
      </div>
      <div>Xperience Beyond Universe</div>
    </footer>
  );
}


