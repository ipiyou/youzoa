const ThemeSelector = (darkMod: boolean) => {
  const Theme = {
    darkMod: {
      background: "#121212",
      loadcolor: "#D9D9D9",
      titlecolor: "#000000",
      fontcolor: "#000000",
      infocolor: "#000000",
    },
    whiteMod: {
      background: "#ffffff",
      loadcolor: "#444444",
      titlecolor: "#E7E7E7",
      fontcolor: "#FFFFFF",
      infocolor: "#CDCDCD",
    },
  };
  return Theme[darkMod ? "darkMod" : "whiteMod"];
};

export default ThemeSelector;
