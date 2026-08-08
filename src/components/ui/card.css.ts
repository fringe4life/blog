import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { variables } from "@/styles/variables.css.ts";
import { rows } from "@/styles/utilities.css.ts";
import { rise } from "@/styles/keyframes.css";

export const card = style({
  display: "grid",
  gap: 0,
  position: "relative",
  backgroundColor: variables.color.frg,
  borderRadius: variables.rounded.md,
  boxShadow: variables.shadow,
  transitionProperty: ["scale", "opacity"],
  transitionDuration: variables.slow,
  transitionTimingFunction: variables.cubic,
  animation: `${rise} ${variables.slow} ${variables.smoothOut} both`,
  animationDelay: calc.multiply(`sibling-index()`, `${variables.fast}`),
  selectors: {
    "&:hover": {
      scale: "1.002",
      opacity: 0.9,
    },
  },
});

export const cardLayout = styleVariants({
  blog: {
    gridRow: "span 4",
    gridTemplateRows: "subgrid",
  },
  project: {
    gridRow: "span 3",
    gridTemplateRows: "subgrid",
  },
});

globalStyle(`${card} p`, {
  maxWidth: "450px",
  textWrap: "pretty",
});

export const cardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  aspectRatio: "16 / 9",
  borderRadius: `${variables.rounded.md} ${variables.rounded.md} 0 0`,
});

export const cardBody = style([
  rows,
  {
    padding: `${variables.space.sm} ${variables.space.xs} ${variables.space.xs}`,
    display: "grid",
  },
]);

export const cardBodyLayout = styleVariants({
  blog: {
    gridRow: "2 / 5",
    gridTemplateRows: "subgrid",
  },
  project: {
    gridRow: "2 / 4",
    gridTemplateRows: "subgrid",
  },
});
