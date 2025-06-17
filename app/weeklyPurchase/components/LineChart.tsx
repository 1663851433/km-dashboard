"use client";

import { Card } from "antd";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "一月", 产品一: 100000, 产品二: 80000, 产品三: 50000 },
  { name: "二月", 产品一: 200000, 产品二: 120000, 产品三: 90000 },
  { name: "三月", 产品一: 300000, 产品二: 180000, 产品三: 120000 },
  { name: "四月", 产品一: 400000, 产品二: 220000, 产品三: 150000 },
  { name: "五月", 产品一: 459000, 产品二: 290000, 产品三: 100000 },
];

export default function TrendLineChart() {
  return (
    <Card title="价格趋势" style={{ height: 355 }}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="产品一" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="产品二" stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="产品三" stroke="#ffc658" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
