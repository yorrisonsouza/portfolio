"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Shield, Network, ChevronLeft, ChevronRight, Target } from "lucide-react"

interface ProjectsProps {
  language: "pt" | "en"
}

const translations = {
  pt: {
    title: "Projetos de Red Team",
    subtitle: "Ferramentas e técnicas desenvolvidas para operações de segurança ofensiva",
    viewCode: "Ver Código",
    liveDemo: "Demo",
    projects: [
      {
        title: "Java Port Scanner",
        description:
          "Scanner de portas multi-threaded desenvolvido em Java com detecção de serviços e geração de relatórios detalhados.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Network Security", "Threading", "Socket"],
        icon: Network,
        category: "Reconnaissance",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Java Payload Generator",
        description:
          "Ferramenta Java para geração de payloads customizados para diferentes tipos de exploits e bypass de antivírus.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Exploit Development", "Payload", "Evasion"],
        icon: Shield,
        category: "Weaponization",
        gradient: "from-red-500 to-pink-500",
      },
      {
        title: "Web Vulnerability Scanner",
        description:
          "Scanner de vulnerabilidades web em Java focado em OWASP Top 10, com detecção automatizada de SQL Injection e XSS.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Web Security", "OWASP", "Automation"],
        icon: Target,
        category: "Scanning",
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Java Reverse Shell",
        description:
          "Implementação de reverse shell em Java com criptografia e técnicas de evasão para operações de Red Team.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Post-Exploitation", "Encryption", "Stealth"],
        icon: Shield,
        category: "Post-Exploitation",
        gradient: "from-purple-500 to-violet-500",
      },
      {
        title: "Network Traffic Interceptor",
        description:
          "Ferramenta Java para interceptação e análise de tráfego de rede em tempo real durante testes de penetração.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Network Analysis", "Packet Capture", "Real-time"],
        icon: Network,
        category: "Analysis",
        gradient: "from-orange-500 to-red-500",
      },
      {
        title: "Java Phishing Framework",
        description:
          "Framework em Java para criação e gerenciamento de campanhas de phishing com templates personalizáveis.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Social Engineering", "Web Framework", "Templates"],
        icon: Target,
        category: "Social Engineering",
        gradient: "from-teal-500 to-cyan-500",
      },
    ],
  },
  en: {
    title: "Red Team Projects",
    subtitle: "Tools and techniques developed for offensive security operations",
    viewCode: "View Code",
    liveDemo: "Demo",
    projects: [
      {
        title: "Java Port Scanner",
        description:
          "Multi-threaded port scanner developed in Java with service detection and detailed report generation.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Network Security", "Threading", "Socket"],
        icon: Network,
        category: "Reconnaissance",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Java Payload Generator",
        description: "Java tool for generating custom payloads for different types of exploits and antivirus bypass.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Exploit Development", "Payload", "Evasion"],
        icon: Shield,
        category: "Weaponization",
        gradient: "from-red-500 to-pink-500",
      },
      {
        title: "Web Vulnerability Scanner",
        description:
          "Java web vulnerability scanner focused on OWASP Top 10, with automated SQL Injection and XSS detection.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Web Security", "OWASP", "Automation"],
        icon: Target,
        category: "Scanning",
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Java Reverse Shell",
        description:
          "Java reverse shell implementation with encryption and evasion techniques for Red Team operations.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Post-Exploitation", "Encryption", "Stealth"],
        icon: Shield,
        category: "Post-Exploitation",
        gradient: "from-purple-500 to-violet-500",
      },
      {
        title: "Network Traffic Interceptor",
        description: "Java tool for real-time network traffic interception and analysis during penetration testing.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Network Analysis", "Packet Capture", "Real-time"],
        icon: Network,
        category: "Analysis",
        gradient: "from-orange-500 to-red-500",
      },
      {
        title: "Java Phishing Framework",
        description: "Java framework for creating and managing phishing campaigns with customizable templates.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["Java", "Social Engineering", "Web Framework", "Templates"],
        icon: Target,
        category: "Social Engineering",
        gradient: "from-teal-500 to-cyan-500",
      },
    ],
  },
}

export function Projects({ language }: ProjectsProps) {
  const t = translations[language]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const projectsPerView = isMobile ? 1 : 2
  const maxIndex = Math.max(0, t.projects.length - projectsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </Button>

          {/* Projects Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)` }}
            >
              {t.projects.map((project, index) => (
                <div key={index} className={`${isMobile ? "w-full" : "w-1/2"} flex-shrink-0 px-2 md:px-4`}>
                  <Card className="group overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full">
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs md:text-sm"
                        >
                          <project.icon className="h-3 w-3" />
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <CardContent className="p-4 md:p-6 flex flex-col h-full">
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base line-clamp-3 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-auto">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent text-xs md:text-sm">
                          <Github className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                          {t.viewCode}
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs md:text-sm"
                        >
                          <ExternalLink className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                          {t.liveDemo}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
