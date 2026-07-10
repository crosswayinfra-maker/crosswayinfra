import Navbar from "./components/Navbar";
import About from "./components/about";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section
          id="home"
          className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex h-full items-center">
<div className="max-w-7xl mx-auto w-full px-6">              <div className="max-w-2xl text-left text-white">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
                  Building the <span className="text-yellow-400">Future</span>
                </h1>

                <p className="mt-6 text-xl text-gray-200">
                  Crossway Infra Projects Pvt. Ltd.
                </p>

                <p className="mt-4 text-lg text-gray-300">
                  Delivering quality construction, infrastructure development,
                  and engineering solutions across India.
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg"
                >
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Contact />
        <WhatsAppButton />
      </main>
    </>
  );
}