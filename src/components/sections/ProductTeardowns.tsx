"use client"

import { motion } from "framer-motion"

const teardowns = [
  {
    title: "Improving Netflix Recommendations",
    insight: "Current recommendation bias over-optimizes recency.",
    impact: "+5% retention"
  },
  {
    title: "Rethinking Uber Incentives",
    insight: "Driver incentive systems prioritize short-term supply.",
    impact: "+8% driver satisfaction"
  },
  {
    title: "Fixing Spotify Discovery",
    insight: "Discovery algorithms under-index niche tastes.",
    impact: "+12% engagement"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function ProductTeardowns() {

  return (

    <section id="teardowns" className="py-28 px-6 bg-white dark:bg-black">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Product Teardowns
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >

          {teardowns.map((t, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
              className="group border border-zinc-200 dark:border-white/10 rounded-xl p-6 bg-zinc-50 dark:bg-white/5"
            >

              <h3 className="text-lg font-semibold mb-4">
                {t.title}
              </h3>

              <p className="text-sm text-zinc-500 mb-2 opacity-0 group-hover:opacity-100 transition">
                Core Insight: {t.insight}
              </p>

              <p className="text-indigo-500 text-sm opacity-0 group-hover:opacity-100 transition">
                Impact Potential: {t.impact}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}