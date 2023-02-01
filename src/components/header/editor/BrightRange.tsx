import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface PropsType {
  BrightChange: (e: ChangeEvent<HTMLInputElement>) => void;
  bright: number;
}

function BrightRange({ bright, BrightChange }: PropsType) {
  return (
    <_BrightRange
      value={bright}
      onChange={BrightChange}
      type="range"
      min="50"
      max="100"
    />
  );
}

const _BrightRange = styled.input`
  width: 150px;
  height: 2px;
  color: black;
  outline: 0;
  -webkit-appearance: none;
  background: transparent;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${({ theme }) => theme.draw.optionEvent};
    cursor: pointer;
    border-radius: 10px;
    height: 18px;
    width: 18px;
    margin-top: -8px;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.draw.optionEvent};
    border-radius: 1.3px;
    margin: auto;
  }
`;

export default BrightRange;
