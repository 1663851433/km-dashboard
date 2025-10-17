"use client";

import { useEffect } from "react";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

export default function AntdClientLocale() {
  useEffect(() => {
    dayjs.locale("zh-cn");
  }, []);

  return null;
}
