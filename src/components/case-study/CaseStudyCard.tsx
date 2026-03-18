"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CaseStudyCard({
  slug,
  title,
  description,
  result
}: {
  slug: string
  title: string
  description: string
  result: string
}) {

  return (

    <motion.div
      layoutId={`card-${slug}`}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative min-w-[320px] md:min-w-[420px] snap-start rounded-2xl 
      border border-white/10 bg-white/5 backdrop-blur-lg p-6 transition overflow-hidden"
    >

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-zinc-400 mt-3">
        {description}
      </p>

      {/* key result pill */}

      <div className="mt-5 inline-block px-3 py-1 text-xs rounded-full 
      bg-green-400/10 text-green-300 border border-green-400/20">
        {result}
      </div>

      {/* hover button */}

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="mt-6"
      >

        <Link
          href={`/case-studies/${slug}`}
          className="text-sm text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white/10"
        >
          Read Case Study
        </Link>

      </motion.div>

    </motion.div>

  )
}