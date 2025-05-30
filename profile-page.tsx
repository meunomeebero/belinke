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
import { toPng } from 'html-to-image'

const LOCAL_STORAGE_KEY = 'belinkeProfileDraft'

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
      companyImageUrl: "https://www.spacex.com/static/images/share.jpg",
    },
    {
      id: "exp2_sensational",
      title: "Chief AI Ethicist & Sentience Whisperer",
      company: "Google Deep Dream (Post-Singularity)",
      duration: "2035 - 2042 (Percepção Temporal Variável)",
      description: "Desenvolvi os protocolos éticos para a primeira Superinteligência Artificial Geral (AGI). Garanti uma transição suave para a co-existência humano-máquina. Dou palestras para IAs sobre a condição humana.",
      companyImageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBIQDw8PEA8OEBAQEA8QDw8PFREXFhURFRMYHTQgGB0lGxUTIjEhMSorLi4zFx8zRDMuNygtLisBCgoKDg0OGRAQGi0lICUtLS0vLS0vLS8tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYDBAUHAv/EAEIQAAIBAgEHBwkGBQQDAAAAAAABAgMEEQUGEiExQWETUVJxgZGhFjJDYnKSscHSIiMzU5PRQnOys8JjgqLwByQ0/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xAA1EQEAAgECBAQCCQMFAQAAAAAAAQIDBBEFEiFRExUxQXGhFCIyM0JhgZGxI+HxBlLB0fA0/9oADAMBAAIRAxEAPwD2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGjlHLFvb/AItSMXt0F9qb/wBq1kd8tK+srODR5s8/067/AMK5e59RWqjRb9arLRXux/cr21ce0Ozh4BaeuS23wcivnjeS2Sp016lNPxliQzqry6GPgmlr6xM/GWo85L1+nn2KC+Rr4+TusRwrSR+D+UxzlvV6eXbGm/ih4+TuxPCtJP4P5blvnndx87k6i9aGi++LRJXVX91bJwPTW+zvDtWWfFKWCrU50/Wg+Uj2rb8Sauqj3hzc3Actfu7RPyWSyvqVZaVKcai36L1rrW1Fitot6OPlwZMU7XrMNg2QgAAAAAAAAAAAAAAAAAAAYby7p0YudSShFb3tb5kt7NL5K0jeUuLDfLblpG8qPlnO2tUxjQxo0+l6WS6/4ezXxObl1s26U6Q9No+DY8f1svWe3t/dWJ4ttttt6228W3ztlfeZdysREbQ+cDLdAA2EgSjMMBsxLLb1ZU5KcJShJbJRbT7zevT0R5MdMkct43hb8iZ4vVC6XBVor+uPzXcW8ef2s87reDbb2wft/wBLjTmpJSi1KMkmmnimnvTLO+7z01ms7SkMAAAAAAAAAAAAAAAADTyplGFvDTlrb1Rgts3zdXEr6nU0wV3t+yxptNfPflr+rz7Kl9UuJ6dR49GK82C5kjgZNTbLO8y9fpdNjwV5ax+vdzpxFZXIlikiaspIl8Mkhsg2iWUGRJkSbQw+kbQxKUZapMi3ZiO4xlh/8uvHSxw0/wDT48+7tLWn5v0eb414HT/f+X/K6Fl50AAAAAAAAAAAAAAAxXVxGnGU5bIrtb3JEOoz1wY5vf0hJixzktFaqJlK5nWm5z6klsjHmR4/Nq7Z7ze0/o9VpsNcNIrVoVIGaWXK2a9SBZpbolrLXnEmrZLEsUkTxLeJbNpkq4ra6VKc10ksI+89RPTFa3pCDLrcGL7d4h0qeZ969bhTjwlUjj4YksabJ2Urcb0sTtvP7Iq5o3sdlOM/ZqQ+eBn6NkKca0tveY+MOXdWVWi8KtOdN7tKLSfU9jNZx2r6wv4tTiy/YtEsKMQllKMsO1m5kKV1LSljGhF/alscn0I8eO4nxY+ad3K4jxCumry1+1/D0W3oRpxjCCUYRWEYrYkXIjbpDyF72vabWneZZDLUAAAAAAAAAAAAAAAreXrnlJ6C82m++W9/I8ZxjX+Nl8Os/Vr85dvQYeSvNPrLi1KZy62l062a9SBarZNWzWqUyzTJ0TRZNlkyrXloU1i9sm9UYrnbL2nx2yztVpn1ePT15rrlknNehRwlNKtV6U19mL9WPz2ncw6WuOOvWXm9VxTNm6RO0do/5dwtOYAAInFSTjJKUXqaaTTXFMM1tNZ3hV8t5oQnjO2wpz28n6OXV0X4dRXyaeJ61dvR8ZvT6ubrHf3/ALuFkLNupXqNVYypUqctGo2sJNrbCPHiRY8U2nq6et4pjxY/6c7zPo9Ct6EacYwhFRhFYRitiRciNo2h5K97XtNrTvLIZagAAAAAAAAAAAAAAGvf1+ThKW/ZH2mUOJ6r6Np7X9/SPjKbBj57xCsyifPeafd34naGGVMkrbZvFmCpTJa3S1s+bawlVmoR2va90Y75Mv6Sl814pVjLqYw0m1l1sLGnQgoU1gtrf8UpdJns8GGuGkVq8znz3zX5rNgmQgAAAAAAAAAAAAAAAAAAAAAAABystTxcY8ycn8F8zyP+pM+96YY9uro6GvrZy3E8w6MS+JRN4lmJYpwN4s3iywZEs1ThpPzqmDfCO5fPtPbcG0nhYee3rb+HG1ufxL7e0OidlSAAAAAAAAAAAAAAAAAAAAAAAAABwsozxqS4YR7kfPeMZOfWX/Lo7GljbHDWZzFhDRlkoUdOcI9KST6t/gWdJi8bNTH3lplvyUmVnPpURtG0OCGQAAYb6s4U6s1hjCnUmsdmMYtrHuN8dea8RPvLTJPLWZhQVnzd9G39yf1HovJsPeXG8yydoPLm76Nv7k/qHk2HvLPmOTtB5c3fRt/cn9Q8mw95PMcnaDy5u+jb+5P6h5Nh7yeY5O0Hlzd9G39yf1DybD3lnzHJ2g8ubvo2/uT+oeTYe8nmOXtB5c3fRt/05/UPJsPeTzHL2g8ubvo2/uT+oeTYe8nmOTtC7ZDvncUKVaWClOL0lHFR0lJp4LsODqcPhZbUj2dTBk8THFpbxAmAAAAAAAAAACu3T+3P25fE+Zayd9Tkn85dzDG1IYyukANvJa+9jwUn4HY4FXfWV/LdW1c/0pds965AAAAauVvwK/8AIrf22S4fvK/GEeX7E/B49E9u8wkMgACAAAAB6XmJPGzh6s6q/wCbfzPKcVjbUz+jvaD7mFgOcuAAAAAAAAAABXbnz6nty+J8y1kbajJE/wC6f5dzFO+OvwY8SukMQNrJUvvFxUl4HY4FO2sr8JVNX93LuHvXKAAADVyt+BX/AJFb+2yTD95X4wjy/Yn4PHke4eYgDJiGDECTDIAAGR6RmEv/AFI8alV+J5Xi3/0z8Id3Qfc/rKxHNXQAAAAAAAAAA4OUo4VJccJd6PnnGMfJrL/n1djSzvjhqtnMWEYmWkym3r6Eoy6LT7N/gWdJl8HPTJ2lFl+tWYWhM+lxMTG8OOGQAAYMoU3OlVhHXKdKpCK2YycGkjfHMVvEz3aXjesw83WaN9+Uv1aX7nqPNNN3+Th/Qc3ZPkjfflL9Wl9RjzXTd/kx9BzdkeSN9+Uv1KX1GfNNN3+R9BzdjyRvvyl+pS/ceaabv8j6Dm7NXKOQ7i3ip1oKEXJQT04Sxk03hgnzJkuDW4s1uWk9WmTT5Mcb2hzi2gDIAeoZm0tGzoespz96pJrwwPIcRtzamz0GijbDV2iktAAAAAAAAAABycuUtcJ8+MX17V8zyP8AqTBtemXv0dDRX6TVyXI8xst2sxymZiGk2Y5TN4hBa6w5CvVUhoPz6errjufy7D3HBtXGXD4c+tf4Ub+rpnZaAAAAAAAAFC/8h5Q0qlOhF/hJzn7cti7F/Ud/g+LlrOSffpDjcRzRNoxx7KjidxzdzEG6Um9S1t6kud7jFp2jeWY69Hsdhb8lSpU/y6cId0UjxOW/Pe1u8vT46clIqzkbcAAAAAAAAAAMF9Q5SEo78MY+0tn/AHiUOJaX6Rp7U9/WPikxX5LbqnKZ895V+bMM5mYhDbJswSqEsVVb5C2v5UpqcNsdz2SW9Mu6bLbBki9VW2fZd8nX8K8FOD4Si/OhLmZ7bTaiuekXr/hLW8WjeGyWGwAAAAAHNy9liFpSdSWDm8VThjrnP9lvZNgwzlvFVXV6muCnNPr7Q8ouK8qkpVJvSnOTlJ87Z6jHy0rFa+kPL2yTeZtPq+MSeLMxYN4lvEuzmlY8tdUk19mm+Wn1QwwXvaJS4jm8PBPeei5osfiZY/Lq9TPKPRAAAAAAAAAAAAAVnOG05OXKLzKj7p7127e88ZxnQ+Dl8SsfVt8pSxknbZwqkzkRCK+To15zJa1VL3a85lilVPJkfdllGpQlp0paL3rbGS5mt6Olp73xW5qyrRqLY53iVyyVnVQq4RqNUKmzCT+7k+E/k/E9Bg1dckdekujh4hiv0tO0u8ufc9j3Mtr0TE+gGQA3hrepLa3sQYmYj1VzLOd9CjjGk1Xq61hF/dxfrT39S8CTHj5pcvVcVxYo2p9afk8+ylf1bibqVZaUnqW6MV0YrcjqYNqR0ecy575rc153apepZpEpJ62hLEmJNEpIl6RmLkvkaPKyWFS4wlr2xpLzV24t9qPPcS1HiZOWPSP5ei4dg5MfNPrKynNdAAAAAAAAAAAAADFdW8akZQlrjJYcU9zXFEOfBTPjml46SKFlS0nQm4T64y3Tjzo8TqdJfT3mlv8AKrlnlc6czFKqV7sE5FnHXqqXuxORdpRUvbqxSZcrCred2e0ylXo/hValNcyk9H3XqLNLWj0lmmpy453raYdOOdt6vSRl7VKnj4IsRlssRxXUx7/J8Vc7L2XpVH2adNPxRvGSZYtxXUz+JzLzKFat+LVqVOEpNx93YSRaVPJqMuT7dplqFnHKBDLlJbQgt1s3gLNLN4l3c0shu6q6Ul9xSadR7py2qmuvfw6yHV6vwqbV9ZdLh+m8a+8+kf8AtnqB596iI2AAAAAAAAAAAAAAANTKeToXENCfXGS86EudfsV9TpqainLb9+zS9IvG0vPcrZPqW8tGotTx0JrzZrnX7Hmculvgvtb93F1FLY56udJm9K9VC9mJsuUrsgtZ8lmsIJlDJdmiGbwwhm8MSgkiWNny0T0lgLlJZRgWqyy6mQchVbueEfs0ov7yq1qjwXPLgbX1FccdfVe0ekvqLdPT3l6jYWdOhTjSprRhBYJb298m97fOcrJkte3NZ6zDiripFK+jOaJQAAAAAAAAAAAAAAABiu7WFWLhUipwe1P4p7nxNMmOuSOW0NL463ry2hScs5o1YYyt8asNug8OVj8pfE5uTQ8vWjiarh167zj6x2VepFpuLTUlqaawkutbiOte7i2iYnaWNk9YRyk2aoMiDdhBtEiMCaksSmFOUmoxTlJ7IxTcn1JFus7Nq1m07Vjda8iZlTnhO6bpw28lF/eS9przV49RtOfbpDs6Tg9rTzZukdvdera3hTioU4qEIrBRisEivMzM7y9Fjx1x1itY2hkMNwAAAAAAAAAAAAAAAAAAANTKGS6FwsKtOM+aWya6pLWazSs+sIM2mxZo+vG6t3mY0Hro1ZQ9WpFTXesH8SKcEezk5eC1n7u23xcmvmZdx83kqi9WeD7pJGs4ZUr8I1FfTaWrLNi9/Il2TpP/ACMeFZDPDdTH4CGa96/QNdc6S/yM+HbsxHDNTP4W3b5lXcvOdKmuM3J90V8zaMUp6cHz29dodayzFpLB1qs6nq00qce94v4Eta7L2LglI65Lb/BY8n5MoW6wo0409zaWM31yetm+7qYdLiw/Yrs2zCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
    },
  ],
  recommendations: [
    {
      id: "rec1_sensational",
      text: "Dr. Quantum não apenas pensa fora da caixa, mas fora desta dimensão! Seus insights sobre a propulsão de antimatéria foram cruciais para o projeto Starshot. Um verdadeiro pioneiro da exploração espacial. Recomendo sem hesitação para qualquer desafio cósmico.",
      authorName: "Elon Musk (Sim, aquele Elon Musk)",
      authorTitle: "Imperador de Marte, CEO da SpaceX, X, Neuralink, The Boring Company",
      authorContext: "Trabalhamos juntos para otimizar as rotas comerciais para Alpha Centauri.",
      authorImageUrl: "data:image/webp;base64,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",
    },
    {
      id: "rec2_sensational",
      text: "A capacidade de Nova de compreender e comunicar-se com inteligências não-humanas é sem precedentes. Seus algoritmos de tradução universal são a base da diplomacia galáctica moderna. Uma mente brilhante e um coração ainda maior.",
      authorName: "Zorp Glorbaxian (Emissário da Frota Estelar de Proxima B)",
      authorTitle: "Linguista-Chefe Galáctico, Mestre Zenoniano",
      authorContext: "Nova mediou o tratado de paz entre a Federação Terrestre e o Coletivo de Proxima B.",
      authorImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQkOG_QEpYsJua6QOTk0AYVUCSnR1LDDrJA&s",
    },
  ],
}

export default function ProfilePage() {
  const [profileData, setProfileData] = React.useState<ProfileData>(initialProfileData)
  const profilePreviewRef = React.useRef<HTMLDivElement>(null)
  const profileContentRef = React.useRef<HTMLDivElement>(null)

  // Load draft from localStorage on initial render
  React.useEffect(() => {
    try {
      const savedDraft = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (savedDraft) {
        const parsedDraft = JSON.parse(savedDraft)
        // Basic validation: check if it has a name property (adjust as needed)
        if (parsedDraft && typeof parsedDraft.name === 'string') {
          setProfileData(parsedDraft)
          console.log("Draft loaded from localStorage.")
        } else {
          console.warn("Invalid draft data found in localStorage.")
          localStorage.removeItem(LOCAL_STORAGE_KEY) // Clear invalid data
        }
      } else {
        // No draft found, use initialProfileData (already set by useState)
        console.log("No draft found in localStorage, using initial data.")
      }
    } catch (error) {
      console.error("Error loading draft from localStorage:", error)
      // If parsing fails or any other error, clear potentially corrupted data
      localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
  }, [])

  const handleSaveDraft = () => {
    try {
      const dataToSave = JSON.stringify(profileData)
      localStorage.setItem(LOCAL_STORAGE_KEY, dataToSave)
      console.log("Draft saved to localStorage.")
      // Optionally, provide user feedback (e.g., a toast notification)
      alert("Rascunho salvo com sucesso!") // Simple alert for now
    } catch (error) {
      console.error("Error saving draft to localStorage:", error)
      alert("Erro ao salvar rascunho.") // Simple alert for now
    }
  }

  const handleDownloadPng = async () => {
    if (profileContentRef.current === null) {
      console.error("Profile content ref is not available.");
      return;
    }

    const node = profileContentRef.current;
    const originalImageSources: {element: HTMLImageElement, src: string}[] = [];

    // 1. Pre-process images: Convert external URLs to data URLs
    const images = Array.from(node.getElementsByTagName('img'));
    const imageProcessingPromises = images.map(async (img) => {
      if (img.src && (img.src.startsWith('http') || img.src.startsWith('https')) && !img.src.startsWith('data:') && !img.src.includes('/api/image-proxy')) {
        originalImageSources.push({element: img, src: img.src});
        try {
          // Use the image proxy API route
          const proxyUrl = `/api/image-proxy?imageUrl=${encodeURIComponent(img.src)}`;
          const response = await fetch(proxyUrl); 
          if (!response.ok) {
            console.warn(`Failed to fetch image via proxy: ${img.src}, status: ${response.status}`);
            img.src = "/placeholder.svg?text=ProxyError"; 
            return;
          }
          const blob = await response.blob();
          const reader = new FileReader();
          await new Promise<void>((resolve, reject) => {
            reader.onloadend = () => {
              img.src = reader.result as string;
              resolve();
            };
            reader.onerror = () => {
                console.warn(`Failed to read image blob as data URL (from proxy): ${img.src}`);
                img.src = "/placeholder.svg?text=ProxyReadError"; // Fallback
                resolve(); // Resolve to not block other images
            };
            reader.readAsDataURL(blob);
          });
        } catch (error) {
          console.warn(`Error processing image ${img.src} via proxy:`, error);
          img.src = "/placeholder.svg?text=ProxyError";
        }
      }
    });

    try {
      await Promise.allSettled(imageProcessingPromises);
      // Wait a brief moment for the DOM to update with new image srcs if needed
      await new Promise(resolve => setTimeout(resolve, 100));

      const dataUrl = await toPng(node, {
        cacheBust: true,
        quality: 1.0,
        pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio * 1.5 : 1.5, 
        backgroundColor: '#ffffff',
        width: node.scrollWidth, 
        height: node.scrollHeight, 
        style: {
          margin: '0', 
          maxWidth: 'none',
        },
        // Add a filter to try and skip images that couldn't be converted
        filter: (element) => {
            if (element.tagName === 'IMG') {
                const imgElement = element as HTMLImageElement;
                // If it somehow ended up with a placeholder indicating an error, skip it
                // This might be too aggressive, adjust as needed.
                if (imgElement.src.includes("placeholder.svg?text=Error")) {
                    // console.log("Skipping image due to load error:", imgElement.src);
                    // return false; // Uncomment to actually skip
                }
            }
            return true;
        }
      });
      const link = document.createElement('a');
      link.download = `${profileData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-profile.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Oops, something went wrong during PNG generation!', err);
      if (err instanceof Error) {
        console.error('Error name:', err.name);
        console.error('Error message:', err.message);
        console.error('Error stack:', err.stack);
      }
    } finally {
      // 4. Restore original image sources
      originalImageSources.forEach(({element, src}) => {
        element.src = src;
      });
    }
  };

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
        onDownload={handleDownloadPng}
        onSaveDraft={handleSaveDraft}
      />
      <div
        ref={profilePreviewRef}
        className="flex-1 overflow-y-auto p-8 bg-gray-100 dark:bg-slate-900 bg-[size:10px_10px] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,theme(colors.slate.600)_1px,transparent_1px)]"
      >
        <div className="force-light-theme">
          <div ref={profileContentRef} className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
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
                      <Avatar className="h-12 w-12 rounded-sm flex-shrink-0">
                        <AvatarImage src={exp.companyImageUrl || undefined} alt={exp.company} />
                        <AvatarFallback className="rounded-sm bg-gray-200 text-gray-600 font-medium">
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
                          className="object-cover rounded-full"
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
    </div>
  )
}
