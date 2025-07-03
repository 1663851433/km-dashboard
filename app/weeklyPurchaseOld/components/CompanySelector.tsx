import React, { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/src/services/api";
import { DownOutlined } from "@ant-design/icons";
import { Button, Select, Typography } from "antd";

import { useWeeklyDashboardStores } from "@/src/stores/useWeeklyDashboardStores";

const { Text } = Typography;

const CompanySelector: React.FC = () => {
  const queryParams = useWeeklyDashboardStores((state) => state.queryParams);
  const weeklyStoreUpdateFn = useWeeklyDashboardStores((state) => state.updateState);

  const handleQuery = async (params?: any) => {
    weeklyStoreUpdateFn({ pageLoading: true });

    let res = await api.getSummaryData(params || queryParams);

    weeklyStoreUpdateFn({ pageLoading: false });

    if (res.status == "200") {
      // parse预测数据 - currentAndNextWeekForecast
      let { currentAndNextWeekForecast: resCurrentAndNextWeekForecast } = res.data;

      weeklyStoreUpdateFn({
        summaryData: {
          rosinTotal: res.data.rosinTotal,
          purchaseUnitPrice: res.data.purchaseUnitPrice,
          purchaseAmount: res.data.purchaseAmount,
        },
        subCompanyData: res.data.subCompanyData || [],
        currentAndNextWeekForecast: {
          curWeek: resCurrentAndNextWeekForecast.curWeek?.map((item: any) => item.purchaseQty),
          nextWeek: resCurrentAndNextWeekForecast.nextWeek?.map((item: any) => item.purchaseQty),
        },
        suggestedPrice: res.data.suggestedPrice,
        inventory: res.data.inventory,
        branchInventory: res.data.branchInventory,
      });
    }
  };

  useEffect(() => {
    let initDate = useWeeklyDashboardStores.getState().queryParams;
    handleQuery(initDate);
  }, []);

  return (
    <>
      <Card className="gradient-card h-full">
        <CardContent>
          <div className="flex items-center gap-[5px]">
            <Text className="font-medium text-white">分公司</Text>
            <div className="flex items-center gap-2">
              <Select
                defaultValue=""
                style={{ width: 120 }}
                options={[
                  { value: "", label: "全部" },
                  { value: "湖南", label: "湖南" },
                  { value: "金安", label: "金安" },
                  { value: "新茂", label: "新茂" },
                  { value: "广西", label: "广西" },
                  { value: "普源", label: "普源" },
                ]}
                suffixIcon={<DownOutlined />}
                value={queryParams.branch}
                onChange={(val) => {
                  // console.log("company onChange", val);
                  // setCompany(val);
                  weeklyStoreUpdateFn({
                    queryParams: {
                      ...queryParams,
                      branch: val,
                    },
                  });
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-[5px]">
            <Text className="font-medium text-white">松脂</Text>
            <div className="flex items-center gap-2">
              <Select
                defaultValue="all"
                style={{ width: 120 }}
                options={[
                  { value: "all", label: "全部" },
                  { value: "maweisong", label: "马尾松" },
                  { value: "shidisong", label: "湿地松" },
                  { value: "yunnansong", label: "云南松" },
                ]}
                suffixIcon={<DownOutlined />}
              />
            </div>
          </div>

          <Button type="primary" onClick={() => handleQuery()}>
            查询
          </Button>
        </CardContent>
      </Card>

      {/* <Card className="gradient-card">
        <CardContent className="p-4 flex justify-between items-center">
          <Text className="font-medium text-white">松脂</Text>
          <div className="flex items-center gap-2">
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              options={[
                { value: "all", label: "全部" },
                { value: "maweisong", label: "马尾松" },
                { value: "shidisong", label: "湿地松" },
                { value: "yunnansong", label: "云南松" },
              ]}
              suffixIcon={<DownOutlined />}
            />
          </div>
        </CardContent>
      </Card> */}
    </>
  );
};

export default CompanySelector;
