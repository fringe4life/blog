import { style } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css.ts";

export const heroStyles = style({
  display: "grid",
  gap: variables.space.xs,
  justifyItems: "center",
});

export const imageStyles = style({
  border: `${variables.border.md} solid ${variables.color.accent}`,
  borderRadius: variables.rounded.full,
  width: "200px",
  height: "200px",
  objectFit: "cover",
});

export const textStyles = style({
  maxWidth: "32ch",
  textWrap: "balance",
  textAlign: "center",
});
