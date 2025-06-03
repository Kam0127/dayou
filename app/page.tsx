import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import FeaturedGallery from "@/components/featured-gallery"
import CategoryList from "@/components/category-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-white dark:from-pink-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    设计你的梦想，我们来实现
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    在日曜乾元，你可以设计任何产品，从家具到文具，从灯具到饰品。我们连接创意设计师与制造商，让你的创意变为现实。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/create">开始设计</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/gallery">浏览画廊</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-700 opacity-20 dark:opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform rotate-[-5deg]">
                        <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded mb-2" />
                        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
                        <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform rotate-[5deg]">
                        <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded mb-2" />
                        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
                        <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform rotate-[3deg]">
                        <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded mb-2" />
                        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
                        <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform rotate-[-3deg]">
                        <div className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded mb-2" />
                        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
                        <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-600 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative hidden md:flex items-center justify-center w-full max-w-md mx-auto mt-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="搜索创意..." className="pl-8 w-full bg-background" />
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">热门创意</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  浏览我们精选的高赞创意产品，找到你喜欢的设计，或者创建你自己的作品
                </p>
              </div>
            </div>
            <FeaturedGallery />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">浏览分类</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  探索不同品类的创意产品，从家具到文具，从灯具到饰品
                </p>
              </div>
            </div>
            <CategoryList />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                          <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                            <span className="text-4xl">🎨</span>
                          </div>
                          <div className="h-6 w-3/4 mx-auto bg-gray-200 dark:bg-gray-600 rounded mb-4" />
                          <div className="h-4 w-1/2 mx-auto bg-gray-200 dark:bg-gray-600 rounded" />
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="h-10 bg-gray-200 dark:bg-gray-600 rounded" />
                        <div className="h-10 bg-pink-200 dark:bg-pink-900 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">成为设计师，实现创收</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    在日曜乾元，你可以上传你的设计，当有人购买你的作品时，你将获得5%的销售分成。我们的AI辅助设计工具让设计变得简单，即使你是小白也能创作出精美的作品。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">开始创作</Button>
                  <Button size="lg" variant="outline">
                    了解更多
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">如何运作</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我们的平台连接消费者、设计师和商家，创造一个充满创意的生态系统
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                    <span className="text-2xl">👀</span>
                  </div>
                  <h3 className="text-xl font-bold">浏览与发现</h3>
                  <p className="text-muted-foreground text-center">
                    浏览高赞创意产品，找到你喜欢的设计，或者提出你的需求让设计师为你创作
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold">表达兴趣</h3>
                  <p className="text-muted-foreground text-center">
                    点击"我想要"表达你对产品的兴趣，当达到100人时，产品将开始生产
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold">生产与配送</h3>
                  <p className="text-muted-foreground text-center">
                    商家提供最优价格和样品，开始生产并配送产品，设计师获得5%分成
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
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
  )
}
