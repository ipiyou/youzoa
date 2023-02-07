import { useState } from "react";
import { Route, Routes } from "react-router";
import GlobalContext from "./style";
import Header from "./components/header";
import ScrollPage from "./pages/ScrollPage";
import WatchSingle from "./pages/WatchSingle";
import styled from "@emotion/styled";
import useCallVideo from "./hooks/useCallVideo";

export interface SettingType {
  mod: boolean | null;
  bright: number;
  list: string;
  keyword: string;
}

function App() {
  const [user, setting] = useState<SettingType>({
    mod: null,
    bright: 100,
    list: "360 X 250",
    keyword: "",
  });

  const { YouTube, isLoading, CallNextYoutube } = useCallVideo(user.keyword);

  return (
    <GlobalContext userMode={user.mod}>
      <_WindowBright bright={user.bright}>
        <Header
          user={user}
          setting={setting}
          CallNextYoutube={CallNextYoutube}
        />
        <_MarginFromHeader>
          <Routes>
            <Route
              path="/"
              element={
                <ScrollPage
                  user={user}
                  YouTube={YouTube}
                  isLoading={isLoading}
                  CallNextYoutube={CallNextYoutube}
                />
              }
            />
            <Route
              path="search/:id"
              element={
                <ScrollPage
                  user={user}
                  YouTube={YouTube}
                  isLoading={isLoading}
                  CallNextYoutube={CallNextYoutube}
                />
              }
            />
            <Route path="watch/:id" element={<WatchSingle user={user} />} />
          </Routes>
        </_MarginFromHeader>
      </_WindowBright>
    </GlobalContext>
  );
}

const _MarginFromHeader = styled.div`
  height: 100%;
  margin-left: 250px;
`;

const _WindowBright = styled.div<{ bright: number }>`
  width: 100%;
  height: 100%;
  opacity: ${({ bright }) => bright + "%"};
  background-color: black;
`;

export default App;
