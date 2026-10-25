import { useState, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";
import logo from "../assets/logo.png";
import LoginModal from "./LoginModal";
import { getCurrentUser, isAuthenticated, logout } from "../services/authService";

// #570C92 par 20% black = #460A75. Isay halka/gehra karna ho to sirf yeh ek value badlein.
const NAVBAR_BG = "#460A75";

const authButtonStyle = {
  backgroundColor: "#DBE21C",
  color: "#141414",
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 700,
};

function Navbar({ activeView, onNavigate }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("features");
  const [user, setUser] = useState(() =>
    isAuthenticated() ? getCurrentUser() : null
  );

  function handleAuthSuccess() {
    setUser(getCurrentUser());
  }

  function handleLogout() {
    logout();
    setUser(null);
    setIsMobileMenuOpen(false);
  }

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

  // lg (1024px+) par navbar 72px hai, us se chhoti screens par 64px — App.jsx ka pt bhi yahi hai
  const getNavbarHeight = () => (window.innerWidth >= 1024 ? 72 : 64);

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
          el.getBoundingClientRect().top +
          window.pageYOffset -
          getNavbarHeight();
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
        className="fixed top-0 left-0 w-full z-50 shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
        style={{ backgroundColor: NAVBAR_BG }}
      >
        <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 sm:px-6 lg:h-18 lg:px-8 2xl:px-10">
          <img
            src={logo}
            alt="Baazi"
            className="h-8 w-auto shrink-0 cursor-pointer lg:h-9 2xl:h-10"
            style={{ filter: "drop-shadow(0 0 4px rgba(170, 113, 222, 0.6))" }}
            onClick={() => {
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          />

          {/* Desktop links */}
          <ul
            className="hidden lg:flex items-center gap-5 text-white text-xs uppercase tracking-wide xl:gap-7 xl:text-[13px] 2xl:gap-8 2xl:text-sm"
            style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700 }}
          >
            {navLinks.map((link) => (
              <li
                key={link.key}
                onClick={() => handleNavClick(link.key)}
                className={`shrink-0 whitespace-nowrap cursor-pointer hover:text-yellow-300 transition-colors ${
                  isActive(link.key) ? "text-yellow-300" : ""
                }`}
              >
                {link.label}
              </li>
            ))}
          </ul>

          {/* Desktop login / logout */}
          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              title={user?.username || user?.email || "Log out"}
              className="hidden lg:flex h-9 shrink-0 items-center justify-center gap-1.5 px-5 rounded-full text-[13px] transition hover:brightness-95 2xl:h-10 2xl:px-6 2xl:text-sm"
              style={authButtonStyle}
            >
              LOGOUT
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsLoginOpen(true)}
              className="hidden lg:flex h-9 shrink-0 items-center justify-center gap-1.5 px-5 rounded-full text-[13px] transition hover:brightness-95 2xl:h-10 2xl:px-6 2xl:text-sm"
              style={authButtonStyle}
            >
              <Plus size={14} color="#141414" />
              LOGIN
            </button>
          )}

          {/* Mobile hamburger icon */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden -mr-1 p-1 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed top-16 left-0 w-full z-40 flex flex-col px-5 pt-2 pb-5 gap-1 border-t border-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.2)] sm:px-6"
          style={{ backgroundColor: NAVBAR_BG }}
        >
          {navLinks.map((link) => (
            <span
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`cursor-pointer py-2 text-white text-sm font-bold uppercase tracking-wide ${
                isActive(link.key) ? "text-yellow-300" : ""
              }`}
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              {link.label}
            </span>
          ))}

          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="mt-3 h-11 rounded-full text-sm"
              style={authButtonStyle}
            >
              LOGOUT
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setIsLoginOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="mt-3 flex h-11 items-center justify-center gap-1.5 rounded-full text-sm"
              style={authButtonStyle}
            >
              <Plus size={14} color="#141414" />
              LOGIN
            </button>
          )}
        </div>
      )}

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}

export default Navbar;
