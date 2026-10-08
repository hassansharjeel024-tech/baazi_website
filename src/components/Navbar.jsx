import { useState, useEffect, Fragment } from "react";
import { Menu, X, Plus } from "lucide-react";
import logo from "../assets/logo.png";
import LoginModal from "./LoginModal";

// #570C92 par 20% black = #460A75. Isay halka/gehra karna ho to sirf yeh ek value badlein.
const NAVBAR_BG = "#460A75";

// 2xl par gaps Figma ke ratio mein baantne ke liye (1920px design ke px values)
const grow = (value) => ({ flex: `${value} 1 0%` });

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

  // 2xl (1536px+) par navbar 140px hai, us se chhoti screens par 88px
  const getNavbarHeight = () => (window.innerWidth >= 1536 ? 140 : 88);

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
        className="fixed top-0 left-0 w-full z-50 h-22 px-6 flex items-center justify-between 2xl:h-35 2xl:pt-4 2xl:px-0 2xl:justify-start"
        style={{ backgroundColor: NAVBAR_BG }}
      >
        {/* 2xl: left padding (Figma 139px) */}
        <span aria-hidden="true" className="hidden 2xl:block" style={grow(139)} />

        <img
          src={logo}
          alt="Baazi"
          className="h-10 w-auto shrink-0 cursor-pointer 2xl:w-45.75 2xl:h-23"
          style={{ filter: "drop-shadow(0 0 4px rgba(170, 113, 222, 0.6))" }}
          onClick={() => {
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
          }}
        />

        {/* 2xl: logo aur links ke beech gap (Figma 173px) */}
        <span aria-hidden="true" className="hidden 2xl:block" style={grow(173)} />

        {/* Desktop links (2xl par ul "contents" hai, taake li seedha nav ke flex items banein) */}
        <ul
          className="hidden lg:flex items-center gap-6 text-white text-xs uppercase tracking-wide 2xl:contents 2xl:text-[16px] 2xl:leading-5 2xl:tracking-normal"
          style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700 }}
        >
          {navLinks.map((link, index) => (
            <Fragment key={link.key}>
              <li
                onClick={() => handleNavClick(link.key)}
                className={`shrink-0 whitespace-nowrap cursor-pointer hover:text-yellow-300 transition-colors ${
                  isActive(link.key) ? "text-yellow-300" : ""
                }`}
              >
                {link.label}
              </li>
              {index < navLinks.length - 1 && (
                // 2xl: links ke beech gap (Figma 38px)
                <li
                  aria-hidden="true"
                  role="presentation"
                  className="hidden 2xl:block"
                  style={grow(38)}
                />
              )}
            </Fragment>
          ))}
        </ul>

        {/* 2xl: links aur login ke beech gap (Figma 155px) */}
        <span aria-hidden="true" className="hidden 2xl:block" style={grow(155)} />

        {/* Desktop login button */}
        <button
          onClick={() => setIsLoginOpen(true)}
          className="hidden lg:flex shrink-0 items-center justify-center gap-[9px] px-5 py-2 rounded-full transition-colors 2xl:w-[180.45px] 2xl:h-[62.2px] 2xl:text-[18px] 2xl:leading-[19.2px]"
          style={{
            backgroundColor: "#DBE21C",
            color: "#141414",
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 700,
          }}
        >
          <Plus size={14} color="#141414" />
          LOGIN
        </button>

        {/* 2xl: right padding (Figma 159px) */}
        <span aria-hidden="true" className="hidden 2xl:block" style={grow(159)} />

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
          className="lg:hidden fixed top-22 left-0 w-full z-40 flex flex-col px-6 py-6 gap-5"
          style={{ backgroundColor: NAVBAR_BG }}
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