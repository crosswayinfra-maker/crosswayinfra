import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/companylogo.png"
            alt="Crossway Infra"
            width={55}
            height={55}
          />
          <div>
            <h1 className="font-bold text-xl text-blue-900">Crossway Infra</h1>
            <p className="text-xs text-gray-500">Projects Pvt. Ltd.</p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}