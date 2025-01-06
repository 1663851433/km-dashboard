import { DashboardSidebar } from '@/components/dashboard-sidebar'
import { PurchaseHeader } from '@/components/purchase-header'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PurchasePage() {
  return (
    <div className="min-h-screen flex dark bg-[#1a1f37]">
      <DashboardSidebar />
      <main className="flex-1 p-8 space-y-8">
        <PurchaseHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#252b48] border-0">
            <CardHeader>
              <CardTitle className="text-white">待处理采购订单</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-4 bg-[#1a1f37] rounded-lg">
                    <div className="flex justify-between items-center text-white">
                      <span>订单 #{item}</span>
                      <span>¥{item * 1000}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#252b48] border-0">
            <CardHeader>
              <CardTitle className="text-white">供应商统计</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['松脂供应商', '松香供应商', '松节油供应商'].map((supplier) => (
                  <div key={supplier} className="p-4 bg-[#1a1f37] rounded-lg">
                    <div className="flex justify-between items-center text-white">
                      <span>{supplier}</span>
                      <span>活跃</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 