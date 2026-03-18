"use client"
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react"

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Added 'span' prop to handle Bento sizing
function Card({ className, children, span = "" }: any) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-6 overflow-hidden",
        "transition-all duration-300 hover:border-white/20",
        span, // This applies md:col-span-2 or md:row-span-2
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/[0.06] to-transparent" />
      {children}
    </motion.div>
  )
}

export default function BentoImpact() {
  return (
    <div className="bg-black py-20 px-6">
      <h2 className="text-white text-center text-3xl font-semibold mb-10 tracking-tight">Key Impact</h2>
      
      {/* THE FIX: Grid container with 2 columns */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Card 1: Wide */}
        <Card span="md:col-span-2">
           <div className="text-blue-400 text-4xl font-bold italic">10× Scale</div>
           <p className="text-zinc-400 mt-2">Scaled API infrastructure from 5K to 50K+ simultaneous calls.</p>
        </Card>

        {/* Card 2: Tall */}
        <Card span="md:row-span-2">
           <div className="text-white text-4xl font-bold">-50%</div>
           <p className="text-zinc-400 mt-2">Latency reduction across distributed systems.</p>
        </Card>

        {/* Card 3: Standard */}
        <Card>
           <div className="text-white text-4xl font-bold">+15%</div>
           <p className="text-zinc-400 mt-2">Revenue lift via pricing architecture.</p>
        </Card>

        {/* Card 4: Standard */}
        <Card>
           <div className="text-white text-4xl font-bold">+25%</div>
           <p className="text-zinc-400 mt-2">WAU growth from GenAI features.</p>
        </Card>

        {/* Card 5: Standard */}
        <Card>
           <div className="text-purple-400 text-4xl font-bold">$2M</div>
           <p className="text-zinc-400 mt-2">Cost savings on enterprise integrations.</p>
        </Card>

        {/* Card 6: Standard */}
        <Card>
           <div className="text-white text-4xl font-bold">2×</div>
           <p className="text-zinc-400 mt-2">Faster launch cycles.</p>
        </Card>

        {/* Card 7: Wide Footer */}
        <Card span="md:col-span-2">
           <div className="text-blue-400 text-4xl font-bold italic">10× Intelligence</div>
           <p className="text-zinc-400 mt-2">ML feedback loops drove massive uplift in decision quality.</p>
        </Card>
      </motion.div>
    </div>
  );
}
// temp change