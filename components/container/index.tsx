import { cn } from "@/lib/utils";

const Cantainer = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("min-w-[900px] max-w-[1200px] mx-auto h-full", className)}>{children}</div>
  );
};

export default Cantainer;
