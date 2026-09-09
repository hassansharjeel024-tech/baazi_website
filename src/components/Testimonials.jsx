import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonialPhoto from "../assets/testimonial-photo.png";

const testimonials = [
  {
    name: "Diana Lorenz",
    role: "Verified Player",
    quotes: [
      "I've earned 3 Amazon vouchers this month alone. The daily streak system keeps me coming back every day. Absolutely addictive!",
      "Best play-to-earn app I've tried. The games are actually fun — not just boring click farms. Sky Racer is my favorite!",
    ],
    photo: testimonialPhoto,
  },
  {
    name: "Marcus Chen",
    role: "Verified Player",
    quotes: [
      "Cashed out my first reward within a week of playing. The referral system is amazing — my whole squad plays now.",
      "Solitaire Clash is my go-to during breaks. Quick sessions, real rewards. Can't recommend Bazi enough!",
    ],
    photo: testimonialPhoto,
  },
  {
    name: "Sara Ahmed",
    role: "Verified Player",
    quotes: [
      "The leaderboard keeps me competitive every week. Landed in the top 5 twice and the cash prizes are real.",
      "Customer support is fast and the app never crashes. Bazi is by far the smoothest gaming app I've used.",
    ],
    photo: testimonialPhoto,
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="bg-purple-50 px-6 py-16 text-center">
      <h2 className="section-heading text-2xl md:text-3xl text-purple-900">
        50,000+ PLAYERS LOVE BAZI
      </h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
        We survey all of our clients, the results of which go directly to our
        CEO.
      </p>

      <div className="mt-10 flex items-center justify-center gap-6 max-w-275 mx-auto">
        <button
          onClick={prev}
          className="hidden md:flex bg-yellow-400 rounded-full p-2 shadow hover:bg-yellow-300 shrink-0"
        >
          <ChevronLeft className="text-purple-900" />
        </button>

        <div
          className="rounded-2xl p-6 md:p-8 shadow-md flex-1 max-w-250 md:min-h-104.25 border flex flex-col md:flex-row items-center gap-6 text-left"
          style={{ backgroundColor: "#160B2E", borderColor: "#D9D9D9" }}
        >
          <div className="flex-1">
            <div className="flex gap-1 mb-3 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-white text-sm md:text-base leading-relaxed mb-3 text-center md:text-left">
              "{testimonial.quotes[0]}"
            </p>
            <p className="hidden md:block text-white text-base leading-relaxed mb-3">
              "{testimonial.quotes[1]}"
            </p>
            <p className="font-bold text-sm text-white mt-2 text-center md:text-left">
              {testimonial.name}
            </p>
            <p className="text-xs text-gray-400 text-center md:text-left">
              {testimonial.role}
            </p>
          </div>

          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="hidden md:block w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shrink-0"
          />
        </div>

        <button
          onClick={next}
          className="hidden md:flex bg-yellow-400 rounded-full p-2 shadow hover:bg-yellow-300 shrink-0"
        >
          <ChevronRight className="text-purple-900" />
        </button>
      </div>

      {/* Mobile carousel dots */}
      <div className="flex md:hidden items-center justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-yellow-400" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;