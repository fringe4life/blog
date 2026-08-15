import { globalStyle, style } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css";

export const blogContent = style({
  maxWidth: "1250px",
  width: "100%",
  marginInline: "auto",
  paddingInline: variables.space.md,
  display: "grid",
  justifyContent: "center",
  gap: variables.space.xs,
});

globalStyle(`${blogContent} pre`, {
  overflowX: "auto",
  maxWidth: "100%",
  minWidth: 0,
  marginBlock: variables.space.sm,
  padding: variables.space.md,
  borderRadius: variables.rounded.md,
  fontSize: variables.fs.sm,
  lineHeight: variables.lh.base,
  border: `${variables.border.sm} solid ${variables.color.muted}`,
});

globalStyle(`${blogContent} pre code`, {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fontSize: "inherit",
});

globalStyle(`${blogContent} :not(pre) > code`, {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fontSize: "0.9em",
  padding: `0.15em ${variables.space["4xs"]}`,
  borderRadius: variables.rounded.sm,
  background: variables.color.muted,
  color: variables.color.text,
});

globalStyle(`${blogContent} code.math-inline`, {
  padding: `0.1em ${variables.space["4xs"]}`,
  background: variables.color.frg,
  border: `${variables.border.sm} solid ${variables.color.muted}`,
});

globalStyle(
  `${blogContent} pre:has(code.math-display), ${blogContent} pre:has(code.language-math)`,
  {
    textAlign: "center",
  },
);
