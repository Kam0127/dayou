"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageSquare, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function FeaturedGallery() {
  // 模拟数据 - 混合展示灯具和家具
  const featuredItems = [
    {
      id: 1,
      title: "山水意境椅",
      designer: "设计师小蓝",
      category: "家具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue3.jpg-zMcx9gNna6NZ0K4Er1PNOm8fQK2gbu.jpeg",
      likes: 356,
      comments: 48,
      progress: 90,
      price: "¥1299",
    },
    {
      id: 2,
      title: "现代几何台灯",
      designer: "设计师小明",
      category: "灯具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-XSZpC9zkHnMuAJiarRoOm5s5HVrE95.jpeg",
      likes: 245,
      comments: 32,
      progress: 75,
      price: "¥299",
    },
    {
      id: 3,
      title: "竹韵扶手椅",
      designer: "设计师小青",
      category: "家具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green3.jpg-ufRnNB9fbiTLoCe7Cdbt7R5pQtlYfT.jpeg",
      likes: 340,
      comments: 45,
      progress: 80,
      price: "¥1199",
    },
    {
      id: 4,
      title: "弧形编织台灯",
      designer: "设计师小红",
      category: "灯具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-pRFlqzpvOPzWKw3xq5XQ8oFKJLHepN.jpeg",
      likes: 189,
      comments: 24,
      progress: 45,
      price: "¥399",
    },
    {
      id: 5,
      title: "禅意圆形椅",
      designer: "设计师小黄",
      category: "家具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue1.jpg-Xp3iOy7sED2es0Lr3cX1rYiQVSVj3v.jpeg",
      likes: 310,
      comments: 38,
      progress: 70,
      price: "¥1199",
    },
    {
      id: 6,
      title: "创意艺术碗",
      designer: "设计师小紫",
      category: "餐具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bowl1.png-sXttN9Q7y18c2X6Vc6utwCVjNRzsDb.jpeg",
      likes: 210,
      comments: 28,
      progress: 30,
      price: "¥129",
    },
    {
      id: 21,
      title: "龙纹圆椅",
      designer: "设计师小龙",
      category: "家具",
      image: "/Red4-new.jpg",
      likes: 450,
      comments: 68,
      progress: 90,
      price: "¥2299",
    },
    {
      id: 28,
      title: "山水意境椅",
      designer: "设计师小山",
      category: "家具",
      image: "/RW2-new.jpg",
      likes: 410,
      comments: 55,
      progress: 86,
      price: "¥1999",
    },
    {
      id: 25,
      title: "几何木质椅",
      designer: "设计师小几",
      category: "家具",
      image: "/Yellow4-new.jpg",
      likes: 285,
      comments: 35,
      progress: 65,
      price: "¥1299",
    },
  ]

  const [likedItems, setLikedItems] = useState<number[]>([])
  const [wantedItems, setWantedItems] = useState<number[]>([])

  const toggleLike = (id: number) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter((itemId) => itemId !== id))
    } else {
      setLikedItems([...likedItems, id])
    }
  }

  const toggleWant = (id: number) => {
    if (wantedItems.includes(id)) {
      setWantedItems(wantedItems.filter((itemId) => itemId !== id))
    } else {
      setWantedItems([...wantedItems, id])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {featuredItems.map((item) => (
        <div key={item.id} className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <Link href={`/product/${item.id}`}>
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                unoptimized
              />
              <Badge className="absolute top-2 right-2">{item.category}</Badge>
            </div>
          </Link>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.designer}</p>
              </div>
              <div className="text-lg font-semibold">{item.price}</div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">众筹进度</span>
                <span className="text-sm font-medium">{item.progress}%</span>
              </div>
              <Progress value={item.progress} className="h-2" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button
                  onClick={() => toggleLike(item.id)}
                  className="flex items-center text-sm text-muted-foreground hover:text-primary"
                >
                  <Heart
                    className={`h-4 w-4 mr-1 ${
                      likedItems.includes(item.id) ? "fill-primary text-primary" : "fill-none"
                    }`}
                  />
                  <span>{likedItems.includes(item.id) ? item.likes + 1 : item.likes}</span>
                </button>
                <button className="flex items-center text-sm text-muted-foreground hover:text-primary">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{item.comments}</span>
                </button>
                <button className="flex items-center text-sm text-muted-foreground hover:text-primary">
                  <Share2 className="h-4 w-4 mr-1" />
                </button>
              </div>
              <Button
                size="sm"
                variant={wantedItems.includes(item.id) ? "default" : "outline"}
                onClick={() => toggleWant(item.id)}
              >
                {wantedItems.includes(item.id) ? "已想要" : "我想要"}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
