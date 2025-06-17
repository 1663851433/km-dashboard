import { Card } from "antd";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "供应商1", A: 120, B: 110, fullMark: 150 },
  { subject: "供应商2", A: 98, B: 130, fullMark: 150 },
  { subject: "供应商3", A: 86, B: 130, fullMark: 150 },
  { subject: "供应商4", A: 99, B: 100, fullMark: 150 },
  { subject: "供应商5", A: 85, B: 90, fullMark: 150 },
  { subject: "供应商6", A: 65, B: 85, fullMark: 150 },
];

export default function UserRadarChart() {
  return (
    <Card title="供应商">
      <ResponsiveContainer width="100%" height={220}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="当前部门" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="集团部门" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
}
