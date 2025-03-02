/**
 * 主页
 */

import { DashboardHeader } from '@/components/dashboard-header'
import { DashboardCharts } from '@/components/dashboard-charts'
import { DashboardMetrics } from '@/components/dashboard-metrics'
import { DashboardSidebar } from '@/components/dashboard-sidebar'

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex dark bg-[#1a1f37]">
      <DashboardSidebar />
      <main className="flex-1 p-8 space-y-8">
        <DashboardHeader />
        <div className="space-y-4">
          <DashboardCharts />
        </div>
      </main>
    </div>
  )
}
