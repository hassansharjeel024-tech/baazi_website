import { useState } from "react";
import { PlusCircle, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import AdminLayout from "./AdminLayout";

const FONT = "'Montserrat', sans-serif";

const C = {
  card: "#091E46",
  border: "rgba(59,130,246,0.22)",
  bar: "#120D2A",
  headerLine: "#464833",
  rowLine: "rgba(59,130,246,0.12)",
  text: "#DEE2F5",
  primary: "#D0D0D0",
  grey: "#6B7280",
  lime: "#DBEE2A",
  yellow: "#DBE21C",
  navy: "#091E46",
  slate: "#26346E",
  pageBorder: "rgba(222,226,245,0.5)",
};

const STATS = [
  { label: "Total Requests", value: "248", color: "#FFFFFF" },
  { label: "Pending", value: "18", color: "#FF8D58" },
  { label: "Approved", value: "196", color: "#78FF47" },
  { label: "Rejected", value: "34", color: "#FF6161" },
];

const HEADERS = ["Request ID", "User", "Reward", "Carrots", "Submitted", "Status", "Actions"];

const REQUESTS = [
  { id: "#RDM-1041", user: "Mohsin Riaz", reward: "iPhone 15 Pro", carrots: "50,000", date: "18 Jul 2026", status: "Pending" },
  { id: "#RDM-1040", user: "NeonRacer", reward: "AirPods Pro", carrots: "20,000", date: "17 Jul 2026", status: "Pending" },
  { id: "#RDM-1039", user: "Ali Khan", reward: "$50 Gift Card", carrots: "10,000", date: "16 Jul 2026", status: "Shipped" },
  { id: "#RDM-1038", user: "Sara Malik", reward: "AirPods Pro", carrots: "20,000", date: "15 Jul 2026", status: "Delivered" },
  { id: "#RDM-1037", user: "VoidX", reward: "PS5 Controller", carrots: "30,000", date: "14 Jul 2026", status: "Rejected" },
];

const STATUS_STYLE = {
  Pending: { bg: "rgba(255,141,88,0.2)", color: "#FF8D58" },
  Shipped: { bg: "rgba(59,130,246,0.3)", color: "#BFD4FF" },
  Delivered: { bg: "rgba(120,255,71,0.2)", color: "#DBEE2A" },
  Rejected: { bg: "rgba(255,97,97,0.2)", color: "#FF6161" },
};

const ACTION_BTN = "h-7 px-3 rounded text-[13px] font-bold text-white transition hover:brightness-125";

function RowActions({ status }) {
  if (status === "Pending") {
    return (
      <div className="flex items-center gap-2">
        <button
          className="h-7 px-3 rounded text-[13px] font-bold transition hover:brightness-95"
          style={{ backgroundColor: C.lime, color: C.navy }}
        >
          Approve
        </button>
        <button className={ACTION_BTN} style={{ backgroundColor: C.slate }}>
          Reject
        </button>
      </div>
    );
  }
  if (status === "Shipped") {
    return (
      <button className={ACTION_BTN} style={{ backgroundColor: C.slate }}>
        Track
      </button>
    );
  }
  return (
    <button className={ACTION_BTN} style={{ backgroundColor: C.slate }}>
      View
    </button>
  );
}

export default function AdminRedemptions() {
  const [filter, setFilter] = useState("All Rewards");

  return (
    <AdminLayout>
      <div style={{ fontFamily: FONT }}>
        {/* Header */}
        <div className="flex items-start justify-between mb-10 flex-wrap gap-3">
          <div>
            <h1 className="text-[32px] leading-10 font-bold" style={{ color: C.primary }}>
              Redemptions
            </h1>
            <p className="text-base leading-6" style={{ color: C.primary }}>
              Review and process prize claims from the gaming ecosystem.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 w-[189px] px-6 py-2.5 rounded-full text-base font-bold transition hover:brightness-95"
            style={{
              backgroundColor: C.yellow,
              color: C.navy,
              boxShadow: "0 0 15px rgba(221,238,42,0.15)",
            }}
          >
            <PlusCircle className="w-5 h-5" />
            Add Reward
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 rounded-xl p-6 pb-9"
              style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            >
              <p
                className="text-base leading-6 font-medium uppercase tracking-[-0.8px]"
                style={{ color: C.primary }}
              >
                {s.label}
              </p>
              <p className="text-[32px] leading-[48px] font-bold" style={{ color: s.color }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Table card */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
        >
          {/* Filter */}
          <div className="p-6">
            <div className="relative inline-block">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none w-[145px] h-[38px] pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{
                  backgroundColor: C.bar,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                }}
              >
                <option>All Rewards</option>
                <option>iPhone 15 Pro</option>
                <option>AirPods Pro</option>
                <option>Gift Cards</option>
              </select>
              <ChevronDown
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: C.text }}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[860px]">
              <thead>
                <tr
                  className="h-12"
                  style={{ backgroundColor: C.bar, borderBottom: `1px solid ${C.headerLine}` }}
                >
                  {HEADERS.map((h) => (
                    <th
                      key={h}
                      className="px-3 first:pl-6 last:pr-6 text-[10px] leading-[15px] font-medium uppercase tracking-[1px] whitespace-nowrap"
                      style={{ color: C.grey }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {REQUESTS.map((r, i) => (
                  <tr
                    key={r.id}
                    className="h-[81px]"
                    style={i > 0 ? { borderTop: `1px solid ${C.rowLine}` } : undefined}
                  >
                    <td
                      className="px-3 first:pl-6 text-base font-medium whitespace-nowrap"
                      style={{ color: C.lime }}
                    >
                      {r.id}
                    </td>
                    <td
                      className="px-3 text-sm font-semibold whitespace-nowrap"
                      style={{ color: C.text }}
                    >
                      {r.user}
                    </td>
                    <td className="px-3 text-sm whitespace-nowrap" style={{ color: C.text }}>
                      {r.reward}
                    </td>
                    <td
                      className="px-3 text-sm font-medium whitespace-nowrap"
                      style={{ color: C.text }}
                    >
                      {r.carrots}
                    </td>
                    <td className="px-3 text-sm whitespace-nowrap" style={{ color: C.text }}>
                      {r.date}
                    </td>
                    <td className="px-3 whitespace-nowrap">
                      <span
                        className="inline-block px-2 py-[3px] rounded text-[10px] leading-[14px] font-bold tracking-[0.5px]"
                        style={{
                          backgroundColor: STATUS_STYLE[r.status].bg,
                          color: STATUS_STYLE[r.status].color,
                        }}
                      >
                        {r.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-3 last:pr-6 whitespace-nowrap">
                      <RowActions status={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

         {/* Footer / pagination */}
<div
  className="flex items-center justify-between flex-wrap gap-3 p-6"
  style={{ borderTop: `1px solid ${C.rowLine}` }}
>
  <span className="text-base leading-6 font-medium" style={{ color: C.primary }}>
    Showing 1-5 of 248 requests
  </span>
  <div className="flex items-center gap-2">
    <button
      className="w-8 h-8 rounded flex items-center justify-center transition hover:brightness-125"
      style={{ backgroundColor: C.bar, border: `1px solid ${C.headerLine}`, color: C.text }}
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
    {[1, 2, 3].map((n) => (
      <button
        key={n}
        className="w-8 h-8 rounded text-sm font-semibold transition hover:brightness-125"
        style={
          n === 1
            ? { backgroundColor: C.lime, border: `1px solid ${C.lime}`, color: C.navy }
            : { backgroundColor: C.bar, border: `1px solid ${C.headerLine}`, color: C.text }
        }
      >
        {n}
      </button>
    ))}
    <button
      className="w-8 h-8 rounded flex items-center justify-center transition hover:brightness-125"
      style={{ backgroundColor: C.bar, border: `1px solid ${C.headerLine}`, color: C.text }}
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
</div>
        </div>
      </div>
    </AdminLayout>
  );
}