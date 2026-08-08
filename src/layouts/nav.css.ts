import { style } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css.ts";

export const navStyles = style({
  backgroundColor: variables.color.frg,
  padding: `${variables.space.xs} ${variables.space.sm}`,
  boxShadow: variables.shadow,
});

export const listStyles = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: variables.space.sm,
});
