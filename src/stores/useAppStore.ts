import { create } from "zustand";

// 1. 定义 Store 的 State 和 Actions 的接口
interface AppState {
  // --- State ---
  count: number;
  userName: string;

  // --- Actions ---
  increment: () => void;
  setUserName: (name: string) => void;
}

// 2. 创建 Store
const useAppStore = create<AppState>((set) => ({
  // --- Initial State ---
  count: 0,
  userName: "Guest",

  // --- Actions ---
  increment: () => set((state) => ({ count: state.count + 1 })),
  setUserName: (name) => set({ userName: name }),
}));

export default useAppStore;
