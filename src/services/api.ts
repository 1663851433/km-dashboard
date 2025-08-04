import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL = "";

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000 * 30,
});

// 在此添加请求/响应拦截器
// instance.interceptors.request.use(config => { ... });
// instance.interceptors.response.use(response => { ... });

export const axiosInstance = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const res: AxiosResponse<T> = await instance.get(url, config);
    return res.data;
  },
  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const res: AxiosResponse<T> = await instance.post(url, data, config);
    return res.data;
  },
  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const res: AxiosResponse<T> = await instance.put(url, data, config);
    return res.data;
  },
  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const res: AxiosResponse<T> = await instance.delete(url, config);
    return res.data;
  },
};

class ApiService {
  /**
   * 获取摘要数据
   * @param params 请求参数
   */
  async getSummaryData(params: Record<string, any>): Promise<any> {
    try {
      return axiosInstance.post("/api/getSummary", { ...params });
    } catch (error) {
      return console.error(error);
    }
  }

  /**
   * 导入周数据
   * @param file Excel 文件
   */
  async importWeeklyData(file: File): Promise<any> {
    try {
      const formData = new FormData();
      formData.append("file", file);
      return axiosInstance.post("/api/uploadWeeklyData", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      return console.error(error);
    }
  }

  /**
   * 下载周数据模板
   */
  async downloadWeeklyData(): Promise<any> {
    try {
      return axiosInstance.get("/api/download/WeeklyDataModel");
    } catch (error) {
      return console.error(error);
    }
  }
}

export const api = new ApiService();
