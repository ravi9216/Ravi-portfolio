export default function Navbar() {

  return (
    <nav className="flex justify-between p-6 border-b">

      <a href="/" className="font-bold text-xl">
        Ravi
      </a>

      <div className="space-x-6">

        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>

      </div>

    </nav>
  )
}