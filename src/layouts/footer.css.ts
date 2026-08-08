import { style } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css.ts";

export const footerStyles = style({
  backgroundColor: variables.color.frg,
  padding: `${variables.space.xs} ${variables.space.sm}`,
  boxShadow: variables.shadow,
  fontSize: variables.fs.xs,
  textWrap: "balance",
  textAlign: "center",
  display: "grid",
  placeItems: "center",
});
