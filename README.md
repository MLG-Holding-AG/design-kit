# @mlg/design-kit

Design-Tokens und Basiskomponenten der MLG-Gruppe, geteilt von **ONYX**, **BASALT** und **OPAL**.
Einzige Quelle der Wahrheit für Farben, Radien, Motion und die Grundbausteine (Button, Card,
Badge, Input, Select, Stat, EmptyState, Ampelbalken) nach dem Design-Manifest.

## Herkunft

Übernommen am 08.09.2026 aus `basalt/packages/ui` (dort `@basalt/ui` 0.1.0), Inhalt von `src/`
byte-identisch. Einzige Änderungen: Paketname, `files`, Peer `react ^18 || ^19`.
Ab diesem Tag ist die BASALT-Kopie eingefroren; Änderungen nur noch hier, mit Version und Tag.

## Einbinden (ohne Registry, per Git)

```json
"dependencies": { "@mlg/design-kit": "git+https://github.com/MLG-Holding-AG/design-kit.git#v0.1.0" }
```

Reine TypeScript-Quelle: der Konsument kompiliert mit (Next.js: `transpilePackages: ["@mlg/design-kit"]`),
Tailwind bekommt `theme.extend = tailwindTheme` aus `src/tokens.ts` und den Pfad `src/**/*.{ts,tsx}` als
`content`; die Basis-Styles kommen über `import "@mlg/design-kit/src/styles.css"`.

## Regeln

- Farben nie im App-Code hartkodieren – nur Tokens.
- Glasoptik nur für schwebende Ebenen (Sidebar, Modals, Toolbar, Buttons).
- Jede Änderung = neue Version + Git-Tag; Konsumenten heben die Version bewusst an.
