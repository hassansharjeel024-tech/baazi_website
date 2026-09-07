import rewardsImage from "../assets/rewards-image.png";

function RewardsShowcase() {
  return (
    <section
      id="rewards"
      className="px-6 py-16 text-center overflow-hidden"
      style={{ backgroundColor: "#570C92" }}
    >
      <h2 className="section-heading text-2xl md:text-3xl text-white">
        REWARDS SHOWCASE
      </h2>
      <p className="text-purple-200 mt-2 max-w-xl mx-auto text-sm">
        Complete challenges, climb the leaderboard, and redeem exciting rewards.
      </p>

      <img
        src={rewardsImage}
        alt="Rewards showcase"
        className="mt-10 w-full max-w-3xl mx-auto h-auto"
      />
    </section>
  );
}

export default RewardsShowcase;