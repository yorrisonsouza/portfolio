"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SkillsProps {
  language: "pt" | "en"
}

const translations = {
  pt: {
    title: "Habilidades Técnicas",
    categories: {
      java: "Java para Pentesting",
      redteam: "Red Team Operations",
      tools: "Ferramentas de Pentesting",
      techniques: "Técnicas de Ataque",
    },
    skills: {
      java: [
        { name: "Java Core", level: 70 },
        { name: "Network Programming", level: 60 },
        { name: "Socket Programming", level: 65 },
        { name: "Exploit Development", level: 45 },
        { name: "Tool Automation", level: 55 },
        { name: "Payload Generation", level: 40 },
      ],
      redteam: [
        { name: "MITRE ATT&CK Framework", level: 50 },
        { name: "Social Engineering", level: 45 },
        { name: "Phishing Campaigns", level: 40 },
        { name: "Lateral Movement", level: 35 },
        { name: "Persistence Techniques", level: 30 },
        { name: "Evasion Techniques", level: 35 },
      ],
      tools: [
        { name: "Kali Linux", level: 65 },
        { name: "Metasploit", level: 55 },
        { name: "Nmap", level: 70 },
        { name: "Burp Suite", level: 60 },
        { name: "Wireshark", level: 55 },
        { name: "Cobalt Strike", level: 25 },
      ],
      techniques: [
        { name: "Web Application Testing", level: 55 },
        { name: "Network Scanning", level: 60 },
        { name: "Vulnerability Exploitation", level: 45 },
        { name: "Password Attacks", level: 50 },
        { name: "Privilege Escalation", level: 40 },
        { name: "Post-Exploitation", level: 35 },
      ],
    },
  },
  en: {
    title: "Technical Skills",
    categories: {
      java: "Java for Pentesting",
      redteam: "Red Team Operations",
      tools: "Pentesting Tools",
      techniques: "Attack Techniques",
    },
    skills: {
      java: [
        { name: "Java Core", level: 70 },
        { name: "Network Programming", level: 60 },
        { name: "Socket Programming", level: 65 },
        { name: "Exploit Development", level: 45 },
        { name: "Tool Automation", level: 55 },
        { name: "Payload Generation", level: 40 },
      ],
      redteam: [
        { name: "MITRE ATT&CK Framework", level: 50 },
        { name: "Social Engineering", level: 45 },
        { name: "Phishing Campaigns", level: 40 },
        { name: "Lateral Movement", level: 35 },
        { name: "Persistence Techniques", level: 30 },
        { name: "Evasion Techniques", level: 35 },
      ],
      tools: [
        { name: "Kali Linux", level: 65 },
        { name: "Metasploit", level: 55 },
        { name: "Nmap", level: 70 },
        { name: "Burp Suite", level: 60 },
        { name: "Wireshark", level: 55 },
        { name: "Cobalt Strike", level: 25 },
      ],
      techniques: [
        { name: "Web Application Testing", level: 55 },
        { name: "Network Scanning", level: 60 },
        { name: "Vulnerability Exploitation", level: 45 },
        { name: "Password Attacks", level: 50 },
        { name: "Privilege Escalation", level: 40 },
        { name: "Post-Exploitation", level: 35 },
      ],
    },
  },
}

export function Skills({ language }: SkillsProps) {
  const t = translations[language]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === "pt"
              ? "Habilidades focadas em Red Team e desenvolvimento de ferramentas Java"
              : "Skills focused on Red Team and Java tool development"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(t.categories).map(([key, category]) => (
            <Card
              key={key}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      key === "java"
                        ? "bg-blue-500"
                        : key === "redteam"
                          ? "bg-red-500"
                          : key === "tools"
                            ? "bg-green-500"
                            : "bg-purple-500"
                    }`}
                  />
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {t.skills[key as keyof typeof t.skills].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
