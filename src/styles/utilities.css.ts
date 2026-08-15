import { style } from "@vanilla-extract/css";
import { variables } from "./variables.css.ts";

export const container = style({
  maxWidth: "1250px",
  width: "100%",
  marginInline: "auto",
  paddingInline: variables.space.md,
  alignSelf: "start",
});

export const containerInline = style({
  containerType: "inline-size",
});

export const gridWrapper = style({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
  gap: `${variables.space.lg} ${variables.space.xs}`,
});

export const rows = style({
  display: "grid",
  gap: variables.space.xs,
});

export const columns = style({
  display: "flex",
  flexWrap: "wrap",
  gap: variables.space.xs,
  alignItems: "baseline",
});

export const containerRows = style([container, rows]);
