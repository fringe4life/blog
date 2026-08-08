// reset.css.ts
import { globalStyle } from "@vanilla-extract/css";
import { variables } from "./variables.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle('ul[role="list"], ol[role="list"]', {
  listStyle: "none",
});

globalStyle("button", {
  cursor: "pointer",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
  maxWidth: "65ch",
});

globalStyle("img, picture, video, canvas, svg", {
  maxWidth: "100%",
  display: "block",
});

globalStyle("svg", {
  pointerEvents: "none",
});

globalStyle("::selection", {
  backgroundColor: variables.color.accent,
  color: variables.color.text,
});

globalStyle("h1", {
  fontSize: variables.fs["2xl"],
});
globalStyle("h2", {
  fontSize: variables.fs.xl,
});
globalStyle("h3", {
  fontSize: variables.fs.lg,
});
globalStyle("h4", {
  fontSize: variables.fs.md,
});
globalStyle("h5", {
  fontSize: variables.fs.sm,
});
globalStyle("h6", {
  fontSize: variables.fs.xs,
});

globalStyle("time", {
  color: variables.color.accent,
  textTransform: "uppercase",
  fontSize: variables.fs.xs,
});
