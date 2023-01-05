import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { cloneElement } from "react";
import { SettingType } from "../App";
import useFloating from "../hooks/useFloating";
import { SinglePropsType } from "../pages/SingleVideo";

type ObjectProps<T> = { [pro in keyof T]: T[pro] };
type UserProps<T> = ObjectProps<T>;
type ComponentType<T> = ({ ...T }: ObjectProps<T>) => JSX.Element;

interface ElementPropsType {
  user: SettingType;
  animation: boolean | null;
  onMouseDown: (
    fix: React.MouseEvent<SVGElement | HTMLIFrameElement, MouseEvent>
  ) => void;
}

interface PropsType {
  width?: string;
  height: string;
  initXY: [number, number];
  minXY: [number, number];
  maxXY: [number, number];
  childrenElement: [
    ComponentType<ElementPropsType & Partial<SinglePropsType>>,
    UserProps<{ user: SettingType } & Partial<SinglePropsType>>
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
  return (
    <_Wrapper {...location} {...{ width, height }}>
      <FloatingComponent {...FloatProps} {...{ animation, onMouseDown }} />
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
