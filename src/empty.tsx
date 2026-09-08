import { Card } from "./card";

/**
 * Leerzustand – Pflichtbestandteil jeder Liste (siehe CLAUDE.md Abschnitt 3, Punkt 12).
 * Sagt, was fehlt, und bietet die nächste Handlung an.
 */
export function EmptyState({
  titel,
  text,
  aktion
}: {
  titel: string;
  text: string;
  aktion?: React.ReactNode;
}) {
  return (
    <Card className="py-12 text-center">
      <p className="text-sm font-medium text-ink">{titel}</p>
      <p className="mt-1.5 text-sm text-muted max-w-md mx-auto">{text}</p>
      {aktion && <div className="mt-5 flex justify-center">{aktion}</div>}
    </Card>
  );
}
