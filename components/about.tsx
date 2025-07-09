"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Network, Target, Search, Zap, Lock } from "lucide-react"

interface AboutProps {
  language: "pt" | "en"
}

const translations = {
  pt: {
    title: "Sobre Mim",
    description:
      "Sou um especialista iniciante em Red Team e Pentesting, apaixonado por descobrir vulnerabilidades e fortalecer a segurança digital. Minha abordagem combina curiosidade técnica com metodologias estruturadas para identificar e explorar falhas de segurança.",
    passion:
      "Minha jornada na segurança ofensiva começou com a fascinação em entender como sistemas podem ser comprometidos. Dedico-me a aprender continuamente sobre novas técnicas de ataque e defesa, sempre com foco ético e profissional.",
    focus: "Áreas de Especialização",
    areas: [
      {
        icon: Shield,
        title: "Red Team Operations",
        description: "Simulação de ataques reais e técnicas de adversários avançados.",
        color: "from-red-500 to-pink-500",
      },
      {
        icon: Search,
        title: "Reconnaissance",
        description: "Coleta de informações e mapeamento de superfície de ataque.",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Network,
        title: "Network Penetration",
        description: "Testes de penetração em redes e identificação de vulnerabilidades.",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Target,
        title: "Vulnerability Assessment",
        description: "Análise e exploração de vulnerabilidades em aplicações e sistemas.",
        color: "from-purple-500 to-violet-500",
      },
      {
        icon: Zap,
        title: "Exploit Development",
        description: "Desenvolvimento de exploits e técnicas de bypass de segurança.",
        color: "from-yellow-500 to-orange-500",
      },
      {
        icon: Lock,
        title: "Post-Exploitation",
        description: "Técnicas de persistência, escalação de privilégios e lateral movement.",
        color: "from-indigo-500 to-purple-500",
      },
    ],
  },
  en: {
    title: "About Me",
    description:
      "I'm a beginner Red Team and Pentesting specialist, passionate about discovering vulnerabilities and strengthening digital security. My approach combines technical curiosity with structured methodologies to identify and exploit security flaws.",
    passion:
      "My journey in offensive security began with fascination in understanding how systems can be compromised. I dedicate myself to continuously learning about new attack and defense techniques, always with ethical and professional focus.",
    focus: "Specialization Areas",
    areas: [
      {
        icon: Shield,
        title: "Red Team Operations",
        description: "Simulation of real attacks and advanced adversary techniques.",
        color: "from-red-500 to-pink-500",
      },
      {
        icon: Search,
        title: "Reconnaissance",
        description: "Information gathering and attack surface mapping.",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Network,
        title: "Network Penetration",
        description: "Network penetration testing and vulnerability identification.",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Target,
        title: "Vulnerability Assessment",
        description: "Analysis and exploitation of vulnerabilities in applications and systems.",
        color: "from-purple-500 to-violet-500",
      },
      {
        icon: Zap,
        title: "Exploit Development",
        description: "Development of exploits and security bypass techniques.",
        color: "from-yellow-500 to-orange-500",
      },
      {
        icon: Lock,
        title: "Post-Exploitation",
        description: "Persistence techniques, privilege escalation, and lateral movement.",
        color: "from-indigo-500 to-purple-500",
      },
    ],
  },
}

export function About({ language }: AboutProps) {
  const t = translations[language]
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="text-xl">{t.description}</p>
            <p className="text-lg opacity-90">{t.passion}</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.focus}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {t.areas.map((area, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-300" />

                <CardContent className="p-8 text-center relative z-10">
                  {/* Enhanced Icon */}
                  <div className="relative mb-6 flex justify-center">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300 scale-150`}
                    />
                    <div
                      className={`relative p-4 bg-gradient-to-r ${area.color} rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h4 className="font-bold text-xl mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {area.title}
                  </h4>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {area.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${area.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                    />
                  </div>
                </CardContent>

                {/* Floating Elements */}
                {hoveredCard === index && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
