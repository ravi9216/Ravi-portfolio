export default function ResumePage() {
  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-6 text-3xl font-semibold text-zinc-200">
          Resume
        </h1>

        <a
          href="/resume.pdf"
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}