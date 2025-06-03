"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Loader2, PlusCircle, Edit, Trash2, Eye } from "lucide-react"
import { UserAvatar } from "@/components/auth/user-avatar"
import { PenTool, Heart, ShoppingBag, Settings } from "lucide-react"

export default function DesignsPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  // 模拟设计数据
  const designs = [
    {
      id: 1,
      title: "极简风格台灯",
      category: "灯具",
      image: "/placeholder.svg?height=300&width=300",
      status: "published",
      progress: 75,
      likes: 245,
      createdAt: "2023-05-15",
    },
    {
      id: 2,
      title: "创意书架设计",
      category: "家具",
      image: "/placeholder.svg?height=300&width=300",
      status: "draft",
      progress: 0,
      likes: 0,
      createdAt: "2023-06-20",
    },
    {
      id: 3,
      title: "多功能笔筒",
      category: "文具",
      image: "/placeholder.svg?height=300&width=300",
      status: "published",
      progress: 30,
      likes: 56,
      createdAt: "2023-04-10",
    },
  ]

  // 如果未登录，重定向到登录页面
  if (!isLoading && !user) {
    router.push("/auth/login")
    return null
  }

  // 如果正在加载，显示加载状态
  if (isLoading) {
    return (
      <div className="container flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p>加载中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 侧边栏 */}
          <div className="md:w-1/4">
            <div className="sticky top-20 space-y-6">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border shadow-sm">
                <UserAvatar user={user} size="lg" className="mb-4" />
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <p className="text-sm mt-2">{user?.bio || "暂无个人简介"}</p>

                <div className="flex justify-between w-full mt-4">
                  <div className="text-center">
                    <p className="font-semibold">{designs.length}</p>
                    <p className="text-xs text-muted-foreground">设计</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{user?.followers || 0}</p>
                    <p className="text-xs text-muted-foreground">粉丝</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">{user?.following || 0}</p>
                    <p className="text-xs text-muted-foreground">关注</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
                <div className="flex flex-col">
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="/profile" className="flex items-center px-4 py-2">
                      <UserAvatar user={user} size="sm" className="mr-2" />
                      <span>个人资料</span>
                    </a>
                  </Button>
                  <Button variant="ghost" className="justify-start bg-muted" asChild>
                    <a href="/profile/designs" className="flex items-center px-4 py-2">
                      <PenTool className="mr-2 h-4 w-4" />
                      <span>我的设计</span>
                    </a>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="/profile/likes" className="flex items-center px-4 py-2">
                      <Heart className="mr-2 h-4 w-4" />
                      <span>我的收藏</span>
                    </a>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="/profile/orders" className="flex items-center px-4 py-2">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      <span>我的订单</span>
                    </a>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="/profile/settings" className="flex items-center px-4 py-2">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>账户设置</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 主内容区 */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">我的设计</h1>
              <Button asChild>
                <Link href="/create">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  创建新设计
                </Link>
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">全部</TabsTrigger>
                <TabsTrigger value="published">已发布</TabsTrigger>
                <TabsTrigger value="drafts">草稿</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                {designs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {designs.map((design) => (
                      <Card key={design.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={design.image || "/placeholder.svg"}
                            alt={design.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge variant={design.status === "published" ? "default" : "outline"}>
                              {design.status === "published" ? "已发布" : "草稿"}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold">{design.title}</h3>
                              <p className="text-sm text-muted-foreground">{design.category}</p>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Heart className="h-4 w-4 mr-1" />
                              <span>{design.likes}</span>
                            </div>
                          </div>

                          {design.status === "published" && (
                            <div className="mb-4">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-muted-foreground">众筹进度</span>
                                <span className="text-xs font-medium">{design.progress}%</span>
                              </div>
                              <Progress value={design.progress} className="h-1" />
                            </div>
                          )}

                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">创建于 {design.createdAt}</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">您还没有创建任何设计</p>
                    <Button asChild>
                      <Link href="/create">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        创建新设计
                      </Link>
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="published" className="mt-6">
                {designs.filter((d) => d.status === "published").length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {designs
                      .filter((d) => d.status === "published")
                      .map((design) => (
                        <Card key={design.id} className="overflow-hidden">
                          <div className="relative h-48">
                            <Image
                              src={design.image || "/placeholder.svg"}
                              alt={design.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">{design.title}</h3>
                                <p className="text-sm text-muted-foreground">{design.category}</p>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Heart className="h-4 w-4 mr-1" />
                                <span>{design.likes}</span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-muted-foreground">众筹进度</span>
                                <span className="text-xs font-medium">{design.progress}%</span>
                              </div>
                              <Progress value={design.progress} className="h-1" />
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">创建于 {design.createdAt}</span>
                              <div className="flex gap-2">
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">您还没有发布任何设计</p>
                    <Button asChild>
                      <Link href="/create">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        创建新设计
                      </Link>
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="drafts" className="mt-6">
                {designs.filter((d) => d.status === "draft").length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {designs
                      .filter((d) => d.status === "draft")
                      .map((design) => (
                        <Card key={design.id} className="overflow-hidden">
                          <div className="relative h-48">
                            <Image
                              src={design.image || "/placeholder.svg"}
                              alt={design.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">{design.title}</h3>
                                <p className="text-sm text-muted-foreground">{design.category}</p>
                              </div>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">创建于 {design.createdAt}</span>
                              <div className="flex gap-2">
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">您没有任何草稿</p>
                    <Button asChild>
                      <Link href="/create">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        创建新设计
                      </Link>
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
