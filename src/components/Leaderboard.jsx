import leadershipImage from "../assets/leadership-image.png";

const players = [
  { rank: 1, name: "ProGamer_X", flag: "🇺🇸", icon: "👑", coins: "1,248,500", border: "border-yellow-400" },
  { rank: 2, name: "NeonQueen", flag: "🇬🇧", icon: "🥈", coins: "987,200", border: "border-gray-300" },
  { rank: 3, name: "CoinHunter99", flag: "🇮🇳", icon: "🥉", coins: "876,400", border: "border-orange-400" },
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
        <h2 className="section-heading text-2xl md:text-3xl text-white">
          TOP PLAYERS THIS WEEK
        </h2>
        <p className="text-purple-200 mt-2 max-w-xl mx-auto text-sm">
          Climb the ranks, earn weekly prizes. Can you unseat ZaraX99 from the
          throne?
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-3">
          {players.map(({ rank, name, flag, icon, coins, border }) => (
            <div
              key={rank}
              className={`flex items-center justify-between bg-purple-950/60 rounded-xl px-5 py-3 border-2 ${border}`}
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
          className="w-full max-w-sm mx-auto h-auto"
        />
      </div>
    </section>
  );
}

export default Leaderboard;