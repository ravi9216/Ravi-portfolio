type Project = {
  title: string
  description: string
  link?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "10px"
    }}>

      <h3 style={{ fontSize: "22px" }}>
        {project.title}
      </h3>

      <p style={{ color: "gray" }}>
        {project.description}
      </p>

      {project.link && (
        <a href={project.link}>
          View Case Study →
        </a>
      )}

    </div>
  )
}