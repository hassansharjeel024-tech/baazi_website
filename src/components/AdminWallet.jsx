import { Download, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import AdminLayout from "./AdminLayout";
import avatar from "../assets/neonracer-avatar.png";

const STATS = [
  { label: "Total Carrots Distributed", value: "2.14M", noteColor: "#DBEE2A", note: "All users, all time" },
  { label: "Total Coins Distributed", value: "841K", noteColor: "#B4C5FF", note: "Purchased + Free" },
  { label: "Carrots Redeemed", value: "980K", noteColor: "#FFB4AB", note: "Via rewards shop" },
  { label: "Users with Transactions", value: "4,829", noteColor: "#DEE2F5", note: "Active all time" },
  { label: "Coin Purchases Revenue", value: "$1800", noteColor: "#DBEE2A", note: "This Month" },
];

const CARROT_DIST = [
  { label: "Game target achieved", value: "940K", pct: 75, color: "#DBEE2A" },
  { label: "Daily login / streak", value: "420K", pct: 45, color: "#B4C5FF" },
  { label: "Referral bonus", value: "310K", pct: 32, color: "#DDB8FF" },
];

const COIN_DIST = [
  { label: "Bundle purchase", value: "620K", pct: 65, color: "#0053DB" },
  { label: "Daily free coins", value: "118K", pct: 18, color: "#8C2AE3" },
  { label: "Streak bonus", value: "62K", pct: 12, color: "#1B3A7D" },
];

const TOP_BUNDLES = [
  { name: "Mega Pack", price: "$9.99", count: "4,102" },
  { name: "Pro Pack", price: "$4.99", count: "2,891" },
  { name: "StarterPack", price: "$1.99", count: "5,240" },
];

const EVENTS = [
  { txn: "CRT-3041", user: "NeonRacer", uid: "USR-00019", date: "19 Jul 2026, 10:02", type: "Game Target", desc: "Hit 3 killstreaks — Star Blaster · Daily target", amount: "+250", balance: "12,800" },
  { txn: "CRT-3041", user: "NeonRacer", uid: "USR-00019", date: "19 Jul 2026, 10:02", type: "Daily Login", desc: "Hit 3 killstreaks — Star Blaster · Daily target", amount: "+250", balance: "12,800" },
  { txn: "CRT-3041", user: "NeonRacer", uid: "USR-00019", date: "19 Jul 2026, 10:02", type: "Redemption", desc: "Hit 3 killstreaks — Star Blaster · Daily target", amount: "+250", balance: "12,800" },
  { txn: "CRT-3041", user: "NeonRacer", uid: "USR-00019", date: "19 Jul 2026, 10:02", type: "Level-up Reward", desc: "Hit 3 killstreaks — Star Blaster · Daily target", amount: "+250", balance: "12,800" },
];

const BORDER_COLOR = "rgba(59,130,246,0.22)";
const ROW_BORDER = "rgba(59,130,246,0.12)";
const CARD_STYLE = { backgroundColor: "#091E46", borderColor: BORDER_COLOR };

function DistBar({ label, value, pct, color }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between font-['Montserrat'] font-medium text-xs leading-4 tracking-[0.6px]">
        <span style={{ color: "#D0D0D0" }}>{label}</span>
        <span style={{ color: "#DEE2F5" }}>{value}</span>
      </div>
      <div className="w-full h-3 rounded-full" style={{ backgroundColor: "#091E46" }}>
        <div className="h-3 rounded-[4px]" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function Dropdown({ label }) {
  return (
    <div className="relative inline-block">
      <select
        defaultValue={label}
        className="appearance-none font-['Montserrat'] font-normal text-sm leading-5 pl-4 pr-10 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
        style={{ backgroundColor: "#091E46", borderColor: BORDER_COLOR, color: "#D0D0D0" }}
      >
        <option>{label}</option>
      </select>
      <ChevronDown
        className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "#D0D0D0" }}
      />
    </div>
  );
}

const TH = "py-6 px-4 font-['Montserrat'] font-medium text-xs leading-4 tracking-[0.6px] uppercase align-middle";
const TD = "py-4 px-4 align-middle";
const PAGE_BTN =
  "h-[34px] min-w-[30px] px-3 rounded-[4px] border flex items-center justify-center font-['Montserrat'] font-medium text-xs transition";

export default function AdminWallet() {
  return (
    <AdminLayout>
      <div className="flex items-start justify-between mb-7 flex-wrap gap-3">
        <div>
          <h1 className="font-['Montserrat'] font-bold text-[32px] leading-[40px]" style={{ color: "#D0D0D0" }}>
            Wallet
          </h1>
          <p className="font-['Montserrat'] font-normal text-base leading-6" style={{ color: "#D0D0D0" }}>
            Centralized management for in-game currency and transaction audits.
          </p>
        </div>
        <button
          className="flex items-center w-[156px] h-[46px] pl-3 gap-[17.62px] rounded-lg border hover:brightness-110 transition"
          style={{ backgroundColor: "#1F2D63", borderColor: BORDER_COLOR, color: "#DEE2F5" }}
        >
          <Download className="w-4 h-4 shrink-0" />
          <span className="font-['Plus_Jakarta_Sans'] font-semibold text-base leading-6 whitespace-nowrap">
            Export Data
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mb-10">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1 rounded-xl border px-6 pt-6 pb-11 min-h-[207px]"
            style={CARD_STYLE}
          >
            <p
              className="font-['Montserrat'] font-medium text-xs leading-4 tracking-[0.6px] uppercase min-h-[32px]"
              style={{ color: "#6B7280" }}
            >
              {s.label}
            </p>
            <p className="font-['Montserrat'] font-bold text-[37px] leading-[48px] text-white">
              {s.value}
            </p>
            <div className="border-t pt-[10px]" style={{ borderColor: BORDER_COLOR }}>
              <p className="font-['Montserrat'] font-medium text-sm leading-5" style={{ color: s.noteColor }}>
                {s.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div
          className="flex flex-col gap-8 rounded-2xl border px-8 pt-[31.5px] pb-8 lg:min-h-[352px]"
          style={CARD_STYLE}
        >
          <h2 className="font-['Montserrat'] font-semibold text-lg leading-6" style={{ color: "#D0D0D0" }}>
            Carrot distribution by type
          </h2>
          {CARROT_DIST.map((d) => (
            <DistBar key={d.label} {...d} />
          ))}
        </div>

        <div
          className="flex flex-col gap-8 rounded-2xl border px-8 pt-[31.5px] pb-8 lg:min-h-[352px]"
          style={CARD_STYLE}
        >
          <h2 className="font-['Montserrat'] font-semibold text-lg leading-6" style={{ color: "#D0D0D0" }}>
            Coin distribution by type
          </h2>
          {COIN_DIST.map((d) => (
            <DistBar key={d.label} {...d} />
          ))}
        </div>

        <div
          className="flex flex-col gap-6 rounded-2xl border p-8 lg:min-h-[352px]"
          style={CARD_STYLE}
        >
          <h2 className="font-['Montserrat'] font-semibold text-lg leading-6" style={{ color: "#D0D0D0" }}>
            Top Bundles
          </h2>
          <div className="flex flex-col gap-4">
            {TOP_BUNDLES.map((b) => (
              <div
                key={b.name}
                className="flex items-center justify-between rounded-xl border p-3"
                style={{ borderColor: BORDER_COLOR }}
              >
                <div>
                  <p className="font-['Montserrat'] font-bold text-sm leading-5" style={{ color: "#D0D0D0" }}>
                    {b.name}
                  </p>
                  <p
                    className="font-['Montserrat'] font-medium text-xs leading-4 tracking-[0.6px]"
                    style={{ color: "#6B7280" }}
                  >
                    {b.price}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-['Montserrat'] font-bold text-sm leading-5" style={{ color: "#DBEE2A" }}>
                    {b.count}
                  </p>
                  <p
                    className="font-['Montserrat'] font-medium text-[10px] leading-4 tracking-[0.6px]"
                    style={{ color: "rgba(107,114,128,0.4)" }}
                  >
                    SOLD
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border overflow-hidden" style={CARD_STYLE}>
        <div
          className="flex items-center justify-between flex-wrap gap-3 p-6 border-b"
          style={{ borderColor: BORDER_COLOR }}
        >
          <h2 className="font-['Montserrat'] font-bold text-[32px] leading-[40px]" style={{ color: "#D0D0D0" }}>
            Recent Economy Events
          </h2>
          <div className="flex items-center gap-4">
            <Dropdown label="All types" />
            <Dropdown label="All time" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-left min-w-[920px]">
            <colgroup>
              <col style={{ width: 94 }} />
              <col style={{ width: 169 }} />
              <col style={{ width: 102 }} />
              <col style={{ width: 142 }} />
              <col style={{ width: 211 }} />
              <col style={{ width: 91 }} />
              <col style={{ width: 111 }} />
            </colgroup>
            <thead>
              <tr style={{ backgroundColor: "#120D2A", borderBottom: `1px solid ${BORDER_COLOR}`, color: "#D0D0D0" }}>
                <th className={`${TH} pl-6 pr-2`}>Txn ID</th>
                <th className={TH}>User</th>
                <th className={TH}>
                  <span className="block max-w-[50px]">Date &amp; Time</span>
                </th>
                <th className={TH}>Type</th>
                <th className={TH}>Description</th>
                <th className={`${TH} text-right`}>Amount</th>
                <th className={`${TH} text-right pr-6`}>Balance</th>
              </tr>
            </thead>
            <tbody>
              {EVENTS.map((e, i) => (
                <tr
                  key={i}
                  style={i < EVENTS.length - 1 ? { borderBottom: `1px solid ${ROW_BORDER}` } : undefined}
                >
                  <td
                    className={`${TD} pl-6 pr-2 whitespace-nowrap font-['Montserrat'] font-medium text-xs leading-4 tracking-[0.6px]`}
                    style={{ color: "#6B7280" }}
                  >
                    {e.txn}
                  </td>
                  <td className={TD}>
                    <div className="flex items-center gap-3">
                      <img src={avatar} alt={e.user} className="w-8 h-8 rounded-full shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-['Montserrat'] font-bold text-sm leading-5" style={{ color: "#D0D0D0" }}>
                          {e.user}
                        </span>
                        <span className="font-['Montserrat'] font-normal text-[10px] leading-[15px]" style={{ color: "#6B7280" }}>
                          {e.uid}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className={TD}>
                    <p className="max-w-[54px] font-['Montserrat'] font-normal text-sm leading-5" style={{ color: "#6B7280" }}>
                      {e.date}
                    </p>
                  </td>
                  <td className={TD}>
                    <span
                      className="inline-block rounded-full border px-[10px] py-[2px] font-['Montserrat'] font-bold text-[10px] leading-[15px] uppercase whitespace-nowrap text-center"
                      style={{
                        backgroundColor: "rgba(219,238,42,0.10)",
                        borderColor: "rgba(219,238,42,0.20)",
                        color: "#DBE21C",
                      }}
                    >
                      {e.type}
                    </span>
                  </td>
                  <td className={TD}>
                    <p className="max-w-[128px] font-['Montserrat'] font-normal text-sm leading-5" style={{ color: "#6B7280" }}>
                      {e.desc}
                    </p>
                  </td>
                  <td
                    className={`${TD} text-right font-['Montserrat'] font-bold text-base leading-6`}
                    style={{ color: "#DBE21C" }}
                  >
                    {e.amount}
                  </td>
                  <td
                    className={`${TD} pr-6 text-right font-['Montserrat'] font-medium text-xs leading-4 tracking-[0.6px]`}
                    style={{ color: "#D0D0D0" }}
                  >
                    {e.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="flex items-center justify-between flex-wrap gap-3 p-6 border-t"
          style={{ borderColor: BORDER_COLOR }}
        >
          <span
            className="font-['Montserrat'] font-medium text-base leading-4 tracking-[0.6px]"
            style={{ color: "#6B7280" }}
          >
            Showing 4 of 24,912 events
          </span>
          <div className="flex items-center gap-2">
            <button className={PAGE_BTN} style={{ backgroundColor: "#091E46", borderColor: "#303443", color: "#6B7280" }}>
              <ChevronLeft className="w-3 h-3" />
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={PAGE_BTN}
                style={
                  n === 1
                    ? { backgroundColor: "#DBEE2A", borderColor: "#DBEE2A", color: "#091E46", fontWeight: 700 }
                    : { backgroundColor: "#091E46", borderColor: "#303443", color: "#6B7280" }
                }
              >
                {n}
              </button>
            ))}
            <button className={PAGE_BTN} style={{ backgroundColor: "#091E46", borderColor: "#303443", color: "#6B7280" }}>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}