import leadershipImage from "../assets/leadership-image.png";

const players = [
  { rank: 1, name: "ProGamer_X", flag: "🇺🇸", icon: "👑", coins: "1,248,500", border: "border-[#DBE21C]" },
  { rank: 2, name: "NeonQueen", flag: "🇬🇧", icon: "🥈", coins: "987,200", border: "border-transparent" },
  { rank: 3, name: "CoinHunter99", flag: "🇮🇳", icon: "🥉", coins: "876,400", border: "border-[#F97316]" },
  { rank: 4, name: "BaziKing", flag: "🇧🇷", icon: "⭐", coins: "654,100", border: "border-transparent" },
  { rank: 5, name: "SpeedDemon", flag: "🇰🇷", icon: "⭐", coins: "543,800", border: "border-transparent" },
  { rank: 6, name: "GoldRush_Z", flag: "🇯🇵", icon: "⭐", coins: "421,600", border: "border-transparent" },
];

function Leaderboard() {
  return (
    <section
      className="px-6 py-16 2xl:min-h-257.5 2xl:flex 2xl:flex-col 2xl:justify-center"
      style={{ backgroundColor: "#1C0E2B" }}
    >
      <div className="text-center mb-10">
        <h2
          className="text-2xl md:text-3xl uppercase text-white"
          style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900 }}
        >
          TOP PLAYERS THIS WEEK
        </h2>
        <p className="text-purple-200 mt-2 max-w-xl mx-auto text-sm">
          Climb the ranks, earn weekly prizes. Can you unseat ZaraX99 from the
          throne?
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-3 2xl:w-183.9 2xl:h-117.3">
          {players.map(({ rank, name, flag, icon, coins, border }) => (
            <div
              key={rank}
              className={`flex items-center justify-between rounded-xl px-5 py-3 border-2 ${border}`}
              style={{ backgroundColor: "#100821" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold text-sm w-6">
                  #{rank}
                </span>
                <span className="text-lg">{flag}</span>
                <span className="text-white font-semibold text-sm">{name}</span>
              </div>
              <span className="text-yellow-300 font-bold text-sm flex items-center gap-1">
                {icon} {coins}
              </span>
            </div>
          ))}
        </div>

        <img
          src={leadershipImage}
          alt="Leaderboard app screenshot"
          className="hidden md:block w-full max-w-sm mx-auto h-auto 2xl:w-154.5 2xl:h-176.5 2xl:max-w-none"
        />
      </div>
    </section>
  );
}

export default Leaderboard;