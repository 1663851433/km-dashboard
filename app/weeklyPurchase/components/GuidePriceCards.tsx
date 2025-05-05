import React from "react";
import { Card, Typography } from "antd";
import { TrendingUp, Droplets } from "lucide-react";

const { Title, Text } = Typography;

interface GuidePriceCardProps {
  title: string;
  price: string;
  icon: React.ReactNode;
}

const GuidePriceCard: React.FC<GuidePriceCardProps> = ({ title, price, icon }) => {
  return (
    <Card 
      className="shadow-lg border-2 border-[var(--sand)] hover:border-[var(--peach)] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      bodyStyle={{ padding: "16px" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <Text className="text-gray-600 text-sm">{title}</Text>
          <Title level={3} className="m-0 flex items-center gap-2">
            {price}
            <span className="text-green-500 text-sm">↑2.5%</span>
          </Title>
        </div>
        <div className="p-3 bg-gradient-to-br from-[var(--green)] to-[var(--sand)] rounded-full text-white animate-pulse">
          {icon}
        </div>
      </div>
    </Card>
  );
};

const GuidePriceCards: React.FC = () => {
  return (
    <>
      <GuidePriceCard 
        title="松香采购指导价" 
        price="10000" 
        icon={<TrendingUp size={24} />} 
      />
      <GuidePriceCard 
        title="松节油采购指导价" 
        price="10000" 
        icon={<Droplets size={24} />} 
      />
    </>
  );
};

export default GuidePriceCards;