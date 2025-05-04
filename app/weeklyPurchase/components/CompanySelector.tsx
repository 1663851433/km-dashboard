import React from "react";
import { Card, Select, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CompanySelector: React.FC = () => {
  return (
    <>
      <Card className="shadow-sm border border-gray-200">
        <div className="flex justify-between items-center">
          <Text className="font-medium">分公司</Text>
          <div className="flex items-center gap-2">
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              options={[
                { value: 'all', label: '全部' },
                { value: 'hunan', label: '湖南' },
                { value: 'jinan', label: '金安' },
                { value: 'xinmao', label: '新茂' },
                { value: 'guangxi', label: '广西' },
                { value: 'puyuan', label: '普源' },
              ]}
              suffixIcon={<DownOutlined />}
            />
          </div>
        </div>
      </Card>
      
      <Card className="shadow-sm border border-gray-200">
        <div className="flex justify-between items-center">
          <Text className="font-medium">松脂</Text>
          <div className="flex items-center gap-2">
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              options={[
                { value: 'all', label: '全部' },
                { value: 'songzhi', label: '松脂' },
                { value: 'songxiang', label: '松香' },
                { value: 'songyou', label: '松油' },
              ]}
              suffixIcon={<DownOutlined />}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default CompanySelector;