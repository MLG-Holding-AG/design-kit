/**
 * Design-Tokens – geteilt zwischen BASALT und ONYX.
 * Einzige Quelle der Wahrheit für Farben. Nie im App-Code hartkodieren.
 */
export const tokens = {
  colors: {
    base: "#0A0A0B",
    panel: "#1C1C1E",
    panel2: "#2C2C2E",
    panel3: "#3A3A3C",
    line: "rgba(255,255,255,0.08)",
    ink: "#F5F5F7",
    muted: "#98989F",
    accent: "#0A84FF",
    ok: "#30D158",
    warn: "#FF9F0A",
    danger: "#FF453A"
  },
  radius: { md: "12px", lg: "16px" },
  motion: { fast: "150ms", base: "200ms", slow: "250ms" }
} as const;

/** Tailwind-Theme-Fragment, damit jede App dieselben Farben bekommt. */
export const tailwindTheme = {
  colors: tokens.colors,
  borderRadius: { xl2: tokens.radius.lg },
  fontFamily: {
    sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Text", "Inter", "Segoe UI", "sans-serif"]
  }
};
