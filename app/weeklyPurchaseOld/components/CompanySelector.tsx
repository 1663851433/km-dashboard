import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { DownOutlined } from "@ant-design/icons";
import { Button, Select, Typography } from "antd";

const { Text } = Typography;

const CompanySelector: React.FC = () => {
  return (
    <>
      <Card className="gradient-card h-full">
        <CardContent>
          <div className="flex items-center gap-[5px]">
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
          </div>

          <div className="flex items-center gap-[5px]">
            <Text className="font-medium text-white">松脂</Text>
            <div className="flex items-center gap-2">
              <Select
                defaultValue="all"
                style={{ width: 120 }}
                options={[
                  { value: "all", label: "全部" },
                  { value: "maweisong", label: "马尾松" },
                  { value: "shidisong", label: "湿地松" },
                  { value: "yunnansong", label: "云南松" },
                ]}
                suffixIcon={<DownOutlined />}
              />
            </div>
          </div>

          <Button type="primary">查询</Button>
        </CardContent>
      </Card>

      {/* <Card className="gradient-card">
        <CardContent className="p-4 flex justify-between items-center">
          <Text className="font-medium text-white">松脂</Text>
          <div className="flex items-center gap-2">
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              options={[
                { value: "all", label: "全部" },
                { value: "maweisong", label: "马尾松" },
                { value: "shidisong", label: "湿地松" },
                { value: "yunnansong", label: "云南松" },
              ]}
              suffixIcon={<DownOutlined />}
            />
          </div>
        </CardContent>
      </Card> */}
    </>
  );
};

export default CompanySelector;
