// .blog-bio {
// 	background-color: var(--color-frg);
// 	max-width: fit-content;
// 	padding: var(--space-sm);
// 	border-radius: var(--rounded-sm);
// }

import { style } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css";
import { blogHeroContainer } from "./header.css";
const blogBio = style({
  backgroundColor: variables.color.frg,
  maxWidth: "fit-content",
  padding: variables.space.sm,
  borderRadius: variables.rounded.sm,
});

export const blogBioContent = style([blogHeroContainer, blogBio]);
