"use client"

import { useState } from "react"

export default function TestImagesPage() {
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebugInfo = (info: string) => {
    setDebugInfo((prev) => [...prev, info])
  }

  // 测试1: 使用内联SVG - 这应该总是能显示
  const inlineSvg = (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="blue" />
      <circle cx="50" cy="50" r="40" fill="red" />
    </svg>
  )

  // 测试2: 使用data URL - 这也应该能显示
  const dataUrl =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9ImdyZWVuIiAvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBmaWxsPSJ5ZWxsb3ciIC8+PC9zdmc+"

  // 测试3: 创建一个新的图片文件
  const createImageFile = async () => {
    try {
      addDebugInfo("尝试创建图片文件...")

      // 创建一个简单的canvas
      const canvas = document.createElement("canvas")
      canvas.width = 200
      canvas.height = 200
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.fillStyle = "purple"
        ctx.fillRect(0, 0, 200, 200)
        ctx.fillStyle = "white"
        ctx.font = "20px Arial"
        ctx.fillText("测试图片", 50, 100)

        // 转换为blob URL
        canvas.toBlob((blob) => {
          if (blob) {
            const blobUrl = URL.createObjectURL(blob)
            addDebugInfo(`创建了Blob URL: ${blobUrl}`)

            // 显示这个图片
            const img = document.createElement("img")
            img.src = blobUrl
            img.width = 200
            img.height = 200
            const container = document.getElementById("dynamic-image-container")
            if (container) {
              container.appendChild(img)
              addDebugInfo("图片已添加到容器中")
            }
          }
        })
      }
    } catch (error) {
      addDebugInfo(`错误: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  const handleImageError = () => {
    addDebugInfo("图片加载失败")
  }

  const handleImageLoad = () => {
    addDebugInfo("图片加载成功")
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">图片测试页面</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="border p-4">
          <h2 className="text-lg font-bold mb-4">测试1: 内联SVG</h2>
          <div className="bg-gray-100 p-4">{inlineSvg}</div>
          <p className="text-sm text-green-600 mt-2">如果你看到蓝色方块和红色圆圈，说明SVG正常工作</p>
        </div>

        <div className="border p-4">
          <h2 className="text-lg font-bold mb-4">测试2: Data URL</h2>
          <div className="bg-gray-100 p-4">
            <img
              src={dataUrl || "/placeholder.svg"}
              alt="Data URL Test"
              width="100"
              height="100"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </div>
          <p className="text-sm text-green-600 mt-2">如果你看到绿色方块和黄色圆圈，说明Data URL正常工作</p>
        </div>
      </div>

      <div className="border p-4 mb-8">
        <h2 className="text-lg font-bold mb-4">测试3: 文件路径测试</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {["/1.jpeg", "/bowl1.png", "/Gold1.jpg", "/Red1.jpg"].map((path, index) => (
            <div key={index} className="border p-2">
              <p className="text-xs mb-2">{path}</p>
              <img
                src={path || "/placeholder.svg"}
                alt={`Test ${index}`}
                width="100"
                height="100"
                className="bg-gray-200"
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border p-4 mb-8">
        <h2 className="text-lg font-bold mb-4">测试4: 动态创建图片</h2>
        <button
          onClick={createImageFile}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          创建测试图片
        </button>
        <div id="dynamic-image-container" className="bg-gray-100 p-4 min-h-[200px]"></div>
      </div>

      <div className="border p-4">
        <h2 className="text-lg font-bold mb-4">调试信息</h2>
        <div className="bg-black text-green-400 p-4 font-mono text-sm max-h-60 overflow-y-auto">
          {debugInfo.length > 0 ? debugInfo.map((info, i) => <div key={i}>{info}</div>) : <div>暂无调试信息</div>}
        </div>
      </div>
    </div>
  )
}
