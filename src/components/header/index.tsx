import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { SettingType } from "../../App";
import YouZoaIcon from "../header/YouZoaIcon";
import DarkMod from "./editor/DarkMod";
import EditorSpace from "./editor/EditorSpace";

interface PropsType {
  user: SettingType;
  setting: Dispatch<SetStateAction<SettingType>>;
}

function Header({ user, setting }: PropsType) {
  const ModChange = () => setting({ ...user, mod: !user.mod });
  return (
    <_Wrapper>
      <YouZoaIcon />
      <EditorSpace editName="DarkMod">
        <DarkMod />
      </EditorSpace>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 100%;
  border-right: 1px solid #000000;
  background-color: ${({ theme }) => theme.draw.background};
`;

export default Header;
