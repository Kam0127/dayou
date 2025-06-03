import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">关于日曜乾元</h1>
          <p className="text-xl text-muted-foreground">设计你的梦想，我们来实现</p>
        </div>

        {/* 公司介绍 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              我们的使命
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              日曜乾元是一个创新的创意文化定制平台，致力于连接富有创意的设计师与专业的制造商。
              我们相信每个人都有独特的创意想法，而我们的使命就是让这些创意变为现实。
              无论是家具、文具、灯具还是饰品，我们都能帮助您实现个性化定制。
            </p>
          </CardContent>
        </Card>

        {/* 核心价值 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
                创新设计
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>我们鼓励原创设计，支持设计师的创意表达， 通过先进的技术平台让设计变得更加便捷和高效。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-500" />
                品质保证
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>我们与优质制造商合作，确保每一件产品都符合高标准的质量要求， 让客户获得满意的定制体验。</p>
            </CardContent>
          </Card>
        </div>

        {/* 团队介绍 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-green-500" />
              我们的团队
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              日曜乾元由一群热爱设计和技术的专业人士组成，我们来自不同的背景，
              但都有着共同的目标：让创意设计更加普及和便捷。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">产品设计</Badge>
              <Badge variant="secondary">技术开发</Badge>
              <Badge variant="secondary">供应链管理</Badge>
              <Badge variant="secondary">客户服务</Badge>
              <Badge variant="secondary">市场营销</Badge>
            </div>
          </CardContent>
        </Card>

        {/* 联系信息 */}
        <Card>
          <CardHeader>
            <CardTitle>联系我们</CardTitle>
            <CardDescription>如果您有任何问题或建议，欢迎随时与我们联系</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>邮箱：</strong> contact@riyaoqianyuan.com
              </p>
              <p>
                <strong>电话：</strong> +86 400-123-4567
              </p>
              <p>
                <strong>地址：</strong> 中国上海市浦东新区创意园区
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
