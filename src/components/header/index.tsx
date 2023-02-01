import styled from "@emotion/styled";
import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { SettingType } from "../../App";
import YouZoaIcon from "../header/YouZoaIcon";
import BrightRange from "./editor/BrightRange";
import DarkMod from "./editor/DarkMod";
import EditorSpace from "./editor/EditorSpace";
import SearchInput from "./editor/SearchVIdeo";
import SizeSelect from "./editor/SizeSelect";

interface PropsType {
  user: SettingType;
  setting: Dispatch<SetStateAction<SettingType>>;
}

function Header({ user, setting }: PropsType) {
  const { mod, bright, list, keyword } = user;

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
          value={keyword}
          KeyWordChange={(e) => setting({ ...user, keyword: e.target.value })}
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
