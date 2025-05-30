"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Trash2, UserCircle, Briefcase, Star, Download, Save } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data Structures
export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description?: string;
  companyImageUrl?: string;
}

export interface Recommendation {
  id: string;
  text: string;
  authorName: string;
  authorTitle?: string;
  authorContext?: string;
  authorImageUrl?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  followers: string;
  connections: string;
  experiences: Experience[];
  recommendations: Recommendation[];
  profileImageUrl?: string;
  coverImageUrl?: string;
  // Add other fields as needed, e.g., profile picture, banner
}

interface CustomizationSidebarProps {
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  onDownload: () => void;
  onSaveDraft: () => void;
}

export function CustomizationSidebar({
  profileData,
  setProfileData,
  onDownload,
  onSaveDraft,
}: CustomizationSidebarProps) {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const newExperiences = [...profileData.experiences];
    (newExperiences[index] as any)[field] = value;
    setProfileData((prev) => ({ ...prev, experiences: newExperiences }));
  };

  const addExperience = () => {
    setProfileData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { id: Date.now().toString(), title: "", company: "", duration: "", companyImageUrl: "" },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    const newExperiences = profileData.experiences.filter((_, i) => i !== index);
    setProfileData((prev) => ({ ...prev, experiences: newExperiences }));
  };

  const handleRecommendationChange = (
    index: number,
    field: keyof Recommendation,
    value: string
  ) => {
    const newRecommendations = [...profileData.recommendations];
    (newRecommendations[index] as any)[field] = value;
    setProfileData((prev) => ({ ...prev, recommendations: newRecommendations }));
  };

  const addRecommendation = () => {
    setProfileData((prev) => ({
      ...prev,
      recommendations: [
        ...prev.recommendations,
        { id: Date.now().toString(), text: "", authorName: "", authorTitle: "", authorContext: "", authorImageUrl: "" },
      ],
    }));
  };

  const removeRecommendation = (index: number) => {
    const newRecommendations = profileData.recommendations.filter((_, i) => i !== index);
    setProfileData((prev) => ({ ...prev, recommendations: newRecommendations }));
  };

  return (
    <div className="w-96 min-w-96 h-full flex flex-col 
                  bg-gray-50 border-r border-gray-200 
                  dark:bg-[#191919] dark:border-r-[#282B36] 
                  font-mono">
      <div className="p-6 border-b border-gray-200 dark:border-b-[#282B36]">
        <h2 className="text-xl font-bold text-gray-800 dark:text-[#F8F8F2]">
          🐝 Belink
        </h2>
        <p className="text-sm text-gray-500 dark:text-[#ADADAD]">
          Feito por Bero com ☕️
        </p>
        <div className="mt-4 space-y-2">
          <Button 
            variant="outline"
            className="w-full flex items-center gap-2 text-sky-600 border-sky-500 hover:bg-sky-50 hover:text-sky-700 dark:text-[#ADADAD] dark:border-[#ADADAD] dark:hover:bg-[#282B36] dark:hover:text-[#F8F8F2] focus:ring-[#ADADAD] active:animate-bounce-sm"
            onClick={onDownload}
          >
            <Download size={18} />
            Baixar PNG do Perfil
          </Button>
          <Button 
            variant="outline"
            className="w-full flex items-center gap-2 text-green-600 border-green-500 hover:bg-green-50 hover:text-green-700 dark:text-green-400 dark:border-green-400 dark:hover:bg-[#282B36] dark:hover:text-green-300 focus:ring-green-400 active:animate-bounce-sm"
            onClick={onSaveDraft}
          >
            <Save size={18} />
            Salvar Rascunho
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <Accordion
          type="multiple"
          defaultValue={["basic-info", "experiences", "recommendations"]}
          className="w-full"
        >
          {/* Basic Info */}
          <AccordionItem value="basic-info" className="border-b-0">
            <AccordionTrigger className="py-3 text-base font-medium 
                                       text-gray-700 hover:no-underline 
                                       hover:bg-gray-100 dark:hover:bg-[#282B36] 
                                       rounded-md px-3 
                                       data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900 
                                       dark:text-[#ADADAD] dark:data-[state=open]:bg-[#282B36] dark:data-[state=open]:text-[#F8F8F2]
                                       active:animate-bounce-sm">
              <div className="flex items-center gap-2">
                <UserCircle size={18} />
                Informações Básicas
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-1 space-y-4">
              {[ 
                { id: "name", label: "Nome do Perfil", placeholder: "Ex: Dr. Nova Quantum", value: profileData.name },
                { id: "title", label: "Cargo", placeholder: "Ex: Chief Reality Officer...", value: profileData.title },
                { id: "location", label: "Localização", placeholder: "Ex: Mars Colony Alpha...", value: profileData.location },
                { id: "followers", label: "Seguidores", placeholder: "Ex: 1 Bilhão", value: profileData.followers },
                { id: "connections", label: "Conexões", placeholder: "Ex: ∞ Conexões", value: profileData.connections },
                { id: "profileImageUrl", label: "URL da Imagem de Perfil", placeholder: "https://...", value: profileData.profileImageUrl || ""},
                { id: "coverImageUrl", label: "URL da Imagem de Capa", placeholder: "https://...", value: profileData.coverImageUrl || "" },
              ].map(field => (
                <div key={field.id} className="space-y-1.5">
                  <Label htmlFor={field.id} className="text-sm font-medium text-gray-600 dark:text-[#ADADAD]">{field.label}</Label>
                  <Input
                    id={field.id}
                    name={field.id}
                    value={field.value}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="bg-white dark:bg-[#1A1A1A] border-gray-300 dark:border-[#282B36] focus:border-sky-500 dark:focus:border-[#ADADAD] focus:ring-sky-500 dark:focus:ring-[#ADADAD] text-gray-900 dark:text-[#F8F8F2] placeholder:text-gray-400 dark:placeholder:text-[#ADADAD]"
                  />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Experiences */}
          <AccordionItem value="experiences" className="border-b-0 mt-2">
            <AccordionTrigger className="py-3 text-base font-medium text-gray-700 hover:no-underline hover:bg-gray-100 dark:hover:bg-[#282B36] rounded-md px-3 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900 dark:text-[#ADADAD] dark:data-[state=open]:bg-[#282B36] dark:data-[state=open]:text-[#F8F8F2] active:animate-bounce-sm">
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                Experiências
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-1 space-y-4">
              <Button
                variant="outline"
                size="sm"
                onClick={addExperience}
                className="w-full flex items-center gap-2 text-sky-600 border-sky-500 hover:bg-sky-50 hover:text-sky-700 dark:text-[#ADADAD] dark:border-[#ADADAD] dark:hover:bg-[#282B36] dark:hover:text-[#F8F8F2] focus:ring-[#ADADAD] active:animate-bounce-sm"
              >
                <PlusCircle size={18} /> Adicionar Experiência
              </Button>
              {profileData.experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="p-4 border rounded-lg space-y-3 shadow-sm bg-white dark:bg-[#282B36] border-gray-200 dark:border-[#191919]"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-700 dark:text-[#F8F8F2]">
                      Experiência {index + 1}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeExperience(index)}
                      className="text-red-500 hover:bg-red-100 hover:text-red-600 dark:text-red-400 dark:hover:bg-[#191919] dark:hover:text-red-300 active:animate-bounce-sm"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  {[ 
                    { id: `exp-title-${index}`, name: "title", label: "Cargo", placeholder: "Cargo", value: exp.title },
                    { id: `exp-company-${index}`, name: "company", label: "Empresa", placeholder: "Empresa", value: exp.company },
                    { id: `exp-duration-${index}`, name: "duration", label: "Período", placeholder: "Ex: Jan 2020 - Presente", value: exp.duration },
                    { id: `exp-companyImageUrl-${index}`, name: "companyImageUrl", label: "URL Imagem da Empresa", placeholder: "https://...", value: exp.companyImageUrl || ""},
                  ].map(field => (
                    <div key={field.id} className="space-y-1.5">
                        <Label htmlFor={field.id} className="text-xs font-medium text-gray-500 dark:text-[#ADADAD]">{field.label}</Label>
                        <Input
                            id={field.id}
                            value={(field.value)}
                            onChange={(e) => handleExperienceChange(index, field.name as keyof Experience, e.target.value)}
                            placeholder={field.placeholder}
                            className="bg-gray-50 dark:bg-[#1A1A1A] border-gray-300 dark:border-[#282B36] focus:border-sky-500 dark:focus:border-[#ADADAD] focus:ring-sky-500 dark:focus:ring-[#ADADAD] text-gray-900 dark:text-[#F8F8F2] placeholder:text-gray-400 dark:placeholder:text-[#ADADAD]"
                        />
                    </div>
                  ))}
                  <div className="space-y-1.5">
                     <Label htmlFor={`exp-desc-${index}`} className="text-xs font-medium text-gray-500 dark:text-[#ADADAD]">Descrição</Label>
                    <Textarea id={`exp-desc-${index}`} value={exp.description || ""} onChange={(e) => handleExperienceChange(index, "description", e.target.value)} placeholder="Descrição (opcional)" className="bg-gray-50 dark:bg-[#1A1A1A] border-gray-300 dark:border-[#282B36] focus:border-sky-500 dark:focus:border-[#ADADAD] focus:ring-sky-500 dark:focus:ring-[#ADADAD] text-gray-900 dark:text-[#F8F8F2] placeholder:text-gray-400 dark:placeholder:text-[#ADADAD]" rows={3} />
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Recommendations */}
          <AccordionItem value="recommendations" className="border-b-0 mt-2">
            <AccordionTrigger className="py-3 text-base font-medium text-gray-700 hover:no-underline hover:bg-gray-100 dark:hover:bg-[#282B36] rounded-md px-3 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900 dark:text-[#ADADAD] dark:data-[state=open]:bg-[#282B36] dark:data-[state=open]:text-[#F8F8F2] active:animate-bounce-sm">
              <div className="flex items-center gap-2">
                <Star size={18} />
                Recomendações
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-1 space-y-4">
              <Button
                variant="outline"
                size="sm"
                onClick={addRecommendation}
                className="w-full flex items-center gap-2 text-sky-600 border-sky-500 hover:bg-sky-50 hover:text-sky-700 dark:text-[#ADADAD] dark:border-[#ADADAD] dark:hover:bg-[#282B36] dark:hover:text-[#F8F8F2] focus:ring-[#ADADAD] active:animate-bounce-sm"
              >
                <PlusCircle size={18} /> Adicionar Recomendação
              </Button>
              {profileData.recommendations.map((rec, index) => (
                <div
                  key={rec.id}
                  className="p-4 border rounded-lg space-y-3 shadow-sm bg-white dark:bg-[#282B36] border-gray-200 dark:border-[#191919]"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-700 dark:text-[#F8F8F2]">
                      Recomendação {index + 1}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeRecommendation(index)}
                      className="text-red-500 hover:bg-red-100 hover:text-red-600 dark:text-red-400 dark:hover:bg-[#191919] dark:hover:text-red-300 active:animate-bounce-sm"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`rec-text-${index}`} className="text-xs font-medium text-gray-500 dark:text-[#ADADAD]">Texto</Label>
                    <Textarea id={`rec-text-${index}`} value={rec.text} onChange={(e) => handleRecommendationChange(index, "text", e.target.value)} placeholder="Texto da Recomendação" className="bg-gray-50 dark:bg-[#1A1A1A] border-gray-300 dark:border-[#282B36] focus:border-sky-500 dark:focus:border-[#ADADAD] focus:ring-sky-500 dark:focus:ring-[#ADADAD] text-gray-900 dark:text-[#F8F8F2] placeholder:text-gray-400 dark:placeholder:text-[#ADADAD]" rows={4} />
                  </div>
                  {[ 
                    { id: `rec-authorName-${index}`, name: "authorName", label: "Nome do Autor", placeholder: "Nome do Autor", value: rec.authorName },
                    { id: `rec-authorTitle-${index}`, name: "authorTitle", label: "Título/Detalhes do Autor", placeholder: "Ex: CEO @ Future Inc.", value: rec.authorTitle || "" },
                    { id: `rec-authorContext-${index}`, name: "authorContext", label: "Contexto da Recomendação", placeholder: "Ex: Gerenciou diretamente...", value: rec.authorContext || "" },
                    { id: `rec-authorImageUrl-${index}`, name: "authorImageUrl", label: "URL Imagem do Autor", placeholder: "https://...", value: rec.authorImageUrl || "" },
                  ].map(field => (
                     <div key={field.id} className="space-y-1.5">
                        <Label htmlFor={field.id} className="text-xs font-medium text-gray-500 dark:text-[#ADADAD]">{field.label}</Label>
                        <Input
                            id={field.id}
                            value={field.value}
                            onChange={(e) => handleRecommendationChange(index, field.name as keyof Recommendation, e.target.value)}
                            placeholder={field.placeholder}
                            className="bg-gray-50 dark:bg-[#1A1A1A] border-gray-300 dark:border-[#282B36] focus:border-sky-500 dark:focus:border-[#ADADAD] focus:ring-sky-500 dark:focus:ring-[#ADADAD] text-gray-900 dark:text-[#F8F8F2] placeholder:text-gray-400 dark:placeholder:text-[#ADADAD]"
                        />
                    </div>
                  ))}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}