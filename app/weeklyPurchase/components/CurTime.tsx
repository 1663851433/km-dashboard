import { Card } from "antd";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { useMemo } from "react";

dayjs.extend(weekOfYear);

export default () => {
  // 获取当前周数
  const curWeekth = useMemo(() => {
    return dayjs().week();
  }, []);
  return (
    <Card className="shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-center px-4 py-2">
          <div className="font-medium">{dayjs().format("YYYY-MM-DD")}</div>
        </div>
        <div className="text-center px-4 py-2 bg-gray-50 rounded-md">
          <div className="text-gray-500 text-sm">{curWeekth}周</div>
        </div>
      </div>
    </Card>
  );
};
