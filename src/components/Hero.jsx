import heroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <section
      id="home"
      className="px-6 pt-14 pb-0 flex flex-col items-center text-center overflow-visible relative"
      style={{ backgroundColor: "#570C92" }}
    >
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{
          height: "140px",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      <h1
        className="text-4xl md:text-6xl 2xl:text-[102px]! 2xl:leading-30! font-extrabold uppercase text-[#DBE21C] leading-tight drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] relative z-10"
        style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900 }}
      >
        PLAY GAMES.
        <br />
        WIN BIG.
      </h1>

      <p
        className="text-[#C8C8C8] mt-5 max-w-xl 2xl:max-w-189.75! text-sm md:text-base 2xl:text-[24px]! 2xl:leading-[32.8px]! relative z-10"
        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}
      >
        Play exciting games and win cash! The more you play, the more rewards
        you'll unlock — get ready for non-stop fun and big wins.
      </p>

      <button
        className="mt-8 px-10 py-4 rounded-full text-[#4C1D95] font-bold text-sm md:text-base uppercase tracking-wide hover:brightness-95 transition relative z-10 md:hidden"
        style={{
          backgroundColor: "#DBE21C",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        Download Now
      </button>

      <img
        src={heroImage}
        alt="Play games and win rewards"
        className="mt-8 w-full max-w-2xl 2xl:max-w-267.5! h-auto 2xl:mb-[-131px]! relative z-10"
      />
    </section>
  );
}

export default Hero;