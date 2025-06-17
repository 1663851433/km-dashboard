import { Card } from "antd";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "松脂", value: 70343 },
  { name: "松香", value: 33355 },
  { name: "松节油", value: 2433 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function DevicePieChart() {
  return (
    <Card title="品类库存占比">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-2 text-gray-500">总设备数 1,430</div>
    </Card>
  );
}
