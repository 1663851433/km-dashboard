import React from "react";
import { Card, Typography } from "antd";
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

const { Title } = Typography;

const data = [
  { name: "第1周", 本周: 400, 上周: 380 },
  { name: "第2周", 本周: 420, 上周: 400 },
  { name: "第3周", 本周: 410, 上周: 420 },
  { name: "第4周", 本周: 430, 上周: 410 },
  { name: "第5周", 本周: 425, 上周: 430 },
  { name: "第6周", 本周: 440, 上周: 425 },
  { name: "第7周", 本周: 435, 上周: 440 },
];

const PriceChart: React.FC = () => {
  return (
    <Card className="shadow-md h-[425px]">
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
            <Line type="monotone" dataKey="上周" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PriceChart;
