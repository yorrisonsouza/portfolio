"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"

interface ContactProps {
  language: "pt" | "en"
}

const translations = {
  pt: {
    title: "Entre em Contato",
    subtitle: "Vamos conversar sobre oportunidades e colaborações em segurança",
    form: {
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar Mensagem",
    },
    info: {
      title: "Informações de Contato",
      email: "yorrison.souza.corporativo@gmail.com",
      phone: "(48) 99148-8258",
      location: "Sangão, SC - Brasil",
    },
    social: {
      title: "Redes Sociais",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  en: {
    title: "Get in Touch",
    subtitle: "Let's talk about opportunities and collaborations in security",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
    info: {
      title: "Contact Information",
      email: "yorrison.souza.corporativo@gmail.com",
      phone: "(48) 99148-8258",
      location: "Sangão, SC - Brazil",
    },
    social: {
      title: "Social Media",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
}

export function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [isHovered, setIsHovered] = useState<string | null>(null)

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Form */}
          <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-lg" />

            <CardHeader className="relative z-10 pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                {t.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <Input
                      placeholder={t.form.name}
                      className="h-12 bg-transparent border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                  <div className="group">
                    <Input
                      type="email"
                      placeholder={t.form.email}
                      className="h-12 bg-transparent border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 transition-all duration-300 group-hover:border-blue-300"
                    />
                  </div>
                </div>

                <Input
                  placeholder={t.form.subject}
                  className="h-12 bg-transparent border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                />

                <Textarea
                  placeholder={t.form.message}
                  rows={6}
                  className="bg-transparent border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 resize-none"
                />

                <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                  <Send className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                  {t.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  {t.info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { icon: Mail, text: t.info.email, color: "text-blue-600", href: `mailto:${t.info.email}` },
                  { icon: Phone, text: t.info.phone, color: "text-green-600", href: `tel:${t.info.phone}` },
                  { icon: MapPin, text: t.info.location, color: "text-red-600", href: "#" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setIsHovered(`info-${index}`)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div
                      className={`p-2 rounded-full ${item.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
                    >
                      <item.icon
                        className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <span className="group-hover:text-foreground transition-colors duration-300">{item.text}</span>
                    {isHovered === `info-${index}` && (
                      <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  {t.social.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Github,
                    label: t.social.github,
                    color: "hover:text-gray-600",
                    gradient: "from-gray-500 to-gray-700",
                  },
                  {
                    icon: Linkedin,
                    label: t.social.linkedin,
                    color: "hover:text-blue-600",
                    gradient: "from-blue-500 to-blue-700",
                  },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start h-14 bg-transparent border-2 hover:scale-[1.02] transition-all duration-300 group"
                    onMouseEnter={() => setIsHovered(`social-${index}`)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div
                      className={`p-2 bg-gradient-to-r ${social.gradient} rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <social.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg">{social.label}</span>
                    {isHovered === `social-${index}` && (
                      <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                    )}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    {language === "pt" ? "Disponível para oportunidades" : "Available for opportunities"}
                  </span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-300">
                  {language === "pt" ? "Respondo em até 24 horas" : "I respond within 24 hours"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
