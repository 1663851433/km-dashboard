import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { cn } from "@/lib/utils";

const MainPage = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("flex w-full h-full", className)}>
      <DashboardSidebar className="h-full" />
      <div className="flex-1 h-full">{children}</div>
    </div>
  );
};

export default MainPage;
