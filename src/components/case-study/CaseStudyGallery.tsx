"use client"

import { motion } from "framer-motion"
import CaseStudyCard from "@/components/case-study/CaseStudyCard"

const studies = [
  {
  slug: "ai-productization-growth-flywheel",
  title: "Rebuilding a Fragmented Collaboration Tool into an AI Productization Engine",
  description: "Inherited a fragmented collaboration product constrained by plugin-based architecture, inconsistent enterprise network performance, and unclear monetization with low feature adoption. Drove a shift to a native, API-driven platform with embedded GenAI workflows—resolving a key conflict between Engineering (platform rewrite) and Sales (protecting existing contracts) by sequencing backward-compatible releases while introducing modular monetization.",
  results: [
    "Increased revenue by 20% and retention by 18% by replacing bundled pricing with a modular add-on ecosystem, later standardized across 3+ enterprise product lines to unify monetization strategy",
    "Scaled engagement by 21% across 1M+ users by eliminating plugin dependencies and driving adoption of a native collaboration architecture used across all major enterprise deployments",
    "Drove 5x usage growth and 19% WAU lift by productizing GenAI agents into workflows, establishing a reusable AI framework adopted by multiple product teams for future feature development"
  ]
},
  {
  slug: "retail-ai-platform-ecosystem",
  title: "Building the Real-Time AI Decisioning Backbone for Retail",
  description: "Inherited fragmented allocation systems constrained by batch processing, siloed data pipelines, and conflicting incentives between merchandising (revenue) and supply chain (cost). Led a transition to a real-time AI decisioning platform, resolving accuracy vs latency tradeoffs through tiered decisioning and aligning multiple orgs on a shared platform strategy.",
  results: [
    "Drove 15% revenue growth across 200+ locations by deploying an AI allocation platform influencing multi-billion-dollar inventory flows, later standardized across merchandising and supply chain orgs",
    "Scaled allocation throughput 1.5x by introducing real-time feedback loops, establishing a shared decisioning layer adopted across 4+ internal teams for demand, pricing, and fulfillment optimization",
    "Reduced infrastructure costs by 40% and improved system resilience by 80% by decomposing batch systems into microservices, creating a platform foundation reused across multiple supply chain applications"
  ]
},
  {
  slug: "regulated-ai-personalization",
  title: "Balancing AI Personalization with Regulatory Constraints in Financial Systems",
  description: "Led the deployment of AI-driven personalization and risk systems within a highly regulated environment constrained by strict explainability requirements and fragmented legacy data systems. Resolved a core conflict between Risk (transparency) and Product (performance) by introducing interpretable models and audit layers, enabling compliant AI adoption across the organization.",
  results: [
    "Increased sales by 11% across 1,000+ merchants by deploying real-time personalization models, later standardized across multiple credit and lending workflows",
    "Improved AML detection accuracy by 56% and reduced false positives by 30% by redesigning model pipelines with feature-level traceability, establishing a compliance-first ML framework adopted across risk teams",
    "Scaled a GenAI support system to 10K+ monthly queries with 50% lower latency by optimizing RAG pipelines, creating a reusable architecture leveraged across multiple customer support use cases"
  ]
},
{
  slug: "enterprise-recommendation-intelligence",
  title: "Re-Architecting Quote-to-Order into a Real-Time Recommendation System",
  description: "Inherited a legacy quote-to-order system constrained by batch pricing logic, manual XML integrations, and low trust from sales teams overriding recommendations >60% of the time. Led a shift to an ML-based recommendation platform, resolving Sales vs Finance conflicts through explainable models and controlled override mechanisms.",
  results: [
    "Reduced decision time by 50% for 100K+ users by replacing batch heuristics with real-time recommendation systems, later adopted across multiple pricing and quoting workflows",
    "Increased conversion by 21% and CSAT by 66% by pivoting to a hybrid recommendation model after failed experiments, establishing a reusable experimentation framework across product teams",
    "Reduced onboarding time from 6 months to 2 weeks (80% cost reduction) by replacing XML integrations with self-serve APIs, creating a standardized integration layer adopted across enterprise onboarding flows"
  ]
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

            <CaseStudyCard key={study.slug} {...study} 
            
            />

          ))}

        </motion.div>

      </div>

    </section>

  )
}