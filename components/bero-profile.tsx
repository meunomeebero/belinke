"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SocialMediaCard {
  platform: string;
  icon: React.ReactNode;
  url: string;
  handle: string;
  color: string;
}

export function BeroProfile() {
  const socialMedias: SocialMediaCard[] = [
    {
      platform: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://x.com/meunomeebero",
      handle: "@meunomeebero",
      color: "bg-black hover:bg-gray-800",
    },
    {
      platform: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/meunomeebero",
      handle: "@meunomeebero",
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
    },
    {
      platform: "YouTube",
      icon: <Youtube size={20} />,
      url: "https://www.youtube.com/@meunomeebero",
      handle: "@meunomeebero",
      color: "bg-red-600 hover:bg-red-700",
    },
  ];

  return (
    <div className="w-80 min-w-80 h-full flex flex-col bg-white border-l border-gray-200 shadow-lg">
      <div className="relative">
        {/* Cover Image */}
        <div className="h-32 w-full relative">
          <Image
            src="/cover.jpeg"
            alt="Cover image"
            className="w-full h-full object-cover"
            width={320}
            height={128}
            priority
          />
        </div>
        
        {/* Profile Picture */}
        <div className="absolute -bottom-10 left-6">
          <Avatar className="h-20 w-20 border-4 border-white rounded-full">
            <AvatarImage src="/bero.png" alt="Bero" className="object-cover" />
            <AvatarFallback className="bg-gray-200 text-gray-600 font-semibold">B</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-12 px-6 pb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Made by Bero</h1>
        <p className="text-sm text-gray-600 mt-1">
          Criador do 🐝 Belinke
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Desenvolvedor • Criador de Conteúdo
        </p>
      </div>

      {/* Social Media Cards */}
      <div className="flex-1 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h2>
        <div className="space-y-3">
          {socialMedias.map((social) => (
            <Link
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <div className={`${social.color} text-white p-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {social.icon}
                    <div>
                      <div className="font-semibold text-sm">{social.platform}</div>
                      <div className="text-xs opacity-90">{social.handle}</div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="opacity-70" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Feito com ☕️ por Bero
          </p>
        </div>
      </div>
    </div>
  );
} 