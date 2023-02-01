import { useState } from "react";
import { Route, Routes } from "react-router";
import GlobalContext from "./style";
import Header from "./components/header";
import ScrollPage from "./pages/ScrollPage";
import WatchSingle from "./pages/SingleVideo";
import styled from "@emotion/styled";

export interface SettingType {
  mod: boolean | null;
  bright: number;
  list: string;
  keyword: string;
}

function App() {
  const [user, setting] = useState<SettingType>({
    mod: null,
    bright: 0,
    list: "360 X 250",
    keyword: "",
  });

  return (
    <GlobalContext userMode={user.mod}>
      <Header user={user} setting={setting} />
      <MarginFromHeader>
        <Routes>
          <Route path="/" element={<ScrollPage user={user} />} />
          <Route path="/watch/:id" element={<WatchSingle user={user} />} />
        </Routes>
      </MarginFromHeader>
    </GlobalContext>
  );
}

const MarginFromHeader = styled.div`
  height: 100%;
  margin-left: 250px;
`;

export default App;
