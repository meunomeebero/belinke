"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pencil, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto bg-white">
      {/* Cover and Profile Section */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-52 w-full relative">
          <Image
            src="/placeholder.svg?height=208&width=768"
            alt="Cover image"
            className="w-full h-full object-cover"
            width={768}
            height={208}
          />
        </div>

        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-8">
          <Avatar className="h-32 w-32 border-4 border-white rounded-full">
            <Image
              src="/placeholder.svg?height=128&width=128"
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
            <h1 className="text-2xl font-bold text-gray-900">Roberto Junior</h1>
            <p className="text-base text-gray-700">Backend Software Developer</p>
            <p className="text-sm text-gray-500 mt-1">
              Campos do Jordão, São Paulo, Brasil ·{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Informações de contato
              </Link>
            </p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm text-blue-600">
                <Link href="#" className="hover:underline">
                  1.717 seguidores
                </Link>
              </p>
              <span className="text-gray-500">·</span>
              <p className="text-sm text-blue-600">
                <Link href="#" className="hover:underline">
                  + de 500 conexões
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

        {/* Experience Items */}
        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-900 flex items-center justify-center text-white font-bold">DNC</div>
            <div className="flex-1">
              <h3 className="text-base font-semibold">Content Creator</h3>
              <p className="text-sm text-gray-700">Escola DNC</p>
              <p className="text-xs text-gray-500">mar de 2023 - jun de 2023 · 4 meses</p>
              <p className="text-xs text-gray-500 mb-2">São José dos Campos, São Paulo, Brasil · Presencial</p>
              <p className="text-sm text-gray-700">
                As a content creator at DNC, I delivered a module on unit testing with Node.js and Jest, designed to
                teach beginner developers the fundamentals of automated testing. Additionally, I led a module on
                integr...
                <Link href="#" className="text-gray-500 hover:underline">
                  ver mais
                </Link>
              </p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-teal-500 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold">Nickelpay Serviços e Sistemas</h3>
              <p className="text-sm text-gray-700">8 m</p>

              <div className="mt-4 relative pl-5 border-l border-gray-300">
                <div className="absolute left-0 top-1.5 w-2 h-2 bg-gray-300 rounded-full -ml-1"></div>
                <h4 className="text-base font-semibold">Tech Lead</h4>
                <p className="text-xs text-gray-500">nov de 2022 - fev de 2023 · 4 meses</p>
                <p className="text-sm text-gray-700 mt-2">
                  As the Technical Lead at Nickelpay, I have successfully directed a team of developers and DevOps
                  engineers, whom I have recruited and guided to achieve the delivery of Nickelpay Bank's minimum...
                  <Link href="#" className="text-gray-500 hover:underline">
                    ver mais
                  </Link>
                </p>
              </div>
            </div>
          </div>
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
            {/* Recommendation 1 */}
            <div className="flex gap-4">
              <Avatar className="h-12 w-12 rounded-full">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Rafael Sampaio"
                  className="object-cover"
                  width={48}
                  height={48}
                />
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">Rafael Sampaio</h3>
                  <span className="text-xs text-gray-500">· 1º</span>
                </div>
                <p className="text-sm text-gray-700">
                  Software developer | 🇧🇷 🇵🇹 🇪🇺 citzen | Node, Postgres, Nest, Typescript.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Em 25 de setembro de 2022, Roberto era sênior em relação a Rafael, mas não supervisionava Rafael
                  diretamente
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Roberto era nossa referencia em back-end na Squad e que grande parceiro de Squad. Nunca se incomodou
                  em ajudar, em ensinar, sem contar o ímpeto de desenvolver novas soluções com novas tecnologias. Sem
                  dúvida o tempo em que trabalhei com o Roberto foi de imenso apredizado.
                </p>
              </div>
            </div>

            {/* Recommendation 2 */}
            <div className="flex gap-4">
              <Avatar className="h-12 w-12 rounded-full">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Ademir Sott Junior"
                  className="object-cover"
                  width={48}
                  height={48}
                />
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold">Ademir Sott Junior</h3>
                  <span className="text-xs text-gray-500">· 1º</span>
                </div>
                <p className="text-sm text-gray-700">Software Developer | Java | JavaScript | TypeScript | SQL</p>
                <p className="text-xs text-gray-500 mt-1">Em 13 de setembro de 2022, Ademir respondia a Roberto</p>
                <p className="text-sm text-gray-700 mt-2">
                  Roberto was my TechLead at GamaLab, I learned a lot from him, simple and complex solutions focused on
                  the Backend. He was the one who helped me understand OOP, Clean code and Clean Architecture concepts
                  in a simple way. Anyone who works with Roberto will feel very comfortable as he is a reference in
                  knowledge and leadership.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="given">
            <div className="py-8 text-center text-gray-500">Nenhuma recomendação fornecida</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
