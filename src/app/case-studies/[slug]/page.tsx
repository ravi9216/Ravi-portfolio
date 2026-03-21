import { getCaseStudyBySlug } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation" // Required for the notFound() call
import rehypeSlug from 'rehype-slug'
// 1. Make the component 'async'
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the params to extract the slug
  const { slug } = await params;
  
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
      rehypePlugins: [rehypeSlug], // This auto-generates the IDs for your sticky nav
    },
  }}
        />
      </div>
    </div>
  )
}