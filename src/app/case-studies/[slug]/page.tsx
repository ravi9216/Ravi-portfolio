import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import CaseStudyGallery from "@/Components/case-study/CaseStudyGallery"

export default async function CaseStudyPage({ params }: any) {

  const filePath = path.join(
    process.cwd(),
    "content/case-studies",
    `${params.slug}.mdx`
  )

  const source = fs.readFileSync(filePath, "utf8")

  const { content, data } = matter(source)

  return (

    <article className="max-w-3xl mx-auto py-28 px-6 text-zinc-300">

      <h1 className="text-4xl font-semibold text-white mb-8">
        {data.title}
      </h1>

      <MDXRemote source={content} />

    </article>

  )
}