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
  const [location, setLocate] = useState<LocationType>({
    x: width,
    y: height,
  });

  const onMouseMoved = (e: MouseEvent) => {
    const { movementX, movementY } = e;
    const { x, y } = location;
    const clientX = x + width;
    const clientY = y + height;
    const widthBrower = window.innerWidth;
    const heightBrower = window.innerHeight;

    const locateObject = { x: x + movementX, y: y + movementY };

    if (movementX + clientX > widthBrower) locateObject.x = widthBrower;
    if (clientX - movementX < width) locateObject.x = width;
    if (movementY + clientY > heightBrower) locateObject.y = heightBrower;
    if (clientX - movementY < height) locateObject.y = height;
    console.log(locateObject);
    setLocate(locateObject);
  };

  const onMouseDown = (fix: react.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const MouseMoved = (flow: MouseEvent) => {
      const x = flow.screenX - fix.screenX + location.x;
      const y = flow.screenY - fix.screenY + location.y;
      console.log(x,y)

      setLocate({ x, y });
    };

    const RemoveMouseMove = () =>
      document.removeEventListener("mousemove", MouseMoved);

    document.addEventListener("mousemove", MouseMoved);
    document.addEventListener("mouseup", RemoveMouseMove, { once: true });
  };

  return [location, onMouseDown] as const;
};

export default useFloating;
