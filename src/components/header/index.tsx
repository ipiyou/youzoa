import styled from "@emotion/styled";
import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { SettingType } from "../../App";
import YouZoaIcon from "../header/YouZoaIcon";
import BrightRange from "./editor/BrightRange";
import DarkMod from "./editor/DarkMod";
import EditorSpace from "./editor/EditorSpace";
import SizeSelect from "./editor/SizeSelect";

interface PropsType {
  user: SettingType;
  setting: Dispatch<SetStateAction<SettingType>>;
}

function Header({ user, setting }: PropsType) {
  const { mod, bright, list, video } = user;

  const ModChange = () => setting({ ...user, mod: !user.mod });
  const BrightChange = (e: ChangeEvent<HTMLInputElement>) =>
    setting({ ...user, bright: Number(e.target.value) });
  const ListChange = (text: string) => {
    setting({ ...user, list: text });
  };

  const DarkModProps = { ModChange, mod };
  const BrightProps = { BrightChange, bright };

  return (
    <_Wrapper>
      <YouZoaIcon />
      <EditorSpace editName="DarkMod">
        <DarkMod {...DarkModProps} />
      </EditorSpace>
      <EditorSpace editName="Brightness">
        <BrightRange {...BrightProps} />
      </EditorSpace>
      <EditorSpace editName="List Size">
        <SizeSelect
          selected={list}
          List={["240 X 360", "420 X 720"]}
          SizeChange={ListChange}
        />
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
