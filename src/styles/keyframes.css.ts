import { createGlobalVar, globalStyle, keyframes } from "@vanilla-extract/css";

const paginationSlideDistance = createGlobalVar("pagination-slide-distance");

globalStyle(":root", {
  vars: {
    [paginationSlideDistance]: "calc(100vw + 60px)",
  },
  "@media": {
    "(min-width: 768px)": {
      vars: {
        [paginationSlideDistance]: "60px",
      },
    },
  },
});

export const rise = keyframes({
  from: {
    translate: "0 -10px",
  },
  to: {
    translate: "0 0",
  },
});

export const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const slideFromLeft = keyframes({
  from: {
    transform: `translateX(calc(-1 * ${paginationSlideDistance}))`,
  },
  to: {
    transform: "translateX(0)",
  },
});

export const slideFromRight = keyframes({
  from: {
    transform: `translateX(${paginationSlideDistance})`,
  },
  to: {
    transform: "translateX(0)",
  },
});

export const slideToLeft = keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: `translateX(calc(-1 * ${paginationSlideDistance}))`,
  },
});

export const slideToRight = keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: `translateX(${paginationSlideDistance})`,
  },
});
