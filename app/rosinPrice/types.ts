/**
 * @description 湿地松价格
 */
export type ResoinPriceData = {
    // 湿地松价格
    rosinMarketPrice: {
      // 越南
      vietnam: number
      // 印尼
      indonesia: number
      // 巴西
      brazil: number
      // 七天内高价
      sevenDaysHigh: number
      // 七天内低价
      sevenDaysLow: number
      // 七天内均价
      sevenDaysAverage: number
    }
    // 七天内湿地松价格列表
    sevenDaysResinPriceList: {
      date: string
      price: number
      branch: string
    }[]
    // 预测未来14天价格走势
    future14DaysPriceTrend: {
      date: string
      price: number
    }[]
    // 七天内市场价与会议价格对比
    sevenDaysMarketPriceVsConferencePrice: {
      date: string
      marketPrice: number
      conferencePrice: number
    }[]
  }