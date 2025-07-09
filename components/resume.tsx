"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, GraduationCap, Award, BookOpen } from "lucide-react"

interface ResumeProps {
  language: "pt" | "en"
}

const translations = {
  pt: {
    title: "Currículo",
    download: "Download PDF",
    education: "Educação",
    certifications: "Certificações",
    experience: "Experiência em Red Team",
    sections: {
      education: [
        {
          title: "Tecnólogo em Segurança da Informação",
          institution: "Universidade Tecnológica",
          period: "2023 - 2025",
          description: "Foco em segurança ofensiva, análise de vulnerabilidades e desenvolvimento de ferramentas.",
        },
      ],
      certifications: [
        {
          title: "eJPT - eLearnSecurity Junior Penetration Tester",
          issuer: "eLearnSecurity",
          period: "Em andamento",
          description: "Certificação prática em testes de penetração e técnicas de Red Team.",
        },
        {
          title: "Introduction to Ethical Hacking",
          issuer: "Cybrary",
          period: "2024",
          description: "Curso introdutório sobre ethical hacking e metodologias de pentesting.",
        },
        {
          title: "Java Programming Fundamentals",
          issuer: "Oracle",
          period: "2024",
          description: "Fundamentos de Java aplicados ao desenvolvimento de ferramentas de segurança.",
        },
      ],
      experience: [
        {
          title: "Desenvolvimento de Ferramentas Java",
          company: "Projetos Pessoais",
          period: "2024 - Presente",
          description: "Criação de scanners, exploits e ferramentas de automação em Java para testes de penetração.",
        },
        {
          title: "Laboratórios de Red Team",
          company: "Ambiente Virtual",
          period: "2024 - Presente",
          description: "Simulação de ataques reais usando MITRE ATT&CK framework e técnicas de adversários.",
        },
        {
          title: "Bug Bounty Hunter Iniciante",
          company: "Plataformas Online",
          period: "2024 - Presente",
          description: "Participação em programas de bug bounty focando em vulnerabilidades web.",
        },
      ],
    },
  },
  en: {
    title: "Resume",
    download: "Download PDF",
    education: "Education",
    certifications: "Certifications",
    experience: "Red Team Experience",
    sections: {
      education: [
        {
          title: "Technology in Information Security",
          institution: "Technology University",
          period: "2023 - 2025",
          description: "Focus on offensive security, vulnerability analysis, and tool development.",
        },
      ],
      certifications: [
        {
          title: "eJPT - eLearnSecurity Junior Penetration Tester",
          issuer: "eLearnSecurity",
          period: "In Progress",
          description: "Practical certification in penetration testing and Red Team techniques.",
        },
        {
          title: "Introduction to Ethical Hacking",
          issuer: "Cybrary",
          period: "2024",
          description: "Introductory course on ethical hacking and pentesting methodologies.",
        },
        {
          title: "Java Programming Fundamentals",
          issuer: "Oracle",
          period: "2024",
          description: "Java fundamentals applied to security tool development.",
        },
      ],
      experience: [
        {
          title: "Java Tool Development",
          company: "Personal Projects",
          period: "2024 - Present",
          description: "Creation of scanners, exploits, and automation tools in Java for penetration testing.",
        },
        {
          title: "Red Team Laboratories",
          company: "Virtual Environment",
          period: "2024 - Present",
          description: "Simulation of real attacks using MITRE ATT&CK framework and adversary techniques.",
        },
        {
          title: "Beginner Bug Bounty Hunter",
          company: "Online Platforms",
          period: "2024 - Present",
          description: "Participation in bug bounty programs focusing on web vulnerabilities.",
        },
      ],
    },
  },
}

export function Resume({ language }: ResumeProps) {
  const t = translations[language]

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-3 h-5 w-5" />
            {t.download}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Education */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                {t.education}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {t.sections.education.map((item, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h3 className="font-semibold text-lg leading-tight mb-1">{item.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mb-2">{item.period}</p>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                {t.certifications}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {t.sections.certifications.map((item, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-green-200 dark:border-green-800">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h3 className="font-semibold text-lg leading-tight mb-1">{item.title}</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm">{item.issuer}</p>
                    <p className="text-muted-foreground text-sm mb-2">{item.period}</p>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                {t.experience}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {t.sections.experience.map((item, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                    <h3 className="font-semibold text-lg leading-tight mb-1">{item.title}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">{item.company}</p>
                    <p className="text-muted-foreground text-sm mb-2">{item.period}</p>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
