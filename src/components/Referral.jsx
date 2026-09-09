import { useState } from "react";
import { Copy } from "lucide-react";

const steps = [
  {
    emoji: "📩",
    title: "Share Your Link",
    description: "Send your unique referral code to friends via any platform.",
  },
  {
    emoji: "🎉",
    title: "Friend Signs Up",
    description: "Your friend downloads BAZI and enters your referral code.",
  },
  {
    emoji: "🥕",
    title: "Both Earn 100",
    description: "You AND your friend each receive 100 Carrots immediately.",
  },
];

function Referral() {
  const [copied, setCopied] = useState(false);
  const referralCode = "BAZI-KX29M";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="referral" className="bg-purple-50 px-6 py-16 text-center">
      <h2 className="section-heading text-2xl md:text-3xl text-gray-900">
        INVITE FRIENDS, BOTH EARN 100 🥕
      </h2>
      <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">
        Your unique referral code unlocks bonus Carrots for you and your friends. No limit on referrals — share more, earn more.
      </p>

      <div
        className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-5 mt-10 mx-auto"
        style={{ maxWidth: "1300px" }}
      >
        {steps.map(({ emoji, title, description }) => (
          <div
            key={title}
            className="flex flex-row md:flex-col items-center text-left md:text-center w-full md:w-97.5 md:h-58"
            style={{
              backgroundColor: "#1C0E2B",
              borderRadius: "24px",
              borderTop: "0.8px solid rgba(196, 223, 0, 0.125)",
              padding: "16px",
              gap: "16px",
            }}
          >
            <div className="text-2xl md:text-3xl shrink-0">{emoji}</div>
            <div className="flex flex-col md:items-center md:gap-3">
              <h3 className="text-white font-bold text-sm md:text-base">{title}</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-0">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-md mx-auto flex items-center justify-between bg-gray-900 rounded-full px-4 sm:px-6 py-3 gap-2">
        <span className="text-white font-bold tracking-wide text-sm sm:text-base truncate">
          {referralCode}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-yellow-400 text-purple-900 font-bold text-sm px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors shrink-0"
        >
          <Copy className="w-4 h-4" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </section>
  );
}

export default Referral;