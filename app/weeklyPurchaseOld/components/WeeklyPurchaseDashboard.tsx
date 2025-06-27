"use client";

import { FC, useEffect, useState } from "react";

import { api } from "@/src/services/api";
import { Col, Row } from "antd";

import CompanySelector from "./CompanySelector";
import CurTime from "./CurTime";
import GuidePriceCards from "./GuidePriceCards";
import InventoryCards from "./InventoryCards";
import InventoryTable from "./InventoryTable";
import PriceChart from "./PriceChart";
import PurchaseTable from "./PurchaseTable";
import SummaryCards from "./SummaryCards";

const WeeklyPurchaseDashboard: FC = () => {
  const [summaryData, setSummaryData] = useState<any>(null);

  useEffect(() => {
    api
      .getSummaryData({
        branch: "普洱",
        startTime: "2020-01-01",
        // endTime
      })
      .then((res) => {
        // setSummaryData(res);
      });
  }, []);

  return (
    <div className="p-4 space-y-4 w-full h-full overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* 左侧内容 */}
        <div className="lg:col-span-6 space-y-4">
          {/* 选择器 */}
          {/* <div className="grid grid-cols-3 gap-4">
            <CurTime />
            <CompanySelector />
          </div> */}
          <Row gutter={16}>
            <Col span={8}>
              <CurTime />
            </Col>
            <Col span={16}>
              <CompanySelector />
            </Col>
          </Row>
          {/* 左上方卡片区域 */}
          <div className="grid grid-cols-3 gap-4">
            <SummaryCards />
          </div>

          {/* 左侧表格 */}
          <PurchaseTable />

          {/* 左侧折线图 */}
          <PriceChart />
        </div>

        {/* 右侧内容 */}
        <div className="lg:col-span-6 space-y-4">
          {/* 右上方指导价格卡片 */}
          <div className="grid grid-cols-3 gap-4">
            <GuidePriceCards />
          </div>

          {/* 右侧库存卡片 */}
          <div className="grid grid-cols-3 gap-4">
            <InventoryCards />
          </div>

          {/* 右侧库存表格 */}
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export default WeeklyPurchaseDashboard;
