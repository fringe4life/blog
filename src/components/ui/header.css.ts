import { style, styleVariants } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css.ts";

export const header = style({
  display: "flex",
  gap: variables.space["2xs"],
  alignItems: "baseline",
  textWrap: "balance",
  lineHeight: variables.lh.headings,
});

export const sizes = styleVariants({
  h1: { fontSize: variables.fs["2xl"] },
  h2: { fontSize: variables.fs.xl },
  h3: { fontSize: variables.fs.lg },
  h4: { fontSize: variables.fs.md },
  h5: { fontSize: variables.fs.sm },
  h6: { fontSize: variables.fs.xs },
});
