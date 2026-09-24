import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import mascotImage from "../assets/mascot-rabbit.png";

const faqData = [
  {
    question: "Is Baazi free to download?",
    answer:
      "Yes! Baazi is completely free to download and play. You can start earning rewards right away without spending a single rupee.",
  },
  {
    question: "Can I redeem Baazi coins for cash?",
    answer:
      "No, Baazi coins can only be used for in-app purchases and rewards.",
  },
  {
    question: "What are Mystery Boxes?",
    answer:
      "Mystery Boxes are surprise rewards you can unlock by playing games and completing daily tasks. Each box can contain coins, vouchers, or exclusive in-app items.",
  },
  {
    question: "How to redeem Carrot credits?",
    answer:
      "Head over to the Rewards section in the app, select Carrot Credits, and choose from the available vouchers or cash rewards to redeem.",
  },
  {
    question: "What are Baazi coins?",
    answer:
      "Baazi Coins are the in-app currency you earn by playing games, completing tasks, and referring friends. Use them to unlock mystery boxes and other in-app perks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#DBE21C] py-20 px-6 md:px-12 2xl:min-h-261 2xl:flex 2xl:flex-col 2xl:justify-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Heading + Accordion */}
        <div className="w-full lg:w-1/2 min-w-0 2xl:w-166.5 2xl:max-w-166.5">
          <h2
            className="text-[#4C1D95] text-3xl sm:text-4xl md:text-4xl lg:text-4xl leading-tight mb-8 uppercase"
            style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900 }}
          >
            <span className="block whitespace-nowrap">GOT QUESTIONS? WE</span>
            <span className="block">GOT ANSWERS.</span>
          </h2>

          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: "#570C92",
                    borderRadius: "20px",
                    border: "1px solid #000000",
                  }}
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-poppins font-bold text-white text-xs md:text-sm tracking-wide">
                      {item.question}
                    </span>
                    <span className="shrink-0 w-6 h-6 rounded-lg bg-white flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" style={{ color: "#570C92" }} />
                      ) : (
                        <Plus className="w-3.5 h-3.5" style={{ color: "#570C92" }} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 -mt-1">
                      <p className="font-poppins text-white/90 text-xs md:text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Mascot */}
        <div className="hidden lg:flex w-full lg:w-1/2 min-w-0 justify-center lg:justify-end">
          <img
            src={mascotImage}
            alt="Baazi mascot"
            className="w-48 sm:w-56 md:w-64 lg:w-72 max-w-full object-contain 2xl:w-126.5 2xl:h-201.5"
          />
        </div>
      </div>
    </section>
  );
}