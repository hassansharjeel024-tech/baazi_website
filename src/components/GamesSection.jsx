import { ArrowLeft, ArrowRight } from "lucide-react";
import gamesImage from "../assets/games-image.png";

function GamesSection() {
  return (
    <section
      id="games"
      className="px-3 sm:px-6 py-16 text-center overflow-hidden relative"
      style={{ backgroundColor: "#DBE21C" }}
    >
      <h2
        className="uppercase text-gray-900"
        style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(24px, 4vw, 48px)",
          lineHeight: "1.2",
          letterSpacing: "0px",
        }}
      >
        PLAY 100+ GAMES & EARN EVERY SESSION
      </h2>

      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-10 max-w-6xl mx-auto px-2">
        <button
          className="shrink-0 flex items-center justify-center hover:opacity-90 transition-opacity"
          style={{
            width: "40px",
            height: "60px",
            backgroundColor: "#091E46",
            border: "2px solid #D0D0D0",
            borderRadius: "0px",
          }}
          aria-label="Previous game"
        >
          <ArrowLeft className="w-4 h-4" style={{ color: "#D7E4ED" }} />
        </button>

        <img
  src={gamesImage}
  alt="Play 100+ games"
  className="w-full h-auto"
  style={{ maxWidth: "900px" }}
/>

        <button
          className="shrink-0 flex items-center justify-center hover:opacity-90 transition-opacity"
          style={{
            width: "40px",
            height: "60px",
            backgroundColor: "#091E46",
            border: "2px solid #D0D0D0",
            borderRadius: "0px",
          }}
          aria-label="Next game"
        >
          <ArrowRight className="w-4 h-4" style={{ color: "#D7E4ED" }} />
        </button>
      </div>

      <button
        className="mt-10 text-white transition-colors hover:opacity-90"
        style={{
          width: "240px",
          height: "68px",
          borderRadius: "112px",
          backgroundColor: "#091E46",
          border: "2px solid #091E46",
          fontWeight: 700,
        }}
      >
        ALL GAMES
      </button>
    </section>
  );
}

export default GamesSection;