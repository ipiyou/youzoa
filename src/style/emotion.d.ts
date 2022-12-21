import "@emotion/react";
import { darkMod, whiteMod, ThemeType } from "./theme";

declare module "@emotion/react" {
  interface Theme extends ThemeType {}
}
