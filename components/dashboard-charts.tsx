"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardMetrics } from "@/components/dashboard-metrics";

// 动态导入各个图表组件
const LineChartComponent = dynamic(
  () => import("./charts").then((mod) => mod.LineChartComponent),
  {
    ssr: false,
    loading: () => <div className="text-white">Loading chart...</div>,
  }
);

const PieChartComponent = dynamic(
  () => import("./charts").then((mod) => mod.PieChartComponent),
  {
    ssr: false,
    loading: () => <div className="text-white">Loading chart...</div>,
  }
);

const ScatterChartComponent = dynamic(
  () => import("./charts").then((mod) => mod.ScatterChartComponent),
  {
    ssr: false,
    loading: () => <div className="text-white">Loading chart...</div>,
  }
);

const BarChartComponent = dynamic(
  () => import("./charts").then((mod) => mod.BarChartComponent),
  {
    ssr: false,
    loading: () => <div className="text-white">Loading chart...</div>,
  }
);

export function DashboardCharts() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 space-y-4">
          <DashboardMetrics />
          <Card className="bg-[#252b48] border-0">
            <CardHeader>
              <CardTitle className="text-white">采购曲线</CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading...</div>}>
                <LineChartComponent />
              </Suspense>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#252b48] border-0 flex-shrink-0 w-[500px]">
          <CardHeader>
            <CardTitle className="text-white">总采购额</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-white">$500,000</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Card className="bg-[#252b48] border-0 flex-1">
          <CardHeader>
            <CardTitle className="text-white">供应商板块</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <Suspense fallback={<div>Loading...</div>}>
              <PieChartComponent />
            </Suspense>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="text-white">总体潜在出货量: 1000</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-white">看涨: 60%</div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-[#e879f9]" />
                  <span className="text-sm text-muted-foreground">看涨</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-white">看跌: 40%</div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-[#60a5fa]" />
                  <span className="text-sm text-muted-foreground">看跌</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#252b48] border-0 flex-1">
          <CardHeader>
            <CardTitle className="text-white">年度作业周期</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <ScatterChartComponent />
            </Suspense>
          </CardContent>
        </Card>

        <Card className="bg-[#252b48] border-0 flex-1">
          <CardHeader>
            <CardTitle className="text-white">生产需求</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <BarChartComponent />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
