import { useState } from "react";
import { Routes } from "react-router";
import GlobalContext from "./style";
import FloatingSearchButton from "./components/floatsearch/FloatingSearchButton";
import Header from "./components/header";

export interface SettingType {
  mod: boolean | null;
  bright: number;
  list: string;
  video: string;
}

function App() {
  const [user, setting] = useState<SettingType>({
    mod: null,
    bright: 0,
    list: "240 X 600",
    video: "240 X 600",
  });

  const SearchProps = { user };
  const HeaderProps = { user, setting };

  return (
    <GlobalContext userMode={user.mod}>
      <FloatingSearchButton {...SearchProps} />
      <Header {...HeaderProps} />
      <Routes></Routes>
    </GlobalContext>
  );
}

export default App;
