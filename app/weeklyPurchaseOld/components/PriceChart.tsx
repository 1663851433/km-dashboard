import React, { useMemo } from "react";

import { Card, CardHeader } from "@/components/ui/card";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

const datasetTemplate = [
  { name: "周一" },
  { name: "周二" },
  { name: "周三" },
  { name: "周四" },
  { name: "周五" },
  { name: "周六" },
  { name: "周日" },
];

const PriceChart: React.FC = () => {
  const currentAndNextWeekForecast = useWeeklyDashboardStores(
    (state) => state.currentAndNextWeekForecast
  );
  const chartData = useMemo(() => {
    const { curWeek, nextWeek } = currentAndNextWeekForecast;

    return datasetTemplate.map((item, index) => ({
      name: item.name,
      curWeek: curWeek[index],
      nextWeek: nextWeek[index],
    }));
  }, [currentAndNextWeekForecast]);

  return (
    <Card className="shadow-md h-[425px] bg-white border-none">
      <CardHeader className="text-black">本周采购数量与下周预测</CardHeader>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="curWeek"
              name="本周"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="nextWeek" name="下周" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PriceChart;
