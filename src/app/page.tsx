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
    <main style={{ maxWidth: "1000px", margin: "auto", padding: "40px" }}>
      
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Ravi Kumar
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "40px", color: "gray" }}>
        Product Manager specializing in AI platforms, fintech systems,
        and enterprise automation.
      </p>

      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Featured Projects
      </h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </main>
  )
}