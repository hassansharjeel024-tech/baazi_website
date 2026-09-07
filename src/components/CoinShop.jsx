import heroBg from "../assets/hero-bg.png";
import coinStack from "../assets/coin-stack.png";

const coinPacks = new Array(12).fill({
  title: "Buy Starter Pack",
  coins: "500 Coins",
  price: "$4.99",
});

function CoinShop() {
  return (
    <div>
      <section className="px-6 py-16 text-center relative overflow-hidden bg-linear-to-br from-[#6D28D9] to-[#4C1D95]">
        <div
          className="absolute top-0 left-0 right-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${heroBg})`, height: "420px" }}
        />
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "420px",
            background:
              "linear-gradient(135deg, rgba(109,40,217,0.5) 0%, rgba(76,29,149,0.6) 100%)",
          }}
        />

        <div className="relative z-10">
          <span
            className="inline-block text-purple-900 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide"
            style={{ backgroundColor: "#D9B84A" }}
          >
            Limited Time Offer
          </span>
          <h1
            className="uppercase text-[#DBE21C] text-3xl md:text-5xl mb-4"
            style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 900 }}
          >
            The Royale Special
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base mb-6">
            Double your loot on your first purchase this season. Gear up for
            the ultimate arcade experience.
          </p>
          <button className="bg-yellow-400 text-purple-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors uppercase text-sm">
            Claim Offer Now
          </button>
        </div>
      </section>

      <section className="bg-purple-50 px-6 py-16">
        <h2 className="uppercase font-extrabold text-2xl md:text-3xl text-black text-center mb-10">
          Coin Packs
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {coinPacks.map((pack, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center aspect-371/378"
              style={{
                border: "1px solid rgba(204,204,204,0.62)",
                boxShadow: "0px 4px 6px -4px rgba(0,0,0,0.10)",
              }}
            >
              <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <img
                  src={coinStack}
                  alt="Coins"
                  className="w-17 h-14.5 object-contain"
                />
              </div>
              <p className="font-poppins font-bold text-sm text-purple-900">
                {pack.title}
              </p>
              <p className="font-poppins text-xs text-gray-500 mb-4">
                {pack.coins}
              </p>
              <button className="bg-yellow-400 text-purple-900 font-bold text-sm px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors w-full mt-auto">
                {pack.price}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CoinShop;