"use client"

import { Cpu, Network, TrendingUp, Layers } from "lucide-react"

export default function ProductThinking() {
  return (
    <section className="py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Innovative Product Thinking
        </h2>

        <div className="space-y-16">
          {/* PMF */}
          <div className="border-l-2 border-orange-500 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-orange-400" size={20} />
              <h3 className="text-xl font-semibold">
                Product-Market Fit Expansion & Growth Systems
              </h3>
            </div>

            <p className="text-zinc-400 mb-6 max-w-3xl">
              <span className="text-white font-medium">Philosophy:</span> PMF is a system—growth comes from removing friction and expanding where the product creates value.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <p>
                <span className="text-white font-medium">Friction Mapping → </span>
                At Walmart, removed onboarding bottlenecks via APIs, reducing time from months to weeks.
              </p>

              <p>
                <span className="text-white font-medium">Growth Flywheel → </span>
                At Mersive, turned engagement into a compounding loop via modular pricing and embedded AI workflows.
              </p>

              <p>
                <span className="text-white font-medium">Counter-Intuitive Insights → </span>
                Learned that “optimal” ML outputs reduced trust—pivoted toward usability-driven models.
              </p>
            </div>
          </div>  
          {/* PLATFORM */}
          <div className="border-l-2 border-blue-500 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <Network className="text-blue-400" size={20} />
              <h3 className="text-xl font-semibold">
                Platform & Ecosystem Strategy
              </h3>
            </div>

            <p className="text-zinc-400 mb-6 max-w-3xl">
              <span className="text-white font-medium">Philosophy:</span> Move from shipping features to building leverage—where every capability becomes a reusable platform primitive that compounds value across teams and products.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <p>
                <span className="text-white font-medium">Flywheel Mechanics → </span>
                At Walmart, unified fragmented systems into a real-time AI platform where each data signal improved future decisions, creating compounding value across orgs.
              </p>

              <p>
                <span className="text-white font-medium">Inversion Thinking → </span>
                Defined core primitives (APIs, decisioning layers) instead of features—enabling reuse across 4+ teams and eliminating redundant builds.
              </p>

              <p>
                <span className="text-white font-medium">Ecosystem Leverage → </span>
                Built systems that other teams depend on—not just use—turning platforms into organizational force multipliers.
              </p>
            </div>
          </div>

          {/* AI PRODUCTIZATION */}
          <div className="border-l-2 border-purple-500 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-purple-400" size={20} />
              <h3 className="text-xl font-semibold">
                AI Productization (Probability → Reliability)
              </h3>
            </div>

            <p className="text-zinc-400 mb-6 max-w-3xl">
              <span className="text-white font-medium">Philosophy:</span> AI is probabilistic, but great products feel deterministic—through guardrails, explainability, and feedback systems that build trust.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <p>
                <span className="text-white font-medium">First-Principles AI Design → </span>
                At Capital One, prioritized interpretable models and auditability over raw performance to meet regulatory constraints.
              </p>

              <p>
                <span className="text-white font-medium">Trust over Accuracy → </span>
                At Walmart, replaced “perfect” ML outputs with hybrid models when users rejected recommendations—optimizing for adoption.
              </p>

              <p>
                <span className="text-white font-medium">Workflow-Native AI → </span>
                At Mersive, embedded GenAI directly into workflows, using feedback loops to continuously improve outputs.
              </p>
            </div>
          </div>

          {/* SCALE */}
          <div className="border-l-2 border-green-500 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-green-400" size={20} />
              <h3 className="text-xl font-semibold">
                Strategic Execution & Scale
              </h3>
            </div>

            <p className="text-zinc-400 mb-6 max-w-3xl">
              <span className="text-white font-medium">Philosophy:</span> Scaling to 100M users is about managing constraints—latency, reliability, and org alignment—not just adding features.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <p>
                <span className="text-white font-medium">Constraint-Driven Tradeoffs → </span>
                Balanced latency vs accuracy in Walmart’s AI systems through tiered decisioning architectures.
              </p>

              <p>
                <span className="text-white font-medium">API-First Re-Architecture → </span>
                Replaced legacy integrations with self-serve APIs, reducing onboarding time by 80% and enabling scale.
              </p>

              <p>
                <span className="text-white font-medium">Influence Without Authority → </span>
                Resolved cross-functional conflicts by aligning incentives across Sales, Risk, and Engineering.
              </p>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  )
}