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
  margin: 50px 0 100px 0;
  color: ${({ theme }) => theme.font.titlecolor};
`;

const _Font = styled.span`
  font-size: 38px;
  margin-left: 30px;
`;

const _Icon = styled(YouZoaIcon)`
  width: 50px;
  position: absolute;
  rotate: -30deg;
  margin: 5px 0 0 5px;
`;

export default Icon;
