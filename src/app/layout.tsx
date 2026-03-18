import "./globals.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Link from "next/link"
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
      <body>

        <nav
          style={{
            position: "sticky",
            top: 0,
            background: "white",
            borderBottom: "1px solid #eee",
            padding: "15px 40px",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 1000,
          }}
        >
          <strong>Ravi Portfolio</strong>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </nav>

        {children}

      </body>
    </html>
  )
}