export const darkMod = {
  draw: {
    background: "#121212",
    loadcolor: "#D9D9D9",
  },
  font: {
    titlecolor: "#000000",
    fontcolor: "#000000",
    infocolor: "#000000",
  },
};
export const whiteMod = {
  draw: {
    background: "#ffffff",
    loadcolor: "#444444",
  },
  font: {
    titlecolor: "#E7E7E7",
    fontcolor: "#FFFFFF",
    infocolor: "#CDCDCD",
  },
} as const;

export type ThemeType = typeof darkMod;
