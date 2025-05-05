/**
 * 主页
 */

import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardCharts } from "@/components/dashboard-charts";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import MainPage from "@/components/mainPage";

export default function DashboardPage() {
  return (
    <MainPage>
      <div className="min-h-screen flex dark bg-[#1a1f37]">
        <main className="flex-1 p-8 space-y-8">
          <DashboardHeader />
          <div className="space-y-4">
            <DashboardCharts />
          </div>
        </main>
      </div>
    </MainPage>
  );
}
