"use client";

import MainPage from "@/components/mainPage";

import DevicePieChart from "./components/DevicePieChart";
import ExpertAnalysis from "./components/ExpertAnalysis";
import FlowTrendChart from "./components/FlowTrendChart";
import TrendLineChart from "./components/LineChart";
import PineCore from "./components/PineCore";
import ProductRanking from "./components/ProductRanking";
import QuerySection from "./components/QuerySection";
import ScoreCard from "./components/ScoreCard";
import UserRadarChart from "./components/UserRadarChart";
import UserSourceBar from "./components/UserSourceBar";

export default function WeeklyPurchase() {
  return (
    <MainPage
      mainContainerStyle={{
        background: "#f4f5f6",
      }}
    >
      <div className="w-full h-full p-[20px] flex flex-col gap-[10px]">
        <QuerySection />

        <PineCore />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <TrendLineChart />
          </div>
          <div className="col-span-4">
            <ProductRanking />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <UserSourceBar />
          <DevicePieChart />
          <UserRadarChart />
        </div>

        {/* 产品 */}
        <div></div>

        {/* <div className="grid grid-cols-12 gap-4 mt-2">
          <div className="col-span-8 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
            </div>
            <ScoreCard />
            <FlowTrendChart />
          </div>
          <div className="col-span-4 flex flex-col gap-4">
            <ExpertAnalysis />
          </div>
        </div> */}
      </div>
    </MainPage>
  );
}
