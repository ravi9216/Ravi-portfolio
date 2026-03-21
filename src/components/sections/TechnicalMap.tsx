"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SystemNode from "./SystemNode"

type Module = {
  id: string
  label: string
  tooltip: string
}

const modules = [
  {
    id: "api",
    label: "Platform API Layer",
    icon: "🔗",
    tooltip:
      "Designed API-first primitives to replace brittle integrations, enabling self-serve onboarding and reducing time-to-integrate from months to weeks. Trade-off: enforced stricter contracts upfront to ensure downstream scalability and cross-team reuse."
  },
  {
    id: "ml",
    label: "AI Decisioning Engine",
    icon: "🧠",
    tooltip:
      "Operationalized ML models into real-time decision systems, balancing model accuracy vs user trust by introducing hybrid logic and explainability layers. Trade-off: sacrificed theoretical optimality to improve adoption and business impact."
  },
  {
    id: "ab",
    label: "Experimentation & Feedback Loop",
    icon: "📊",
    tooltip:
      "Built a closed-loop experimentation system linking user behavior to product iteration, enabling rapid hypothesis testing at scale."
  },
  {
    id: "data",
    label: "Unified Data Platform",
    icon: "⚙️",
    tooltip:
      "Consolidated fragmented data systems into a real-time feedback layer powering allocation, personalization, and analytics."
  }
]

export default function TechnicalMap() {
  const [active, setActive] = useState<string | null>(null)

  // ✅ Horizontal layout positions
  const positions = [
    { x: -90, y: 80 },   // API
    { x: 140, y: 80 },  // ML
    { x: 380, y: 80 },  // EXP
    { x: 610, y: 80 }   // DATA
  ]

  const center = { x: 260, y: 240 }

  const activeNode = modules.find(m => m.id === active)
  const activeIndex = modules.findIndex(m => m.id === active)
  const activePosition =
    activeIndex !== -1 ? positions[activeIndex] : null

  return (
    <section
      id="architecture-map"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="mb-10 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Architecture Map
          </h2>

          <p className="text-zinc-400 text-sm md:text-base">
            I design scalable product systems by balancing performance, developer experience, and data architecture—aligning trade-offs across infrastructure, ML, and experimentation layers.
          </p>
        </div>

        {/* MAP */}
        <div className="relative flex justify-center md:justify-start">

          {/* Connection Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {activePosition && (
              <motion.line
                x1="15%"
                y1="10%"
                x2={`${(activePosition.x / 520) * 100}%`}
                y2={`${(activePosition.y / 320) * 100}%`}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </svg>

          {/* MAP BOX */}
          <div className="w-full max-w-4xl h-[320px] 
                          border border-white/5 rounded-xl 
                          p-6 bg-white/5 backdrop-blur">

            <svg
              viewBox="0 0 520 320"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >

              {/* CENTER NODE */}
              <circle
                cx={center.x}
                cy={center.y}
                r="18"
                className="fill-indigo-500"
              />

              <text
                x={center.x}
                y={center.y + 30}
                textAnchor="middle"
                className="fill-white text-sm md:text-base font-semibold"
              >
                Intelligent Product Ecosystem
              </text>

              {/* CONNECTION LINES */}
              {modules.map((m, i) => {
                const p = positions[i]

                return (
                  <motion.line
                    key={m.id}
                    x1={center.x}
                    y1={center.y}
                    x2={p.x}
                    y2={p.y}
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: active === m.id ? 1 : 0.3
                    }}
                    transition={{ duration: 0.5 }}
                  />
                )
              })}

              {/* MODULE NODES */}
              {modules.map((m, i) => {
                const p = positions[i]

                return (
                  <SystemNode
                    key={m.id}
                    label={m.label}
                    x={p.x}
                    y={p.y}
                    active={active === m.id}
                    textClass="text-[11px] md:text-xs text-center"
                    onHover={() => setActive(m.id)}
                    onLeave={() => setActive(null)}
                  />
                )
              })}

            </svg>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-10 max-w-md">
          {activeNode ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-white/10 rounded-xl p-5 bg-zinc-900"
            >
              <h3 className="text-white font-medium mb-2 text-sm">
                Technical Decision
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {activeNode.tooltip}
              </p>
            </motion.div>
          ) : (
            <div className="text-zinc-500 text-sm">
              Hover a system module to explore technical trade-offs
            </div>
          )}
        </div>
      </div>
    </section>
  )
}