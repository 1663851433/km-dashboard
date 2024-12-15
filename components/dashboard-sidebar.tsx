import { Home, BarChart, Users, Settings, Power } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function DashboardSidebar() {
  return (
    <div className="w-16 bg-[#252b48] flex flex-col items-center py-4 space-y-4">
      <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
        <Home className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
        <BarChart className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
        <Users className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
        <Settings className="h-5 w-5" />
      </Button>
      <div className="mt-auto">
        <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
          <Power className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

