"use client";

import MainPage from "@/components/mainPage";
import Container from "@/components/container";
import { Radio, Divider, Tag, Select, Col, Row } from "antd";
import { useState, useMemo } from "react";
import { timeCycle, options2, options3, options4 } from "./data/options";
import { Button } from "@/components/ui/button";

import { DashboardCharts } from "@/components/dashboard-charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Logo from "@/components/Logo";

const purchaseData = [
  { name: "Week 1", amount: 400, price: 2000 },
  { name: "Week 2", amount: 300, price: 2200 },
  { name: "Week 3", amount: 500, price: 1900 },
  { name: "Week 4", amount: 450, price: 2100 },
];

export default () => {
  const [searchForm, setSearchForm] = useState({
    timeCycle: "year",
    range: "cn",
    region: null,
    category: "rosin",
    variety: null,
  });

  const rangeOptions = useMemo(() => {
    if (searchForm.range === "cn") {
      return options3;
    } else {
      return options2;
    }
  }, [searchForm.range]);

  const varietyOptions = useMemo(() => {
    if (searchForm.category === "rosin") {
      return options4;
    } else {
      return [];
    }
  }, [searchForm.category]);

  return (
    <MainPage className="bg-gray-50 text-black relative">
      <Container className="shadow bg-[#f1f0ec] border border-gray-100 p-4 relative">
        <section className="flex flex-col gap-[10px]">
          <Row align="middle">
            <Col flex="100px">
              <Tag className="my-auto" color="#55acee">
                时间周期
              </Tag>
            </Col>
            <Col flex="auto">
              <Radio.Group
                className="w-[140px]"
                value={searchForm.timeCycle}
                onChange={(val) =>
                  setSearchForm((prev) => ({ ...prev, timeCycle: val.target.value }))
                }
              >
                <Radio.Button value="year">年</Radio.Button>
                <Radio.Button value="month">月</Radio.Button>
                <Radio.Button value="day">日</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
          <Row align="middle">
            <Col flex="100px">
              <Tag color="#55acee">范围</Tag>
            </Col>
            <Col flex="auto">
              <Radio.Group
                className="w-[140px]"
                value={searchForm.range}
                onChange={(e) => {
                  setSearchForm((prev) => ({ ...prev, range: e.target.value, region: null }));
                }}
              >
                <Radio.Button value="cn">国内</Radio.Button>
                <Radio.Button value="international">国际</Radio.Button>
              </Radio.Group>
              <Select
                showSearch
                placeholder="请选择"
                optionFilterProp="label"
                value={searchForm.region}
                style={{ width: 120, marginLeft: 10 }}
                onChange={(e) => {
                  setSearchForm((prev) => ({ ...prev, region: e }));
                }}
                onSearch={() => {}}
                options={rangeOptions}
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col flex="100px">
              <Tag color="#55acee">品类</Tag>
            </Col>
            <Col flex="auto">
              <Radio.Group
                className="w-[140px]"
                value={searchForm.category}
                onChange={(e) => {
                  setSearchForm((prev) => ({ ...prev, category: e.target.value, variety: null }));
                }}
              >
                <Radio.Button value="rosin">松香</Radio.Button>
                <Radio.Button value="turpentine">松节油</Radio.Button>
              </Radio.Group>
              <Select
                showSearch
                placeholder="请选择"
                optionFilterProp="label"
                value={searchForm.variety}
                style={{ width: 120, marginLeft: 10 }}
                onChange={(e) => {
                  setSearchForm((prev) => ({ ...prev, variety: e }));
                }}
                onSearch={() => {}}
                options={varietyOptions}
              />
            </Col>
          </Row>
          <Divider />
        </section>
        <Button variant="gradient">Get Chart</Button>

        <section className="mt-[10px]">
          {/* 月均线 */}
          <Card className="col-span-6 bg-[#f1f0ec] border-none rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="border-b border-gray-100/20">
              <CardTitle className="text-gray-700 text-lg">月均线</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={purchaseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" name="采购量" stroke="#8884d8" />
                    <Line type="monotone" dataKey="price" name="单价" stroke="#82ca9d" />
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>
      </Container>
    </MainPage>
  );
};
