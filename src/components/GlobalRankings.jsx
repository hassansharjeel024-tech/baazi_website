import { TrendingUp, TrendingDown, Minus, ArrowRight, ChevronDown, Shield } from "lucide-react";
import phantomStrike from "../assets/phantom-strike.jpg";
import apexPredator from "../assets/apex-predator.jpg";
import neonNinja from "../assets/neon-ninja.jpg";
import proplayer99 from "../assets/proplayer-99.jpg";
import shadowWeaver from "../assets/shadow-weaver.jpg";
import vortexKid from "../assets/vortex-kid.jpg";
import ironclad from "../assets/ironclad.jpg";
import blazeRunner from "../assets/blaze-runner.jpg";

function Avatar({ photo, name, size = "w-16 h-16" }) {
  return (
    <img
      src={photo}
      alt={name}
      className={`${size} rounded-full object-cover border-4 border-white`}
    />
  );
}

const top3 = [
  { rank: 2, name: "Phantom_Strike", photo: phantomStrike, role: "GRANDMASTER", flag: "🇵🇰", streak: 5, score: "94,200", badgeColor: "bg-purple-700" },
  { rank: 1, name: "Apex_Predator", photo: apexPredator, role: "APEX LEGEND", flag: "🇺🇸", streak: 3, score: "102,450", badgeColor: "bg-yellow-400", featured: true },
  { rank: 3, name: "NeonNinja", photo: neonNinja, role: "GRANDMASTER", flag: "🇺🇸", streak: 3, score: "91,300", badgeColor: "bg-blue-600" },
];

const tableData = [
  { rank: 4, name: "Shadow_Weaver", photo: shadowWeaver, tier: "Master Tier", level: "Lv 94", xp: "88,400", winRate: 68, trend: "up" },
  { rank: 5, name: "Vortex_Kid", photo: vortexKid, tier: "Master Tier", level: "Lv 92", xp: "85,210", winRate: 61, trend: "flat" },
  { rank: 6, name: "IronClad", photo: ironclad, tier: "Diamond I", level: "Lv 88", xp: "79,900", winRate: 55, trend: "down" },
  { rank: 7, name: "Blaze_Runner", photo: blazeRunner, tier: "Diamond I", level: "Lv 85", xp: "76,300", winRate: 58, trend: "up" },
];

const trendIcon = {
  up: <TrendingUp className="w-4 h-4 text-green-500" />,
  down: <TrendingDown className="w-4 h-4 text-red-500" />,
  flat: <Minus className="w-4 h-4 text-gray-400" />,
};

export default function GlobalRankings() {
  return (
    <section>
      {/* Header */}
      <div
        className="py-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)" }}
      >
        <h1 className="section-heading text-yellow-400 text-4xl md:text-5xl mb-3">
          GLOBAL RANKINGS
        </h1>
        <p className="font-poppins text-purple-200 text-sm md:text-base">
          The highest echelon of competitive play. Climb the ranks to secure your legacy.
        </p>
      </div>

      {/* Body */}
      <div className="bg-[#F3F0FA] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl text-center mb-10">TOP 3</h2>

          {/* Podium cards */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 mb-16">
            {top3.map((player) => (
              <div
                key={player.rank}
                className={`bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md relative ${
                  player.featured ? "md:-translate-y-4 md:scale-105 ring-2 ring-dashed ring-yellow-400" : ""
                }`}
                style={{ width: "220px" }}
              >
                <div className="relative mb-3">
                  <Avatar photo={player.photo} name={player.name} />
                  <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${player.badgeColor} text-white text-xs font-bold flex items-center justify-center`}>
                    {player.rank}
                  </span>
                  {player.featured && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                      Live
                    </span>
                  )}
                </div>
                <p className="font-poppins font-bold text-sm text-gray-900 mt-2">{player.name}</p>
                <p className="font-poppins text-[10px] text-gray-400 uppercase tracking-wide mb-1">
                  {player.role}
                </p>
                <p className="font-poppins text-[10px] text-gray-400 mb-3 flex items-center gap-1">
                  {player.flag} · {player.streak}🔥 STREAK
                </p>
                <span className="bg-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {player.score} XP
                </span>
              </div>
            ))}
          </div>

          {/* Your standing + Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Your Standing */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="font-poppins text-xs text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> Your Standing
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Avatar photo={proplayer99} name="ProPlayer_99" size="w-12 h-12" />
                <div>
                  <p className="font-poppins font-bold text-sm text-gray-900">ProPlayer_99</p>
                  <p className="font-poppins text-xs text-gray-400">Rank #4,291</p>
                  <p className="font-poppins text-[10px] text-gray-400">🇵🇰 · 5🔥 streak</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between font-poppins text-[10px] text-gray-400 mb-1">
                  <span>Current XP</span>
                  <span>12,450 / 15,000</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400" style={{ width: "83%" }} />
                </div>
                <p className="font-poppins text-[10px] text-gray-400 mt-1">
                  2,550 XP to Diamond Tier
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="font-poppins font-bold text-sm text-green-600">62.4%</p>
                  <p className="font-poppins text-[10px] text-gray-400">Win Rate</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="font-poppins font-bold text-sm text-gray-900">1,402</p>
                  <p className="font-poppins text-[10px] text-gray-400">Matches</p>
                </div>
              </div>
              <button className="w-full bg-[#D9E021] text-[#1F2544] font-poppins font-bold text-sm py-2.5 rounded-full hover:brightness-95 transition flex items-center justify-center gap-1">
                View Full Profile <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Rankings table */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-md overflow-x-auto">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex gap-4 font-poppins text-xs font-semibold text-gray-500">
                  <span className="text-purple-700 border-b-2 border-purple-700 pb-1">Global</span>
                  <span>Regional</span>
                  <span>Friends</span>
                </div>
                <div className="flex gap-3 font-poppins text-[11px] text-gray-400">
                  <span>Daily</span>
                  <span>Weekly</span>
                  <span className="text-purple-700 font-semibold">Monthly</span>
                  <span>All-Time</span>
                </div>
              </div>

              <table className="w-full text-left font-poppins text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs uppercase">
                    <th className="py-2">Rank</th>
                    <th className="py-2">Player</th>
                    <th className="py-2">Level</th>
                    <th className="py-2">Total XP</th>
                    <th className="py-2">Win Rate</th>
                    <th className="py-2">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.rank} className="border-t border-gray-100">
                      <td className="py-3 font-bold text-gray-700 align-top pt-4">{row.rank}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <Avatar photo={row.photo} name={row.name} size="w-7 h-7" />
                          <div>
                            <p className="font-semibold text-gray-900 leading-tight">{row.name}</p>
                            <p className="text-[10px] text-gray-400 leading-tight">{row.tier}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-gray-600 align-top pt-4">{row.level}</td>
                      <td className="py-3 text-gray-600 align-top pt-4">{row.xp}</td>
                      <td className="py-3 align-top pt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700 font-medium">{row.winRate}%</span>
                          <div className="w-14 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400" style={{ width: `${row.winRate}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="py-3 align-top pt-4">{trendIcon[row.trend]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button className="w-full mt-4 text-gray-500 font-poppins text-sm py-2.5 flex items-center justify-center gap-1 hover:text-gray-700 transition">
                <ChevronDown className="w-4 h-4" /> Load More Players
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}