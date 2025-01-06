export function PurchaseHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-white">采购管理</h1>
        <div className="flex items-center gap-2 bg-[#252b48] px-4 py-2 rounded-lg">
          <span className="text-white">本月采购总额:</span>
          <span className="text-green-400 font-bold">¥45,000</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[#252b48] px-4 py-2 rounded-lg">
          <span className="text-white">待处理订单:</span>
          <span className="text-yellow-400 font-bold">3</span>
        </div>
        <div className="flex items-center gap-2 bg-[#252b48] px-4 py-2 rounded-lg">
          <span className="text-white">活跃供应商:</span>
          <span className="text-blue-400 font-bold">12</span>
        </div>
      </div>
    </div>
  )
} 