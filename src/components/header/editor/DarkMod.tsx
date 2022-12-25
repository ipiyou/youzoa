import styled from "@emotion/styled";
import { SettingType } from "../../../App";
import { Dispatch, SetStateAction } from "react";
import { css, keyframes } from "@emotion/react";
import { useAnimeState } from "../../../hooks/useAnimeState";

interface PropsType {
  mod: boolean | null;
  ModChange: () => void;
}

function DarkMod({ mod, ModChange }: PropsType) {
  return (
    <_Wrapper onClick={ModChange}>
      <_ModChangeCircle mod={mod} />
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.draw.setting};
  width: 70px;
  height: 35px;
`;

const _ModChangeCircle = styled.div<{ mod: boolean | null }>`
  width: 35px;
  height: 100%;
  margin-left: 35px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.draw.selector};
  animation: ${({ mod }) =>
    typeof mod !== "object" &&
    css`0.2s ${mod ? _Dark_KeyFrame : _White_KeyFrame} forwards`};
`;

const _Dark_KeyFrame = keyframes`
    0%{
        margin-left: 35px;
    }
    100%{
      margin-left: 0;
    }
`;

const _White_KeyFrame = keyframes`
    0%{
      margin-left: 0;
    }
    100%{
      margin-left: 35px;
    }
`;

export default DarkMod;
