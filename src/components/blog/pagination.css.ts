import { variables } from "@/styles/variables.css";
import { style } from "@vanilla-extract/css";

export const pagination = style({
  paddingBlockStart: variables.fs.xl,
  display: "flex",
  flexWrap: "wrap",
  gap: variables.space.sm,
  justifySelf: "center",
});

export const paginationLink = style({
  selectors: {
    "&:not([aria-disabled='true']):hover": {
      opacity: 1,
    },
  },
});

const arrow = {
  color: variables.color.muted,
  display: "inline-block",
  transitionProperty: ["translate", "color"],
  transitionDuration: variables.slow,
  transitionTimingFunction: variables.glide,
};

export const previousArrow = style({
  ...arrow,
  selectors: {
    [`${paginationLink}:not([aria-disabled='true']):hover &`]: {
      color: variables.color.accent,
      translate: "-5px 0",
    },
    [`${paginationLink}:not([aria-disabled='true']):active &`]: {
      translate: "0 0",
    },
    [`${paginationLink}[aria-disabled='true'] &`]: {
      color: variables.color.disabled,
    },
  },
});

export const nextArrow = style({
  ...arrow,
  selectors: {
    [`${paginationLink}:not([aria-disabled='true']):hover &`]: {
      color: variables.color.accent,
      translate: "5px 0",
    },
    [`${paginationLink}:not([aria-disabled='true']):active &`]: {
      translate: "0 0",
    },
    [`${paginationLink}[aria-disabled='true'] &`]: {
      color: variables.color.disabled,
    },
  },
});
