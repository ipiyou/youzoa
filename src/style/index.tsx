import { Global, ThemeProvider } from "@emotion/react";
import { darkMod, whiteMod } from "./theme";
import global from "./global";

interface ThemeType {
  children: React.ReactNode;
  userMode: boolean;
}

const GlobalContext = ({ children, userMode }: ThemeType) => {
  return (
    <ThemeProvider theme={userMode ? darkMod : whiteMod}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};

export default GlobalContext;
