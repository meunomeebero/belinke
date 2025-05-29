"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Trash2 } from "lucide-react";
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
}

export function CustomizationSidebar({
  profileData,
  setProfileData,
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
    <div className="w-96 min-w-96 h-full flex flex-col border-r border-gray-200 bg-gray-50 font-mono">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Personalizar Perfil</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <Accordion type="multiple" defaultValue={["basic-info", "experiences", "recommendations"]} className="w-full">
          {/* Basic Info */}
          <AccordionItem value="basic-info" className="border-b-0">
            <AccordionTrigger className="py-3 text-base font-medium text-gray-700 hover:no-underline hover:bg-gray-100 rounded-md px-3 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900">
              Informações Básicas
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-1 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium text-gray-600">Nome do Perfil</Label>
                <Input
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: João Silva"
                  className="bg-white border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="title" className="text-sm font-medium text-gray-600">Cargo</Label>
                <Input
                  id="title"
                  name="title"
                  value={profileData.title}
                  onChange={handleInputChange}
                  placeholder="Ex: Engenheiro de Software"
                  className="bg-white border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="location" className="text-sm font-medium text-gray-600">Localização</Label>
                <Input
                  id="location"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  placeholder="Ex: São Paulo, Brasil"
                  className="bg-white border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="followers" className="text-sm font-medium text-gray-600">Seguidores</Label>
                <Input
                  id="followers"
                  name="followers"
                  value={profileData.followers}
                  onChange={handleInputChange}
                  placeholder="Ex: 500+"
                  className="bg-white border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="connections" className="text-sm font-medium text-gray-600">Conexões</Label>
                <Input
                  id="connections"
                  name="connections"
                  value={profileData.connections}
                  onChange={handleInputChange}
                  placeholder="Ex: 500+"
                  className="bg-white border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="profileImageUrl" className="text-sm font-medium text-gray-600">URL da Imagem de Perfil</Label>
                <Input
                  id="profileImageUrl"
                  name="profileImageUrl"
                  value={profileData.profileImageUrl || ""}
                  onChange={handleInputChange}
                  placeholder="https://exemplo.com/imagem.png"
                  className="bg-white border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="coverImageUrl" className="text-sm font-medium text-gray-600">URL da Imagem de Capa</Label>
                <Input
                  id="coverImageUrl"
                  name="coverImageUrl"
                  value={profileData.coverImageUrl || ""}
                  onChange={handleInputChange}
                  placeholder="https://exemplo.com/capa.png"
                  className="bg-white border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Experiences */}
          <AccordionItem value="experiences" className="border-b-0 mt-2">
            <AccordionTrigger className="py-3 text-base font-medium text-gray-700 hover:no-underline hover:bg-gray-100 rounded-md px-3 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900">
                Experiências
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-1 space-y-4">
              <Button
                variant="outline"
                size="sm"
                onClick={addExperience}
                className="w-full flex items-center gap-2 text-sky-600 border-sky-500 hover:bg-sky-50 hover:text-sky-700 focus:ring-sky-500"
              >
                <PlusCircle size={18} /> Adicionar Experiência
              </Button>
              {profileData.experiences.map((exp, index) => (
                <div key={exp.id} className="p-4 border border-gray-200 rounded-lg space-y-3 bg-white shadow-sm">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-700">Experiência {index + 1}</p>
                    <Button variant="ghost" size="icon" onClick={() => removeExperience(index)} className="text-red-500 hover:bg-red-100 hover:text-red-600">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`exp-title-${index}`} className="text-xs font-medium text-gray-500">Cargo</Label>
                    <Input
                      id={`exp-title-${index}`}
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                      placeholder="Cargo"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                     <Label htmlFor={`exp-company-${index}`} className="text-xs font-medium text-gray-500">Empresa</Label>
                    <Input
                      id={`exp-company-${index}`}
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                      placeholder="Empresa"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`exp-duration-${index}`} className="text-xs font-medium text-gray-500">Período</Label>
                    <Input
                      id={`exp-duration-${index}`}
                      value={exp.duration}
                      onChange={(e) => handleExperienceChange(index, "duration", e.target.value)}
                      placeholder="Ex: Jan 2020 - Presente"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`exp-desc-${index}`} className="text-xs font-medium text-gray-500">Descrição</Label>
                    <Textarea
                      id={`exp-desc-${index}`}
                      value={exp.description || ""}
                      onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                      placeholder="Descrição (opcional)"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor={`exp-companyImageUrl-${index}`}
                      className="text-xs font-medium text-gray-500"
                    >
                      URL Imagem da Empresa
                    </Label>
                    <Input
                      id={`exp-companyImageUrl-${index}`}
                      value={exp.companyImageUrl || ""}
                      onChange={(e) =>
                        handleExperienceChange(index, "companyImageUrl", e.target.value)
                      }
                      placeholder="https://exemplo.com/logo-empresa.png"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Recommendations */}
          <AccordionItem value="recommendations" className="border-b-0 mt-2">
             <AccordionTrigger className="py-3 text-base font-medium text-gray-700 hover:no-underline hover:bg-gray-100 rounded-md px-3 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900">
                Recomendações
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-1 space-y-4">
              <Button
                variant="outline"
                size="sm"
                onClick={addRecommendation}
                className="w-full flex items-center gap-2 text-sky-600 border-sky-500 hover:bg-sky-50 hover:text-sky-700 focus:ring-sky-500"
              >
                <PlusCircle size={18} /> Adicionar Recomendação
              </Button>
              {profileData.recommendations.map((rec, index) => (
                <div key={rec.id} className="p-4 border border-gray-200 rounded-lg space-y-3 bg-white shadow-sm">
                  <div className="flex justify-between items-center">
                      <p className="font-medium text-gray-700">Recomendação {index + 1}</p>
                      <Button variant="ghost" size="icon" onClick={() => removeRecommendation(index)} className="text-red-500 hover:bg-red-100 hover:text-red-600">
                          <Trash2 size={16} />
                      </Button>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`rec-text-${index}`} className="text-xs font-medium text-gray-500">Texto</Label>
                    <Textarea
                      id={`rec-text-${index}`}
                      value={rec.text}
                      onChange={(e) => handleRecommendationChange(index, "text", e.target.value)}
                      placeholder="Texto da Recomendação"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                      rows={4}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`rec-authorName-${index}`} className="text-xs font-medium text-gray-500">Nome do Autor</Label>
                    <Input
                      id={`rec-authorName-${index}`}
                      value={rec.authorName}
                      onChange={(e) => handleRecommendationChange(index, "authorName", e.target.value)}
                      placeholder="Nome do Autor"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`rec-authorTitle-${index}`} className="text-xs font-medium text-gray-500">Título do Autor</Label>
                    <Input
                      id={`rec-authorTitle-${index}`}
                      value={rec.authorTitle || ""}
                      onChange={(e) => handleRecommendationChange(index, "authorTitle", e.target.value)}
                      placeholder="Título do Autor"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`rec-authorContext-${index}`} className="text-xs font-medium text-gray-500">Contexto do Autor</Label>
                    <Input
                      id={`rec-authorContext-${index}`}
                      value={rec.authorContext || ""}
                      onChange={(e) => handleRecommendationChange(index, "authorContext", e.target.value)}
                      placeholder="Contexto do Autor"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`rec-authorImageUrl-${index}`} className="text-xs font-medium text-gray-500">URL Imagem do Autor</Label>
                    <Input
                      id={`rec-authorImageUrl-${index}`}
                      value={rec.authorImageUrl || ""}
                      onChange={(e) => handleRecommendationChange(index, "authorImageUrl", e.target.value)}
                      placeholder="https://exemplo.com/autor.png"
                      className="bg-gray-50 border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                    />
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}