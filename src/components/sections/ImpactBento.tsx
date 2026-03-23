"use client"

import { motion, type Variants } from "framer-motion"
import {
  Database, BrainCircuit, Sparkles,
  TrendingUp, Users, Zap, ShieldCheck, Clock
} from "lucide-react"
import type { CSSProperties } from "react"

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

const cards = [
  {
    icon: Database,
    metric: "10× Scale",
    title: "Platform Infrastructure",
    description: "Architected distributed API systems scaling to 50K+ concurrent calls with 99.9% reliability across global enterprise environments.",
    accent: true,
  },
  {
    icon: Sparkles,
    metric: "+19% WAU",
    title: "Agentic AI Systems",
    description: "Embedded autonomous AI workflows into enterprise products leading to +19% weekly active users.",
    accent: true,
  },
  {
    icon: Zap,
    metric: "50% Latency ↓",
    title: "AI Operations",
    description: "Optimized LLM-based decision systems improving fulfillment accuracy and reducing latency by 50%.",
    accent: true,
  },
  {
    icon: TrendingUp,
    metric: "+15% Revenue",
    title: "AI Monetization",
    description: "Built AI-driven pricing & allocation systems unlocking new revenue streams across 200+ retail locations.",
    accent: true,
  },
  {
    icon: Users,
    metric: "+21% Engagement",
    title: "Enterprise UX",
    description: "Re-architected collaboration layer eliminating legacy dependencies and improving enterprise adoption.",
    accent: true,
  },
  {
    icon: BrainCircuit,
    metric: "3× Traffic",
    title: "Decision Systems",
    description: "Unified ML pipelines into scalable decision intelligence enabling 3× traffic growth.",
    accent: true,
  },
  {
    icon: ShieldCheck,
    metric: "$2M Risk ↓",
    title: "Strategic Validation",
    description: "Aligned stakeholders to de-risk enterprise AI integrations mitigating $2M in potential losses.",
    accent: true,
  },
  {
    icon: Clock,
    metric: "~2× Faster",
    title: "Execution Velocity",
    description: "Reduced enterprise launch cycles from 18 → 10 months through streamlined delivery.",
    accent: true,
  },
]

function Card({
  metric,
  title,
  description,
  icon: Icon,
  accent,
}: {
  metric: string
  title: string
  description: string
  icon: React.ElementType
  accent: boolean
}) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.25, ease: EASE }}
      style={{ height: "100%" }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-6 overflow-hidden transition-colors duration-300 hover:border-white/20"
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/[0.06] to-transparent" />

      {/* Icon */}
      <Icon
        size={20}
        strokeWidth={1.5}
        className="relative z-10 text-zinc-600 mb-4"
      />

      {/* Metric */}
      <p
        className="relative z-10 text-2xl font-semibold tracking-tight leading-none"
        style={
          accent
            ? {
                background: "linear-gradient(135deg, #60a5fa, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }
            : { color: "#ffffff" }
        }
      >
        {metric}
      </p>

      {/* Title */}
      <p className="relative z-10 text-[10px] uppercase tracking-[0.12em] text-zinc-500 mt-2">
        {title}
      </p>

      {/* Description */}
      <p className="relative z-10 text-sm text-zinc-400 mt-3 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default function ImpactBento() {
  return (
    <section id="impact" className="bg-black px-6 py-28">
      <style>{`
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 1fr;
          gap: 20px;
        }
        @media (max-width: 767px) {
          .impact-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
          }
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
          Key Impact
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="impact-grid"
        >
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}