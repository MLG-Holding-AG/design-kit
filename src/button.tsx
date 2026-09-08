import { cn } from "./cn";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "glass" | "ghost" | "danger";

const styles: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-[#3396ff] shadow-[0_4px_16px_rgba(10,132,255,0.25)]",
  glass: "glass-btn text-ink",
  ghost: "text-muted hover:text-ink hover:bg-white/5",
  danger: "bg-danger/15 text-danger border border-danger/25 hover:bg-danger/25"
};

/**
 * «klein» macht den Button optisch leichter (Abschnitts-Aktionen), behält aber
 * die 44px-Trefferfläche – auf der Baustelle wird einhändig mit Handschuh getippt.
 */
type Groesse = "normal" | "klein";

const groessen: Record<Groesse, string> = {
  normal: "px-4 py-2.5 text-sm",
  klein: "px-3 py-1.5 text-xs"
};

export function Button({
  variant = "glass",
  groesse = "normal",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; groesse?: Groesse }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none min-h-[44px]",
        groessen[groesse],
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
