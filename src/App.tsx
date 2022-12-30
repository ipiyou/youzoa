import { useState } from "react";
import { Route, Routes } from "react-router";
import GlobalContext from "./style";
import FloatingSearchButton from "./components/floatsearch/FloatingSearchButton";
import Header from "./components/header";
import ScrollPage from "./pages/ScrollPage";

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
    list: "360 X 250",
    video: "420 X 300",
  });

  const UseingProps = { user };
  const SetterProps = { user, setting };

  return (
    <GlobalContext userMode={user.mod}>
      <FloatingSearchButton {...UseingProps} />
      <Header {...SetterProps} />
      <Routes>
        <Route path="/" element={<ScrollPage {...UseingProps} />} />
      </Routes>
    </GlobalContext>
  );
}

export default App;
