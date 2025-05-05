import React from "react";
import { Table, Card, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";

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
    dataIndex: "jinan",
    key: "jinan",
  },
  {
    title: "新茂",
    dataIndex: "xinmao",
    key: "xinmao",
  },
  {
    title: "湖南",
    dataIndex: "hunan",
    key: "hunan",
  },
  {
    title: "广西",
    dataIndex: "guangxi",
    key: "guangxi",
  },
  {
    title: "普源",
    dataIndex: "puyuan",
    key: "puyuan",
  },
  {
    title: "封存",
    dataIndex: "sealed",
    key: "sealed",
  },
];

const data: DataType[] = [
  {
    key: "1",
    product: "松脂",
    jinan: 4094.63,
    xinmao: 2698.22,
    hunan: 3284.97,
    guangxi: 271.99,
    puyuan: 1011.0,
    sealed: 0.0,
  },
  {
    key: "2",
    product: "松香",
    jinan: 516.97,
    xinmao: 2536.22,
    hunan: 2559.4,
    guangxi: 4375.85,
    puyuan: 580.08,
    sealed: 400.0,
  },
  {
    key: "3",
    product: "松节油",
    jinan: 462.0,
    xinmao: 202.1,
    hunan: 690.96,
    guangxi: 394.46,
    puyuan: 550.0,
    sealed: 0.0,
  },
  {
    key: "4",
    product: "树脂",
    jinan: 0,
    xinmao: 134.15,
    hunan: 0.0,
    guangxi: 0,
    puyuan: 0,
    sealed: 0,
  },
];

const InventoryTable: React.FC = () => {
  return (
    <Card className="shadow-md">
      <Typography.Title level={2}>地区采购统计</Typography.Title>
      <Table columns={columns} dataSource={data} pagination={false} size="small" bordered />
    </Card>
  );
};

export default InventoryTable;
