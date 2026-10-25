const STATUS_LABELS = {
  1: "Pending",
  2: "Succeeded",
  3: "Failed",
  4: "Cancelled",
  5: "Refunded",
};

export function formatPaymentStatus(status) {
  if (STATUS_LABELS[status]) return STATUS_LABELS[status];
  if (status === 0 || status === "0") return "Unknown";
  return status == null ? "—" : String(status);
}

export function formatMoney(amount, currency) {
  const code = (currency || "usd").toUpperCase();
  const value = Number(amount);
  if (Number.isNaN(value)) return "—";
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: code,
    }).format(value);
  } catch {
    return `${value} ${code}`;
  }
}

export function formatPaymentDate(iso) {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function formatCoinCount(total) {
  const n = Number(total);
  if (Number.isNaN(n)) return "—";
  return `${n.toLocaleString()} Coins`;
}
