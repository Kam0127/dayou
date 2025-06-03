import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, TrendingUp, Package, DollarSign, ShieldCheck, Clock } from "lucide-react"

export default function MerchantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  成为日曜乾元合作商家
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  加入我们的平台，接触创新设计，拓展您的业务，与创意设计师合作，为用户提供高品质的定制产品。
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">立即申请</Button>
                <Button size="lg" variant="outline">
                  了解更多
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="商家合作" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-700 opacity-20 dark:opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">为什么选择日曜乾元</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                我们为商家提供独特的机会，连接创意设计师和消费者，创造共赢的商业模式
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <TrendingUp className="h-8 w-8 text-blue-500" />
                <div>
                  <CardTitle>业务增长</CardTitle>
                  <CardDescription>接触新客户群体，拓展您的业务范围</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  通过我们的平台，您可以接触到对创新设计和定制产品感兴趣的消费者，为您的业务带来新的增长点。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Package className="h-8 w-8 text-blue-500" />
                <div>
                  <CardTitle>多样化产品</CardTitle>
                  <CardDescription>生产创新设计，丰富您的产品线</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  与创意设计师合作，生产独特的设计产品，丰富您的产品线，满足不同消费者的需求。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <DollarSign className="h-8 w-8 text-blue-500" />
                <div>
                  <CardTitle>灵活定价</CardTitle>
                  <CardDescription>根据材料和工艺自由定价</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  您可以根据材料成本、工艺复杂度和市场需求自由定价，确保合理的利润空间。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">如何合作</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                简单几步，开始您与日曜乾元的合作之旅
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">申请入驻</h3>
              <p className="text-muted-foreground">填写商家入驻申请表，提供您的企业信息和生产能力</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">资质审核</h3>
              <p className="text-muted-foreground">我们会审核您的企业资质和生产能力，确保符合平台标准</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">报价投标</h3>
              <p className="text-muted-foreground">浏览平台上的设计作品，为您感兴趣的产品提供报价和样品</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold">生产配送</h3>
              <p className="text-muted-foreground">获得订单后，按照设计要求生产产品并配送给消费者</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">热门设计品类</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  浏览平台上热门的设计品类，寻找适合您生产能力的产品
                </p>
              </div>
            </div>

            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="all">全部品类</TabsTrigger>
              <TabsTrigger value="furniture">家具</TabsTrigger>
              <TabsTrigger value="lighting">灯具</TabsTrigger>
              <TabsTrigger value="stationery">文具</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "极简风格台灯",
                    category: "灯具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 75,
                    interested: 75,
                  },
                  {
                    title: "多功能书包",
                    category: "包袋",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 45,
                    interested: 45,
                  },
                  {
                    title: "创意铅笔盒",
                    category: "文具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 90,
                    interested: 90,
                  },
                  {
                    title: "北欧风格椅子",
                    category: "家具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 60,
                    interested: 60,
                  },
                  {
                    title: "创意杯子",
                    category: "餐具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 30,
                    interested: 30,
                  },
                  {
                    title: "智能台灯",
                    category: "灯具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 85,
                    interested: 85,
                  },
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2">{item.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <span>感兴趣人数: {item.interested}</span>
                        <span>进度: {item.progress}%</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        查看详情
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="furniture" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "北欧风格椅子",
                    category: "家具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 60,
                    interested: 60,
                  },
                  {
                    title: "现代简约书架",
                    category: "家具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 40,
                    interested: 40,
                  },
                  {
                    title: "多功能茶几",
                    category: "家具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 55,
                    interested: 55,
                  },
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2">{item.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <span>感兴趣人数: {item.interested}</span>
                        <span>进度: {item.progress}%</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        查看详情
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lighting" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "极简风格台灯",
                    category: "灯具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 75,
                    interested: 75,
                  },
                  {
                    title: "智能台灯",
                    category: "灯具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 85,
                    interested: 85,
                  },
                  {
                    title: "北欧吊灯",
                    category: "灯具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 65,
                    interested: 65,
                  },
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2">{item.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <span>感兴趣人数: {item.interested}</span>
                        <span>进度: {item.progress}%</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        查看详情
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stationery" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "创意铅笔盒",
                    category: "文具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 90,
                    interested: 90,
                  },
                  {
                    title: "多功能笔筒",
                    category: "文具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 50,
                    interested: 50,
                  },
                  {
                    title: "便携式笔记本",
                    category: "文具",
                    image: "/placeholder.svg?height=300&width=300",
                    progress: 70,
                    interested: 70,
                  },
                ].map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2">{item.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                        <span>感兴趣人数: {item.interested}</span>
                        <span>进度: {item.progress}%</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        查看详情
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">商家保障计划</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  我们为合作商家提供全方位的保障，确保您的权益和利益得到保护
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">订单保障</h3>
                    <p className="text-muted-foreground">只有达到众筹目标的产品才会进入生产阶段，确保订单量</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">按时付款</h3>
                    <p className="text-muted-foreground">产品交付后，我们会按时向您支付货款，确保资金流动</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">品质认证</h3>
                    <p className="text-muted-foreground">获得平台品质认证，提升您的品牌形象和消费者信任</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-fit">
                申请入驻
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="商家保障" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">常见问题</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                了解更多关于商家合作的常见问题
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-12 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>如何成为创梦工坊的合作商家？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  您需要填写商家入驻申请表，提供企业资质和生产能力证明。我们会在3-5个工作日内完成审核，并通知您审核结果。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>平台收取什么费用？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  平台收取5%的服务费，设计师获得5%的设计费，剩余90%为商家收入。我们不收取入驻费和年费。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>如何获得订单？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  您可以浏览平台上的设计作品，为您感兴趣且有能力生产的产品提供报价和样品。当您的报价被选中且产品达到众筹目标时，您将获得订单。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>如何保证产品质量？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  我们要求商家严格按照设计要求生产产品，并提供样品供平台和设计师确认。产品交付前会进行质量检查，确保符合标准。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>如何处理退换货？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  如果因产品质量问题导致退换货，商家需承担相关费用。如果是消费者个人原因，平台会协调处理，尽量减少商家损失。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              查看更多问题
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">立即加入日曜乾元</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                成为我们的合作商家，一起创造更多可能
              </p>
            </div>
            <Button size="lg" className="mt-6">
              申请入驻
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
