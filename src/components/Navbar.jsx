import { useState } from "react";
import logo from "../assets/logo.png";
import LoginModal from "./LoginModal";

function Navbar({ activeView, onNavigate }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navLinks = [
    { label: "Features", key: "features" },
    { label: "How It Works", key: "how-it-works" },
    { label: "Games", key: "games" },
    { label: "Rewards", key: "rewards" },
    { label: "Referral", key: "referral" },
    { label: "Leaderboard", key: "leaderboard" },
    { label: "Coins", key: "coins" },
    { label: "Testimonials", key: "testimonials" },
    { label: "FAQs", key: "faqs" },
  ];

  const handleNavClick = (key) => {
    if (key === "leaderboard") {
      onNavigate("leaderboard");
      return;
    }
    if (key === "coins") {
      onNavigate("coins");
      return;
    }

    onNavigate("home");

    setTimeout(() => {
      const el = document.getElementById(key);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      <nav
        className="px-6 py-4 flex items-center justify-between"
        style={{ background: "linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)" }}
      >
        <img
          src={logo}
          alt="Baazi"
          className="h-10 w-auto cursor-pointer 2xl:w-45.75 2xl:h-23"
          onClick={() => onNavigate("home")}
        />

        <ul className="hidden lg:flex items-center gap-6 text-white text-xs font-bold uppercase tracking-wide 2xl:w-232.75 2xl:h-5 2xl:justify-between 2xl:gap-0">
          {navLinks.map((link) => (
            <li
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`cursor-pointer hover:text-yellow-300 transition-colors ${
                activeView === link.key ? "text-yellow-300" : ""
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsLoginOpen(true)}
          className="text-purple-900 font-bold px-5 py-2 rounded-full transition-colors 2xl:w-45 2xl:h-15.5 2xl:rounded-10"
          style={{ backgroundColor: "#DBE21C" }}
        >
          + LOGIN
        </button>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default Navbar;