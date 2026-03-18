"use client"

import { motion } from "framer-motion"

export default function ResumeSection() {

  return (

    <section className="py-24 px-6 bg-black">

      <div className="max-w-3xl mx-auto text-center">

        <motion.div
          whileHover={{ scale:1.02 }}
          transition={{ duration:0.3, ease:[0.16,1,0.3,1] }}
          className="border border-white/10 rounded-xl p-10 bg-white/5"
        >

          <h2 className="text-2xl text-white font-semibold mb-4">
            Resume
          </h2>

          <p className="text-zinc-400 mb-6">
            Download a full overview of my product experience.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 rounded-lg bg-indigo-500 text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition"
          >
            Download PDF
          </a>

        </motion.div>

      </div>

    </section>
  )
}