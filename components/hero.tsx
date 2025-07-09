"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, ArrowDown, Shield, Target, Code2 } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  language: "pt" | "en"
}

const translations = {
  pt: {
    greeting: "Olá, eu sou",
    name: "Felipe Yorrison",
    title: "Red Team Junior & Pentester Iniciante",
    description:
      "Especialista iniciante em segurança ofensiva e operações Red Team. Focado em descobrir vulnerabilidades e desenvolver técnicas de penetração para fortalecer a segurança digital.",
    downloadCV: "Download CV",
    contact: "Entre em Contato",
    scrollDown: "Explore meu trabalho",
  },
  en: {
    greeting: "Hello, I'm",
    name: "Felipe Yorrison",
    title: "Junior Red Team & Beginner Pentester",
    description:
      "Beginner specialist in offensive security and Red Team operations. Focused on discovering vulnerabilities and developing penetration techniques to strengthen digital security.",
    downloadCV: "Download CV",
    contact: "Get in Touch",
    scrollDown: "Explore my work",
  },
}

const FloatingIcon = ({ icon: Icon, delay = 0, className = "" }: { icon: any; delay?: number; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`absolute transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } ${className}`}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
        <div className="relative p-4 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-pointer">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  )
}

export function Hero({ language }: HeroProps) {
  const t = translations[language]
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Mouse Follower Effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Floating Interactive Icons */}
      <FloatingIcon icon={Shield} delay={500} className="top-20 left-20 animate-bounce" />
      <FloatingIcon icon={Target} delay={1000} className="top-32 right-32 animate-pulse" />
      <FloatingIcon icon={Code2} delay={1500} className="bottom-40 left-40 animate-bounce" />

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Profile Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Rotating Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" />

              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-20" />

              {/* Main Image Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/felipe-profile.jpg"
                  alt="Felipe Yorrison"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
            </div>
          </div>

          {/* Enhanced Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-blue-300 font-medium tracking-wider uppercase animate-fade-in">{t.greeting}</p>

              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
                  {t.name}
                </span>
              </h1>

              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  <span className="relative">
                    {t.title}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed opacity-90">{t.description}</p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 mb-20">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              {t.downloadCV}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group px-10 py-6 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm"
            >
              <Mail className="mr-3 h-5 w-5 group-hover:animate-pulse" />
              {t.contact}
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-20">
            {[
              { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
              { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
              { icon: Mail, href: "#contact", label: "Email", color: "hover:text-red-400" },
            ].map((social, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <Button
                  variant="ghost"
                  size="icon"
                  className={`relative h-16 w-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 text-white ${social.color}`}
                >
                  <social.icon className="h-7 w-7 group-hover:animate-pulse" />
                </Button>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex flex-col items-center group cursor-pointer">
            <p className="text-sm text-gray-400 mb-4 group-hover:text-white transition-colors duration-300">
              {t.scrollDown}
            </p>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-8 h-12 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
              </div>
            </div>
            <ArrowDown className="h-5 w-5 text-gray-400 mt-2 group-hover:text-white group-hover:animate-bounce transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
