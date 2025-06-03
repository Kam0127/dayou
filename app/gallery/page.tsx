"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, MessageSquare, Share2, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function GalleryPage() {
  // 模拟数据 - 直接使用blob URL
  const galleryItems = [
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
      id: 3,
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
      id: 4,
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
      id: 5,
      title: "创意艺术碗",
      designer: "设计师小黄",
      category: "餐具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bowl1.png-sXttN9Q7y18c2X6Vc6utwCVjNRzsDb.jpeg",
      likes: 210,
      comments: 28,
      progress: 30,
      price: "¥129",
    },
    {
      id: 6,
      title: "木质弯曲台灯",
      designer: "设计师小紫",
      category: "灯具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-1S0Pb1S56GQ6woM5j2ta4gDVI2t0aW.jpeg",
      likes: 275,
      comments: 36,
      progress: 85,
      price: "¥399",
    },
    {
      id: 7,
      title: "传统陶瓷台灯",
      designer: "设计师小橙",
      category: "灯具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-RffyBCAEZoqRN3JNwNbMi4FFQjvNij.jpeg",
      likes: 310,
      comments: 45,
      progress: 65,
      price: "¥329",
    },
    {
      id: 8,
      title: "环形设计台灯",
      designer: "设计师小青",
      category: "灯具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Z9iDvpa4PF499URnVShu6jE5AxsOSn.jpeg",
      likes: 180,
      comments: 22,
      progress: 40,
      price: "¥279",
    },
    {
      id: 9,
      title: "叶片造型台灯",
      designer: "设计师小粉",
      category: "灯具",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-MN8Jj4dxIQHMwmUSrPLynKjhnCvkTS.jpeg",
      likes: 230,
      comments: 30,
      progress: 55,
      price: "¥359",
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
    <div className="container px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">创意画廊</h1>
          <p className="text-muted-foreground">浏览所有创意产品，找到你喜欢的设计</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="搜索创意..." className="pl-8" />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>筛选</SheetTitle>
                <SheetDescription>根据条件筛选创意产品</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">类别</h3>
                  <div className="space-y-2">
                    {["灯具", "餐具", "家具", "文具", "包袋", "饰品"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`} className="text-sm font-normal">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">进度</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="progress-high" />
                      <Label htmlFor="progress-high" className="text-sm font-normal">
                        即将完成 (75%+)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="progress-medium" />
                      <Label htmlFor="progress-medium" className="text-sm font-normal">
                        进行中 (25%-75%)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="progress-low" />
                      <Label htmlFor="progress-low" className="text-sm font-normal">
                        刚开始 (0-25%)
                      </Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">价格区间</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-low" />
                      <Label htmlFor="price-low" className="text-sm font-normal">
                        ¥0 - ¥200
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-medium" />
                      <Label htmlFor="price-medium" className="text-sm font-normal">
                        ¥200 - ¥400
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-high" />
                      <Label htmlFor="price-high" className="text-sm font-normal">
                        ¥400+
                      </Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">排序方式</h3>
                  <Select defaultValue="popular">
                    <SelectTrigger>
                      <SelectValue placeholder="选择排序方式" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">最受欢迎</SelectItem>
                      <SelectItem value="newest">最新发布</SelectItem>
                      <SelectItem value="progress-high">进度最高</SelectItem>
                      <SelectItem value="progress-low">进度最低</SelectItem>
                      <SelectItem value="price-low">价格从低到高</SelectItem>
                      <SelectItem value="price-high">价格从高到低</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <Button variant="outline">重置</Button>
                  <Button>应用筛选</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Select defaultValue="popular">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="排序方式" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">最受欢迎</SelectItem>
              <SelectItem value="newest">最新发布</SelectItem>
              <SelectItem value="progress-high">进度最高</SelectItem>
              <SelectItem value="progress-low">进度最低</SelectItem>
              <SelectItem value="price-low">价格从低到高</SelectItem>
              <SelectItem value="price-high">价格从高到低</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
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
