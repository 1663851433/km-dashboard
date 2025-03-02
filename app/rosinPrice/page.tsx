"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

const dataLine = [
  { name: "2/28/24", price: 8800, region1: 8800, region2: 8850, region3: 8900 },
  { name: "4/18/24", price: 9200, region1: 9200, region2: 9250, region3: 9300 },
  { name: "6/7/24", price: 9400, region1: 9400, region2: 9450, region3: 9500 },
  { name: "7/27/24", price: 9800, region1: 9800, region2: 9850, region3: 9900 },
  { name: "9/15/24", price: 9600, region1: 9600, region2: 9650, region3: 9700 },
  { name: "11/4/24", price: 9400, region1: 9400, region2: 9450, region3: 9500 },
  { name: "12/24/24", price: 9000, region1: 9000, region2: 9050, region3: 9100 },
];

const dataBar = [
  { name: "1/20/25", price: 9800 },
  { name: "1/21/25", price: 9700 },
  { name: "1/22/25", price: 9600 },
  { name: "1/23/25", price: 9500 },
  { name: "1/24/25", price: 9400 },
];

const dataPie = [
  { name: "看平", value: 45 },
  { name: "上涨", value: 34 },
  { name: "下跌", value: 21 },
];

const marketData = [
  { name: "石油树脂", price: 5975, change: "+2.58%" },
  { name: "原油期货", price: 75.60, change: "+1.65%" },
  { name: "乙烯", price: 7000, change: "====" },
];

const COLORS = ["#FFBB28", "#FF8042", "#0088FE"];

const RosinPricePanel: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen">
      <div className="h-screen">
        <DashboardSidebar className="h-full"/>
      </div>
      <div className="flex-1 p-6 overflow-auto bg-white" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-800" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>松香价格面板</h1>
          </div>
          <span className="text-xl text-gray-600">2025-01-22</span>
        </div>

        {/* 价格指标卡片 */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 rounded-lg p-6 bg-white" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
            <h2 className="text-gray-500 mb-2 text-base">7天内高价</h2>
            <p className="text-4xl font-bold text-gray-800">9800</p>
          </div>
          <div className="flex-1 rounded-lg p-6 bg-white" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
            <h2 className="text-gray-500 mb-2 text-base">7天内低价</h2>
            <p className="text-4xl font-bold text-gray-800">10000</p>
          </div>
          <div className="flex-1 rounded-lg p-6 bg-white" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
            <h2 className="text-gray-500 mb-2 text-base">采购均价市场均价差</h2>
            <p className="text-4xl font-bold text-gray-800">150</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-lg p-6 bg-white" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1 bg-gray-50 rounded text-gray-600 font-medium">马尾松</span>
              <span className="text-gray-500">湿地松松香价格240325-250120</span>
            </div>
            <LineChart width={600} height={300} data={dataLine}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#FFB800" name="江西" dot={{ fill: '#FFB800' }} strokeWidth={2} />
              <Line type="monotone" dataKey="region1" stroke="#FF8042" name="福建" dot={{ fill: '#FF8042' }} strokeWidth={2} />
              <Line type="monotone" dataKey="region2" stroke="#0088FE" name="湖南" dot={{ fill: '#0088FE' }} strokeWidth={2} />
            </LineChart>
          </div>

          <div className="rounded-lg p-6 bg-white" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
            <div className="mb-4">
              <div className="p-4 bg-green-50 rounded-lg text-sm text-gray-600 mb-4">
                备货季，市场需求活跃初显，同比1月5日-1月30日区间
              </div>
              <table className="w-full mb-6">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600">年份</th>
                    <th className="py-3 text-left text-gray-600">期间高价</th>
                    <th className="py-3 text-left text-gray-600">波动率</th>
                    <th className="py-3 text-left text-gray-600">采购量</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 text-gray-800">2024</td>
                    <td className="py-3 text-gray-800">XXXX</td>
                    <td className="py-3 text-green-500">+3.7%</td>
                    <td className="py-3 text-gray-800">XXXX</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-lg font-medium text-gray-800 mb-4">未来14天价格走势</h3>
              <BarChart width={500} height={200} data={dataBar}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
                <Bar dataKey="price" fill="#FFB800" radius={[4, 4, 0, 0]} />
              </BarChart>
            </div>
          </div>

          <div className="rounded-lg p-6 bg-white" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
            <h3 className="text-lg font-medium text-gray-800 mb-4">湿地松市场价与KM松香会议价格</h3>
            <LineChart width={600} height={250} data={dataLine}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#1f77b4" name="广西" strokeWidth={2} />
              <Line type="monotone" dataKey="region1" stroke="#ff7f0e" name="广东" strokeWidth={2} />
              <Line type="monotone" dataKey="region2" stroke="#2ca02c" name="江西" strokeWidth={2} />
              <Line type="monotone" dataKey="region3" stroke="#d62728" name="福建" strokeWidth={2} />
            </LineChart>
          </div>

          <div className="grid grid-rows-2 gap-6">
            <div className="rounded-lg p-6 bg-white" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
              <h3 className="text-lg font-medium text-gray-800 mb-4">供给端</h3>
              <div className="flex items-center justify-center">
                <PieChart width={300} height={200}>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {dataPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
                  <Legend />
                </PieChart>
              </div>
            </div>

            <div className="rounded-lg p-6 bg-white" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
              <h3 className="text-lg font-medium text-gray-800 mb-4">市场数据</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-gray-600">品类名称</th>
                    <th className="py-3 text-right text-gray-600">周均价</th>
                    <th className="py-3 text-right text-gray-600">波动率</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 text-left text-gray-800">{item.name}</td>
                      <td className="py-3 text-right text-gray-800">{item.price}</td>
                      <td className="py-3 text-right text-blue-500">{item.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosinPricePanel;
