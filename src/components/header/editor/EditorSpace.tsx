import styled from "@emotion/styled";

interface PropsType {
  editName: string;
  children: React.ReactNode;
}
function EditorSpace({ editName, children }: PropsType) {
  return (
    <_Wrapper>
      <_Editor_Name>{editName}</_Editor_Name>
      {children}
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  padding: 0 0 30px 40px;
`;

const _Editor_Name = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  color: ${({theme}) => theme.font.fontcolor};
`;

export default EditorSpace;
