import { variables } from "@/styles/variables.css";
import { style } from "@vanilla-extract/css";

export const blogMetadata = style({
  display: "grid",
  placeItems: "center",
  gap: variables.space.md,
});

export const blogMetadataHeader = style({
  width: "fit-content",
  maxWidth: "800px",
  marginInline: "auto",
  padding: variables.space.md,
  backgroundColor: variables.color.frg,
  display: "grid",
  gap: variables.space["2xs"],
});

export const blogMetadataImage = style({
  height: "min(600px, 50vh)",
  width: "100dvw",
  objectFit: "cover",
});

export const blogMetadataContent = style({
  textWrap: "pretty",
});
