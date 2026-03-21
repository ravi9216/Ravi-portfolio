"use client"

import { Linkedin, Mail, Twitter } from "lucide-react"

export default function ContactSection() {

  return (

    <footer className="py-20 bg-zinc-50 dark:bg-black text-center">

      <h3 className="text-xl font-semibold mb-6">
        Let’s find product-market fit—and build the systems that scale it.
      </h3>

      <div className="flex justify-center gap-6 text-zinc-500">

        <a href="https://www.linkedin.com/in/ravi-kumar-ai-ml-pm/">
          <Linkedin size={22} />
        </a>

        <a href="mailto:ravi.k.verma.pm@gmail.com">
          <Mail size={22} />
        </a>

      </div>

      <p className="text-xs text-zinc-400 mt-8">
        © 2026 Ravi Kumar
      </p>

    </footer>
  )
}