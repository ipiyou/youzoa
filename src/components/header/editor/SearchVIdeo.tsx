import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface PropsType {
  KeyWordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function SearchInput({ KeyWordChange, value }: PropsType) {
  return <_Input_KeyWord value={value} onChange={KeyWordChange} />;
}

const _Input_KeyWord = styled.input``;

export default SearchInput;
