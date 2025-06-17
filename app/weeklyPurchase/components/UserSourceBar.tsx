import { Card } from "antd";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "松脂", 市场价: 300000, KM执行价: 200000 },
  { name: "松香", 市场价: 250000, KM执行价: 180000 },
  { name: "松节油", 市场价: 200000, KM执行价: 150000 },
];

export default function UserSourceBar() {
  return (
    <Card title="市场价格与KM执行价">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="市场价" fill="#8884d8" />
          <Bar dataKey="KM执行价" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
