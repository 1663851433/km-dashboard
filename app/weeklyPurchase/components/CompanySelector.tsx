import React from "react";
import { Select, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Card, CardContent } from "@/components/ui/card";

const { Text } = Typography;

const CompanySelector: React.FC = () => {
  return (
    <>
      <Card className="gradient-card">
        <CardContent>
          <Text className="font-medium text-white">分公司</Text>
          <div className="flex items-center gap-2">
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              options={[
                { value: "all", label: "全部" },
                { value: "hunan", label: "湖南" },
                { value: "jinan", label: "金安" },
                { value: "xinmao", label: "新茂" },
                { value: "guangxi", label: "广西" },
                { value: "puyuan", label: "普源" },
              ]}
              suffixIcon={<DownOutlined />}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="gradient-card">
        <CardContent className="p-4 flex justify-between items-center">
          <Text className="font-medium text-white">松脂</Text>
          <div className="flex items-center gap-2">
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              options={[
                { value: "all", label: "全部" },
                { value: "songzhi", label: "松脂" },
                { value: "songxiang", label: "松香" },
                { value: "songyou", label: "松油" },
              ]}
              suffixIcon={<DownOutlined />}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CompanySelector;
