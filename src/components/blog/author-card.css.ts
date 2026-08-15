import { style } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css";
import { blogHeroContainer } from "./header.css";
const blogBio = style({
  backgroundColor: variables.color.frg,
  padding: variables.space.sm,
  borderRadius: variables.rounded.sm,
  maxWidth: "fit-content",
});

export const blogBioContent = style([blogHeroContainer, blogBio]);
