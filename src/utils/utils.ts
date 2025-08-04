import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 获取指定日期所在周的周一和周日
 * @param date Date 类型或可被 new Date() 解析的字符串/数字
 * @returns { startTime: string, endTime: string } 格式为 'YYYY-MM-DD'
 */
export function getWeekRange(date: Date | string | number) {
  const cur = new Date(date);
  // 获取当前是周几，0是周日，1是周一...
  const day = cur.getDay();
  // 计算距离周一的天数（周日特殊处理为7）
  const diffToMonday = day === 0 ? 6 : day - 1;

  // 周一
  const monday = new Date(cur);
  monday.setDate(cur.getDate() - diffToMonday);

  // 周日
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  // 格式化为 YYYY-MM-DD
  const format = (d: Date) =>
    `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d
      .getDate()
      .toString()
      .padStart(2, "0")}`;

  return {
    startTime: format(monday),
    endTime: format(sunday),
  };
}

/**
 * @description 格式化数字为带单位的字符串（如 1.2k、99k+、1.2M、99M+）
 * @param num 需要格式化的数字
 * @returns string 格式化后的字符串
 */
export function formatNumberWithUnit(num: number): string {
  const K = 1000;
  const M = 1000000;

  // 处理小于 1000 的情况
  if (num < K) {
    return num.toString();
  }

  // 处理 1k 到 99k 的情况
  if (num < 100 * K) {
    const value = (num / K).toFixed(1);
    return `${value}k`;
  }

  // 处理超过 99k 但未达到 1M 的情况
  if (num < M) {
    return "99k+";
  }

  // 处理 1M 到 99M 的情况
  if (num < 100 * M) {
    const value = (num / M).toFixed(1);
    return `${value}M`;
  }

  // 处理超过 99M 的情况
  return "99M+";
}
