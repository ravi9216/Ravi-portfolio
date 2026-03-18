"use client"

import { motion } from "framer-motion"

type NodeProps = {
  label: string
  x: number
  y: number
  active: boolean
  onHover: () => void
  onLeave: () => void
}

export default function SystemNode({
  label,
  x,
  y,
  active,
  onHover,
  onLeave
}: NodeProps) {

  return (

    <motion.g
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ scale: 0.9 }}
      animate={{ scale: active ? 1.1 : 1 }}
      transition={{ duration: 0.25 }}
    >

      <circle
        cx={x}
        cy={y}
        r="12"
        className={`${
          active ? "fill-indigo-400" : "fill-white"
        }`}
      />

      <text
        x={x}
        y={y + 28}
        textAnchor="middle"
        className="fill-white text-xs tracking-tight"
      >
        {label}
      </text>

    </motion.g>

  )
}