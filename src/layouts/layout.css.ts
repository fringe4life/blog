import { variables } from "@/styles/variables.css";
import { style } from "@vanilla-extract/css";

export const body = style({
  backgroundColor: variables.color.bkg,
  color: variables.color.text,
  fontSize: variables.fs.base,
  lineHeight: variables.lh.base,
  fontWeight: variables.fw.regular,
  height: "100vh",
  minHeight: "100dvh",
  maxWidth: "2000px",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  WebkitFontSmoothing: "antialiased",
  fontFamily: [variables.font.inter, "sans-serif"],
  marginInline: "auto",
});

export const main = style({
  display: "grid",
  gap: variables.space.md,
  marginBlock: variables.space.lg,
  alignItems: "flex-start",
});
