import { cn } from "./cn";

/** Kostenampel: zeigt Ausschöpfung eines Budgets. */
export function Ampelbalken({ prozent, className }: { prozent: number; className?: string }) {
  const anteil = Math.min(Math.max(prozent, 0), 130);
  const farbe = prozent > 100 ? "bg-danger" : prozent > 90 ? "bg-warn" : "bg-ok";
  return (
    <div className={cn("h-1.5 w-full rounded-full bg-panel3 overflow-hidden", className)}>
      <div className={cn("h-full rounded-full transition-all duration-500", farbe)} style={{ width: `${Math.min(anteil, 100)}%` }} />
    </div>
  );
}
