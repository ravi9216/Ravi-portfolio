"use client"

import { motion } from "framer-motion"
import CaseStudyCard from "@/components/case-study/CaseStudyCard"

const studies = [
  {
    slug: "churn-reduction",
    title: "Reducing SaaS Churn",
    description:
      "Redesigned onboarding and lifecycle engagement for enterprise SaaS customers.",
    result: "Reduced churn 15%"
  },
  {
    slug: "ml-recommendations",
    title: "ML Recommendation Engine",
    description:
      "Built an ML-powered discovery system to improve engagement.",
    result: "+28% engagement"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function CaseStudyGallery() {

  return (

    <section id="case-studies" className="py-28 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          Case Studies
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6"
        >

          {studies.map((study) => (

            <CaseStudyCard key={study.slug} {...study} />

          ))}

        </motion.div>

      </div>

    </section>

  )
}