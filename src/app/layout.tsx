import "./globals.css"
import Navbar from "../components/Navbar"

export const metadata = {
  title: "Ravi Kumar Portfolio",
  description: "Product Manager Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white scroll-smooth">

        {/* ✅ Client Component */}
        <Navbar />

        {children}

      </body>
    </html>
  )
}