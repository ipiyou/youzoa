import react, { useState } from "react";

interface LocationType {
  x: number;
  y: number;
}

type XYType = [number, number];

const useFloating = (initXY: XYType, minXY: XYType, maxXY: XYType) => {
  const [animation, setAnime] = useState<boolean | null>(null);
  const [location, setLocate] = useState<LocationType>({
    x: initXY[0],
    y: initXY[1],
  });

  const onMouseDown = (fix: react.MouseEvent<SVGElement, MouseEvent>) => {
    let isClick = true;
    const MouseMoved = (flow: MouseEvent) => {
      const x = flow.screenX - fix.screenX + location.x;
      const y = flow.screenY - fix.screenY + location.y;

      isClick = false;
      setLocate({ x, y });
    };

    const RemoveMouseMove = () => {
      document.removeEventListener("mousemove", MouseMoved);
      isClick && setAnime(!animation);
    };

    document.addEventListener("mousemove", MouseMoved);
    document.addEventListener("mouseup", RemoveMouseMove, { once: true });
  };

  return [location, animation, onMouseDown] as const;
};

export default useFloating;
