import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import LoginScreen from "./components/LoginScreen";
import AdminDashboard from "./components/AdminDashboard";
import AdminUsers from "./components/AdminUsers";
import AdminUserProfile from "./components/AdminUserProfile";
import AdminGames from "./components/AdminGames";
import AdminRewards from "./components/AdminRewards";
import AdminRedemptions from "./components/AdminRedemptions";
import AdminWallet from "./components/AdminWallet";
import AdminReferrals from "./components/AdminReferrals";

function MainSite() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div>
      <Navbar activeView={activeView} onNavigate={setActiveView} />

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

        {activeView === "coins" && <CoinShop />}

        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/users/:id" element={<AdminUserProfile />} />
      <Route path="/admin/games" element={<AdminGames />} />
      <Route path="/admin/rewards" element={<AdminRewards />} />
      <Route path="/admin/redemptions" element={<AdminRedemptions />} />
      <Route path="/admin/wallet" element={<AdminWallet />} />
      <Route path="/admin/referrals" element={<AdminReferrals />} />
      <Route path="/admin/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App; 