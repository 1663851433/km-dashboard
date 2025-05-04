import React from "react";
import { Card, Typography } from "antd";

const { Text, Title } = Typography;

const SummaryCards: React.FC = () => {
  return (
    <>
      <Card 
        className="border-2 border-green-500 shadow-md" 
        bodyStyle={{ padding: '12px' }}
      >
        <div className="text-center">
          <Text className="text-gray-600 text-sm">本周松脂采购总量</Text>
          <Title level={2} className="m-0 text-center">567</Title>
        </div>
      </Card>
      
      <Card 
        className="border-2 border-blue-500 shadow-md" 
        bodyStyle={{ padding: '12px' }}
      >
        <div className="text-center">
          <Text className="text-gray-600 text-sm">采购单价</Text>
          <Title level={2} className="m-0 text-center">10000</Title>
        </div>
      </Card>
      
      <Card 
        className="border-2 border-blue-500 shadow-md" 
        bodyStyle={{ padding: '12px' }}
      >
        <div className="text-center">
          <Text className="text-gray-600 text-sm">采购金额</Text>
          <Title level={2} className="m-0 text-center">10000</Title>
        </div>
      </Card>
    </>
  );
};

export default SummaryCards;