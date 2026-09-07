import { Download, Gamepad2, Gift } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Sign Up",
    description:
      "Get the free Baazi app. Create your account in under 60 seconds and claim your 100 welcome Carrots.",
  },
  {
    number: "02",
    icon: Gamepad2,
    title: "Play & Complete Tasks",
    description:
      "Jump through mini-games, complete daily challenges, and multiply your earnings as you play.",
  },
  {
    number: "03",
    icon: Gift,
    title: "Earn & Redeem Rewards",
    description:
      "Convert your Carrots into gift cards, digital goods, and cash prizes. Withdraw anytime.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-purple-50 px-6 py-16 text-center">
      <h2 className="section-heading text-2xl md:text-3xl text-gray-900">
        3 SIMPLE STEPS TO START EARNING
      </h2>
      <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
        Three simple steps to start winning today.
      </p>

      <div
        className="flex flex-wrap justify-center gap-5 mt-10 mx-auto"
        style={{ maxWidth: "1300px" }}
      >
        {steps.map(({ number, icon: Icon, title, description }) => (
          <div
            key={number}
            className="flex flex-col items-center text-center"
            style={{
              width: "390px",
              height: "349px",
              backgroundColor: "#1C0E2B",
              borderRadius: "24px",
              borderTop: "0.8px solid rgba(196, 223, 0, 0.125)",
              padding: "32px",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
              style={{ backgroundColor: "#DBE21C" }}
            >
              <Icon className="text-purple-900 w-6 h-6" />
            </div>
            <span className="text-yellow-400 font-extrabold text-xl mb-2">
              {number}
            </span>
            <h3 className="text-white font-bold text-base mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;