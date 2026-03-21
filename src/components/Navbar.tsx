"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Impact", href: "#impact" },
  { label: "Case Studies", href: "#case-studies" },
  //{ label: "Strategy", href: "#innovative-product-thinking" },
  { label: "About", href: "#about" },
  //{ label: "Contact", href: "#Contact" }
]

export default function Navbar() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="font-semibold text-lg">
          Ravi Portfolio
        </div>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                active === link.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

        </nav>

        {/* ✅ Mobile Fallback (TEMP SIMPLE VERSION) */}
        <nav className="flex md:hidden gap-4 text-xs text-zinc-400 overflow-x-auto">

          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}

        </nav>

      </div>
    </header>
  )
}