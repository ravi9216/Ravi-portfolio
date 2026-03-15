import About from "@/app/about/page"
import Experience from "@/app/experience/page"
import Projects from "@/app/projects/page"
import Blog from "@/app/blog/page"
import Contact from "@/app/contact/page"
import ProjectCard from "@/components/ProjectCard"

const projects = [
  {
    title: "AI Meeting Agent Platform",
    description:
      "Built an AI agent orchestration platform to automate meeting workflows and improve engagement.",
    link: "#",
  },
  {
    title: "Trade Credit AI Assistant",
    description:
      "Developed a RAG-powered AI assistant for trade credit support queries.",
    link: "#",
  },
  {
    title: "Retail Order Allocation AI",
    description:
      "Created an AI system to optimize inventory allocation across stores.",
    link: "#",
  },
]

export default function Home() {
  return (
    <main>

      <section id="home" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px" }}>Ravi Kumar</h1>
        <p style={{ color: "gray", marginTop: "10px" }}>
          Product Manager specializing in AI platforms, fintech systems, and enterprise automation.
        </p>
      </section>

      <section id="about" style={{ padding: "80px 20px" }}>
        <About />
      </section>

      <section id="experience" style={{ padding: "80px 20px" }}>
        <Experience />
      </section>

      <section id="projects" style={{ padding: "80px 20px" }}>
        <Projects />
      </section>

      <section id="blog" style={{ padding: "80px 20px" }}>
        <Blog />
      </section>

      <section id="contact" style={{ padding: "80px 20px" }}>
        <Contact />
      </section>

    </main>
  )
}