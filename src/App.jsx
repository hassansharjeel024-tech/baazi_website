import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import GamesSection from "./components/GamesSection";
import HowItWorks from "./components/HowItWorks";
import RewardsShowcase from "./components/RewardsShowcase";
import Referral from "./components/Referral";
import Leaderboard from "./components/Leaderboard";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GlobalRankings from "./components/GlobalRankings";
import CoinShop from "./components/CoinShop";

function readCheckoutReturnFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");
  const checkout = params.get("checkout");
  const initialView =
    view === "coins" || checkout
      ? "coins"
      : view === "leaderboard"
        ? "leaderboard"
        : "home";
  return {
    initialView,
    checkoutReturn:
      checkout === "success" || checkout === "cancel" ? checkout : null,
  };
}

function clearCheckoutQueryParams() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has("checkout") && !url.searchParams.has("view")) {
    return;
  }
  url.searchParams.delete("checkout");
  url.searchParams.delete("view");
  const next = url.pathname + url.search + url.hash;
  window.history.replaceState({}, "", next || "/");
}

function App() {
  const [boot] = useState(readCheckoutReturnFromUrl);
  const [activeView, setActiveView] = useState(boot.initialView);
  const [checkoutReturn, setCheckoutReturn] = useState(boot.checkoutReturn);

  useEffect(() => {
    if (boot.checkoutReturn) {
      clearCheckoutQueryParams();
    }
  }, [boot.checkoutReturn]);

  function handleNavigate(view) {
    setActiveView(view);
    if (view !== "coins") {
      setCheckoutReturn(null);
    }
  }

  return (
    <div>
      <Navbar activeView={activeView} onNavigate={handleNavigate} />

      <div className="pt-22">
        {activeView === "home" && (
          <>
            <Hero />
            <Features />
            <GamesSection />
            <HowItWorks />
            <RewardsShowcase />
            <Referral />
            <Leaderboard />
            <Testimonials />
            <FAQ />
          </>
        )}

        {activeView === "leaderboard" && <GlobalRankings />}

        {activeView === "coins" && (
          <CoinShop checkoutReturn={checkoutReturn} />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
