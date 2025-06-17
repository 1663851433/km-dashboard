import { Card, Progress } from "antd";

const score = 86.2;
const percent = 86.2;
const avg = 77.5;
const max = 95.4;
const min = 54.3;

export default function ScoreCard() {
  return (
    <Card title="整体流量评分">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">{score}分</span>
          <Progress percent={percent} showInfo={false} className="flex-1" />
          <span className="text-blue-500">前 20%</span>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>平均分 {avg}</span>
          <span>最高分 {max}</span>
          <span>最低分 {min}</span>
        </div>
      </div>
    </Card>
  );
}
