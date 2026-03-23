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
                Product-Market Fit Expansion, Product Sense & Growth Systems
              </h3>
            </div>

            <p className="text-zinc-400 mb-6 max-w-3xl">
              <span className="text-white font-medium">Philosophy:</span> I’ve come to view Product-Market Fit not as a one-time milestone you check off, but as a dynamic, living system. Sustained growth doesn't just happen by adding more features; it comes from staying obsessed with where the product actually creates value and then relentlessly removing the friction in those moments. It’s about building compounding loops across activation, engagement, and monetization so that the product essentially sells itself through usage.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <p>
                <span className="text-white font-medium">Friction Mapping → </span>
                Growth is almost always constrained by hidden friction in the user journey, not just "missing" capabilities. At Walmart, I focused on mapping the end-to-end workflows for onboarding and pricing. We found that the real growth killers weren't the tools themselves, but the manual decision points and messy integration dependencies. By redesigning our APIs and simplifying those activation flows, we cut onboarding time from months down to weeks. It was a huge shift in perspective: treating workflow friction, rather than feature gaps, as the primary constraint on our scale.
              </p>

              <p>
                <span className="text-white font-medium">Growth Flywheel → </span>
                At Mersive, the goal was to transform basic engagement into a self-reinforcing flywheel. We did this by embedding collaboration workflows directly into existing user behaviors and introducing modular pricing that actually aligned with how people were using the tech. By leveraging product signals—seeing where users found the most value and then prompting the next logical step—we created a loop where engagement led to value realization, which naturally led to upsells and even deeper engagement.
              </p>

              <p>
                <span className="text-white font-medium">The "Trust over Correctness" Insight / Counter-Intuitive Insights → </span>
                One of the most counter-intuitive things I’ve learned is that optimizing for "mathematical correctness" can actually kill adoption. At Walmart, we had highly accurate ML recommendations that users initially rejected because they lacked transparency. They didn't care if the model was 99% accurate if it felt like a black box. We had to pivot our product decisions toward explainability and control. Once we gave users the ability to see the "why" and provide a human-in-the-loop override, trust went up, and sustained usage followed.
              </p>
              <p>
                <span className="text-white font-medium">Product Craft / Product Sense → </span>
                Product craft is where technical systems meet human judgment. It’s the ability to take complex, fragmented enterprise systems and distill them into experiences that feel intuitive. I don’t just build for functionality—I design for cognitive ease.

Whether working on order allocation at Walmart or casting infrastructure at Mersive, I’ve found that the more complex the system, the more restraint it requires. True craft is knowing when to enforce a default success path versus offering flexibility, aligning product behavior with real user mental models to reduce friction.

This requires judgment over checklists. Data explains what is happening, but product sense determines why it matters and which tradeoffs to make—like prioritizing explainability over marginal accuracy gains or simplifying cross-system interactions into seamless flows.

I push toward a “one-click” standard that minimizes effort and builds trust. By replacing complexity with clarity, I’ve reduced manual steps by 40% and enabled scalable adoption. Ultimately, product craft is what turns functional systems into products users rely on.


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
              <span className="text-white font-medium">Philosophy → </span> 
              I’ve learned that shipping features in isolation is a recipe for technical debt. Instead, I focus on building composable platform primitives. When every capability—whether it’s a data pipeline, a set of APIs, or a decisioning engine—is treated as reusable infrastructure, you stop reinventing the wheel. This approach allows value to compound across teams, reducing duplication and significantly accelerating product velocity at scale.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <p>
                <span className="text-white font-medium">Flywheel Mechanics → </span>
                A great example of this was the work on the order allocation platform at Walmart. We unified fragmented systems into a single, real-time AI platform. This created a genuine flywheel: every incremental data signal improved our model accuracy, which in turn reduced decision latency and sharpened fulfillment outcomes across the entire supply chain. By architecting microservices to handle 3X traffic growth, the platform didn't just scale—it got more efficient with every transaction.
              </p>

              <p>
                <span className="text-white font-medium">Inversion Thinking → </span>
                This requires "inversion thinking"—starting with core primitives like APIs and data contracts before even thinking about the end features. It’s a shift from one-off delivery to reusable capability creation. When you get the infrastructure right, it enables: Faster experimentation because teams aren't building from scratch. Consistency in decisioning logic across different product surfaces. Efficiency, by eliminating the redundant builds that usually slow down large organizations.
              </p>

              <p>
                <span className="text-white font-medium">Ecosystem Leverage → </span>
                A platform succeeds when it becomes an organizational force multiplier. I aim to build systems that teams actually depend on for their critical workflows because the platform solves their highest-friction problems. Whether it’s delivering architecture that scales 10X to handle 50,000+ simultaneous API calls or building streaming pipelines that process 500,000 events per second, the goal is to provide the reliability and interoperability that drives organic, cross-team adoption. When the platform is the path of least resistance, impact scales far beyond a single team.
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
              <span className="text-white font-medium">Philosophy → </span> The reality is that AI systems are inherently probabilistic, but for a product to succeed at the enterprise level, it has to feel reliable and predictable. You can't just ship a model and hope for the best. I focus on designing "beyond the model"—building in the guardrails, feedback loops, and human-in-the-loop mechanisms that turn raw AI outputs into confident user decisions and actual business outcomes.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <p>
                <span className="text-white font-medium">First-Principles AI Design → </span>
                I always start with constraints rather than raw capabilities. When I was at Capital One, we prioritized interpretability, auditability, and regulatory compliance over chasing marginal gains in model accuracy. A 1% lift in accuracy means nothing if the model is a "black box" that fails a risk audit. We shifted the goalpost from building the "best model" to building a deployable, compliant system where every prediction was explainable and every decision operated within defined risk boundaries.
              </p>

              <p>
                <span className="text-white font-medium">Trust over Accuracy → </span>
                At Walmart, I saw firsthand that users will reject a mathematically "optimal" recommendation if they don’t understand it or can't control it. We had to reframe success from "model accuracy" to user adoption and decision confidence. To solve this, we implemented hybrid systems—combining hard business rules with ML—and added confidence scoring with override mechanisms. By progressively exposing AI recommendations rather than forcing them, we built a system that users actually trusted and relied on in their daily production workflows.
              </p>

              <p>
                <span className="text-white font-medium">Workflow-Native AI → </span>
                AI only creates real value when it’s embedded directly into a user's existing workflow, not tucked away in a separate tab or chat interface. At Mersive, we integrated GenAI agents directly into real-time meeting workflows and designed closed-loop feedback systems. By capturing how users interacted with the AI, we created a signal-to-quality loop that continuously improved the model. The goal was to move AI from being a "cool assistive feature" to becoming a workflow-native decision layer that feels like a natural part of the product.
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
              <span className="text-white font-medium">Philosophy → </span> Scaling a product to millions of users isn't just about adding more features—it’s about systematically managing constraints across your technology, your operations, and your organization. At the Staff level, success doesn't come from doing everything; it comes from making intentional trade-offs, designing for resilience, and aligning deeply fragmented teams around a single set of shared outcomes.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <p>
                <span className="text-white font-medium">Constraint-Driven Tradeoffs → </span>
                In a high-scale environment, you’re always balancing competing priorities: latency vs. accuracy, speed vs. reliability, or flexibility vs. standardization. At Walmart, I focused on designing tiered decisioning architectures to handle these tensions. We built real-time systems for speed-critical decisions while offloading more complex logic to batch-optimized systems for maximum accuracy. This allowed us to balance performance without over-engineering, ensuring we could scale the order allocation platform without compromising the business outcome.
              </p>

              <p>
                <span className="text-white font-medium">API-First Re-Architecture → </span>
                One thing I’ve learned is that legacy systems don’t scale—platforms do. To unlock growth, you have to replace tightly coupled, brittle integrations with self-serve APIs and standardized data contracts. By moving to a modular service architecture, we empowered independent teams to move at their own velocity rather than being stuck in a deployment monolith. This shift was the "secret sauce" that allowed us to reduce onboarding time by 80% and turn a technical bottleneck into a scalable growth engine.
              </p>

              <p>
                <span className="text-white font-medium">Influence Without Authority → </span>
                At a certain size, execution is rarely a technology problem; it’s an organizational misalignment problem. I spend a lot of my time leading alignment between Sales, Risk, and Engineering—groups that often have naturally conflicting goals. I’ve found the best way to move fast is to frame technical trade-offs in terms of direct business impact and create shared success metrics. By driving structured decision-making and resolving these conflicts proactively, you move from "order taking" to enabled, high-velocity execution across the entire org.
              </p>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  )
}