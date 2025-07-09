"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Shield } from "lucide-react"
import { Target } from "lucide-react"

interface TimelineProps {
  language: "pt" | "en"
}

const translations = {
  pt: {
    title: "Minha Jornada Red Team",
    timeline: [
      {
        year: "2023",
        title: "Início em Java",
        description: "Comecei aprendendo Java com foco em desenvolvimento de ferramentas para segurança e automação.",
        icon: Code,
        type: "education",
      },
      {
        year: "2024",
        title: "Descoberta do Red Team",
        description:
          "Primeiro contato com operações de Red Team e desenvolvimento de ferramentas de pentesting em Java.",
        icon: Shield,
        type: "education",
      },
      {
        year: "2024",
        title: "Primeiros Projetos",
        description: "Desenvolvimento de scanners e ferramentas básicas de reconnaissance usando Java.",
        icon: Target,
        type: "work",
      },
      {
        year: "2025",
        title: "Especialização Avançada",
        description: "Aprofundamento em técnicas de evasão, post-exploitation e desenvolvimento de exploits.",
        icon: GraduationCap,
        type: "education",
      },
    ],
  },
  en: {
    title: "My Red Team Journey",
    timeline: [
      {
        year: "2023",
        title: "Started with Java",
        description: "Began learning Java with focus on developing security tools and automation.",
        icon: Code,
        type: "education",
      },
      {
        year: "2024",
        title: "Red Team Discovery",
        description: "First contact with Red Team operations and development of pentesting tools in Java.",
        icon: Shield,
        type: "education",
      },
      {
        year: "2024",
        title: "First Projects",
        description: "Development of scanners and basic reconnaissance tools using Java.",
        icon: Target,
        type: "work",
      },
      {
        year: "2025",
        title: "Advanced Specialization",
        description: "Deepening knowledge in evasion techniques, post-exploitation, and exploit development.",
        icon: GraduationCap,
        type: "education",
      },
    ],
  },
}

export function Timeline({ language }: TimelineProps) {
  const t = translations[language]

  return (
    <section id="journey" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {t.timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-background border-4 border-border rounded-full flex items-center justify-center z-10">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                            {item.year}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              item.type === "work"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                            }`}
                          >
                            {item.type === "work"
                              ? language === "pt"
                                ? "Trabalho"
                                : "Work"
                              : language === "pt"
                                ? "Educação"
                                : "Education"}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
