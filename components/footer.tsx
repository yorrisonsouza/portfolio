"use client"

import { Github, Linkedin, Mail, Heart, Code, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  language: "pt" | "en"
}

const translations = {
  pt: {
    madeWith: "Desenvolvido com",
    by: "por",
    name: "Felipe Yorrison",
    rights: "Todos os direitos reservados.",
    tagline: "Red Team Junior & Pentester Especializado",
    contact: "yorrison.souza.corporativo@gmail.com",
    location: "Sangão, SC - Brasil",
  },
  en: {
    madeWith: "Developed with",
    by: "by",
    name: "Felipe Yorrison",
    rights: "All rights reserved.",
    tagline: "Junior Red Team & Specialized Pentester",
    contact: "yorrison.souza.corporativo@gmail.com",
    location: "Sangão, SC - Brazil",
  },
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.name}
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">{t.tagline}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">{t.contact}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="h-4 w-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                <span className="text-sm">{t.location}</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
                { icon: Mail, href: "#contact", label: "Email", color: "hover:bg-red-600" },
              ].map((social, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`relative h-12 w-12 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5 group-hover:animate-pulse" />
                  </Button>

                  {/* Enhanced Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    {social.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              {language === "pt" ? "Links Rápidos" : "Quick Links"}
            </h4>
            <div className="space-y-3">
              {[
                { href: "#about", label: language === "pt" ? "Sobre" : "About" },
                { href: "#skills", label: language === "pt" ? "Habilidades" : "Skills" },
                { href: "#projects", label: language === "pt" ? "Projetos" : "Projects" },
                { href: "#contact", label: language === "pt" ? "Contato" : "Contact" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
              Status
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 text-sm font-medium">
                  {language === "pt" ? "Disponível" : "Available"}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {language === "pt"
                  ? "Aberto para oportunidades em Red Team e Pentesting"
                  : "Open for Red Team and Pentesting opportunities"}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-gray-300">{t.madeWith}</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span className="text-gray-300">&</span>
              <Code className="h-4 w-4 text-blue-400 animate-pulse" />
              <span className="text-gray-300">{t.by}</span>
              <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t.name}
              </span>
            </div>

            <div className="text-center text-sm text-gray-400">
              <p>
                © 2025 {t.name}. {t.rights}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
