"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, MessageSquare, Share2 } from "lucide-react"

export default function CategoriesPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [likedItems, setLikedItems] = useState<number[]>([])
  const [wantedItems, setWantedItems] = useState<number[]>([])

  // 模拟分类数据
  const categories = [
    {
      id: "all",
      name: "全部",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gold1.jpg-mC3RbSmS40P7rY8gAfbw6SIpm2IfXM.jpeg",
    },
    {
      id: "furniture",
      name: "家具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue3.jpg-zMcx9gNna6NZ0K4Er1PNOm8fQK2gbu.jpeg",
    },
    {
      id: "lighting",
      name: "灯具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-XSZpC9zkHnMuAJiarRoOm5s5HVrE95.jpeg",
    },
    {
      id: "stationery",
      name: "文具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-13B5NZMsyzfFtmfcYHPLyCPjxN1Xg4.jpeg",
    },
    {
      id: "bags",
      name: "包袋",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green1.jpg-ZH9h1jJ7coZQB3FyAAPFwTmXLkzE5y.jpeg",
    },
    {
      id: "tableware",
      name: "餐具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bowl1.png-sXttN9Q7y18c2X6Vc6utwCVjNRzsDb.jpeg",
    },
    {
      id: "accessories",
      name: "饰品",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green3.jpg-ufRnNB9fbiTLoCe7Cdbt7R5pQtlYfT.jpeg",
    },
  ]

  // 模拟产品数据
  const products = {
    all: [
      // 灯具
      {
        id: 1,
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
        id: 2,
        title: "弧形编织台灯",
        designer: "设计师小红",
        category: "灯具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-pRFlqzpvOPzWKw3xq5XQ8oFKJLHepN.jpeg",
        likes: 189,
        comments: 24,
        progress: 45,
        price: "¥399",
      },
      // 家具
      {
        id: 3,
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
        id: 4,
        title: "流线型艺术椅",
        designer: "设计师小绿",
        category: "家具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue4.jpg-gB3wa6Vqg7kfTI2N1rhe4bmp4rCw7m.jpeg",
        likes: 420,
        comments: 62,
        progress: 85,
        price: "¥1599",
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
    ],
    furniture: [
      {
        id: 3,
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
        id: 4,
        title: "流线型艺术椅",
        designer: "设计师小绿",
        category: "家具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue4.jpg-gB3wa6Vqg7kfTI2N1rhe4bmp4rCw7m.jpeg",
        likes: 420,
        comments: 62,
        progress: 85,
        price: "¥1599",
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
        id: 7,
        title: "云纹艺术椅",
        designer: "设计师小白",
        category: "家具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue2.jpg-PmwmVWjCSzyetx6ot14ayy3ob8Jmay.jpeg",
        likes: 280,
        comments: 35,
        progress: 65,
        price: "¥1399",
      },
      {
        id: 8,
        title: "金属框架椅",
        designer: "设计师小黑",
        category: "家具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gold1.jpg-mC3RbSmS40P7rY8gAfbw6SIpm2IfXM.jpeg",
        likes: 195,
        comments: 22,
        progress: 55,
        price: "¥899",
      },
      {
        id: 9,
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
        id: 10,
        title: "现代禅意椅",
        designer: "设计师小粉",
        category: "家具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green1.jpg-ZH9h1jJ7coZQB3FyAAPFwTmXLkzE5y.jpeg",
        likes: 265,
        comments: 32,
        progress: 75,
        price: "¥1099",
      },
      {
        id: 11,
        title: "典雅金属椅",
        designer: "设计师小橙",
        category: "家具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gold2.jpg-6ruGiwPFErNO8kDmkZJjhvROBE3JVg.jpeg",
        likes: 220,
        comments: 28,
        progress: 60,
        price: "¥999",
      },
      {
        id: 12,
        title: "简约木质椅",
        designer: "设计师小灰",
        category: "家具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green2.jpg-46sws257IbfwYJy7X5ts80iw2YNXv5.jpeg",
        likes: 185,
        comments: 25,
        progress: 50,
        price: "¥799",
      },
      {
        id: 13,
        title: "竹编艺术椅",
        designer: "设计师小棕",
        category: "家具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green4.jpg-DT2L1wYRqN0yYpkKJMtOr69CVledPN.jpeg",
        likes: 295,
        comments: 38,
        progress: 70,
        price: "¥1299",
      },
      {
        id: 20,
        title: "禅意扶手椅",
        designer: "设计师小禅",
        category: "家具",
        image: "/RW1-new.jpg",
        likes: 380,
        comments: 52,
        progress: 85,
        price: "¥1599",
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
        id: 22,
        title: "云纹艺术椅",
        designer: "设计师小云",
        category: "家具",
        image: "/Red2-new.jpg",
        likes: 420,
        comments: 58,
        progress: 88,
        price: "¥2199",
      },
      {
        id: 23,
        title: "传统云纹椅",
        designer: "设计师小传",
        category: "家具",
        image: "/Red3-new.jpg",
        likes: 395,
        comments: 48,
        progress: 82,
        price: "¥1899",
      },
      {
        id: 24,
        title: "龙纹休闲椅",
        designer: "设计师小休",
        category: "家具",
        image: "/Red1-new.jpg",
        likes: 365,
        comments: 42,
        progress: 78,
        price: "¥1699",
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
      {
        id: 26,
        title: "简约木椅",
        designer: "设计师小简",
        category: "家具",
        image: "/Yellow1-new.jpg",
        likes: 245,
        comments: 28,
        progress: 58,
        price: "¥999",
      },
      {
        id: 27,
        title: "艺术图案椅",
        designer: "设计师小艺",
        category: "家具",
        image: "/RW4-new.jpg",
        likes: 325,
        comments: 38,
        progress: 72,
        price: "¥1599",
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
        id: 29,
        title: "水墨扶手椅",
        designer: "设计师小墨",
        category: "家具",
        image: "/RW3-new.jpg",
        likes: 355,
        comments: 45,
        progress: 75,
        price: "¥1799",
      },
    ],
    lighting: [
      {
        id: 1,
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
        id: 2,
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
        id: 14,
        title: "几何网格台灯",
        designer: "设计师小蓝",
        category: "灯具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-13B5NZMsyzfFtmfcYHPLyCPjxN1Xg4.jpeg",
        likes: 156,
        comments: 18,
        progress: 90,
        price: "¥199",
      },
      {
        id: 15,
        title: "流线型台灯",
        designer: "设计师小绿",
        category: "灯具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-BF6HeVL0XSYSmol3J2NP68gr88hMaB.jpeg",
        likes: 320,
        comments: 42,
        progress: 60,
        price: "¥259",
      },
      {
        id: 16,
        title: "木质弯曲台灯",
        designer: "设计师小紫",
        category: "灯具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-1S0Pb1S56GQ6woM5j2ta4gDVI2t0aW.jpeg",
        likes: 275,
        comments: 36,
        progress: 85,
        price: "¥399",
      },
    ],
    stationery: [
      {
        id: 17,
        title: "创意笔筒",
        designer: "设计师小文",
        category: "文具",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-13B5NZMsyzfFtmfcYHPLyCPjxN1Xg4.jpeg",
        likes: 145,
        comments: 16,
        progress: 50,
        price: "¥79",
      },
    ],
    bags: [
      {
        id: 18,
        title: "时尚手提包",
        designer: "设计师小包",
        category: "包袋",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green1.jpg-ZH9h1jJ7coZQB3FyAAPFwTmXLkzE5y.jpeg",
        likes: 210,
        comments: 28,
        progress: 55,
        price: "¥299",
      },
    ],
    tableware: [
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
    ],
    accessories: [
      {
        id: 19,
        title: "创意装饰品",
        designer: "设计师小饰",
        category: "饰品",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Green3.jpg-ufRnNB9fbiTLoCe7Cdbt7R5pQtlYfT.jpeg",
        likes: 190,
        comments: 24,
        progress: 50,
        price: "¥199",
      },
    ],
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftScroll(scrollLeft > 0)
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

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

  const displayProducts = products[selectedCategory as keyof typeof products] || products.all

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">分类浏览</h1>
          <p className="text-muted-foreground">探索大有不同品类的创意产品，找到你喜欢的设计</p>
        </div>
        <div className="relative flex-1 md:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="搜索创意..." className="pl-8" />
        </div>
      </div>

      <div className="relative mb-12">
        {showLeftScroll && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full shadow-md p-2"
            aria-label="向左滚动"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide py-4 space-x-8"
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center min-w-[80px] transition-opacity ${
                selectedCategory === category.id ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="relative w-20 h-20 mb-2 rounded-full overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className={`text-sm ${selectedCategory === category.id ? "font-medium" : ""}`}>
                {category.name}
              </span>
              {selectedCategory === category.id && <div className="h-0.5 w-8 bg-primary mt-2 rounded-full" />}
            </button>
          ))}
        </div>

        {showRightScroll && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full shadow-md p-2"
            aria-label="向右滚动"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayProducts.map((item) => (
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

      <div className="mt-12 flex justify-center">
        <Button variant="outline" className="mx-auto">
          加载更多
        </Button>
      </div>
    </div>
  )
}
