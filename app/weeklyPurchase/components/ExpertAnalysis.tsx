import { Card, Typography } from "antd";

export default function ExpertAnalysis() {
  return (
    <Card title="专家分析">
      <div className="mb-2">
        <Typography.Text strong>总体现状</Typography.Text>
        <div className="text-xs text-gray-500">
          这里可以放业务分析结论，根据整体评分、资产分布做低风险提示。
        </div>
      </div>
      <div>
        <Typography.Text strong>值得关注</Typography.Text>
        <div className="text-xs text-gray-500">
          这里可以放具体业务分析建议，资产分布需警惕低风险。
        </div>
      </div>
    </Card>
  );
}
