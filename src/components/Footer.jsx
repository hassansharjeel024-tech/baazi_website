import playIcon from "../assets/play-icon.png";
import logoImage from "../assets/logo.png";

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602a9.47 9.47 0 0 0 2.323-2.41z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.668-.072-4.948C23.729 2.7 21.348.273 16.949.072 15.669.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

const footerLinks = {
  PRODUCT: ["Games", "Features", "Leaderboard", "Reward Shop", "Referral"],
  COMPANY: ["About Us", "How it Works", "Privacy Policy", "Contact"],
  SUPPORT: ["FAQs", "Help Center", "Terms of Service", "Cookie Policy"],
};

const socialIcons = [TwitterIcon, InstagramIcon, YoutubeIcon, FacebookIcon];

export default function Footer() {
  return (
    <footer className="bg-[#08051A] pt-12 md:pt-16 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-8 md:gap-10">
        <div className="col-span-2">
          <img src={logoImage} alt="Baazi logo" className="h-9 md:h-10 w-auto mb-4" />
          <p className="font-poppins text-gray-400 text-sm leading-relaxed mb-6">
            The ultimate play-to-earn gaming universe. Play games, complete daily tasks, and redeem real rewards. Free forever.
          </p>
          <div className="hidden md:flex gap-3">
            {socialIcons.map((Icon, index) => <a key={index} href="#" className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center hover:opacity-80 transition"><Icon className="w-4 h-4 text-[#160B2E]" /></a>)}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => <div key={title} className="col-span-1">
          <h4 className="font-poppins font-bold text-white text-xs uppercase tracking-wide mb-4">{title}</h4>
          <ul className="space-y-2">
            {links.map((link) => <li key={link}><a href="#" className="font-poppins text-gray-400 text-sm hover:text-white transition">{link}</a></li>)}
          </ul>
        </div>)}

        <div className="col-span-1">
          <h4 className="font-poppins font-bold text-white text-xs uppercase tracking-wide mb-4">Download App</h4>
          <a href="#" className="w-fit block">
            <img src={playIcon} alt="Get it on Google Play and App Store" className="w-auto max-w-50" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-10 md:mt-12 pt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2 text-left">
        <p className="font-poppins text-gray-500 text-xs">© 2026 baaziplay.com · All rights reserved.</p>
        <p className="hidden sm:block font-poppins text-gray-500 text-xs">Made with 🥕 for gamers everywhere</p>
        <div className="flex md:hidden gap-3">
          {socialIcons.map((Icon, index) => <a key={index} href="#" className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center hover:opacity-80 transition"><Icon className="w-4 h-4 text-[#160B2E]" /></a>)}
        </div>
      </div>
    </footer>
  );
}