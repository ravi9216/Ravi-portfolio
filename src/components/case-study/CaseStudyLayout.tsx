export default function CaseStudyLayout({ children }: any) {

  const sections = [
    "Problem",
    "Customer Insights",
    "Product Strategy",
    "Tech Architecture",
    "Roadmap & Prioritization",
    "Launch & Execution",
    "Impact Metrics",
    "Lessons Learned"
  ]

  return (

    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">

      {/* sticky nav */}

      <aside className="hidden md:block sticky top-24 h-fit text-sm text-zinc-400">

        <ul className="space-y-3">

          {sections.map((s) => (
            <li key={s}>
              <a href={`#${s.toLowerCase().replaceAll(" ","-")}`}>
                {s}
              </a>
            </li>
          ))}

        </ul>

      </aside>

      <div>{children}</div>

    </div>
  )
}