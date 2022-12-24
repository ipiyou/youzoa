import { useState } from "react";
import { Routes } from "react-router";
import GlobalContext from "./style";
import FloatingSearchButton from "./components/floatsearch/FloatingSearchButton";
import Header from "./components/header";

export interface SettingType {
  mod: boolean;
  bright: number;
  list: number;
  vedio: number;
}

function App() {
  const [user, setting] = useState<SettingType>({
    mod: false,
    bright: 0,
    list: 0,
    vedio: 0,
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
