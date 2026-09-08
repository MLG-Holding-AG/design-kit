import { Card } from "./card";
import { cn } from "./cn";

type Tone = "neutral" | "ok" | "warn" | "danger";

const tones: Record<Tone, string> = {
  neutral: "text-ink",
  ok: "text-ok",
  warn: "text-warn",
  danger: "text-danger"
};

export function Stat({
  label,
  value,
  hint,
  tone = "neutral"
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: Tone;
}) {
  return (
    <Card>
      <p className="text-xs font-medium text-muted">{label}</p>
      <p className={cn("mt-1.5 text-2xl font-semibold tracking-tight", tones[tone])}>{value}</p>
      {hint && <p className="mt-1 text-xs text-muted/80">{hint}</p>}
    </Card>
  );
}
