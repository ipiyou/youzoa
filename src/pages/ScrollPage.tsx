import styled from "@emotion/styled";
import { SettingType } from "../App";
import VideoElement from "../components/scrollvideo/VideoElement";

interface PropsType {
  user: SettingType;
}

function ScrollPage(props: PropsType) {
  return (
    <_Wrapper>
      <VideoElement {...props} />
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  background-color: ${({ theme }) => theme.draw.background};
  height: 100%;
  margin-left: 250px;
`;

export default ScrollPage;
