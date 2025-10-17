"use client";

import { BarChart, ChevronRight, DollarSign, Handshake, Home, ShoppingCart } from "lucide-react";
import { useState } from "react";

import { cn } from "@/src/utils/utils";
import { Button, Tooltip } from "antd";
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

  return (
    <div
      className={cn(
        `w-16 bg-[#252b48] flex flex-col items-center py-4 space-y-4 relative transition-all duration-300`,
        className
      )}
    >
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-opacity duration-300 `}>
        <ChevronRight className="h-4 w-4 text-white/50" />
      </div>

      <div className={`transition-opacity flex flex-col items-center space-y-2`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Tooltip
              key={item.href}
              title={item.label}
              placement="right"
              className={cn(
                "w-[40px] h-[40px] rounded-[5px] flex justify-center items-center hover:bg-black/80",
                pathname == item.href ? "bg-black/80" : ""
              )}
            >
              <Link href={item.href}>
                <Button
                  type="text"
                  className={`h-10 w-10 !p-0 flex items-center justify-center text-white`}
                >
                  <Icon className="h-5 w-5" color="white" />
                </Button>
              </Link>
            </Tooltip>
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
  );
}
