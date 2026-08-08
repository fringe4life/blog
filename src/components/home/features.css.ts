import { style } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css.ts";

export const featuresStyles = style({
  backgroundColor: variables.color.muted,
  padding: variables.space.xl,
});

export const inner = style({
  display: "grid",
  gap: variables.space.lg,
  placeItems: "center",
  textAlign: "center",
});

export const item = style({
  display: "grid",
  placeItems: "center",
  gap: variables.space.xs,
  maxWidth: "30ch",
});
