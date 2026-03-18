"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Brain,
  Heart,
  Cpu,
  Layers
} from "lucide-react"

interface Thought {
  title: string
  category: string
  insight: string
  content: string
  icon: React.ElementType
}

const thoughts: Thought[] = [
  {
    title: "Beyond RICE: Velocity over Volume",
    category: "Prioritization Frameworks",
    insight:
      "High performing teams optimize for learning velocity rather than output volume.",
    content:
      "Traditional prioritization frameworks like RICE help quantify decisions, but they often overlook the speed of learning. In fast-moving product environments, the teams that win are those that shorten the feedback loop between hypothesis and insight.",
    icon: Brain
  },
  {
    title: "The Friction-First UX Approach",
    category: "User Empathy",
    insight:
      "The best UX insights often emerge from studying where users struggle.",
    content:
      "Instead of optimizing only the happy path, great product teams obsess over friction points. Each moment of confusion reveals an opportunity to clarify mental models and improve usability.",
    icon: Heart
  },
  {
    title: "Defining Success in ML Products",
    category: "Building ML Products",
    insight:
      "ML products are probabilistic systems, not deterministic features.",
    content:
      "Shipping ML features requires redefining success metrics. Instead of binary outcomes, product managers must align teams around probabilistic improvements such as lift, precision, and recall.",
    icon: Cpu
  },
  {
    title: "From Founder-Led to Product-Led Growth",
    category: "Scaling B2B SaaS",
    insight:
      "Product-led growth begins when discovery replaces persuasion.",
    content:
      "In early-stage SaaS, founders sell vision. As companies scale, the product itself must communicate value. Product managers enable this shift by designing onboarding experiences that reveal value quickly.",
    icon: Layers
  }
]

export default function ProductThinking() {

  const [activeThought, setActiveThought] = useState<Thought | null>(null)

  return (

    <section
      id="product-thinking"
      className="py-28 px-6 bg-zinc-50 dark:bg-black"
    >

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-14 text-zinc-900 dark:text-white">
          Product Thinking
        </h2>

        {/* Thought Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {thoughts.map((thought, index) => {

            const Icon = thought.icon

            return (

              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer border border-zinc-200/50 dark:border-white/10 rounded-xl p-6 bg-white dark:bg-white/5 backdrop-blur-md"
                onClick={() => setActiveThought(thought)}
              >

                <div className="flex items-center gap-3 mb-4 text-zinc-500">

                  <Icon size={18} />

                  <span className="text-sm tracking-wide">
                    {thought.category}
                  </span>

                </div>

                <h3 className="text-xl font-medium text-zinc-900 dark:text-white">
                  {thought.title}
                </h3>

                {/* Hover Insight */}

                <motion.p
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-3 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  {thought.insight}
                </motion.p>

              </motion.div>
            )
          })}

        </div>

        {/* Modal */}

        {activeThought && (

          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-w-xl w-full bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-xl"
            >

              <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">
                {activeThought.title}
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {activeThought.content}
              </p>

              <button
                onClick={() => setActiveThought(null)}
                className="mt-6 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                Close
              </button>

            </motion.div>

          </motion.div>

        )}

      </div>

    </section>
  )
}