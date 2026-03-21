import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDir = path.join(process.cwd(), "content/case-studies")

export function getCaseStudyBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const file = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(file)

  return {
    frontmatter: data,
    content
  }
}