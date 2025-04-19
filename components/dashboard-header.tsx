import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
// import Image from 'next/image'

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 flex items-center justify-center gap-6">
        <h1 className="text-4xl font-bold text-white">吉安新茂</h1>
      </div>
      <div className="flex-1 flex items-end justify-center gap-3 h-16">
        <div className="w-10 h-10 bg-gray-500/50 rounded"></div>
        <div className="w-10 h-16 bg-[#495c7a] rounded"></div>
        <div className="w-10 h-14 bg-gray-500/50 rounded"></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-64">
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-8 bg-[#252b48] border-0 w-full"
          />
        </div>
        <div className="mt-2 space-y-3 w-full flex flex-col items-end">
          <div className="h-5 bg-gradient-to-r from-transparent to-gray-500 rounded w-3/4"></div>
          <div className="h-5 bg-gradient-to-r from-transparent to-gray-500 rounded w-full"></div>
          <div className="h-5 bg-gradient-to-r from-transparent to-gray-500 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  )
}
