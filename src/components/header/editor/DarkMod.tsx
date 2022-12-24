import styled from "@emotion/styled";

interface PropsType {}

function DarkMod() {
  return (
    <_Wrapper>
      <_ModChangeCircle />
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.draw.setting};
  width: 70px;
  height: 35px;
`;

const _ModChangeCircle = styled.div`
  width: 35px;
  height: 100%;
  float: left;
  border-radius: 50px;
  background-color: ${({theme}) => theme.draw.selector}
`;

export default DarkMod;
