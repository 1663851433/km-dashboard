"use client";

import { BarChart, ChevronRight, DollarSign, Handshake, Home, ShoppingCart } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/src/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: Home, label: "主页" },
  { href: "/purchase", icon: BarChart, label: "周采购面板汇总" },
  { href: "/rosinPrice", icon: DollarSign, label: "松香价格面板" },
  { href: "/artificialCollection", icon: Handshake, label: "人工收集" },
  { href: "/weeklyPurchase", icon: ShoppingCart, label: "周采购面板" },
  { href: "/weeklyPurchaseOld", icon: ShoppingCart, label: "周采购面板(旧)" },
];

export function DashboardSidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          `${
            isExpanded ? "w-16" : "w-3"
          } bg-[#252b48] flex flex-col items-center py-4 space-y-4 relative transition-all duration-300`,
          className
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
            isExpanded ? "opacity-0" : "opacity-100"
          }`}
        >
          <ChevronRight className="h-4 w-4 text-white/50" />
        </div>

        <div
          className={`transition-opacity ${
            isExpanded ? "opacity-100" : "opacity-0"
          } flex flex-col items-center space-y-2`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <TooltipRoot key={item.href}>
                <TooltipTrigger asChild>
                  <Link href={item.href}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-10 w-10 ${
                        pathname === item.href ? "bg-[#1a1f37]" : ""
                      } text-white`}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </TooltipRoot>
            );
          })}

          {/* <div className="mt-auto">
            <TooltipRoot>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
                  <Power className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                退出系统
              </TooltipContent>
            </TooltipRoot>
          </div> */}
        </div>
      </div>
    </TooltipProvider>
  );
}
