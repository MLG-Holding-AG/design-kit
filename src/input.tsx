import { cn } from "./cn";
import { InputHTMLAttributes } from "react";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl bg-panel2 border border-line px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60",
        "focus:border-accent/50 focus:bg-panel transition-colors duration-200 outline-none min-h-[44px]",
        className
      )}
      {...props}
    />
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs font-medium text-muted mb-1.5">{children}</label>;
}
