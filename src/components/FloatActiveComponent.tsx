import styled from "@emotion/styled";
import useFloating from "../hooks/useFloating";

interface PropsType {
  initXY: [number, number];
  minXY: [number, number];
  maxXY: [number, number];
  children: React.ReactNode;
}

function FloatActiiveComponent({ initXY, minXY, maxXY, children }: PropsType) {
  const [location, animation, onMouseDown] = useFloating(initXY, minXY, maxXY);
  return <_Wrapper {...location}>{children}</_Wrapper>;
}

const _Wrapper = styled.div<{ x: number; y: number }>`
  position: fixed;
  transition: transform;
  transform: translate3d(${({ x, y }) => `${x}px,${y}px,0`});
`;

export default FloatActiiveComponent;
