import React, { useState } from "react";
import { Card, Typography } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package, Droplets, Clock } from 'lucide-react';

const { Title, Text } = Typography;

const songxiangData = [
  { name: '本周', 数量: 200 },
  { name: '下周', 数量: 180 },
];

const songyouData = [
  { name: '本周', 数量: 150 },
  { name: '下周', 数量: 140 },
];

interface InventoryCardProps {
  title: string;
  value: string;
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
            <Title level={5} className="m-0 text-white">{title}</Title>
            <div className={`text-white transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`}>
              {icon}
            </div>
          </div>
        </Card>
      </div>
      
      <div className={`h-[150px] mb-4 transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}>
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
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: 'none'
              }} 
            />
            <Bar 
              dataKey="数量" 
              fill={color.includes('green') ? 'var(--green)' : color.includes('blue') ? 'var(--peach)' : 'var(--sand)'} 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
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
  return (
    <>
      <InventoryCard 
        title="松香库存" 
        value="11358" 
        chartData={songxiangData} 
        icon={<Package size={20} />}
        color="border-green-500"
      />
      <InventoryCard 
        title="松油即时库存" 
        value="10968" 
        chartData={songyouData} 
        icon={<Droplets size={20} />}
        color="border-blue-500"
      />
      <InventoryCard 
        title="松油本周期库存" 
        value="2399" 
        chartData={songyouData} 
        icon={<Clock size={20} />}
        color="border-amber-500"
      />
    </>
  );
};

export default InventoryCards;