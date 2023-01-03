import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { cloneElement } from "react";
import { SettingType } from "../App";
import useFloating from "../hooks/useFloating";

type UserProps = { user: SettingType };

interface ElementPropsType {
  user: SettingType;
  animation: boolean | null;
  onMouseDown: (fix: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

interface PropsType {
  width?: string;
  height: string;
  initXY: [number, number];
  minXY: [number, number];
  maxXY: [number, number];
  childrenElement: [
    ({ user, animation, onMouseDown }: ElementPropsType) => JSX.Element,
    UserProps
  ];
}

function FloatActiiveComponent({
  width,
  height,
  initXY,
  minXY,
  maxXY,
  childrenElement,
}: PropsType) {
  const [location, animation, onMouseDown] = useFloating(initXY, minXY, maxXY);
  const [FloatingComponent, FloatProps] = childrenElement;
  const SizeProps = { width, height };
  const FloatLocationProps = { animation, onMouseDown };
  return (
    <_Wrapper {...location} {...SizeProps}>
      <FloatingComponent {...FloatProps} {...FloatLocationProps} />
    </_Wrapper>
  );
}

const _Wrapper = styled.div<{
  x: number;
  y: number;
  width?: string;
  height: string;
}>`
  ${({ width, height }) =>
    css`
      width: ${width};
      height: ${height};
    `}
  position: fixed;
  z-index: 100;
  transition: transform;
  transform: translate3d(${({ x, y }) => `${x}px,${y}px,0`});
`;

export default FloatActiiveComponent;
