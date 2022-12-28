import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

interface PropsType {
  List: string[];
  zIndex: number;
  selected: string;
  SizeChange: (text: string) => void;
}

function SizeSelect({ List, zIndex, selected, SizeChange }: PropsType) {
  const [onOff, Switch] = useState<boolean>(false);
  const ModalonOff = () => Switch(!onOff);
  return (
    <_Wrapper>
      <_Interact index={zIndex}>
        <_ModalButton onClick={ModalonOff}>{selected}</_ModalButton>
        {onOff && (
          <_ListWrapper>
            {List.map((ele, idx) => (
              <_Option key={idx} onClick={() => SizeChange(ele)}>
                {ele}
              </_Option>
            ))}
          </_ListWrapper>
        )}
      </_Interact>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 180px;
  height: 34px;
  font-size: 18px;
`;

const _Interact = styled.div<{ index: number }>`
  width: inherit;
  z-index: ${({ index }) => index};
  position: absolute;
  border-radius: 10px;
  padding: 5px 0;
  box-shadow: 1px 2px 0 rgba(0, 0, 0, 20%);
  background-color: ${({ theme }) => theme.draw.setting};
  color: ${({ theme }) => theme.font.infocolor};
`;

const _ModalButton = styled.button`
  width: inherit;
  padding: 0;
  font-size: inherit;
  border: 0;
  outline: 0;
  background-color: inherit;
  color: inherit;
`;

const _ListWrapper = styled.ul`
  width: inherit;
  list-style-type: none;
  text-align: center;
  padding-top: 10px;
`;

const _Option = styled.li`
  border-radius: 0;
  font-size: inherit;
  cursor: pointer;
  color: inherit;
  :hover {
    background-color: ${({ theme }) => theme.draw.loadcolor};
  }
`;

export default SizeSelect;
