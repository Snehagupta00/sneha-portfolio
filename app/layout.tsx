import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sneha Gupta - Full-Stack Developer Portfolio",
  description:
    "Aspiring Full-Stack Developer crafting innovative web solutions. B.Tech Computer Science student specializing in Java, React.js, and scalable web applications.",
  keywords: "Sneha Gupta, full-stack developer, React.js portfolio, Java projects, web development, computer science",
  authors: [{ name: "Sneha Gupta" }],
  openGraph: {
    title: "Sneha Gupta - Full-Stack Developer Portfolio",
    description: "Aspiring Full-Stack Developer crafting innovative web solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <Navigation />
          <div className="pt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
