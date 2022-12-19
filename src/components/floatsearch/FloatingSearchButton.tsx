import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import useFloating from "../../hooks/useFloating";
import { SearchIcon } from "../../assets";

function FloatingSearchButton() {
  const [location, animation, onMouseDown] = useFloating({
    width: 50,
    height: 50,
  });

  console.log(animation);
  return (
    <_Wrapper {...location}>
      {<_InputKeyWord animation={animation} />}
      <_IconWrapper onMouseDown={onMouseDown} img={SearchIcon} />
    </_Wrapper>
  );
}

const _Wrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  display: flex;
  background-color: black;
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

const _InputKeyWord = styled.input<{ animation: boolean }>`
  width: 0px;
  outline: 0;
  color: black;
  font-size: 16px;
  display: block;
  border: 1px solid black;
  animation: ${({ animation }) =>
      animation ? GainWidth_Keyframes : RemoveInput}
    1s forwards;
  animation-fill-mode: forwards;
`;

const _IconWrapper = styled.div<{ img: string }>`
  width: 50px;
  height: 50px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 25px;
`;

export default FloatingSearchButton;
