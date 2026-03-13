export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh]">

      <h1 className="text-6xl font-bold">
        Ravi Kumar
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        Product Manager | Product, Platform, and AI Strategy
      </p>

      <p className="mt-6 max-w-xl text-center">
        I build enterprise platforms powered by AI that is scalable across retail technology, fintech, and
        enterprise software.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border rounded-lg"
        >
          Contact
        </a>
      </div>

    </section>
  )
}