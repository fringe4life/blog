import { style } from "@vanilla-extract/css";
import { variables } from "./variables.css";

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: variables.space.md,
});
