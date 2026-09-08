import { cn } from "./cn";
import { SelectHTMLAttributes } from "react";

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full appearance-none rounded-xl bg-panel2 border border-line px-3.5 py-2.5 text-sm text-ink",
        "focus:border-accent/50 focus:bg-panel transition-colors duration-200 outline-none min-h-[44px]",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
