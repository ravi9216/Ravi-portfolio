export default function ProjectCard({ project }) {

  return (
    <div className="border rounded-lg p-6 hover:shadow-lg">

      <h2 className="text-2xl font-semibold">
        {project.title}
      </h2>

      <p className="mt-3 text-gray-600">
        {project.description}
      </p>

      <p className="mt-4 font-medium">
        Impact: {project.impact}
      </p>

    </div>
  )
}