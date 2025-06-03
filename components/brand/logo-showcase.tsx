"use client"

import { useState } from "react"
import { Logo, LogoWithText, LogoIcon } from "@/components/brand/logo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Copy, Check } from "lucide-react"

export default function LogoShowcase() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadSVG = (svgId: string, fileName: string) => {
    const svgElement = document.getElementById(svgId)
    if (!svgElement) return

    const svgData = new XMLSerializer().serializeToString(svgElement)
    const blob = new Blob([svgData], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">日曜乾元品牌标识</h1>
          <p className="text-lg text-muted-foreground">融合传统与现代的品牌视觉形象，展现东方美学与创新精神</p>
        </div>

        <Tabs defaultValue="logo" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="logo">标准标识</TabsTrigger>
            <TabsTrigger value="logo-with-text">带文字标识</TabsTrigger>
            <TabsTrigger value="icon">图标</TabsTrigger>
          </TabsList>

          <TabsContent value="logo" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>标准标识</CardTitle>
                <CardDescription>适用于各种场景的主要品牌标识</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-8 rounded-lg shadow-sm mb-6 flex justify-center">
                  <Logo id="standard-logo" width={240} height={240} />
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => downloadSVG("standard-logo", "riyao-logo.svg")}>
                    <Download className="mr-2 h-4 w-4" />
                    下载 SVG
                  </Button>
                  <Button variant="outline" onClick={() => copyToClipboard("<Logo width={240} height={240} />")}>
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        复制代码
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logo-with-text" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>带文字标识</CardTitle>
                <CardDescription>包含品牌名称和网址的完整标识</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-8 rounded-lg shadow-sm mb-6 flex justify-center">
                  <LogoWithText id="logo-with-text" width={480} height={240} />
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => downloadSVG("logo-with-text", "riyao-logo-with-text.svg")}>
                    <Download className="mr-2 h-4 w-4" />
                    下载 SVG
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard("<LogoWithText width={480} height={240} />")}
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        复制代码
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="icon" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>图标</CardTitle>
                <CardDescription>适用于小尺寸显示的简化图标</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-8 rounded-lg shadow-sm mb-6 flex justify-center">
                  <div className="grid grid-cols-3 gap-8 items-center">
                    <LogoIcon id="logo-icon-small" width={32} height={32} />
                    <LogoIcon id="logo-icon-medium" width={64} height={64} />
                    <LogoIcon id="logo-icon-large" width={96} height={96} />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => downloadSVG("logo-icon-large", "riyao-icon.svg")}>
                    <Download className="mr-2 h-4 w-4" />
                    下载 SVG
                  </Button>
                  <Button variant="outline" onClick={() => copyToClipboard("<LogoIcon width={32} height={32} />")}>
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        复制代码
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>品牌色彩</CardTitle>
            <CardDescription>日曜乾元的主要品牌色彩</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <div className="h-24 bg-[#E94E35] rounded-t-lg"></div>
                <div className="p-4 border border-t-0 rounded-b-lg">
                  <h3 className="font-medium">主要红色</h3>
                  <p className="text-sm text-muted-foreground">#E94E35</p>
                  <p className="text-sm text-muted-foreground">RGB: 233, 78, 53</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="h-24 bg-[#F7941D] rounded-t-lg"></div>
                <div className="p-4 border border-t-0 rounded-b-lg">
                  <h3 className="font-medium">辅助橙色</h3>
                  <p className="text-sm text-muted-foreground">#F7941D</p>
                  <p className="text-sm text-muted-foreground">RGB: 247, 148, 29</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="h-24 bg-[#F9F5F0] rounded-t-lg border"></div>
                <div className="p-4 border border-t-0 rounded-b-lg">
                  <h3 className="font-medium">背景米色</h3>
                  <p className="text-sm text-muted-foreground">#F9F5F0</p>
                  <p className="text-sm text-muted-foreground">RGB: 249, 245, 240</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
