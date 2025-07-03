import React from "react";

import { Card, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

interface DataType {
  key: string;
  product: string;
  jinan: number;
  xinmao: number;
  hunan: number;
  guangxi: number;
  puyuan: number;
  sealed: number;
}

const columns: ColumnsType<DataType> = [
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
    dataIndex: "新茂",
    key: "新茂",
  },
  {
    title: "广西",
    dataIndex: "新茂",
    key: "新茂",
  },
  {
    title: "普源",
    dataIndex: "新茂",
    key: "新茂",
  },
  {
    title: "封存",
    dataIndex: "sealed",
    key: "sealed",
  },
];

const InventoryTable: React.FC = () => {
  const branchInventory = useWeeklyDashboardStores((state) => state.branchInventory);

  return (
    <Card className="shadow-md h-[425px]">
      <Typography.Title level={2}>分公司库存</Typography.Title>
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
