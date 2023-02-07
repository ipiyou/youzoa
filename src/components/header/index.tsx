import styled from "@emotion/styled";
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReSponse } from "../../apis/GetVideoList";
import { SettingType } from "../../App";
import YouZoaIcon from "../header/YouZoaIcon";
import BrightRange from "./editor/BrightRange";
import DarkMod from "./editor/DarkMod";
import EditorSpace from "./editor/EditorSpace";
import SearchInput from "./editor/SearchInput";
import SizeSelect from "./editor/SizeSelect";

interface PropsType {
  user: SettingType;
  setting: Dispatch<SetStateAction<SettingType>>;
  CallNextYoutube: (
    option?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<ReSponse, unknown>>;
}

function Header({ user, setting, CallNextYoutube }: PropsType) {
  const [search, setSearch] = useState<string>("");
  const { mod, bright, list } = user;
  const Navigate = useNavigate();

  return (
    <_Wrapper>
      <YouZoaIcon />
      <EditorSpace editName="DarkMod">
        <DarkMod
          mod={mod}
          ModChange={() => setting({ ...user, mod: !user.mod })}
        />
      </EditorSpace>
      <EditorSpace editName="Brightness">
        <BrightRange
          bright={bright}
          BrightChange={(e) =>
            setting({ ...user, bright: Number(e.target.value) })
          }
        />
      </EditorSpace>
      <EditorSpace editName="List Size">
        <SizeSelect
          selected={list}
          List={["240 X 160", "360 X 250", "520 X 400"]}
          SizeChange={(text: string) => setting({ ...user, list: text })}
        />
      </EditorSpace>
      <EditorSpace editName="Search">
        <SearchInput
          value={search}
          KeyWordChange={(e) => setSearch(e.target.value)}
          onEnterInput={(e) => {
            e.preventDefault();
            setting({ ...user, keyword: search });
            Navigate("search/" + search);
            CallNextYoutube()
          }}
        />
      </EditorSpace>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 250px;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.draw.headerBack};
`;

export default Header;
