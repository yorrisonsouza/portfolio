"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Timeline } from "@/components/timeline"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Portfolio() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <Hero language={language} />
          <About language={language} />
          <Timeline language={language} />
          <Skills language={language} />
          <Projects language={language} />
          <Resume language={language} />
          <Contact language={language} />
        </main>
        <Footer language={language} />
      </div>
    </ThemeProvider>
  )
}
