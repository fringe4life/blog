import { container } from "@/styles/utilities.css";
import { variables } from "@/styles/variables.css";
import { style } from "@vanilla-extract/css";

export const blogHeroSpan = style({
  fontSize: variables.fs.sm,
  textTransform: "uppercase",
  color: variables.color.accent,
});

export const blogHeroText = style({
  textWrap: "balance",
  fontSize: variables.fs.sm,
  maxWidth: "45ch",
});

export const blogHeroImage = style({
  border: `${variables.border.sm} solid ${variables.color.accent}`,
  borderRadius: variables.rounded.full,
  width: "90px",
  height: "90px",
  objectFit: "cover",
});

const blogHero = style({
  display: "flex",
  gap: variables.space.xs,
  alignItems: "center",
});

export const blogHeroContent = style({
  display: "grid",
  gap: variables.space.xs,
  justifyItems: "start",
});

export const blogHeroContainer = style([container, blogHero]);
