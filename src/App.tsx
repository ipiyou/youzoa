import { useState } from "react";
import { Route, Routes } from "react-router";
import GlobalContext from "./style";
import FloatingSearchButton from "./components/floatsearch/FloatingSearchButton";
import Header from "./components/header";
import ScrollPage from "./pages/ScrollPage";
import WatchSingle from "./pages/SingleVideo";
import styled from "@emotion/styled";
import FloatActiiveComponent from "./components/FloatActiveComponent";

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
    video: "Basic Mode",
  });

  const UseingProps = { user };
  const SetterProps = { user, setting };

  return (
    <GlobalContext userMode={user.mod}>
      <FloatActiiveComponent
        width="50px"
        height="50px"
        initXY={[0, 0]}
        minXY={[0, 0]}
        maxXY={[1280, 780]}
        childrenElement={[FloatingSearchButton, UseingProps]}
      />

      <Header {...SetterProps} />
      <MarginFromHeader>
        <Routes>
          <Route path="/" element={<ScrollPage {...UseingProps} />} />
          <Route path="/watch/:id" element={<WatchSingle {...UseingProps} />} />
        </Routes>
      </MarginFromHeader>
    </GlobalContext>
  );
}

const MarginFromHeader = styled.div`
  margin-left: 250px;
`;

export default App;
