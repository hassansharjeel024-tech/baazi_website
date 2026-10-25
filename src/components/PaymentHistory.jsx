import { useCallback, useEffect, useState } from "react";
import { Loader2, RefreshCw } from "lucide-react";
import { listPayments } from "../services/paymentService";
import { isAuthenticated } from "../services/authService";
import {
  formatCoinCount,
  formatMoney,
  formatPaymentDate,
  formatPaymentStatus,
} from "../utils/paymentFormat";

export default function PaymentHistory({ refreshKey = 0, onRequireLogin }) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(() => isAuthenticated());
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!isAuthenticated()) {
      setPayments([]);
      setLoading(false);
      setError("");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const rows = await listPayments();
      setPayments(rows);
    } catch (err) {
      if (err?.status === 401) {
        onRequireLogin?.();
      }
      setError(err?.message || "Could not load payment history.");
      setPayments([]);
    } finally {
      setLoading(false);
    }
  }, [onRequireLogin]);

  useEffect(() => {
    void load();
  }, [load, refreshKey]);

  return (
    <section className="bg-white px-6 py-16 border-t border-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="uppercase font-extrabold text-2xl md:text-3xl text-black">
            Payment History
          </h2>
          <button
            type="button"
            onClick={load}
            disabled={loading || !isAuthenticated()}
            className="inline-flex items-center justify-center gap-2 self-start sm:self-auto bg-purple-100 text-purple-900 font-bold text-sm px-4 py-2 rounded-full hover:bg-purple-200 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {!isAuthenticated() && (
          <div className="rounded-xl border border-dashed border-purple-200 bg-purple-50 px-6 py-10 text-center">
            <p className="text-purple-900 font-medium mb-4">
              Sign in to view your payment history.
            </p>
            <button
              type="button"
              onClick={() => onRequireLogin?.()}
              className="bg-yellow-400 text-purple-900 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-colors"
            >
              Log In
            </button>
          </div>
        )}

        {isAuthenticated() && loading && (
          <div className="flex items-center justify-center gap-2 py-16 text-purple-700">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm font-medium">Loading payments…</span>
          </div>
        )}

        {isAuthenticated() && !loading && error && (
          <div className="rounded-xl bg-red-50 border border-red-100 px-6 py-8 text-center">
            <p className="text-red-600 text-sm mb-4">{error}</p>
            <button
              type="button"
              onClick={load}
              className="bg-yellow-400 text-purple-900 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {isAuthenticated() && !loading && !error && payments.length === 0 && (
          <p className="text-center text-gray-500 py-12 text-sm">
            No payments yet. Purchase a coin pack to see it here.
          </p>
        )}

        {isAuthenticated() && !loading && !error && payments.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-purple-50 text-purple-900 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3 font-bold">Package</th>
                  <th className="px-4 py-3 font-bold">Coins</th>
                  <th className="px-4 py-3 font-bold">Amount</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                  <th className="px-4 py-3 font-bold">Provider</th>
                  <th className="px-4 py-3 font-bold">Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((row) => {
                  const title =
                    row?.coin_package?.title ||
                    (row?.coin_package_id != null
                      ? `Package #${row.coin_package_id}`
                      : "—");
                  const coins =
                    row?.coin_package?.total_coin ?? row?.total_coin;
                  return (
                    <tr
                      key={row.id}
                      className="border-t border-gray-100 text-gray-700"
                    >
                      <td className="px-4 py-3 font-medium text-purple-900">
                        {title}
                      </td>
                      <td className="px-4 py-3">{formatCoinCount(coins)}</td>
                      <td className="px-4 py-3">
                        {formatMoney(row.amount, row.currency)}
                      </td>
                      <td className="px-4 py-3">
                        {formatPaymentStatus(row.status)}
                      </td>
                      <td className="px-4 py-3 capitalize">
                        {row.provider || "—"}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {formatPaymentDate(row.created_at)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
