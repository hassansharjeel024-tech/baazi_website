import { useState } from "react";
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

function App() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div>
      <Navbar activeView={activeView} onNavigate={setActiveView} />

      <div className="pt-[88px]">
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

        {activeView === "coins" && <CoinShop />}

        <Footer />
      </div>
    </div>
  );
}

export default App;