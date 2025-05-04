"use client";

import React from "react";
import Header from "./Header";
import SummaryCards from "./SummaryCards";
import CompanySelector from "./CompanySelector";
import PurchaseTable from "./PurchaseTable";
import PriceChart from "./PriceChart";
import InventoryCards from "./InventoryCards";
import InventoryTable from "./InventoryTable";
import GuidePriceCards from "./GuidePriceCards";
import CurTime from "./CurTime";

const WeeklyPurchaseDashboard: React.FC = () => {
  return (
    <div className="p-4 space-y-4 w-full h-full overflow-auto">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* 左侧内容 */}
        <div className="lg:col-span-6 space-y-4">
          {/* 选择器 */}
          <div className="grid grid-cols-3 gap-4">
            <CurTime />
            <CompanySelector />
          </div>
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
          <div className="grid grid-cols-2 gap-4">
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
