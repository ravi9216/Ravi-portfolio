"use client"

import { motion } from "framer-motion"

export default function AboutSection() {

  return (

    <section id="about" className="py-28 px-6 bg-zinc-50 dark:bg-black">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left narrative */}

        <motion.div
          initial={{ opacity:0, y:10 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
        >

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            About
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            I build data-driven products that solve meaningful problems
            at scale. My work sits at the intersection of technology,
            user insight, and business strategy.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Previously I worked on B2B SaaS platforms and ML-driven
            features, partnering closely with engineering teams to
            design scalable product architectures.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400">
            I'm currently focused on building AI-powered systems that
            improve decision-making and customer experience.
          </p>

        </motion.div>

        {/* Right info grid */}

        <div className="grid grid-cols-2 gap-6 text-sm">

          <div>
            <h4 className="font-semibold mb-2">Expertise</h4>
            <ul className="text-zinc-500 space-y-1">
              <li>Product Strategy</li>
              <li>Growth</li>
              <li>ML Products</li>
              <li>B2B SaaS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Education</h4>
            <p className="text-zinc-500">
              Your University
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Certifications</h4>
            <p className="text-zinc-500">
              Product / AI / Cloud
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}