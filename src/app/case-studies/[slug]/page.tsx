import { getCaseStudyBySlug } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import rehypeSlug from "rehype-slug"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Extract the slug from the async params
  const { slug } = await params
  
  // 2. THIS IS THE MISSING LINE 6: Fetch the data
  const study = getCaseStudyBySlug(slug)

  // 3. Return the Next.js 404 page if study doesn't exist
  if (!study) return notFound()

  return (
    <div className="text-white px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        {study.frontmatter.title}
      </h1>

      <div className="prose prose-invert">
        <MDXRemote 
          source={study.content} 
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeSlug], 
            },
          }}
        />
      </div>
    </div>
  )
}