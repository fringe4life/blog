import { style } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css";

export const connectContainer = style({
  display: "grid",
  placeItems: "center",
  position: "relative",
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      insetBlock: "20%",
      width: "100%",
      zIndex: -1,
      backgroundColor: variables.color.accent,
    },
  },
});

export const formWrapper = style({
  paddingInline: variables.space.md,
  marginBlock: variables.space.md,
  maxWidth: "1000px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: `0 ${variables.space.sm}`,
});

export const media = style({
  position: "relative",
  selectors: {
    "&::after": {
      content: '"👋"',
      fontSize: variables.fs.xl,
      backgroundColor: variables.color.bkg,
      border: `${variables.border.sm} solid ${variables.color.accent}`,
      borderRadius: variables.rounded.full,
      width: "1.6em",
      height: "1.6em",
      display: "grid",
      placeItems: "center",
      boxShadow: variables.shadow,
      position: "absolute",
      left: "-0.5em",
      top: "-0.5em",
    },
  },
});

export const connectImage = style({
  borderRadius: variables.rounded.sm,
  boxShadow: variables.shadow,
  objectFit: "cover",
  width: "200px",
  aspectRatio: "4 / 5",
});

export const contactForm = style({
  backgroundColor: variables.color.frg,
  borderRadius: variables.rounded.sm,
  padding: `${variables.space.sm} ${variables.space.md}`,
  boxShadow: variables.shadow,
  textWrap: "balance",
  maxWidth: "400px",
  marginBlock: "-10px",
  position: "relative",
  display: "grid",
  gap: variables.space["2xs"],
});

export const formLabel = style({
  display: "grid",
  gap: variables.space["3xs"],
  fontSize: variables.fs.sm,
  textTransform: "uppercase",
  color: variables.color.accent,
  fontWeight: variables.fw.bold,
});

export const formInput = style({
  padding: variables.space["2xs"],
  color: variables.color.text,
  backgroundColor: variables.color.frg,
  border: `${variables.border.sm} solid ${variables.color.accent}`,
  borderRadius: variables.rounded.sm,
  fontWeight: variables.fw.regular,
  transitionProperty: ["color", "opacity", "outline"],
  transitionDuration: variables.fast,
  transitionTimingFunction: variables.cubic,
  selectors: {
    "&::placeholder": {
      color: variables.color.text,
      opacity: 0.7,
    },
    "&:focus": {
      outline: `${variables.border.sm} solid ${variables.color.accent}`,
    },
  },
});
