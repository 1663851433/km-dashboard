import { Card } from "antd";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "一月", 流量: 100000 },
  { name: "二月", 流量: 150000 },
  { name: "三月", 流量: 200000 },
  { name: "四月", 流量: 250000 },
  { name: "五月", 流量: 350000 },
];

export default function FlowTrendChart() {
  return (
    <Card title="整体流量趋势">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="流量" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
