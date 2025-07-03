"use client";

import { create } from "zustand";

export interface WeeklyDashboardStateProps {
  queryParams: {
    startTime?: string;
    endTime?: string;
    branch: string;
    /**
     * 松脂类型
     */
    rosinType?: string;
  };
  /**
   * 摘要数据
   */
  summaryData: {
    rosinTotal: string; //本周松脂采购总量
    purchaseUnitPrice: string; //采购单价
    purchaseAmount: string; //采购金额
  };
  /**
   * 分公司数据
   */
  subCompanyData: {
    company: string;
    rosinTotal: string;
    purchaseUnitPrice: string;
    purchaseAmount: string;
    priceChange: string;
  }[];
  /**
   * 本周采购数量与下周预测
   */
  currentAndNextWeekForecast: {
    curWeek: string[];
    nextWeek: string[];
  };
  /**
   * 指导价
   */
  suggestedPrice: {
    rosin: number; //
    colophony: number; //松香
    pineTar: number; //松节油
  };
  /**
   * 库存
   */
  inventory: {
    curWeek: any[];
    lastWeek: any[];
  };
  /**
   * 分公司库存
   */
  branchInventory: any[];
  /**
   * 数据请求loading
   */
  pageLoading: boolean;
}

export interface WeeklyDashboardStateActions {
  updateState: (params: Partial<WeeklyDashboardStateProps>) => void;
  clearState: () => void;
}

const initState: WeeklyDashboardStateProps = {
  queryParams: {
    branch: "",
  },
  summaryData: {
    rosinTotal: "",
    purchaseUnitPrice: "",
    purchaseAmount: "",
  },
  subCompanyData: [],
  currentAndNextWeekForecast: {
    curWeek: [],
    nextWeek: [],
  },
  suggestedPrice: {
    rosin: 0,
    colophony: 0,
    pineTar: 0,
  },
  inventory: {
    curWeek: [],
    lastWeek: [],
  },
  branchInventory: [],
  pageLoading: false,
};

export const useWeeklyDashboardStores = create<
  WeeklyDashboardStateProps & WeeklyDashboardStateActions
>()((set) => ({
  ...initState,

  updateState: (params) => {
    set((state) => ({
      ...state,
      ...params,
    }));
  },

  clearState: () => {
    set((state) => ({
      ...initState,
    }));
  },
}));
