"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  BarChart,
  Bar,
} from "recharts";

const lineData = [
  { quarter: "Quarter 1", value1: 15, value2: 12, value3: 20 },
  { quarter: "Quarter 2", value1: 25, value2: 25, value3: 15 },
  { quarter: "Quarter 3", value1: 18, value2: 20, value3: 28 },
  { quarter: "Quarter 4", value1: 25, value2: 25, value3: 22 },
];

const pieData = [
  { name: "Bullish", value: 60, color: "#e879f9" },
  { name: "Bearish", value: 40, color: "#60a5fa" },
];

const scatterData = [
  { x: 5, y: 50 },
  { x: 10, y: 100 },
  { x: 15, y: 150 },
  { x: 20, y: 200 },
  { x: 25, y: 150 },
];

const barData = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 20 },
  { name: "Apr", value: 25 },
  { name: "May", value: 22 },
  { name: "Jun", value: 18 },
];

export function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis
          dataKey="quarter"
          stroke="#9ca3af"
          tick={{ fill: "#9ca3af" }}
          label={{ value: "时间", position: "insideBottom", fill: "#9ca3af" }}
        />
        <YAxis
          stroke="#9ca3af"
          tick={{ fill: "#9ca3af" }}
          label={{
            value: "价格",
            angle: -90,
            position: "insideLeft",
            fill: "#9ca3af",
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#374151",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Line
          type="monotone"
          dataKey="value1"
          stroke="#60a5fa"
          strokeWidth={2}
          dot={{ fill: "#60a5fa" }}
        />
        <Line
          type="monotone"
          dataKey="value2"
          stroke="#e879f9"
          strokeWidth={2}
          dot={{ fill: "#e879f9" }}
        />
        <Line
          type="monotone"
          dataKey="value3"
          stroke="#ffffff"
          strokeWidth={2}
          dot={{ fill: "#ffffff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function PieChartComponent() {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: "#374151",
          border: "none",
          borderRadius: "8px",
          color: "#fff",
        }}
      />
    </PieChart>
  );
}

export function ScatterChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis
          type="number"
          dataKey="x"
          stroke="#9ca3af"
          tick={{ fill: "#9ca3af" }}
          label={{
            value: "月份",
            position: "insideBottom",
            fill: "#9ca3af",
          }}
        />
        <YAxis
          type="number"
          dataKey="y"
          stroke="#9ca3af"
          tick={{ fill: "#9ca3af" }}
          label={{
            value: "作业量",
            angle: -90,
            position: "insideLeft",
            fill: "#9ca3af",
          }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#374151",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Scatter data={scatterData} fill="#e879f9" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={barData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: "#9ca3af" }} />
        <YAxis stroke="#9ca3af" tick={{ fill: "#9ca3af" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#374151",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Bar dataKey="value" fill="#e879f9" />
      </BarChart>
    </ResponsiveContainer>
  );
}
