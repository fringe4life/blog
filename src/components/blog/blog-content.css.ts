import { style } from "@vanilla-extract/css";
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
