import Hero from "@/components/sections/Hero"
import ImpactBento from "@/components/sections/ImpactBento"
import CaseStudyGallery from "@/components/case-study/CaseStudyGallery"
import ProductThinking from "@/components/sections/ProductThinking"
import TechnicalMap from "@/components/sections/TechnicalMap"
import ProductTeardowns from "@/components/sections/ProductTeardowns"
import AboutSection from "@/components/sections/AboutSection"
import ResumeSection from "@/components/sections/ResumeSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <main className="flex flex-col gap-32">

      {/* HERO */}
      <Hero />

      {/* KEY IMPACT BENTO GRID */}
      <ImpactBento />

      {/* FEATURED CASE STUDIES */}
      <CaseStudyGallery />

      {/* PRODUCT THINKING */}
      <ProductThinking />

      {/* TECHNICAL PRODUCT WORK */}
      <TechnicalMap />

      {/* PRODUCT TEARDOWNS */}
      <ProductTeardowns />

      {/* ABOUT */}
      <AboutSection />

      {/* RESUME */}
      <ResumeSection />

      {/* CONTACT */}
      <ContactSection />

    </main>
  )
}