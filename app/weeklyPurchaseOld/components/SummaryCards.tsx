import React from "react";
import { Card, Typography } from "antd";
import { TreePine, DollarSign, Wallet } from "lucide-react";

const { Text, Title } = Typography;

const SummaryCards: React.FC = () => {
  return (
    <>
      <Card className="border-2 border-green-500 shadow-md" bodyStyle={{ padding: "12px" }}>
        <div className="text-center">
          <Text className="text-gray-600 text-sm">本周松脂采购总量</Text>
          <div className="flex items-center justify-center gap-2">
            <TreePine className="text-green-500" size={24} />
            <Title
              level={2}
              style={{
                margin: "0",
              }}
            >
              567
            </Title>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-blue-500 shadow-md" bodyStyle={{ padding: "12px" }}>
        <div className="text-center">
          <Text className="text-gray-600 text-sm">采购单价</Text>
          <div className="flex items-center justify-center gap-2">
            <DollarSign className="text-blue-500" size={24} />
            <Title
              level={2}
              className="m-0"
              style={{
                margin: "0",
              }}
            >
              10000
            </Title>
          </div>
        </div>
      </Card>

      <Card className="border-2 border-blue-500 shadow-md" bodyStyle={{ padding: "12px" }}>
        <div className="text-center">
          <Text className="text-gray-600 text-sm">采购金额</Text>
          <div className="flex items-center justify-center gap-2">
            <Wallet className="text-blue-500" size={24} />
            <Title
              level={2}
              className="m-0"
              style={{
                margin: "0",
              }}
            >
              10000
            </Title>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SummaryCards;
