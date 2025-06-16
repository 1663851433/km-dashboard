import { Card, DatePicker } from "antd";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

dayjs.extend(weekOfYear);

export default () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [curDate, setCurDate] = useState<dayjs.Dayjs>(dayjs());

  // 获取当前周数
  const curWeekth = useMemo(() => {
    return dayjs(curDate).week();
  }, [curDate]);

  const disabledDate = (current: any) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf("day");
  };

  return (
    <Card className="shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div
          className="text-center px-4 py-2 flex items-center gap-[2px] cursor-pointer relative"
          onClick={() => {
            setPanelVisible(true);
          }}
        >
          <div className="font-medium text-[22px]">{dayjs(curDate).format("YYYY-MM-DD")}</div>
          <ChevronDown />

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
              open={panelVisible}
              disabledDate={disabledDate}
              onChange={(date) => {
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
