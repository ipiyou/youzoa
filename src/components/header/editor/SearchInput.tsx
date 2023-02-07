import styled from "@emotion/styled";
import { ChangeEvent, FormEvent } from "react";
import { SearchIcon } from "../../../assets";

interface PropsType {
  onEnterInput: (e: FormEvent<HTMLFormElement>) => void;
  KeyWordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function SearchInput({ onEnterInput, KeyWordChange, value }: PropsType) {
  return (
    <_EnterForm onSubmit={onEnterInput}>
      <_Input_KeyWord value={value} onChange={KeyWordChange} />
      <_SummitIcon>
        <_Icon />
      </_SummitIcon>
    </_EnterForm>
  );
}

const _EnterForm = styled.form`
  width: 180px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.draw.optionEvent};
  background-color: ${({ theme }) => theme.draw.optionBack};
  border-radius: 5px;
`;

const _Input_KeyWord = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  padding-left: 5px;
  color: ${({ theme }) => theme.font.fontcolor};
  background-color: transparent;
`;

const _SummitIcon = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const _Icon = styled(SearchIcon)`
  width: inherit;
  height: inherit;
  path {
    fill: ${({ theme }) => theme.draw.optionEvent};
  }
`;

export default SearchInput;
