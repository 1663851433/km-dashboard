"use client";

import MainPage from "@/components/mainPage";

import PineCore from "./components/PineCore";
import QuerySection from "./components/QuerySection";

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
      </div>
    </MainPage>
  );
}
