import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css.ts";
import { card } from "./card.css.ts";

const localBkg = createVar();
const localBorder = createVar();
const localColor = createVar();
const localFontSize = createVar();
const localPadding = createVar();

export const link = style({
  vars: {
    [localBkg]: variables.color.accent,
    [localBorder]: `${variables.border.sm} solid ${variables.color.accent}`,
    [localColor]: variables.color.bkg,
    [localFontSize]: variables.fs.sm,
    [localPadding]: `${variables.space["3xs"]} ${variables.space.xs}`,
  },
  userSelect: "none",
  background: localBkg,
  border: localBorder,
  borderRadius: variables.rounded.sm,
  color: localColor,
  fontSize: localFontSize,
  fontWeight: variables.fw.bold,
  padding: localPadding,
  textWrap: "pretty",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  gap: variables.space.sm,
  transition: `all ${variables.slow} ${variables.cubic}`,
  selectors: {
    "&:not([aria-disabled='true']):hover": {
      opacity: 0.7,
    },
    "&[aria-disabled='true']": {
      cursor: "not-allowed",
    },
    "&:focus": {
      outline: "transparent",
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 0.1em ${variables.color.bkg}, 0 0 0 0.3em ${variables.color.accent}`,
    },
  },
});

export const variants = styleVariants({
  // eslint-disable-next-line vanilla-extract/no-empty-style-blocks
  primary: {},
  secondary: {
    vars: {
      [localBkg]: "transparent",
      [localBorder]: `${variables.border.sm} solid ${variables.color.accent}`,
      [localColor]: variables.color.accent,
    },
  },
  ghost: {
    vars: {
      [localBkg]: "transparent",
      [localBorder]: "none",
      [localColor]: variables.color.text,
      [localPadding]: variables.space["4xs"],
    },
  },
  icon: {
    vars: {
      [localBkg]: "transparent",
      [localBorder]: "none",
      [localColor]: variables.color.accent,
      [localPadding]: variables.space["4xs"],
    },
    selectors: {
      "&:not([aria-disabled='true']):hover": {
        vars: {
          [localColor]: variables.color.text,
        },
      },
    },
  },
});

export const disabledVariants = styleVariants({
  primary: {
    vars: {
      [localBkg]: variables.color.disabled,
      [localBorder]: `${variables.border.sm} solid ${variables.color.disabled}`,
      [localColor]: variables.color.bkg,
    },
  },
  secondary: {
    vars: {
      [localBkg]: "transparent",
      [localBorder]: `${variables.border.sm} solid ${variables.color.disabled}`,
      [localColor]: variables.color.disabled,
    },
  },
  ghost: {
    vars: {
      [localBkg]: "transparent",
      [localBorder]: "none",
      [localColor]: variables.color.disabled,
    },
  },
  icon: {
    vars: {
      [localBkg]: "transparent",
      [localBorder]: "none",
      [localColor]: variables.color.disabled,
    },
  },
});

/** Full-card hit area when Link sits inside a card */
export const cardStretch = style({
  selectors: {
    [`${card} &:hover`]: {
      opacity: 1,
    },
    [`${card} &::after`]: {
      content: '""',
      position: "absolute",
      inset: 0,
    },
  },
});
