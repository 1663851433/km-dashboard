import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

interface GuidePriceCardProps {
  title: string;
  price: string;
}

const GuidePriceCard: React.FC<GuidePriceCardProps> = ({ title, price }) => {
  return (
    <Card className="shadow-sm border border-gray-200">
      <div className="text-center">
        <Text className="text-gray-600 text-sm">{title}</Text>
        <Title level={3} className="m-0">{price}</Title>
      </div>
    </Card>
  );
};

const GuidePriceCards: React.FC = () => {
  return (
    <>
      <GuidePriceCard title="松香采购指导价" price="10000" />
      <GuidePriceCard title="松节油采购指导价" price="10000" />
    </>
  );
};

export default GuidePriceCards;