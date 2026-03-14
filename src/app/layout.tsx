import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Ravi Kumar Portfolio",
  description: "Product Manager Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main className="min-h-screen p-8">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}