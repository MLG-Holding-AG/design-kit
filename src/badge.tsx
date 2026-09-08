import { cn } from "./cn";
import { HTMLAttributes } from "react";

type Status = "ok" | "warn" | "danger" | "neutral" | "ki";

const styles: Record<Status, string> = {
  ok: "bg-ok/15 text-ok border-ok/25",
  warn: "bg-warn/15 text-warn border-warn/25",
  danger: "bg-danger/15 text-danger border-danger/25",
  neutral: "bg-white/5 text-muted border-line",
  ki: "bg-accent/15 text-accent border-accent/25"
};

export function Badge({
  status = "neutral",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { status?: Status }) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", styles[status], className)}
      {...props}
    />
  );
}
