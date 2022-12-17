import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import useFloating from "../../hooks/useFloating";
import { SearchIcon } from "../../assets";

function FloatingSearchButton() {
  const [location, onMouseDown] = useFloating({ width: 50, height: 50 });

  return (
    <_Wrapper {...location}>
      <_InputKeyWord />
      <_IconWrapper onMouseDown={onMouseDown} img={SearchIcon}></_IconWrapper>
    </_Wrapper>
  );
}

const _Wrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  transform: translate3d(${({ x, y }) => `${x}px,${y}px,0`});
`;

const _InputKeyWord = styled.input`
  display: none;
`;

const GainWidth_Keyframes = keyframes`
    
`;

const _IconWrapper = styled.div<{ img: string }>`
  width: 50px;
  height: 50px;
  background-color: black;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FloatingSearchButton;
