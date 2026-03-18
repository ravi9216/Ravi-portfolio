"use client"

import { Linkedin, Mail, Twitter } from "lucide-react"

export default function ContactSection() {

  return (

    <footer className="py-20 bg-zinc-50 dark:bg-black text-center">

      <h3 className="text-xl font-semibold mb-6">
        Let's build something meaningful
      </h3>

      <div className="flex justify-center gap-6 text-zinc-500">

        <a href="https://linkedin.com">
          <Linkedin size={22} />
        </a>

        <a href="https://twitter.com">
          <Twitter size={22} />
        </a>

        <a href="mailto:email@example.com">
          <Mail size={22} />
        </a>

      </div>

      <p className="text-xs text-zinc-400 mt-8">
        © 2026 Your Name
      </p>

    </footer>
  )
}