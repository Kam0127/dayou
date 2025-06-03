"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"
import { UserAvatar } from "@/components/auth/user-avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Loader2, Upload, PenTool, Heart, ShoppingBag, Settings } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  const router = useRouter()
  const { user, isLoading, updateProfile } = useAuth()
  const [name, setName] = useState(user?.name || "")
  const [bio, setBio] = useState(user?.bio || "")
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

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

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsUpdating(true)

    try {
      const success = await updateProfile({ name, bio })
      if (success) {
        setSuccess("个人资料更新成功")
      } else {
        setError("更新失败，请稍后再试")
      }
    } catch (error) {
      setError("发生错误，请稍后再试")
    } finally {
      setIsUpdating(false)
    }
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
                    <p className="font-semibold">{user?.designs || 0}</p>
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
                  <Button variant="ghost" className="justify-start" asChild>
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
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">个人资料</TabsTrigger>
                <TabsTrigger value="account">账户设置</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>个人资料</CardTitle>
                    <CardDescription>更新您的个人信息和公开资料</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      {error && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      {success && (
                        <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-50">
                          <AlertDescription>{success}</AlertDescription>
                        </Alert>
                      )}

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="avatar">头像</Label>
                          <div className="flex items-center gap-4">
                            <UserAvatar user={user} size="lg" />
                            <Button type="button" variant="outline" size="sm">
                              <Upload className="h-4 w-4 mr-2" />
                              更换头像
                            </Button>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <Label htmlFor="name">用户名</Label>
                          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">邮箱</Label>
                          <Input id="email" type="email" value={user?.email} disabled />
                          <p className="text-sm text-muted-foreground">邮箱地址不可更改</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bio">个人简介</Label>
                          <Textarea
                            id="bio"
                            placeholder="介绍一下自己..."
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>

                      <Button type="submit" disabled={isUpdating}>
                        {isUpdating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            保存中...
                          </>
                        ) : (
                          "保存更改"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="account" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>账户设置</CardTitle>
                    <CardDescription>管理您的账户设置和偏好</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">修改密码</h3>
                      <div className="space-y-2">
                        <Label htmlFor="current-password">当前密码</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">新密码</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">确认新密码</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button>更新密码</Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">通知设置</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="marketing">营销邮件</Label>
                          <input type="checkbox" id="marketing" className="toggle" />
                        </div>
                        <p className="text-sm text-muted-foreground">接收有关新功能、产品更新和促销活动的邮件</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="social">社交通知</Label>
                          <input type="checkbox" id="social" className="toggle" defaultChecked />
                        </div>
                        <p className="text-sm text-muted-foreground">当有人关注你、喜欢或评论你的设计时收到通知</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="security">安全通知</Label>
                          <input type="checkbox" id="security" className="toggle" defaultChecked />
                        </div>
                        <p className="text-sm text-muted-foreground">接收有关账户安全和隐私的重要通知</p>
                      </div>
                      <Button>保存通知设置</Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-destructive">危险区域</h3>
                      <p className="text-sm text-muted-foreground">一旦删除账户，所有数据将永久丢失，且无法恢复</p>
                      <Button variant="destructive">删除账户</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
