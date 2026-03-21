"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface CaseStudyProps {
  slug: string
  title: string
  description: string
  results: string[] // Changed from 'result' to 'results' to match your data
}

export default function CaseStudyCard({
  slug,
  title,
  description,
  results
}: CaseStudyProps) {
  return (
    <motion.div
      layoutId={`card-${slug}`}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative min-w-[320px] md:min-w-[450px] snap-start rounded-2xl 
border border-white/10 bg-zinc-900/50 backdrop-blur-lg p-8 transition-all flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold text-white leading-tight">
          {title}
        </h3>

        <p className="text-zinc-400 mt-4 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Key Results List */}
        <div className="mt-6 space-y-3">
          {Array.isArray(results) && results.length > 0 && results.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-2 px-3 py-2 rounded-lg bg-green-500/5 border border-green-500/10"
            >
              <span className="text-green-400 mt-1">•</span>
              <p className="text-xs text-green-200/80 leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Link
          href={`/case-studies/${slug}`}
          prefetch={true}
          className="inline-block text-xs font-medium text-white border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
        >
          View Case Study
        </Link>
      </div>
    </motion.div>
  )
}