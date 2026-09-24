import miniGameArcade from "../assets/icon-mini-game-arcade.png";
import dailyChallenges from "../assets/icon-daily-challenges.png";
import earnCarrots from "../assets/icon-earn-carrots.png";
import rewardShop from "../assets/icon-reward-shop.png";
import referralSystem from "../assets/icon-referral-system.png";
import leaderboards from "../assets/icon-leaderboards.png";

const features = [
  {
    icon: miniGameArcade,
    title: "Mini-Game Arcade",
    description:
      "Dive into 100+ hyper-casual and skill-based games. Short sessions, big rewards, endless fun.",
    glow: "168, 85, 247", // #A855F7
  },
  {
    icon: dailyChallenges,
    title: "Daily Challenges",
    description:
      "Complete daily and weekly tasks to earn bonus Carrots and limited-edition achievement badges.",
    glow: "6, 182, 212", // #06B6D4
  },
  {
    icon: earnCarrots,
    title: "Earn Carrots",
    description:
      "Our virtual currency is earned through every action. Watch your wallet grow with animated delight.",
    glow: "196, 223, 0", // #C4DF00
  },
  {
    icon: rewardShop,
    title: "Reward Shop",
    description:
      "Redeem Carrots for gift cards, digital goods, power-ups, and exclusive limited-time offers.",
    glow: "245, 158, 11", // #F59E0B
  },
  {
    icon: referralSystem,
    title: "Referral System",
    description:
      "Invite friends and earn 100 Carrots each time. No cap — the more you share, the more you earn.",
    glow: "236, 72, 153", // #EC4899
  },
  {
    icon: leaderboards,
    title: "Leaderboards",
    description:
      "Compete globally or among friends. Climb the ranks and claim weekly leaderboard cash prizes.",
    glow: "255, 107, 53", // #FF6B35
  },
];
function Features() {
  return (
    <section id="features" className="bg-white px-6 2xl:pt-[229px]! pt-8 pb-16 text-center">
  <h2
    className="uppercase text-gray-900"
    style={{
      fontFamily: "'Exo 2', sans-serif",
      fontWeight: 700,
      fontSize: "clamp(24px, 4vw, 48px)",
      lineHeight: 1.667,
      letterSpacing: "0px",
    }}
  >
    EVERYTHING YOU NEED TO PLAY & EARN
  </h2>
  <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
    Six powerful pillars that make Baazi the most addictive play-to-earn
    platform out there.
  </p>

      <div
        className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mt-10 mx-auto"
        style={{ maxWidth: "1200px" }}
      >
        {features.map(({ icon, title, description, glow }) => (
  <div
    key={title}
    className="flex flex-col text-left hover:-translate-y-1 transition-transform w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-92.75 md:h-64.5"
    style={{
      backgroundColor: "#1C0E2B",
      backgroundImage: `radial-gradient(circle at top right, rgba(${glow}, 0.2) 0%, rgba(${glow}, 0) 60%)`,
      borderRadius: "24px",
      borderTop: "0.8px solid rgba(168, 85, 247, 0.19)",
      padding: "24px",
      gap: "15px",
    }}
  >
    <img
      src={icon}
      alt={title}
      className="w-10 h-10 sm:w-12 sm:h-12"
    />
    <h3 className="text-white font-bold text-sm sm:text-base">{title}</h3>
    <p className="text-gray-400 text-xs sm:text-sm">{description}</p>
  </div>
))}
      </div>
    </section>
  );
}

export default Features;