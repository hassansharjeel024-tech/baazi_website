import { Gamepad2, Calendar, Coins, Gift, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Mini-Game Arcade",
    description:
      "Dive into 100+ instant-play casual games. Short sessions, big rewards, endless fun.",
    color: "bg-purple-500",
    glow: "168, 85, 247",
  },
  {
    icon: Calendar,
    title: "Daily Challenges",
    description:
      "Complete daily and weekly tasks to earn Carrots and unlock exclusive badges.",
    color: "bg-teal-500",
    glow: "20, 184, 166",
  },
  {
    icon: Coins,
    title: "Earn Carrots",
    description:
      "Our virtual currency is earned through gameplay. Multiply your winnings and cash out anytime.",
    color: "bg-yellow-500",
    glow: "234, 179, 8",
  },
  {
    icon: Gift,
    title: "Reward Shop",
    description:
      "Redeem Carrots for gift cards, digital goods, prizes, and exclusive limited-time offers.",
    color: "bg-pink-500",
    glow: "236, 72, 153",
  },
  {
    icon: Users,
    title: "Referral System",
    description:
      "Invite friends and earn 100 Carrots each. The more you share, the more you earn.",
    color: "bg-indigo-500",
    glow: "99, 102, 241",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description:
      "Compete globally or among friends. Top the leaderboard each week for cash prizes.",
    color: "bg-orange-500",
    glow: "249, 115, 22",
  },
];

function Features() {
  return (
    <section id="features" className="bg-white px-6 pt-24 pb-16 text-center">
      <h2 className="section-heading text-2xl md:text-3xl text-gray-900">
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
        {features.map(({ icon: Icon, title, description, color, glow }) => (
          <div
            key={title}
            className="flex flex-col text-left hover:-translate-y-1 transition-transform w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[371px] min-h-[180px] sm:min-h-[220px] md:h-[258px]"
            style={{
              backgroundColor: "#1C0E2B",
              backgroundImage: `radial-gradient(circle at top right, rgba(${glow}, 0.25) 0%, rgba(${glow}, 0) 60%)`,
              borderRadius: "24px",
              borderTop: "0.8px solid rgba(255, 107, 53, 0.19)",
              padding: "16px",
              gap: "10px",
            }}
          >
            <div className={`${color} w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center`}>
              <Icon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-white font-bold text-sm sm:text-base">{title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;