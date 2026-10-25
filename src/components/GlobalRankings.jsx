import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  ChevronDown,
  Shield,
  Star,
} from "lucide-react";
import phantomStrike from "../assets/phantom-strike.jpg";
import apexPredator from "../assets/apex-predator.jpg";
import neonNinja from "../assets/neon-ninja.jpg";
import shadowWeaver from "../assets/shadow-weaver.jpg";
import vortexKid from "../assets/vortex-kid.jpg";
import ironclad from "../assets/ironclad.jpg";
import blazeRunner from "../assets/blaze-runner.jpg";

const LIME = "#DBE21C";
const HERO_PURPLE = "#5A0D9E";
const PAGE_BG = "#F4F0FC";
const INK = "#111827";
const MUTED = "#9CA3AF";
const EXO = "'Exo 2', sans-serif";
const POPPINS = "'Poppins', sans-serif";

const top3 = [
  {
    rank: 2,
    name: "Phantom_Strike",
    photo: phantomStrike,
    role: "GRANDMASTER",
    flag: "🇵🇰",
    streak: 5,
    score: "94,200",
    badgeBg: "#6D28D9",
  },
  {
    rank: 1,
    name: "Apex_Predator",
    photo: apexPredator,
    role: "APEX LEGEND",
    flag: "🇺🇸",
    streak: 3,
    score: "102,450",
    badgeBg: LIME,
    featured: true,
  },
  {
    rank: 3,
    name: "NeonNinja",
    photo: neonNinja,
    role: "GRANDMASTER",
    flag: "🇺🇸",
    streak: 3,
    score: "91,300",
    badgeBg: "#2563EB",
  },
];

const tableData = [
  { rank: 4, name: "Shadow_Weaver", photo: shadowWeaver, tier: "Master Tier", level: "Lv 94", xp: "88,400", winRate: 68, trend: "up" },
  { rank: 5, name: "Vortex_Kid", photo: vortexKid, tier: "Master Tier", level: "Lv 92", xp: "85,210", winRate: 61, trend: "flat" },
  { rank: 6, name: "IronClad", photo: ironclad, tier: "Diamond I", level: "Lv 88", xp: "79,900", winRate: 55, trend: "down" },
  { rank: 7, name: "Blaze_Runner", photo: blazeRunner, tier: "Diamond I", level: "Lv 85", xp: "76,300", winRate: 58, trend: "up" },
];

const scopeTabs = ["Global", "Regional", "Friends"];
const periodTabs = ["Daily", "Weekly", "Monthly", "All-time"];

function TrendIcon({ trend }) {
  if (trend === "up") return <TrendingUp className="h-4 w-4" style={{ color: "#22C55E" }} />;
  if (trend === "down") return <TrendingDown className="h-4 w-4" style={{ color: "#EF4444" }} />;
  return <ArrowRight className="h-4 w-4" style={{ color: MUTED }} />;
}

function PodiumCard({ player }) {
  const { featured } = player;
  const avatarSize = featured ? 76 : 60;

  return (
    <div
      className="relative flex w-full flex-col items-center bg-white text-center"
      style={{
        maxWidth: featured ? 290 : 286,
        borderRadius: 14,
        padding: featured ? "44px 20px 26px" : "34px 20px 24px",
        boxShadow: featured
          ? "0 14px 30px rgba(17, 24, 39, 0.12)"
          : "0 4px 14px rgba(17, 24, 39, 0.05)",
        borderTop: featured ? "3px solid #0F4C5C" : "1px solid #ECE7F5",
      }}
    >
      <span
        className="absolute left-1/2 flex items-center justify-center"
        style={{
          top: featured ? -20 : -13,
          transform: "translateX(-50%)",
          width: featured ? 38 : 26,
          height: featured ? 38 : 26,
          borderRadius: 9999,
          backgroundColor: player.badgeBg,
          color: featured ? INK : "#fff",
          fontFamily: EXO,
          fontWeight: 700,
          fontSize: featured ? 16 : 12,
          border: "2px solid #fff",
        }}
      >
        {player.rank}
      </span>

      <div className="relative mb-3">
        <div
          className="rounded-full"
          style={{
            padding: featured ? 3 : 0,
            border: featured ? `2px dashed ${LIME}` : "none",
          }}
        >
          <img
            src={player.photo}
            alt={player.name}
            className="rounded-full object-cover"
            style={{ width: avatarSize, height: avatarSize, display: "block" }}
          />
        </div>
        {featured && (
          <span
            className="absolute flex items-center gap-1 rounded-full"
            style={{
              right: -10,
              bottom: 2,
              padding: "2px 7px",
              backgroundColor: "#22C55E",
              color: "#fff",
              fontFamily: POPPINS,
              fontSize: 9,
              fontWeight: 700,
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Live
          </span>
        )}
      </div>

      <p
        style={{
          fontFamily: EXO,
          fontWeight: 700,
          fontSize: featured ? 22 : 17,
          lineHeight: 1.2,
          color: INK,
        }}
      >
        {player.name}
      </p>
      <p
        className="mt-1 uppercase"
        style={{
          fontFamily: POPPINS,
          fontSize: featured ? 11 : 9,
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: featured ? INK : "#6B7280",
        }}
      >
        {player.role}
      </p>
      <p
        className="mt-1"
        style={{ fontFamily: POPPINS, fontSize: 9, color: MUTED, fontWeight: 500 }}
      >
        {player.flag} · {player.streak}🔥 STREAK
      </p>

      <span
        className="mt-4 inline-flex items-center gap-1.5"
        style={{
          fontFamily: EXO,
          fontWeight: 700,
          fontSize: featured ? 18 : 13,
          color: INK,
          backgroundColor: featured ? "#CFF7FC" : "#F3F4F6",
          borderRadius: 8,
          padding: featured ? "8px 18px" : "6px 12px",
        }}
      >
        <Star
          className={featured ? "h-4 w-4" : "h-3 w-3"}
          style={{ color: "#EAB308" }}
          fill="#EAB308"
        />
        {player.score}
        <span style={{ fontSize: featured ? 10 : 8, fontWeight: 600 }}>XP</span>
      </span>
    </div>
  );
}

export default function GlobalRankings() {
  const [scope, setScope] = useState("Global");
  const [period, setPeriod] = useState("Monthly");

  return (
    <section className="w-full">
      {/* Hero */}
      <div
        className="text-center"
        style={{ backgroundColor: HERO_PURPLE, padding: "76px 24px 88px" }}
      >
        <h1
          className="uppercase"
          style={{
            fontFamily: EXO,
            fontWeight: 900,
            fontSize: "clamp(2.75rem, 5.2vw, 4.5rem)",
            lineHeight: 1.12,
            color: LIME,
          }}
        >
          <span className="block">Global</span>
          <span className="block">Rankings</span>
        </h1>
        <p
          className="mx-auto mt-7 max-w-2xl"
          style={{
            fontFamily: POPPINS,
            fontSize: 17,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          The highest echelon of competitive play. Climb the ranks to secure your legacy.
        </p>
      </div>

      {/* Body */}
      <div style={{ backgroundColor: PAGE_BG, padding: "56px 24px 140px" }}>
        <div className="mx-auto" style={{ maxWidth: 900 }}>
          <h2
            className="text-center uppercase"
            style={{
              fontFamily: EXO,
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 4.6vw, 4.25rem)",
              lineHeight: 1,
              color: "#000",
              marginBottom: 72,
            }}
          >
            Top 3
          </h2>

          {/* Podium: 2 | 1 | 3, bottoms aligned */}
          <div className="mb-12 flex flex-col items-center gap-10 md:flex-row md:items-end md:justify-center md:gap-5">
            {top3.map((player) => (
              <PodiumCard key={player.rank} player={player} />
            ))}
          </div>

          {/* Your standing + table */}
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[240px_1fr]">
            {/* Your Standing */}
            <div
              className="relative overflow-hidden bg-white"
              style={{
                borderRadius: 14,
                padding: "20px 18px 18px",
                boxShadow: "0 4px 14px rgba(17, 24, 39, 0.06)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: 110,
                  height: 110,
                  top: -40,
                  right: -40,
                  backgroundColor: "#FBF8E3",
                }}
              />

              <p
                className="relative mb-4 flex items-center gap-1.5 uppercase"
                style={{
                  fontFamily: POPPINS,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: INK,
                }}
              >
                <Shield className="h-3 w-3" /> Your Standing
              </p>

              <div className="relative mb-4 flex items-center gap-3">
                <div
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{
                    width: 46,
                    height: 46,
                    border: "1.5px solid #D1D5DB",
                    backgroundColor: "#F9FAFB",
                  }}
                >
                  <Shield className="h-5 w-5" style={{ color: "#3B82F6" }} />
                </div>
                <div className="min-w-0">
                  <p
                    className="truncate"
                    style={{ fontFamily: EXO, fontWeight: 700, fontSize: 18, color: INK, lineHeight: 1.2 }}
                  >
                    ProPlayer_99
                  </p>
                  <p style={{ fontFamily: POPPINS, fontSize: 9, color: "#6B7280" }}>
                    Rank #4,291
                  </p>
                  <p style={{ fontFamily: POPPINS, fontSize: 9, color: MUTED }}>
                    🇵🇰 · 5🔥 streak
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div
                  className="mb-1 flex justify-between"
                  style={{ fontFamily: POPPINS, fontSize: 9, color: "#6B7280" }}
                >
                  <span>Current XP</span>
                  <span>12,450 / 15,000</span>
                </div>
                <div
                  className="w-full overflow-hidden rounded-full"
                  style={{ height: 5, backgroundColor: "#E5E7EB" }}
                >
                  <div className="h-full rounded-full" style={{ width: "83%", backgroundColor: LIME }} />
                </div>
                <p
                  className="mt-1 text-right"
                  style={{ fontFamily: POPPINS, fontSize: 8, color: MUTED }}
                >
                  2,550 XP to Diamond Tier
                </p>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg" style={{ backgroundColor: "#F3F4F6", padding: "8px 10px" }}>
                  <p style={{ fontFamily: POPPINS, fontSize: 9, color: "#6B7280" }}>Win Rate</p>
                  <p style={{ fontFamily: EXO, fontWeight: 700, fontSize: 18, color: "#16A34A" }}>62.4%</p>
                </div>
                <div className="rounded-lg" style={{ backgroundColor: "#F3F4F6", padding: "8px 10px" }}>
                  <p style={{ fontFamily: POPPINS, fontSize: 9, color: "#6B7280" }}>Matches</p>
                  <p style={{ fontFamily: EXO, fontWeight: 700, fontSize: 18, color: INK }}>1,402</p>
                </div>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-1 transition hover:brightness-95"
                style={{
                  fontFamily: POPPINS,
                  fontWeight: 600,
                  fontSize: 12,
                  color: INK,
                  backgroundColor: LIME,
                  borderRadius: 8,
                  padding: "10px 12px",
                }}
              >
                View Full Profile <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Rankings table */}
            <div
              className="overflow-hidden bg-white"
              style={{ borderRadius: 14, boxShadow: "0 4px 14px rgba(17, 24, 39, 0.06)" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3" style={{ padding: "14px 16px" }}>
                <div className="flex rounded-lg" style={{ backgroundColor: "#F3F4F6", padding: 3 }}>
                  {scopeTabs.map((tab) => {
                    const active = scope === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setScope(tab)}
                        className="rounded-md transition-colors"
                        style={{
                          fontFamily: POPPINS,
                          fontSize: 11,
                          fontWeight: active ? 600 : 500,
                          padding: "5px 16px",
                          backgroundColor: active ? "#fff" : "transparent",
                          color: active ? "#6D28D9" : "#6B7280",
                          boxShadow: active ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                        }}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1">
                  {periodTabs.map((tab) => {
                    const active = period === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setPeriod(tab)}
                        style={{
                          fontFamily: POPPINS,
                          fontSize: 10,
                          fontWeight: active ? 600 : 500,
                          padding: "4px 10px",
                          color: active ? "#6D28D9" : "#6B7280",
                          borderBottom: active ? "2px solid #6D28D9" : "2px solid transparent",
                        }}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left" style={{ fontFamily: POPPINS }}>
                  <thead>
                    <tr
                      className="uppercase"
                      style={{
                        backgroundColor: "#F9FAFB",
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        color: "#6B7280",
                      }}
                    >
                      <th className="text-center font-semibold" style={{ padding: "10px 12px", width: 56 }}>Rank</th>
                      <th className="font-semibold" style={{ padding: "10px 8px" }}>Player</th>
                      <th className="text-center font-semibold" style={{ padding: "10px 8px" }}>Level</th>
                      <th className="text-center font-semibold" style={{ padding: "10px 8px" }}>Total XP</th>
                      <th className="font-semibold" style={{ padding: "10px 8px" }}>Win Rate</th>
                      <th className="text-center font-semibold" style={{ padding: "10px 12px" }}>Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.rank} style={{ borderTop: "1px solid #F1F1F4" }}>
                        <td className="text-center" style={{ padding: "14px 12px", fontSize: 12, color: "#4B5563" }}>
                          {row.rank}
                        </td>
                        <td style={{ padding: "14px 8px" }}>
                          <div className="flex items-center gap-2.5">
                            <img
                              src={row.photo}
                              alt={row.name}
                              className="rounded-full object-cover"
                              style={{ width: 28, height: 28 }}
                            />
                            <div>
                              <p style={{ fontFamily: EXO, fontWeight: 700, fontSize: 12, color: INK, lineHeight: 1.2 }}>
                                {row.name}
                              </p>
                              <p style={{ fontSize: 9, color: MUTED }}>{row.tier}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center" style={{ padding: "14px 8px" }}>
                          <span
                            style={{
                              fontSize: 9,
                              fontWeight: 600,
                              color: "#4B5563",
                              backgroundColor: "#F3F4F6",
                              borderRadius: 6,
                              padding: "3px 8px",
                            }}
                          >
                            {row.level}
                          </span>
                        </td>
                        <td className="text-center" style={{ padding: "14px 8px", fontFamily: EXO, fontWeight: 700, fontSize: 12, color: INK }}>
                          {row.xp}
                        </td>
                        <td style={{ padding: "14px 8px" }}>
                          <div className="flex items-center gap-2">
                            <span style={{ fontSize: 9, color: "#6B7280", minWidth: 24 }}>{row.winRate}%</span>
                            <div className="overflow-hidden rounded-full" style={{ width: 44, height: 4, backgroundColor: "#E5E7EB" }}>
                              <div className="h-full rounded-full" style={{ width: `${row.winRate}%`, backgroundColor: LIME }} />
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: "14px 12px" }}>
                          <div className="flex justify-center">
                            <TrendIcon trend={row.trend} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-1 transition-colors hover:text-gray-800"
                style={{
                  fontFamily: POPPINS,
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#4B5563",
                  borderTop: "1px solid #F1F1F4",
                  padding: "14px 12px",
                }}
              >
                <ChevronDown className="h-3.5 w-3.5" /> Load More Players
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
