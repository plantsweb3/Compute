import { CursorGlow } from "@/components/cursor-glow";
import { BinaryOcean } from "@/components/binary-ocean";
import { Nav } from "@/components/nav";
import { Ticker } from "@/components/ticker";
import { Spinner } from "@/components/spinner";
import { DemandSupply } from "@/components/demand-supply";
import { Stats } from "@/components/stats";
import { WhosBuying } from "@/components/whos-buying";
import { CandleChart } from "@/components/candle-chart";
import { ContractAddress } from "@/components/contract-address";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="scanlines min-h-screen">
      <BinaryOcean />
      <CursorGlow />
      <Nav />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* Radial glow behind text */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(57,255,20,0.06)] blur-[150px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Network active pill */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[rgba(57,255,20,0.25)] bg-[rgba(5,5,5,0.6)] px-4 py-1.5 backdrop-blur-sm">
            <div
              className="h-2 w-2 rounded-full animate-pulse-green"
              style={{
                background: "#39FF14",
                boxShadow: "0 0 8px rgba(57,255,20,0.6), 0 0 16px rgba(57,255,20,0.3)",
              }}
            />
            <span
              className="font-mono text-xs font-semibold tracking-wider"
              style={{ color: "#39FF14", textShadow: "0 0 8px rgba(57,255,20,0.5)" }}
            >
              NETWORK ACTIVE
            </span>
          </div>

          {/* Headline */}
          <h1 className="flex max-w-4xl flex-wrap items-center justify-center gap-x-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:gap-x-5 sm:text-6xl md:text-8xl">
            <span>The World Runs</span>
            <br className="w-full" />
            <span>on</span>
            <span
              style={{
                color: "#39FF14",
                textShadow: "0 0 40px rgba(57,255,20,0.5), 0 0 80px rgba(57,255,20,0.25), 0 0 120px rgba(57,255,20,0.1)",
              }}
            >
              Compute
            </span>
            <Spinner size={50} className="hidden sm:inline-block" />
            <Spinner size={32} className="inline-block sm:hidden" />
          </h1>

          <p
            className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(255,255,255,0.6)", textShadow: "0 0 20px rgba(5,5,5,0.9)" }}
          >
            Every AI model trained. Every frame rendered. Every block validated.
            The scarcest resource of our generation isn&apos;t oil &mdash;
            it&apos;s{" "}
            <span style={{ color: "#39FF14", textShadow: "0 0 10px rgba(57,255,20,0.3)" }}>
              processing power
            </span>.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contract"
              className="btn-green rounded-full px-8 py-3 font-mono text-sm"
            >
              BUY $COMPUTE
            </a>
            <a
              href="#about"
              className="btn-outline rounded-full px-8 py-3 font-mono text-sm"
            >
              READ THE THESIS
            </a>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="relative z-10">
        <Ticker />
      </div>

      {/* The Thesis */}
      <section id="about" className="relative z-10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-4 font-mono text-xs font-medium tracking-widest"
            style={{ color: "#39FF14", textShadow: "0 0 10px rgba(57,255,20,0.3)" }}
          >
            001 &mdash; THE THESIS
          </div>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                <span className="text-white">Compute is the</span>
                <br />
                <span className="glow-text">new oil.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-white/50">
                Nations are stockpiling{" "}
                <span className="font-medium text-[--green]">GPUs</span>. Tech
                giants are spending{" "}
                <span className="font-medium text-[--green]">
                  hundreds of billions
                </span>{" "}
                on data centers. The global demand for compute is growing
                exponentially &mdash; and supply can&apos;t keep up.
              </p>
              <p className="text-base leading-relaxed text-white/50">
                <span className="font-semibold text-[--green]">$COMPUTE</span>{" "}
                is the memecoin that represents this fundamental shift. Not just
                a token &mdash; a statement about where the world is headed.
              </p>
            </div>
          </div>

          {/* Demand vs Supply visual */}
          <div className="mt-20">
            <DemandSupply />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-20">
        <Stats />
      </section>

      {/* Who's Buying Compute — side by side with live chart */}
      <section id="demand" className="relative z-10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div
            className="mb-4 font-mono text-xs font-medium tracking-widest"
            style={{ color: "#39FF14", textShadow: "0 0 10px rgba(57,255,20,0.3)" }}
          >
            002 &mdash; THE DATA
          </div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-white">Demand is</span>
            <br />
            <span className="glow-text">only going up.</span>
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Who's buying */}
            <WhosBuying />
            {/* Right: Live chart */}
            <CandleChart />
          </div>
        </div>
      </section>

      {/* Contract Address */}
      <section id="contract" className="relative z-10 px-6 py-20">
        <ContractAddress />
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl text-center">
          <div className="glow-card mx-auto max-w-2xl rounded-2xl p-12 sm:p-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Join the
              <br />
              <span className="glow-text">Compute Era</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
              The future is measured in{" "}
              <span className="font-medium text-[--green]">FLOPS</span>, not
              barrels. Get in before the world catches on.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green w-full rounded-full px-8 py-3 font-mono text-sm sm:w-auto"
              >
                FOLLOW ON X
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full rounded-full px-8 py-3 font-mono text-sm sm:w-auto"
              >
                TELEGRAM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spinner endcap */}
      <section className="relative z-10 flex items-center justify-center py-32">
        <Spinner size={120} />
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
