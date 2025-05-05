"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import MainPage from "@/components/mainPage";

// Dummy data for demonstration
const purchaseData = [
  { name: "Week 1", amount: 400, price: 2000 },
  { name: "Week 2", amount: 300, price: 2200 },
  { name: "Week 3", amount: 500, price: 1900 },
  { name: "Week 4", amount: 450, price: 2100 },
];

const monthlyData = [
  { name: "Jan", value: 1200 },
  { name: "Feb", value: 1400 },
  { name: "Mar", value: 1600 },
  { name: "Apr", value: 1300 },
];

const operationData = [
  { day: "周一", amount: 120, price: 2050 },
  { day: "周二", amount: 150, price: 2100 },
  { day: "周三", amount: 90, price: 1950 },
  { day: "周四", amount: 130, price: 2000 },
  { day: "周五", amount: 110, price: 2150 },
];

export default function PurchasePage() {
  return (
    <MainPage>
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">周采购面板</h1>

        <div className="grid grid-cols-12 gap-6">
          {/* 左侧主要内容区域 */}
          <div className="col-span-9 grid grid-cols-12 gap-6">
            {/* 周松脂采购 */}
            <Card className="col-span-8 bg-[#f1f0ec] border-none rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b border-gray-100/20">
                <CardTitle className="text-gray-700 text-lg">周松脂采购</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: "第一周", amount: 450, price: 2000 },
                        { name: "第二周", amount: 380, price: 2200 },
                        { name: "第三周", amount: 520, price: 1900 },
                        { name: "第四周", amount: 490, price: 2100 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="name" stroke="#6b7280" />
                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Legend />
                      <Bar
                        yAxisId="left"
                        dataKey="amount"
                        name="采购量"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="price"
                        name="单价"
                        fill="#82ca9d"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* 周库存 */}
            <Card className="col-span-4 bg-[#f1f0ec] border-none rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b border-gray-100/20">
                <CardTitle className="text-gray-700 text-lg">周库存</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 pl-0 pb-0">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis
                        dataKey="name"
                        stroke="#6b7280"
                        axisLine={false}
                        tickLine={false}
                        fontSize={12}
                      />
                      <YAxis stroke="#6b7280" axisLine={false} tickLine={false} fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ fill: "#8884d8", strokeWidth: 2 }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* 月均线 */}
            <Card className="col-span-6 bg-[#f1f0ec] border-none rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b border-gray-100/20">
                <CardTitle className="text-gray-700 text-lg">月均线</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={purchaseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="amount" name="采购量" stroke="#8884d8" />
                      <Line type="monotone" dataKey="price" name="单价" stroke="#82ca9d" />
                      <Legend />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* 周采购分析 */}
            <Card className="col-span-6 bg-[#f1f0ec] border-none rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b border-gray-100/20">
                <CardTitle className="text-gray-700 text-lg">周采购分析</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "供应商A", value: 400 },
                    { name: "供应商B", value: 300 },
                    { name: "供应商C", value: 200 },
                    { name: "供应商D", value: 100 },
                  ].map((data, index) => (
                    <div key={index} className="h-[120px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[data, { name: "Other", value: 1000 - data.value }]}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={50}
                            fill="#8884d8"
                            label
                          >
                            {[{ fill: "#0088FE" }, { fill: "#00C49F" }].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧信息栏 */}
          <div className="col-span-3 space-y-6">
            {/* 运营信息 - 更紧凑的版本 */}
            <Card className="bg-[#f1f0ec] border-none rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b border-gray-100/20 py-3">
                <CardTitle className="text-gray-700 text-base">运营信息</CardTitle>
              </CardHeader>
              <CardContent className="py-3 px-4">
                <div className="flex flex-col gap-2">
                  {operationData.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between p-2 rounded-lg bg-white/80 border border-gray-100 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-500">{item.day}</span>
                        <div className="flex items-center gap-1">
                          <span className="px-2 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700 rounded">
                            {item.amount}单位
                          </span>
                          <span className="px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded">
                            ¥{item.price}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.amount > 100 ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      />
                    </div>
                  ))}
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <div className="flex justify-between items-center text-xs text-gray-600">
                      <span>
                        周采购总量: {operationData.reduce((sum, item) => sum + item.amount, 0)}
                        单位
                      </span>
                      <span>
                        周平均单价: ¥
                        {(
                          operationData.reduce((sum, item) => sum + item.price, 0) /
                          operationData.length
                        ).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 对比与环境 - 更紧凑的版本 */}
            <Card className="bg-[#f1f0ec] border-none rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b border-gray-100/20 py-3">
                <CardTitle className="text-gray-700 text-base">对比与环境</CardTitle>
              </CardHeader>
              <CardContent className="py-3 px-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-medium text-gray-600">期间同比偏差</h3>
                    <p className="text-base font-semibold text-green-600">+5.2%</p>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xs font-medium text-gray-600">平均气温</h3>
                    <p className="text-base font-semibold text-gray-700">23°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 供应商信息 - 更紧凑的版本 */}
            <Card className="bg-[#f1f0ec] border-none rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="border-b border-gray-100/20 py-3">
                <CardTitle className="text-gray-700 text-base">供应商信息</CardTitle>
              </CardHeader>
              <CardContent className="py-3 px-4">
                <div className="space-y-3">
                  <div className="p-2 bg-white/50 rounded-md">
                    <h3 className="text-xs font-medium text-gray-600">供应商剩余库存</h3>
                    <p className="text-sm font-semibold text-gray-800">1,200 单位</p>
                  </div>
                  <div className="p-2 bg-white/50 rounded-md">
                    <h3 className="text-xs font-medium text-gray-600">供应商出货意愿</h3>
                    <p className="text-sm font-semibold text-green-600">积极</p>
                  </div>
                  <div className="p-2 bg-white/50 rounded-md">
                    <h3 className="text-xs font-medium text-gray-600">周边市场价格</h3>
                    <p className="text-sm font-semibold text-gray-800">¥2,050 - ¥2,150</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainPage>
  );
}
