"use client"

import { motion } from "framer-motion"

export default function AboutSection() {

  return (

    <section id="about" className="bg-black">

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
<p className="text-sm text-zinc-500 mb-3">
  Product Manager focused on AI platforms, decision systems, and scalable product ecosystems.
</p>
<p className="text-zinc-600 dark:text-zinc-400 mb-4">
  I build <span className="font-medium text-zinc-900 dark:text-white">platforms and intelligent systems</span> that scale decision-making across products, teams, and users. My work focuses on turning fragmented features into <span className="font-medium text-zinc-900 dark:text-white">integrated ecosystems</span>—where APIs, data, and AI models compound value over time.
</p>

<p className="text-zinc-600 dark:text-zinc-400 mb-4">
  Across B2B SaaS, retail, and fintech, I’ve led the transition from <span className="font-medium text-zinc-900 dark:text-white">manual workflows to AI-driven systems</span>—building real-time decisioning platforms, recommendation engines, and modular growth systems used by millions of users and multiple internal teams.
</p>

<p className="text-zinc-600 dark:text-zinc-400 mb-4">
  I specialize in <span className="font-medium text-zinc-900 dark:text-white">AI productization</span>—bridging probabilistic models with reliable user experiences through explainability, feedback loops, and workflow-native design. My approach prioritizes <span className="font-medium text-zinc-900 dark:text-white">trust and adoption over theoretical model accuracy</span>.
</p>

<p className="text-zinc-600 dark:text-zinc-400">
  At scale, I focus on <span className="font-medium text-zinc-900 dark:text-white">strategic execution</span>—aligning engineering, data, and business teams to navigate trade-offs across latency, cost, and reliability, while building systems that other teams depend on—not just use.
</p>

        </motion.div>

        {/* Right info grid */}

        <div className="grid grid-cols-2 gap-6 text-sm">

          <div className="grid grid-cols-2 gap-6 text-sm">

  <div>
    <h4 className="font-semibold mb-2">Expertise</h4>
    <ul className="text-zinc-500 space-y-1">
      <li>Platform & Ecosystem Strategy</li>
      <li>AI Productization</li>
      <li>Product-Market Fit & Growth Systems</li>
      <li>Strategic Execution & Scale</li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold mb-2">Systems I Build</h4>
    <ul className="text-zinc-500 space-y-1">
      <li>AI Decisioning Platforms</li>
      <li>Recommendation Engines</li>
      <li>API-First Architectures</li>
      <li>Experimentation & Feedback Systems</li>
    </ul>
  </div>

</div>

          <div>
            <h4 className="font-semibold mb-2">Education</h4>
            <p className="text-zinc-500">
              Columbia University in the City of New York, MS, Technology Management(Tech-MBA)
            </p>
            <p className="text-zinc-500">
              Oregon State University, MS, Nuclear Engineering
            </p>
            <p className="text-zinc-500">
              Indian Institute of Technology, Dhanbad, B-Tech, Mechanical Engineering
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Certifications</h4>
            <p className="text-zinc-500">
              Product: SAFE POPM, PMP, CSPO, CSM
            </p>
            <p className="text-zinc-500">
              AI: Azure AI, Generative AI / Large Language Model 
            </p>
            <p className="text-zinc-500">
              Cloud: AWS SAA-C03
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}