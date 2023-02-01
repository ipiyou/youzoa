export const darkMod = {
  draw: {
    background: "#121212",
    headerBack: "#222222",
    optionEvent: "#FFFFFF",
    loading: "#444444",
    optionBack: "#333333",
    scrollBar: "#555555",
    scrollTrack: "#c9c9c9",
  },
  font: {
    titlecolor: "#E7E7E7",
    fontcolor: "#FFFFFF",
    infocolor: "#CDCDCD",
  },
};
export const whiteMod = {
  draw: {
    background: "#fafafa",
    headerBack: "#FFFFFF",
    optionEvent: "#000000",
    loading: "#D9D9D9",
    optionBack: "#F1F1F1",
    scrollBar: "#b1b1b1",
    scrollTrack: "#e4e4e4",
  },
  font: {
    titlecolor: "#000000",
    fontcolor: "#000000",
    infocolor: "#000000",
  },
} as const;

export type ThemeType = typeof darkMod;
