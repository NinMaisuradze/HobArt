import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero bg-cover bg-center text-center py-32 px-6 font-poppins text-[#00032c]"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          HobArt - ჰობარტი
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Thank you for popping by — visit my website and explore handmade joy!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-[#b48b18] text-white px-8 py-3 rounded-full font-medium hover:bg-[#9c7815] transition"
            aria-label="Browse HobArt products"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
