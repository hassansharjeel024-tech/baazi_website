import { Gamepad2, Trophy, Pencil } from "lucide-react";
import AdminLayout from "./AdminLayout";

const GAMES = [
  { name: "Snake Classic", category: "Arcade", players: "14.2k", status: "Live" },
  { name: "8 Ball Pool", category: "Sports", players: "11.6k", status: "Live" },
  { name: "Bingo Blitz", category: "Casual", players: "9.3k", status: "Live" },
  { name: "Pixel Knight", category: "RPG", players: "4.1k", status: "Draft" },
  { name: "Mind Maze", category: "Puzzle", players: "2.8k", status: "Disabled" },
];

const STATUS_STYLE = {
  Live: { bg: "rgba(219,238,42,0.20)", color: "#DBEE2A" },
  Draft: { bg: "rgba(0,83,219,0.20)", color: "#B4C5FF" },
  Disabled: { bg: "rgba(147,0,10,0.20)", color: "#FFB4AB" },
};

const SPARK_BARS = [
  { height: 19.19, opacity: 0.2 },
  { height: 28.8, opacity: 0.2 },
  { height: 38.39, opacity: 0.4 },
  { height: 32, opacity: 0.3 },
  { height: 51.19, opacity: 0.6 },
  { height: 64, opacity: 1 },
];

export default function AdminGames() {
  return (
    <AdminLayout>
      <div className="mb-6">
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "0px",
            color: "#D0D0D0",
          }}
          className="mb-1"
        >
          Games Management
        </h1>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0px",
            color: "#D0D0D0",
          }}
        >
          Configure active tournaments, difficulty tiers, and prize allocations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "#091E46", border: "1px solid rgba(59,130,246,0.22)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: "#3B82F622" }}
          >
            <Gamepad2 className="w-4 h-4" style={{ color: "#3B82F6" }} />
          </div>
          <p
            className="mb-1"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#BFD100",
            }}
          >
            Active Players
          </p>
          <div className="flex items-baseline gap-2">
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "56px",
                letterSpacing: "-0.96px",
                color: "#FFFFFF",
              }}
            >
              12.4k
            </p>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#BFD100",
              }}
            >
              +18% ↑
            </span>
          </div>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "#091E46", border: "1px solid rgba(59,130,246,0.22)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: "#DBE21C22" }}
          >
            <Trophy className="w-4 h-4" style={{ color: "#DBE21C" }} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p
                className="mb-1"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#D0D0D0",
                }}
              >
                Total Prize Pool Distributed
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "56px",
                  letterSpacing: "-0.96px",
                  color: "#FFFFFF",
                }}
              >
                $1,45,20,000
              </p>
            </div>
            <div className="flex items-end gap-3" style={{ height: "64px" }}>
              {SPARK_BARS.map((bar, i) => (
                <div
                  key={i}
                  style={{
                    width: "27.5px",
                    height: `${bar.height}px`,
                    borderTopLeftRadius: "2px",
                    borderTopRightRadius: "2px",
                    backgroundColor:
                      bar.opacity === 1 ? "#DBE21C" : `rgba(219,238,42,${bar.opacity})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#091E46", border: "1px solid rgba(59,130,246,0.22)", paddingTop: "8px" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[560px]">
            <thead>
              <tr style={{ backgroundColor: "#120D2A", borderBottom: "1px solid rgba(70,72,51,0.30)" }}>
                {["Game", "Category", "Players", "Status"].map((label) => (
                  <th
                    key={label}
                    className="py-3 px-5"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "16px",
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                      color: "#6B7280",
                    }}
                  >
                    {label}
                  </th>
                ))}
                <th
                  className="py-3 px-5 text-right"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#6B7280",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {GAMES.map((g) => (
                <tr key={g.name} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <td
                    className="py-4 px-5"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                    }}
                  >
                    {g.name}
                  </td>
                  <td
                    className="py-4 px-5"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#6B7280",
                    }}
                  >
                    {g.category}
                  </td>
                  <td
                    className="py-4 px-5"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#6B7280",
                    }}
                  >
                    {g.players}
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className="rounded-full inline-block"
                      style={{
                        backgroundColor: STATUS_STYLE[g.status].bg,
                        color: STATUS_STYLE[g.status].color,
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "12px",
                        lineHeight: "16px",
                        paddingTop: "3.5px",
                        paddingBottom: "3.5px",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                      }}
                    >
                      {g.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <button
                      className="inline-flex items-center gap-1.5 rounded-lg hover:brightness-110 transition"
                      style={{
                        backgroundColor: "#1F2D63",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#FFFFFF",
                      }}
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}