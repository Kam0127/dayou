"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { ImageIcon, Wand2, Upload, Sparkles } from "lucide-react"

export default function CreatePage() {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // 模拟AI生成图片的过程
    setTimeout(() => {
      setGeneratedImage("/placeholder.svg?height=512&width=512")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">创建你的设计</h1>
          <p className="text-muted-foreground">使用AI辅助设计工具，轻松创建你的产品设计</p>
        </div>

        <Tabs defaultValue="ai" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ai" className="flex items-center">
              <Wand2 className="h-4 w-4 mr-2" />
              AI辅助设计
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              上传设计
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ai" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">产品类别</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="选择产品类别" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="furniture">家具</SelectItem>
                        <SelectItem value="lighting">灯具</SelectItem>
                        <SelectItem value="stationery">文具</SelectItem>
                        <SelectItem value="bags">包袋</SelectItem>
                        <SelectItem value="tableware">餐具</SelectItem>
                        <SelectItem value="accessories">饰品</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">产品名称</Label>
                    <Input id="title" placeholder="输入产品名称" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">产品描述</Label>
                    <Textarea
                      id="description"
                      placeholder="描述你的产品，包括功能、特点、材质等"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prompt">AI提示词</Label>
                    <Textarea
                      id="prompt"
                      placeholder="详细描述你想要的设计风格、颜色、形状等，越详细越好"
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>创意程度</Label>
                      <span className="text-sm text-muted-foreground">平衡</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>写实</span>
                      <span>创意</span>
                    </div>
                  </div>

                  <Button onClick={handleGenerate} disabled={isGenerating} className="w-full">
                    {isGenerating ? (
                      <>
                        <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                        生成中...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        生成设计
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-muted rounded-lg flex-1 flex items-center justify-center overflow-hidden">
                  {generatedImage ? (
                    <div className="relative w-full h-full min-h-[300px]">
                      <Image
                        src={generatedImage || "/placeholder.svg"}
                        alt="生成的设计"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">填写左侧表单并点击"生成设计"按钮</p>
                    </div>
                  )}
                </div>

                {generatedImage && (
                  <div className="mt-4 space-y-4">
                    <Button variant="outline" className="w-full">
                      重新生成
                    </Button>
                    <Button className="w-full">使用此设计</Button>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="upload" className="mt-6">
            <div className="border-2 border-dashed rounded-lg p-12 text-center">
              <div className="mx-auto w-full max-w-sm">
                <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">上传你的设计</h3>
                <p className="text-sm text-muted-foreground mb-4">支持JPG、PNG、SVG格式，最大文件大小10MB</p>
                <Input id="file" type="file" className="hidden" />
                <Button asChild>
                  <Label htmlFor="file">选择文件</Label>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">产品详情</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="materials">材料</Label>
                <Input id="materials" placeholder="例如：木材、金属、塑料等" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dimensions">尺寸</Label>
                <Input id="dimensions" placeholder="例如：长x宽x高" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">重量</Label>
                <Input id="weight" placeholder="例如：0.5kg" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price">建议零售价</Label>
                <Input id="price" placeholder="例如：¥299" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">标签</Label>
                <Input id="tags" placeholder="用逗号分隔，例如：现代,简约,创意" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="royalty">设计师分成</Label>
                <div className="flex items-center">
                  <Input id="royalty" value="5" disabled className="w-16 mr-2" />
                  <span className="text-muted-foreground">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button variant="outline" className="mr-2">
            保存草稿
          </Button>
          <Button>提交设计</Button>
        </div>
      </div>
    </div>
  )
}
