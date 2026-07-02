<section
  id="home"
  className="relative h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/hero-bg.png')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/25"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex h-full items-center justify-center">
    <div className="text-center text-white px-6 max-w-4xl">

      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl">
        Building the{" "}
        <span className="text-yellow-400">Future</span>
      </h1>

      <p className="mt-6 text-2xl font-semibold drop-shadow-lg">
        Crossway Infra Projects Pvt. Ltd.
      </p>

      <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-8 drop-shadow-lg">
        Delivering quality construction, infrastructure development,
        and engineering solutions across India.
      </p>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold transition duration-300 shadow-xl"
      >
        Contact Us →
      </a>

    </div>
  </div>
</section>