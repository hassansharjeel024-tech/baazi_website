import { useState } from "react";
import { Gift, CalendarCheck, Pencil, CirclePlus, UploadCloud } from "lucide-react";
import AdminLayout from "./AdminLayout";
import addRewardIcon from "../assets/add-reward-icon.png";

const REWARDS = [
  { name: "iPhone 15", cost: "50,000", claimed: 2, status: "Active" },
  { name: "iPhone 15", cost: "50,000", claimed: 8, status: "Active" },
  { name: "iPhone 15", cost: "50,000", claimed: 2, status: "Active" },
  { name: "iPhone 15", cost: "50,000", claimed: 8, status: "Out of stock" },
  { name: "iPhone 15", cost: "50,000", claimed: 2, status: "Draft" },
];

const STATUS_STYLE = {
  Active: { bg: "rgba(219,238,42,0.20)", color: "#DBEE2A" },
  "Out of stock": { bg: "rgba(0,83,219,0.20)", color: "#B4C5FF" },
  Draft: { bg: "rgba(147,0,10,0.20)", color: "#FFB4AB" },
};

function fieldStyle() {
  return {
    backgroundColor: "#0B1330",
    border: "1px solid rgba(255,255,255,0.1)",
  };
}

export default function AdminRewards() {
  const [dragOver, setDragOver] = useState(false);

  return (
    <AdminLayout>
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1
            className="mb-1"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "0px",
              color: "#D0D0D0",
            }}
          >
            Reward Management
          </h1>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#D0D0D0",
            }}
          >
            Configure player engagement loops and reward distribution values.
          </p>
        </div>
        <button
          className="flex items-center gap-2 rounded-full hover:brightness-95 transition"
          style={{
            backgroundColor: "#DBE21C",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "24px",
            paddingRight: "24px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#091E46",
          }}
        >
                    <CirclePlus className="w-5 h-5" style={{ color: "#1A1E00" }} />
          Add Reward
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "#091E46", border: "1px solid rgba(59,130,246,0.22)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: "#DBE21C22" }}
          >
            <Gift className="w-4 h-4" style={{ color: "#DBE21C" }} />
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
            Active Reward
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
            12
          </p>
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "#091E46", border: "1px solid rgba(59,130,246,0.22)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
            style={{ backgroundColor: "#3B82F622" }}
          >
            <CalendarCheck className="w-4 h-4" style={{ color: "#3B82F6" }} />
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
              color: "#D0D0D0",
            }}
          >
            Claim This Month
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
            84
          </p>
        </div>
      </div>

      {/* Rewards table */}
      <div
        className="rounded-2xl overflow-hidden mb-6"
        style={{ backgroundColor: "#091E46", border: "1px solid rgba(59,130,246,0.22)", paddingTop: "8px" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[560px]">
            <thead>
              <tr style={{ backgroundColor: "#120D2A", borderBottom: "1px solid rgba(70,72,51,0.30)" }}>
                {["Reward", "Cost Carrots", "Claimed", "Status"].map((label) => (
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
              {REWARDS.map((r, i) => (
                <tr key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
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
                    {r.name}
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
                    {r.cost}
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
                    {r.claimed}
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className="rounded-full inline-block"
                      style={{
                        backgroundColor: STATUS_STYLE[r.status].bg,
                        color: STATUS_STYLE[r.status].color,
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
                      {r.status}
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

      {/* Add new Reward form */}
      <div
        className="rounded-xl p-6"
        style={{ backgroundColor: "#111B45", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <h2 className="text-white text-sm font-semibold mb-5 flex items-center gap-2">
                              <img src={addRewardIcon} alt="" className="w-4 h-4" />
          Add new Reward
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="md:col-span-2">
            <label className="text-white/50 text-xs font-medium block mb-1.5">Reward name</label>
            <input
              type="text"
              placeholder="e.g. iPhone 15"
              className="w-full text-white text-sm px-3.5 py-2.5 rounded-lg placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={fieldStyle()}
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-white/50 text-xs font-medium block mb-1.5">Description</label>
            <textarea
              rows={3}
              placeholder="Short game description..."
              className="w-full text-white text-sm px-3.5 py-2.5 rounded-lg placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              style={fieldStyle()}
            />
          </div>

          <div>
            <label className="text-white/50 text-xs font-medium block mb-1.5">Carrot cost</label>
            <input
              type="number"
              placeholder="e.g. 50000"
              className="w-full text-white text-sm px-3.5 py-2.5 rounded-lg placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={fieldStyle()}
            />
          </div>

          <div>
            <label className="text-white/50 text-xs font-medium block mb-1.5">Stock Quantity</label>
            <input
              type="number"
              placeholder="e.g. 10"
              className="w-full text-white text-sm px-3.5 py-2.5 rounded-lg placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={fieldStyle()}
            />
          </div>

          <div>
            <label className="text-white/50 text-xs font-medium block mb-1.5">Category</label>
            <select
              className="w-full text-white text-sm px-3.5 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={fieldStyle()}
            >
              <option>Electronics</option>
              <option>Gift Card</option>
              <option>In-game Item</option>
              <option>Merchandise</option>
            </select>
          </div>

          <div>
            <label className="text-white/50 text-xs font-medium block mb-1.5">Expires on</label>
            <input
              type="date"
              className="w-full text-white text-sm px-3.5 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={fieldStyle()}
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-white/50 text-xs font-medium block mb-1.5">Game thumbnail</label>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
              }}
              className="flex flex-col items-center justify-center gap-2 rounded-lg py-8 cursor-pointer transition"
              style={{
                border: `1px dashed ${dragOver ? "#DBE21C" : "rgba(255,255,255,0.2)"}`,
                backgroundColor: dragOver ? "rgba(219,226,28,0.05)" : "transparent",
              }}
            >
              <UploadCloud className="w-5 h-5 text-white/40" />
              <p className="text-white/40 text-xs">Drop image or click to browse</p>
            </div>
          </div>
        </div>

        <button
          className="w-full text-sm font-bold py-3 rounded-lg hover:brightness-95 transition"
          style={{ backgroundColor: "#DBE21C", color: "#1F2544" }}
        >
          Upload Game
        </button>
      </div>
    </AdminLayout>
  );
}