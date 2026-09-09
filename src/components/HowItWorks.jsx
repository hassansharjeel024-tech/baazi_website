import step1Icon from "../assets/step-1-icon.png";
import step2Icon from "../assets/step-2-icon.png";
import step3Icon from "../assets/step-3-icon.png";

const steps = [
  {
    number: "01",
    icon: step1Icon,
    title: "Download & Sign Up",
    description:
      "Get the free Baazi app. Create your account in under 60 seconds and claim your 100 welcome Carrots.",
  },
  {
    number: "02",
    icon: step2Icon,
    title: "Play & Complete Tasks",
    description:
      "Jump through mini-games, complete daily challenges, and multiply your earnings as you play.",
  },
  {
    number: "03",
    icon: step3Icon,
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
        className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-5 mt-10 mx-auto"
        style={{ maxWidth: "1300px" }}
      >
        {steps.map(({ number, icon, title, description }) => (
          <div
            key={number}
            className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center w-full md:w-[390px] md:h-[349px]"
            style={{
              backgroundColor: "#1C0E2B",
              borderRadius: "24px",
              borderTop: "0.8px solid rgba(196, 223, 0, 0.125)",
              padding: "16px",
              gap: "16px",
            }}
          >
            <img
              src={icon}
              alt={title}
              className="w-12 h-14 md:w-20 md:h-24 object-contain shrink-0"
            />
            <div className="flex flex-col md:items-center md:gap-[7px]">
              <span className="text-yellow-400 font-extrabold text-sm md:text-xl">
                {number}
              </span>
              <h3 className="text-white font-bold text-sm md:text-base">
                {title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-0">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;