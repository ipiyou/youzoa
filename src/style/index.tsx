import { Global, ThemeProvider } from "@emotion/react";
import global from "./global";
import ThemeSelector from "./theme";

interface ThemeType {
  children: React.ReactNode;
  userMode: boolean;
}

const GlobalContext = ({ children, userMode }: ThemeType) => {
  const theme = ThemeSelector(userMode);
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};

export default GlobalContext;
