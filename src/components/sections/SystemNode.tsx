"use client"

import { motion } from "framer-motion"
import { memo } from "react"

interface SystemNodeProps {
  label: string
  x: number
  y: number
  active?: boolean
  onHover?: () => void
  onLeave?: () => void
  icon?: string
  textClass?: string
}

/**
 * SystemNode
 * Reusable SVG node for architecture maps
 * - Supports hover + active states
 * - Includes pulse animation + icon
 * - Optimized for performance via memo
 */
function SystemNode({
  label,
  x,
  y,
  active = false,
  onHover,
  onLeave,
  icon,
  textClass = "text-[11px] md:text-xs"
}: SystemNodeProps) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="button"
      aria-label={label}
      className="cursor-pointer focus:outline-none"
    >
      {/* ---------------- Glow Pulse (Active State) ---------------- */}
      {active && (
        <motion.circle
          r="24"
          className="fill-indigo-500/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 0.35 }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeOut"
          }}
        />
      )}

      {/* ---------------- Core Node ---------------- */}
      <motion.circle
        r="14"
        className={active ? "fill-indigo-500" : "fill-zinc-700"}
        whileHover={{ scale: 1.12 }}
        animate={{
          scale: active ? 1.08 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18
        }}
      />

      {/* ---------------- Icon ---------------- */}
      {icon && (
        <text
          textAnchor="middle"
          y="4"
          className="select-none text-[11px]"
          pointerEvents="none"
        >
          {icon}
        </text>
      )}

      {/* ---------------- Label ---------------- */}
      <text
        textAnchor="middle"
        y="34"
        className={`fill-white leading-tight ${textClass}`}
        pointerEvents="none"
      >
        {label}
      </text>
    </g>
  )
}

export default memo(SystemNode)