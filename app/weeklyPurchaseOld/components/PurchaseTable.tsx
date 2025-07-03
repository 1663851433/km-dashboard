import React from "react";

import { Card, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

const columns: ColumnsType<any> = [
  {
    title: "分公司",
    dataIndex: "branch",
    key: "branch",
  },
  {
    title: "采购量",
    dataIndex: "rosinTotal",
    key: "rosinTotal",
  },
  {
    title: "采购单价",
    dataIndex: "purchaseUnitPrice",
    key: "purchaseUnitPrice",
  },
  {
    title: "价格环比",
    dataIndex: "priceChange",
    key: "priceChange",
  },
  {
    title: "采购金额",
    dataIndex: "purchaseAmount",
    key: "purchaseAmount",
  },
];

const PurchaseTable: React.FC = () => {
  const subCompanyData = useWeeklyDashboardStores((state) => state.subCompanyData);
  return (
    <Card className="shadow-md">
      <Table
        columns={columns}
        dataSource={subCompanyData}
        pagination={false}
        size="small"
        bordered
      />
    </Card>
  );
};

export default PurchaseTable;
