import { ChevronLeft, ChevronRight } from "lucide-react";
import gamesImage from "../assets/games-image.png";

function GamesSection() {
  return (
    <section
      id="games"
      className="px-6 py-16 text-center overflow-hidden relative"
      style={{ backgroundColor: "#DBE21C" }}
    >
      <h2 className="section-heading text-2xl md:text-3xl text-gray-900">
        PLAY 100+ GAMES & EARN EVERY SESSION
      </h2>

      <div className="relative mt-10 max-w-4xl mx-auto px-4 md:px-12">
        <button
          className="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#1C0E2B" }}
          aria-label="Previous game"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>

        <img
          src={gamesImage}
          alt="Play 100+ games"
          className="w-full h-auto"
        />

        <button
          className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#1C0E2B" }}
          aria-label="Next game"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>

      <button
        className="mt-10 text-white font-bold px-8 py-3 rounded-full transition-colors hover:opacity-90"
        style={{ backgroundColor: "#1C0E2B" }}
      >
        ALL GAMES
      </button>
    </section>
  );
}

export default GamesSection;