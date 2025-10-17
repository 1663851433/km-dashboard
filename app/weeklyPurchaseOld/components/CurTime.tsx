import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn, getWeekRange } from "@/src/utils/utils";
import { Card, DatePicker } from "antd";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

dayjs.extend(weekOfYear);

export default () => {
  const weeklyDashboardStore = useWeeklyDashboardStores();
  const queryParams = useWeeklyDashboardStores((state) => state.queryParams);

  const [panelVisible, setPanelVisible] = useState(false);
  const [curDate, setCurDate] = useState<dayjs.Dayjs>(dayjs());

  // 获取当前周数
  const curWeekth = useMemo(() => {
    return dayjs(curDate).week();
  }, [curDate]);
  const curDateRange = useMemo(() => {
    const formatStr = "MM/DD";
    const { startTime, endTime } = getWeekRange(curDate.toDate());

    return `${dayjs(startTime).format(formatStr)} - ${dayjs(endTime).format(formatStr)}`;
  }, [curDate]);

  const disabledDate = (current: any) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  };

  useEffect(() => {
    const { startTime, endTime } = getWeekRange(curDate.toDate());

    weeklyDashboardStore.updateState({
      queryParams: {
        ...queryParams,
        startTime,
        endTime,
      },
    });
  }, [curDate]);

  return (
    <Card className="shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div
          className="text-center px-4 py-2 flex items-center gap-[2px] cursor-pointer relative"
          onClick={() => {
            setPanelVisible((prev) => !prev);
          }}
        >
          <div className="font-medium text-[22px]">{curDateRange}</div>

          <ChevronDown className={cn(panelVisible ? "rotate-[180deg]" : "")} />

          <div
            className="absolute w-0 h-0 overflow-hidden top-0"
            style={{
              insetInlineStart: 0,
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <DatePicker
              picker="week"
              open={panelVisible}
              value={curDate}
              disabledDate={disabledDate}
              onChange={(date, dateStr) => {
                if (!date || !date.isValid()) return;
                setCurDate(date);
                setPanelVisible(false);
              }}
            />
          </div>
        </div>
        <div className="text-center px-4 py-2 bg-gray-50 rounded-md">
          <div className="text-gray-500 text-sm">{curWeekth}周</div>
        </div>
      </div>
    </Card>
  );
};
