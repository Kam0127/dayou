"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Share2, ChevronLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)
  const [wanted, setWanted] = useState(false)

  // 模拟产品数据
  const product = {
    id: params.id,
    title: "极简风格台灯",
    designer: "设计师小明",
    designerId: "designer123",
    category: "灯具",
    description:
      "这是一款极简风格的台灯，采用高品质材料制作，简洁的线条设计，适合放在书桌、床头或客厅。灯光柔和，不刺眼，适合阅读和工作。可调节亮度，满足不同场景需求。",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    likes: 245,
    comments: 32,
    progress: 75,
    price: "¥299",
    materials: ["铝合金", "亚克力", "LED灯珠"],
    dimensions: "高30cm x 宽15cm x 深15cm",
    weight: "0.8kg",
    createdAt: "2023-05-15",
    merchants: [
      {
        id: 1,
        name: "优质制造商A",
        price: "¥299",
        rating: 4.8,
        reviews: 156,
        sample: true,
      },
      {
        id: 2,
        name: "专业制造商B",
        price: "¥329",
        rating: 4.6,
        reviews: 98,
        sample: true,
      },
      {
        id: 3,
        name: "创新制造商C",
        price: "¥279",
        rating: 4.3,
        reviews: 67,
        sample: false,
      },
    ],
    reviews: [
      {
        id: 1,
        user: "用户A",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "设计非常精美，做工也很好，很满意这次购买！",
        date: "2023-06-20",
      },
      {
        id: 2,
        user: "用户B",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        comment: "灯光很舒适，不刺眼，适合晚上阅读，唯一的缺点是电线有点短。",
        date: "2023-06-15",
      },
      {
        id: 3,
        user: "用户C",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        comment: "设计感很强，放在我的书桌上非常合适，朋友们都很喜欢。",
        date: "2023-06-10",
      },
    ],
  }

  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="container px-4 py-8 md:py-12">
      <Link href="/gallery" className="inline-flex items-center text-sm mb-6 hover:underline">
        <ChevronLeft className="h-4 w-4 mr-1" />
        返回画廊
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square overflow-hidden rounded-md ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} - 图片 ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Badge>{product.category}</Badge>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className="flex items-center text-sm text-muted-foreground hover:text-primary"
                >
                  <Heart className={`h-5 w-5 mr-1 ${liked ? "fill-primary text-primary" : "fill-none"}`} />
                  <span>{liked ? product.likes + 1 : product.likes}</span>
                </button>
                <button className="flex items-center text-sm text-muted-foreground hover:text-primary">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <Link href={`/designer/${product.designerId}`} className="flex items-center hover:underline">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt={product.designer} />
                  <AvatarFallback>{product.designer.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{product.designer}</span>
              </Link>
            </div>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">众筹进度</span>
                <span className="text-sm font-medium">{product.progress}%</span>
              </div>
              <Progress value={product.progress} className="h-3" />
            </div>

            <Button
              size="lg"
              className="w-full mb-4"
              variant={wanted ? "default" : "outline"}
              onClick={() => setWanted(!wanted)}
            >
              {wanted ? "已表达兴趣" : "我想要"}
            </Button>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">产品详情</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">材料</div>
                <div>{product.materials.join(", ")}</div>
                <div className="text-muted-foreground">尺寸</div>
                <div>{product.dimensions}</div>
                <div className="text-muted-foreground">重量</div>
                <div>{product.weight}</div>
                <div className="text-muted-foreground">创建日期</div>
                <div>{product.createdAt}</div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="merchants">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="merchants">制造商报价</TabsTrigger>
              <TabsTrigger value="reviews">评价 ({product.reviews.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="merchants" className="border rounded-lg p-4 mt-4">
              <div className="space-y-4">
                {product.merchants.map((merchant) => (
                  <div
                    key={merchant.id}
                    className="flex justify-between items-start pb-4 last:pb-0 last:border-0 border-b"
                  >
                    <div>
                      <h4 className="font-medium">{merchant.name}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center mr-2">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(merchant.rating)
                                    ? "fill-primary text-primary"
                                    : "fill-muted text-muted"
                                }`}
                              />
                            ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {merchant.rating} ({merchant.reviews}条评价)
                        </span>
                      </div>
                      {merchant.sample && (
                        <Badge variant="outline" className="mt-2">
                          提供样品
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-lg">{merchant.price}</div>
                      <Button size="sm" className="mt-2">
                        选择
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="border rounded-lg p-4 mt-4">
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="pb-4 last:pb-0 last:border-0 border-b">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.user} />
                          <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{review.user}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                      </div>
                    </div>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">相关推荐</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Link
              key={item}
              href={`/product/${item}`}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="相关产品"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">相关产品 {item}</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-muted-foreground">设计师小{item}</span>
                  <span className="text-sm font-semibold">¥{199 + item * 20}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">评论区</h2>
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-center text-muted-foreground">登录后参与评论</p>
        </div>
      </div>
    </div>
  )
}
