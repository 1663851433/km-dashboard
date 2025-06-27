import { CSSProperties } from "react";

import Header from "@/components/Header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { cn } from "@/src/utils/utils";

import BgMain from "@/src/assets/img/bg-main.jpg";

const MainPage = ({
  className,
  children,
  mainContainerStyle,
}: {
  className?: string;
  mainContainerStyle?: CSSProperties;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex w-full h-full", className)}>
      <DashboardSidebar className="h-full" />
      <div
        className="flex-1 h-full flex flex-col"
        style={{
          background: `url(${BgMain.src}) no-repeat center / 100% 100%`,
          ...mainContainerStyle,
        }}
      >
        <Header />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainPage;
