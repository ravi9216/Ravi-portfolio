import ProjectCard from "@/components/ProjectCard"

const projects = [
  {
    title: "AI Meeting Agents Platform",
    description:
      "Built agent orchestration layer to automate meeting workflows, increasing engagement 25%.",
    link: "#"
  },
  {
    title: "Trade Credit AI Assistant",
    description:
      "Built RAG-powered support assistant handling 10K monthly queries.",
    link: "#"
  },
  {
    title: "Retail Order Allocation AI",
    description:
      "Optimized supply chain allocation across 200+ stores increasing revenue 15%.",
    link: "#"
  }
]

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Ravi Kumar
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl">
          Product Manager focused on AI platforms, fintech systems, and
          enterprise workflow automation.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

    </main>
  )
}