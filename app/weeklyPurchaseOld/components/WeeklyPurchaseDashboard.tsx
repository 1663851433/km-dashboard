"use client";

import { FC } from "react";

import { api } from "@/src/services/api";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Spin } from "antd";

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

  // 模板下载功能
  const handleDownloadTemplate = async () => {
    api.downloadWeeklyData();
  };

  return (
    <div className="p-4 space-y-4 w-full h-full overflow-auto relative">
      {/* 悬浮下载按钮 */}
      {/* <div className="fixed top-[100px] right-[20px] z-50">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={handleDownloadTemplate}
          className="shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1890ff",
            border: "none",
            boxShadow: "0 4px 12px rgba(24, 144, 255, 0.3)",
          }}
        />
      </div> */}

      <div className="grid grid-cols-1 min-[1400px]:grid-cols-2  gap-4">
        {/* 左侧内容 */}
        <div className="space-y-4">
          {/* 选择器 */}
          <Row gutter={16}>
            <Col span={10}>
              <CurTime />
            </Col>
            <Col span={14}>
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
        <div className="space-y-4">
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
