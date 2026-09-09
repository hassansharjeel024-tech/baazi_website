import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import LoginModal from "./LoginModal";

function Navbar({ activeView, onNavigate }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("features");

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

  const sectionKeys = [
    "features",
    "how-it-works",
    "games",
    "rewards",
    "referral",
    "testimonials",
    "faqs",
  ];

  useEffect(() => {
    if (activeView !== "home") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    sectionKeys.forEach((key) => {
      const el = document.getElementById(key);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeView]);

  const NAVBAR_HEIGHT = 88;

  const handleNavClick = (key) => {
    setIsMobileMenuOpen(false);

    if (key === "leaderboard") {
      onNavigate("leaderboard");
      return;
    }
    if (key === "coins") {
      onNavigate("coins");
      return;
    }

    onNavigate("home");
    setActiveSection(key);

    setTimeout(() => {
      const el = document.getElementById(key);
      if (el) {
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };

  const isActive = (key) => {
    if (key === "leaderboard" || key === "coins") {
      return activeView === key;
    }
    return activeView === "home" && activeSection === key;
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 h-[88px] px-6 flex items-center justify-between"
        style={{
          background: "linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)",
        }}
      >
        <img
          src={logo}
          alt="Baazi"
          className="h-10 w-auto cursor-pointer 2xl:w-45.75 2xl:h-23"
          onClick={() => {
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
          }}
        />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 text-white text-xs font-bold uppercase tracking-wide 2xl:w-232.75 2xl:h-5 2xl:justify-between 2xl:gap-0">
          {navLinks.map((link) => (
            <li
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`cursor-pointer hover:text-yellow-300 transition-colors ${
                isActive(link.key) ? "text-yellow-300" : ""
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Desktop login button */}
        <button
          onClick={() => setIsLoginOpen(true)}
          className="hidden lg:block text-purple-900 font-bold px-5 py-2 rounded-full transition-colors 2xl:w-45 2xl:h-15.5 2xl:rounded-10"
          style={{ backgroundColor: "#DBE21C" }}
        >
          + LOGIN
        </button>

        {/* Mobile hamburger icon */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed top-[88px] left-0 w-full z-40 flex flex-col px-6 py-6 gap-5"
          style={{
            background: "linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)",
          }}
        >
          {navLinks.map((link) => (
            <span
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`cursor-pointer text-white text-sm font-bold uppercase tracking-wide ${
                isActive(link.key) ? "text-yellow-300" : ""
              }`}
            >
              {link.label}
            </span>
          ))}

          <button
            onClick={() => {
              setIsLoginOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="text-purple-900 font-bold px-5 py-3 rounded-full mt-2"
            style={{ backgroundColor: "#DBE21C" }}
          >
            + LOGIN
          </button>
        </div>
      )}

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default Navbar;