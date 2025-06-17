"use client";

import { cn } from "@/lib/utils";
import { Card, Progress, Typography } from "antd";

const data = [
  { name: "湖南", rate: 83 },
  { name: "云南", rate: 63 },
  { name: "普洱", rate: 50 },
  { name: "广东", rate: 50 },
  { name: "海南", rate: 40 },
  { name: "贵州", rate: 30 },
];

export default function ProductRanking() {
  return (
    <Card title="分公司最高与最低价" extra={<a href="#">查看更多</a>} style={{ height: 355 }}>
      {data.map((item, idx) => (
        <div key={item.name} className="flex items-center mb-2">
          <span
            className={cn(
              "w-[20px] h-[20px] rounded-full flex items-center justify-center text-sm",
              idx < 3 ? "bg-[#2d455a] text-[#8f9faa]" : "bg-[#d6d7d8] text-[#eeeff0]"
            )}
          >
            {idx + 1}
          </span>
          <span className="w-[50px] text-sm text-gray-700 ml-[10px]">{item.name}</span>
          <Progress percent={item.rate} size="small" className="flex-1 mx-2" showInfo={false} />
          <span className="w-8 text-right text-sm text-gray-500">{item.rate}%</span>
        </div>
      ))}
    </Card>
  );
}
