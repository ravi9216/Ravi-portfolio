"use client"

import { motion, Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
/* -------------------------------------------------------------------------- */
/* Animation Configuration                                                    */
/* -------------------------------------------------------------------------- */

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18
    }
  }
}

const fadeUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: EASE
    }
  }
})

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const TAGS = [
  "Platform & Ecosystem Strategy",
  "AI Productization & Intelligent Systems",
  "Customer-Centric Growth & PMF",
  "Strategic Execution & Scaled"
]

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 py-28 text-center"
    >
      {/* Ambient Glow Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[640px] w-[640px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl"
      >
        {/* Headshot */}
<motion.div
  variants={fadeUp(0)}
  className="mb-6 flex justify-center"
>
  <div className="mb-6 flex justify-center">
    <div className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40">

    <Image
      src="/profile.jpg"
      alt="Ravi Kumar"
      width={96}
      height={96}
      className="rounded-full object-cover bg-black"
      priority
    />
</div>
    {/* Subtle ring */}
    <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />

  </div>
</motion.div>
        {/* Eyebrow - Scaled to be one step below Value Prop */}
        <motion.p
          variants={fadeUp(0.1)}
          className="mb-5 text-[clamp(0.875rem,1.5vw,1.05rem)] uppercase tracking-[0.12em] font-medium text-zinc-500"
        >
          Senior Product Manager · Platform, AI & Product-Market Strategy
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp(0.25)}
          className="mb-8 text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[1.05] tracking-tight text-zinc-300"
        >
          Simplify complexity into intuitive experiences.
          <br />
          
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          variants={fadeUp(0.42)}
          className="mx-auto mb-14 max-w-xl text-[clamp(1rem,1.8vw,1.2rem)] font-medium leading-tight text-zinc-400"
        >
          I architect user-centric platforms that harness intelligent systems to create high fidelity experiences, catalyzing cross-functional execution 
          <br />
          to deliver sustained growth, compounding market value & customer satisfaction.
        </motion.p>


        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp(0.55)}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            View Case Studies
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          
        </motion.div>

        {/* Tags */}
        <motion.div
          variants={fadeUp(0.72)}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
          
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-800 px-4 py-1.5 text-xs tracking-[0.04em] text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}