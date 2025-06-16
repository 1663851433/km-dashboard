"use client";

import { CATEGORY_ONE } from "@/lib/constants";
import { Button, Card, DatePicker, Form, Select } from "antd";
import dayjs from "dayjs";

export default function QuerySection() {
  const [form] = Form.useForm<{ category: string; date: string[] }>();

  const disabledDate = (current: any) => {
    return current && current > dayjs().endOf("day");
  };
  const btnReset = () => {
    form.resetFields();
  };
  const btnQuery = () => {
    const values = form.getFieldsValue();
    console.log("form vals", values);
  };

  return (
    <Card>
      <Form
        layout="inline"
        form={form}
        initialValues={{ category: CATEGORY_ONE[0].value, date: [] }}
      >
        <Form.Item label="品类：" name="category">
          <Select style={{ width: 120 }}>
            {CATEGORY_ONE.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="创建日期：" name="date">
          <DatePicker.RangePicker disabledDate={disabledDate} />
        </Form.Item>

        <Form.Item style={{ marginLeft: "auto" }}>
          <Button onClick={btnReset}>重置</Button>
          <Button type="primary" className="ml-[10px]" onClick={btnQuery}>
            查询
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
