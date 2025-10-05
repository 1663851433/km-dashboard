import React from "react";

import { HddTwoTone, getTwoToneColor, setTwoToneColor } from "@ant-design/icons";
import { Card, Table, Typography } from "antd";
import type { TableProps } from "antd";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

interface DataType {
  key: string;
  product: string;
  金安: number;
  新茂: number;
  湖南: number;
  广西: number;
  普源: number;
  封开: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "金安",
    dataIndex: "金安",
    key: "金安",
  },
  {
    title: "新茂",
    dataIndex: "新茂",
    key: "新茂",
  },
  {
    title: "湖南",
    dataIndex: "湖南",
    key: "湖南",
  },
  {
    title: "广西",
    dataIndex: "广西",
    key: "广西",
  },
  {
    title: "普洱",
    dataIndex: "普洱",
    key: "普洱",
  },
  {
    title: "封开",
    dataIndex: "封开",
    key: "封开",
  },
];

/**
 * @description 分公司库存
 */
const InventoryTable: React.FC = () => {
  const branchInventory = useWeeklyDashboardStores((state) => state.branchInventory);

  return (
    <Card className="shadow-md h-[425px]">
      <div className="flex items-center mb-[10px]">
        <HddTwoTone className="text-[32px]" />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          分公司库存
        </Typography.Title>
      </div>

      <Table
        columns={columns}
        dataSource={branchInventory}
        pagination={false}
        size="small"
        bordered
      />
    </Card>
  );
};

export default InventoryTable;
