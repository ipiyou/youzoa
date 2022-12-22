export const darkMod = {
  draw: {
    background: "#121212",
    selector: "#FFFFFF",
    loadcolor: "#D9D9D9",
    setting: "#F1F1F1",
  },
  font: {
    titlecolor: "#E7E7E7",
    fontcolor: "#FFFFFF",
    infocolor: "#CDCDCD",
  },
};
export const whiteMod = {
  draw: {
    background: "#ffffff",
    selector: "#000000",
    loadcolor: "#444444",
    setting: "#333333",
  },
  font: {
    titlecolor: "#000000",
    fontcolor: "#000000",
    infocolor: "#000000",
  },
} as const;

export type ThemeType = typeof darkMod;
