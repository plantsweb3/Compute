"use client";

const headlines = [
  "GPU shortage reaching critical levels worldwide",
  "AI infrastructure spending to exceed $1T by 2027",
  "Nations now stockpiling semiconductor chips",
  "NVIDIA hits $3T+ market cap on compute demand",
  "US-China chip war escalating rapidly",
  "TSMC fabs bottlenecked for years to come",
  "Compute is the new oil of the 21st century",
  "Global data center power demand surging 300%",
  "GPU wait times now measured in months not weeks",
  "Every major tech company in a compute arms race",
  "OpenAI training costs exceed $100M per model run",
  "Sovereign AI initiatives launching across 40+ nations",
  "Microsoft commits $100B+ to data center expansion",
  "xAI deploys 100,000 GPU Memphis supercluster",
  "Meta pledges $65B to AI infrastructure buildout",
  "Global chip shortage shows no signs of slowing",
  "AI compute demand doubling every 6 months",
  "Cloud GPU prices skyrocketing across all providers",
  "Amazon investing $150B in data center capacity",
  "South Korea and Japan enter chip manufacturing race",
  "Google DeepMind training runs consuming entire data centers",
  "Intel and Samsung scrambling to catch TSMC",
  "UAE and Saudi Arabia building sovereign AI compute clusters",
  "Power grid strain from AI data centers hitting record levels",
  "CHIPS Act funding $52B but demand dwarfs supply",
  "Blackwell GPUs sold out for next 12 months straight",
  "Stargate project commits $500B to AI infrastructure",
  "Hedge funds now trading GPU futures as commodity",
  "Nuclear plants being reactivated to power AI data centers",
  "Anthropic and OpenAI in bidding war for compute access",
  "Global semiconductor revenue projected $1T by 2030",
  "Water usage for cooling data centers sparking local conflicts",
  "Cerebras and Groq challenging NVIDIA with custom silicon",
  "Pentagon classifying compute access as national security asset",
  "Inference costs dropping but training costs going parabolic",
];

export function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-[rgba(57,255,20,0.2)] bg-[rgba(57,255,20,0.03)] py-3.5">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent" />

      <div className="ticker-track flex">
        {/* First copy */}
        <div className="flex shrink-0 items-center gap-10 pr-10">
          {headlines.map((headline, i) => (
            <span
              key={`a-${i}`}
              className="shrink-0 whitespace-nowrap font-mono text-sm font-semibold tracking-wide"
              style={{
                color: "#39FF14",
                textShadow:
                  "0 0 10px rgba(57,255,20,0.5), 0 0 30px rgba(57,255,20,0.2)",
              }}
            >
              ▸ {headline}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 items-center gap-10 pr-10">
          {headlines.map((headline, i) => (
            <span
              key={`b-${i}`}
              className="shrink-0 whitespace-nowrap font-mono text-sm font-semibold tracking-wide"
              style={{
                color: "#39FF14",
                textShadow:
                  "0 0 10px rgba(57,255,20,0.5), 0 0 30px rgba(57,255,20,0.2)",
              }}
            >
              ▸ {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
