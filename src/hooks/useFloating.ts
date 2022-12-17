import react, { useRef, useEffect, useState } from "react";

interface LocationType {
  x: number;
  y: number;
}

interface PropsType {
  width: number;
  height: number;
}

const useFloating = ({ width, height }: PropsType) => {
  const [openInput, setOpen] = useState<boolean>(false);
  const [location, setLocate] = useState<LocationType>({
    x: width,
    y: height,
  });

  const onMouseDown = (fix: react.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let isClick = true;
    const MouseMoved = (flow: MouseEvent) => {
      const x = flow.screenX - fix.screenX + location.x;
      const y = flow.screenY - fix.screenY + location.y;

      isClick = false;
      setLocate({ x, y });
    };

    const RemoveMouseMove = () => {
      document.removeEventListener("mousemove", MouseMoved);
      isClick && setOpen(!openInput);
    };

    document.addEventListener("mousemove", MouseMoved);
    document.addEventListener("mouseup", RemoveMouseMove, { once: true });
  };

  return [location, openInput, onMouseDown] as const;
};

export default useFloating;
