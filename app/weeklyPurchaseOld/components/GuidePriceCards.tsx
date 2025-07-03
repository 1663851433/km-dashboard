import { ArrowUpNarrowWide, Droplets, TrendingUp } from "lucide-react";
import React from "react";

import { Card, Typography } from "antd";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

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
      styles={{ body: { padding: "16px" } }}
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
  const suggestedPrice = useWeeklyDashboardStores((state) => state.suggestedPrice);
  return (
    <>
      <GuidePriceCard
        title="松脂指导价"
        price={suggestedPrice.rosin.toFixed(2)}
        icon={<ArrowUpNarrowWide size={24} />}
      />
      <GuidePriceCard
        title="松香采购指导价"
        price={suggestedPrice.colophony.toFixed(2)}
        icon={<TrendingUp size={24} />}
      />
      <GuidePriceCard
        title="松节油采购指导价"
        price={suggestedPrice.pineTar.toFixed(2)}
        icon={<Droplets size={24} />}
      />
    </>
  );
};

export default GuidePriceCards;
