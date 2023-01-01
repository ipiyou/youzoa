import styled from "@emotion/styled";
import { SettingType } from "../App";
import VideoElement from "../components/scrollvideo/VideoElement";

interface PropsType {
  user: SettingType;
}

function ScrollPage(settingValue: PropsType) {
  return (
    <_Wrapper>
      {Array(10)
        .fill(0)
        .map((_) => (
          <VideoElement {...settingValue} />
        ))}
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.draw.scrollTrack};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.draw.scrollBar};
  }
  background-color: ${({ theme }) => theme.draw.background};
  height: 100%;
`;

export default ScrollPage;
