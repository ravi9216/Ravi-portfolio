import ProjectCard from "@/components/ProjectCard"

export default function Projects() {

  const projects = [
    {
      title: "AI Meeting Optimization Platform",
      description: "Built an agentic AI workflow for enterprise meeting automation.",
      impact: "Increased active usage by 25%",
    },
    {
      title: "Retail Order Allocation Platform powered by AI",
      description: "AI pricing and allocation platform for retail optimization.",
      impact: "Improved revenue by 15%",
    },
    {
      title: "Trade Credit Platform Support Bot",
      description: "RAG-based chatbot for financial support automation.",
      impact: "Reduced response time by 50%",
    },
    {
      title: "Retail Order Management System",
      description: "ML Based Recommendation System Based on Order Management System.",
      impact: "Reduced Quote rejection from 70% to 30%",
    }
  ]

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

      </div>

    </div>
  )
}