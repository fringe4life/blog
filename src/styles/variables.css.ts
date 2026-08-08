import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

export const variables = createGlobalThemeContract(
  {
    color: {
      bkg: null,
      frg: null,
      text: null,
      accent: null,
      muted: null,
      disabled: null,
    },
    font: {
      inter: null,
    },
    shadow: null,
    fs: {
      "2xs": null,
      xs: null,
      sm: null,
      base: null,
      md: null,
      lg: null,
      xl: null,
      "2xl": null,
      "3xl": null,
    },
    lh: {
      base: null,
      headings: null,
    },
    fw: {
      regular: null,
      bold: null,
    },
    space: {
      "4xs": null,
      "3xs": null,
      "2xs": null,
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      "2xl": null,
      "3xl": null,
    },
    rounded: {
      sm: null,
      md: null,
      full: null,
    },
    border: {
      sm: null,
      md: null,
    },
    fast: null,
    slow: null,
    cubic: null,
    smoothOut: null,
    glide: null,
  },
  (_value, path) => path.join("-"),
);

createGlobalTheme(":root", variables, {
  color: {
    bkg: "#f5f9f9",
    frg: "#fbfefe",
    text: "#262b2a",
    accent: "#a3b5b0",
    muted: "#ced5d3",
    disabled: "#b8c4c0",
  },
  shadow: "0 12px 12px hsl(163, 11%, 67%, 0.25)",
  font: {
    inter: "font-inter",
  },
  fs: {
    "2xs": "clamp(0.64rem, 0.6552rem + -0.0196cqi, 0.6513rem)",
    xs: "clamp(0.7813rem, 0.7747rem + 0.0326cqi, 0.8rem)",
    sm: "clamp(0.9375rem, 0.9158rem + 0.1087cqi, 1rem)",
    base: "clamp(1.125rem, 1.0815rem + 0.2174cqi, 1.25rem)",
    md: "clamp(1.35rem, 1.2761rem + 0.3696cqi, 1.5625rem)",
    lg: "clamp(1.62rem, 1.5041rem + 0.5793cqi, 1.9531rem)",
    xl: "clamp(1.9438rem, 1.7707rem + 0.8652cqi, 2.4413rem)",
    "2xl": "clamp(2.3325rem, 2.0823rem + 1.2511cqi, 3.0519rem)",
    "3xl": "clamp(2.7994rem, 2.4461rem + 1.7663cqi, 3.815rem)",
  },
  lh: {
    base: "1.4",
    headings: "1.1",
  },
  fw: {
    regular: "400",
    bold: "700",
  },
  space: {
    "4xs": "clamp(0.1875rem, 0.1875rem + 0cqi, 0.1875rem)",
    "3xs": "clamp(0.3125rem, 0.3125rem + 0cqi, 0.3125rem)",
    "2xs": "clamp(0.625rem, 0.6033rem + 0.1087cqi, 0.6875rem)",
    xs: "clamp(0.875rem, 0.8533rem + 0.1087cqi, 0.9375rem)",
    sm: "clamp(1.125rem, 1.0815rem + 0.2174cqi, 1.25rem)",
    md: "clamp(1.6875rem, 1.6223rem + 0.3261cqi, 1.875rem)",
    lg: "clamp(2.25rem, 2.163rem + 0.4348cqi, 2.5rem)",
    xl: "clamp(3.375rem, 3.2446rem + 0.6522cqi, 3.75rem)",
    "2xl": "clamp(4.5rem, 4.3261rem + 0.8696cqi, 5rem)",
    "3xl": "clamp(6.75rem, 6.4891rem + 1.3043cqi, 7.5rem)",
  },
  rounded: {
    sm: "0.25rem",
    md: "0.5rem",
    full: "100vmax",
  },
  border: {
    sm: "0.15em",
    md: "0.3em",
  },
  fast: "0.1s",
  glide:
    "linear(0, 0.013 1%, 0.051 2.2%, 0.404 9.8%, 0.51 12.6%, 0.602 15.5%, 0.683 18.7%, 0.754 22.2%, 0.813 26%, 0.861 30.2%, 0.9 34.8%, 0.931 40%, 0.972 52.7%, 0.992 70.2%, 1)",
  slow: "0.3s",
  cubic: "cubic-bezier(0.4, 0, 0.2, 1)",
  smoothOut:
    "linear(0, 0.49 7.4%, 0.864 15.3%, 1.005 19.4%, 1.12 23.7%, 1.206 28.1%, 1.267 32.8%, 1.296 36.4%, 1.311 40.2%, 1.313 44.2%, 1.301 48.6%, 1.252 56.9%, 1.105 74.4%, 1.048 82.5%, 1.011 91.1%, 1)",
});

globalStyle(":root", {
  colorScheme: "light",
});
