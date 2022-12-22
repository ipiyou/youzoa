import styled from "@emotion/styled";
import { YouZoaIcon } from "../../assets";

function Icon() {
  return (
    <_Wrapper>
      <_Font>YouZoa</_Font> <_Icon />
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  margin-top: 50px;
  color: ${({ theme }) => theme.font.titlecolor};
`;

const _Font = styled.span`
  font-size: 42px;
  margin-left: 50px;
`;

const _Icon = styled(YouZoaIcon)`
  position: absolute;
  rotate: -30deg;
  margin: 5px 0 0 5px;
`;

export default Icon;
