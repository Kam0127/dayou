import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Serif_SC, Cinzel } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth/auth-provider"
import { UserAccountNav } from "@/components/auth/user-account-nav"
import { LogoIcon } from "@/components/brand/logo-icon"
import Link from "next/link"

// 加载字体
const inter = Inter({ subsets: ["latin"] })
const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
})
const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
})

export const metadata: Metadata = {
  title: "日曜乾元 - 设计你的梦想，我们来实现",
  description: "日曜乾元是一个创意文化定制平台，连接创意设计师与制造商，让你的创意变为现实。",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} ${notoSerifSC.variable} ${cinzel.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <header className="border-b">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                  <Link href="/" className="flex items-center gap-2">
                    <LogoIcon width={40} height={40} />
                    <span className="text-xl font-bold">日曜乾元</span>
                  </Link>
                  <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    <Link href="/gallery" className="text-sm font-medium hover:underline underline-offset-4">
                      画廊
                    </Link>
                    <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4">
                      分类
                    </Link>
                    <Link href="/create" className="text-sm font-medium hover:underline underline-offset-4">
                      创作
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                      关于我们
                    </Link>
                    <Link href="/merchant" className="text-sm font-medium hover:underline underline-offset-4">
                      商家中心
                    </Link>
                  </div>
                  <UserAccountNav />
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t">
                <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                      <LogoIcon width={32} height={32} />
                      <span className="text-xl font-bold">日曜乾元</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      设计你的梦想，我们来实现。日曜乾元连接创意设计师与制造商，让你的创意变为现实。
                    </p>
                  </div>
                  <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">平台</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/gallery" className="text-muted-foreground hover:underline">
                            画廊
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories" className="text-muted-foreground hover:underline">
                            分类
                          </Link>
                        </li>
                        <li>
                          <Link href="/create" className="text-muted-foreground hover:underline">
                            创作
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">关于</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/about" className="text-muted-foreground hover:underline">
                            关于我们
                          </Link>
                        </li>
                        <li>
                          <Link href="/how-it-works" className="text-muted-foreground hover:underline">
                            如何运作
                          </Link>
                        </li>
                        <li>
                          <Link href="/faq" className="text-muted-foreground hover:underline">
                            常见问题
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">联系</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/contact" className="text-muted-foreground hover:underline">
                            联系我们
                          </Link>
                        </li>
                        <li>
                          <Link href="/support" className="text-muted-foreground hover:underline">
                            客户支持
                          </Link>
                        </li>
                        <li>
                          <Link href="/feedback" className="text-muted-foreground hover:underline">
                            反馈建议
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t">
                  <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
                    <p className="text-xs text-muted-foreground">© 2025 日曜乾元. 保留所有权利.</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <Link href="/terms" className="hover:underline">
                        服务条款
                      </Link>
                      <Link href="/privacy" className="hover:underline">
                        隐私政策
                      </Link>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
