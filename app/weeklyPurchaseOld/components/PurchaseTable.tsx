import React from "react";
import { Table, Card, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Title } = Typography;

interface DataType {
  key: string;
  company: string;
  purchaseVolume: string;
  purchasePrice: string;
  priceComparison: string;
  purchaseAmount: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "分公司",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "采购量",
    dataIndex: "purchaseVolume",
    key: "purchaseVolume",
  },
  {
    title: "采购单价",
    dataIndex: "purchasePrice",
    key: "purchasePrice",
  },
  {
    title: "价格环比",
    dataIndex: "priceComparison",
    key: "priceComparison",
  },
  {
    title: "采购金额",
    dataIndex: "purchaseAmount",
    key: "purchaseAmount",
  },
];

const data: DataType[] = [
  {
    key: "1",
    company: "湖南",
    purchaseVolume: "0",
    purchasePrice: "",
    priceComparison: "",
    purchaseAmount: "0",
  },
  {
    key: "2",
    company: "金安",
    purchaseVolume: "0",
    purchasePrice: "",
    priceComparison: "",
    purchaseAmount: "0",
  },
  {
    key: "3",
    company: "新茂",
    purchaseVolume: "0",
    purchasePrice: "",
    priceComparison: "",
    purchaseAmount: "0",
  },
  {
    key: "4",
    company: "广西",
    purchaseVolume: "0",
    purchasePrice: "",
    priceComparison: "",
    purchaseAmount: "0",
  },
  {
    key: "5",
    company: "普洱",
    purchaseVolume: "349.021",
    purchasePrice: "5.55",
    priceComparison: "",
    purchaseAmount: "4476.612",
  },
];

const PurchaseTable: React.FC = () => {
  return (
    <Card className="shadow-md">
      <Table columns={columns} dataSource={data} pagination={false} size="small" bordered />
    </Card>
  );
};

export default PurchaseTable;
