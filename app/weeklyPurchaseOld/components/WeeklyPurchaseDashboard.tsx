"use client";

import { FC } from "react";

import { Col, Row, Spin } from "antd";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

import CompanySelector from "./CompanySelector";
import CurTime from "./CurTime";
import GuidePriceCards from "./GuidePriceCards";
import InventoryCards from "./InventoryCards";
import InventoryTable from "./InventoryTable";
import PriceChart from "./PriceChart";
import PurchaseTable from "./PurchaseTable";
import SummaryCards from "./SummaryCards";

// dashboard容器
const WeeklyPurchaseDashboard: FC = () => {
  const pageLoading = useWeeklyDashboardStores((state) => state.pageLoading);
  return (
    <div className="p-4 space-y-4 w-full h-full overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* 左侧内容 */}
        <div className="lg:col-span-6 space-y-4">
          {/* 选择器 */}
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
        {pageLoading && <Spin fullscreen size="large" tip="Loading" />}
      </div>
    </div>
  );
};

export default WeeklyPurchaseDashboard;
