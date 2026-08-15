import { createViewTransition } from "@vanilla-extract/css";
import { variables } from "@/styles/variables.css";
import {
  fadeIn,
  fadeOut,
  slideFromLeft,
  slideFromRight,
  slideToLeft,
  slideToRight,
} from "@/styles/keyframes.css";

export const paginationViewTransition = createViewTransition("pagination-list");

const fadeInAnimation = {
  name: fadeIn,
  duration: variables.slow,
  easing: variables.cubic,
  fillMode: "both",
};

const fadeOutAnimation = {
  name: fadeOut,
  duration: variables.slow,
  easing: variables.cubic,
  fillMode: "both",
};

const slideFromLeftAnimation = {
  name: slideFromLeft,
  duration: variables.slow,
  easing: variables.cubic,
  fillMode: "both",
};

const slideFromRightAnimation = {
  name: slideFromRight,
  duration: variables.slow,
  easing: variables.cubic,
  fillMode: "both",
};

const slideToLeftAnimation = {
  name: slideToLeft,
  duration: variables.slow,
  easing: variables.cubic,
  fillMode: "both",
};

const slideToRightAnimation = {
  name: slideToRight,
  duration: variables.slow,
  easing: variables.cubic,
  fillMode: "both",
};

export const paginationOffsetTransition = {
  forwards: {
    old: [fadeOutAnimation, slideToLeftAnimation],
    new: [fadeInAnimation, slideFromRightAnimation],
  },
  backwards: {
    old: [fadeOutAnimation, slideToRightAnimation],
    new: [fadeInAnimation, slideFromLeftAnimation],
  },
};
