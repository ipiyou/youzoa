import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { SettingType } from "../../App";
import YouZoaIcon from "../header/YouZoaIcon";
import BrightRange from "./editor/BrightRange";
import DarkMod from "./editor/DarkMod";
import EditorSpace from "./editor/EditorSpace";

interface PropsType {
  user: SettingType;
  setting: Dispatch<SetStateAction<SettingType>>;
}

function Header({ user, setting }: PropsType) {
  const { mod, bright, list, video } = user;
  const ModChange = () => setting({ ...user, mod: !user.mod });

  const DarkModProps = { ModChange, mod };
  return (
    <_Wrapper>
      <YouZoaIcon />
      <EditorSpace editName="DarkMod">
        <DarkMod {...DarkModProps} />
      </EditorSpace>
      <EditorSpace editName="Brightness">
        <BrightRange />
      </EditorSpace>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.draw.headerBack};
`;

export default Header;
