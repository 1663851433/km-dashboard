import React from "react";
import { Typography } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";

const { Title } = Typography;

const data = [
  { name: "第1周", 本周: 400, 下周: 380 },
  { name: "第2周", 本周: 420, 下周: 400 },
  { name: "第3周", 本周: 410, 下周: 420 },
  { name: "第4周", 本周: 430, 下周: 410 },
  { name: "第5周", 本周: 425, 下周: 430 },
  { name: "第6周", 本周: 440, 下周: 425 },
  { name: "第7周", 本周: 435, 下周: 440 },
];

const PriceChart: React.FC = () => {
  return (
    <Card className="shadow-md h-[425px] bg-[#ffecd9] border-none">
      <CardHeader className="text-black">本周采购数量与下周预测</CardHeader>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="本周" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="下周" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PriceChart;
