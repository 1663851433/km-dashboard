"use client";

import { cn } from "@/src/utils/utils";
import { useRouter } from "next/navigation";

import Logo from "@/src/assets/img/logo.png";

export default ({ className, ...props }: { className?: string }) => {
  const router = useRouter();

  return (
    <div
      className={cn("w-[192px] h-[68px] cursor-pointer", className)}
      onClick={() => router.push("/")}
      {...props}
    >
      <img className="w-full h-full" src={Logo.src} alt="logo" />
    </div>
  );
};
