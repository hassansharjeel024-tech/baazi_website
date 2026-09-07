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
      <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm whitespace-nowrap">
        Your unique referral code unlocks bonus Carrots for you and your friends. No limit on referrals — share more, earn more.
      </p>

      <div
        className="flex flex-wrap justify-center gap-5 mt-10 mx-auto"
        style={{ maxWidth: "1300px" }}
      >
        {steps.map(({ emoji, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center"
            style={{
              width: "390px",
              height: "232px",
              backgroundColor: "#1C0E2B",
              borderRadius: "24px",
              borderTop: "0.8px solid rgba(196, 223, 0, 0.125)",
              padding: "24px",
              gap: "12px",
            }}
          >
            <div className="text-3xl">{emoji}</div>
            <h3 className="text-white font-bold text-base">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-md mx-auto flex items-center justify-between bg-gray-900 rounded-full px-6 py-3">
        <span className="text-white font-bold tracking-wide">
          {referralCode}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-yellow-400 text-purple-900 font-bold text-sm px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors"
        >
          <Copy className="w-4 h-4" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </section>
  );
}

export default Referral;