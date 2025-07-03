import { Clock, Droplets, Package } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

import { Card, Typography } from "antd";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

const { Title, Text } = Typography;

const songyouData = [
  { name: "上周", 数量: 192 },
  { name: "本周", 数量: 150 },
];

const songxiangData = [
  { name: "上周", 数量: 160 },
  { name: "本周", 数量: 200 },
];

const songyouRealtimeData = [
  { name: "上周", 数量: 10 },
  { name: "本周", 数量: 150 },
];

interface InventoryCardProps {
  title: string;
  value: string | number;
  chartData: any[];
  icon: React.ReactNode;
  color: string;
}

const InventoryCard: React.FC<InventoryCardProps> = ({ title, value, chartData, icon, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`shadow-md hover:shadow-lg transition-all duration-300 border-2 ${color} overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 relative">
        <Card className="bg-gradient-to-r from-[var(--green)] to-[var(--sand)] border-0">
          <div className="flex items-center justify-between">
            <Title level={5} className="m-0 text-white">
              {title}
            </Title>
            <div
              className={`text-white transition-transform duration-300 ${
                isHovered ? "rotate-12" : ""
              }`}
            >
              {icon}
            </div>
          </div>
        </Card>
      </div>

      <div
        className={`h-[150px] mb-4 transition-transform duration-500 ${
          isHovered ? "scale-105" : ""
        }`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            />
            <Bar
              dataKey="inventory"
              fill={
                color.includes("green")
                  ? "var(--green)"
                  : color.includes("blue")
                    ? "var(--peach)"
                    : "var(--sand)"
              }
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
              name="库存"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center bg-gray-50 py-2 rounded-lg">
        <Title level={3} className="m-0 flex items-center justify-center gap-2">
          <span>{value}</span>
          <Text className="text-xs text-gray-500">单位: 吨</Text>
        </Title>
      </div>
    </Card>
  );
};

const InventoryCards: React.FC = () => {
  const inventory = useWeeklyDashboardStores((state) => state.inventory);

  const parseInventoryStore = useMemo(() => {
    const { curWeek = [], lastWeek = [] } = inventory || {};

    // 计算每种类型的合计，保留两位小数
    const sum = (arr: any[], key: string) =>
      parseFloat(arr.reduce((sum, cur) => sum + parseFloat(cur?.[key] ?? 0), 0).toFixed(2));

    return {
      rosin: {
        curWeek: sum(curWeek, "rosin"),
        lastWeek: sum(lastWeek, "rosin"),
      },
      colophony: {
        curWeek: sum(curWeek, "colophony"),
        lastWeek: sum(lastWeek, "colophony"),
      },
      pineTar: {
        curWeek: sum(curWeek, "pineTar"),
        lastWeek: sum(lastWeek, "pineTar"),
      },
    };
  }, [inventory]);

  return (
    <>
      <InventoryCard
        title="松脂库存"
        value={parseInventoryStore.rosin.curWeek}
        chartData={[
          {
            name: "本周",
            inventory: parseInventoryStore.rosin.curWeek,
          },
          {
            name: "上周",
            inventory: parseInventoryStore.rosin.lastWeek,
          },
        ]}
        icon={<Droplets size={20} />}
        color="border-green-500"
      />
      <InventoryCard
        title="松香库存"
        value={parseInventoryStore.colophony.curWeek}
        chartData={[
          {
            name: "本周",
            inventory: parseInventoryStore.colophony.curWeek,
          },
          {
            name: "上周",
            inventory: parseInventoryStore.colophony.lastWeek,
          },
        ]}
        icon={<Package size={20} />}
        color="border-green-500"
      />
      <InventoryCard
        title="松节油库存"
        value={parseInventoryStore.pineTar.curWeek}
        chartData={[
          {
            name: "本周",
            inventory: parseInventoryStore.pineTar.curWeek,
          },
          {
            name: "上周",
            inventory: parseInventoryStore.pineTar.lastWeek,
          },
        ]}
        icon={<Clock size={20} />}
        color="border-green-500"
      />
    </>
  );
};

export default InventoryCards;
