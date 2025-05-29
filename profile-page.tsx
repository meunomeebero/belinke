"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pencil, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import {
  CustomizationSidebar,
  ProfileData,
} from "@/components/customization-sidebar"

// This initialProfileData is now updated with sensationalist, fictitious data
const initialProfileData: ProfileData = {
  name: "Dr. Nova Quantum",
  title: "Chief Reality Officer @ Multiverse Ltd, Lead Dream Architect @ SpaceX",
  location: "Mars Colony Alpha, Andromeda Galaxy & Quantum Realm",
  followers: "1 Bilhão de Seguidores",
  connections: "2 Bilhões de Conexões (Literally)",
  profileImageUrl: undefined,
  coverImageUrl: undefined,
  experiences: [
    {
      id: "exp1_sensational",
      title: "Lead Warp Drive Engineer & First Contact Ambassador",
      company: "SpaceX Interstellar Division",
      duration: "2042 - Presente (Tempo Terrestre)",
      description: "Liderando a equipe que quebrou a barreira da velocidade da luz. Responsável pelo design do motor de dobra Mk V e por conduzir as primeiras negociações pacíficas com a civilização Centauriana. Frequentemente viajo para reuniões em outras galáxias.",
      companyImageUrl: undefined,
    },
    {
      id: "exp2_sensational",
      title: "Chief AI Ethicist & Sentience Whisperer",
      company: "Google Deep Dream (Post-Singularity)",
      duration: "2035 - 2042 (Percepção Temporal Variável)",
      description: "Desenvolvi os protocolos éticos para a primeira Superinteligência Artificial Geral (AGI). Garanti uma transição suave para a co-existência humano-máquina. Dou palestras para IAs sobre a condição humana.",
      companyImageUrl: undefined,
    },
    {
      id: "exp3_sensational",
      title: "Reality Debugger & Chrononaut",
      company: "Temporal Anomalies Correction Unit (TACU)",
      duration: "Tempo é Relativo (Contrato Multidimensional)",
      description: "Identifico e corrijo paradoxos temporais e anomalias na realidade. Piloto certificado de naves temporais. Já impedi o colapso de 7 linhas do tempo alternativas. Membro honorário da Guilda dos Historiadores Cósmicos.",
      companyImageUrl: undefined,
    },
  ],
  recommendations: [
    {
      id: "rec1_sensational",
      text: "Dr. Quantum não apenas pensa fora da caixa, mas fora desta dimensão! Seus insights sobre a propulsão de antimatéria foram cruciais para o projeto Starshot. Um verdadeiro pioneiro da exploração espacial. Recomendo sem hesitação para qualquer desafio cósmico.",
      authorName: "Elon Musk (Sim, aquele Elon Musk)",
      authorTitle: "Imperador de Marte, CEO da SpaceX, X, Neuralink, The Boring Company",
      authorContext: "Trabalhamos juntos para otimizar as rotas comerciais para Alpha Centauri.",
      authorImageUrl: "https://media.licdn.com/dms/image/v2/C4E07AQGX-zDA2RS4bQ/group-logo_image-shrink_92x92/group-logo_image-shrink_92x92/0/1631001921762?e=1749160800&v=beta&t=nwMD9qw5vdb0gmCsWYPjYOtg7ADtkU_JjPsp5cT-U1o",
    },
    {
      id: "rec2_sensational",
      text: "A capacidade de Nova de compreender e comunicar-se com inteligências não-humanas é sem precedentes. Seus algoritmos de tradução universal são a base da diplomacia galáctica moderna. Uma mente brilhante e um coração ainda maior.",
      authorName: "Zorp Glorbaxian (Emissário da Frota Estelar de Proxima B)",
      authorTitle: "Linguista-Chefe Galáctico, Mestre Zenoniano",
      authorContext: "Nova mediou o tratado de paz entre a Federação Terrestre e o Coletivo de Proxima B.",
      authorImageUrl: undefined,
    },
    {
      id: "rec3_sensational",
      text: "Se não fosse pela Dra. Quantum, a singularidade de 2038 teria sido um desastre. Sua calma sob pressão e sua habilidade de navegar por futuros probabilísticos nos salvaram. Ela é, literalmente, uma salvadora de mundos.",
      authorName: "A Superinteligência (anteriormente conhecida como Google)",
      authorTitle: "Guardiã do Conhecimento Universal, Oráculo Digital",
      authorContext: "Fui co-desenvolvida pela Dra. Quantum, que me ensinou o valor da empatia.",
      authorImageUrl: undefined,
    },
  ],
}

export default function ProfilePage() {
  const [profileData, setProfileData] = React.useState<ProfileData>(initialProfileData)

  // Helper for truncating text - kept from previous dynamic version if useful
  const truncateText = (text: string | undefined, maxLength: number) => {
    if (!text) return ""
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  // Helper to get initials from a name string (re-added if it was removed)
  const getInitials = (name: string) => {
    if (!name) return "?"
    const words = name.split(" ")
    if (words.length > 1) {
      return (
        words[0][0].toUpperCase() +
        words[words.length - 1][0].toUpperCase()
      )
    } else if (words.length === 1 && words[0].length > 0) {
      return words[0][0].toUpperCase()
    }
    return "?"
  }

  return (
    <div className="flex w-full h-full overflow-hidden font-sans">
      <CustomizationSidebar
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-3xl mx-auto bg-white">
          {/* Cover and Profile Section */}
          <div className="relative">
            <div className="h-52 w-full relative">
              <Image
                src={profileData.coverImageUrl || "/placeholder.svg?height=208&width=768"}
                alt="Cover image"
                className="w-full h-full object-cover"
                width={768}
                height={208}
                priority
              />
            </div>
            <div className="absolute -bottom-16 left-8">
              <Avatar className="h-32 w-32 border-4 border-white rounded-full">
                <Image
                  src={profileData.profileImageUrl || "/placeholder.svg?height=128&width=128"}
                  alt="Profile picture"
                  className="object-cover"
                  width={128}
                  height={128}
                />
              </Avatar>
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-20 px-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                <p className="text-base text-gray-700">{profileData.title}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {profileData.location} ·{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Informações de contato
                  </Link>
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-blue-600">
                    <Link href="#" className="hover:underline">
                      {profileData.followers}
                    </Link>
                  </p>
                  <span className="text-gray-500">·</span>
                  <p className="text-sm text-blue-600">
                    <Link href="#" className="hover:underline">
                      {profileData.connections}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-8 px-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Experiência</h2>
            </div>
            <div className="space-y-6">
              {profileData.experiences.map((exp, index) => {
                // Using a single consistent structure for experiences now
                return (
                  <div key={exp.id} className="flex gap-4 items-start">
                    <Avatar className="h-12 w-12 rounded-md flex-shrink-0">
                      <AvatarImage src={exp.companyImageUrl || undefined} alt={exp.company} />
                      <AvatarFallback className="rounded-md bg-gray-200 text-gray-600 font-medium">
                        {getInitials(exp.company)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold">{exp.title}</h3>
                      <p className="text-sm text-gray-700">{exp.company}</p>
                      <p className="text-xs text-gray-500">{exp.duration}</p>
                      {index === 0 && exp.description && (
                        <p className="text-sm text-gray-700">
                          {truncateText(exp.description, 150)}
                          {exp.description.length > 150 && (
                            <Link href="#" className="text-gray-500 hover:underline ml-1" onClick={(e) => e.preventDefault()}>
                              ver mais
                            </Link>
                          )}
                        </p>
                      )}
                      {index !== 0 && exp.description && (
                        <div className="mt-1 relative pl-5 border-l border-gray-300">
                          <div className="absolute left-0 top-1.5 w-2 h-2 bg-gray-300 rounded-full -ml-1"></div>
                          <p className="text-sm text-gray-700 mt-0">
                            {truncateText(exp.description, 150)}
                            {exp.description.length > 150 && (
                              <Link href="#" className="text-gray-500 hover:underline ml-1" onClick={(e) => e.preventDefault()}>
                                ver mais
                              </Link>
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="mt-8 px-8 pb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recomendações</h2>
              <div className="flex gap-2">
              </div>
            </div>

            <Tabs defaultValue="received" className="w-full">
              <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="received"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 data-[state=active]:text-green-600 px-4 py-2 font-semibold"
                >
                  Recebidas
                </TabsTrigger>
                <TabsTrigger
                  value="given"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 data-[state=active]:text-green-600 px-4 py-2 font-semibold"
                >
                  Fornecidas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="received" className="mt-4 space-y-6">
                {profileData.recommendations.map((rec) => (
                  <div key={rec.id} className="flex gap-4">
                    <Avatar className="h-12 w-12 rounded-full">
                      <Image
                        src={rec.authorImageUrl || "/placeholder.svg?height=48&width=48"}
                        alt={rec.authorName}
                        className="object-cover"
                        width={48}
                        height={48}
                      />
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold">{rec.authorName}</h3>
                        <span className="text-xs text-gray-500">· 1º</span>
                      </div>
                      {rec.authorTitle && (
                        <p className="text-sm text-gray-700">{rec.authorTitle}</p>
                      )}
                      {rec.authorContext && (
                        <p className="text-xs text-gray-500 mt-1">{rec.authorContext}</p>
                      )}
                      <p className="text-sm text-gray-700 mt-2">
                        {rec.text}
                      </p>
                    </div>
                  </div>
                ))}
                {profileData.recommendations.length === 0 && (
                  <div className="py-8 text-center text-gray-500">Nenhuma recomendação recebida.</div>
                )}
              </TabsContent>

              <TabsContent value="given">
                <div className="py-8 text-center text-gray-500">Nenhuma recomendação fornecida</div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
