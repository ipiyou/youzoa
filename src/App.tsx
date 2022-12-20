import { useState } from "react";
import { Routes } from "react-router";
import GlobalContext from "./style";
import FloatingSearchButton from "./components/floatsearch/FloatingSearchButton";
import Header from "./components/header";

function App() {
  const [mod, setMod] = useState<boolean>(false);

  const HeaderProps = { mod, setMod };

  return (
    <GlobalContext userMode={mod}>
      <FloatingSearchButton />
      <Header {...HeaderProps} />
      <Routes></Routes>
    </GlobalContext>
  );
}

export default App;
