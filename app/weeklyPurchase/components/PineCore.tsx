/**
 * @description 松树核心指标内容
 */
import { cn } from "@/src/utils/utils";
import { Card, Col, Divider, Row, Typography } from "antd";

const mockData = [
  { label: "马尾松", value: 9550, trend: -8.04 },
  { label: "湿地松", value: 9400, trend: -24.04 },
  { label: "云南松", value: 10800, trend: 23.35 },
  { label: "巴西湿地松", value: 10700 },
  { label: "印尼", value: 10500 },
];

export default function PineCore() {
  return (
    <Card>
      <Typography.Title level={5}>核心指标</Typography.Title>
      <div className="grid grid-cols-5 gap-[20px]">
        {mockData.map((item, idx) => (
          <div
            key={item.label}
            className={cn(
              "flex flex-col items-start",
              idx !== mockData.length - 1 && "border-r border-gray-200"
            )}
          >
            <span className="text-gray-500 text-xs">{item.label}</span>
            <span className="text-2xl font-bold">{item.value}</span>
            {item.trend !== undefined && (
              <div className="text-xs">
                <span className="text-gray-500">同比上周</span>
                <span className={`${item.trend > 0 ? "text-green-500" : "text-red-500"}`}>
                  {item.trend > 0 ? "↑" : "↓"} {Math.abs(item.trend)}%
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
