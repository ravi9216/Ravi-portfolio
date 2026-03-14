type Project = {
  title: string
  description: string
  link?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          className="text-blue-600 mt-4 inline-block"
        >
          View Project
        </a>
      )}
    </div>
  )
}