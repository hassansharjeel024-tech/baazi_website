import { useCallback, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import heroBg from "../assets/hero-bg.png";
import coinStack from "../assets/coin-stack.png";
import LoginModal from "./LoginModal";
import PaymentHistory from "./PaymentHistory";
import { listCoinPackages } from "../services/coinPackageService";
import {
  createCheckoutSession,
  isValidStripeCheckoutUrl,
} from "../services/paymentService";
import { isAuthenticated } from "../services/authService";
import { formatMoney } from "../utils/paymentFormat";

const LIME = "#DBE21C";
const HERO_PURPLE = "#570C92";
const PACKS_BG = "#F3F0F8";
const CARD_TITLE = "#0A1F44";
const COIN_NUM = "#6A2B8D";
const COIN_LABEL = "#8B8B9E";

/** Design-preview only (?design=1) — matches Figma pack grid when API requires auth */
const DESIGN_PREVIEW_PACKS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Starter Pack",
  image_url: null,
  currency: "usd",
  key: "starter_pack",
  total_coin: 500,
  price: 4.99,
  bonus_percentage: 0,
}));

function buildCheckoutReturnUrls() {
  const url = new URL(window.location.href);
  url.searchParams.set("view", "coins");

  const success = new URL(url);
  success.searchParams.set("checkout", "success");

  const cancel = new URL(url);
  cancel.searchParams.set("checkout", "cancel");

  return {
    successUrl: success.toString(),
    cancelUrl: cancel.toString(),
  };
}

function packageDisplayTitle(title) {
  if (!title) return "Buy Coin Pack";
  return /^buy\s/i.test(title) ? title : `Buy ${title}`;
}

function PackageImage({ title }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center"
      style={{ width: 120, height: 120,  }}
    >
      {/* Soft lavender glow disk behind coin art */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 m-auto rounded-full"
        style={{
          width: 100,
          height: 100,
          background:
            "radial-gradient(circle, rgba(232,222,250,0.95) 0%, rgba(232,222,250,0.55) 55%, rgba(232,222,250,0) 72%)",
        }}
      />
      <img
        src={coinStack}
        alt={title || "Coins"}
        className="relative z-10 object-contain"
        style={{ width: 88, height: 78 }}
      />
    </div>
  );
}

function CoinCountLabel({ total }) {
  const n = Number(total);
  if (Number.isNaN(n)) return <span style={{ color: COIN_LABEL }}>—</span>;
  return (
    <>
      <span style={{ color: COIN_NUM, fontWeight: 600 }}>
        {n.toLocaleString()}
      </span>{" "}
      <span style={{ color: COIN_LABEL, fontWeight: 400 }}>Coins</span>
    </>
  );
}

function CoinShop({ checkoutReturn = null }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [checkoutError, setCheckoutError] = useState("");
  const [buyingId, setBuyingId] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [historyKey, setHistoryKey] = useState(() =>
    checkoutReturn === "success" ? 1 : 0
  );
  const [pendingPackageId, setPendingPackageId] = useState(null);

  const checkoutNotice =
    checkoutReturn === "success"
      ? "Checkout completed. Payment status is confirmed by the server — check history below for the latest result."
      : checkoutReturn === "cancel"
        ? "Checkout was cancelled. No charge was completed."
        : "";

  const loadPackages = useCallback(async () => {
    const designPreview =
      import.meta.env.DEV &&
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("design") === "1";

    if (designPreview) {
      setPackages(DESIGN_PREVIEW_PACKS);
      setLoading(false);
      setError("");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const rows = await listCoinPackages();
      setPackages(rows);
    } catch (err) {
      if (err?.status === 401) {
        setError("Sign in to view and purchase coin packs.");
      } else {
        setError(err?.message || "Could not load coin packages.");
      }
      setPackages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPackages();
  }, [loadPackages]);

  async function startCheckout(pack) {
    setCheckoutError("");

    if (!isAuthenticated()) {
      setPendingPackageId(pack.id);
      setIsLoginOpen(true);
      return;
    }

    if (buyingId != null) return;

    setBuyingId(pack.id);
    try {
      const { successUrl, cancelUrl } = buildCheckoutReturnUrls();
      const session = await createCheckoutSession({
        coinPackageId: pack.id,
        successUrl,
        cancelUrl,
      });

      const checkoutUrl = session?.checkout_url;
      if (!isValidStripeCheckoutUrl(checkoutUrl)) {
        throw {
          message:
            "Checkout session was created but no valid Stripe checkout URL was returned.",
        };
      }

      window.location.assign(checkoutUrl);
    } catch (err) {
      if (err?.status === 401) {
        setPendingPackageId(pack.id);
        setIsLoginOpen(true);
      } else {
        setCheckoutError(
          err?.message || "Could not start checkout. Please try again."
        );
      }
      setBuyingId(null);
    }
  }

  async function handleLoginSuccess() {
    setHistoryKey((k) => k + 1);
    const packId = pendingPackageId;
    setPendingPackageId(null);
    await loadPackages();
    if (packId == null) return;
    // Find from latest fetch via a fresh call path — packages in closure may lag
    try {
      const rows = await listCoinPackages();
      const pack = rows.find((p) => p.id === packId);
      if (pack) await startCheckout(pack);
    } catch {
      /* pack list / checkout can be retried from UI */
    }
  }

  return (
    <div className="w-full">
      {/* Hero — reference: purple field + lime outline badge + lime title */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          backgroundColor: HERO_PURPLE,
          minHeight: 460,
          paddingTop: 88,
          paddingBottom: 96,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            // opacity: 0.55,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 45%, rgba(140,60,220,0.45) 0%, rgba(87,12,146,0.75) 55%, rgba(60,8,100,0.92) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <span
            className="mb-5 inline-block uppercase"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.14em",
              color: LIME,
              border: `1.5px solid ${LIME}`,
              borderRadius: 9999,
              padding: "7px 18px",
              backgroundColor: "transparent",
            }}
          >
            Limited Time Offer
          </span>

          <h1
            className="mb-4 uppercase"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              color: LIME,
            }}
          >
            The Royale Special
          </h1>

          <p
            className="mx-auto mb-8 max-w-xl"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 15,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Double your loot on your first purchase this season. Gear up for
            the ultimate arcade experience.
          </p>

          <button
            type="button"
            className="uppercase transition-opacity hover:opacity-90"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.04em",
              backgroundColor: LIME,
              color: "#1A1028",
              borderRadius: 9999,
              padding: "14px 28px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              document
                .getElementById("coin-packs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Claim Offer Now
          </button>
        </div>
      </section>

      {/* Coin Packs */}
      <section
        id="coin-packs"
        style={{
          backgroundColor: PACKS_BG,
          paddingTop: 64,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <h2
          className="mb-10 text-center uppercase"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            letterSpacing: "0.04em",
            color: "#2A1848",
          }}
        >
          Coin Packs
        </h2>

        {checkoutNotice && (
          <p
            className="mx-auto mb-6 max-w-3xl rounded-xl px-4 py-3 text-center text-sm"
            style={{
              color: CARD_TITLE,
              backgroundColor: "#EDE6FA",
              border: "1px solid #D4C6F0",
            }}
          >
            {checkoutNotice}
          </p>
        )}

        {checkoutError && (
          <p className="mx-auto mb-6 max-w-3xl rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
            {checkoutError}
          </p>
        )}

        {loading && (
          <div
            className="flex items-center justify-center gap-2 py-16"
            style={{ color: CARD_TITLE }}
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm font-medium">Loading coin packs…</span>
          </div>
        )}

        {!loading && error && (
          <div className="mx-auto max-w-md py-12 text-center">
            <p className="mb-4 text-sm" style={{ color: CARD_TITLE }}>
              {error}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/sign in/i.test(error) && (
                <button
                  type="button"
                  onClick={() => setIsLoginOpen(true)}
                  className="rounded-full px-5 py-2.5 text-sm font-bold"
                  style={{ backgroundColor: LIME, color: "#1A1028" }}
                >
                  Log In
                </button>
              )}
              <button
                type="button"
                onClick={loadPackages}
                className="rounded-full px-5 py-2.5 text-sm font-bold"
                style={{
                  backgroundColor: /sign in/i.test(error) ? "#EDE6FA" : LIME,
                  color: "#1A1028",
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && packages.length === 0 && (
          <p className="py-12 text-center text-sm text-gray-500">
            No coin packages are available right now.
          </p>
        )}

        {!loading && !error && packages.length > 0 && (
          <div
            className="mx-auto grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
            style={{ maxWidth: 1120 }}
          >
            {packages.map((pack) => {
              const bonus = Number(pack.bonus_percentage) || 0;
              const isBuying = buyingId === pack.id;
              const title = packageDisplayTitle(pack.title);

              return (
                <div
                  key={pack.id}
                  className="flex w-full flex-col bg-white"
                  style={{
                    borderRadius: 10,
                    boxShadow: "0 6px 20px rgba(45, 20, 80, 0.07)",
                    border: "1px solid #E4DCF2",
                    padding: "28px 22px 22px",
                  }}
                >
                  <div className="flex flex-1 flex-col items-center text-center">
                    <PackageImage title={title} />

                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        lineHeight: 1.3,
                        color: CARD_TITLE,
                        // marginBottom: 6,
                      }}
                    >
                      {title}
                    </p>

                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 13,
                        lineHeight: 1.3,
                        // marginBottom: bonus > 0 ? 6 : 0,
                      }}
                    >
                      <CoinCountLabel total={pack.total_coin} />
                    </p>

                    {bonus > 0 && (
                      <p
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 11,
                          color: "#059669",
                          fontWeight: 600,
                        }}
                      >
                        +{bonus}% bonus
                      </p>
                    )}
                  </div>

                  {/* Inset pill price button — matches card reference */}
                  <button
                    type="button"
                    disabled={buyingId != null}
                    onClick={() => startCheckout(pack)}
                    className="mt-6 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      backgroundColor: LIME,
                      color: CARD_TITLE,
                      minHeight: 48,
                      border: "none",
                      cursor: buyingId != null ? "not-allowed" : "pointer",
                      borderRadius: 9999,
                      padding: "12px 16px",
                    }}
                  >
                    {isBuying ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Starting…
                      </>
                    ) : (
                      formatMoney(pack.price, pack.currency)
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <PaymentHistory
        refreshKey={historyKey}
        onRequireLogin={() => setIsLoginOpen(true)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => {
          setIsLoginOpen(false);
          setPendingPackageId(null);
        }}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default CoinShop;
