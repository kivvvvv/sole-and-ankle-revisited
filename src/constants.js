export const COLORS = {
  white: "hsl(0, 0%, 100%)",
  gray: {
    100: "hsl(185, 5%, 95%)",
    300: "hsl(190, 5%, 80%)",
    500: "hsl(196, 4%, 60%)",
    700: "hsl(220, 5%, 40%)",
    900: "hsl(220, 3%, 20%)",
  },
  primary: "hsl(340, 65%, 47%)",
  secondary: "hsl(240, 60%, 63%)",
  dialogOverlay: "hsl(220, 6%, 40%, 0.8)",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  mobileMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  mobileAndDown: `max-width: calc(${BREAKPOINTS.mobileMax}/16 * 1rem)`,
  tabletAndDown: `max-width: calc(${BREAKPOINTS.tabletMax}/16 * 1rem)`,
  laptopAndDown: `max-width: calc(${BREAKPOINTS.laptopMax}/16 * 1rem)`,
};
