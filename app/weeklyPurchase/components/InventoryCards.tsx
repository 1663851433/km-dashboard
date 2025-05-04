import React from "react";
import { Card, Typography } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Title, Text } = Typography;

const songxiangData = [
  { name: '本周', 数量: 200 },
  { name: '下周', 数量: 180 },
];

const songyouData = [
  { name: '本周', 数量: 150 },
  { name: '下周', 数量: 140 },
];

const InventoryCard = ({ title, value, chartData }: { title: string, value: string, chartData: any[] }) => {
  return (
    <Card className="shadow-md">
      <div className="mb-4">
        <Card className="bg-gray-50 border-0">
          <Title level={5} className="m-0 text-center">{title}</Title>
        </Card>
      </div>
      
      <div className="h-[150px] mb-4">
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="数量" fill="#4096ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center">
        <Title level={3} className="m-0">{value}</Title>
      </div>
    </Card>
  );
};

const InventoryCards: React.FC = () => {
  return (
    <>
      <InventoryCard title="松香库存" value="11358" chartData={songxiangData} />
      <InventoryCard title="松油即时库存" value="10968" chartData={songyouData} />
      <InventoryCard title="松油本周期库存" value="2399" chartData={songyouData} />
    </>
  );
};

export default InventoryCards;