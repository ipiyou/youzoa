import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import useFloating from "../../hooks/useFloating";
import { SearchIcon } from "../../assets";
import { SettingType } from "../../App";

interface PropsType {
  user: SettingType;
}

function FloatingSearchButton({ user }: PropsType) {
  const [location, animation, onMouseDown] = useFloating({
    width: 50,
    height: 50,
  });

  const IconProps = { onMouseDown };

  return (
    <_Wrapper {...location}>
      {<_InputKeyWord animation={animation} />}
      <_SearchIcon {...IconProps} />
    </_Wrapper>
  );
}

const _Wrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  z-index: 100;
  display: flex;
  background-color: ${({ theme }) => theme.draw.selector};
  border-radius: 100px;
  transform: translate3d(${({ x, y }) => `${x}px,${y}px,0`});
`;

const GainWidth_Keyframes = keyframes`
    0%{
        width: 0px;
        border: 1px solid black;
    }
    100%{
        width: 200px;
        padding: 0 20px;
        border-radius: 50px 0 0 50px;
    }
`;

const RemoveInput = keyframes`
    0%{
        width: 200px;
        padding: 0 20px;
    }
    100%{
        width: 0px;
        border: 0;
        padding: 0;
    }
`;

const _InputKeyWord = styled.input<{ animation: boolean | null }>`
  width: 0px;
  border: 0;
  outline: 0;
  border-radius: 50px 0 0 50px;
  font-size: 16px;
  background-color: #d9d9d9;
  animation: ${({ animation }) =>
    typeof animation !== "object" &&
    css`1s ${animation ? GainWidth_Keyframes : RemoveInput} forwards`};
  animation-fill-mode: forwards;
`;

const _SearchIcon = styled(SearchIcon)`
  width: 50px;
  height: 50px;
  padding: 10px;
  path {
    fill: ${({ theme }) => theme.draw.background};
  }
`;

export default FloatingSearchButton;
