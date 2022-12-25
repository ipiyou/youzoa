import styled from "@emotion/styled";

function BrightRange() {
  return <_BrightRange type="range" min="0" max="100" />;
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
    background: #000000;
    cursor: pointer;
    border-radius: 10px;
    height: 18px;
    width: 18px;
    margin-top: -8px;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    background: #000000;
    border-radius: 1.3px;
    margin: auto;
  }
`;

export default BrightRange;
