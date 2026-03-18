"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SystemNode from "./SystemNode"

type Module = {
  id: string
  label: string
  tooltip: string
}

const modules: Module[] = [

  {
    id: "api",
    label: "API Gateway",
    tooltip:
      "Trade-off: prioritized caching + gateway routing to reduce latency by ~40ms"
  },

  {
    id: "ml",
    label: "ML Inference",
    tooltip:
      "Trade-off: batch training with real-time inference endpoints"
  },

  {
    id: "ab",
    label: "Experiment Engine",
    tooltip:
      "Trade-off: deterministic experiment buckets for statistical validity"
  },

  {
    id: "data",
    label: "B2B Data Lake",
    tooltip:
      "Trade-off: columnar storage optimized for analytics queries"
  }

]

export default function TechnicalMap() {

  const [active, setActive] = useState<string | null>(null)

  return (

    <section
      id="architecture-map"
      className="py-32 px-6 bg-black relative overflow-hidden"
    >

      {/* radial glow background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">

        {/* LEFT: ARCHITECTURE MAP */}

        <div className="border border-white/5 rounded-xl p-10 bg-white/5 backdrop-blur">

          <svg
            viewBox="0 0 400 400"
            className="w-full"
          >

            {/* Central Platform Node */}

            <circle
              cx="200"
              cy="200"
              r="18"
              className="fill-indigo-500"
            />

            <text
              x="200"
              y="235"
              textAnchor="middle"
              className="fill-white text-sm"
            >
              Product Platform
            </text>

            {/* Lines */}

            {modules.map((m, i) => {

              const positions = [
                { x: 200, y: 60 },
                { x: 340, y: 200 },
                { x: 200, y: 340 },
                { x: 60, y: 200 }
              ]

              const p = positions[i]

              return (

                <motion.line
                  key={m.id}
                  x1="200"
                  y1="200"
                  x2={p.x}
                  y2={p.y}
                  stroke="white"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: active === m.id ? 1 : 0.3
                  }}
                  transition={{ duration: 0.8 }}
                />

              )
            })}

            {/* Nodes */}

            {modules.map((m, i) => {

              const positions = [
                { x: 200, y: 60 },
                { x: 340, y: 200 },
                { x: 200, y: 340 },
                { x: 60, y: 200 }
              ]

              const p = positions[i]

              return (

                <SystemNode
                  key={m.id}
                  label={m.label}
                  x={p.x}
                  y={p.y}
                  active={active === m.id}
                  onHover={() => setActive(m.id)}
                  onLeave={() => setActive(null)}
                />

              )
            })}

          </svg>

        </div>

        {/* RIGHT: DECISION LOG */}

        <div className="flex flex-col justify-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Architecture Map
          </h2>

          <p className="text-zinc-400 mb-8 max-w-xl">
            I work closely with engineering teams to design scalable
            product systems — balancing performance, developer
            experience, and data architecture.
          </p>

          {/* Tooltip */}

          {active && (

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-white/10 rounded-xl p-6 bg-zinc-900"
            >

              <h3 className="text-white font-medium mb-2">
                Technical Decision
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {
                  modules.find(m => m.id === active)?.tooltip
                }
              </p>

            </motion.div>

          )}

          {!active && (

            <div className="border border-white/10 rounded-xl p-6 bg-zinc-900 text-zinc-500 text-sm">
              Hover a system module to explore the technical
              trade-offs behind the architecture.
            </div>

          )}

        </div>

      </div>

    </section>

  )
}